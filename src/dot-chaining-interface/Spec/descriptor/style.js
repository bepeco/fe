import {merge} from '../../helper/index'
export const style = (state, styles) => {
  return merge(state, {style: styles})
}
