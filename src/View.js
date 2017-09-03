import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from './actions'

class View extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <button className='add' onClick={ this.props.onAction(INCREMENT) }>+</button>
        <h1 className='result'>{this.props.counter}</h1>
        <button className='minus' onClick={ this.props.onAction(DECREMENT) }>-</button>
      </div>
    )
  }
}

export default View
