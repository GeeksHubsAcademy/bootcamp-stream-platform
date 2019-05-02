import React from 'react';

// data = {
// "postType":"activity",
// "authorId": "2",
// "content": {
//         "title":"",
//         "body":"",
//         "repo":""
//     }
// }};


const PostActivity = ({data}) => (

<div className='postActivity'>
Post Activity
    <h3>{data.content.title}</h3>
    <p>{data.content.body}</p>
    <h6>{data.content.url}</h6>
</div>


);


export default PostActivity
