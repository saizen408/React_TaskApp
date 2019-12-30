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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Fj0S");


/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2iaJ":
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "EEkl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (initialVal => {
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

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "Fj0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react-sortable-hoc"
var external_react_sortable_hoc_ = __webpack_require__("2iaJ");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: ./components/hooks/useToggleState.js
var useToggleState = __webpack_require__("n11V");

// EXTERNAL MODULE: ./components/hooks/useInputState.js
var useInputState = __webpack_require__("EEkl");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: ./components/contexts/todos.context.js + 2 modules
var todos_context = __webpack_require__("RraY");

// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// CONCATENATED MODULE: ./components/EditTodoForm.js
var __jsx = external_react_default.a.createElement;






function EditTodoForm({
  _id,
  description,
  toggleEditForm,
  sorted,
  tasksDBIdx
}) {
  const dispatch = Object(external_react_["useContext"])(todos_context["a" /* DispatchContext */]);
  const [value, handleChange, reset] = Object(useInputState["a" /* default */])(description);
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();

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
  }, __jsx(TextField_default.a, {
    margin: "normal",
    value: value,
    onChange: handleChange,
    fullWidth: true,
    autoFocus: true
  }));
}

/* harmony default export */ var components_EditTodoForm = (EditTodoForm);
// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__("YkC2");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: ./components/contexts/LanguageContext.js
var LanguageContext = __webpack_require__("VlV5");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/words.js
var words = __webpack_require__("v09S");

// CONCATENATED MODULE: ./components/DraggableTodo.js
var DraggableTodo_jsx = external_react_default.a.createElement;

















const DraggableTodo = Object(external_react_sortable_hoc_["SortableElement"])(({
  _id,
  description,
  completed,
  updatedAt,
  sorted,
  tasksDBIdx
}) => {
  const dispatch = Object(external_react_["useContext"])(todos_context["a" /* DispatchContext */]);
  const {
    language
  } = Object(external_react_["useContext"])(LanguageContext["a" /* LanguageContext */]);
  const [isEditing, toggle] = Object(useToggleState["a" /* default */])(false);
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();
  const {
    lastUpdated
  } = words["b" /* words */][language];

  const handleDeleteClick = () => {
    enqueueSnackbar(`❌ Deleted Task: "${description}"`);
  };

  const handleToggleClick = () => {
    enqueueSnackbar(`Good work! 💪 Task: "${description}" completed!`);
  };

  const formatedDate = () => {
    external_moment_default.a.locale(language);
    return external_moment_default()(updatedAt).format("lll");
  };

  return DraggableTodo_jsx(core_["Paper"], {
    elevation: 3
  }, DraggableTodo_jsx(ListItem_default.a, {
    style: {
      height: "65px"
    },
    divider: true
  }, isEditing ? DraggableTodo_jsx(components_EditTodoForm, {
    _id: _id,
    tasksDBIdx: tasksDBIdx,
    sorted: sorted,
    description: description,
    toggleEditForm: toggle
  }) : DraggableTodo_jsx(external_react_default.a.Fragment, null, DraggableTodo_jsx(Switch_default.a, {
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
  }), DraggableTodo_jsx(ListItemText_default.a, {
    style: {
      textDecoration: completed ? "line-through" : "none"
    },
    primary: description,
    secondary: `${lastUpdated}: ${formatedDate()}`
  }), DraggableTodo_jsx(ListItemSecondaryAction_default.a, null, DraggableTodo_jsx(IconButton_default.a, {
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
  }, DraggableTodo_jsx(Delete_default.a, null)), DraggableTodo_jsx(IconButton_default.a, {
    "aria-label": "Edit",
    onClick: toggle
  }, DraggableTodo_jsx(Edit_default.a, null))), " ")));
});
/* harmony default export */ var components_DraggableTodo = (Object(external_react_["memo"])(DraggableTodo));
// CONCATENATED MODULE: ./components/DraggableTodoList.js

var DraggableTodoList_jsx = external_react_default.a.createElement;




const DraggableTodoList = Object(external_react_sortable_hoc_["SortableContainer"])(({
  posts,
  sorted,
  tasksDB
}) => {
  return DraggableTodoList_jsx("div", null, DraggableTodoList_jsx(List_default.a, null, posts.map((todo, i) => DraggableTodoList_jsx(external_react_default.a.Fragment, {
    key: todo._id
  }, DraggableTodoList_jsx(components_DraggableTodo, Object(esm_extends["a" /* default */])({}, todo, {
    key: todo._id,
    index: i,
    sorted: sorted,
    tasksDB: tasksDB,
    tasksDBIdx: tasksDB[i]
  }))))));
});
/* harmony default export */ var components_DraggableTodoList = (DraggableTodoList);
// EXTERNAL MODULE: ./components/contexts/SortedContext.js
var SortedContext = __webpack_require__("hje+");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__("xg6E");
var v4_default = /*#__PURE__*/__webpack_require__.n(v4_);

// CONCATENATED MODULE: ./components/TodoList.js







var TodoList_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const cookies = new external_react_cookie_["Cookies"]();


