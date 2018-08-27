import {immutable, merge} from './helper'

export const children = (...children) => {
  return immutable({
    children: [...children]
  })
}

export const div = (...props) => merge({nodeName: 'div'}, ...props)
export const p = (...props) => merge({nodeName: 'p'}, ...props)
export const text = (txt) => immutable({nodeName: 'text', value: txt})
