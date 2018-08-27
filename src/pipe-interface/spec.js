import {immutable, merge} from './helper'

export const spec = (...attrs) => {
  return immutable({
    spec: merge(...attrs)
  })
}

export const on = (eventName, listener) => {
  return immutable({ [eventName]: listener })
}

export const className = (className) => immutable({ className })
