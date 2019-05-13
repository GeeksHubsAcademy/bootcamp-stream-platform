import React, { useState } from 'react';
import { connect } from 'react-redux';
import PostText from './PostText';
import PostActivity from './PostActivity';
import PostCode from '../DisplayPost/PostCode';
import FontAwesome from '../FontAwesome';
import { removePost } from '../../redux/actions';
import PostVideo from './PostVideo';
import { copyToClipboard } from '../../Utils/clipboard';
import './Post.scss';
import DateDisplay from '../DateDisplay';

const Post = ({ data, user, author }) => {
  const [expanded, setExpanded] = useState(false);

  function deletePost() {
    removePost(data._id);
  }
  async function onPermalink(ev) {
    ev.preventDefault();
    const targetNode = ev.target.parentNode;
    // TODO
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
    console.log(targetNode);

    try {
      await copyToClipboard(targetNode.href);
      targetNode.scrollIntoView({
        behavior: 'smooth',
      });
      alert('PERMALINK COPIED TO CLIPBOARD');
    } catch (error) {
      console.error(error);
    }
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
      post = <pre className='AnyPostType'>{JSON.stringify(data)}</pre>;
  }
  return (
    <div className={'postItem ' + (expanded ? 'expanded' : '')} onClick={() => setExpanded(!expanded)} id={data._id}>
      <div className='meta'>
        <div className={`postType ${data.postType}`}>#{data.postType}</div>
        <div className='author'>{author && author.name}</div>
        <DateDisplay date={data.updatedAt} />
        <div className='post-actions'>
          {/* <a href='https://slack.com/app_redirect?channel=GGFGNDAG6' target='_blank'>
            <FontAwesome icon='comment' />
          </a> */}

          {user._id === data.authorId && <FontAwesome onClick={deletePost} icon='trash' family='fas' />}
        </div>
      </div>

      <h1 className='title'>
        <a href={'#' + data._id} onClick={onPermalink}>
          {data.content.title} <FontAwesome className='permalink' icon='link' family='fas' />
        </a>
      </h1>

      {post}
    </div>
  );
};

export default connect(({ user, allUsers }, { data }) => ({ user, author: allUsers.find(u => u._id === data.authorId) }))(Post);
