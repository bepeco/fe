// import {Spec} from './base/Spec'

import {div} from './elements/div'
import {p} from './elements/p'

import {toString} from './exports/toString'
// import { toDOM } from './exports/toDOM'

const onClick = (e) => {
  console.log('onClick e = ', e)
}

window.addEventListener('load', () => {
  let divSample = div().id('testDiv').data('id', 'test').on('click', onClick).className('testdiv')
    .style({
      width: '200px',
      height: '150px'
    })

  const childrenSample = divSample.children(
    p().text('p Sample!').style({width: '300px'})
  )

  // const divSpec = new Spec().on('click', onClick).className('testdiv').style({width: '200px'})
  // const specSample = div().spec(divSpec)

  document.body.innerHTML = toString(divSample)
  document.body.innerHTML += toString(childrenSample)
  // document.body.innerHTML += toString(specSample)

  // console.log('toDOM = ', toDOM(divSample))
})
