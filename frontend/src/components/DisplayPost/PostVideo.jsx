import React from 'react';
import './PostVideo.scss';
import Player from '../VideoPlayer'
const PostVideo = ({ data }) => {
    return (
      <div className='postVideo'>
        <Player className='player' url={data.content.body} muted={false} />
      </div>
    );
}

export default PostVideo;