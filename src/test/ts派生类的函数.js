"use strict";
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.run = function () {
        console.log('wanwang');
    };
    Dog.prototype.shout = function () {
        this.run();
    };
    return Dog;
}());
var ani = new Dog();
ani.shout();
//# sourceMappingURL=ts%E6%B4%BE%E7%94%9F%E7%B1%BB%E7%9A%84%E5%87%BD%E6%95%B0.js.map