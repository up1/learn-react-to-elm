import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }
  render() {
    const {counter} = this.state
    const add = () => this.setState({counter: counter+1})
    const minus = () => this.setState({counter: counter-1})
    return (
      <div>
        <button onClick={add}>+</button>
        <h1>{counter}</h1>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default Counter;
