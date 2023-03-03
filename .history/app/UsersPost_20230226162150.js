'use client'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../context/NewsContext'

function UsersPost() {
    const [posts , setPosts]  = useState()
    console.log(posts)
  return (
    <div>useEffect(() => {
      const getAcRepairIssues = async() => {
          const querySnapshot = await getDocs(collection(db,'AcRepair'))
          setAcRepair(querySnapshot.docs.map(doc => {
  
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
          getAcRepairIssues() 
     },[])</div>
  )
}

export default UsersPost