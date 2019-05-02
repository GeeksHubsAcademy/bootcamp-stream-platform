import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import './Avatar.scss';

class ImageAvatars extends Component {

  render( props) {

    return (
          <Avatar alt={this.props.altFromParent}  
            src={this.props.srcFromParent}      
            className="bigAvatar"
            onChange={this.handleSubmit} 
            />
    );
  }
}

export default ImageAvatars;

