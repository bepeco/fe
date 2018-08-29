import {Spec} from './base/Spec'

import {div} from './elements/div'
import {p} from './elements/p'

import {toString} from './exports/toString'
import { toDOM } from './exports/toDOM'

const onClick = (e) => {
  console.log('onClick e = ', e)
}

window.addEventListener('load', () => {
  const divSample = div().id('testDiv').data('id', 'test').className('testdiv').text('divSample')
    .style({
      width: '200px',
      height: '150px',
      'background-color': 'blue'
    })

  const childrenSample = divSample.children(
    p().text('chidrenSample!').style({width: '300px', 'background-color': 'yellow'})
  )

  const divSpec = new Spec().id('specTest')
    .className('testdiv').style({width: '200px', 'background-color': 'red'}).text('specTest')
  const specSample = div().spec(divSpec)

  document.body.innerHTML += toString(childrenSample)
  document.body.innerHTML += toString(specSample)

  divSample.on('click', onClick)
  childrenSample.on('click', onClick)
  specSample.on('click', onClick)

  console.log('toDOM = ', toDOM(divSample))
})
