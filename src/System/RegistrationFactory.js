const RegistrationFactory = (category, validator) => {
  const registry = new Map()

  const Decorator = name => TargetClass => {
    validator(name, TargetClass)
    checkDuplicatedName(category, registry, name)
    registry.set(name, new TargetClass())

    return TargetClass
  }

  const getRegistrationNames = () => Array.from(registry.keys())
  const getRegistrationData = name => registry.get(name)

  return {
    Decorator,
    getRegistrationNames,
    getRegistrationData
  }
}

const checkDuplicatedName = (category, registry, name) => {
  if (registry.has(name)) {
    throw new Error(`"${name}" is already registered in ${category}`)
  }
}

export default RegistrationFactory
