"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bigO = require("./bigO");
var perf_hooks_1 = require("perf_hooks");
var t1 = perf_hooks_1.performance.now();
bigO.loop(5000);
var t2 = perf_hooks_1.performance.now();
bigO.loop(5000);
var t3 = perf_hooks_1.performance.now();
//# sourceMappingURL=index.js.map