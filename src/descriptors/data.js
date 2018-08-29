const data = (spec, name, value) => {
  if (spec.element) {
    spec.element.setAttribute('data-' + name, value)
  }
  return spec
}

export { data }
