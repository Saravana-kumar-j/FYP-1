"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-parallel-batch";
exports.ids = ["vendor-chunks/it-parallel-batch"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-parallel-batch/index.js":
/*!*************************************************!*\
  !*** ./node_modules/it-parallel-batch/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst batch = __webpack_require__(/*! it-batch */ \"(ssr)/./node_modules/it-batch/index.js\")\n\n/**\n * @template T\n * @typedef {{ok:true, value:T}} Success\n */\n\n/**\n * @typedef {{ok:false, err:Error}} Failure\n */\n\n/**\n * Takes an (async) iterator that emits promise-returning functions,\n * invokes them in parallel and emits the results as they become available but\n * in the same order as the input\n *\n * @template T\n * @param {AsyncIterable<() => Promise<T>>|Iterable<() => Promise<T>>} source\n * @param {number} [size=1]\n * @returns {AsyncIterable<T>}\n */\nasync function * parallelBatch (source, size = 1) {\n  for await (const tasks of batch(source, size)) {\n    /** @type {Promise<Success<T>|Failure>[]} */\n    const things = tasks.map(\n      /**\n       * @param {() => Promise<T>} p\n       */\n      p => {\n        return p().then(value => ({ ok: true, value }), err => ({ ok: false, err }))\n      })\n\n    for (let i = 0; i < things.length; i++) {\n      const result = await things[i]\n\n      if (result.ok) {\n        yield result.value\n      } else {\n        throw result.err\n      }\n    }\n  }\n}\n\nmodule.exports = parallelBatch\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtcGFyYWxsZWwtYmF0Y2gvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLHdEQUFVOztBQUVoQztBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7O0FBRUE7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUE0RDtBQUN2RSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0JBQStCO0FBQzlDO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLGFBQWEsZ0JBQWdCO0FBQ2xGLE9BQU87O0FBRVAsb0JBQW9CLG1CQUFtQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kLW1hbmRhdGVzLy4vbm9kZV9tb2R1bGVzL2l0LXBhcmFsbGVsLWJhdGNoL2luZGV4LmpzPzUyZWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGJhdGNoID0gcmVxdWlyZSgnaXQtYmF0Y2gnKVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdHlwZWRlZiB7e29rOnRydWUsIHZhbHVlOlR9fSBTdWNjZXNzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e29rOmZhbHNlLCBlcnI6RXJyb3J9fSBGYWlsdXJlXG4gKi9cblxuLyoqXG4gKiBUYWtlcyBhbiAoYXN5bmMpIGl0ZXJhdG9yIHRoYXQgZW1pdHMgcHJvbWlzZS1yZXR1cm5pbmcgZnVuY3Rpb25zLFxuICogaW52b2tlcyB0aGVtIGluIHBhcmFsbGVsIGFuZCBlbWl0cyB0aGUgcmVzdWx0cyBhcyB0aGV5IGJlY29tZSBhdmFpbGFibGUgYnV0XG4gKiBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgaW5wdXRcbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBc3luY0l0ZXJhYmxlPCgpID0+IFByb21pc2U8VD4+fEl0ZXJhYmxlPCgpID0+IFByb21pc2U8VD4+fSBzb3VyY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xXVxuICogQHJldHVybnMge0FzeW5jSXRlcmFibGU8VD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uICogcGFyYWxsZWxCYXRjaCAoc291cmNlLCBzaXplID0gMSkge1xuICBmb3IgYXdhaXQgKGNvbnN0IHRhc2tzIG9mIGJhdGNoKHNvdXJjZSwgc2l6ZSkpIHtcbiAgICAvKiogQHR5cGUge1Byb21pc2U8U3VjY2VzczxUPnxGYWlsdXJlPltdfSAqL1xuICAgIGNvbnN0IHRoaW5ncyA9IHRhc2tzLm1hcChcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHsoKSA9PiBQcm9taXNlPFQ+fSBwXG4gICAgICAgKi9cbiAgICAgIHAgPT4ge1xuICAgICAgICByZXR1cm4gcCgpLnRoZW4odmFsdWUgPT4gKHsgb2s6IHRydWUsIHZhbHVlIH0pLCBlcnIgPT4gKHsgb2s6IGZhbHNlLCBlcnIgfSkpXG4gICAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaW5nc1tpXVxuXG4gICAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICAgIHlpZWxkIHJlc3VsdC52YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVyclxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFsbGVsQmF0Y2hcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-parallel-batch/index.js\n");

/***/ })

};
;