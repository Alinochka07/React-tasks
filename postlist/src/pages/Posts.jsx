import React, {useState, useEffect, useRef, useMemo} from "react";
import PostItem from "../components/PostItem"
import PostList from "../components/PostList";
import "../styles/App.css";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import { useFetching } from "../hooks/useFetching"
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  // const lastElement = useRef();
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  // useObserver(lastElement, page < totalPages, isPostLoading, () => {
  //   setPage(page + 1)
  // })
  
  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }


  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <PostFilter filter={filter} setFilter={setFilter}/>

      {/* <MySelect value={limit} onChange={value => setLimit(value)} defaultValue="Elements on the page"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: 50, name: '50'},
          {value: -1, name: 'All'}
        ]}
      /> */}
      
      {postError &&
        <h1>There had appeared an error: {postError}</h1>
      }

      <PostList posts={sortedAndSearchedPosts} remove={removePost} title={"List of JavaScript Items"}/>
      {/* <div ref={lastElement}></div> */}

      {isPostLoading &&
        <div style={{'display': 'flex', 'justifyContent': 'center', 'marginTop':'20px'}}>
          <Loader/>
        </div>
      }

        <Pagination 
          page={page} 
          totalPages={totalPages} 
          changePage={changePage}
        />
    </div>
  );
}

export default Posts;
