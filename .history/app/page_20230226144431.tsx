"use client";
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

 function page() {
    const news: NewsResponse = fetchNews(categories.join(","));
    console.log(news)    
    return (
    <div> 
     
    <div>Global News For You : <NewsList news={news}/></div>
   </div>
  )
}

export default page
