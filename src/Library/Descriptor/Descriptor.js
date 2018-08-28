import RegistrationFactory from '../System/RegistrationFactory'

// WeakMap<targetInstance: Descriptable, map<descriptorName: String, data: any>>
const descriptorDatabase = new WeakMap()

const descriptorValidator = (descriptorName, TargetClass) => {
  if (
    !TargetClass.prototype.hasOwnProperty('onApply') &&
    !TargetClass.hasOwnProperty('onApply')
  ) {
    throw new Error(`${descriptorName} Descriptor must have "onApply" method.`)
  }

  if (
    !TargetClass.prototype.hasOwnProperty('getData') &&
    !TargetClass.hasOwnProperty('getData')
  ) {
    throw new Error(`${descriptorName} Descriptor must have "getData" method.`)
  }
}

const {
  Decorator: Descriptor,
  getRegistrationNames: getDescriptorNames,
  getInstance
} = RegistrationFactory('Descriptor', descriptorValidator)

const applyDescriptor = (target, descriptorName, ...args) => {
  // Map<descriptorName: String, data: any>
  const map = descriptorDatabase.get(target) || new Map()
  const descriptorData = map.get(descriptorName) || {}
  const descriptor = getInstance(descriptorName)

  descriptor.onApply(target, descriptorData, ...args)
  map.set(descriptorName, descriptorData)
  descriptorDatabase.set(target, map)
}

const getDescriptorData = target => {
  const map = descriptorDatabase.get(target) || new Map()
  const desctiptorData = []
  for (const descriptorName of map.keys()) {
    const descriptor = getInstance(descriptorName)
    const data = map.get(descriptorName) || {}
    desctiptorData.push({
      name: descriptorName,
      data: descriptor.getData(target, data)
    })
  }

  return desctiptorData
}

export { Descriptor, getDescriptorNames, applyDescriptor, getDescriptorData }
