import React, { Component } from 'react';

class Pantalla extends Component {
  render(){
    return (
      <input className="pantalla" value={this.props.value} maxLength={4} />
    );
  }
}

export default Pantalla;
