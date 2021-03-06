import React, { useState } from 'react';
import  {connect} from 'react-redux';
import './UsersManager.scss';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const UsersManager = ({ users = [], onChange, allUsers }) => {
  const [usersSelected, setSeleted] = useState(users);
  const [search, setSearch] = useState('');
  const onSelect = (user) => {
    setSeleted([...new Set([...usersSelected, user])]);
    onChange([...new Set([...usersSelected, user])]);
  };
   const onRemove = user => {
     setSeleted(usersSelected.filter(el => user._id !== el._id ));
     onChange(usersSelected.filter(el => user._id !== el._id ));
   };

   const selectedMapped = usersSelected.map(user => (
     <div key={user._id} className='usersSelected'>
       <span className='_id'>{user._id}:&nbsp; </span>
       <span className='_id'>{user.name}&nbsp; </span>
       <span className='email'>{user.email}</span>
       <IconButton onClick={() => onRemove(user)} aria-label='Delete'>
         <DeleteIcon fontSize='small' />
       </IconButton>
     </div>
   ));
  return (
    <div className='usersManager'>
      <div className='selected'>
        <h1>Users:</h1>
        {selectedMapped.length > 0 ? selectedMapped : <span className='nousers'>no user selected, select one bellow</span>}
      </div>
      <div className='select'>
        {/* <input type='text' value={search} placeholder='filter users to add' onChange={e => setSearch(e.target.value)} />
        <div className='toSelect' /> */}
        <FormControl className='toSelect'>
          <InputLabel htmlFor='component-name'>filter users to add</InputLabel>
          <Input name='pass' type='text' onChange={e => setSearch(e.target.value)} />
        </FormControl>

        <h1>Select Users:</h1>
        <div className='allusers'>
          {allUsers
            .filter(u => JSON.stringify(u).match(search))
            .map(user => (
              <div key={user._id}>
                <span className='_id'>{user._id}:&nbsp; </span>
                <span className='_id'>{user.name}&nbsp; </span>
                <span className='email'>{user.email}</span>
                <Fab className='buttons' size='small' color='primary'onClick={() => onSelect(user)}>
                  <AddIcon />
                </Fab>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ allUsers }) => ({ allUsers });

export default connect(
    mapStateToProps,
)(UsersManager);

// class UserManagement extends Component {

//     constructor(props) {

//         super(props);
//         //  console.log(this.props.bootcampUsers)
//         this.state = {
//             users_boot: this.props.bootcampUsers || [],
//             boot_user: [],
//             new_user: [],
//             counter: 0,
//             show_new_users: false,
//         }

//     }
//     e = () => {


//         if (this.state.counter < 2) {
//             let boot_user_arr = [];
//             //  let user_content = "";
//             //  const boot_id = 123;
//             // let caca = this.props.bootcamps;
//             //  console.log(this.props.allUsers)
//             /*  for (let i = 0; i < this.props.bootcamps.length; i++) {
//                   if (boot_id === this.props.bootcamps[i]._id) {
//                       for (let y = 0; y < this.props.bootcamps[i].users.length; y++) {
//                           boot_user.push(this.props.bootcamps[0].users);

//                       }




//                   }
//               }*/

//             for (let i = 0; i < this.props.allUsers.length; i++) {
//                 let the_ref = "user_boot" + i;


//                 /* boot_user_arr.push(<div className="users_edit_admin">
//                      <span> {this.props.allUsers[i].name}</span>
//                      <span> {this.props.allUsers[i].lastname} </span>
//                      <span>{this.props.allUsers[i].email} </span>


//                      <input type="button" value="+" ></input>

//                  </div>)*/
//                 this.state.new_user.push(<div ref={the_ref} className="users_edit_admin new_users">
//                     <span> {this.props.allUsers[i].name}</span>
//                     <span> {this.props.allUsers[i].lastname} </span>
//                     <span>{this.props.allUsers[i].email} </span>


//                     <input type="button" onClick={((e) => this.add_user(e, the_ref))} value="+" ></input>

//                 </div>)
//             }
//             if (!boot_user_arr[0]) {
//                 boot_user_arr.push(<div>No users found</div>)
//             }

//             return boot_user_arr;
//         }
//     }

//     add_user(e, the_ref) {

//         let adder = 100;
//         let auxiliar = this.state.new_user;

//         // this.state.boot_user.splice(this.state.boot_user.indexOf(0), 1);
//         for (let i = 0; i < this.state.new_user.length; i++) {


//             if (this.state.new_user[i].ref === the_ref)

//                 adder = i;


//             // this.state.new_user.splice( list.indexOf('foo'), 1 );
//         }
//         // console.log(killer)
//         let aux2 = this.state.new_user.splice(auxiliar.indexOf(adder), 1);
//         let new_ref = "the_ref_user" + Math.random().toString(36).substr(2, 9);
//         let the_new_element = <div ref={input => (new_ref = input)} className="boot_users">
//             <span> {aux2[0].props.children[0].props.children[1]}</span>
//             <span> {aux2[0].props.children[1].props.children[1]} </span>
//             <span>{aux2[0].props.children[2].props.children[0]} </span>


//             <input type="button" onClick={((e) => this.delete_user(e, the_ref))} value="x" ></input>

//         </div>
//         //console.log(aux2[0].props.children[2].props);
//         /*for (let z = 0; z < this.state.boot_user.length; z++) {
//             if (aux2[0].ref === this.state.boot_user[z].ref) {
//                 aux2[0].ref = Math.random().toString(36).substr(2, 9);
//             }
//         }*/
//         this.state.boot_user.push(the_new_element)
//         this.setState({
//             new_user: auxiliar,
//         })
//         //  console.log(this.state.boot_user)

//     }

//     show_new_users = (e) => {
//         // boot_user.push(<div>No users found</div>)

//         if (this.state.show_new_users === false) {
//             this.setState({
//                 show_new_users: true,
//             })

//         } else if (this.state.show_new_users === true) {
//             this.setState({
//                 show_new_users: false,
//             })
//         }


//     }
//     delete_user = (e, the_ref) => {
//         //  console.log(this.state.boot_user)

//         let killer = 100;
//         let auxiliar = this.state.boot_user;

//         // this.state.boot_user.splice(this.state.boot_user.indexOf(0), 1);
//         for (let i = 0; i < this.state.boot_user.length; i++) {


//             if (this.state.boot_user[i].ref === the_ref)

//                 killer = i;


//             // this.state.boot_user.splice( list.indexOf('foo'), 1 );
//         }
//         // console.log(killer)
//         let aux2 = this.state.boot_user.splice(auxiliar.indexOf(killer), 1);

//         let new_ref = "the_ref_user" + Math.random().toString(36).substr(2, 9);
//         let the_new_element = <div ref={input => (new_ref = input)} className="boot_users">
//             <span> {aux2[0].props.children[0].props.children[1]}</span>
//             <span> {aux2[0].props.children[1].props.children[1]} </span>
//             <span>{aux2[0].props.children[2].props.children[0]} </span>


//             <input type="button" onClick={((e) => this.add_user(e, the_ref))} value="+" ></input>

//         </div>
//         //console.log(aux2[0].props.children[2].props);
//         /*for (let z = 0; z < this.state.boot_user.length; z++) {
//             if (aux2[0].ref === this.state.boot_user[z].ref) {
//                 aux2[0].ref = Math.random().toString(36).substr(2, 9);
//             }
//         }*/
//         // console.log(the_new_element.ref)
//         this.state.new_user.push(the_new_element)
//         this.setState({ boot_user: auxiliar })
//         // console.log(this.state.boot_user)

//     }
//     bootcamp_users = () => {
//         // console.log(this.state.counter)

//         if (this.state.counter < 2) {
//             for (let i = 0; i < this.state.users_boot.length; i++) {
//                 let the_ref = "user_boot" + i;



//                 this.state.boot_user.push(<div ref={the_ref} className="boot_users">
//                     <span> {this.state.users_boot[i].name}</span>
//                     <span> {this.state.users_boot[i].lastname || "none"} </span>
//                     <span>{this.state.users_boot[i].email || "none"} </span>


//                     <input type="button" onClick={((e) => this.delete_user(e, the_ref))} value="x" ></input>

//                 </div>)
//             }

//             if (!this.state.boot_user[0]) {
//                 this.state.boot_user.push(<div>No users found</div>)
//             }

//         }
//     }


//     render() {
//         let user_styler;
//         // console.log(this.state.show_new_users)
//         if (this.state.show_new_users === true) {
//             user_styler = { display: "block" }
//         } else {

//             user_styler = { display: "none" }
//         }
//         this.state.counter = this.state.counter + 1;
//         // console.log(this.state.users_boot)
//         this.bootcamp_users();
//         this.e();

//         // console.log(this.e())
//         return (
//             <div className="">
//                 <div className="admin_edit_user_header">
//                     <span><h3>Users:</h3></span>
//                     {this.state.boot_user.map(function (x) {

//                         return x;
//                     })}
//                 </div>

//                 <input onClick={(e) => this.show_new_users(e)} type="button" value="Add users to bootcamp"></input>
//                 <div style={user_styler} >
//                     {this.state.new_user.map(function (x) {

//                         return x;
//                     })}

//                 </div>
//             </div>
//         );
//     }

// }

// const mapStateToProps = ({ allUsers }) => ({ allUsers });
// /*const mapStateToProps = (allUsers, bootcamps) => {
//     return allUsers, bootcamps;
// }*/
// const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(UserManagement);