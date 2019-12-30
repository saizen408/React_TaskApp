webpackHotUpdate("static/development/pages/TodoAppPage.js",{

/***/ "./components/DraggableTodo.js":
/*!*************************************!*\
  !*** ./components/DraggableTodo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useToggleState */ "./components/hooks/useToggleState.js");
/* harmony import */ var _EditTodoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditTodoForm */ "./components/EditTodoForm.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contexts/LanguageContext */ "./components/contexts/LanguageContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./words */ "./components/words.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















var DraggableTodo = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableElement"])(function (_ref) {
  var _id = _ref._id,
      description = _ref.description,
      completed = _ref.completed,
      updatedAt = _ref.updatedAt,
      sorted = _ref.sorted,
      tasksDBIdx = _ref.tasksDBIdx;
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_13__["DispatchContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["LanguageContext"]),
      language = _useContext.language;

  var _useToggleState = Object(_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_3__["default"])(false),
      _useToggleState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useToggleState, 2),
      isEditing = _useToggleState2[0],
      toggle = _useToggleState2[1];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_11__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var lastUpdated = _words__WEBPACK_IMPORTED_MODULE_17__["words"][language].lastUpdated;

  var handleDeleteClick = function handleDeleteClick() {
    enqueueSnackbar("\u274C Deleted Task: \"".concat(description, "\""));
  };

  var handleToggleClick = function handleToggleClick() {
    enqueueSnackbar("Good work! \uD83D\uDCAA Task: \"".concat(description, "\" completed!"));
  };

  var formatedDate = function formatedDate() {
    moment__WEBPACK_IMPORTED_MODULE_16___default.a.locale(language);
    return moment__WEBPACK_IMPORTED_MODULE_16___default()(updatedAt).format("lll");
  }; // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(state));
  // }, [tasksDBIdx]);


  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Paper"], {
    elevation: 3
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      height: "65px"
    },
    divider: true
  }, isEditing ? __jsx(_EditTodoForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    _id: _id,
    tasksDBIdx: tasksDBIdx,
    sorted: sorted,
    description: description,
    toggleEditForm: toggle
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tabIndex: -1,
    onChange: function onChange() {
      sorted({
        type: "TOGGLE",
        id: _id,
        completed: completed
      });

      if (tasksDBIdx) {
        console.log("toggling at db");
        dispatch({
          type: "TOGGLE",
          id: tasksDBIdx._id,
          completed: completed
        });
      }

      console.log(completed);
      completed ? null : handleToggleClick();
    },
    checked: completed
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      textDecoration: completed ? "line-through" : "none"
    },
    primary: description,
    secondary: "".concat(lastUpdated, ": ").concat(formatedDate())
  }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "Delete",
    onClick: function onClick() {
      sorted({
        type: "REMOVE",
        id: _id
      });
      dispatch({
        type: "REMOVE",
        id: tasksDBIdx._id
      });
      handleDeleteClick();
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "Edit",
    onClick: toggle
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null))), " ")));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(DraggableTodo));

/***/ })

})
//# sourceMappingURL=TodoAppPage.js.753ac5a6a4ba28f9e47a.hot-update.js.map