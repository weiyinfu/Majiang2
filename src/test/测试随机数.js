import seedrandom from "seedrandom";
/**
 * seedrandom这个库有三个函数，int32，quick，double，分别生成int32，float，double
 * 实验证明，seedrandom这个库生成随机数比较缓慢，比Math.random慢
 * */
function go(x, caseCount) {
    var beg = new Date();
    for (var i = 0; i < caseCount; i++) {
        x();
    }
    var end = new Date();
    return end.getTime() - beg.getTime();
}
function test1() {
    for (var i = 0; i < 2; i++) {
        var x_1 = seedrandom('hello');
        console.log(x_1);
        console.log(x_1.int32());
        console.log(x_1.quick());
        console.log(x_1.double());
    }
}
var x = seedrandom();
for (var _i = 0, _a = [x.quick, Math.random]; _i < _a.length; _i++) {
    var f = _a[_i];
    var time = go(f, 10000000);
    console.log(f.name, time);
}
//# sourceMappingURL=%E6%B5%8B%E8%AF%95%E9%9A%8F%E6%9C%BA%E6%95%B0.js.map