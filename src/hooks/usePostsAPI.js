import { useEffect, useState } from "react"
import PostAPI from "../lib/postApi"

const usePostsAPI = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    PostAPI.fetchAll()
    .then(data => setPosts(data))
  }, [])

  return posts
}

export default usePostsAPI