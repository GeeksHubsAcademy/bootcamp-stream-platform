import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {

  // to pass function to child to parent
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  method() {
    window.alert('child function')
  }

  state = {
    openDialog: false,
  };

  handleClickOpenDialog = () => {
    this.setState({ openDialog: true });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  render() {
    return (
      <Dialog
      open={this.state.openDialog}
      onClose={this.handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {this.props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={this.handleCloseDialog} color="primary">
            Disagree
          </Button>

          {/* TODO send action deleteProfile in parent */}
          <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AlertDialog;