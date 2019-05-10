import React, { useState } from 'react';
import { connect } from 'react-redux';
import PostText from './PostText';
import PostActivity from './PostActivity';
import PostCode from '../DisplayPost/PostCode';
import FontAwesome from '../FontAwesome';
import { removePost } from '../../redux/actions';
import PostVideo from './PostVideo';

import './Post.scss';

const Post = ({ data, user, author }) => {
  const [expanded, setExpanded] = useState(false);


  const updatedAt = new Intl.DateTimeFormat('es', {
    // weekday: 'narrow' | 'short' | 'long',
    // era: 'narrow' | 'short' | 'long',
    year:  'numeric',
    month: 'short',
    day:  '2-digit',
    hour:  '2-digit',
    minute:  '2-digit',
    // second: 'numeric' | '2-digit',
    // timeZoneName: 'short' | 'long',

    // Time zone to express it in
    // timeZone: 'europe/spain',
    // Force 12-hour or 24-hour
    hour12: false,

    // Rarely-used options
    // hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
    // formatMatcher: 'basic' | 'best fit',
  }).format(new Date(data.updatedAt));
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
      <div className='meta'>
        <div className={`postType ${data.postType}`}>#{data.postType}</div>
        <div className='author'>{author && author.name}</div>
        <div className='updated'>{updatedAt}</div>
        <div className='actions'>{user._id === data.authorId && <FontAwesome onClick={deletePost} icon='trash' family='fas' />}</div>
      </div>

      <h1 className='title'>
        <a href={'#' + data._id} onClick={copyToClipboard}>
          {data.content.title} <FontAwesome className='permalink' icon='link' family='fas' />
        </a>
      </h1>

      {post}
    </div>
  );
};

export default connect(({ user , allUsers}, {data}) => ({ user, author: allUsers.find(u => u._id === data.authorId) }))(Post);
