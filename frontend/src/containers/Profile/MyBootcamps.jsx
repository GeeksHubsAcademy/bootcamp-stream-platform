import React, { Component } from 'react';

//importamos redux
import { connect } from 'react-redux';

import { getBootcamps} from '../../redux/actions'

import './MyBootcamps.scss'

class MyBootcamps extends Component {

  componentDidMount() {
    getBootcamps()
  }

  render() {
    //console.log(JSON.stringify(this.props.bootcamps));
    console.log(this.props.bootcamps);
    return (
      <section className="MyBootcampsView">
      <h3>Pertenece a los siguientes Bootcamps:</h3>

        <div className="MyBootcamps">
          {this.props.bootcamps.map(bootcamp => <div className="listBootcamps" key={bootcamp._id}>{bootcamp.title}</div>)}



          {/* <Link className="MyBootcamps" to={'/bootcamp/' + props.bootcamp.user.id} >
            <h1></h1>
            <p></p>
          </Link> */}


        </div>
      </section>
    )
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