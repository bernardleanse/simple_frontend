import PostsContainer from './components/PostsContainer';
import './App.css';
import { PostsContext } from './context/postContext';
import { useEffect, useState } from 'react';
import PostAPI from './lib/postApi'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    PostAPI.fetchAll()
    .then(posts => setPosts(posts))
  }, [])

  return (
    // <PostsContext.Provider value={ posts, setPosts }>
      <div className="App">
        <h1>
          Posts
        </h1>
        <PostsContainer posts={ posts }/>
      </div>
    // </PostsContext.Provider>
  );
}

export default App;
