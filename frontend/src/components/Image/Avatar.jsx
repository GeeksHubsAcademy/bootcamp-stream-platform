import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

//Letter avatars
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

import './Avatar.scss';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

// function ImageAvatars(props) {
//   const { classes } = props;
  
//   return (
//     <Grid container justify="center" alignItems="center">
//       {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} /> */}
//       <Avatar altFromParent={alt}              
//               onChange={this.handleSubmit} 
//               className={classes.bigAvatar} />
//     </Grid>
//   );
// }


class ImageAvatars extends Component {

  state = {   
  }

  handleSubmit(e) {
  }   

  render( props) {

    // TODO dentro de la class no va, ¿para pasar props tiene que ser una class? 
    //const { classes } = props;
    // poner en el <Avatar className={classes.bigAvatar} no funciona
    return (

      <Grid container justify="center" alignItems="center">
        <Avatar alt={this.props.altFromParent}  
                src={this.props.srcFromParent}      
                className="bigAvatar"
                onChange={this.handleSubmit} 
                />
      </Grid>

    );
  }
}


function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.purpleAvatar}>OP</Avatar>
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(state => ({ user: state.user }))(Avatar);
// export const ImageAvatars = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ImageAvatars);

// export const LetterAvatars = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LetterAvatars);

export default withStyles(styles)(ImageAvatars, LetterAvatars);
//export default withStyles(styles)(LetterAvatars);
