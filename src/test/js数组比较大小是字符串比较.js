"use strict";
/**
 * js 数组比较大小 的大坑
 * 当比较两个对象时，如果是基础类型，则直接比较
 * 如果不是基础类型，会把结果变成字符串，然后比较
 * **/
var a = [[1, 2], [131, 3], [22, 3], [13, 1]];
a.sort();
console.log('会发现排序结果是按照字符串排序的', a);
//# sourceMappingURL=js%E6%95%B0%E7%BB%84%E6%AF%94%E8%BE%83%E5%A4%A7%E5%B0%8F%E6%98%AF%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%AF%94%E8%BE%83.js.map