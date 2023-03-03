import React from 'react'

function UsersPost() {
    const{ posts }= useContext(NewsContext)
    console.log(posts)
  return (
    <div>UsersPost</div>
  )
}

export default UsersPost