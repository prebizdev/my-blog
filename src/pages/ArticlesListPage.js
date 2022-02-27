import React from 'react'
import ArticlesList from '../Components/ArticlesList';
import articleContent from './article-content'

const ArticlesListPage = () => {
  return (
    <>
    <h1>Article</h1>
      <ArticlesList articles={articleContent} />
    </>
  )
}

export default ArticlesListPage