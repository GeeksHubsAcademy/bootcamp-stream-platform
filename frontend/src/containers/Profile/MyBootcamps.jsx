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
          )
    }else{
    return (
      <section className='MyBootcampsView'>
        <h2 className="center">Pertenece a los siguientes Bootcamps:</h2>
          {this.props.bootcamps.map(bootcamp => (
        <div className='content-bootcamp'>
              {/* <Link to={'/bootcamp/' + bootcamp._id} key={bootcamp._id} className='listBootcamps'>
                <Link to={'/bootcamp/' + bootcamp._id} key={bootcamp._id}>
                </Link>
                <div className="boot-title">{bootcamp.title}</div>
                <div className="boot-card"></div>
                <div className="boot-description">{bootcamp.description}</div>
              </Link> */}
              <div className="center boot-card" style={{backgroundImage:`url(https://source.unsplash.com/240x150/?code,computer)`}}>
                <div><h4>{bootcamp.title}</h4></div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius </p></div>
              </div>
              <div className="center boot-card">
                b</div>
              <div className="center boot-card">
                c</div>
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