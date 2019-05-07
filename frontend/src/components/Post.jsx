import React from 'react';
import PostText from './CreatePost/PostText';
import './CreatePost/PostActivity';
import './Post.scss';
import PostActivity from './CreatePost/PostActivity';
import PostCode from './CreatePost/CreatePostCode/CreatePostCode';

// const PostCode = ({data}) => <div className='postCode'>postCode  {JSON.stringify(data)} </div>;
const PostVideo = ({data}) => <div className='postVideo'>postVideo  {JSON.stringify(data)}  </div>;




//const PostActivity = ({data}) => <div className='postActivity'>postActivity  {JSON.stringify(data)} </div>;

const Post = ({data}) => {
  let post;
  switch (data.postType) {
    case 'text':
      post = <PostText data={data} />;
      break;
    case 'code':
      post = <PostCode data={data} key={data.authorId} />;
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
  return <div className='postItem'>{post}</div>;
};

export default Post;
