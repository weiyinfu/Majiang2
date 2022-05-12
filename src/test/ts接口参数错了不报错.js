"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function (s) {
        return s;
    };
    return Rectangle;
}());
var big;
big = function (s, ss) {
    return s + ss;
};
var small;
small = function (s) {
    return s;
};
// small=big; small=big会报错
big = small; //big=small不会报错
//# sourceMappingURL=ts%E6%8E%A5%E5%8F%A3%E5%8F%82%E6%95%B0%E9%94%99%E4%BA%86%E4%B8%8D%E6%8A%A5%E9%94%99.js.map