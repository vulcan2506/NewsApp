"use client";
import React from 'react'
import { categories } from '../constants'
import { useState, useEffect } from 'react'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import UsersPost from './UsersPost';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)
    const[post,setPost] = useState();
  return (
    <div> 
      {post?.data.map(post)}
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
