import React from 'react';
import './CreatePostVideo.scss';
import Reproductor from '../VideoPlayer';
import { TextField } from '@material-ui/core';

const CreatePostVideo = ({ value, onChange }) => (
    <div className='CreatePostVideo'>
        <TextField
            required id='body'
            label='Url'
            margin='normal'
            onChange={ev => onChange(ev.target.value)}
            value={value} />
        {value && <Reproductor url={value} playing />}
    </div>
);
export default CreatePostVideo;
