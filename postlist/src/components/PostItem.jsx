import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';


const PostItem = (props) => {

    const navigate = useNavigate();

    return (
        <div className='posts'>
            <div className='myPostCard'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <p style={{'paddingRight': '5px'}}>{props.post.body}</p>
            </div>
            <MyButton style={{'backgroundColor': 'orange', 'marginRight': '10px'}} 
                onClick={() => navigate(`/posts/${props.post.id}`)}
                >Show</MyButton>

            <MyButton style={{'backgroundColor': 'red'}} 
                onClick={() => props.remove(props.post)}
                >Delete</MyButton>
            
        </div>
    );
};

export default PostItem;