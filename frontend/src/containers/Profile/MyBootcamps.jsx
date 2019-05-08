import React, { Component } from 'react';

//importamos redux
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import './MyBootcamps.scss'


class MyBootcamps extends Component {

  render() {
    //console.log(JSON.stringify(this.props.bootcamps));
    //console.log(this.props.bootcamps);
    if (!this.props.bootcamps) {
      return <div className="MyBootcamps">No bootcamps yet</div>
    }
    return (
      <section className='MyBootcampsView'>
        <h3>Pertenece a los siguientes Bootcamps:</h3>

        <div className='MyBootcamps'>
          { this.props.bootcamps.map(bootcamp => (

              <Link to={'/bootcamp/' + bootcamp._id} className='listBootcamps' key={bootcamp._id}>
                {bootcamp.title} </Link>            

          ))}

          {/* <Link className="MyBootcamps" to={'/bootcamp/' + props.bootcamp.user.id} >
            <h1></h1>
            <p></p>
          </Link> */}
        </div>
      </section>
    );
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