"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { addDoc, collection, doc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useRouter } from 'next/navigation';
function page() {
     const router  = useRouter();
    const [title,setTitle]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [body,setBody]=useState('')

       const postTofirebase = async (e)=>{
        e.preventDefault()
        await addDoc(collection(db,'Posts'),{
          title:String(title),
          image:
          description:String(description),
          body:String(body),
           
        })
        router.push('/')
      }
  return (
    <div>
        <header>
           <div className='flex flex-1 flex-cols items-center font-serif shadow-sm spce-x-4 '>Post Your News</div> 
            </header>
        <footer><button onClick={postTofirebase} className=' flex flex-1 item-center bg-slate-900
                text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full
                dark:bg-slate-800'>Submit Now </button>
                </footer></div>
  )
}

export default page