
import React, { Component, useReducer } from 'react';

// edit button
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

// avatar
// import LetterAvatars from './Avatar'
// import ImageAvatars from './Avatar'
import LetterAvatars from './LetterAvatar';
import ImageAvatars from './ImageAvatar';


class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // input type field is uncontrolled field, we need create a Ref
    this.fileInput = React.createRef();
  }

  state = {   
    disabled: true,
    // TODO file from DB for preview?
    file: '',
    imagePreviewUrl: '',
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

    reader.readAsDataURL(file)

    // send image
    const image  = this.fileInput.current.files[0]
    this.props.onChange(image);
    // to change color
    this.setState({ disabled: false });
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
     
      <div className="wrapper">

        <Grid container justify="center" alignItems="center">   

        {/* TODO pasar user name */}  
        { imagePreviewUrl ? 
          <ImageAvatars altFromParent="texto" srcFromParent={imagePreviewUrl} />
          : <LetterAvatars userFromParent="AA" /> }
                  
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          >
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

      </div>

    );
  }
}

export default FileInput;