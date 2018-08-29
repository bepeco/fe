const spec = (spec, specObj) => {
  specObj.specMap.forEach((val, key) => {
    if (key === 'id') {
      spec.id(val.name)
    } else if (key === 'data') {
      spec.data(val.name, val.data)
    } else if (key === 'className') {
      spec.className(val.name)
    } else if (key === 'style') {
      spec.style(val.style)
    } else if (key === 'on') {
      spec.on(val.name, val.listener)
    } else if (key === 'text') {
      spec.text(val.text)
    }
  })
  return spec
}

export { spec }
