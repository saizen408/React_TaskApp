module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DraggableTodo.js":
/*!*************************************!*\
  !*** ./components/DraggableTodo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sortable-hoc */ "react-sortable-hoc");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useToggleState */ "./components/hooks/useToggleState.js");
/* harmony import */ var _EditTodoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTodoForm */ "./components/EditTodoForm.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contexts/LanguageContext */ "./components/contexts/LanguageContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./words */ "./components/words.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const DraggableTodo = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableElement"])(({
  _id,
  description,
  completed,
  updatedAt,
  sorted,
  tasksDBIdx
}) => {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_12__["DispatchContext"]);
  const {
    language
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_13__["LanguageContext"]);
  const [isEditing, toggle] = Object(_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"])();
  const {
    lastUpdated
  } = _words__WEBPACK_IMPORTED_MODULE_16__["words"][language];

  const handleDeleteClick = () => {
    enqueueSnackbar(`❌ Deleted Task: "${description}"`);
  };

  const handleToggleClick = () => {
    enqueueSnackbar(`Good work! 💪 Task: "${description}" completed!`);
  };

  const formatedDate = () => {
    moment__WEBPACK_IMPORTED_MODULE_15___default.a.locale(language);
    return moment__WEBPACK_IMPORTED_MODULE_15___default()(updatedAt).format("lll");
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Paper"], {
    elevation: 3
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      height: "65px"
    },
    divider: true
  }, isEditing ? __jsx(_EditTodoForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    _id: _id,
    tasksDBIdx: tasksDBIdx,
    sorted: sorted,
    description: description,
    toggleEditForm: toggle
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9___default.a, {
    tabIndex: -1,
    onChange: () => {
      sorted({
        type: "TOGGLE",
        id: _id,
        completed: completed
      });

      if (tasksDBIdx !== undefined) {
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
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      textDecoration: completed ? "line-through" : "none"
    },
    primary: description,
    secondary: `${lastUpdated}: ${formatedDate()}`
  }), __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default.a, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    "aria-label": "Delete",
    onClick: () => {
      sorted({
        type: "REMOVE",
        id: _id
      });

      if (tasksDBIdx !== undefined) {
        dispatch({
          type: "REMOVE",
          id: tasksDBIdx._id
        });
      }

      handleDeleteClick();
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null)), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    "aria-label": "Edit",
    onClick: toggle
  }, __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default.a, null))), " ")));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(DraggableTodo));

/***/ }),

/***/ "./components/DraggableTodoList.js":
/*!*****************************************!*\
  !*** ./components/DraggableTodoList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sortable-hoc */ "react-sortable-hoc");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DraggableTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DraggableTodo */ "./components/DraggableTodo.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const DraggableTodoList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableContainer"])(({
  posts,
  sorted,
  tasksDB
}) => {
  return __jsx("div", null, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, null, posts.map((todo, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: todo._id
  }, __jsx(_DraggableTodo__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, todo, {
    key: todo._id,
    index: i,
    sorted: sorted,
    tasksDB: tasksDB,
    tasksDBIdx: tasksDB[i]
  }))))));
});
/* harmony default export */ __webpack_exports__["default"] = (DraggableTodoList);

/***/ }),

/***/ "./components/EditTodoForm.js":
/*!************************************!*\
  !*** ./components/EditTodoForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useInputState */ "./components/hooks/useInputState.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function EditTodoForm({
  _id,
  description,
  toggleEditForm,
  sorted,
  tasksDBIdx
}) {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_3__["DispatchContext"]);
  const [value, handleChange, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_1__["default"])(description);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])();

  const handleEditClick = () => {
    enqueueSnackbar(`✏️ Edited Task: "${description}"`);
  };

  return __jsx("form", {
    onSubmit: e => {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
    margin: "normal",
    value: value,
    onChange: handleChange,
    fullWidth: true,
    autoFocus: true
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (EditTodoForm);

/***/ }),

/***/ "./components/TodoForm.js":
/*!********************************!*\
  !*** ./components/TodoForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useInputState */ "./components/hooks/useInputState.js");
