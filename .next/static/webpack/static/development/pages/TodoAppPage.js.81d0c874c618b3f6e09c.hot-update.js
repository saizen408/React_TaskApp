webpackHotUpdate("static/development/pages/TodoAppPage.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _DraggableTodoList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DraggableTodoList */ "./components/DraggableTodoList.js");
/* harmony import */ var _contexts_SortedContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contexts/SortedContext */ "./components/contexts/SortedContext.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_18__);














var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_17__["Cookies"]();


var TodoList =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(TodoList, _PureComponent);

  function TodoList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, TodoList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(TodoList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "onSortEnd", function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _this$state = _this.state,
          tasks = _this$state.tasks,
          prevArr = _this$state.prevArr;
      console.log("before sort: ", prevArr);

      if (prevArr.length === 0) {
        var arr = cookies.get("tasks"); //if prevArr is same size as state.tasks change nothing
      } else if (prevArr.length === tasks.length) {
        var arr = prevArr; //if prev arr is smaller than state.tasks push the new element to the end
      } else if (prevArr.length < tasks.length) {
        _this.setState({
          prevArr: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(prevArr), [tasks[tasks.length - 1]])
        });

        var arr = prevArr; //if prev arr is larger than state.tasks filter out the corresponding element
      } else if (prevArr.length > tasks.length) {
        _this.setState({
          prevArr: prevArr.filter(function (task) {
            return task._id !== tasks._id;
          })
        });

        var arr = prevArr;
      } else {
        return console.log("something did not go quite as planned with sorting...");
      }

      arr = arr.slice();
      arr.splice(newIndex < 0 ? arr.length + newIndex : newIndex, 0, arr.splice(oldIndex, 1)[0]);
      console.log("after sort: ", arr);

      _this.setState({
        tasks: arr,
        prevArr: arr
      }, cookies.set("tasks", _this.state.tasks), console.log("ping!!!"), _this.props.sortedContext.updateState = false);
    });

    _this.state = {
      tasks: cookies.get("tasks") || props.posts,
      prevArr: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(TodoList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
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

  }, {
    key: "render",
    // componentWillReceiveProps(props) {
    //   if (this.props.posts !== props.posts) {
    //     this.setState({ newProps: this.props.posts });
    //   }
    // }
    value: function render() {
      var resetSort = this.props.sortedContext.resetSort;
      var posts = this.props.posts;
      var tasks = this.state.tasks;
      if (tasks.length) return __jsx(_DraggableTodoList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        axis: "y",
        distance: 20,
        onSortEnd: this.onSortEnd,
        posts: tasks,
        tasksDB: posts,
        sorted: resetSort
      });
      return null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.sortedContext.updateState) {
        props.sortedContext.updateState = false;
        var _props$sortedContext$ = props.sortedContext.type,
            type = _props$sortedContext$.type,
            id = _props$sortedContext$.id,
            todo = _props$sortedContext$.todo;
        console.log("props.sortedContext: ", id);
        var tasks = state.tasks; // const taskId = cookies.get("taskId");
        // cookies.set("tasks", tasks);

        switch (type) {
          case "ADD":
            return {
              tasks: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(tasks), [{
                _id: uuid_v4__WEBPACK_IMPORTED_MODULE_18___default()(),
                description: todo,
                completed: false
              }])
            };
            break;

          case "REMOVE":
            return {
              tasks: tasks.filter(function (task) {
                return task._id !== id;
              })
            };
          //should refer to state

          case "TOGGLE":
            return {
              tasks: tasks.map(function (task) {
                return task._id === id ? _objectSpread({}, task, {
                  completed: !task.completed
                }) : task;
              } //should refer to state
              )
            };
            break;

          case "EDIT":
            return {
              tasks: tasks.map(function (task) {
                return task._id === id ? _objectSpread({}, task, {
                  description: todo
                }) : task;
              })
            };
            break;

          default:
            return null;
        }
      } else return null;
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_14__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_17__["withCookies"])(Object(_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_16__["withSortedContext"])(TodoList)));

/***/ })

})
//# sourceMappingURL=TodoAppPage.js.81d0c874c618b3f6e09c.hot-update.js.map