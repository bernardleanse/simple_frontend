class PostAPI {
  constructor(){}
  static async fetchAll(){
    const response = await fetch("http://localhost:3001/posts")
    const data = await response.json()
  }
}

export default PostAPI