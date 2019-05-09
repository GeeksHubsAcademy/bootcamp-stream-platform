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

const CreatePostVideo = () => <div className='postVideo'>postVideo</div>;
// const CreatePostActivity = () => <div className='postActivity'>postActivity</div>;

const CreatePost = ({streamId}) => {


  const [postType, setPostType] = useState('code');
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
        })
        .catch(console.error);
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
          <Tab label='Activity' value='activity' />
        </Tabs>
        <div className='create'>
          <div className='title'>
            <TextField required id='title' label='Título' value={title} onChange={e => setTitle(e.target.value)} margin='normal' />
          </div>

          {postType === 'code' && <CreatePostCode value={body} onChange={setBody} />}
          {postType === 'text' && <CreatePostText value={body} onChange={setBody} onSave={savePost} />}
          {postType === 'video' && <CreatePostVideo />}
          {postType === 'activity' && <CreatePostActivity />}
        </div>
        <div className='actions'>
          <Button onClick={savePost} variant='outlined' color='secondary' component='span'>
            Save
          </Button>
          <Button component='span' onClick={() => setCreating(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePost;
