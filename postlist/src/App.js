import React, {useState, useRef} from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {id: 2, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {id: 3, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ])


  // Когда немного хуков. Но если например будет много полей, то лучше использовать выше пример.
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const bodyInputRef = useRef(); используется при неуправляемом компоненте

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>

      {posts.length
        ? <PostList posts={posts} remove={removePost} title={"List of JavaScript Items"}/>
        : <h3 style={{'textAlign': 'center'}}>There are no posts in this post-list...</h3>
      }
    </div>
  );
}

export default App;
