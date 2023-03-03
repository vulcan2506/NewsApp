'use client'
import { collection, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../context/NewsContext'
import { db } from '../firebase'

function UsersPost() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const getPosts = async() => {
        const querySnapshot = await getDocs(collection(db,'Posts'))
        setPosts(querySnapshot.docs.map(doc => {

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
         }))
        }
        getPosts() 
   },[])
  return (
    <div>
      {}
    </div>
  )
}

export default UsersPost