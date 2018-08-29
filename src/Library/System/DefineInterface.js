const isFirstDepthDecorator = params => {
  if (params.length === 1 && typeof params[0] === 'function') {
    return true
  }

  return false
}

const defineInterface = builder => (...decoratorParams) => {
  const decorator = targetClass =>
    class extends targetClass {
      constructor (...args) {
        super(...args)

        builder(this, decoratorParams)
      }
    }

  if (isFirstDepthDecorator(decoratorParams)) {
    const TargetClass = decoratorParams.shift()
    return decorator(TargetClass)
  }

  return decorator
}

export default defineInterface
