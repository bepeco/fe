class Spec {
  constructor (el) {
    this.element = el
  }

  id (id) {
    this.element.id = id
    return this
  }

  data (name, value) {
    this.element.setAttribute('data-' + name, value)
    return this
  }

  className (name) {
    this.element.classList.add(name)
    return this
  }

  style (style) {
    for (let arg in style) {
      this.element.style[arg] = style[arg]
    }

    return this
  }

  on (name, listener) {
    this.element.addEventListener(name, function (e) {
      listener(e)
    })
    return this
  }

  children (spec) {
    this.element.appendChild(spec.element)
    return this
  }

  text (text) {
    this.element.innerText = text
    return this
  }
}

export {Spec}
