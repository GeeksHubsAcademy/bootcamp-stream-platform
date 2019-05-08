import React from 'react';
import { connect } from 'react-redux';

import PostText from './PostText';
import PostActivity from './PostActivity';
import PostCode from '../DisplayPost/PostCode';
import FontAwesome from '../FontAwesome';
import {removePost} from '../../redux/actions';
import PostVideo from './Reproductor'

import './Post.scss';


const Post = ({data, user}) =>  {

  function deletePost() {

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
      {user._id === data.authorId && <FontAwesome onClick={deletePost} icon='trash' family='fas' />}
    </div>
  );
};

export default connect(({user}) => ({user}))(Post);
