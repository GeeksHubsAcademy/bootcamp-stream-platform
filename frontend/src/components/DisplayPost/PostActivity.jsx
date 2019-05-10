import React from 'react';
import UrlPreview from '../UrlPreview';

const PostActivity = ({ data }) => (
  <div className='postActivity'>
    <h5>{data.content.body}</h5>
    <UrlPreview url={data.content.body} />
  </div>
);


export default PostActivity
