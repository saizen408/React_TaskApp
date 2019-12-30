webpackHotUpdate("static/development/pages/TodoAppPage.js",{

/***/ "./components/TodoForm.js":
/*!********************************!*\
  !*** ./components/TodoForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useInputState */ "./components/hooks/useInputState.js");
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/LanguageContext */ "./components/contexts/LanguageContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _contexts_SortedContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/SortedContext */ "./components/contexts/SortedContext.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./words */ "./components/words.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_theme2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/theme2 */ "./components/styles/theme2.js");
/* harmony import */ var _styles_useStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/useStyles */ "./components/styles/useStyles.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















function TodoForm() {
  var _useInputState = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInputState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInputState, 3),
      value = _useInputState2[0],
      handleChange = _useInputState2[1],
      reset = _useInputState2[2];

  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_5__["DispatchContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"]),
      language = _useContext.language;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_9__["SortedContext"]),
      resetSort = _useContext2.resetSort;

  var addTodo = _words__WEBPACK_IMPORTED_MODULE_10__["words"][language].addTodo;

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_11__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleAddClick = function handleAddClick() {
    var message = "New Task: \"".concat(value, "\"");
    enqueueSnackbar(message, {
      variant: "success"
    });
  };

  var classes = Object(_styles_useStyles__WEBPACK_IMPORTED_MODULE_13__["default"])();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    elevation: 3,
    style: {
      margin: "1rem 0",
      padding: "0"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    disableGutters: true
  }, __jsx("form", {
    className: classes.root,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleAddClick();
      resetSort({
        type: "ADD",
        todo: value,
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()()
      });
      dispatch({
        type: "ADD",
        task: value
      });
      reset();
    },
    style: {
      height: "65px"
    }
  }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _styles_theme2__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "outlined-basic",
    variant: "outlined",
    value: value,
    onChange: handleChange,
    margin: "normal",
    label: addTodo,
    fullWidth: true
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

})
//# sourceMappingURL=TodoAppPage.js.d43c4258b309bbc56302.hot-update.js.map