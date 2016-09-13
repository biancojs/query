
/**
 * Simple helper to find DOM nodes returning them as Array
 * @param   { String|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search DOM nodes
 * @returns { Array } DOM nodes in an array
 */
export default function $(selector, ctx) {
  var els = selector

  // find the DOM nodes
  if (typeof selector === 'string')
    els = (ctx || document).querySelectorAll(selector)


  // arraify the DOM nodes found
  if (!Array.isArray(els))
    els = Array.from(els)

  return els
}
