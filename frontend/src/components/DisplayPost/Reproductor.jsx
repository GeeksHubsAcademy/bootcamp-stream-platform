import React from 'react';
import { Player } from 'video-react';
//import './Video.scss'
import "../../../node_modules/video-react/dist/video-react.css";


export default props => {

  return (
    
    <Player>
      {console.log(props.data.content.url)}
      <source src={props.data.content.url} />
     
    </Player>
  );
};

