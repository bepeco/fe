import Spec from '../src/dot-chaining-interface/Spec'

/** @test {spec} */
describe('spec()을 호출할 때 on을 포함하면', () => {
  test('on을 포함한 Object가 반환 된다.', () => {
    const spec = Spec()
      .on('click', () => {})
  
    expect(typeof spec.on).not.toEqual('undefined')
    expect(typeof spec).toEqual('object')
  })
})