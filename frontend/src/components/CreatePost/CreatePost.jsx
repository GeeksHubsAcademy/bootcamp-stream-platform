import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import CreatePostText from './CreatePostText'
import CreatePostActivity from './CreatePostActivity'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {sendPost} from '../../redux/actions';
import CreatePostCode from './CreatePostCode/CreatePostCode';
import './CreatePost.scss';
import CreatePostVideo from './CreatePostVideo'
// import { ButtonBase } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
const CreatePost = ({streamId}) => {


  const [postType, setPostType] = useState('video');
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const [creating, setCreating] = useState(false);
  function savePost() {
   if (title && body) {
      setCreating(false);
      let post = {
        postType,
        content: { body, title },
      };

      sendPost(post, streamId)
        .then(() => {
          setBody('');
          setTitle('');
        })
        .catch(alert);
   } else {
     alert('title and body required')
   }


  }

  if (!creating) {
    return <Fab onClick={() => setCreating(true)}
          variant="extended"
          size="large"
          color="secondary"
          aria-label="Add"
        >+</Fab>
  }

  return (
    <Modal open={creating} onClose={() => setCreating(false)}>
      <div className='createPost'>
        <Tabs value={postType} onChange={(event, newValue) => setPostType(newValue)} indicatorColor='secondary' textColor='secondary' variant='fullWidth'>
          <Tab label='Code' value='code' />
          <Tab label='Text' value='text' />
          <Tab label='Video' value='video' />
          <Tab label='Link' value='link' />
          <Tab label='Activity' value='activity' />
        </Tabs>
        <div className='create'>
          <div className='title'>
            <TextField required autoFocus id='title' label='Título' value={title} onChange={e => setTitle(e.target.value)} margin='normal' />
          </div>

          {postType === 'code' && <CreatePostCode value={body} onChange={setBody} />}
          {postType === 'text' && <CreatePostText value={body} onChange={setBody} onSave={savePost} />}
          {postType === 'video' && <CreatePostVideo value={body} onChange={setBody} />}
          {postType === 'link' && <CreatePostActivity value={body} onChange={setBody} />}
          {postType === 'activity' && <CreatePostActivity value={body} onChange={setBody} />}
        </div>
        <div className='actions'>
          <Button onClick={savePost} color='secondary' variant='contained' size='medium'>
            <SaveIcon />
            Guardar
          </Button>
          <Button variant='contained' size='medium' onClick={() => setCreating(false)}>
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePost;
