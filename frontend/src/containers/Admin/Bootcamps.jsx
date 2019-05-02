import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import FontAwesome from '../../components/FontAwesome';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './Bootcamps.scss';

const AdminBootcamps = ({ bootcamps }) => (
  <div className='adminBootcamps'>
    <div className='actions'>
      <Fab variant='extended' aria-label='add stream'>
        <Link to="/admin/bootcamp/new">
          <AddIcon />
          Add new Stream
        </Link>
      </Fab>
    </div>
    <div className='list'>
      {bootcamps.map(bootcamp => (
        <div className='bootcamp' key={bootcamp._id}>
          <h3>{bootcamp.title}</h3>
          <Link to={'/admin/bootcamp/' + bootcamp._id}>
            <FontAwesome icon='edit' family='fas' />
          </Link>
          <Link to={'/bootcamp/' + bootcamp._id}>
            <FontAwesome icon='eye' family='fas' />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ bootcamps }) => ({ bootcamps });

export default connect(mapStateToProps)(AdminBootcamps);
