import Exportable from '../Exporter/Exportable'
import Descriptable from '../Descriptor/Descriptable'

const defines = [
  {
    name: 'Div',
    tag: 'div',
    attributes: ['id']
  }
]

const exporters = ['toJSON', 'toDOM', 'toString']

const createElementClass = define => {
  const elementClass = class {
    name = define.name
    tag = define.tag
  }
  return Exportable(...exporters)(Descriptable(...define.attributes)(elementClass))
}

const elementFactories = {}
defines.forEach(define => {
  const {name} = define
  const Class = createElementClass(define)
  elementFactories[name] = (...args) => new Class(...args)
})

const {Div} = elementFactories

export { Div }
