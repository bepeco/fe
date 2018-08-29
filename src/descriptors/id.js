const id = (spec, name) => {
  if (spec.element) {
    spec.element.id = name
  }
  return spec
}

export { id }
