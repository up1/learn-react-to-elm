import React, { Component } from 'react';
import * as State from './state'
import { INCREMENT, DECREMENT } from './actions'
import View from './View'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = State.init()
  }
  render() {
    const { counter } = this.state
    const onAction = message =>
      () =>
        this.setState(State.update(message, this.state));

    return (
      <View counter={counter} onAction={onAction}/>
    );
  }
}

export default Counter;
