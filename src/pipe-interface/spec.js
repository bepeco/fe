import {immutable, merge} from './helper'

export const spec = (...attrs) => immutable({spec: merge(...attrs)})
export const on = (eventName, listener) => immutable({[eventName]: listener})
export const className = className => immutable({className})
