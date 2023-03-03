import React from 'react'
import

function UsersPost() {
  return (
    <div>{posts.map((posts=>(<UsersPost posts={posts} key={posts.id}/>)))}</div>
  )
}

export default UsersPost