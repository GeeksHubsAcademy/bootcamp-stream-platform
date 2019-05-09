import React from 'react';

import Player from '../Reproductor'
const PostVideo = ({ data }) => {
    return (
      <div className='postVideo'>
         <h1>{data.content.title}</h1>
        <Player url={data.content.body} />
      </div>
    );
}

export default PostVideo;