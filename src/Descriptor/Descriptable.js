import { getDescriptorNames, applyDescriptor } from './Descriptor'

const Descriptable = targetClass => class extends targetClass {
  constructor (...args) {
    super(...args)

    makeDescriptable(this)
  }
}

const makeDescriptable = target => {
  for (const name of getDescriptorNames()) {
    if (target.hasOwnProperty(name)) {
      throw new Error(`Target object already has property: ${name}`)
    }

    target[name] = (...args) => {
      applyDescriptor(target, name, ...args)
      return target
    }
  }

  return target
}

export default Descriptable
