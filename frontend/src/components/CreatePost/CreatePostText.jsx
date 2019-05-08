import React from 'react';
import './CreatePostText.scss';
import Editor from 'for-editor';

const CreatePostText = props => <Editor {...props} placeholder="Escribe markdown..." />;

export default CreatePostText;
