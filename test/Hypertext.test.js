import Spec from '../src/dot-chaining-interface/Spec'
import {div, p, text} from '../src/dot-chaining-interface/Hypertext'

/** @test {div} */
describe('div()을 호출하면', () => {
  test('toJSON을 통해 nodeName이 div로 반환 된다.', () => {
    const divHyperText = div()
    
    expect(divHyperText.toJSON().nodeName).toEqual('div')
  })
})

/** @test {p} */
describe('p()을 호출하면', () => {
  test('toJSON을 통해 nodeName이 div로 반환 된다.', () => {
    const pHyperText = p()
    
    expect(pHyperText.toJSON().nodeName).toEqual('p')
  })
})

/** @test {text} */
describe('text()을 호출하면', () => {
  test('toJSON을 통해 nodeName이 div로 반환 된다.', () => {
    const textHyperText = text()
    
    expect(textHyperText.toJSON().nodeName).toEqual('text')
  })
})