/* harmony import */ var _contexts_todos_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/LanguageContext */ "./components/contexts/LanguageContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_SortedContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contexts/SortedContext */ "./components/contexts/SortedContext.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./words */ "./components/words.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_theme2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/theme2 */ "./components/styles/theme2.js");
/* harmony import */ var _styles_useStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/useStyles */ "./components/styles/useStyles.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function TodoForm() {
  const [value, handleChange, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_todos_context__WEBPACK_IMPORTED_MODULE_4__["DispatchContext"]);
  const {
    language
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_5__["LanguageContext"]);
  const {
    resetSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_8__["SortedContext"]);
  const {
    addTodo
  } = _words__WEBPACK_IMPORTED_MODULE_9__["words"][language];
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"])();

  const handleAddClick = () => {
    const message = `New Task: "${value}"`;
    enqueueSnackbar(message, {
      variant: "success"
    });
  };

  const classes = Object(_styles_useStyles__WEBPACK_IMPORTED_MODULE_12__["default"])();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    elevation: 3,
    style: {
      margin: "1rem 0",
      padding: "0"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    disableGutters: true
  }, __jsx("form", {
    className: classes.root,
    onSubmit: e => {
      e.preventDefault();
      handleAddClick();
      resetSort({
        type: "ADD",
        todo: value,
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()()
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
  }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: _styles_theme2__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ }),

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DraggableTodoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DraggableTodoList */ "./components/DraggableTodoList.js");
/* harmony import */ var _contexts_SortedContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/SortedContext */ "./components/contexts/SortedContext.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_10__["Cookies"]();


class TodoList extends react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onSortEnd", ({
      oldIndex,
      newIndex
    }) => {
      const {
        tasks,
        prevArr
      } = this.state;
      console.log("before sort: ", prevArr);

      if (prevArr.length === 0) {
        var arr = cookies.get("tasks"); //if prevArr is same size as state.tasks change nothing
      } else if (prevArr.length === tasks.length) {
        var arr = prevArr; //if prev arr is smaller than state.tasks push the new element to the end
      } else if (prevArr.length < tasks.length) {
        this.setState({
          prevArr: [...prevArr, tasks[tasks.length - 1]]
        });
        var arr = prevArr; //if prev arr is larger than state.tasks filter out the corresponding element
      } else if (prevArr.length > tasks.length) {
        this.setState({
          prevArr: prevArr.filter(task => task._id !== tasks._id)
        });
        var arr = prevArr;
      } else {
        return console.log("something did not go quite as planned with sorting...");
      }

      arr = arr.slice();
      arr.splice(newIndex < 0 ? arr.length + newIndex : newIndex, 0, arr.splice(oldIndex, 1)[0]);
      console.log("after sort: ", arr);
      this.setState({
        tasks: arr,
        prevArr: arr
      }, cookies.set("tasks", this.state.tasks), console.log("ping!!!"), this.props.sortedContext.updateState = false);
    });

    this.state = {
      tasks: cookies.get("tasks") || props.posts,
      prevArr: []
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      console.log("comp did update, set tasks!");
      cookies.set("tasks", this.state.tasks);
    } // if (this.state.tasks.length === 1) {
    //   let firstId = cookies.get("taskId");
    //   let fakeobj = {
    //     _id: firstId,
    //     description: this.state.tasks[0].description,
    //     completed: this.state.tasks[0].completed,
    //     updatedAt: this.state.tasks[0].updatedAt
    //   };
    //   this.setState({ tasks: fakeobj });
    // }

  } // shouldComponentUpdate()


  static getDerivedStateFromProps(props, state) {
    if (props.sortedContext.updateState) {
      props.sortedContext.updateState = false;
      const {
        type,
        id,
        todo
      } = props.sortedContext.type;
      console.log("props.sortedContext: ", id);
      const {
        tasks
      } = state; // const taskId = cookies.get("taskId");
      // cookies.set("tasks", tasks);

      switch (type) {
        case "ADD":
          return {
            tasks: [...tasks, {
              _id: id,
              description: todo,
              completed: false
            }]
          };
          break;

        case "REMOVE":
          return {
            tasks: tasks.filter(task => task._id !== id)
          };
        //should refer to state

        case "TOGGLE":
          return {
            tasks: tasks.map(task => task._id === id ? _objectSpread({}, task, {
              completed: !task.completed
            }) : task //should refer to state
            )
          };
          break;

        case "EDIT":
          return {
            tasks: tasks.map(task => task._id === id ? _objectSpread({}, task, {
              description: todo
            }) : task)
          };
          break;

        default:
          return null;
      }
    } else return null;
  } // componentWillReceiveProps(props) {
  //   if (this.props.posts !== props.posts) {
  //     this.setState({ newProps: this.props.posts });
  //   }
  // }


  render() {
    const {
      resetSort
    } = this.props.sortedContext;
    const {
      posts
    } = this.props;
    const {
      tasks
    } = this.state;
    if (tasks.length) return __jsx(_DraggableTodoList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      axis: "y",
      distance: 20,
      onSortEnd: this.onSortEnd,
      posts: tasks,
      tasksDB: posts,
      sorted: resetSort
    });
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_10__["withCookies"])(Object(_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_9__["withSortedContext"])(TodoList)));

