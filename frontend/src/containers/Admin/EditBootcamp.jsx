import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditBootcamp.scss';

class EditBootcamp extends Component{


    render(){
        
        console.log(this.props.bootcamps)
      //  const bootcamp = this.props.bootcamps_id;
        const bootc_id = 123
        return(
            <div className="editBootcamp">
                <div className="content-edit">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div>
                    <button>Save</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ( {bootcamps}) => ({ bootcamps });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBootcamp);