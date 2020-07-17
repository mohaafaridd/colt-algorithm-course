import * as bigO from "./bigO";
import { performance } from "perf_hooks";

const t1 = performance.now();
bigO.loop(5000);
const t2 = performance.now();
bigO.loop(5000);
const t3 = performance.now();
