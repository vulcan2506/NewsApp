'use client'
import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../context/NewsContext'
import { db } from '../firebase'

function UsersPost() {
  const{posts}= useContext(NewsContext)
  console.log(posts, 'users')
  return (
    <div>
      News By 
    </div>
  )
}

export default UsersPost