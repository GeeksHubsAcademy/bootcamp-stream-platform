import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Post.scss';

import { removePost } from '../../redux/actions';
import { copyToClipboard } from '../../Utils/clipboard';

import FontAwesome from '../FontAwesome';
import DateDisplay from '../DateDisplay';
import UrlPreviewInIframe from '../UrlPreviewInIframe';
import PostText from './PostText';
import PostCode from '../DisplayPost/PostCode';
import PostVideo from '../DisplayPost/PostVideo';

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
    try {
      await copyToClipboard(targetNode.href);
      await targetNode.scrollIntoView({
        block: "start",
        behavior: 'smooth',
      });
      // window.scrollBy(0, -10);;
      // alert('PERMALINK COPIED TO CLIPBOARD');
    } catch (error) {
      console.error(error);
    }
  }
  const { body, url, title } = data.content;
  let _body;
  switch (data.postType) {
    case 'code':
      _body = <PostCode data={body} />;
      break;
    case 'video':
      _body = <PostVideo data={body || url} />;
      break;

    default:
      _body = <PostText data={body} />;
  }  return (
    <div className={'postItem ' + (expanded ? 'expanded' : '')} onClick={() => setExpanded(!expanded)} >
      <div className='id' id={data._id}></div>
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
          {title} <FontAwesome className='permalink' icon='link' family='fas' />
        </a>
      </h1>

      { url && <div className="url">
        <a href={url}>{url}</a>
        <UrlPreviewInIframe to={url} />

      </div>}
      <div className="body">
        {_body}
      </div>

    </div>
  );
};

export default connect(({ user, allUsers }, { data }) => ({ user, author: allUsers.find(u => u._id === data.authorId) }))(Post);