/***/ }),

/***/ "./components/contexts/LanguageContext.js":
/*!************************************************!*\
  !*** ./components/contexts/LanguageContext.js ***!
  \************************************************/
/*! exports provided: LanguageContext, LanguageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageContext", function() { return LanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageProvider", function() { return LanguageProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function LanguageProvider(props) {
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("en");

  const changeLanguage = e => setLanguage(e.target.value);

  return __jsx(LanguageContext.Provider, {
    value: {
      language,
      changeLanguage
    }
  }, props.children);
}

/***/ }),

/***/ "./components/contexts/SortedContext.js":
/*!**********************************************!*\
  !*** ./components/contexts/SortedContext.js ***!
  \**********************************************/
/*! exports provided: SortedContext, SortedProvider, withSortedContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedContext", function() { return SortedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedProvider", function() { return SortedProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSortedContext", function() { return withSortedContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const SortedContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["createContext"])();
class SortedProvider extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      todo: "",
      completed: false,
      type: "",
      updateState: false
    };
    this.resetSort = this.resetSort.bind(this);
  }

  resetSort(type, _id, todo, completed = false) {
    this.setState({
      _id: _id,
      todo: todo,
      completed: completed,
      type: type,
      updateState: true
    });
  }

  render() {
    return __jsx(SortedContext.Provider, {
      value: _objectSpread({}, this.state, {
        resetSort: this.resetSort
      })
    }, this.props.children);
  }

}
const withSortedContext = Component => props => __jsx(SortedContext.Consumer, null, value => __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
  sortedContext: value
}, props)));

/***/ }),

/***/ "./components/contexts/ThemeContext.js":
/*!*********************************************!*\
  !*** ./components/contexts/ThemeContext.js ***!
  \*********************************************/
/*! exports provided: ThemeContext, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useToggleState */ "./components/hooks/useToggleState.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = Object(_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
  return __jsx(ThemeContext.Provider, {
    value: {
      isDarkMode,
      toggleTheme
    }
  }, props.children);
}

/***/ }),

/***/ "./components/contexts/todos.context.js":
/*!**********************************************!*\
  !*** ./components/contexts/todos.context.js ***!
  \**********************************************/
