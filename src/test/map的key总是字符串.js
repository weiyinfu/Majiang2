"use strict";
/**
 * map的key总是字符串，所以应该使用Map
 * */
var ma = {
    2: 3,
    4: 5
};
console.log(ma);
for (var i in ma) {
    console.log(typeof i);
}
var map = new Map();
for (var i in ma) {
    map.set(parseInt(i), ma[i]);
}
console.log(map);
console.log(map.get(7));
console.log(map.values());
console.log(map.keys());
console.log('======');
//下面这句话什么都不打印
for (var i in map.entries())
    console.log(i);
map.forEach(function (v, k) {
    console.log(k + "=" + v);
});
//只要是for-in循环，必定是字符串
for (var i in map) {
    console.log(typeof i);
}
//# sourceMappingURL=map%E7%9A%84key%E6%80%BB%E6%98%AF%E5%AD%97%E7%AC%A6%E4%B8%B2.js.map