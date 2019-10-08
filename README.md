# Tiny Curry

A javascript curry function. That's it. Nothing else.

---

## Basic Usage

```js
import curry from '@earthtone/tiny-curry'

const getName = prop => obj => obj[prop]
const capitalize = string => string.charAt(0) + string.slice(1)

const capitalizedFirstName = curry(
  capitalize,
  getName('first_name')
)

const result = capitalizedFirstName({
  first_name: 'wally'
  last_name: 'west'
})

console.log(result) // -> 'Wally'
```
