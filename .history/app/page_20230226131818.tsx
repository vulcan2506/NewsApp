"use client";
import React, { useContext } from 'react'
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

    const[post,setPost] = useState([]);
    
    useEffect(()=>{
        const getPost = async () =>{
        await getDocs(collection(db,'Posts'))
        setPost(docs.map(doc =>{
            return{
               id: doc.id,
               data:{
                   title:doc.data().title,
                   image:doc.data().image,
                   description: doc.data().description,
                   body:doc.data().body,
                  
       
               }}
               
        }))
        getPost();
   }})

  return (
    <div> 
      {post.map(posts=>(<UsersPost posts={posts} key={posts}/>))}
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
