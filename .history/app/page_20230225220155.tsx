"use client";
import React from 'react'
import { categories } from '../constants'
import { useState, useEffect } from 'react'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import UsersPost from './UsersPost';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)
    const[post , setPost] = useState('')
  return (
    <div> 
      Posts By Our Users : {post.map(items)=>{<UsersPost/>}
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
