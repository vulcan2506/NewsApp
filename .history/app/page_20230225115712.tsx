import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import Header from './Header';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)

  return (
    <div><Header/></div>
  )
}

export default page
