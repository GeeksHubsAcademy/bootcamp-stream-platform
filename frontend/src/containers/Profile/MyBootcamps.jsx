import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import Card from '@material-ui/core/Card';
import './MyBootcamps.scss';

class MyBootcamps extends Component {
  render() {
    console.log(this.props);
    if (!this.props.bootcamps) {
      return (
        <section className='MyBootcampsView'>
          <div className='content-bootcamp'>
            <h2>Aún no pertence a ningún bootcamp</h2>
          </div>
        </section>
      );
    } else {
      return (
        <section className='MyBootcampsView'>
          <h3>Pertenece a los siguientes Bootcamps:</h3>

          <div className='MyBootcamps'>
            {this.props.bootcamps.map(bootcamp => (
              <Link to={'/bootcamp/' + bootcamp._id} className='listBootcamps' key={bootcamp._id}>
                {bootcamp.title}
              </Link>
            ))}
          </div>
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