/*! exports provided: TodosContext, DispatchContext, TodosProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosContext", function() { return TodosContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchContext", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosProvider", function() { return TodosProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useDBReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useDBReducer */ "./components/hooks/useDBReducer.js");
/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/todo.reducer */ "./components/reducers/todo.reducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultTodos = [{
  _id: 1,
  description: "Mow the lawn using goats",
  completed: false,
  updatedAt: "1987-12-27T07:20:16.566Z"
}, {
  _id: 2,
  description: "Release lady bugs into garden",
  completed: true,
  updatedAt: "2015-12-27T07:20:16.566Z"
}];
const TodosContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function TodosProvider(props) {
  const [todos, dispatch] = Object(_hooks_useDBReducer__WEBPACK_IMPORTED_MODULE_1__["useDBReducer"])(defaultTodos, _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(TodosContext.Provider, {
    value: todos
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/***/ }),

/***/ "./components/handleAuthSSR.js":
/*!*************************************!*\
  !*** ./components/handleAuthSSR.js ***!
  \*************************************/
/*! exports provided: handleAuthSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleAuthSSR", function() { return handleAuthSSR; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);



const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
async function handleAuthSSR(ctx) {
  let token = null;

  if (ctx.req) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  } else {
    token = cookies.get("token");
  }

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://owusu-task-manager.herokuapp.com/tasks";

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(proxyUrl + targetUrl, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    return res;
  } catch (e) {
    console.error("Error:", e);

    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }
  }
}

/***/ }),

/***/ "./components/hooks/useDBReducer.js":
/*!******************************************!*\
  !*** ./components/hooks/useDBReducer.js ***!
  \******************************************/
/*! exports provided: useDBReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDBReducer", function() { return useDBReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handleAuthSSR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleAuthSSR */ "./components/handleAuthSSR.js");



function useDBReducer(defaultVal, todoReducer) {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(todoReducer, defaultVal, async ctx => {
    let val;

    try {
      const res = await Object(_handleAuthSSR__WEBPACK_IMPORTED_MODULE_1__["handleAuthSSR"])(ctx);
      val = res.data;
      val.toggled = false;
    } catch (e) {
      console.log(e);
      return val = defaultVal;
    }

    return val;
  });
  console.log(state);
  return [state, dispatch];
}



/***/ }),

/***/ "./components/hooks/useInputState.js":
/*!*******************************************!*\
  !*** ./components/hooks/useInputState.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (initialVal => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
});

/***/ }),

/***/ "./components/hooks/useToggleState.js":
/*!********************************************!*\
  !*** ./components/hooks/useToggleState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useToggle(initialVal = false) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

/* harmony default export */ __webpack_exports__["default"] = (useToggle);

/***/ }),

/***/ "./components/reducers/todo.reducer.js":
/*!*********************************************!*\
  !*** ./components/reducers/todo.reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);


const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__["Cookies"]();
const token = cookies.get("token");

const todoReducer = async (state, action) => {
  switch (action.type) {
    case "ADD":
      const description = action.task;
      const body = {
        description
      };

      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = "https://owusu-task-manager.herokuapp.com/tasks";
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: proxyUrl + targetUrl,
          method: "post",
          data: body,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        const taskId = res.data._id;
        cookies.set("taskId", taskId); //set taskId to a cookie to TodoList.js can add it to its state

        return taskId;
        break;
      } catch (e) {
        console.log(e);
      }

    case "REMOVE":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: proxyUrl + targetUrl,
          method: "delete",
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }

    case "TOGGLE":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const isDone = !action.completed;
        const updateData = {
          completed: isDone
        };
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: proxyUrl + targetUrl,
          method: "patch",
          data: updateData,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }

    case "EDIT":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const description = action.newTask;
        const body = {
          description
        };
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: proxyUrl + targetUrl,
          method: "patch",
          data: body,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (todoReducer);

/***/ }),

/***/ "./components/styles/theme2.js":
/*!*************************************!*\
  !*** ./components/styles/theme2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  overrides: {
    MuiInputLabel: {
      root: {
        height: 20,
        color: "default",
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "23px"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme2);

/***/ }),

/***/ "./components/styles/useStyles.js":
/*!****************************************!*\
  !*** ./components/styles/useStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "475"
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./components/words.js":
/*!*****************************!*\
  !*** ./components/words.js ***!
  \*****************************/
