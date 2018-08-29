const style = (spec, style) => {
  if (spec.element) {
    for (let arg in style) {
      spec.element.style[arg] = style[arg]
    }
  }
  return spec
}

export { style }
