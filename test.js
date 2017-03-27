require('jsdom-global')()
const assert = require('assert')
const $ = require('./')
const body = document.body

describe('Bianco query', function() {
  before(function() {
    var div = document.createElement('div')

    div.innerHTML = `
    <ul>
      <li class='item'></li>
      <li class='item'></li>
    </ul>
    `
    body.appendChild(div)
  })

  it('It can query the DOM properly', function() {
    const div = $('div')
    assert.equal(typeof div, 'object')
    assert.equal(div.length, 1)
    assert.equal($('.item', div[0]).length, 2)
  })

  it('It can handle also DOM nodes', function() {
    const els = $(document.querySelector('div')).concat($(document.querySelector('ul')))
    assert.equal(typeof els, 'object')
    assert.equal(els.length, 2)
  })

  it('No matched queries return empty arrays', function() {
    const els = $('.foo')
    assert.equal(Array.isArray(els), true)
    assert.equal(typeof els, 'object')
    assert.equal(els.length, 0)
  })
})
