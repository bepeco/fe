const children = (spec, specObj) => {
  if (spec.element) {
    spec.element.appendChild(specObj.element)
  }
  return spec
}

export { children }
