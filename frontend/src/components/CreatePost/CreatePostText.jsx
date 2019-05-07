import React from 'react';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMde, { commands } from 'react-mde';
const listCommands = [
  {
    commands: [commands.orderedListCommand, commands.unorderedListCommand, commands.checkedListCommand],
  },
];
const CreatePostText = props => <ReactMde {...props}  commands={listCommands} />;

export default CreatePostText;
