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
    const[post , setPost] = useState('')
    useEffect(() => {
      const getAcRepairIssues = async() => {
          const querySnapshot = await getDocs(collection(db,'AcRepair'))
          setPost.docs.map(doc => {
  
              return{
                  id: doc.id,
                  data:{
                      address:doc.data().address,
                      issue:doc.data().issue,
                      image:doc.data().image,
                      pincode: doc.data().pincode,
                      phoneno:doc.data().phoneno,
                      name:doc.data().name
                  } } 
           })
          }
          getAcRepairIssues() 
     },[])
  return (
    <div> 
        {post.map(post => (
                  <UsersPost post={post} key={post.id}/>
                  ))}
    <div>Global News For You : <NewsList news={news}/></div>
    </div>
  )
}

export default page
