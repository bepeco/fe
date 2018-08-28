const RegistrationFactory = (category, validator) => {
  // <name: String, target_instance: any>
  // target_instance: ex) IdDescriptor, JSONExporter, etc...
  const registry = new Map()

  const Decorator = name => TargetClass => {
    checkDuplicatedName(category, registry, name)
    validator(name, TargetClass)

    const targetInstance = new TargetClass()
    registry.set(name, targetInstance)

    return TargetClass
  }

  const getRegistrationNames = () => Array.from(registry.keys())
  const getInstance = name => registry.get(name)

  return {
    Decorator,
    getRegistrationNames,
    getInstance
  }
}

const checkDuplicatedName = (category, registry, name) => {
  if (registry.has(name)) {
    throw new Error(`"${name}" is already registered in ${category}`)
  }
}

export default RegistrationFactory
