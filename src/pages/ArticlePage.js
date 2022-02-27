import React from 'react'
import { useParams } from 'react-router-dom'
import ArticlesList from '../Components/ArticlesList'
import articleContent from './article-content'
import NotFoundPage from './NotFoundPage'

const ArticlePage = () => {

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { name } = useParams();

  const article = articleContent.find(article => article.name === name)

  if(!article) return <NotFoundPage />

  const otherArticles = articleContent.filter(article => article.name !== name)
  return (
    <>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}
    <h3>Othe articles:</h3>
    <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage