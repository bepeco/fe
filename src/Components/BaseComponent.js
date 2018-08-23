class Component {
  id = -1

  constructor (id) {
    this.id = id
  }

  beforeCreate () {}

  afterCreate () {}

  beforeUpdate () {}

  afterUpdate () {}

  beforeDestroy () {}

  afterDestroy () {}

  render () {
    return ''
  }

  show = (...args) => {
    const templates = Array.from(args.shift())
    const argsCount = args.length
    const resultArr = []
    for (let i = 0; i < argsCount; i++) {
      resultArr.push(templates.shift())
      const arg = args.shift()
      if (typeof arg === 'function') {
        const getNodeInfo = arg
        const {node, model, actions} = getNodeInfo(this, i)
        const domString = node.render(model, actions)
        resultArr.push(domString)
      } else {
        resultArr.push(arg)
      }
    }
    resultArr.push(templates.shift())

    return resultArr.join('')
  }
}

class SampleComponent extends Component {
  constructor (id) {
    super(id)
    console.log('Sample created:', id)
  }

  render = (model, actions) => {
    return this.show`
        <div>data: ${model.data}</div><div>n: ${model.n}</div>
        <div>data: ${model.data}</div><div>n: ${model.n * 2}</div>
    `
  }
}

const nodeMap = new WeakMap()
const exportClass = Cls => (model, actions) => (parent, nodeId) => {
  const nodes = nodeMap.get(parent) || new Map()
  if (nodes.has(nodeId)) {
    return {
      node: nodes.get(nodeId),
      model,
      actions
    }
  } else {
    const node = new Cls(nodeId)
    nodes.set(nodeId, node)
    return {
      node,
      model,
      actions
    }
  }
}
const Sample = exportClass(SampleComponent)
const App = new Component().show`${Sample({data: 'sample1', n: 1})}, ${Sample({data: 'sample2', n: 3})}`

export { Component, exportClass, App }

// 식별자 필요. 뭘로? 객체그자체 + 자식노드ID => 자식노드ID를 어떻게 구분하지?
