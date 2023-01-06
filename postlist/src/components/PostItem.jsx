import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {

    return (
        <div className='posts'>
            <div className='myPostCard'>
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <MyButton style={{'backgroundColor': 'red'}} 
            onClick={() => props.remove(props.post)}
            >Delete</MyButton>
        </div>
    );
};

export default PostItem;