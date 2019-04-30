import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post'

const Bootcamp = ({ bootcamp }) => {
  console.log(bootcamp);


  return (
    <section className="bootcampView">
      <h1>{bootcamp.title}</h1>
      <h6>{bootcamp.startsAt}</h6>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className="post">
        {
          // bootcamp.posts.map(post => <h2>Author:{post.authorId} type:{post.postType}</h2>)
          bootcamp.posts.map(post => <Post data={post} />)
        }
      </div>


    </section>
  )
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
