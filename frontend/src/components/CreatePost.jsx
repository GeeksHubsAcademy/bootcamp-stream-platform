import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const CreatePostText = () => <div className='postText'>postText</div>;
const CreatePostCode = () => <div className='postCode'>postCode</div>;
const CreatePostVideo = () => <div className='postVideo'>postVideo</div>;
const CreatePostActivity = () => <div className='postActivity'>postActivity</div>;

const Post = () => {
  const [value, setValue] = useState('text');

  return (
    <div className='createPost'>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} indicatorColor='secondary' textColor='primary' variant='fullWidth'>
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
