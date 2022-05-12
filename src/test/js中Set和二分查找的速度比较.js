import { randInt, range } from "../majiang/util/Utils";
import { bisearch } from "../majiang/hu/BigTableHu";
/**
 * 结论：当元素个数较少时，set比较快
 * 当元素个数较多时，二分查找比较快
 * 总体上看两者速度差不多
 * */
var MAXN = 10000000;
var n = 200000; //字典中元素个数
var q = 100000; //查询次数
var a = range(n).map(function (x) { return randInt(0, MAXN); });
var querys = range(q).map(function (x) { return randInt(0, MAXN); });
var set = new Set(a);
var b = Array.from(set).sort();
console.log("\u67E5\u8BE2\u6B21\u6570" + querys.length + "\n\u5143\u7D20\u4E2A\u6570:" + set.size + "\n");
function main() {
    var beg = new Date().getTime();
    for (var _i = 0, querys_1 = querys; _i < querys_1.length; _i++) {
        var i = querys_1[_i];
        var x_1 = randInt(0, MAXN);
        var ans = set.has(x_1);
    }
    var end = new Date().getTime();
    console.log("\u96C6\u5408\u7528\u65F6" + (end - beg) + "ms");
    beg = new Date().getTime();
    for (var _a = 0, querys_2 = querys; _a < querys_2.length; _a++) {
        var i = querys_2[_a];
        var x_2 = randInt(0, MAXN);
        var ans = bisearch(x_2, b);
    }
    end = new Date().getTime();
    console.log("\u4E8C\u5206\u67E5\u627E\u7528\u65F6" + (end - beg) + "ms");
}
main();
//# sourceMappingURL=js%E4%B8%ADSet%E5%92%8C%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%9A%84%E9%80%9F%E5%BA%A6%E6%AF%94%E8%BE%83.js.map