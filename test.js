var aes  = require('./')

var en = aes.encryption('abc' , "ccccccccaaaaaaasdddddddddddddddddddddddddddfaa")


console.log(en)

var de = aes.decrypt('abc',en)

console.log(de)