import domToArray from 'bianco.dom-to-array'

/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { String|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Object } DOM nodes in an array like object
 */
export default function $(selector, ctx) {
  return domToArray(typeof selector === 'string' ?
    (ctx || document).querySelectorAll(selector) :
    selector
  )
}
