export const getElem = (selector) => {
  const element = document.querySelectorAll(selector)

  if (element.length > 1) {
    return element
  } else {
    return element[0]
  }
}

export const parseHTML = (template) => {
  var tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = template
  return tmp.body.children[0]
}

export const bindEvent = (events, methods, dom) => {
  for (const [selector, event, methodName] of events) {
    dom.querySelector(selector)[event] = methods[methodName]
  }
}

export const bindComponent = (components, dom) => {
  for (const [selector, component] of components) {
    dom.querySelector(selector).replaceWith(component)
  }
}

export const createStore = () => {
  const store = new Map()
  const subscriber = new Map()
  const nodify = (key) => {
    if (subscriber.has(key)) {
      for (const listener of subscriber.get(key)) {
        listener(store.get(key))
      }
    }
  }

  return {
    set (key, value) {
      store.set(key, value)
      nodify(key)
    },
    get (key) {
      return store.get(key)
    },
    subscribe (key, listener) {
      let listeners
      if (subscriber.has(key)) {
        listeners = subscriber.get(key)
      } else {
        listeners = []
      }
      listeners.push(listener)
      subscriber.set(key, listeners)
    }
  }
}
