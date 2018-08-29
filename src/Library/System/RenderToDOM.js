const renderToDOM = (targetDOM, component) => {
  const {stringify} = JSON

  const p = document.createElement('p')
  p.innerText = `${stringify(component.toJSON())}`
  targetDOM.append(p)
}

export default renderToDOM
