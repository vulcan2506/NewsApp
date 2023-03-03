import React from 'react'
import Article from './Article'
type Props ={
    news: NewsResponse;

};
function NewsList({news}:Props) {
  return(
    <main>{news.data.map((article)=>(<Article key={article.title} article={article}/>))}</main>
  )
}

export default NewsList