import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserManagement from './UserManagement.jsx';
import './EditBootcamp.scss';

class EditBootcamp extends Component {
    state = this.props.bootcamp || {
        title: '',
        description: '',
        startsAt: '',
        weeksDuration: 1

    }
    

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }
    inc = () => {
        if(this.state.weeksDuration < 15){
            this.setState({
                weeksDuration: this.state.weeksDuration + 1
            })
        }
    }
    dec = () => {
        if (this.state.weeksDuration > 1){
            this.setState({
                weeksDuration: this.state.weeksDuration - 1
            })
        }
    }
        saveBootcamp = () => {
        // this.props.dispatch({type:'SAVE_BOOTCAMP',payload: this.state.id})
        console.log('Saved', this.state)
    }
    render() {
        return (

            <div className="editBootcamp">
                <div className="content-edit">
                    <input onChange={this.handleChange} placeholder="title" value={this.state.title || ''} name="title" type="text" />
                    <input onChange={this.handleChange} placeholder="description" value={this.state.description || ''} name="description" type="text" />
                    <input onChange={this.handleChange} placeholder="Fecha de Inicio" value={this.state.startsAt || ''} name="startsAt" type="date" />
                    <div>
                        <button onClick={ this.dec}>-</button> 
                        <input onChange={this.handleChange}
                            value={this.state.weeksDuration} 
                            name="weeksDuration" type="text" min={1} max={12} readOnly/>
                        <button onClick={ this.inc}>+</button>
                    </div>
                </div>
                <div className="content-action">
                    <button onClick={() => this.saveBootcamp(this.state)}>
                        {(this.props.bootcamp ? 'Save' : 'Create')}</button>
                    <button>Delete</button>
                </div>
                <div>

                    <UserManagement bootcampUsers={this.state.users} onSelect={console.log}></UserManagement>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ bootcamps }, { id }) => ({ bootcamp: bootcamps.find(el => String(el._id) === id) });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditBootcamp);