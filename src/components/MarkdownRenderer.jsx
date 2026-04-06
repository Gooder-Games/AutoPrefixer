import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownRenderer = ({ slug }) => {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true)
      try {
        // We'll search in the flat structure first, then guides/reference folders
        const paths = [
          `/content/${slug}.md`,
          `/content/${slug}.mdx`,
          `/content/guides/${slug}.md`,
          `/content/reference/${slug}.md`
        ]

        let found = false
        for (const path of paths) {
          const response = await fetch(path)
          if (response.ok) {
            const text = await response.text()
            // Strip frontmatter
            const cleanText = text.replace(/^---[\s\S]*?---\n/, '')
            setContent(cleanText)
            found = true
            break
          }
        }
        
        if (!found) setContent('# 404\nPage not found.')
      } catch (err) {
        setContent('# Error\nFailed to load content.')
      }
      setIsLoading(false)
    }

    fetchContent()
  }, [slug])

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-slate-800 rounded w-1/3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-800 rounded w-full"></div>
          <div className="h-4 bg-slate-800 rounded w-5/6"></div>
          <div className="h-4 bg-slate-800 rounded w-full"></div>
        </div>
      </div>
    )
  }

  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  )
}

export default MarkdownRenderer
