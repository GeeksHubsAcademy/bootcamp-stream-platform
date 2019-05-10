import React from 'react';
import UrlPreview from '../UrlPreview';

const PostActivity = ({ data }) => (
  <div className='postActivity'>
    <UrlPreview url={data.content.body}   />
  </div>
);


export default PostActivity
