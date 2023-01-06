import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        // const newPost = {
        //   id: Date.now(),
        //   title,
        //   body
        // }
        // console.log(newPost);
        // setPosts([...posts, {...post, id: Date.now()}]);
        // setTitle('');
        // setBody('');
        create(newPost)
        setPost({title: '', body: ''})
    
        // console.log(title);
        // console.log(body);
        // console.log(bodyInputRef.current.value)
      }

    return (
        // Управляемый компонент 
        <form className="myForm">
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text' 
                placeholder='Post title'/>

            <MyInput 
                value={post.body}
                // onChange={e => setBody(e.target.value)}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text' 
                placeholder='Post description'/>

        {/* Неуправляемый компонент / неконтролируемый */}
        {/* <input ref={bodyInputRef}></input> */}
         {/* <MyInput 
          ref={bodyInputRef}
          type='text' 
          placeholder='Post description'
        /> */}
            <MyButton onClick={addNewPost}>Create a post</MyButton>
        </form>
    );
};

export default PostForm;

