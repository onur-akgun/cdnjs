"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var ndarray_1 = require("./ndarray");
var SquareCostFunc = (function () {
    function SquareCostFunc() {
        this.halfOne = environment_1.ENV.math.keep(ndarray_1.Scalar.new(0.5));
    }
    SquareCostFunc.prototype.cost = function (math, x1, x2) {
        var diff = math.subStrict(x1, x2);
        var diffSquared = math.multiplyStrict(diff, diff);
        var result = math.multiply(this.halfOne, diffSquared);
        diff.dispose();
        diffSquared.dispose();
        return result;
    };
    SquareCostFunc.prototype.der = function (math, x1, x2) {
        return math.subStrict(x1, x2);
    };
    SquareCostFunc.prototype.dispose = function () {
        this.halfOne.dispose();
    };
    return SquareCostFunc;
}());
exports.SquareCostFunc = SquareCostFunc;
