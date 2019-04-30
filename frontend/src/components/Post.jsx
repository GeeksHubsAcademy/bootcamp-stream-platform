import React from 'react';

const PostText = () => <div className='postText'>postText</div>;
const PostCode = () => <div className='postCode'>postCode</div>;
const PostVideo = () => <div className='postVideo'>postVideo</div>;
const PostActivity = () => <div className='postActivity'>postActivity</div>;

const Post = ({data}) => {
  switch (data.postType) {
    case 'text':
      return <PostText data={data} />;
    case 'snippet':
      return <PostCode data={data} />;
    case 'video':
      return <PostVideo data={data} />;
    case 'activity':
      return <PostActivity data={data} />;

    default:
      return 'no valid postType';
  }
};

export default Post;
