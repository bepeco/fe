import Exportable from '../Exporter/Exportable'
import Descriptable from '../Descriptor/Descriptable'

const defines = [
  {
    name: 'Div',
    tag: 'div',
    attributes: ['id']
  }
]

class BaseElement {
  constructor (name = 'Element', tag = 'none') {
    this.name = name
    this.tag = tag
  }
}

const exporters = ['toJSON', 'toDOM', 'toString']

const createElementClass = define => {
  const elementClass = class extends BaseElement {
    constructor () {
      super(define.name, define.tag)
    }
  }
  return Exportable(...exporters)(
    Descriptable(...define.attributes)(elementClass)
  )
}

const elementFactories = {}
defines.forEach(define => {
  const {name} = define
  const Class = createElementClass(define)
  elementFactories[name] = (...args) => new Class(...args)
})

const {Div} = elementFactories

export { BaseElement, Div }
