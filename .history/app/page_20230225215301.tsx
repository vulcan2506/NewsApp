import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)

  return (
    <div> Posts by our users</div>
    <div><NewsList news={news}/></div>
  )
}

export default page
