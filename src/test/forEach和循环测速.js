import { randInt, range } from "../majiang/util/Utils";
/**
 * for循环的速度是最快的，比forEach，forOf，forIn都要快，所以尽量使用for循环，不要使用奇技淫巧
 | 0    │   'useFor'   │  424  │
 │    1    │ 'useForEach' │ 16621 │
 │    2    │  'useForOf'  │ 2183  |
 * */
var n = 1000000;
var a = range(n).map(function (x) { return randInt(0, n); });
function go(f, cases) {
    var beg = new Date();
    for (var cas = 0; cas < cases; cas++) {
        f();
    }
    var end = new Date();
    return end.getTime() - beg.getTime();
}
function useForEach() {
    a.forEach(function (x) {
        var y = 2 * x;
    });
}
function useFor() {
    for (var i = 0; i < a.length; i++) {
        var y = 2 * a[i];
    }
}
function useForOf() {
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var i = a_1[_i];
        var y = 2 * i;
    }
}
var caseCount = 1000;
var funcs = [useFor, useForEach, useForOf];
var ans = [];
for (var _i = 0, funcs_1 = funcs; _i < funcs_1.length; _i++) {
    var f = funcs_1[_i];
    ans.push({
        name: f.name,
        time: go(f, caseCount)
    });
}
console.table(ans);
//# sourceMappingURL=forEach%E5%92%8C%E5%BE%AA%E7%8E%AF%E6%B5%8B%E9%80%9F.js.map