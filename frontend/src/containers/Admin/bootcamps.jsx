import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

class AdminBootcamp extends Component {

    e = () => {
        const boot = [];
        // let caca = this.props.bootcamps;
        for (let index = 0; index < this.props.bootcamps.length; index++) {
            let ruta = 'admin/bootcamps/:' + this.props.bootcamps[index]._id;
            boot.push(<div><h3>{this.props.bootcamps[index].title}</h3>
                <Link to='admin/bootcamps'> <strong>Edit</strong> </Link>
                <Link to={ruta}>  <strong>See</strong></Link>
            </div>)

        }
        return boot;
    }




    render() {

        console.log(this.e())
        return (
            !this.e() ?
                'No hay datos'
                :
                <div className="">
                    {this.e().map(function (x) {
                        return x;
                    })}
                    <button>+</button>
                </div>
        );
    }

}
const mapStateToProps = ({ bootcamps }) => ({ bootcamps });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminBootcamp);