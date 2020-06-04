"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equation = exports.loop = void 0;
exports.loop = function (number) {
    var total = 0;
    for (var index = 0; index <= number; index++) {
        total += index;
    }
};
exports.equation = function (number) { return (number * (number + 1)) / 2; };
//# sourceMappingURL=bigO.js.map