import React from 'react'
type Props = {article:Article}

function Article({article}:Props) {
  return (
    <article>{article.image && (
        <img src={article.image}alt={article.image}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"/>
        
    )}
    <div className='flex-1 flex flex-col '>
        <div className='flex-1 flex flex-col p-5'>
            <h2>{article.title}</h2>
            <section><p>{article.description}</p></section>
            <footer><p>{article.source}</p><p>{article.published_at}</p></footer>
        </div>
    </div>
    </article>
  )
}

export default Article