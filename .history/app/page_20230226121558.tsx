"use client";
import React from 'react'
import News
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
    const[post] = useState();
  return (
    <div> 
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
