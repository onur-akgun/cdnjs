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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataset_1 = require("../dataset");
var text_line_dataset_1 = require("./text_line_dataset");
var CsvHeaderConfig;
(function (CsvHeaderConfig) {
    CsvHeaderConfig[CsvHeaderConfig["READ_FIRST_LINE"] = 0] = "READ_FIRST_LINE";
    CsvHeaderConfig[CsvHeaderConfig["NUMBERED"] = 1] = "NUMBERED";
})(CsvHeaderConfig = exports.CsvHeaderConfig || (exports.CsvHeaderConfig = {}));
var CSVDataset = (function (_super) {
    __extends(CSVDataset, _super);
    function CSVDataset(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.hasHeaderLine = false;
        _this.base = new text_line_dataset_1.TextLineDataset(input, CSVDataset.textColumnName);
        return _this;
    }
    Object.defineProperty(CSVDataset.prototype, "csvColumnNames", {
        get: function () {
            return this._csvColumnNames;
        },
        enumerable: true,
        configurable: true
    });
    CSVDataset.prototype.setCsvColumnNames = function (csvColumnNames) {
        return __awaiter(this, void 0, void 0, function () {
            var stream, firstElement, firstLine, stream, firstElement, firstLine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(csvColumnNames == null || csvColumnNames === CsvHeaderConfig.NUMBERED)) return [3, 3];
                        return [4, this.base.getStream()];
                    case 1:
                        stream = _a.sent();
                        return [4, stream.next()];
                    case 2:
                        firstElement = _a.sent();
                        firstLine = firstElement[CSVDataset.textColumnName];
                        this._csvColumnNames =
                            Array.from(firstLine.split(',').keys()).map(function (x) { return x.toString(); });
                        return [3, 7];
                    case 3:
                        if (!(csvColumnNames === CsvHeaderConfig.READ_FIRST_LINE)) return [3, 6];
                        return [4, this.base.getStream()];
                    case 4:
                        stream = _a.sent();
                        return [4, stream.next()];
                    case 5:
                        firstElement = _a.sent();
                        firstLine = firstElement[CSVDataset.textColumnName];
                        this._csvColumnNames = firstLine.split(',');
                        this.hasHeaderLine = true;
                        return [3, 7];
                    case 6:
                        this._csvColumnNames = csvColumnNames;
                        _a.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    CSVDataset.create = function (input, csvColumnNames) {
        if (csvColumnNames === void 0) { csvColumnNames = CsvHeaderConfig.NUMBERED; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = new CSVDataset(input);
                        return [4, result.setCsvColumnNames(csvColumnNames)];
                    case 1:
                        _a.sent();
                        return [2, result];
                }
            });
        });
    };
    CSVDataset.prototype.getStream = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var lines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.base.getStream()];
                    case 1:
                        lines = _a.sent();
                        if (this.hasHeaderLine) {
                            lines = lines.skip(1);
                        }
                        return [2, lines.map(function (x) { return _this.makeDatasetElement(x); })];
                }
            });
        });
    };
    CSVDataset.prototype.makeDatasetElement = function (element) {
        var line = element[CSVDataset.textColumnName];
        var values = line.split(',');
        var result = {};
        for (var i = 0; i < this._csvColumnNames.length; i++) {
            var value = values[i];
            if (value === '') {
                result[this._csvColumnNames[i]] = undefined;
            }
            else {
                var valueAsNum = Number(value);
                if (isNaN(valueAsNum)) {
                    result[this._csvColumnNames[i]] = value;
                }
                else {
                    result[this._csvColumnNames[i]] = valueAsNum;
                }
            }
        }
        return result;
    };
    CSVDataset.textColumnName = 'line';
    return CSVDataset;
}(dataset_1.Dataset));
exports.CSVDataset = CSVDataset;
