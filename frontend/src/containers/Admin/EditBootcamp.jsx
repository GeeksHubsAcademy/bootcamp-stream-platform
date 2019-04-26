import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditBootcamp.scss';

class EditBootcamp extends Component {
    state = this.props.bootcamp ||   {
            title: '',
            description: '',
            startsAt: '',
        
        }

    handleChange = (ev) => {
        this.setState({  [ev.target.name] : ev.target.value });
    }
    saveBootcamp = () => {
        // this.props.dispatch({type:'SAVE_BOOTCAMP',payload: this.state.id})
        console.log('Saved', this.state)
    }
    render() {
        console.log(this.props.bootcamp)
        return (

            <div className="editBootcamp">
                <div className="content-edit">
                    <input onChange={this.handleChange} placeholder="title" value={this.state.title || ''} name="title" type="text" />
                    <input onChange={this.handleChange} placeholder="description" value={this.state.description || ''} name="description" type="text" />
                    <input onChange={this.handleChange} placeholder="Fecha de Inicio" value={this.state.startsAt || ''} name="startsAt" type="date" />
                    <input onChange={this.handleChange} placeholder="Duracion (semanas)" value={this.state.weeksDuration || ''} name="weeksDuration" type="text" />
                </div>
                <div className="content-action">
                    <button onClick={() => this.saveBootcamp(this.state)}>
                        {(this.props.bootcamp ? 'Save' : 'Create')}</button>
                    <button>Delete</button>
                </div>
                <div>
                    
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