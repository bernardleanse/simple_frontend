import React, { useEffect, useState } from 'react'
import PostAPI from '../lib/postApi'
import Post from './Post'


const PostsContainer = () => {

  useEffect(() => {

    PostAPI.fetchAll()
    .then(data => setPosts(data))

  }, [])

  const [posts, setPosts] = useState([])

  return (
    <>
     This is the post container
     {posts.map(post => <Post data={post} />)}
    </>
  )
}

export default PostsContainer