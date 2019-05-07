import React from 'react';
import PostText from './PostText';
import './PostActivity';
import './Post.scss';
import PostActivity from './PostActivity';
import PostCode from '../CreatePost/CreatePostCode/CreatePostCode';
import FontAwesome from '../FontAwesome';
import {removePost} from '../../redux/actions';

// const PostCode = ({data}) => <div className='postCode'>postCode  {JSON.stringify(data)} </div>;
const PostVideo = ({data}) => <div className='postVideo'>postVideo  {JSON.stringify(data)}  </div>;




//const PostActivity = ({data}) => <div className='postActivity'>postActivity  {JSON.stringify(data)} </div>;

const Post = ({data}) => {
  function deletePost() {
    console.log('hola?');

      removePost(data._id);
  }
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
  return (
    <div className='postItem'>
      {post}
      <FontAwesome onClick={deletePost} icon='trash' family='fas' />
    </div>
  );
};

export default Post;
