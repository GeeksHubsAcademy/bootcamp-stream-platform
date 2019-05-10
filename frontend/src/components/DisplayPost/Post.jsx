import React, { useState } from 'react';
import { connect } from 'react-redux';
import PostText from './PostText';
import PostActivity from './PostActivity';
import PostCode from '../DisplayPost/PostCode';
import FontAwesome from '../FontAwesome';
import { removePost } from '../../redux/actions';
import PostVideo from './PostVideo';

import './Post.scss';

const Post = ({ data, user }) => {
  const [expanded, setExpanded] = useState(false);
  function deletePost() {
    removePost(data._id);
  }
  function copyToClipboard() {
   // TODO
   // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
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
    <div className={'postItem ' + (expanded ? 'expanded' : '')} onClick={() => setExpanded(!expanded)} id={data._id}>
      <div className='actions'>{user._id === data.authorId && <FontAwesome onClick={deletePost} icon='trash' family='fas' />}</div>

      <h1>
        <a href={'./#' + data._id} className='title' onClick={copyToClipboard}>
          {data.content.title} <FontAwesome className='permalink' icon='link' family='fas' />
        </a>
      </h1>

      {post}
    </div>
  );
};

export default connect(({ user }) => ({ user }))(Post);
