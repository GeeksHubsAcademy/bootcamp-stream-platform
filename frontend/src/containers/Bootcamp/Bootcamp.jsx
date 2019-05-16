import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/DisplayPost/Post';
import CreatePost from '../../components/CreatePost/CreatePost';
import NotFound from '../../components/NotFound';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './Bootcamp.scss';
import DateDisplay from '../../components/DateDisplay';
import FontAwesome from '../../components/FontAwesome';
import Fab from '@material-ui/core/Fab';
import { getBootcamps } from '../../redux/actions';
const Bootcamp = ({ bootcamp, id }) => {

  const [search, setSearch] = useState('');
  useEffect(() => {
    if (!window.location.hash) {
      window.scroll({
      top: 9999999999999999,
      left: 0,
      behavior: 'auto',
    });
    }
  }, [bootcamp]);
  useEffect(() => {
    const onKeyup = ev => {
      switch (ev.keyCode) {
        case 27:
          setSearch('');
          document.querySelector('#search-input').blur()

          break;

        case 70:
          document.querySelector('#search-input').focus()

          break;

        default:
          break;
      }

    }
    document.addEventListener('keyup',onKeyup)

    return () => document.removeEventListener('keyup', onKeyup)

  }, [search]);

  if (!bootcamp) {
    return <NotFound/>
  }

  return (
    <section className='bootcampView'>
      <h2>{bootcamp.title}</h2>
      <DateDisplay date={bootcamp.startsAt} />
      <p>{bootcamp.description}</p>
      <div>{bootcamp.posts.length} posts creados</div>
      <div className='posts'>
        {bootcamp.posts
          .filter(post => JSON.stringify(post).match(search))
          .map(post => (
            <Post data={post} key={post._id} />
          ))}
      </div>
      <div className='actions'>
        <CreatePost streamId={id} />
        <Fab onClick={() => getBootcamps()} variant='extended' size='large'  aria-label='Add'>
          <FontAwesome icon='sync-alt' />
        </Fab>
        <Paper elevation={1}>
          <InputBase id="search-input" placeholder='Buscar' value={search} onChange={e => setSearch(e.target.value)} />
          <IconButton aria-label='Buscar' disableRipple disabled>
            <SearchIcon />
          </IconButton>
        </Paper>

      </div>
    </section>
  );
};

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
