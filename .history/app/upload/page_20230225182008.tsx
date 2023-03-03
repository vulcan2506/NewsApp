"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
function page() {

  return (
    <div>
        <header>
           <div className='flex flex-1 flex-cols items-center font-serif shadow-sm spce-x-4 '>Post Your News</div> 
            </header>
        <footer><button onClick={postTo} className=' flex flex-1 item-center bg-slate-900
                text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full
                dark:bg-slate-800'><Link href={'/'}>Submit Now </Link></button>
                </footer></div>
  )
}

export default page