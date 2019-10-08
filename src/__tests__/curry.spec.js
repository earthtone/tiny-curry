import test from 'ava'
import { curry } from '../curry'

test('curries a single value', assert => {
  const fn = curry((a, b, c, d) => (a + b * c) / d)
  const g = fn(12)

  assert.is(g(3, 6, 2), 15)
})

test('curries multiple values', assert => {
  const fn = curry((a, b, c, d) => (a + b * c) / d)
  const g = fn(12, 3)
  assert.is(g(6, 2), 15)
  const h = fn(12, 3, 6)
  assert.is(h(2), 15)
})

test('allows further currying of a curried function', assert => {
  const fn = curry((a, b, c, d) => (a + b * c) / d)
  const g = fn(12)
  assert.is(g(3, 6, 2), 15)
  const h = g(3)
  assert.is(h(6, 2), 15)
  assert.is(g(3, 6)(2), 15)
})
