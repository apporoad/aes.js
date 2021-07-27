var aesjs = require('aes-js')

var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

var getKeyByStr = function(strPwd){
    // '中国'.charCodeAt(0) %16
    var newKey = key.concat([])
    for(var i =0;i< 16 ;i++){
        var value = 0
        if(i < strPwd.length){
            value = strPwd.charCodeAt(i)
        }
        else{
            value = strPwd.charCodeAt( i% strPwd.length)
        }
        newKey[i] = ((newKey[i] + value) % 16)  + 1
    }
    return newKey
}

exports.en = exports.encryption = function(pwd,content){
    var text = content
    var key = pwd
    if(key instanceof Array){

    }else
        key = getKeyByStr(key)
    var textBytes = aesjs.utils.utf8.toBytes(text);

    // The counter is optional, and if omitted will begin at 1
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);

    // To print or store the binary data, you may convert it to hex
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex
}

exports.de = exports.decrypt = function(pwd, content){
    var key = pwd
    if(key instanceof Array){

    }else
        key = getKeyByStr(key)
    var encryptedBytes = aesjs.utils.hex.toBytes(content);

    // The counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);

    // Convert our bytes back into text
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText
}

