import React, { useContext } from 'react'
import { PostsContext } from '../context/postContext'
import Post from './Post'

const PostsContainer = () => {

  const { posts } = useContext(PostsContext)

  return (
    <div>
      This is the post container
      { posts.map(post => <Post key={post.id} data={post}/>) }
    </div>
  )
}

export default PostsContainer