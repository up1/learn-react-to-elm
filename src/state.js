import { INCREMENT, DECREMENT } from './actions'

export const init = () => ({ counter: 0 })
export const update = (action, state) => {
  switch(action) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return { ...state }
  }
}
