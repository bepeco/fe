import {merge} from '../../helper/index'
export const children = (state, ...children) => {
  return merge(state, {children: [...children]})
}
