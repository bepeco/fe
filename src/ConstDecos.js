/**
 * Freeze target Class
 * @param {Class} TargetCls - target class
 * @return {Class} Freezed target class
 */
export const Freeze = TargetCls => class extends TargetCls {
  constructor (...rest) {
    super(...rest)
    return Object.freeze(this)
  }
}

/**
 * Readonly function
 * @param target
 * @param property
 * @param descriptor
 * @returns {descriptor}
 * @constructor
 */
export const Readonly = (target, property, descriptor) => {
  descriptor.writable = false
  return descriptor
}
