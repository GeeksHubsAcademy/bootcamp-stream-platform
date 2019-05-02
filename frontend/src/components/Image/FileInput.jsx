
import React, { Component } from 'react';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const image  = this.fileInput.current.files[0]
    //console.log('Data to save:', image);
    this.props.onChange(image)
  }

  render() {
    return (
      <label>
          Upload file:
          <input type="file" ref={this.fileInput} onChange={this.handleSubmit} name='file-input' />
        </label>
    );
  }
}

export default FileInput;