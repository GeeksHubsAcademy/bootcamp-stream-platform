import React from 'react';

// data = {
// "postType":"activity",
// "authorId": "2",
// "content": {
//     "activity":{
//         "title":"",
//         "body":"",
//         "repo":""
//     }
// }};


const PostActivity = ({data}) => (

<div className='postActivity'>
Post Activity
    <h3>{content.title}</h3>
    <p>{content.body}</p>
    <h6>{content.url}</h6>
</div>


);


export default PostActivity
