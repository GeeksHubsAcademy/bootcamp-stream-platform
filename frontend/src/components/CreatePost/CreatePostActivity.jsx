import React from 'react';
import './CreatePostActivity.scss';
import Reproductor from '../VideoPlayer';
import { TextField } from '@material-ui/core';
import FontAwesome from '../FontAwesome';
import Microlink from '@microlink/react';

const CreatePostActivity = ({ value, onChange }) => (
  <div className='CreatePostActivity'>
    <TextField required id='body' label='Url' margin='normal' onChange={ev => onChange(ev.target.value)} value={value} />
    {value ? (
      <Microlink url={value} />
    ) : (
      <div className='noPreview'>
        <FontAwesome icon='url' />
      </div>
    )}
  </div>
);
export default CreatePostActivity;
