import domToArray from 'bianco.dom-to-array'

/**
 * A helper to make all selections in querySelectorAll scoped, so it behaves as one would expect
 * @param   { String } 			   selector - the selector to be fixed
 * @returns { String } The sanitized selector
 */
const prefixSelector = selector => selector.trim().indexOf(':scope') !== 0 ? `:scope ${ selector }` : selector

/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { String|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Object } DOM nodes in an array like object
 */
export default function $(selector, ctx) {
  return domToArray(typeof selector === 'string' ?
    (ctx || document).querySelectorAll(ctx ? prefixSelector(selector) : selector) :
    selector
  )
}
