import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/DisplayPost/Post'

// material-ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';


import CreatePost from '../../components/CreatePost/CreatePost'
const SearchPosts = () => <div>Search posts</div>


const Bootcamp = ({ bootcamp, id }) => {
  console.log(bootcamp);
  if (!bootcamp) {
    return <h1>not bootcamp on the store</h1>
  }

  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='posts'>
        {bootcamp.posts.map(post => (
          <Post data={post} key={post._id} />
        ))}
      </div>
      <CreatePost streamId={id} />

      {/* <SearchPosts /> */}
    </section>
  );
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
