import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post'

import CreatePost from '../../components/CreatePost/CreatePost'
const SearchPosts = () => <div>Search posts</div>


const Bootcamp = ({ bootcamp }) => {
  console.log(bootcamp);
  if (!bootcamp) {
    return <h1>not bootcamp on the store</h1>
  }

  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='post'>
       { bootcamp.posts.map(post => (
          <Post data={post} key={post._id} />
        ))}
      </div>
      <CreatePost />
      <SearchPosts />
    </section>
  );
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
