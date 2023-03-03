"use client";
import React, { useContext } from 'react'

import {useNewsContext} from '../context/NewsContext'
import { categories } from '../constants'
import { useState, useEffect } from 'react'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import UsersPost from './UsersPost';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { createContext } from 'react';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)
    const {post} = useNewsContext();
    

  return (
    <div> 
      {post.map(posts=>(<UsersPost posts={posts} key={posts}/>))}
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
