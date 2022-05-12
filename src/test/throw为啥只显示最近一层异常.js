"use strict";
/**
 * 只有throw Error()才会有堆栈信息，throw string不会打印堆栈信息
 * */
function haha() {
    baga();
}
function baga() {
    throw 'haha';
}
function anotherHaha() {
    anotherBaga();
}
function anotherBaga() {
    throw new Error();
}
// haha()
anotherHaha();
//# sourceMappingURL=throw%E4%B8%BA%E5%95%A5%E5%8F%AA%E6%98%BE%E7%A4%BA%E6%9C%80%E8%BF%91%E4%B8%80%E5%B1%82%E5%BC%82%E5%B8%B8.js.map