import React from "react";
import PostListItem from '../post-list-item'

import './post-list.css'

const PostList = () => {
    return(
        <div>
            <ul>
                <PostListItem/>
                <PostListItem/>
                <PostListItem/>
            </ul>
        </div>
    )
}

export default PostList;