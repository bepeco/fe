import {merge} from '../../helper/index'
export const on = (state, eventName, listener) => {
  return merge(state, {[eventName]: listener})
}