/*! exports provided: words, content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "words", function() { return words; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
const words = {
  en: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me",
    errorMessage: "Email and/or Password incorrect",
    demoMessage: "Welcome to Task App Demo! Email: taskappdemo@demo.com | Password: 1234567",
    lastUpdated: "Last Update: ",
    addTodo: "Add New Todo"
  },
  fr: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi",
    errorMessage: "E-mail et / ou mot de passe incorrect",
    demoMessage: "Bienvenue dans la démo de Task-App!. Email: taskappdemo@demo.com | Password: 128834567",
    lastUpdated: "Dernières mises à jour: ",
    addTodo: "Ajouter un nouveau Todo"
  },
  es: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
    errorMessage: "Correo electrónico y / o contraseña incorrectos",
    demoMessage: "Bienvenido a la demostración de la Task-App! Email: taskappdemo@demo.com | Password: 1234567",
    lastUpdated: "Últimas actualizaciones: ",
    addTodo: "Añadir nuevo Todo"
  },
  de: {
    signIn: "Anmelden",
    email: "E-Mail-Addresse",
    password: "Passwort",
    remember: "Behalte mich in Erinnerung",
    errorMessage: "E-Mail und / oder Passwort falsch",
    demoMessage: "Willkommen zur Demo der Task-App! Email: taskappdemo@demo.com | Password: 1234567",
    lastUpdated: "Letzte Aktualisierung: ",
    addTodo: "Neuen Todo hinzufügen"
  },
  ja: {
    signIn: "サインイン",
    email: "電子メールアドレス",
    password: "パスワード",
    remember: "私を覚えている",
    errorMessage: "メールアドレスまたはパスワードが正しくありません",
    demoMessage: "タスクアプリのデモへようこそ! Email: taskappdemo@demo.com | Password: 1234567",
    lastUpdated: "最新の更新: ",
    addTodo: "新しいTodoを追加"
  }
};
const content = {
  en: {
    appTitle: "App Title",
    search: "Search",
    flag: "🇬🇧"
  },
  fr: {
    appTitle: "Titre de l'application",
    search: "Chercher",
    flag: "🇫🇷"
  },
  es: {
    appTitle: "Título de la aplicación",
    search: "Buscar",
    flag: "🇪🇸"
  },
  de: {
    appTitle: "App-Titel",
    search: "Suche",
    flag: "🇩🇪"
  },
  ja: {
    appTitle: "アプリのタイトル",
    search: "探す",
    flag: "🇯🇵"
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/TodoAppPage.js":
/*!******************************!*\
  !*** ./pages/TodoAppPage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.js");
/* harmony import */ var _components_TodoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoForm */ "./components/TodoForm.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_handleAuthSSR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/handleAuthSSR */ "./components/handleAuthSSR.js");
/* harmony import */ var _components_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contexts/ThemeContext */ "./components/contexts/ThemeContext.js");
/* harmony import */ var _components_contexts_todos_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contexts/todos.context */ "./components/contexts/todos.context.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function TodoAppPage(props) {
  const {
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_7__["ThemeContext"]);
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      paddding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: isDarkMode ? "#394bad" : "#edeef2",
      overflow: "scroll"
    },
    elevation: 0
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    justify: "center",
    style: {
      marginTop: "1rem"
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 11,
    md: 8,
    lg: 4
  }, __jsx(_components_contexts_todos_context__WEBPACK_IMPORTED_MODULE_8__["TodosProvider"], null, __jsx(_components_TodoForm__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    clicked: props.clicked
  })), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    clicked: props.clicked
  }))))));
}

TodoAppPage.getInitialProps = async ctx => {
  const res = await Object(_components_handleAuthSSR__WEBPACK_IMPORTED_MODULE_6__["handleAuthSSR"])(ctx);
  const {
    data
  } = res;
  return {
    posts: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TodoAppPage);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/TodoAppPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ericowusu/Documents/React _Course_Projects/Next/first-next/pages/TodoAppPage.js */"./pages/TodoAppPage.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-sortable-hoc":
/*!*************************************!*\
  !*** external "react-sortable-hoc" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=TodoAppPage.js.map