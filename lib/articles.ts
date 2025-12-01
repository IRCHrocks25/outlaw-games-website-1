import "server-only"

import { Article } from "@/types/article"
import fs from "fs"
import path from "path"

const articlesDirectory = path.join(process.cwd(), "data", "articles")

export function getAllArticles(): Article[] {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(articlesDirectory)
    const articles = fileNames
      .filter((fileName) => fileName.endsWith(".json"))
      .map((fileName) => {
        const filePath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, "utf8")
        return JSON.parse(fileContents) as Article
      })
      .sort((a, b) => {
        // Sort by published date, most recent first
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      })

    return articles
  } catch (error) {
    console.error("Error reading articles:", error)
    return []
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.json`)
    
    if (!fs.existsSync(filePath)) {
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

