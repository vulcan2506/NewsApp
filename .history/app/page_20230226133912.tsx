"use client";
import React, { useContext } from 'react'
import { categories } from '../constants'
import { useState, useEffect } from 'react'
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import UsersPost from './UsersPost';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';

async function page() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    console.log(news)    
    return (
    <div> 
     
    <div>Global News For You : <NewsList news={news}/></div>
   </div>
  )
}

export default page
