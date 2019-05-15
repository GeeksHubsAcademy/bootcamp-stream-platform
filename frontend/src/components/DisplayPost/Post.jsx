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
  let body;
  switch (data.postType) {
    case 'code':
      body = <PostCode data={data.content.body} />;
      break;

    default:
      body = <PostText data={data.content.body} />;
  }
  return (
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
          {data.content.title} <FontAwesome className='permalink' icon='link' family='fas' />
        </a>
      </h1>

      {data.content.url && <div className="url">
        <a href={data.content.url}>{data.content.url}</a>
        <UrlPreviewInIframe to={data.content.url}/>

      </div>}
      <div className="body">
        {body}
      </div>

    </div>
  );
};

export default connect(({ user, allUsers }, { data }) => ({ user, author: allUsers.find(u => u._id === data.authorId) }))(Post);
