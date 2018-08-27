import Spec from '../Spec'
export const chainLift = (state, operators) => {
  const newOperators = {}
  for (const [name, cb] of Object.entries(operators)) {
    newOperators[name] = (...args) => Spec(cb(state, ...args))
  }
  return newOperators
}
export const lift = (state, operators) => {
  const newOperators = {}
  for (const [name, cb] of Object.entries(operators)) {
    newOperators[name] = (...args) => cb(state, ...args)
  }
  return newOperators
}

export const immutable = obj => Object.freeze(obj)
export const merge = (...objs) => Object.assign({}, ...objs)
