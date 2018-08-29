class Spec {
  constructor (el) {
    this.element = el
    this.specMap = new Map()
  }

  id (id) {
    this.specMap.set('id', {id: id})
    if (this.element) {
      this.element.id = id
    }
    return this
  }

  data (name, value) {
    this.specMap.set('data', {name: name, value: value})
    if (this.element) {
      this.element.setAttribute('data-' + name, value)
    }
    return this
  }

  className (name) {
    this.specMap.set('className', {name: name})
    if (this.element) {
      this.element.classList.add(name)
    }
    return this
  }

  style (style) {
    this.specMap.set('style', {style: style})
    if (this.element) {
      for (let arg in style) {
        this.element.style[arg] = style[arg]
      }
    }
    return this
  }

  on (name, listener) {
    this.specMap.set('on', {name: name, listener: listener})
    if (this.element) {
      const el = document.getElementById(this.element.id)
      if (el) {
        el.addEventListener(name, listener, false)
      }
    }
    return this
  }

  children (spec) {
    this.specMap.set('children', {spec: spec})
    if (this.element) {
      this.element.appendChild(spec.element)
    }
    return this
  }

  text (text) {
    this.specMap.set('text', {text: text})
    if (this.element) {
      this.element.innerText = text
    }
    return this
  }

  spec (spec) {
    spec.specMap.forEach((val, key) => {
      if (key === 'id') {
        this.id(val.id)
      } else if (key === 'data') {
        this.data(val.name, val.data)
      } else if (key === 'className') {
        this.className(val.name)
      } else if (key === 'style') {
        this.style(val.style)
      } else if (key === 'on') {
        this.on(val.name, val.listener)
      } else if (key === 'text') {
        this.text(val.text)
      }
    })
    return this
  }
}

export {Spec}
