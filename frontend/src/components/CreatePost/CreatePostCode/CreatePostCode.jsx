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
 

                <Highlight>
                    <div>
                        {this.props.data.content.code}                  
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