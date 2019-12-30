webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageContent */ "./components/PageContent.js");
/* harmony import */ var _components_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contexts/ThemeContext */ "./components/contexts/ThemeContext.js");
/* harmony import */ var _components_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contexts/LanguageContext */ "./components/contexts/LanguageContext.js");
/* harmony import */ var _components_contexts_todos_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contexts/todos.context */ "./components/contexts/todos.context.js");
/* harmony import */ var _components_contexts_user_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/contexts/user.context */ "./components/contexts/user.context.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_styles_SnackBarStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/styles/SnackBarStyles */ "./components/styles/SnackBarStyles.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/contexts/SortedContext */ "./components/contexts/SortedContext.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;













var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "render",
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          classes = _this$props.classes;
      return __jsx("div", null, __jsx(_components_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], null, __jsx(_components_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_9__["LanguageProvider"], null, __jsx(notistack__WEBPACK_IMPORTED_MODULE_12__["SnackbarProvider"], {
        maxSnack: 3,
        className: classes.root,
        iconVariant: {
          success: "✅",
          error: "⚠️"
        }
      }, __jsx(_components_PageContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(_components_contexts_user_context__WEBPACK_IMPORTED_MODULE_11__["UserProvider"], null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_15__["default"], null), __jsx(_components_contexts_SortedContext__WEBPACK_IMPORTED_MODULE_16__["SortedProvider"], null, __jsx(_components_contexts_todos_context__WEBPACK_IMPORTED_MODULE_10__["TodosProvider"], null, __jsx(Component, pageProps)))))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(_components_styles_SnackBarStyles__WEBPACK_IMPORTED_MODULE_14__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.dc2b2553cb9bd44cd63a.hot-update.js.map