import {merge} from '../../helper/index'
export const spec = (state, ...attrs) => {
  return merge(state, {spec: merge(...attrs)})
}
