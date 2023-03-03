import React from 'react'
import NewsList from '../../NewsList'
import fetchNews from '../../../lib/fetchNews'
type Props ={
    params:{category:Category}
}
async function page({params:{category}}:Props) {
    const news: NewsResponse = await fetchNews(category);
  return (
    <div><h1 className='text-lg'>{category}</h1>
    <NewsList news={news}/></div>
  )
}

export default page