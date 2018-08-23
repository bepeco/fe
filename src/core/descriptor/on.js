import Spec from '../Spec'
export const on = (state, eventName, listener) => {
  state[eventName] = listener
  return new Spec(state)
}
