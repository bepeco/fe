import { getDescriptorNames, applyDescriptor } from './Descriptor'
import defineInterface from '../System/DefineInterface'

const Descriptable = defineInterface((target, allowDescriptorList) => {
  for (const name of getDescriptorNames()) {
    // TODO: 함수를 매번 만드므로 메모리 소모가 심함. 공용함수를 쓸 수 있도록 변경 필요
    const applyDescriptorWrapper = (...args) => {
      applyDescriptor(target, name, ...args)
      return target
    }

    const notAllowedDescriptorWrapper = () => {
      console.warn(`${name} is not allowed descriptor for target:`, target)
      return target
    }

    if (target.hasOwnProperty(name)) {
      throw new Error(`Target object already has property: ${name}`)
    }

    if (allowDescriptorList.length === 0 || allowDescriptorList.includes(name)) {
      target[name] = applyDescriptorWrapper
    } else {
      target[name] = notAllowedDescriptorWrapper
    }
  }
  return target
})

export default Descriptable
