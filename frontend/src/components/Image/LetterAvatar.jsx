import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";

import './Avatar.scss';

class LetterAvatars extends Component {

  render( props) {

    return (
        <Avatar className="letterAvatar bigAvatar">{this.props.userFromParent}</Avatar>
    );
  }
}

export default LetterAvatars;
