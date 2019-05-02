import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersManager from './UsersManager.jsx';
import TextField from '@material-ui/core/TextField';
import { DateFormatInput } from 'material-ui-next-pickers';
import { editBootcamp, newBootcamp } from '../../redux/actions';
import './EditBootcamp.scss';

class EditBootcamp extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.bootcamp || {
      title: '',
      description: '',
      startsAt: new Date(),
      weeksDuration: 1,
      users: [],
      posts: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.bootcamp) {
      return {
        ...state,
        ...props.bootcamp,
      };
    }
    return null;
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  inc = () => {
    if (this.state.weeksDuration < 15) {
      this.setState({
        weeksDuration: this.state.weeksDuration + 1,
      });
    }
  };
  dec = () => {
    if (this.state.weeksDuration > 1) {
      this.setState({
        weeksDuration: this.state.weeksDuration - 1,
      });
    }
  };
  createBootcamp = () => {
    this.props.newBootcamp(this.state);
  };
  saveBootcamp = () => {
    this.props.editBootcamp(this.state);
  };
  usersChanged = users => {
    this.setState({ users });
  };
  render() {
      if (this.props.id && !this.props.bootcamp) {
        return (
          <div className='editBootcamp'>
            <h1>loading</h1>
          </div>
        );
      }
       return (
         <div className='editBootcamp'>
           <h1>{this.props.bootcamp ? 'edit': 'create new'} bootcamp</h1>
           <div className='content-edit'>
             <TextField onChange={this.handleChange} label='title' value={this.state.title} name='title' type='text' required />
             <TextField onChange={this.handleChange} label='description' value={this.state.description} name='description' type='text' required />
             <DateFormatInput name='startsAt' onChange={date => this.handleChange({ target: { value: date, name: 'startsAt' } })} value={new Date(this.state.startsAt)} />
             <div>
               <button onClick={this.dec}>-</button>
               <TextField required onChange={this.handleChange} value={this.state.weeksDuration} name='weeksDuration' type='number' />
               <button onClick={this.inc}>+</button>
             </div>
           </div>

           <UsersManager users={this.state.users} onChange={this.usersChanged} />
           <div className='content-action'>{this.props.bootcamp ? <button onClick={this.saveBootcamp}>saveBootcamp</button> : <button onClick={this.createBootcamp}>Create</button>}</div>
         </div>
       );

  }
}
const mapStateToProps = ({ bootcamps }, { id }) => ({ bootcamp: bootcamps.find(el => String(el._id) === id) });
const mapDispatchToProps = () => ({ editBootcamp, newBootcamp });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBootcamp);
