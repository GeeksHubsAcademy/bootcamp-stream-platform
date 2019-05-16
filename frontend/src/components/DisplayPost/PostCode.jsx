import React from 'react';

import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';
import './PostCode.scss';


const CreatePostCode = ({ data }) => <Highlight>{data}</Highlight>

export default CreatePostCode;
