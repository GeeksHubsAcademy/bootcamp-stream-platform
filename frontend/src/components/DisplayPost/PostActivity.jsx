import React from 'react';
import UrlPreview from '../UrlPreview';
import UrlPreviewInIframe from '../UrlPreviewInIframe';
import './PostActivity.scss'
const PostActivity = ({ data }) => <UrlPreview url={data} />

export default PostActivity
