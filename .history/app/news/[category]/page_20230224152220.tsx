import React from 'react'
import NewsList from '../../NewsList'
import fetchNews from '../../../lib/fetchNews'
type Props ={
    params:{category:Category}
}
async function page({params:{category}}:Props) {
    const news: NewsResponse = await fetchNews(category);
  return (
    <div>{category}</div>
  )
}

export default page