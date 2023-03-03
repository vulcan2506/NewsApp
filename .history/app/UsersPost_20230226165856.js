'use client'
import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../context/NewsContext'
import { db } from '../firebase'
import UserPage from '../app/UserPage'

function UsersPost() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const getPosts = async() => {
        const querySnapshot = await getDocs(collection(db,'Posts'))
        setPosts(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                data:{
                    title:doc.data().title,
                    imgage
                    description:doc.data().description,
                } } 
         }))
        }
        getPosts() 
   },[])
  return (
    <div>
      <UserPage/>
      {posts.map(post=>(<UserPage post={post} key={post.id}/>))}
    </div>
  )
}

export default UsersPost