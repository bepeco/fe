import { Freeze, Readonly } from './ConstDecos'

/** @test {Readonly} */
describe('Readonly를 적용한 property는', () => {
  test('값을 변경하려 하면 Error가 throw 된다.', () => {
    class Target {
      @Readonly
      prop = 1
    }
    const target = new Target()

    expect(() => { target.prop = 2 }).toThrow()
  })
})

/** @test {Freeze} */
describe('Freeze를 적용한 class는', () => {
  test('모든 property에 대해 값을 변경하려 하면 Error가 throw 된다.', () => {
    @Freeze
    class Target {
      prop = 1
      prop2 = 1
    }

    const target = new Target()

    expect(() => { target.prop = 2 }).toThrow()
    expect(() => { target.prop2 = 2 }).toThrow()
  })
})
