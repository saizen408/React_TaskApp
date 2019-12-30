webpackHotUpdate("static/development/pages/TodoAppPage.js",{

/***/ "./components/EditTodoForm.js":
/*!************************************!*\
  !*** ./components/EditTodoForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useInputState */ "./components/hooks/useInputState.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function EditTodoForm(_ref) {
  var _id = _ref._id,
      description = _ref.description,
      toggleEditForm = _ref.toggleEditForm,
      sorted = _ref.sorted,
      tasksDBIdx = _ref.tasksDBIdx;
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_4__["DispatchContext"]);

  var _useInputState = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])(description),
      _useInputState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInputState, 3),
      value = _useInputState2[0],
      handleChange = _useInputState2[1],
      reset = _useInputState2[2];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleEditClick = function handleEditClick() {
    enqueueSnackbar("\u270F\uFE0F Edited Task: \"".concat(description, "\""));
  };

  return __jsx("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleEditClick();
      sorted({
        type: "EDIT",
        id: _id,
        todo: value
      });

      if (tasksDBIdx !== undefined) {
        dispatch({
          type: "EDIT",
          id: tasksDBIdx._id,
          newTask: value
        });
      }

      reset();
      toggleEditForm();
    },
    style: {
      marginLeft: "1rem",
      width: "75%"
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    margin: "normal",
    value: value,
    onChange: handleChange,
    fullWidth: true,
    autoFocus: true
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EditTodoForm);

/***/ })

})
//# sourceMappingURL=TodoAppPage.js.7336950783cb55ef6c9a.hot-update.js.map