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
    <h3>{data.content.activity.title}</h3>
    <p>{data.content.activity.body}</p>
    <h6>{data.content.activity.repo}</h6>
</div>


);


export default PostActivity
