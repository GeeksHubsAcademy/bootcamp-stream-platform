import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post'

import CreatePost from '../../components/CreatePost'
const SearchPosts = () => <div>Search posts</div>


const Bootcamp = ({ bootcamp }) => {
  console.log(bootcamp);


  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='post'>
       { bootcamp.posts.map(post => (
          <Post data={post} />
        ))}
      </div>
      <CreatePost />
      <SearchPosts />
    </section>
  );
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