class TodoList_TodoList extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "onSortEnd", ({
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
    if (tasks.length) return TodoList_jsx(components_DraggableTodoList, {
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

/* harmony default export */ var components_TodoList = (Object(external_react_cookie_["withCookies"])(Object(SortedContext["c" /* withSortedContext */])(TodoList_TodoList)));
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/styles/theme2.js

const theme2 = Object(core_styles_["createMuiTheme"])({
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
/* harmony default export */ var styles_theme2 = (theme2);
// CONCATENATED MODULE: ./components/styles/useStyles.js

const useStyles = Object(core_styles_["makeStyles"])(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "475"
    }
  }
}));
/* harmony default export */ var styles_useStyles = (useStyles);
// CONCATENATED MODULE: ./components/TodoForm.js
var TodoForm_jsx = external_react_default.a.createElement;















function TodoForm() {
  const [value, handleChange, reset] = Object(useInputState["a" /* default */])("");
  const dispatch = Object(external_react_["useContext"])(todos_context["a" /* DispatchContext */]);
  const {
    language
  } = Object(external_react_["useContext"])(LanguageContext["a" /* LanguageContext */]);
  const {
    resetSort
  } = Object(external_react_["useContext"])(SortedContext["a" /* SortedContext */]);
  const {
    addTodo
  } = words["b" /* words */][language];
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();

  const handleAddClick = () => {
    const message = `New Task: "${value}"`;
    enqueueSnackbar(message, {
      variant: "success"
    });
  };

  const classes = styles_useStyles();
  return TodoForm_jsx(Paper_default.a, {
    elevation: 3,
    style: {
      margin: "1rem 0",
      padding: "0"
    }
  }, TodoForm_jsx(core_["Container"], {
    disableGutters: true
  }, TodoForm_jsx("form", {
    className: classes.root,
    onSubmit: e => {
      e.preventDefault();
      handleAddClick();
      resetSort({
        type: "ADD",
        todo: value,
        id: v4_default()()
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
  }, TodoForm_jsx(styles_["ThemeProvider"], {
    theme: styles_theme2
  }, TodoForm_jsx(TextField_default.a, {
    id: "outlined-basic",
    variant: "outlined",
    value: value,
    onChange: handleChange,
    margin: "normal",
    label: addTodo,
    fullWidth: true
  })))));
}

/* harmony default export */ var components_TodoForm = (TodoForm);
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./components/handleAuthSSR.js
var handleAuthSSR = __webpack_require__("zZDm");

// EXTERNAL MODULE: ./components/contexts/ThemeContext.js
var ThemeContext = __webpack_require__("gNx5");

// CONCATENATED MODULE: ./pages/TodoAppPage.js

var TodoAppPage_jsx = external_react_default.a.createElement;









function TodoAppPage(props) {
  const {
    isDarkMode
  } = Object(external_react_["useContext"])(ThemeContext["a" /* ThemeContext */]);
  return TodoAppPage_jsx(Paper_default.a, {
    style: {
      paddding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: isDarkMode ? "#394bad" : "#edeef2",
      overflow: "scroll"
    },
    elevation: 0
  }, TodoAppPage_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    style: {
      marginTop: "1rem"
    }
  }, TodoAppPage_jsx(Grid_default.a, {
    item: true,
    xs: 11,
    md: 8,
    lg: 4
  }, TodoAppPage_jsx(todos_context["b" /* TodosProvider */], null, TodoAppPage_jsx(components_TodoForm, Object(esm_extends["a" /* default */])({}, props, {
    clicked: props.clicked
  })), TodoAppPage_jsx(components_TodoList, Object(esm_extends["a" /* default */])({}, props, {
    clicked: props.clicked
  }))))));
}

TodoAppPage.getInitialProps = async ctx => {
  const res = await Object(handleAuthSSR["a" /* handleAuthSSR */])(ctx);
  const {
    data
  } = res;
  return {
    posts: data
  };
};

/* harmony default export */ var pages_TodoAppPage = __webpack_exports__["default"] = (TodoAppPage);

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RraY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/handleAuthSSR.js
var handleAuthSSR = __webpack_require__("zZDm");

// CONCATENATED MODULE: ./components/hooks/useDBReducer.js



function useDBReducer(defaultVal, todoReducer) {
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(todoReducer, defaultVal, async ctx => {
    let val;

    try {
      const res = await Object(handleAuthSSR["a" /* handleAuthSSR */])(ctx);
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


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./components/reducers/todo.reducer.js


const cookies = new external_react_cookie_["Cookies"]();
const token = cookies.get("token");

const todo_reducer_todoReducer = async (state, action) => {
  switch (action.type) {
    case "ADD":
      const description = action.task;
      const body = {
        description
      };

      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = "https://owusu-task-manager.herokuapp.com/tasks";
        const res = await external_axios_default()({
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
        const res = await external_axios_default()({
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
        const res = await external_axios_default()({
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
        const res = await external_axios_default()({
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

/* harmony default export */ var todo_reducer = (todo_reducer_todoReducer);
// CONCATENATED MODULE: ./components/contexts/todos.context.js
/* unused harmony export TodosContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TodosProvider; });
var __jsx = external_react_default.a.createElement;



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
const TodosContext = Object(external_react_["createContext"])();
const DispatchContext = Object(external_react_["createContext"])();
function TodosProvider(props) {
  const [todos, dispatch] = useDBReducer(defaultTodos, todo_reducer);
  return __jsx(TodosContext.Provider, {
    value: todos
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VlV5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LanguageProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YkC2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gNx5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("n11V");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = Object(_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(false);
  return __jsx(ThemeContext.Provider, {
    value: {
      isDarkMode,
      toggleTheme
    }
  }, props.children);
}

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hje+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortedProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withSortedContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


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
const withSortedContext = Component => props => __jsx(SortedContext.Consumer, null, value => __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
  sortedContext: value
}, props)));

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "n11V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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

/* harmony default export */ __webpack_exports__["a"] = (useToggle);

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "v09S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return words; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return content; });
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

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "zZDm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAuthSSR; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wEaX");
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });