import React, { Component } from 'react';
import * as State from './state'
import { INCREMENT, DECREMENT } from './actions'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = State.init()
  }
  render() {
    const { counter } = this.state
    const add = () => this.setState(State.update(INCREMENT, this.state))
    const minus = () => this.setState(State.update(DECREMENT, this.state))
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
