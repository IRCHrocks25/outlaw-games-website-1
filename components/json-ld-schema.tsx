import { Article } from "@/types/article"

interface JsonLdSchemaProps {
  article: Article
}

export function JsonLdSchema({ article }: JsonLdSchemaProps) {
  const baseUrl = "https://www.outlawgames.app"
  const articleUrl = `${baseUrl}/articles/${article.slug}`

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

