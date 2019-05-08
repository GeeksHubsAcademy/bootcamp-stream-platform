import React, { Component } from 'react';

import Highlight from 'react-highlight';

import './PostCode.scss';

class CreatePostCode extends Component {
  state = {
    text: '',
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  render() {
    return (
      <div className='CreatePostCode'>
        <Highlight>{this.props.data.content.body}</Highlight>
      </div>
    );
  }
}
// const mapStateToProps = ({ undefined}) => ({ undefined});
// const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CreatePostCode);

export default CreatePostCode;
