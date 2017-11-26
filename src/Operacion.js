import React, { Component } from 'react';

class Operacion extends Component{
  render() {
    return (
      <button className="nan" onClick={this.props.onClick}>{this.props.operacion}</button>
    );
  }
}

export default Operacion;
