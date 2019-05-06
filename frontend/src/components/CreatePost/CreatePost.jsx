import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import CreatePostText from './CreatePostText'


const CreatePostCode = () => <div className='postCode'>postCode</div>;
const CreatePostVideo = () => <div className='postVideo'>postVideo</div>;
const CreatePostActivity = () => <div className='postActivity'>postActivity</div>;

const Post = () => {
  const [value, setValue] = useState('Text');
  const [creating, setCreating] = useState(false);

  if (!creating) {
    return <Fab onClick={() => setCreating(true)}
          variant="extended"
          size="large"
          color="secondary"
          aria-label="Add"
        >+</Fab>
  }

  return (
    <div className='createPost'>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} indicatorColor='secondary' textColor='secondary' variant='fullWidth'>
        <Tab label='Code' value='Code' />
        <Tab label='Text' value='Text' />
        <Tab label='Video' value='Video' />
        <Tab label='Activity' value='Activity' />
      </Tabs>
      <div className='create'>
        {value === 'Code' && <CreatePostCode />}
        {value === 'Text' && <CreatePostText />}
        {value === 'Video' && <CreatePostVideo />}
        {value === 'Activity' && <CreatePostActivity />}
      </div>
    </div>
  );
};

export default Post;
