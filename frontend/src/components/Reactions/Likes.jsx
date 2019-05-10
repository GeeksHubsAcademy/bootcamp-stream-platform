import React from 'react';

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 0,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    // TODO si es el mismo user/diferente user se debería sumar
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
      <div>
        {/* TODO icono */}
        <p onClick={this.updateLikes}>Like</p>
        <p>{this.state.likes}</p>
      </div>
    );

  }


}

export default Likes;
