"use client";
import React from 'react'
import { addDoc  } from 'firebase/firestore';
function upload() {
  const addPostToFirebase = async event =>{
    event.preventdefault();
    
  }
  return (
    <div>Start Uploading Your News
      <button  className='hidden md:inline bg-slate-900
                text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full
                dark:bg-slate-800'>Submit</button>
                </div>
  )
}

export default upload