export interface ArticleSection {
  heading: string
  content: string
}

export interface ArticleFAQ {
  question: string
  answer: string
}

export interface Article {
  slug: string
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  sections: ArticleSection[]
  faqs: ArticleFAQ[]
  conclusion: string
  category: "SEO/GEO"
  publishedDate: string
  lastUpdated?: string
  featured?: boolean
}

