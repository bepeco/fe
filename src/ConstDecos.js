export const Freeze = TargetCls => class extends TargetCls {
  constructor (...rest) {
    super(...rest)
    return Object.freeze(this)
  }
}

export const Readonly = (target, property, descriptor) => {
  descriptor.writable = false
  return descriptor
}
