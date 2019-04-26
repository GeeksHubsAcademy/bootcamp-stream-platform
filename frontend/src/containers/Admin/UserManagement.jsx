import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManagement.css'

class UserManagement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
        }
    }
    e = () => {
        let boot_user = [];
        //  let user_content = "";
        //  const boot_id = 123;
        // let caca = this.props.bootcamps;
        //  console.log(this.props.allUsers)
        /*  for (let i = 0; i < this.props.bootcamps.length; i++) {
              if (boot_id === this.props.bootcamps[i]._id) {
                  for (let y = 0; y < this.props.bootcamps[i].users.length; y++) {
                      boot_user.push(this.props.bootcamps[0].users);
  
                  }
  
  
  
  
              }
          }*/

        for (let i = 0; i < this.props.allUsers.length; i++) {


            boot_user.push(<div className="users_edit_admin">
                <span> {this.props.allUsers[i].name}</span>
                <span> {this.props.allUsers[i].surname} </span>
                <span>{this.props.allUsers[i].email} </span>


                <input type="button" value="+" ></input>

            </div>)
        }
        if (!boot_user[0]) {
            boot_user.push(<div>No users found</div>)
        }
        return boot_user;
    }

    /*add_user() {


        console.log("hola");

    }*/


    render() {

        console.log(this.e())
        return (
            <div className="">
                <div className="admin_edit_user_header">
                    <span><h3>Users:</h3></span>

                </div>
                {this.e().map(function (x) {
                    return x;
                })}

            </div>
        );
    }

}

const mapStateToProps = ({ allUsers }) => ({ allUsers });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserManagement);