import React from 'react';
import PostText from './CreatePost/PostText'

//const PostText = ({data}) => <div className='postText'>postText  {JSON.stringify(data)} </div>;
const PostCode = ({data}) => <div className='postCode'>postCode  {JSON.stringify(data)} </div>;
const PostVideo = ({data}) => <div className='postVideo'>postVideo  {JSON.stringify(data)} </div>;
const PostActivity = ({data}) => <div className='postActivity'>postActivity  {JSON.stringify(data)} </div>;

const Post = ({data}) => {
  switch (data.postType) {
    case 'text':
      return <PostText data={data} />;
    case 'code':
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
