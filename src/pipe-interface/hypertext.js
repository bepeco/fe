import {immutable, merge} from './helper'

export const children = (...children) => immutable({children: [...children]})
export const div = (...props) => merge({nodeName: 'div'}, ...props)
export const p = (...props) => merge({nodeName: 'p'}, ...props)
export const text = value => immutable({nodeName: 'text', value})
