import React from 'react';

const PostActivity = ({data}) => (

<div className='postActivity'>
Post Activity
    <h3>{data.content.title}</h3>
    <p>{data.content.body}</p>
    <h6>{data.content.url}</h6>
</div>


);


export default PostActivity
