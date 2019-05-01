import React from 'react';
import PostText from './CreatePost/PostText'
import './CreatePost/PostActivity'

//const PostText = ({data}) => <div className='postText'>postText  {JSON.stringify(data)} </div>;
const PostCode = ({data}) => <div className='postCode'>postCode  {JSON.stringify(data)} </div>;
const PostVideo = ({data}) => <div className='postVideo'>postVideo  {JSON.stringify(data)} </div>;
const PostActivity = ({data}) => <div className='postActivity'>postActivity  {JSON.stringify(data)} </div>;

const Post = ({data}) => {
  let post;
  switch (data.postType) {
    case 'text':
      post = <PostText data={data} />;
      break;
    case 'code':
      post = <PostCode data={data} />;
      break;
    case 'video':
      post = <PostVideo data={data} />;
      break;
    case 'activity':
      post = <PostActivity data={data} />;
      break;

    default:
      post = 'no valid postType';
  }
  return <div className='post'>{post}</div>;
};

export default Post;
