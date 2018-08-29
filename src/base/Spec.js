import { id } from '../descriptors/id'
import { data } from '../descriptors/data'
import { className } from '../descriptors/className'
import { style } from '../descriptors/style'
import { on } from '../descriptors/on'
import { children } from '../descriptors/children'
import { text } from '../descriptors/text'
import { spec } from '../descriptors/spec'

class Spec {
  constructor (el) {
    this.element = el
    this.specMap = new Map()
  }

  id (name) {
    this.specMap.set('id', {id: name})
    return id(this, name)
  }

  data (name, value) {
    this.specMap.set('data', {name: name, value: value})
    return data(this, name, value)
  }

  className (name) {
    this.specMap.set('className', {name: name})
    return className(this, name)
  }

  style (styles) {
    this.specMap.set('style', {style: styles})
    return style(this, styles)
  }

  on (name, listener) {
    this.specMap.set('on', {name: name, listener: listener})
    return on(this, name, listener)
  }

  children (spec) {
    this.specMap.set('children', {spec: spec})
    return children(this, spec)
  }

  text (str) {
    this.specMap.set('text', {text: str})
    return text(this, str)
  }

  spec (specObj) {
    return spec(this, specObj)
  }
}

export {Spec}
