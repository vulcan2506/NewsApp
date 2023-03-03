import React, { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'

function UsersPost() {
    const [posts , setPosts]  = useContext(NewsContext)
    console.log(posts)
  return (
    <div>{posts}</div>
  )
}

export default UsersPost