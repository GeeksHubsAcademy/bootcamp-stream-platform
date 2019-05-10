import React from 'react';
import './CreatePostActivity.scss';
import { TextField } from '@material-ui/core';
import UrlPreview from '../UrlPreview';

const CreatePostActivity = ({ value, onChange }) => (
  <div className='CreatePostActivity'>
    <TextField required id='body' label='Url' margin='normal' onChange={ev => onChange(ev.target.value)} value={value} />
    <UrlPreview url={value} autoPlay/>
  </div>
);
export default CreatePostActivity;
