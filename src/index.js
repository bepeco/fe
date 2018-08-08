import { Freeze } from './ConstDecos'

@Freeze
class Constants {
  name = 'mysticPrg';
  age = 33
}

window.addEventListener('load', () => {
  const data = new Constants()

  const str = `Hello ${data.name}! Your age: ${data.age}`
  document.body.innerHTML = str
})

/*
[Memo]

https://github.com/standard/standard-loader
https://standardjs.com/readme-kokr.html
https://github.com/okonet/lint-staged
https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/ - babel polyfill 추가해야함

CI - https://travis-ci.org/
Coverage report - https://coveralls.io/
Code quality - https://codeclimate.com/
Documentation - https://inch-ci.org/
JSDoc? - intellij auto comment: https://www.jetbrains.com/help/idea/creating-jsdoc-comments.html
ESDoc? - difference with esdoc and jsdoc: https://esdoc.org/manual/faq.html#difference-between-esdoc-and-jsdoc
index.d.ts? generate: https://www.npmjs.com/package/dts-gen

Domain을 염두에 둔다면?
jQuery와 인터페이스를 비슷하게 해도 괜찮을듯(익숙하니까)

specification pattern 적용해볼 수도 있을 듯
spec만 미리 만들어 놓고, Factory가 spec을 받아서 해당하는 노드를 만드는 등?

Explainable?

const btnSpec = Spec().on("click", onClick).className("button").style({ width: 200 });
const btnDivs = [1, 2, 3].map(id => div().spec(btnSpec).data({ id }));

설명이 앞에 오는 형태가 사람이 보기에 더 익숙하지 않을까?

jsx)
<div id="name" onClick={addTodo}}>
  <p><input value={temp}></p>
  <p>Hi</p> // 미리 spec을 만드려면 component를 별도로 작성해야 함
</div>

ex 1)
div().id("name").on("click", addTodo).children(
  p().children(
    input().value(temp)
  ),
  p().spec(todoField).text("Hi")
)

ex 2)
div(
  p(
    input().value(temp)
  )
  p("Hi").spec(todoField)
).id("name").on("click", addTodo)

예제는 역시 TodoList가 좋을듯
const data = [
  { id: 0, done: false, contents: "asdasdad" },
  { id: 1, done: false, contents: "asdasdad" },
  { id: 2, done: false, contents: "asdasdad" }
];
위 데이터를 가져왔다고 치고
추가, 삭제, 수정(내용 및 done 여부) 가능해야 함.
 */
