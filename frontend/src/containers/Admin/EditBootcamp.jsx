import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersManager from './UsersManager.jsx';
import TextField from '@material-ui/core/TextField';
import { DateFormatInput } from 'material-ui-next-pickers';
import { editBootcamp } from '../../redux/actions';
import './EditBootcamp.scss';

class EditBootcamp extends Component {
  state = this.props.bootcamp || {
    title: '',
    description: '',
    startsAt: new Date(),
    weeksDuration: 1,
    users: [],
    posts: [],
  };

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
    // this.props.dispatch({type:'SAVE_BOOTCAMP',payload: this.state.id})
    console.log('Saved', this.state);
    console.log('date', typeof this.state.startsAt);
  };
  saveBootcamp = () => {
    // this.props.dispatch({type:'SAVE_BOOTCAMP',payload: this.state.id})
    this.props.editBootcamp(this.state)
    console.log('Saved', this.state);
    console.log('date', typeof this.state.startsAt);
  };
  usersChanged = users => {
    this.setState({ users });
  };
  render() {
    return (
      <div className='editBootcamp'>
        <div className='content-edit'>
          <TextField onChange={this.handleChange} label='title' value={this.state.title} name='title' type='text' />
          <TextField onChange={this.handleChange} label='description' value={this.state.description} name='description' type='text' />
          <DateFormatInput name='startsAt' onChange={date => this.handleChange({ target: { value: date, name: 'startsAt' } })} value={this.state.startsAt} />
          <div>
            <button onClick={this.dec}>-</button>
            <TextField onChange={this.handleChange} value={this.state.weeksDuration} name='weeksDuration' type='number' />
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
const mapDispatchToProps = () => ({ editBootcamp });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBootcamp);
