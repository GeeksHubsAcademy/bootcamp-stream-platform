import React, { Component } from 'react';

//importamos redux
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import { unsuscribeUser } from '../../redux/actions';

// unsuscribe button
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import './MyBootcamps.scss'


class MyBootcamps extends Component {

  state = {
    //bootcamps: this.props.bootcamps,
  };

  unsuscribe = e => {
    e.preventDefault();
    // go to action and logout by default when user isn't exists
    unsuscribeUser(this.props.bootcamps)
    // snakbar messages
    //.then(() => this.setState({ successMessage: 'Unsuscribed!' }))
    //.catch(e => this.setState({ error: e.message }));
    .then( console.log('Unsuscribed user!'))
    .catch(console.error);
  };


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

            <div>
              <Link to={'/bootcamp/' + bootcamp._id} className='listBootcamps' key={bootcamp._id}>
                {bootcamp.title} </Link>

              <Tooltip title="Unsuscribe from this bootcamp" aria-label="Unsuscribe">
                <Fab 
                    onClick={this.unsuscribe}
                    color="secondary">
                  <Icon>delete_icon</Icon>
                </Fab>
              </Tooltip>
            </div>

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