
import React, { Component } from 'react';

class Boton extends Component {

	render() {
		return (
			<button onClick={this.props.onClick} tabIndex={this.props.valor} >{this.props.valor}</button>
			);
	}
}

export default Boton;
