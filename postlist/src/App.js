import React, {useState, useRef, useMemo} from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Z is not my friend."},
    {id: 2, title: "Python", body: "What do you think?"},
    {id: 3, title: "C#", body: "Do you like coffee?"},
    {id: 4, title: "Angular", body: "This programming language is..."}
  ])
 
  const [filter, setFilter] = useState({sort: '', query: ''});

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("Otrabotala")
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      {/* <hr style={{'margin': '15px 0'}}></hr> */}
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
        ? <PostList posts={sortedAndSearchedPosts} remove={removePost} title={"List of JavaScript Items"}/>
        : <h3 style={{'textAlign': 'center'}}>There are no posts in this post-list...</h3>
      }
    </div>
  );
}

export default App;
