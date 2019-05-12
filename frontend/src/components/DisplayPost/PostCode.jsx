import React, { Component } from 'react';

import Highlight from 'react-highlight';

import './PostCode.scss';

class CreatePostCode extends Component {
  render() {
    return (
      <div className='CreatePostCode'>
        <Highlight>{this.props.data.content.body}</Highlight>
      </div>
    );
  }
}

export default CreatePostCode;
