import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import "../styles/App.css";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostByID, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(params.id)
        setPost(response.data);
    })

    const [fetchCommentsById, isCommentLoading, err] = useFetching(async (id) => {
        const resp = await PostService.getCommentsById(params.id)
        setComments(resp.data);
    })

    useEffect(() => {
        fetchPostByID(params.id);
        fetchCommentsById(params.id)
    }, [])
    
    return (
        <div className='post-page'>
            {/* <h1>You are about to see the details of this post ID: {params.id}</h1> */}
            {isLoading ? <Loader/> :
                <div>
                    <h2>{post.id}. {post.title}</h2>
                </div>
            }
            <h3>Comments</h3>

            {isCommentLoading ? <h3>Loading...</h3> :
                <div className='comments'>
                    {comments.map(comment => 
                        <div className='comment' key={comment.id}>
                            <div className='header-text'>
                                <h4>{comment.id}. {comment.name}</h4>
                                <h4>{comment.email}</h4>
                            </div>
                            <div className='comment-body'>
                                <p>{comment.body}</p>
                            </div>
                        </div>)}
                </div>
            }
        </div>
    );
};

export default PostIdPage;