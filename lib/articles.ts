import "server-only"

import { Article } from "@/types/article"
import fs from "fs"
import path from "path"

const articlesDirectory = path.join(process.cwd(), "data", "articles")

function readArticlesFromDirectory(dirPath: string): Article[] {
  const articles: Article[] = []

  try {
    if (!fs.existsSync(dirPath)) {
      return articles
    }

    const items = fs.readdirSync(dirPath)

    items.forEach((item) => {
      const itemPath = path.join(dirPath, item)
      const stat = fs.statSync(itemPath)

      if (stat.isDirectory()) {
        // Recursively read from subdirectories (month folders)
        articles.push(...readArticlesFromDirectory(itemPath))
      } else if (stat.isFile() && item.endsWith(".json")) {
        // Read article file
        try {
          const fileContents = fs.readFileSync(itemPath, "utf8")
          const article = JSON.parse(fileContents) as Article
          articles.push(article)
        } catch (fileError) {
          console.error(`Error reading article file ${itemPath}:`, fileError)
        }
      }
    })

    return articles
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error)
    return articles
  }
}

export function getAllArticles(): Article[] {
  try {
    const articles = readArticlesFromDirectory(articlesDirectory)

    return articles.sort((a, b) => {
      // Sort by published date, most recent first
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
  } catch (error) {
    console.error("Error reading articles:", error)
    return []
  }
}

function findArticleFile(dirPath: string, slug: string): string | null {
  try {
    if (!fs.existsSync(dirPath)) {
      return null
    }

    const items = fs.readdirSync(dirPath)

    for (const item of items) {
      const itemPath = path.join(dirPath, item)
      const stat = fs.statSync(itemPath)

      if (stat.isDirectory()) {
        // Recursively search in subdirectories
        const found = findArticleFile(itemPath, slug)
        if (found) return found
      } else if (stat.isFile() && item === `${slug}.json`) {
        return itemPath
      }
    }

    return null
  } catch (error) {
    console.error(`Error searching for article ${slug}:`, error)
    return null
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const filePath = findArticleFile(articlesDirectory, slug)

    if (!filePath) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    return JSON.parse(fileContents) as Article
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getFeaturedArticles(limit: number = 3): Article[] {
  const allArticles = getAllArticles()
  return allArticles
    .filter((article) => article.featured === true)
    .slice(0, limit)
}

export function getRecentArticles(limit: number = 6): Article[] {
  const allArticles = getAllArticles()
  return allArticles.slice(0, limit)
}

export function getAllArticleSlugs(): string[] {
  const articles = getAllArticles()
  return articles.map((article) => article.slug)
}

export function getArticleUrl(slug: string): string {
  return `/articles/${slug}`
}
