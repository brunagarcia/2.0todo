webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/AddTodo.js":
/*!************************!*\
  !*** ./src/AddTodo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bruna/Tutorials/ReduxTutorial/src/AddTodo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AddTodo = function AddTodo() {
  //Using Hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Example"),
      todo = _useState[0],
      setTodo = _useState[1];

  var handleInput = function handleInput(e) {
    setTodo(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("Todo: ".concat(todo));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Add your todo:", __jsx("input", {
    type: "text",
    name: "name",
    onChange: handleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Adding TODO: ", todo));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTodo);

/***/ })

})
//# sourceMappingURL=index.js.ca788dd14afd5b5f6e77.hot-update.js.map