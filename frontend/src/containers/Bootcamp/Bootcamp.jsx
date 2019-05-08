import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/DisplayPost/Post';
import CreatePost from '../../components/CreatePost/CreatePost';

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
    return <h1>not bootcamp on the store</h1>;
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
      <CreatePost streamId={id} />
      <input type='text' placeholder='Buscar' value={search} onChange={e => setSearch(e.target.value)} />
    </section>
  );
};

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
