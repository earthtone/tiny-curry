/**
 * Curry a function
 *
 * @func
 * @param {Function} fn
 * @param {Number} arity - number of arguments
 * @return {Function}
 * */

export function curry (fn, arity = fn.length) {
  return function _curry (...args) {
    if (args.length < arity) {
      return _curry.bind(null, ...args)
    }
    return fn(...args)
  }
}
