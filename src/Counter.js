import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  render() {
    const { counter } = this.state
    const add = () => this.setState({counter: counter + 1})
    const minus = () => this.setState({counter: counter - 1})
    return (
      <div>
        <button className='add' onClick={add}>+</button>
        <h1 className='result'>{counter}</h1>
        <button className='minus' onClick={minus}>-</button>
      </div>
    );
  }
}

export default Counter;
