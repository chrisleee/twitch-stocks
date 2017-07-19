
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(11);
var TestComponent_1 = __webpack_require__(542);
exports.default = function () {
    return React.createElement("div", null, React.createElement("p", null, "Welcome to Twitch Stocks! If you forked and cloned this project and you're trying to learn React, go ahead and mess around with it a bit."), React.createElement(TestComponent_1.default, null));
};
//# sourceMappingURL=index.js.map

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/clee5/Documents/projects/twitch-stocks/dist/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/clee5/Documents/projects/twitch-stocks/dist/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(11);
exports.default = function () {
    return React.createElement("div", null, React.createElement("p", null, "This is from TestComponent!"));
};
//# sourceMappingURL=TestComponent.js.map

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/clee5/Documents/projects/twitch-stocks/dist/components/TestComponent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/clee5/Documents/projects/twitch-stocks/dist/components/TestComponent.js"); } } })();

/***/ })

},[540]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNkMjQ0NzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LmpzPzNkMjQ0NzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFRlc3RDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL1Rlc3RDb21wb25lbnRcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJXZWxjb21lIHRvIFR3aXRjaCBTdG9ja3MhIElmIHlvdSBmb3JrZWQgYW5kIGNsb25lZCB0aGlzIHByb2plY3QgYW5kIHlvdSdyZSB0cnlpbmcgdG8gbGVhcm4gUmVhY3QsIGdvIGFoZWFkIGFuZCBtZXNzIGFyb3VuZCB3aXRoIGl0IGEgYml0LlwiKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRlc3RDb21wb25lbnRfMS5kZWZhdWx0LCBudWxsKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJUaGlzIGlzIGZyb20gVGVzdENvbXBvbmVudCFcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGVzdENvbXBvbmVudC5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        