const className = (spec, name) => {
  if (spec.element) {
    spec.element.classList.add(name)
  }
  return spec
}

export { className }
