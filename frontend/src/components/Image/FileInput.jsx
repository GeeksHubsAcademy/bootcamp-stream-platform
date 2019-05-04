
import React, { Component} from 'react';
import { connect } from 'react-redux';

// edit button
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import Avatar from './Avatar';

// image path
var apiImageUrl = "http://localhost:3001/uploads/profilePics/";

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // input type field is uncontrolled field, we need create a Ref
    this.fileInput = React.createRef();
  }

  state = {   
    disabled: true,
    file: '',
    imagePreviewUrl: apiImageUrl + this.props.user.imagePath,
  };

  handleSubmit(e) {
    e.preventDefault();

    // preview
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    if (file) {
      reader.readAsDataURL(file);
      }

    // send image
    const image  = this.fileInput.current.files[0]
    this.props.onChange(image);
    //URL.revokeObjectURL(urlGenerated) 
    // to change color
    this.setState({ disabled: false });
  }

  render() {

    let {imagePreviewUrl} = this.state;

    return (
     
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          >
       
          <Avatar name={this.props.name} src={ imagePreviewUrl} />
         
          <input
            className="inputButton"
            accept="image/*"
            id="contained-button-file"
            type="file"
            ref={this.fileInput} 
            onChange={this.handleSubmit} 
            name='file-input'
          />  

          <label htmlFor="contained-button-file">
            <Tooltip title="Edit your photo" aria-label="Photo">
              {/* IMPORTANT component="span" to input file */}
              <Fab component="span"
                    color={ !!this.state.disabled ? 'primary' : 'secondary'}>
                <Icon>image_icon</Icon>
              </Fab>
            </Tooltip>
          </label>
        </Grid>

    );
  }
}

//export default FileInput;
export default connect(state => ({ user: state.user }))(FileInput);