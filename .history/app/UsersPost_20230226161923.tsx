import React, { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'

function UsersPost() {
    const [posts , setPosts]  = useState(NewsContext)
    console.log(posts)
  return (
    <div>{posts}</div>
  )
}

export default UsersPost