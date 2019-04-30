import React from 'react';
import './PostText.scss'

const PostText = ({ data }) => {

    return (
        <div className='postText'>postText  {JSON.stringify(data)} </div>
    )
}

export default PostText;