'use client'
import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../context/NewsContext'
import { db } from '../firebase'
import UserPage from '../app/UserPage'

function UsersPost({post}) {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const getPosts = async() => {
        const querySnapshot = await getDocs(collection(db,'Posts'))
        setPosts(querySnapshot.docs.map(doc => {

            return{
                id: doc.id,
                data:{
                    title:doc.data().title,
                    image:doc.data().image,
                    description:doc.data().description,
                } } 
         }))
        }
        getPosts() 
   },[post])
  return (
    <div>
    <article className='bg-slate-100 dark:bg-slate-800 flex flex-col
    rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all
    duration-200 ease-out
    '>{post.data.image && (
        <img src={post.data.image}alt={post.data.image}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"/>
        
    )}
    <div className='flex-1 flex flex-col '>
        <div className='flex-1 flex flex-col p-5'>
            <h2 className='font-bold font-serif'>{post.data.title}</h2>
            <section className='mt-2 flex-1'><p className='text-xs line-clamp-6'>{post.data.description}</p></section>
        </div>
    </div>
    
    </article>
    </div>
  )
}

export default UsersPost