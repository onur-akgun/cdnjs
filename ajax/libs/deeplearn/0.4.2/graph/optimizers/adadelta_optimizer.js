"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ndarray_1 = require("../../math/ndarray");
var optimizer_1 = require("../../math/optimizers/optimizer");
var tensor_array_map_1 = require("../tensor_array_map");
var AdadeltaOptimizer = (function (_super) {
    __extends(AdadeltaOptimizer, _super);
    function AdadeltaOptimizer(learningRate, gamma, specifiedVariableList) {
        var _this = _super.call(this, learningRate, specifiedVariableList) || this;
        _this.learningRate = learningRate;
        _this.gamma = gamma;
        _this.accumulatedSquaredGradients = new tensor_array_map_1.TensorArrayMap();
        _this.accumulatedUpdates = new tensor_array_map_1.TensorArrayMap();
        _this.eps = ndarray_1.Scalar.new(1e-6);
        _this.g = ndarray_1.Scalar.new(_this.gamma);
        return _this;
    }
    AdadeltaOptimizer.prototype.applyGradients = function (variableGradients) {
        throw new Error("Adadelta optimizer not yet implemented for eager mode.");
    };
    AdadeltaOptimizer.prototype.beforeBatch = function (math, batchSize, runtime, activationArrayMap, gradientArrayMap) {
        var _this = this;
        _super.prototype.beforeBatch.call(this, math, batchSize, runtime, activationArrayMap, gradientArrayMap);
        if (this.accumulatedSquaredGradients.size() === 0) {
            this.variableNodes.forEach(function (node) {
                _this.accumulatedSquaredGradients.set(node.output, ndarray_1.NDArray.zeros(node.output.shape));
                _this.accumulatedUpdates.set(node.output, ndarray_1.NDArray.zeros(node.output.shape));
            });
        }
    };
    AdadeltaOptimizer.prototype.afterBatch = function (math, batchSize, runtime, activationArrayMap, gradientArrayMap) {
        var _this = this;
        math.scope(function (keep) {
            _this.variableNodes.forEach(function (node) {
                var oldVariable = activationArrayMap.get(node.output);
                var gradient = _this.variableGradients.get(node.output);
                var oldCache = _this.accumulatedSquaredGradients.get(node.output);
                var oldUpdates = _this.accumulatedUpdates.get(node.output);
                var gradientSquare = math.multiply(gradient, gradient);
                var cache = math.scaledArrayAdd(_this.g, oldCache, math.subtract(_this.one, _this.g), gradientSquare);
                var updates = math.multiply(math.divide(math.sqrt(math.add(oldUpdates, _this.eps)), math.sqrt(math.add(oldCache, _this.eps))), gradient);
                var variable = math.scaledArrayAdd(_this.cGraph, updates, _this.one, oldVariable);
                var updateSquare = math.multiply(updates, updates);
                var newUpdates = math.scaledArrayAdd(_this.g, oldUpdates, math.subtract(_this.one, _this.g), updateSquare);
                _this.accumulatedSquaredGradients.set(node.output, keep(cache));
                _this.accumulatedUpdates.set(node.output, keep(newUpdates));
                activationArrayMap.set(node.output, keep(variable));
                node.data = variable;
                oldVariable.dispose();
                oldCache.dispose();
                oldUpdates.dispose();
            });
        });
        this.variableGradients.dispose();
        this.variableGradients = new tensor_array_map_1.TensorArrayMap();
    };
    AdadeltaOptimizer.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.eps.dispose();
        this.g.dispose();
        this.accumulatedSquaredGradients.dispose();
        this.accumulatedUpdates.dispose();
    };
    return AdadeltaOptimizer;
}(optimizer_1.Optimizer));
exports.AdadeltaOptimizer = AdadeltaOptimizer;
