import React from 'react';
import { Player } from 'video-react';
import './Video.scss'


export default props => {



  return (
    
    <Player>
      
  
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      {/* src={props.url} */}
      {/* src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" */}
      {/* http://img.youtube.com/JZ_BrikVJ5M?feature=player_detailpage&rel=0 */}
      
    </Player>
  );
};

