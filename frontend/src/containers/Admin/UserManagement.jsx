import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserManagement extends Component {

    e = () => {
        let boot_user = [];
        const boot_id = 123;
        // let caca = this.props.bootcamps;
        console.log(this.props.bootcamps[0]._id)
        for (let i = 0; i < this.props.bootcamps.length; i++) {
            if (boot_id === this.props.bootcamps[i]._id) {
                for (let y = 0; y < this.props.bootcamps[i].users.length; y++) {
                    boot_user.push(this.props.bootcamps[0].users);

                }




            }
        }
        return boot_user;
    }




    render() {

        console.log(this.e())
        return (
            <div className="">


            </div>
        );
    }

}
const mapStateToProps = ({ bootcamps }) => ({ bootcamps });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserManagement);