
import React, { useContext, useState } from 'react'
import { NewsContext } from '../context/NewsContext'

function UsersPost() {
    const [posts , setPosts]  = useState()
    console.log(posts)
  return (
    <div>{posts}</div>
  )
}

export default UsersPost