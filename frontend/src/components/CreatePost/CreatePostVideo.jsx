import React from 'react';
import './CreatePostVideo.scss';
import Reproductor from '../VideoPlayer';
import { TextField } from '@material-ui/core';
import FontAwesome from '../FontAwesome';

const CreatePostVideo = ({ value, onChange }) => (
  <div className='CreatePostVideo'>
    <TextField required id='body' label='Url' margin='normal' onChange={ev => onChange(ev.target.value)} value={value} />
    {value ? (
      <Reproductor url={value} playing />
    ) : (
      <div className='noPreview'>
        <FontAwesome icon='video' />
      </div>
    )}
  </div>
);
export default CreatePostVideo;
