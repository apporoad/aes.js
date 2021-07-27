# aes.js
easy use for aes-js


## how 2 use
```bash
npm i -S lisa.aes.js
```

```js
var aes  = require('lisa.aes.js')

var en = aes.encryption('abc' , "ccccccccaaaaaaasdddddddddddddddddddddddddddfaa")


console.log(en)

var de = aes.decrypt('abc',en)

console.log(de)

```