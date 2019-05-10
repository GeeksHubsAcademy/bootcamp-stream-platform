import React from 'react';
import Microlink from '@microlink/react';

const PostActivity = ({ data }) => (
  <div className='postActivity'>
    <Microlink url={data.content.body} />
  </div>
);


export default PostActivity
