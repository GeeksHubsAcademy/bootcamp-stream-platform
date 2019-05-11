import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/DisplayPost/Post';
import CreatePost from '../../components/CreatePost/CreatePost';
import NotFound from '../../components/NotFound';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import './Bootcamp.scss';

const Bootcamp = ({ bootcamp, id }) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (!window.location.hash) {
      window.scroll({
      top: 9999999999999999,
      left: 0,
      behavior: 'smooth',
    });
    }
  }, [bootcamp]);

  if (!bootcamp) {
    return <NotFound/>
  }

  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='posts'>
        {bootcamp.posts
          .filter(post => JSON.stringify(post).match(search))
          .map(post => (
            <Post data={post} key={post._id} />
          ))}
      </div>
      <div className='actions'>
        <CreatePost streamId={id} />
        <Paper elevation={1}>
          <InputBase placeholder='Buscar' value={search} onChange={e => setSearch(e.target.value)} />
          <IconButton aria-label='Buscar' disableRipple>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </section>
  );
};

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
