require('jsdom-global')()
const assert = require('assert')
const $ = require('./')

function setup() {
  var div = document.createElement('div')

  div.innerHTML = `
  <ul>
    <li class='item'></li>
    <li class='item'></li>
  </ul>
  `
  document.body.appendChild(div)
}

setup()

const div = $('div')
assert.equal(typeof div, 'object')
assert.equal(div.length, 1)

assert.equal($('.item', div[0]).length, 2)



