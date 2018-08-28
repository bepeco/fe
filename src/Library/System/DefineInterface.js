const defineInterface = builder => (...decoratorParams) => targetClass =>
  class extends targetClass {
    constructor (...args) {
      super(...args)

      builder(this, decoratorParams)
    }
  }

export default defineInterface
