import React, {useRef} from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({posts, title, remove}) => {
    

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem number={index + 1} remove={remove} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;