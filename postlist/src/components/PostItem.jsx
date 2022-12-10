import React, {useState} from 'react';


const PostItem = (props) => {

    return (
        <div className='posts'>
            <div className='myPostCard'>
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <button className='deleteBtn'>Delete</button>
        </div>
    );
};

export default PostItem;