const idMap = new Map()

const createIdObj = ({ id, eventMap = new Map() } = {}) => ({ id, eventMap })

const KEY_SIMPLE = 'my-key'
let idIdx = 0
const makeId = () => {
  let makedKey
  do {
    makedKey = `${KEY_SIMPLE}-${idIdx++}`
  } while (idMap.has(makedKey))

  idMap.set(makedKey, createIdObj({ id: makedKey }))
  return makedKey
}

const registerEventListenerWithId = (id, eventMappingData) => {
  const { eventMap } = idMap.get(id)

  for (const eventName in eventMappingData) {
    const list = eventMap.get(eventName) || []
    const handler = eventMappingData[eventName]
    eventMap.set(eventName, [...list, handler])
  }
}

export const registerEventListener = eventMappingData => {
  const id = makeId()
  registerEventListenerWithId(id, eventMappingData)
  return ` id=${id} `
}

const unsetEventListener = (id, eventMap) => {
  const dom = document.getElementById(id)
  if (!dom) {
    return
  }

  for (const eventName of eventMap.keys()) {
    eventMap
      .get(eventName)
      .forEach(handler => dom.removeEventListener(eventName, handler))
  }
}

const setEventListener = (id, eventMap) => {
  const dom = document.getElementById(id)
  if (!dom) {
    return
  }

  for (const eventName of eventMap.keys()) {
    eventMap
      .get(eventName)
      .forEach(handler => dom.addEventListener(eventName, handler))
  }
}

export const beforeRemoveElements = () => {
  for (const { id, eventMap } of idMap.values()) {
    unsetEventListener(id, eventMap)
  }
}

export const afterCreatedElements = () => {
  for (const { id, eventMap } of idMap.values()) {
    setEventListener(id, eventMap)
  }
}

let renderer = () => {}
export const registerRender = render => (renderer = render)
export const invokeRender = () => {
  beforeRemoveElements()
  renderer()
}

let ready = false

export const initSystem = () => {
  window.addEventListener('load', async () => {
    ready = true
  })

  const observer = new window.MutationObserver(() => {
    if (ready) {
      afterCreatedElements()
    }
  })

  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
  })
}
