import React, { Component } from 'react';

//importamos redux
import { connect } from 'react-redux';

class MyBootcamps extends Component {

  render() {
    //console.log(JSON.stringify(this.props.bootcamps));
    console.log(this.props.bootcamps);
    return (
      <section className="MyBootcampsView">
        <div>
          <h3>
            Pertenece a los siguientes Bootcamps:
          {this.props.bootcamps.map(bootcamp => <div key={bootcamp._id}>{bootcamp.title}</div>)}

          </h3>


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