import React, { Component } from 'react';
import './App.css';
import Boton from './Boton';
import Operacion from './Operacion';
import Pantalla from './Pantalla';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      op: 0,
      display: '',
      num1: '',
      num2: '',
      operation: '',
    };
  }

  meterValor(numero) {
    if (this.state.op === 1) {
      this.setState({
        display: this.state.num2 + numero,
        num2: this.state.num2 + numero,
      });
    } else {
      this.setState({
        display: this.state.display + numero,
        num1: this.state.num1 + numero,
      });
    }
  }
  operaciones(sim) {
    if (sim === 'AC') {
      this.setState({
        display: '',
        op: 0,
        num1: '',
        num2: '',
        operation: '',
      });
    } else if (sim === '←') {
      if (this.state.op === 1) {
        this.setState({
          display: this.state.display.substr(0, this.state.display.length - 1),
          num2: this.state.num2.substr(0, this.state.num2.length - 1),
        });
      } else {
        this.setState({
          display: this.state.display.substr(0, this.state.display.length - 1),
          num1: this.state.num1.substr(0, this.state.num1.length - 1),
        });
      }
    } else if (sim === '=') {
      const num1 = parseFloat(this.state.num1, 10);
      const num2 = parseFloat(this.state.num2, 10);
      let tot;
      switch (this.state.operation) {
        default:

          break;
        case '+':
          tot = num1 + num2;
          this.setState({
            display: tot,
            num1: tot,
            num2: '',
          });
          break;
        case '/':
          tot = num1 / num2;
          this.setState({
            display: tot,
            num1: tot,
            num2: '',
          });
          break;
        case '-':
          tot = num1 - num2;
          this.setState({
            display: tot,
            num1: tot,
            num2: '',
          });
          break;
        case 'x':
          tot = num1 * num2;
          this.setState({
            display: tot,
            num1: tot,
            num2: '',
          });
          break;
      }
    } else {
      this.setState({
        display: this.state.display + sim,
        op: 1,
        operation: sim,
      });
    }
  }

  render() {
    return (   
      <div className="App">
        <div className="top" />
        <Pantalla value={this.state.display} />
        <div className="top" />
        <br />
        <Operacion operacion="←" onClick={this.operaciones.bind(this, '←')} />
        <Boton valor="7" onClick={this.meterValor.bind(this, 7)} />
        <Boton valor="8" onClick={this.meterValor.bind(this, 8)} />
        <Boton valor="9" onClick={this.meterValor.bind(this, 9)} />
        <Operacion operacion="÷" onClick={this.operaciones.bind(this, '/')} />
        <br />
        <Operacion operacion="AC" onClick={this.operaciones.bind(this, 'AC')} />
        <Boton valor="4" onClick={this.meterValor.bind(this, 4)} />
        <Boton valor="5" onClick={this.meterValor.bind(this, 5)} />
        <Boton valor="6" onClick={this.meterValor.bind(this, 6)} />
        <Operacion operacion="x" onClick={this.operaciones.bind(this, 'x')} />
        <br />
        <Operacion operacion="=" onClick={this.operaciones.bind(this, '=')} />
        <Boton valor="1" onClick={this.meterValor.bind(this, 1)} />
        <Boton valor="2" onClick={this.meterValor.bind(this, 2)} />
        <Boton valor="3" onClick={this.meterValor.bind(this, 3)} />
        <Operacion operacion="-" onClick={this.operaciones.bind(this, '-')} />
        <br />
        <Boton valor="." onClick={this.meterValor.bind(this, '.')} />
        <Boton valor="0" onClick={this.meterValor.bind(this, 0)} />
        <Operacion operacion="+" onClick={this.operaciones.bind(this, '+')} />
        <br />
        <div className="top" />
        <h1>Hugo Noriega</h1>
        <h1>14097</h1>
      </div>
    );
  }
}

export default App;
