import Spec from '../index'
export const className = (state, name) => {
  state.className = name
  return new Spec(state)
}
