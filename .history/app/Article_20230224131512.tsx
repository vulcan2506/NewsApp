import React from 'react'
type Props = {article:Article}

function Article({article}:Props) {
  return (
    <article>{article.image && (
        <img src={article.image}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"/>
    )}</article>
  )
}

export default Article