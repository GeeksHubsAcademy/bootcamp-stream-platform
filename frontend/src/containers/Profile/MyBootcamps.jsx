import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import './MyBootcamps.scss';
import DateDisplay from '../../components/DateDisplay';

class MyBootcamps extends Component {
  render() {
    if (!this.props.bootcamps) {
      return (
          <section className='MyBootcampsView'>
              <h2>Aún no pertence a ningún bootcamp</h2>
          </section>
          )
    }else{
    return (
      <section className='MyBootcampsView'>
        <h2 className='center'>Pertenece a los siguientes Bootcamps:</h2>
        {this.props.bootcamps.map(({ title, _id, description, posts, startsAt, ...bootcamp }) => (
          <div className='content-bootcamps'>
            <Link to={'/bootcamp/' + _id} key={_id} className='listBootcamps'>
              <h2>{title}</h2>
              <DateDisplay date={startsAt} />
              <p>{description}</p>
              <div>{posts.length} posts creados</div>
            </Link>
          </div>
        ))}
      </section>
    );
        }
  }
}

//export default MyBootcamps;

//export default MyBootcamps;
const mapStateToProps = ({ bootcamps }) => ({ bootcamps });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyBootcamps);
