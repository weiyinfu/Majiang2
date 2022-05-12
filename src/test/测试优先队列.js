import { Topk } from "../majiang/util/Topk";
import seedrandom from "seedrandom";
var Node = /** @class */ (function () {
    function Node(x) {
        this.x = x;
    }
    return Node;
}());
var com = function (x, y) {
    return x.x - y.x;
};
var q = new Topk(5, com);
var ele = [];
var $ = seedrandom();
for (var i = 0; i < 20; i++) {
    var x_1 = $.int32() % 100;
    ele.push(x_1);
    q.push(new Node(x_1));
    console.log('pushing', x_1, q.toList().map(function (x) { return x.x; }).join(','));
}
ele.sort();
console.log(ele);
console.log(q.toList());
//# sourceMappingURL=%E6%B5%8B%E8%AF%95%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97.js.map