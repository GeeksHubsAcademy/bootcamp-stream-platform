import React from 'react';
import ReactPlayer from 'react-player';
//import './Video.scss'


export default url => {

  return <ReactPlayer url={url} playing />;
};
