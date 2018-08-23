import Spec from '../index'
export const on = (state, eventName, listener) => {
  state[eventName] = listener
  return new Spec(state)
}
