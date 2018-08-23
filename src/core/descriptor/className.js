import Spec from '../Spec'
export const className = (state, name) => {
  state.className = name
  return new Spec(state)
}
