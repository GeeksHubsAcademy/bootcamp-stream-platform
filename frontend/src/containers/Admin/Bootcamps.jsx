import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import FontAwesome from '../../components/FontAwesome';
import './Bootcamps.scss';

const AdminBootcamps = ({ bootcamps }) => (
  <div className='adminBootcamps'>
    {bootcamps.map(bootcamp => (
      <div className='bootcamp'>
        <h3>{bootcamp.title}</h3>
        <Link to={'/admin/bootcamp/' + bootcamp._id}>
          <FontAwesome icon='edit' family='fas' />
        </Link>
        <Link to={'/bootcamp/' + bootcamp._id}>
          <FontAwesome icon='eye' family="fas" />
        </Link>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ bootcamps }) => ({ bootcamps });

export default connect(mapStateToProps)(AdminBootcamps);
