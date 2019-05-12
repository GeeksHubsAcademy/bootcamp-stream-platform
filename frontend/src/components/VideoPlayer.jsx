import React from 'react';
import ReactPlayer from 'react-player';
//import './Video.scss'


export default ({url, ...props}) => {

  return <ReactPlayer url={url} width='100%' height='100%' muted controls {...props} />;
};
