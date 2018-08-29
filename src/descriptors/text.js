const text = (spec, str) => {
  if (spec.element) {
    spec.element.innerText = str
  }
  return spec
}

export { text }
