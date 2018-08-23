export default (state, operators) => {
  const newOperators = {}
  for (const [name, cb] of Object.entries(operators)) {
    newOperators[name] = (...args) => cb(state, ...args)
  }
  return newOperators
}
