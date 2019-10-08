# Tiny Curry

![CI Status](https://travis-ci.org/earthtone/tiny-curry.svg?branch=master)

A javascript curry function. That's it. Nothing else.

---

## Basic Usage

```js
import curry from '@earthtone/tiny-curry'

const get = curry((prop, obj) => obj[prop])
const getFirstName = get('first_name')

const result = getFirstName({
  first_name: 'Wally'
  last_name: 'West'
})

console.log(result) // -> 'Wally'
```
