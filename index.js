const usrInfo = require('./information');

const vacheparle = require("cowsay");

console.log(vacheparle.say({
    text : `Je suis ${usrInfo.pseudal} du campus ${usrInfo.campus}.`,
    e : "uU",
    T : "U "
}))
