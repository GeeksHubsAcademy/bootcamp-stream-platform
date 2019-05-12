import React from 'react';
import UrlPreview from '../UrlPreview';
import UrlPreviewInIframe from '../UrlPreviewInIframe';
import './PostActivity.scss'
const PostActivity = ({ data }) => (
  <div className='postActivity'>
    <UrlPreviewInIframe to={data.content.body}>{data.content.body}</UrlPreviewInIframe>
    <UrlPreview url={data.content.body} />
  </div>
);


export default PostActivity
