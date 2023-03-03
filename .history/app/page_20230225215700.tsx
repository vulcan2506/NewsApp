import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import UsersPost from './UsersPost';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)
   
  return (
    <div> 
      Posts By Our Users : <UsersPost/>
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
