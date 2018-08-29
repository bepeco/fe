const on = (spec, name, listener) => {
  if (spec.element) {
    const el = document.getElementById(spec.element.id)
    if (el) {
      el.addEventListener(name, listener, false)
    }
  }
  return spec
}

export { on }
