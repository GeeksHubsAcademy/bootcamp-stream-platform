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
    {bootcamps.map(bootcamp => (
      <div className='bootcamp'>
        <h3>{bootcamp.title}</h3>
        <Link edit='edit' to={'/admin/bootcamp/' + bootcamp._id}>
          editar
        </Link>
        <Link edit='edit' to={'/bootcamp/' + bootcamp._id}>
          ver
        </Link>
      </div>
    ))}
  </div>
);
//     e = () => {
//         const boot = [];
//         // let caca = this.props.bootcamps;
//         for (let index = 0; index < this.props.bootcamps.length; index++) {
//             let ruta = '/admin/bootcamps/' + this.props.bootcamps[index]._id;
//             boot.push(<div className=""><h3 className="">{this.props.bootcamps[index].title}</h3>
//                 <Link edit='edit' to={ruta}> <strong>Edit</strong> </Link>
//                 <Link edit='see' to={ruta}>  <strong>See</strong></Link>
//             </div>)

//         }
//         return boot;
//     }

//     render() {

//         //console.log(this.e())
//         return (
//             !this.e() ?
//                 'No hay datos'
//                 :
//                 <div className="">
//                     {this.e().map(function (x) {
//                         return x;
//                     })}
//                     <button>+</button>
//                 </div>
//         );
//     }

// }

const mapStateToProps = ({ bootcamps }) => ({ bootcamps });

export default connect(mapStateToProps)(AdminBootcamps);
