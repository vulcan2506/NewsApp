import React, { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'

function UsersPost() {
    const{ posts }= useContext(NewsContext)
    console.log(posts)
  return (
    <div> const{ posts }= useContext(NewsContext)
    console.log(posts)</div>
  )
}

export default UsersPost