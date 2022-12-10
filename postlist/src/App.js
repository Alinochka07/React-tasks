import React, {useState, useRef} from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {id: 2, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {id: 3, title: "JavaScript", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ])
  const [posts2, setPost2] = useState([
    {id: 1, title: "Python", body: "Some text here..."},
    {id: 2, title: "Python", body: "Some text here..."},
    {id: 3, title: "Python", body: "Some text here..."}
  ])

  const [post, setPost] = useState({title: '', body: ''})

  // Когда немного хуков. Но если например будет много полей, то лучше использовать выше пример.
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const bodyInputRef = useRef(); используется при неуправляемом компоненте

  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    // console.log(newPost);
    setPosts([...posts, {...post, id: Date.now()}]);
    // setTitle('');
    // setBody('');
    setPost({title: '', body: ''})

    // console.log(title);
    // console.log(body);
    // console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      {/* Управляемый компонент */}
      <form className="myForm">
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Post title'
        />

        <MyInput 
          value={post.body}
          // onChange={e => setBody(e.target.value)}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Post description'
        />

        {/* Неуправляемый компонент / неконтролируемый */}
        {/* <input ref={bodyInputRef}></input> */}
         {/* <MyInput 
          ref={bodyInputRef}
          type='text' 
          placeholder='Post description'
        /> */}
          <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>

      
      <PostList posts={posts} title={"List of JavaScript Items"}/>
      {/* <PostList posts={posts2} title={"List of Python Items"}/> */}
    </div>
  );
}

export default App;
