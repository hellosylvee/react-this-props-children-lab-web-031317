import React, { Component } from 'react' ;

class Invitation extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Invitation
