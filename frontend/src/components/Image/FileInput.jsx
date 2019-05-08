import React, { Component} from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../../redux/actions';

// edit button
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import Avatar from './Avatar';

// Image path
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
    imagePath: this.props.user.imagePath,
    imagePreviewUrl: apiImageUrl + this.props.user.imagePath,
  };

  handleSubmit(e) {
    e.preventDefault();

    // preview
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imagePath: reader.result,
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
    // to change color
    this.setState({ disabled: false });
  }

  removeImage = () => {

     // send image preview empty
     const image  =  '';
     this.props.onChange(image);
     // to change color

    this.setState(state => ({ 
      imagePath: '',
      file: '',
      imagePreviewUrl: '',      
      disabled: false
    }),()=>{
     // delete image DB
    deleteImage(this.state.imagePath)
        .then(() => this.setState({ successMessage: 'Great! removed photo!' }))
        .catch(e => this.setState({ error: e.message }));
        //.then(() => this.handleClick());  
  
    });
  };

  render() {
    let {imagePreviewUrl, imagePath } = this.state;
    
    return (
     
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          >
          <Avatar name={this.props.name} 
                  src={ imagePath !== "" && imagePreviewUrl } />                  

          <div>         
            <input
              className="inputButton"
              accept="image/*"
              id="contained-button-file"
              type="file"
              ref={this.fileInput} 
              onChange={this.handleSubmit} 
              name='file-input'
            />  
            <label htmlFor="contained-button-file" >
              <Tooltip title="Edit your photo" aria-label="Photo">
                {/* IMPORTANT component="span" to input file */}
                <Fab component="span"
                      color={ !!this.state.disabled ? 'primary' : 'secondary'}>
                  <Icon>image_icon</Icon>
                </Fab>
              </Tooltip>
            </label>
          </div>
            <Tooltip title="Remove your photo" aria-label="Remove">
            {/* NOTE div for tooltip target when fab is disabled */}
            <div>
              <Fab onClick={this.removeImage} 
                   disabled={!imagePreviewUrl && !this.state.file}
                   className="removeButton"
                   color={ !!this.state.disabled ? 'default' : 'secondary'}>
                <Icon>delete_icon</Icon>
              </Fab>
              </div>
            </Tooltip>
        </Grid>

    );
  }
}

//export default FileInput;
export default connect(state => ({ user: state.user }))(FileInput);