import domToArray from 'bianco.dom-to-array'

/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        scope      - context defining where the query will search for the DOM nodes
 * @returns { Array } DOM nodes found as array
 */
export default function $(selector, scope) {
  return domToArray(typeof selector === 'string' ?
    (scope || document).querySelectorAll(selector) :
    selector
  )
}
