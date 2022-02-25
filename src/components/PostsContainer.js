import React from 'react'
import usePostsAPI from '../hooks/usePostsAPI'
import Post from './Post'

const PostsContainer = () => {

  // what if i want this state in different places, can I store in a hook?
  // I know i could context it.
  const posts = usePostsAPI()
  
  return (
    <>
     This is the post container
     {posts.map(post => <Post data={post} />)}
    </>
  )
}

export default PostsContainer