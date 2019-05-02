import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Highlight from 'react-highlight';


import './CreatePostCode.scss';



class CreatePostCode extends Component{

    state= {
        text: '',
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }
    render(){
        return(
            <div className="CreatePostCode">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
                <div>
                        <textarea cols='45' rows='5' name="text" onChange={this.handleChange}>
                        </textarea>
                </div>
                <Highlight>               

                        {this.state.text}
    
                </Highlight>
                <Highlight>
                    <div>
                        {"<?php echo 'hola' ?>"}
                        </div>
                </Highlight>
            </div>
        )
    }
}
// const mapStateToProps = ({ undefined}) => ({ undefined});
// const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CreatePostCode);

export default CreatePostCode;