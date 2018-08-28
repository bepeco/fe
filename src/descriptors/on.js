let onMap = new WeakMap()

const on = (eventName, listener) => {
  onMap.set(eventName)
}

export { on }
