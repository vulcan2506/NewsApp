"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { addDoc, collection, doc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
function page() {

    const [title,setTitle]=useState()
    const [image,setImage]=useState()
    
    const [body,setBody]=useState()

    const [post,setPost] = useState([]);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const postTofirebase = async() => {
            const querySnapshot = await getDocs(collection(db,'Posts'))
            setPost(querySnapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    data:{
                        title:doc.data().title,
                        image:doc.data().image,
                        desc:doc.data().desc,
                    } } 
             }))
            }
            postTofirebase() 
       },[])

       const postTofirebase = async event =>{
        event.preventDefault()
        await addDoc(collection(db,'Posts'),{
          title:String(title),
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