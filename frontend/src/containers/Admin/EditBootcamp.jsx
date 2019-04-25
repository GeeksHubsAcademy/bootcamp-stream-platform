import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditBootcamp.scss';

class EditBootcamp extends Component{
    state ={
            bootcampDetails: this.props.bootcamp || []
    }
    handleChange = (ev) => {
        this.setState.bootcampDetails({ bootcampDetails: ev.target.value });
    }
    render(){
        console.log(this.props.bootcamp)
        return(
            
            <div className="editBootcamp">
                <div className="content-edit">
                    <input onChange={this.handleChange} value={this.state.bootcampDetails.title || ''} type="text"/>
                    <input onChange={this.handleChange} value={this.state.bootcampDetails.description || ''} type="text"/>
                    <input onChange={this.handleChange} value={this.state.bootcampDetails.startsAt || ''} type="text"/>
                    <input onChange={this.handleChange} value={this.state.bootcampDetails.title || ''} type="text"/>
                </div>
                <div>
                    <button>Save</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ( {bootcamps}, {id}) => ({ bootcamp: bootcamps.find(el => String(el._id) === id) });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBootcamp);