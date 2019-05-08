import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import CreatePostText from './CreatePostText'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {sendPost} from '../../redux/actions'
import './CreatePost.scss';
import CreatePostCode from './CreatePostCode/CreatePostCode';

const CreatePostVideo = () => <div className='postVideo'>postVideo</div>;
const CreatePostActivity = () => <div className='postActivity'>postActivity</div>;

const CreatePost = ({streamId}) => {


  const [postType, setPostType] = useState('text');
  const [body, setBody] = useState('');
  const [creating, setCreating] = useState(false);
  function savePost() {
    setCreating(false);
    let post = {
      postType,
      content: {body}
    }

    sendPost( post , streamId)
      .then(() => {
        setBody('')
      })
      .catch( console.error)

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
