self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Documents\\react\\Amazon-starter-template-nextjs\\src\\components\\ProductFeed.js",
    _s = $RefreshSig$();







var MAX_RATING = 5;
var MIN_RATING = 1;

function ProductFeed(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      rating = _useState[0],
      setrating = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  var addItemToBasket = function addItemToBasket() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      width: 200,
      height: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
          className: "h-5 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "GBP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: "",
        srcset: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "mt-auto button",
      onClick: addItemToBasket,
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(ProductFeed, "kc01sWXr1CeOgirhnWXGOSyM6I4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];
});

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initialState = {
  items: []
};
var basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState: initialState,
  reducers: {
    // Actions
    addToBasket: function addToBasket(state, action) {},
    removeFromBasket: function removeFromBasket(state, action) {}
  }
});
var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice


var selectItems = function selectItems(state) {
  return state.basket.items;
};
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNextState": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "current": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_0__.current; },
/* harmony export */   "freeze": function() { return /* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_0__.freeze; },
/* harmony export */   "createSelector": function() { return /* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_2__.createSelector; },
/* harmony export */   "MiddlewareArray": function() { return /* binding */ MiddlewareArray; },
/* harmony export */   "configureStore": function() { return /* binding */ configureStore; },
/* harmony export */   "createAction": function() { return /* binding */ createAction; },
/* harmony export */   "createAsyncThunk": function() { return /* binding */ createAsyncThunk; },
/* harmony export */   "createDraftSafeSelector": function() { return /* binding */ createDraftSafeSelector; },
/* harmony export */   "createEntityAdapter": function() { return /* binding */ createEntityAdapter; },
/* harmony export */   "createImmutableStateInvariantMiddleware": function() { return /* binding */ createImmutableStateInvariantMiddleware; },
/* harmony export */   "createReducer": function() { return /* binding */ createReducer; },
/* harmony export */   "createSerializableStateInvariantMiddleware": function() { return /* binding */ createSerializableStateInvariantMiddleware; },
/* harmony export */   "createSlice": function() { return /* binding */ createSlice; },
/* harmony export */   "findNonSerializableValue": function() { return /* binding */ findNonSerializableValue; },
/* harmony export */   "getDefaultMiddleware": function() { return /* binding */ getDefaultMiddleware; },
/* harmony export */   "getType": function() { return /* binding */ getType; },
/* harmony export */   "isAllOf": function() { return /* binding */ isAllOf; },
/* harmony export */   "isAnyOf": function() { return /* binding */ isAnyOf; },
/* harmony export */   "isAsyncThunkAction": function() { return /* binding */ isAsyncThunkAction; },
/* harmony export */   "isFulfilled": function() { return /* binding */ isFulfilled; },
/* harmony export */   "isImmutableDefault": function() { return /* binding */ isImmutableDefault; },
/* harmony export */   "isPending": function() { return /* binding */ isPending; },
/* harmony export */   "isPlain": function() { return /* binding */ isPlain; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isRejected": function() { return /* binding */ isRejected; },
/* harmony export */   "isRejectedWithValue": function() { return /* binding */ isRejectedWithValue; },
/* harmony export */   "nanoid": function() { return /* binding */ nanoid; },
/* harmony export */   "unwrapResult": function() { return /* binding */ unwrapResult; }
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in redux__WEBPACK_IMPORTED_MODULE_1__) if(["default","createNextState","current","freeze","createSelector","MiddlewareArray","configureStore","createAction","createAsyncThunk","createDraftSafeSelector","createEntityAdapter","createImmutableStateInvariantMiddleware","createReducer","createSerializableStateInvariantMiddleware","createSlice","findNonSerializableValue","getDefaultMiddleware","getType","isAllOf","isAnyOf","isAsyncThunkAction","isFulfilled","isImmutableDefault","isPending","isPlain","isPlainObject","isRejected","isRejectedWithValue","nanoid","unwrapResult"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return redux__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");








/**
 * "Draft-Safe" version of `reselect`'s `createSelector`:
 * If an `immer`-drafted object is passed into the resulting selector's first argument,
 * the selector will act on the current draft value, instead of returning a cached value
 * that might be possibly outdated if the draft has been modified since.
 * @public
 */

var createDraftSafeSelector = function createDraftSafeSelector() {
  var selector = reselect__WEBPACK_IMPORTED_MODULE_2__.createSelector.apply(void 0, arguments);

  var wrappedSelector = function wrappedSelector(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return selector.apply(void 0, [(0,immer__WEBPACK_IMPORTED_MODULE_0__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_0__.current)(value) : value].concat(rest));
  };

  return wrappedSelector;
};

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return redux__WEBPACK_IMPORTED_MODULE_1__.compose;
  return redux__WEBPACK_IMPORTED_MODULE_1__.compose.apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * protoype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 *
 * @public
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function measureTime(fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

var isProduction = "development" === 'production';
var prefix = 'Invariant failed'; // Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller

function invariant(condition, message) {
  if (condition) {
    return;
  } // Condition not passed
  // In production we strip the message but still throw


  if (isProduction) {
    throw new Error(prefix);
  } // When not in production we allow the message to pass through
  // *This block will be removed in production builds*


  throw new Error(prefix + ": " + (message || ''));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function decycler(_, value) {
    if (stack[0] === value) return '[Circular ~]';
    return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}
/**
 * The default `isImmutable` function.
 *
 * @public
 */


function isImmutableDefault(value) {
  return typeof value !== 'object' || value === null || typeof value === 'undefined';
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function detectMutations() {
      return _detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = [];
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path.concat(key);

      if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function _detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = [];
  }

  var prevObj = trackedProperty ? trackedProperty.value : undefined;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  } // Gather all keys from prev (tracked) and after objs


  var keysToDetect = {};
  Object.keys(trackedProperty.children).forEach(function (key) {
    keysToDetect[key] = true;
  });
  Object.keys(obj).forEach(function (key) {
    keysToDetect[key] = true;
  });
  var keys = Object.keys(keysToDetect);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var childPath = path.concat(key);

    if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
      continue;
    }

    var result = _detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}
/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */


function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isImmutable = _options.isImmutable,
      isImmutable = _options$isImmutable === void 0 ? isImmutableDefault : _options$isImmutable,
      ignoredPaths = _options.ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter,
      ignore = _options.ignore; // Alias ignore->ignoredPaths, but prefer ignoredPaths if present

  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_ref) {
    var getState = _ref.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, 'ImmutableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          !!result.wasMutated ?  true ? invariant(false, "A state mutation was detected between dispatches, in the path '" + (result.path || []).join('.') + "'.  This may cause incorrect behavior. (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : 0 : void 0;
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          result.wasMutated && (!!result.wasMutated ?  true ? invariant(false, "A state mutation was detected inside a dispatch, in the path: " + (result.path || []).join('.') + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : 0 : void 0);
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */

function isPlain(val) {
  return typeof val === 'undefined' || val === null || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val) || isPlainObject(val);
}
/**
 * @public
 */

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = [];
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path.join('.') || '<root>',
      value: value
    };
  }

  if (typeof value !== 'object' || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        property = _ref2[0],
        nestedValue = _ref2[1];
    var nestedPath = path.concat(property);

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath.join('.')) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath.join('.'),
        value: nestedValue
      };
    }

    if (typeof nestedValue === 'object') {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}
/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isSerializab = _options.isSerializable,
      isSerializable = _options$isSerializab === void 0 ? isPlain : _options$isSerializab,
      getEntries = _options.getEntries,
      _options$ignoredActio = _options.ignoredActions,
      ignoredActions = _options$ignoredActio === void 0 ? [] : _options$ignoredActio,
      _options$ignoredActio2 = _options.ignoredActionPaths,
      ignoredActionPaths = _options$ignoredActio2 === void 0 ? ['meta.arg'] : _options$ignoredActio2,
      _options$ignoredPaths = _options.ignoredPaths,
      ignoredPaths = _options$ignoredPaths === void 0 ? [] : _options$ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
          return next(action);
        }

        var measureUtils = getTimeMeasureUtils(warnAfter, 'SerializableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          var foundActionNonSerializableValue = findNonSerializableValue(action, [], isSerializable, getEntries, ignoredActionPaths);

          if (foundActionNonSerializableValue) {
            var keyPath = foundActionNonSerializableValue.keyPath,
                value = foundActionNonSerializableValue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, '\nTake a look at the logic that dispatched this action: ', action, '\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)', '\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)');
          }
        });
        var result = next(action);
        measureUtils.measureTime(function () {
          var state = storeAPI.getState();
          var foundStateNonSerializableValue = findNonSerializableValue(state, [], isSerializable, getEntries, ignoredPaths);

          if (foundStateNonSerializableValue) {
            var keyPath = foundStateNonSerializableValue.keyPath,
                value = foundStateNonSerializableValue.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
          }
        });
        measureUtils.warnIfExceeded();
        return result;
      };
    };
  };
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      immutableCheck = _options$immutableChe === void 0 ? true : _options$immutableChe,
      _options$serializable = _options.serializableCheck,
      serializableCheck = _options$serializable === void 0 ? true : _options$serializable;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default);
    } else {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default.withExtraArgument(thunk.extraArgument));
    }
  }

  if (true) {
    if (immutableCheck) {
      /* PROD_START_REMOVE_UMD */
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      /* PROD_STOP_REMOVE_UMD */
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "development" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware.apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = redux__WEBPACK_IMPORTED_MODULE_1__.compose;

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}
function isFSA(action) {
  return isPlainObject(action) && typeof action.type === 'string' && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}
/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 *
 * @public
 */


function getType(actionCreator) {
  return "" + actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {
      if (true) {
        /*
         to keep the definition by the user in line with actual behavior,
         we enforce `addCase` to always be called before calling `addMatcher`
         as matching cases take precedence over matchers
         */
        if (actionMatchers.length > 0) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addMatcher`');
        }

        if (defaultCaseReducer) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addDefaultCase`');
        }
      }

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addMatcher` should only be called before calling `builder.addDefaultCase`');
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addDefaultCase` can only be called once');
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  return function (state, action) {
    if (state === void 0) {
      state = initialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if ((0,immer__WEBPACK_IMPORTED_MODULE_0__.isDraft)(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!(0,immer__WEBPACK_IMPORTED_MODULE_0__.isDraftable)(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            if (previousState === null) {
              return previousState;
            }

            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return (0,immer__WEBPACK_IMPORTED_MODULE_0__.default)(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

function getType$1(slice, actionKey) {
  return slice + "/" + actionKey;
}
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 * @public
 */


function createSlice(options) {
  var name = options.name,
      initialState = options.initialState;

  if (!name) {
    throw new Error('`name` is a required option for createSlice');
  }

  var reducers = options.reducers || {};

  var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
      _ref$ = _ref[0],
      extraReducers = _ref$ === void 0 ? {} : _ref$,
      _ref$2 = _ref[1],
      actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
      _ref$3 = _ref[2],
      defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType$1(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ('reducer' in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  var finalCaseReducers = _extends({}, extraReducers, {}, sliceCaseReducersByType);

  var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  return {
    name: name,
    reducer: reducer,
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName
  };
}

function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
}

function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function selectIds(state) {
      return state.ids;
    };

    var selectEntities = function selectEntities(state) {
      return state.entities;
    };

    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function selectId(_, id) {
      return id;
    };

    var selectById = function selectById(entities, id) {
      return entities[id];
    };

    var selectTotal = createDraftSafeSelector(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
}

function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, undefined);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg) {
      return isFSA(arg);
    }

    var runMutator = function runMutator(draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if ((0,immer__WEBPACK_IMPORTED_MODULE_0__.isDraft)(state)) {
      // we must already be inside a `createNextState` call, likely because
      // this is being wrapped in `createReducer` or `createSlice`.
      // It's safe to just pass the draft to the mutator.
      runMutator(state); // since it's a draft, we'll just return it

      return state;
    } else {
      // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
      // than an Immutable<S>, and TypeScript cannot find out how to reconcile
      // these two types.
      return (0,immer__WEBPACK_IMPORTED_MODULE_0__.default)(state, runMutator);
    }
  };
}

function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ( true && key === undefined) {
    console.warn('The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
  }

  return key;
}

function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      addOneMutably(entity, state);
    }
  }

  function setAllMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    state.ids = [];
    state.entities = {};
    addManyMutably(entities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      // Only apply updates to entities that currently exist
      if (update.id in state.entities) {
        // If there are multiple updates to one entity, merge them together
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: _extends({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null, {}, update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator2 = entities, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var entity = _ref2;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

function createSortedStateAdapter(selectId, sort) {
  var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
      removeOne = _createUnsortedStateA.removeOne,
      removeMany = _createUnsortedStateA.removeMany,
      removeAll = _createUnsortedStateA.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newModels, state) {
    if (!Array.isArray(newModels)) {
      newModels = Object.values(newModels);
    }

    var models = newModels.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setAllMutably(models, state) {
    if (!Array.isArray(models)) {
      models = Object.values(models);
    }

    state.entities = {};
    state.ids = [];
    addManyMutably(models, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.sort(sort); // Insert/overwrite all new/updated

    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

/**
 *
 * @param options
 *
 * @public
 */

function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _sortComparer$selectI = _extends({
    sortComparer: false,
    selectId: function selectId(instance) {
      return instance.id;
    }
  }, options),
      selectId = _sortComparer$selectI.selectId,
      sortComparer = _sortComparer$selectI.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return _extends({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory, {}, selectorsFactory, {}, stateAdapter);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(payload) {
  this.payload = payload;
  this.name = 'RejectWithValue';
  this.message = 'Rejected';
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'fulfilled'
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'pending'
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg) {
    var rejectedWithValue = error instanceof RejectWithValue;
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: error instanceof RejectWithValue ? error.payload : undefined,
      error: (options && options.serializeError || miniSerializeError)(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        rejectedWithValue: rejectedWithValue,
        requestStatus: 'rejected',
        aborted: aborted,
        condition: condition
      }
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
      if (true) {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(result, requestId, arg);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort,
        requestId: requestId,
        arg: arg
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}
/**
 * @public
 */

function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }

  if (action.error) {
    throw action.error;
  }

  return action.payload;
}

var hasMatchFunction = function hasMatchFunction(v) {
  return v && typeof v.match === 'function';
};

var matches = function matches(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches any one of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */


function isAnyOf() {
  for (var _len = arguments.length, matchers = new Array(_len), _key = 0; _key < _len; _key++) {
    matchers[_key] = arguments[_key];
  }

  return function (action) {
    return matchers.some(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches all of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */

function isAllOf() {
  for (var _len2 = arguments.length, matchers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    matchers[_key2] = arguments[_key2];
  }

  return function (action) {
    return matchers.every(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * @param action A redux action
 * @param validStatus An array of valid meta.requestStatus values
 *
 * @internal
 */

function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  var hasValidRequestId = typeof action.meta.requestId === 'string';
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}

function isAsyncThunkArray(a) {
  return typeof a[0] === 'function' && 'pending' in a[0] && 'fulfilled' in a[0] && 'rejected' in a[0];
}

function isPending() {
  for (var _len3 = arguments.length, asyncThunks = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    asyncThunks[_key3] = arguments[_key3];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejected() {
  for (var _len4 = arguments.length, asyncThunks = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    asyncThunks[_key4] = arguments[_key4];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejectedWithValue() {
  for (var _len5 = arguments.length, asyncThunks = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    asyncThunks[_key5] = arguments[_key5];
  }

  var hasFlag = function hasFlag(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };

  if (asyncThunks.length === 0) {
    return function (action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }

  return function (action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
function isFulfilled() {
  for (var _len6 = arguments.length, asyncThunks = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    asyncThunks[_key6] = arguments[_key6];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['fulfilled']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isAsyncThunkAction() {
  for (var _len7 = arguments.length, asyncThunks = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    asyncThunks[_key7] = arguments[_key7];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending', 'fulfilled', 'rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = [];

    for (var _iterator = asyncThunks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var asyncThunk = _ref;
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }

    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

(0,immer__WEBPACK_IMPORTED_MODULE_0__.enableES5)();


//# sourceMappingURL=redux-toolkit.esm.js.map


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": function() { return /* binding */ un; },
/* harmony export */   "applyPatches": function() { return /* binding */ pn; },
/* harmony export */   "castDraft": function() { return /* binding */ K; },
/* harmony export */   "castImmutable": function() { return /* binding */ $; },
/* harmony export */   "createDraft": function() { return /* binding */ ln; },
/* harmony export */   "current": function() { return /* binding */ D; },
/* harmony export */   "enableAllPlugins": function() { return /* binding */ J; },
/* harmony export */   "enableES5": function() { return /* binding */ N; },
/* harmony export */   "enableMapSet": function() { return /* binding */ C; },
/* harmony export */   "enablePatches": function() { return /* binding */ T; },
/* harmony export */   "finishDraft": function() { return /* binding */ dn; },
/* harmony export */   "freeze": function() { return /* binding */ d; },
/* harmony export */   "immerable": function() { return /* binding */ L; },
/* harmony export */   "isDraft": function() { return /* binding */ r; },
/* harmony export */   "isDraftable": function() { return /* binding */ t; },
/* harmony export */   "nothing": function() { return /* binding */ H; },
/* harmony export */   "original": function() { return /* binding */ e; },
/* harmony export */   "produce": function() { return /* binding */ fn; },
/* harmony export */   "produceWithPatches": function() { return /* binding */ cn; },
/* harmony export */   "setAutoFreeze": function() { return /* binding */ sn; },
/* harmony export */   "setUseProxies": function() { return /* binding */ vn; }
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q],r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.D.set(n,!1),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),en.deleteProperty.call(this,r[0],t)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if((f=i(r))===H)return;return void 0===f&&(f=r),e.F&&d(f,!0),f}n(21,r)},this.produceWithPatches=function(n,r){return"function"==typeof n?function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))}:[e.produce(n,r,(function(n,r){t=n,i=r})),t,i];var t,i},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMemoize": function() { return /* binding */ defaultMemoize; },
/* harmony export */   "createSelectorCreator": function() { return /* binding */ createSelectorCreator; },
/* harmony export */   "createSelector": function() { return /* binding */ createSelector; },
/* harmony export */   "createStructuredSelector": function() { return /* binding */ createStructuredSelector; }
/* harmony export */ });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVkdXhqcy90b29sa2l0L2Rpc3QvcmVkdXgtdG9vbGtpdC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0RmVlZCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsInNldHJhdGluZyIsImhhc1ByaW1lIiwiYWRkSXRlbVRvQmFza2V0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicmVtb3ZlRnJvbUJhc2tldCIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxTQUFTQyxX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OztBQUU3QztBQUNBLHNEQUFzRCxLQUFxQyxpUkFBaVIsQ0FBZ0I7QUFDNVgsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhJQUE4STtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDLEVBQUUsRUFRMUM7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4RUFBOEU7QUFDNUc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5SkFBeUo7QUFDeko7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlKQUFpSjtBQUNqSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGtCQUFrQixzQkFBc0I7QUFDM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDhDQUE4QyxVQUFVOztBQUV0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBOztBQUVBLHlKQUF5SjtBQUN6Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsV0FBVzs7QUFFWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RSxlQUFlO0FBQzNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtFQUErRSxlQUFlO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxlQUFlO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxlQUFlO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQUUsRUFBd1c7QUFDdDhpQjs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1AsOEZBQThGLGFBQWE7QUFDM0c7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RSxlQUFlO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFQTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx3RUFBd0UsZUFBZTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSCxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzZTI5MmFjOGVkZjg5YTRjM2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3QgW3JhdGluZywgc2V0cmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSlcclxuICAgIFxyXG4gICAgY29uc3QgYWRkSXRlbVRvQmFza2V0ID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgYmctd2hpdGUgei0zMCBwLTEwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPntjYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zXCI+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIkdCUFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTJcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GcmVlIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCIgb25DbGljaz17YWRkSXRlbVRvQmFza2V0fT5BZGQgdG8gQmFza2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIEFjdGlvbnNcclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge30sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge30sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBpc0RyYWZ0LCBjdXJyZW50LCBpc0RyYWZ0YWJsZSwgZW5hYmxlRVM1IH0gZnJvbSAnaW1tZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVOZXh0U3RhdGUsIGN1cnJlbnQsIGZyZWV6ZSB9IGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmV4cG9ydCAqIGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuZXhwb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLyoqXHJcbiAqIFwiRHJhZnQtU2FmZVwiIHZlcnNpb24gb2YgYHJlc2VsZWN0YCdzIGBjcmVhdGVTZWxlY3RvcmA6XHJcbiAqIElmIGFuIGBpbW1lcmAtZHJhZnRlZCBvYmplY3QgaXMgcGFzc2VkIGludG8gdGhlIHJlc3VsdGluZyBzZWxlY3RvcidzIGZpcnN0IGFyZ3VtZW50LFxyXG4gKiB0aGUgc2VsZWN0b3Igd2lsbCBhY3Qgb24gdGhlIGN1cnJlbnQgZHJhZnQgdmFsdWUsIGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgY2FjaGVkIHZhbHVlXHJcbiAqIHRoYXQgbWlnaHQgYmUgcG9zc2libHkgb3V0ZGF0ZWQgaWYgdGhlIGRyYWZ0IGhhcyBiZWVuIG1vZGlmaWVkIHNpbmNlLlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG52YXIgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcigpIHtcbiAgdmFyIHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gIHZhciB3cmFwcGVkU2VsZWN0b3IgPSBmdW5jdGlvbiB3cmFwcGVkU2VsZWN0b3IodmFsdWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3IuYXBwbHkodm9pZCAwLCBbaXNEcmFmdCh2YWx1ZSkgPyBjdXJyZW50KHZhbHVlKSA6IHZhbHVlXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiB3cmFwcGVkU2VsZWN0b3I7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cblxudmFyIGNvbXBvc2VXaXRoRGV2VG9vbHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgXCJwbGFpblwiIG9iamVjdCwgaS5lLiBhbiBvYmplY3Qgd2hvc2VcclxuICogcHJvdG95cGUgaXMgdGhlIHJvb3QgYE9iamVjdC5wcm90b3R5cGVgLiBUaGlzIGluY2x1ZGVzIG9iamVjdHMgY3JlYXRlZFxyXG4gKiB1c2luZyBvYmplY3QgbGl0ZXJhbHMsIGJ1dCBub3QgZm9yIGluc3RhbmNlIGZvciBjbGFzcyBpbnN0YW5jZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IHZhbHVlO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgPT09IHByb3RvO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lTWVhc3VyZVV0aWxzKG1heERlbGF5LCBmbk5hbWUpIHtcbiAgdmFyIGVsYXBzZWQgPSAwO1xuICByZXR1cm4ge1xuICAgIG1lYXN1cmVUaW1lOiBmdW5jdGlvbiBtZWFzdXJlVGltZShmbikge1xuICAgICAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHZhciBmaW5pc2hlZCA9IERhdGUubm93KCk7XG4gICAgICAgIGVsYXBzZWQgKz0gZmluaXNoZWQgLSBzdGFydGVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2FybklmRXhjZWVkZWQ6IGZ1bmN0aW9uIHdhcm5JZkV4Y2VlZGVkKCkge1xuICAgICAgaWYgKGVsYXBzZWQgPiBtYXhEZWxheSkge1xuICAgICAgICBjb25zb2xlLndhcm4oZm5OYW1lICsgXCIgdG9vayBcIiArIGVsYXBzZWQgKyBcIm1zLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIHdhcm5pbmcgdGhyZXNob2xkIG9mIFwiICsgbWF4RGVsYXkgKyBcIm1zLiBcXG5JZiB5b3VyIHN0YXRlIG9yIGFjdGlvbnMgYXJlIHZlcnkgbGFyZ2UsIHlvdSBtYXkgd2FudCB0byBkaXNhYmxlIHRoZSBtaWRkbGV3YXJlIGFzIGl0IG1pZ2h0IGNhdXNlIHRvbyBtdWNoIG9mIGEgc2xvd2Rvd24gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gU2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlIGZvciBpbnN0cnVjdGlvbnMuXFxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG52YXIgTWlkZGxld2FyZUFycmF5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQXJyYXkpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWlkZGxld2FyZUFycmF5LCBfQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIE1pZGRsZXdhcmVBcnJheSgpIHtcbiAgICByZXR1cm4gX0FycmF5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgdmFyIF9BcnJheSRwcm90b3R5cGUkY29uYztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcnIgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcnJbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QoTWlkZGxld2FyZUFycmF5LCAoX0FycmF5JHByb3RvdHlwZSRjb25jID0gX0FycmF5LnByb3RvdHlwZS5jb25jYXQpLmNhbGwuYXBwbHkoX0FycmF5JHByb3RvdHlwZSRjb25jLCBbdGhpc10uY29uY2F0KGFycikpKTtcbiAgfTtcblxuICBfcHJvdG8ucHJlcGVuZCA9IGZ1bmN0aW9uIHByZXBlbmQoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcnIgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFycltfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmIChhcnIubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJyWzBdKSkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoTWlkZGxld2FyZUFycmF5LCBhcnJbMF0uY29uY2F0KHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdChNaWRkbGV3YXJlQXJyYXksIGFyci5jb25jYXQodGhpcykpO1xuICB9O1xuXG4gIHJldHVybiBNaWRkbGV3YXJlQXJyYXk7XG59KFxuLyojX19QVVJFX18qL1xuX3dyYXBOYXRpdmVTdXBlcihBcnJheSkpO1xuXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7IC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBjb25kaXRpb24gZmFpbHNcbi8vIFN0cmlwIG91dCBlcnJvciBtZXNzYWdlcyBmb3IgcHJvZHVjdGlvblxuLy8gPiBOb3QgcHJvdmlkaW5nIGFuIGlubGluZSBkZWZhdWx0IGFyZ3VtZW50IGZvciBtZXNzYWdlIGFzIHRoZSByZXN1bHQgaXMgc21hbGxlclxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ29uZGl0aW9uIG5vdCBwYXNzZWRcbiAgLy8gSW4gcHJvZHVjdGlvbiB3ZSBzdHJpcCB0aGUgbWVzc2FnZSBidXQgc3RpbGwgdGhyb3dcblxuXG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcbiAgfSAvLyBXaGVuIG5vdCBpbiBwcm9kdWN0aW9uIHdlIGFsbG93IHRoZSBtZXNzYWdlIHRvIHBhc3MgdGhyb3VnaFxuICAvLyAqVGhpcyBibG9jayB3aWxsIGJlIHJlbW92ZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMqXG5cblxuICB0aHJvdyBuZXcgRXJyb3IocHJlZml4ICsgXCI6IFwiICsgKG1lc3NhZ2UgfHwgJycpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgc2VyaWFsaXplciwgaW5kZW50LCBkZWN5Y2xlcikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpLCBpbmRlbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpIHtcbiAgdmFyIHN0YWNrID0gW10sXG4gICAgICBrZXlzID0gW107XG4gIGlmICghZGVjeWNsZXIpIGRlY3ljbGVyID0gZnVuY3Rpb24gZGVjeWNsZXIoXywgdmFsdWUpIHtcbiAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKSByZXR1cm4gJ1tDaXJjdWxhciB+XSc7XG4gICAgcmV0dXJuICdbQ2lyY3VsYXIgfi4nICsga2V5cy5zbGljZSgwLCBzdGFjay5pbmRleE9mKHZhbHVlKSkuam9pbignLicpICsgJ10nO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpO1xuICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKTtcbiAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KTtcbiAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpIHZhbHVlID0gZGVjeWNsZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Ugc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXplciA9PSBudWxsID8gdmFsdWUgOiBzZXJpYWxpemVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gIH07XG59XG4vKipcclxuICogVGhlIGRlZmF1bHQgYGlzSW1tdXRhYmxlYCBmdW5jdGlvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cblxuXG5mdW5jdGlvbiBpc0ltbXV0YWJsZURlZmF1bHQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cbmZ1bmN0aW9uIHRyYWNrRm9yTXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKSB7XG4gIHZhciB0cmFja2VkUHJvcGVydGllcyA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaik7XG4gIHJldHVybiB7XG4gICAgZGV0ZWN0TXV0YXRpb25zOiBmdW5jdGlvbiBkZXRlY3RNdXRhdGlvbnMoKSB7XG4gICAgICByZXR1cm4gX2RldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqLCBwYXRoKSB7XG4gIGlmIChpZ25vcmVQYXRocyA9PT0gdm9pZCAwKSB7XG4gICAgaWdub3JlUGF0aHMgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXRoID0gW107XG4gIH1cblxuICB2YXIgdHJhY2tlZCA9IHtcbiAgICB2YWx1ZTogb2JqXG4gIH07XG5cbiAgaWYgKCFpc0ltbXV0YWJsZShvYmopKSB7XG4gICAgdHJhY2tlZC5jaGlsZHJlbiA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGguY29uY2F0KGtleSk7XG5cbiAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGguam9pbignLicpKSAhPT0gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRyYWNrZWQuY2hpbGRyZW5ba2V5XSA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9ialtrZXldLCBjaGlsZFBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cmFja2VkO1xufVxuXG5mdW5jdGlvbiBfZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnR5LCBvYmosIHNhbWVQYXJlbnRSZWYsIHBhdGgpIHtcbiAgaWYgKGlnbm9yZVBhdGhzID09PSB2b2lkIDApIHtcbiAgICBpZ25vcmVQYXRocyA9IFtdO1xuICB9XG5cbiAgaWYgKHNhbWVQYXJlbnRSZWYgPT09IHZvaWQgMCkge1xuICAgIHNhbWVQYXJlbnRSZWYgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChwYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXRoID0gW107XG4gIH1cblxuICB2YXIgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgdmFyIHNhbWVSZWYgPSBwcmV2T2JqID09PSBvYmo7XG5cbiAgaWYgKHNhbWVQYXJlbnRSZWYgJiYgIXNhbWVSZWYgJiYgIU51bWJlci5pc05hTihvYmopKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdhc011dGF0ZWQ6IHRydWUsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc0ltbXV0YWJsZShwcmV2T2JqKSB8fCBpc0ltbXV0YWJsZShvYmopKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdhc011dGF0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSAvLyBHYXRoZXIgYWxsIGtleXMgZnJvbSBwcmV2ICh0cmFja2VkKSBhbmQgYWZ0ZXIgb2Jqc1xuXG5cbiAgdmFyIGtleXNUb0RldGVjdCA9IHt9O1xuICBPYmplY3Qua2V5cyh0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xuICB9KTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhrZXlzVG9EZXRlY3QpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBjaGlsZFBhdGggPSBwYXRoLmNvbmNhdChrZXkpO1xuXG4gICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IF9kZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW5ba2V5XSwgb2JqW2tleV0sIHNhbWVSZWYsIGNoaWxkUGF0aCk7XG5cbiAgICBpZiAocmVzdWx0Lndhc011dGF0ZWQpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3YXNNdXRhdGVkOiBmYWxzZVxuICB9O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtaWRkbGV3YXJlIHRoYXQgY2hlY2tzIHdoZXRoZXIgYW55IHN0YXRlIHdhcyBtdXRhdGVkIGluIGJldHdlZW5cclxuICogZGlzcGF0Y2hlcyBvciBkdXJpbmcgYSBkaXNwYXRjaC4gSWYgYW55IG11dGF0aW9ucyBhcmUgZGV0ZWN0ZWQsIGFuIGVycm9yIGlzXHJcbiAqIHRocm93bi5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgTWlkZGxld2FyZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJGlzSW1tdXRhYmxlID0gX29wdGlvbnMuaXNJbW11dGFibGUsXG4gICAgICBpc0ltbXV0YWJsZSA9IF9vcHRpb25zJGlzSW1tdXRhYmxlID09PSB2b2lkIDAgPyBpc0ltbXV0YWJsZURlZmF1bHQgOiBfb3B0aW9ucyRpc0ltbXV0YWJsZSxcbiAgICAgIGlnbm9yZWRQYXRocyA9IF9vcHRpb25zLmlnbm9yZWRQYXRocyxcbiAgICAgIF9vcHRpb25zJHdhcm5BZnRlciA9IF9vcHRpb25zLndhcm5BZnRlcixcbiAgICAgIHdhcm5BZnRlciA9IF9vcHRpb25zJHdhcm5BZnRlciA9PT0gdm9pZCAwID8gMzIgOiBfb3B0aW9ucyR3YXJuQWZ0ZXIsXG4gICAgICBpZ25vcmUgPSBfb3B0aW9ucy5pZ25vcmU7IC8vIEFsaWFzIGlnbm9yZS0+aWdub3JlZFBhdGhzLCBidXQgcHJlZmVyIGlnbm9yZWRQYXRocyBpZiBwcmVzZW50XG5cbiAgaWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzIHx8IGlnbm9yZTtcbiAgdmFyIHRyYWNrID0gdHJhY2tGb3JNdXRhdGlvbnMuYmluZChudWxsLCBpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIHZhciB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsICdJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnKTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdHJhY2tlci5kZXRlY3RNdXRhdGlvbnMoKTsgLy8gVHJhY2sgYmVmb3JlIHBvdGVudGlhbGx5IG5vdCBtZWV0aW5nIHRoZSBpbnZhcmlhbnRcblxuICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XG4gICAgICAgICAgISFyZXN1bHQud2FzTXV0YXRlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBiZXR3ZWVuIGRpc3BhdGNoZXMsIGluIHRoZSBwYXRoICdcIiArIChyZXN1bHQucGF0aCB8fCBbXSkuam9pbignLicpICsgXCInLiAgVGhpcyBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yLiAoaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHJvdWJsZXNob290aW5nI25ldmVyLW11dGF0ZS1yZWR1Y2VyLWFyZ3VtZW50cylcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7IC8vIFRyYWNrIGJlZm9yZSBwb3RlbnRpYWxseSBub3QgbWVldGluZyB0aGUgaW52YXJpYW50XG5cbiAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmICghIXJlc3VsdC53YXNNdXRhdGVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGluc2lkZSBhIGRpc3BhdGNoLCBpbiB0aGUgcGF0aDogXCIgKyAocmVzdWx0LnBhdGggfHwgW10pLmpvaW4oJy4nKSArIFwiLiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uIFwiICsgc3RyaW5naWZ5KGFjdGlvbikgKyBcIi4gKGh0dHBzOi8vcmVkdXguanMub3JnL3Ryb3VibGVzaG9vdGluZyNuZXZlci1tdXRhdGUtcmVkdWNlci1hcmd1bWVudHMpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb247XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBcInBsYWluXCIsIGkuZS4gYSB2YWx1ZSB0aGF0IGlzIGVpdGhlclxyXG4gKiBkaXJlY3RseSBKU09OLXNlcmlhbGl6YWJsZSAoYm9vbGVhbiwgbnVtYmVyLCBzdHJpbmcsIGFycmF5LCBwbGFpbiBvYmplY3QpXHJcbiAqIG9yIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cblxuZnVuY3Rpb24gaXNQbGFpbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgQXJyYXkuaXNBcnJheSh2YWwpIHx8IGlzUGxhaW5PYmplY3QodmFsKTtcbn1cbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5mdW5jdGlvbiBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUodmFsdWUsIHBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpIHtcbiAgaWYgKHBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhdGggPSBbXTtcbiAgfVxuXG4gIGlmIChpc1NlcmlhbGl6YWJsZSA9PT0gdm9pZCAwKSB7XG4gICAgaXNTZXJpYWxpemFibGUgPSBpc1BsYWluO1xuICB9XG5cbiAgaWYgKGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwKSB7XG4gICAgaWdub3JlZFBhdGhzID0gW107XG4gIH1cblxuICB2YXIgZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XG5cbiAgaWYgKCFpc1NlcmlhbGl6YWJsZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5UGF0aDogcGF0aC5qb2luKCcuJykgfHwgJzxyb290PicsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xuICB2YXIgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDA7XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gZW50cmllcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBfcmVmMiA9IF9yZWYsXG4gICAgICAgIHByb3BlcnR5ID0gX3JlZjJbMF0sXG4gICAgICAgIG5lc3RlZFZhbHVlID0gX3JlZjJbMV07XG4gICAgdmFyIG5lc3RlZFBhdGggPSBwYXRoLmNvbmNhdChwcm9wZXJ0eSk7XG5cbiAgICBpZiAoaGFzSWdub3JlZFBhdGhzICYmIGlnbm9yZWRQYXRocy5pbmRleE9mKG5lc3RlZFBhdGguam9pbignLicpKSA+PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aC5qb2luKCcuJyksXG4gICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgZm91bmROZXN0ZWRTZXJpYWxpemFibGUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUobmVzdGVkVmFsdWUsIG5lc3RlZFBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpO1xuXG4gICAgICBpZiAoZm91bmROZXN0ZWRTZXJpYWxpemFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWlkZGxld2FyZSB0aGF0LCBhZnRlciBldmVyeSBzdGF0ZSBjaGFuZ2UsIGNoZWNrcyBpZiB0aGUgbmV3XHJcbiAqIHN0YXRlIGlzIHNlcmlhbGl6YWJsZS4gSWYgYSBub24tc2VyaWFsaXphYmxlIHZhbHVlIGlzIGZvdW5kIHdpdGhpbiB0aGVcclxuICogc3RhdGUsIGFuIGVycm9yIGlzIHByaW50ZWQgdG8gdGhlIGNvbnNvbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIE1pZGRsZXdhcmUgb3B0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkaXNTZXJpYWxpemFiID0gX29wdGlvbnMuaXNTZXJpYWxpemFibGUsXG4gICAgICBpc1NlcmlhbGl6YWJsZSA9IF9vcHRpb25zJGlzU2VyaWFsaXphYiA9PT0gdm9pZCAwID8gaXNQbGFpbiA6IF9vcHRpb25zJGlzU2VyaWFsaXphYixcbiAgICAgIGdldEVudHJpZXMgPSBfb3B0aW9ucy5nZXRFbnRyaWVzLFxuICAgICAgX29wdGlvbnMkaWdub3JlZEFjdGlvID0gX29wdGlvbnMuaWdub3JlZEFjdGlvbnMsXG4gICAgICBpZ25vcmVkQWN0aW9ucyA9IF9vcHRpb25zJGlnbm9yZWRBY3RpbyA9PT0gdm9pZCAwID8gW10gOiBfb3B0aW9ucyRpZ25vcmVkQWN0aW8sXG4gICAgICBfb3B0aW9ucyRpZ25vcmVkQWN0aW8yID0gX29wdGlvbnMuaWdub3JlZEFjdGlvblBhdGhzLFxuICAgICAgaWdub3JlZEFjdGlvblBhdGhzID0gX29wdGlvbnMkaWdub3JlZEFjdGlvMiA9PT0gdm9pZCAwID8gWydtZXRhLmFyZyddIDogX29wdGlvbnMkaWdub3JlZEFjdGlvMixcbiAgICAgIF9vcHRpb25zJGlnbm9yZWRQYXRocyA9IF9vcHRpb25zLmlnbm9yZWRQYXRocyxcbiAgICAgIGlnbm9yZWRQYXRocyA9IF9vcHRpb25zJGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwID8gW10gOiBfb3B0aW9ucyRpZ25vcmVkUGF0aHMsXG4gICAgICBfb3B0aW9ucyR3YXJuQWZ0ZXIgPSBfb3B0aW9ucy53YXJuQWZ0ZXIsXG4gICAgICB3YXJuQWZ0ZXIgPSBfb3B0aW9ucyR3YXJuQWZ0ZXIgPT09IHZvaWQgMCA/IDMyIDogX29wdGlvbnMkd2FybkFmdGVyO1xuICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlQVBJKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAoaWdub3JlZEFjdGlvbnMubGVuZ3RoICYmIGlnbm9yZWRBY3Rpb25zLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsICdTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnKTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShhY3Rpb24sIFtdLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZEFjdGlvblBhdGhzKTtcblxuICAgICAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XG4gICAgICAgICAgICB2YXIga2V5UGF0aCA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUua2V5UGF0aCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiBhbiBhY3Rpb24sIGluIHRoZSBwYXRoOiBgXCIgKyBrZXlQYXRoICsgXCJgLiBWYWx1ZTpcIiwgdmFsdWUsICdcXG5UYWtlIGEgbG9vayBhdCB0aGUgbG9naWMgdGhhdCBkaXNwYXRjaGVkIHRoaXMgYWN0aW9uOiAnLCBhY3Rpb24sICdcXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9hY3Rpb25zI3doeS1zaG91bGQtdHlwZS1iZS1hLXN0cmluZy1vci1hdC1sZWFzdC1zZXJpYWxpemFibGUtd2h5LXNob3VsZC1teS1hY3Rpb24tdHlwZXMtYmUtY29uc3RhbnRzKScsICdcXG4oVG8gYWxsb3cgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZXMgc2VlOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGEpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZUFQSS5nZXRTdGF0ZSgpO1xuICAgICAgICAgIHZhciBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoc3RhdGUsIFtdLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzKTtcblxuICAgICAgICAgIGlmIChmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiB0aGUgc3RhdGUsIGluIHRoZSBwYXRoOiBgXCIgKyBrZXlQYXRoICsgXCJgLiBWYWx1ZTpcIiwgdmFsdWUsIFwiXFxuVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhpcyBhY3Rpb24gdHlwZTogXCIgKyBhY3Rpb24udHlwZSArIFwiLlxcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL29yZ2FuaXppbmctc3RhdGUjY2FuLWktcHV0LWZ1bmN0aW9ucy1wcm9taXNlcy1vci1vdGhlci1ub24tc2VyaWFsaXphYmxlLWl0ZW1zLWluLW15LXN0b3JlLXN0YXRlKVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucykge1xuICAgIHJldHVybiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGFueSBhcnJheSBjb250YWluaW5nIHRoZSBkZWZhdWx0IG1pZGRsZXdhcmUgaW5zdGFsbGVkIGJ5XHJcbiAqIGBjb25maWd1cmVTdG9yZSgpYC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIGNvbmZpZ3VyZSB5b3VyIHN0b3JlIHdpdGggYSBjdXN0b21cclxuICogYG1pZGRsZXdhcmVgIGFycmF5IGJ1dCBzdGlsbCBrZWVwIHRoZSBkZWZhdWx0IHNldC5cclxuICpcclxuICogQHJldHVybiBUaGUgZGVmYXVsdCBtaWRkbGV3YXJlIHVzZWQgYnkgYGNvbmZpZ3VyZVN0b3JlKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkdGh1bmsgPSBfb3B0aW9ucy50aHVuayxcbiAgICAgIHRodW5rID0gX29wdGlvbnMkdGh1bmsgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0aHVuayxcbiAgICAgIF9vcHRpb25zJGltbXV0YWJsZUNoZSA9IF9vcHRpb25zLmltbXV0YWJsZUNoZWNrLFxuICAgICAgaW1tdXRhYmxlQ2hlY2sgPSBfb3B0aW9ucyRpbW11dGFibGVDaGUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRpbW11dGFibGVDaGUsXG4gICAgICBfb3B0aW9ucyRzZXJpYWxpemFibGUgPSBfb3B0aW9ucy5zZXJpYWxpemFibGVDaGVjayxcbiAgICAgIHNlcmlhbGl6YWJsZUNoZWNrID0gX29wdGlvbnMkc2VyaWFsaXphYmxlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2VyaWFsaXphYmxlO1xuICB2YXIgbWlkZGxld2FyZUFycmF5ID0gbmV3IE1pZGRsZXdhcmVBcnJheSgpO1xuXG4gIGlmICh0aHVuaykge1xuICAgIGlmIChpc0Jvb2xlYW4odGh1bmspKSB7XG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUud2l0aEV4dHJhQXJndW1lbnQodGh1bmsuZXh0cmFBcmd1bWVudCkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGltbXV0YWJsZUNoZWNrKSB7XG4gICAgICAvKiBQUk9EX1NUQVJUX1JFTU9WRV9VTUQgKi9cbiAgICAgIHZhciBpbW11dGFibGVPcHRpb25zID0ge307XG5cbiAgICAgIGlmICghaXNCb29sZWFuKGltbXV0YWJsZUNoZWNrKSkge1xuICAgICAgICBpbW11dGFibGVPcHRpb25zID0gaW1tdXRhYmxlQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShpbW11dGFibGVPcHRpb25zKSk7XG4gICAgICAvKiBQUk9EX1NUT1BfUkVNT1ZFX1VNRCAqL1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemFibGVDaGVjaykge1xuICAgICAgdmFyIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSB7fTtcblxuICAgICAgaWYgKCFpc0Jvb2xlYW4oc2VyaWFsaXphYmxlQ2hlY2spKSB7XG4gICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVjaztcbiAgICAgIH1cblxuICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWlkZGxld2FyZUFycmF5O1xufVxuXG52YXIgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4vKipcclxuICogQSBmcmllbmRseSBhYnN0cmFjdGlvbiBvdmVyIHRoZSBzdGFuZGFyZCBSZWR1eCBgY3JlYXRlU3RvcmUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWcgVGhlIHN0b3JlIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgY29uZmlndXJlZCBSZWR1eCBzdG9yZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cblxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUob3B0aW9ucykge1xuICB2YXIgY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlID0gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSgpO1xuXG4gIHZhciBfcmVmID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgIF9yZWYkcmVkdWNlciA9IF9yZWYucmVkdWNlcixcbiAgICAgIHJlZHVjZXIgPSBfcmVmJHJlZHVjZXIgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkcmVkdWNlcixcbiAgICAgIF9yZWYkbWlkZGxld2FyZSA9IF9yZWYubWlkZGxld2FyZSxcbiAgICAgIG1pZGRsZXdhcmUgPSBfcmVmJG1pZGRsZXdhcmUgPT09IHZvaWQgMCA/IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpIDogX3JlZiRtaWRkbGV3YXJlLFxuICAgICAgX3JlZiRkZXZUb29scyA9IF9yZWYuZGV2VG9vbHMsXG4gICAgICBkZXZUb29scyA9IF9yZWYkZGV2VG9vbHMgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGRldlRvb2xzLFxuICAgICAgX3JlZiRwcmVsb2FkZWRTdGF0ZSA9IF9yZWYucHJlbG9hZGVkU3RhdGUsXG4gICAgICBwcmVsb2FkZWRTdGF0ZSA9IF9yZWYkcHJlbG9hZGVkU3RhdGUgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkcHJlbG9hZGVkU3RhdGUsXG4gICAgICBfcmVmJGVuaGFuY2VycyA9IF9yZWYuZW5oYW5jZXJzLFxuICAgICAgZW5oYW5jZXJzID0gX3JlZiRlbmhhbmNlcnMgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkZW5oYW5jZXJzO1xuXG4gIHZhciByb290UmVkdWNlcjtcblxuICBpZiAodHlwZW9mIHJlZHVjZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb290UmVkdWNlciA9IHJlZHVjZXI7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChyZWR1Y2VyKSkge1xuICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJyZWR1Y2VyXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudCwgYW5kIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnMnKTtcbiAgfVxuXG4gIHZhciBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUuYXBwbHkodm9pZCAwLCB0eXBlb2YgbWlkZGxld2FyZSA9PT0gJ2Z1bmN0aW9uJyA/IG1pZGRsZXdhcmUoY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKSA6IG1pZGRsZXdhcmUpO1xuICB2YXIgZmluYWxDb21wb3NlID0gY29tcG9zZTtcblxuICBpZiAoZGV2VG9vbHMpIHtcbiAgICBmaW5hbENvbXBvc2UgPSBjb21wb3NlV2l0aERldlRvb2xzKF9leHRlbmRzKHtcbiAgICAgIC8vIEVuYWJsZSBjYXB0dXJlIG9mIHN0YWNrIHRyYWNlcyBmb3IgZGlzcGF0Y2hlZCBSZWR1eCBhY3Rpb25zXG4gICAgICB0cmFjZTogIUlTX1BST0RVQ1RJT05cbiAgICB9LCB0eXBlb2YgZGV2VG9vbHMgPT09ICdvYmplY3QnICYmIGRldlRvb2xzKSk7XG4gIH1cblxuICB2YXIgc3RvcmVFbmhhbmNlcnMgPSBbbWlkZGxld2FyZUVuaGFuY2VyXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XG4gICAgc3RvcmVFbmhhbmNlcnMgPSBbbWlkZGxld2FyZUVuaGFuY2VyXS5jb25jYXQoZW5oYW5jZXJzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZW5oYW5jZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3RvcmVFbmhhbmNlcnMgPSBlbmhhbmNlcnMoc3RvcmVFbmhhbmNlcnMpO1xuICB9XG5cbiAgdmFyIGNvbXBvc2VkRW5oYW5jZXIgPSBmaW5hbENvbXBvc2UuYXBwbHkodm9pZCAwLCBzdG9yZUVuaGFuY2Vycyk7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUFjdGlvbikge1xuICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKCkge1xuICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XG4gICAgICB2YXIgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKCFwcmVwYXJlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHByZXBhcmVkLnBheWxvYWRcbiAgICAgIH0sICdtZXRhJyBpbiBwcmVwYXJlZCAmJiB7XG4gICAgICAgIG1ldGE6IHByZXBhcmVkLm1ldGFcbiAgICAgIH0sIHt9LCAnZXJyb3InIGluIHByZXBhcmVkICYmIHtcbiAgICAgICAgZXJyb3I6IHByZXBhcmVkLmVycm9yXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHBheWxvYWQ6IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXVxuICAgIH07XG4gIH1cblxuICBhY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIlwiICsgdHlwZTtcbiAgfTtcblxuICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xuXG4gIGFjdGlvbkNyZWF0b3IubWF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi50eXBlID09PSB0eXBlO1xuICB9O1xuXG4gIHJldHVybiBhY3Rpb25DcmVhdG9yO1xufVxuZnVuY3Rpb24gaXNGU0EoYWN0aW9uKSB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGFjdGlvbikgJiYgdHlwZW9mIGFjdGlvbi50eXBlID09PSAnc3RyaW5nJyAmJiBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICByZXR1cm4gWyd0eXBlJywgJ3BheWxvYWQnLCAnZXJyb3InLCAnbWV0YSddLmluZGV4T2Yoa2V5KSA+IC0xO1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGFjdGlvbiB0eXBlIG9mIHRoZSBhY3Rpb25zIGNyZWF0ZWQgYnkgdGhlIHBhc3NlZFxyXG4gKiBgY3JlYXRlQWN0aW9uKClgLWdlbmVyYXRlZCBhY3Rpb24gY3JlYXRvciAoYXJiaXRyYXJ5IGFjdGlvbiBjcmVhdG9yc1xyXG4gKiBhcmUgbm90IHN1cHBvcnRlZCkuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3Rpb24gVGhlIGFjdGlvbiBjcmVhdG9yIHdob3NlIGFjdGlvbiB0eXBlIHRvIGdldC5cclxuICogQHJldHVybnMgVGhlIGFjdGlvbiB0eXBlIHVzZWQgYnkgdGhlIGFjdGlvbiBjcmVhdG9yLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFR5cGUoYWN0aW9uQ3JlYXRvcikge1xuICByZXR1cm4gXCJcIiArIGFjdGlvbkNyZWF0b3I7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXJDYWxsYmFjaykge1xuICB2YXIgYWN0aW9uc01hcCA9IHt9O1xuICB2YXIgYWN0aW9uTWF0Y2hlcnMgPSBbXTtcbiAgdmFyIGRlZmF1bHRDYXNlUmVkdWNlcjtcbiAgdmFyIGJ1aWxkZXIgPSB7XG4gICAgYWRkQ2FzZTogZnVuY3Rpb24gYWRkQ2FzZSh0eXBlT3JBY3Rpb25DcmVhdG9yLCByZWR1Y2VyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvKlxyXG4gICAgICAgICB0byBrZWVwIHRoZSBkZWZpbml0aW9uIGJ5IHRoZSB1c2VyIGluIGxpbmUgd2l0aCBhY3R1YWwgYmVoYXZpb3IsXHJcbiAgICAgICAgIHdlIGVuZm9yY2UgYGFkZENhc2VgIHRvIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGFkZE1hdGNoZXJgXHJcbiAgICAgICAgIGFzIG1hdGNoaW5nIGNhc2VzIHRha2UgcHJlY2VkZW5jZSBvdmVyIG1hdGNoZXJzXHJcbiAgICAgICAgICovXG4gICAgICAgIGlmIChhY3Rpb25NYXRjaGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSAnc3RyaW5nJyA/IHR5cGVPckFjdGlvbkNyZWF0b3IgOiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGU7XG5cbiAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZGRDYXNlIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCB0d28gcmVkdWNlcnMgZm9yIHRoZSBzYW1lIGFjdGlvbiB0eXBlJyk7XG4gICAgICB9XG5cbiAgICAgIGFjdGlvbnNNYXBbdHlwZV0gPSByZWR1Y2VyO1xuICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfSxcbiAgICBhZGRNYXRjaGVyOiBmdW5jdGlvbiBhZGRNYXRjaGVyKG1hdGNoZXIsIHJlZHVjZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BidWlsZGVyLmFkZE1hdGNoZXJgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhY3Rpb25NYXRjaGVycy5wdXNoKHtcbiAgICAgICAgbWF0Y2hlcjogbWF0Y2hlcixcbiAgICAgICAgcmVkdWNlcjogcmVkdWNlclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYnVpbGRlcjtcbiAgICB9LFxuICAgIGFkZERlZmF1bHRDYXNlOiBmdW5jdGlvbiBhZGREZWZhdWx0Q2FzZShyZWR1Y2VyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyO1xuICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgfVxuICB9O1xuICBidWlsZGVyQ2FsbGJhY2soYnVpbGRlcik7XG4gIHJldHVybiBbYWN0aW9uc01hcCwgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBtYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcikge1xuICBpZiAoYWN0aW9uTWF0Y2hlcnMgPT09IHZvaWQgMCkge1xuICAgIGFjdGlvbk1hdGNoZXJzID0gW107XG4gIH1cblxuICB2YXIgX3JlZiA9IHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKSA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl0sXG4gICAgICBhY3Rpb25zTWFwID0gX3JlZlswXSxcbiAgICAgIGZpbmFsQWN0aW9uTWF0Y2hlcnMgPSBfcmVmWzFdLFxuICAgICAgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXIgPSBfcmVmWzJdO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgY2FzZVJlZHVjZXJzID0gW2FjdGlvbnNNYXBbYWN0aW9uLnR5cGVdXS5jb25jYXQoZmluYWxBY3Rpb25NYXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgbWF0Y2hlciA9IF9yZWYyLm1hdGNoZXI7XG4gICAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciByZWR1Y2VyID0gX3JlZjMucmVkdWNlcjtcbiAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgIH0pKTtcblxuICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGZ1bmN0aW9uIChjcikge1xuICAgICAgcmV0dXJuICEhY3I7XG4gICAgfSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYXNlUmVkdWNlcnMgPSBbZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdO1xuICAgIH1cblxuICAgIHJldHVybiBjYXNlUmVkdWNlcnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlLCBjYXNlUmVkdWNlcikge1xuICAgICAgaWYgKGNhc2VSZWR1Y2VyKSB7XG4gICAgICAgIGlmIChpc0RyYWZ0KHByZXZpb3VzU3RhdGUpKSB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IGEgZHJhZnQsIHdlIG11c3QgYWxyZWFkeSBiZSBpbnNpZGUgYSBgY3JlYXRlTmV4dFN0YXRlYCBjYWxsLFxuICAgICAgICAgIC8vIGxpa2VseSBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgd3JhcHBlZCBpbiBgY3JlYXRlUmVkdWNlcmAsIGBjcmVhdGVTbGljZWAsIG9yIG5lc3RlZFxuICAgICAgICAgIC8vIGluc2lkZSBhbiBleGlzdGluZyBkcmFmdC4gSXQncyBzYWZlIHRvIGp1c3QgcGFzcyB0aGUgZHJhZnQgdG8gdGhlIG11dGF0b3IuXG4gICAgICAgICAgdmFyIGRyYWZ0ID0gcHJldmlvdXNTdGF0ZTsgLy8gV2UgY2FuIGFzc3VtZSB0aGlzIGlzIGFscmVhZHkgYSBkcmFmdFxuXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0RyYWZ0YWJsZShwcmV2aW91c1N0YXRlKSkge1xuICAgICAgICAgIC8vIElmIHN0YXRlIGlzIG5vdCBkcmFmdGFibGUgKGV4OiBhIHByaW1pdGl2ZSwgc3VjaCBhcyAwKSwgd2Ugd2FudCB0byBkaXJlY3RseVxuICAgICAgICAgIC8vIHJldHVybiB0aGUgY2FzZVJlZHVjZXIgZnVuYyBhbmQgbm90IHdyYXAgaXQgd2l0aCBwcm9kdWNlLlxuICAgICAgICAgIHZhciBfcmVzdWx0ID0gY2FzZVJlZHVjZXIocHJldmlvdXNTdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgX3Jlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIGNyZWF0ZU5leHRTdGF0ZSgpIHByb2R1Y2VzIGFuIEltbXV0YWJsZTxEcmFmdDxTPj4gcmF0aGVyXG4gICAgICAgICAgLy8gdGhhbiBhbiBJbW11dGFibGU8Uz4sIGFuZCBUeXBlU2NyaXB0IGNhbm5vdCBmaW5kIG91dCBob3cgdG8gcmVjb25jaWxlXG4gICAgICAgICAgLy8gdGhlc2UgdHdvIHR5cGVzLlxuICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUocHJldmlvdXNTdGF0ZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XG4gICAgfSwgc3RhdGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUeXBlJDEoc2xpY2UsIGFjdGlvbktleSkge1xuICByZXR1cm4gc2xpY2UgKyBcIi9cIiArIGFjdGlvbktleTtcbn1cbi8qKlxyXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhbiBpbml0aWFsIHN0YXRlLCBhbiBvYmplY3QgZnVsbCBvZiByZWR1Y2VyXHJcbiAqIGZ1bmN0aW9ucywgYW5kIGEgXCJzbGljZSBuYW1lXCIsIGFuZCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlc1xyXG4gKiBhY3Rpb24gY3JlYXRvcnMgYW5kIGFjdGlvbiB0eXBlcyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlXHJcbiAqIHJlZHVjZXJzIGFuZCBzdGF0ZS5cclxuICpcclxuICogVGhlIGByZWR1Y2VyYCBhcmd1bWVudCBpcyBwYXNzZWQgdG8gYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU2xpY2Uob3B0aW9ucykge1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgIGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYG5hbWVgIGlzIGEgcmVxdWlyZWQgb3B0aW9uIGZvciBjcmVhdGVTbGljZScpO1xuICB9XG5cbiAgdmFyIHJlZHVjZXJzID0gb3B0aW9ucy5yZWR1Y2VycyB8fCB7fTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09ICd1bmRlZmluZWQnID8gW10gOiB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSAnZnVuY3Rpb24nID8gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2sob3B0aW9ucy5leHRyYVJlZHVjZXJzKSA6IFtvcHRpb25zLmV4dHJhUmVkdWNlcnNdLFxuICAgICAgX3JlZiQgPSBfcmVmWzBdLFxuICAgICAgZXh0cmFSZWR1Y2VycyA9IF9yZWYkID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkLFxuICAgICAgX3JlZiQyID0gX3JlZlsxXSxcbiAgICAgIGFjdGlvbk1hdGNoZXJzID0gX3JlZiQyID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkMixcbiAgICAgIF9yZWYkMyA9IF9yZWZbMl0sXG4gICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSBfcmVmJDMgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkMztcblxuICB2YXIgcmVkdWNlck5hbWVzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUgPSB7fTtcbiAgdmFyIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlID0ge307XG4gIHZhciBhY3Rpb25DcmVhdG9ycyA9IHt9O1xuICByZWR1Y2VyTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocmVkdWNlck5hbWUpIHtcbiAgICB2YXIgbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUgPSByZWR1Y2Vyc1tyZWR1Y2VyTmFtZV07XG4gICAgdmFyIHR5cGUgPSBnZXRUeXBlJDEobmFtZSwgcmVkdWNlck5hbWUpO1xuICAgIHZhciBjYXNlUmVkdWNlcjtcbiAgICB2YXIgcHJlcGFyZUNhbGxiYWNrO1xuXG4gICAgaWYgKCdyZWR1Y2VyJyBpbiBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkge1xuICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5yZWR1Y2VyO1xuICAgICAgcHJlcGFyZUNhbGxiYWNrID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucHJlcGFyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZTtcbiAgICB9XG5cbiAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZVtyZWR1Y2VyTmFtZV0gPSBjYXNlUmVkdWNlcjtcbiAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZVt0eXBlXSA9IGNhc2VSZWR1Y2VyO1xuICAgIGFjdGlvbkNyZWF0b3JzW3JlZHVjZXJOYW1lXSA9IHByZXBhcmVDYWxsYmFjayA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spIDogY3JlYXRlQWN0aW9uKHR5cGUpO1xuICB9KTtcblxuICB2YXIgZmluYWxDYXNlUmVkdWNlcnMgPSBfZXh0ZW5kcyh7fSwgZXh0cmFSZWR1Y2Vycywge30sIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlKTtcblxuICB2YXIgcmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBmaW5hbENhc2VSZWR1Y2VycywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcik7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICByZWR1Y2VyOiByZWR1Y2VyLFxuICAgIGFjdGlvbnM6IGFjdGlvbkNyZWF0b3JzLFxuICAgIGNhc2VSZWR1Y2Vyczogc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGlkczogW10sXG4gICAgZW50aXRpZXM6IHt9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KCkge1xuICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoYWRkaXRpb25hbFN0YXRlKSB7XG4gICAgaWYgKGFkZGl0aW9uYWxTdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBhZGRpdGlvbmFsU3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihnZXRJbml0aWFsRW50aXR5U3RhdGUoKSwgYWRkaXRpb25hbFN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBnZXRJbml0aWFsU3RhdGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHNlbGVjdFN0YXRlKSB7XG4gICAgdmFyIHNlbGVjdElkcyA9IGZ1bmN0aW9uIHNlbGVjdElkcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlkcztcbiAgICB9O1xuXG4gICAgdmFyIHNlbGVjdEVudGl0aWVzID0gZnVuY3Rpb24gc2VsZWN0RW50aXRpZXMoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5lbnRpdGllcztcbiAgICB9O1xuXG4gICAgdmFyIHNlbGVjdEFsbCA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIGZ1bmN0aW9uIChpZHMsIGVudGl0aWVzKSB7XG4gICAgICByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzW2lkXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIHNlbGVjdElkID0gZnVuY3Rpb24gc2VsZWN0SWQoXywgaWQpIHtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgdmFyIHNlbGVjdEJ5SWQgPSBmdW5jdGlvbiBzZWxlY3RCeUlkKGVudGl0aWVzLCBpZCkge1xuICAgICAgcmV0dXJuIGVudGl0aWVzW2lkXTtcbiAgICB9O1xuXG4gICAgdmFyIHNlbGVjdFRvdGFsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBmdW5jdGlvbiAoaWRzKSB7XG4gICAgICByZXR1cm4gaWRzLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGlmICghc2VsZWN0U3RhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdElkczogc2VsZWN0SWRzLFxuICAgICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXG4gICAgICAgIHNlbGVjdEFsbDogc2VsZWN0QWxsLFxuICAgICAgICBzZWxlY3RUb3RhbDogc2VsZWN0VG90YWwsXG4gICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdElkczogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdElkcyksXG4gICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLFxuICAgICAgc2VsZWN0QWxsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0QWxsKSxcbiAgICAgIHNlbGVjdFRvdGFsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0VG90YWwpLFxuICAgICAgc2VsZWN0QnlJZDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTZWxlY3RvcnM6IGdldFNlbGVjdG9yc1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xuICB2YXIgb3BlcmF0b3IgPSBjcmVhdGVTdGF0ZU9wZXJhdG9yKGZ1bmN0aW9uIChfLCBzdGF0ZSkge1xuICAgIHJldHVybiBtdXRhdG9yKHN0YXRlKTtcbiAgfSk7XG4gIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gb3BlcmF0b3Ioc3RhdGUsIHVuZGVmaW5lZCk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSwgYXJnKSB7XG4gICAgZnVuY3Rpb24gaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnKSB7XG4gICAgICByZXR1cm4gaXNGU0EoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcnVuTXV0YXRvciA9IGZ1bmN0aW9uIHJ1bk11dGF0b3IoZHJhZnQpIHtcbiAgICAgIGlmIChpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcpKSB7XG4gICAgICAgIG11dGF0b3IoYXJnLnBheWxvYWQsIGRyYWZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11dGF0b3IoYXJnLCBkcmFmdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChpc0RyYWZ0KHN0YXRlKSkge1xuICAgICAgLy8gd2UgbXVzdCBhbHJlYWR5IGJlIGluc2lkZSBhIGBjcmVhdGVOZXh0U3RhdGVgIGNhbGwsIGxpa2VseSBiZWNhdXNlXG4gICAgICAvLyB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgIG9yIGBjcmVhdGVTbGljZWAuXG4gICAgICAvLyBJdCdzIHNhZmUgdG8ganVzdCBwYXNzIHRoZSBkcmFmdCB0byB0aGUgbXV0YXRvci5cbiAgICAgIHJ1bk11dGF0b3Ioc3RhdGUpOyAvLyBzaW5jZSBpdCdzIGEgZHJhZnQsIHdlJ2xsIGp1c3QgcmV0dXJuIGl0XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQHRzLWlnbm9yZSBjcmVhdGVOZXh0U3RhdGUoKSBwcm9kdWNlcyBhbiBJbW11dGFibGU8RHJhZnQ8Uz4+IHJhdGhlclxuICAgICAgLy8gdGhhbiBhbiBJbW11dGFibGU8Uz4sIGFuZCBUeXBlU2NyaXB0IGNhbm5vdCBmaW5kIG91dCBob3cgdG8gcmVjb25jaWxlXG4gICAgICAvLyB0aGVzZSB0d28gdHlwZXMuXG4gICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlKHN0YXRlLCBydW5NdXRhdG9yKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCkge1xuICB2YXIga2V5ID0gc2VsZWN0SWQoZW50aXR5KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybignVGhlIGVudGl0eSBwYXNzZWQgdG8gdGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgdW5kZWZpbmVkLicsICdZb3Ugc2hvdWxkIHByb2JhYmx5IHByb3ZpZGUgeW91ciBvd24gYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbi4nLCAnVGhlIGVudGl0eSB0aGF0IHdhcyBwYXNzZWQ6JywgZW50aXR5LCAnVGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb246Jywgc2VsZWN0SWQudG9TdHJpbmcoKSk7XG4gIH1cblxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCkge1xuICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICB2YXIga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcblxuICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xuICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRNYW55TXV0YWJseShlbnRpdGllcywgc3RhdGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGVudGl0aWVzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW50aXR5ID0gX3JlZjtcbiAgICAgIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShlbnRpdGllcywgc3RhdGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpO1xuICAgIH1cblxuICAgIHN0YXRlLmlkcyA9IFtdO1xuICAgIHN0YXRlLmVudGl0aWVzID0ge307XG4gICAgYWRkTWFueU11dGFibHkoZW50aXRpZXMsIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU9uZU11dGFibHkoa2V5LCBzdGF0ZSkge1xuICAgIHJldHVybiByZW1vdmVNYW55TXV0YWJseShba2V5XSwgc3RhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTWFueU11dGFibHkoa2V5cywgc3RhdGUpIHtcbiAgICB2YXIgZGlkTXV0YXRlID0gZmFsc2U7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcbiAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW2tleV07XG4gICAgICAgIGRpZE11dGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGlkTXV0YXRlKSB7XG4gICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gc3RhdGUuZW50aXRpZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbGxNdXRhYmx5KHN0YXRlKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgaWRzOiBbXSxcbiAgICAgIGVudGl0aWVzOiB7fVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFrZU5ld0tleShrZXlzLCB1cGRhdGUsIHN0YXRlKSB7XG4gICAgdmFyIG9yaWdpbmFsID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcbiAgICB2YXIgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsLCB1cGRhdGUuY2hhbmdlcyk7XG4gICAgdmFyIG5ld0tleSA9IHNlbGVjdElkVmFsdWUodXBkYXRlZCwgc2VsZWN0SWQpO1xuICAgIHZhciBoYXNOZXdLZXkgPSBuZXdLZXkgIT09IHVwZGF0ZS5pZDtcblxuICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleTtcbiAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xuICAgIH1cblxuICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkO1xuICAgIHJldHVybiBoYXNOZXdLZXk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XG4gICAgdmFyIG5ld0tleXMgPSB7fTtcbiAgICB2YXIgdXBkYXRlc1BlckVudGl0eSA9IHt9O1xuICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgICAvLyBPbmx5IGFwcGx5IHVwZGF0ZXMgdG8gZW50aXRpZXMgdGhhdCBjdXJyZW50bHkgZXhpc3RcbiAgICAgIGlmICh1cGRhdGUuaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIHVwZGF0ZXMgdG8gb25lIGVudGl0eSwgbWVyZ2UgdGhlbSB0b2dldGhlclxuICAgICAgICB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPSB7XG4gICAgICAgICAgaWQ6IHVwZGF0ZS5pZCxcbiAgICAgICAgICAvLyBTcHJlYWRzIGlnbm9yZSBmYWxzeSB2YWx1ZXMsIHNvIHRoaXMgd29ya3MgZXZlbiBpZiB0aGVyZSBpc24ndFxuICAgICAgICAgIC8vIGFuIGV4aXN0aW5nIHVwZGF0ZSBhbHJlYWR5IGF0IHRoaXMga2V5XG4gICAgICAgICAgY2hhbmdlczogX2V4dGVuZHMoe30sIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA/IHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXS5jaGFuZ2VzIDogbnVsbCwge30sIHVwZGF0ZS5jaGFuZ2VzKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVwZGF0ZXMgPSBPYmplY3QudmFsdWVzKHVwZGF0ZXNQZXJFbnRpdHkpO1xuICAgIHZhciBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMDtcblxuICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xuICAgICAgdmFyIGRpZE11dGF0ZUlkcyA9IHVwZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRha2VOZXdLZXkobmV3S2V5cywgdXBkYXRlLCBzdGF0ZSk7XG4gICAgICB9KS5sZW5ndGggPiAwO1xuXG4gICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XG4gICAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0tleXNbaWRdIHx8IGlkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KGVudGl0aWVzLCBzdGF0ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcyk7XG4gICAgfVxuXG4gICAgdmFyIGFkZGVkID0gW107XG4gICAgdmFyIHVwZGF0ZWQgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBlbnRpdGllcywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRpdHkgPSBfcmVmMjtcbiAgICAgIHZhciBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XG5cbiAgICAgIGlmIChpZCBpbiBzdGF0ZS5lbnRpdGllcykge1xuICAgICAgICB1cGRhdGVkLnB1c2goe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBjaGFuZ2VzOiBlbnRpdHlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRlZC5wdXNoKGVudGl0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpO1xuICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZUFsbDogY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKHJlbW92ZUFsbE11dGFibHkpLFxuICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcbiAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcbiAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxuICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcbiAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KSxcbiAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXG4gICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0KSB7XG4gIHZhciBfY3JlYXRlVW5zb3J0ZWRTdGF0ZUEgPSBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCksXG4gICAgICByZW1vdmVPbmUgPSBfY3JlYXRlVW5zb3J0ZWRTdGF0ZUEucmVtb3ZlT25lLFxuICAgICAgcmVtb3ZlTWFueSA9IF9jcmVhdGVVbnNvcnRlZFN0YXRlQS5yZW1vdmVNYW55LFxuICAgICAgcmVtb3ZlQWxsID0gX2NyZWF0ZVVuc29ydGVkU3RhdGVBLnJlbW92ZUFsbDtcblxuICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld01vZGVscywgc3RhdGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobmV3TW9kZWxzKSkge1xuICAgICAgbmV3TW9kZWxzID0gT2JqZWN0LnZhbHVlcyhuZXdNb2RlbHMpO1xuICAgIH1cblxuICAgIHZhciBtb2RlbHMgPSBuZXdNb2RlbHMuZmlsdGVyKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgcmV0dXJuICEoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpIGluIHN0YXRlLmVudGl0aWVzKTtcbiAgICB9KTtcblxuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG1vZGVscywgc3RhdGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kZWxzKSkge1xuICAgICAgbW9kZWxzID0gT2JqZWN0LnZhbHVlcyhtb2RlbHMpO1xuICAgIH1cblxuICAgIHN0YXRlLmVudGl0aWVzID0ge307XG4gICAgc3RhdGUuaWRzID0gW107XG4gICAgYWRkTWFueU11dGFibHkobW9kZWxzLCBzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2VVcGRhdGVkTW9kZWwobW9kZWxzLCB1cGRhdGUsIHN0YXRlKSB7XG4gICAgaWYgKCEodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbCA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XG4gICAgdmFyIHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwgdXBkYXRlLmNoYW5nZXMpO1xuICAgIHZhciBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKTtcbiAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcbiAgICBtb2RlbHMucHVzaCh1cGRhdGVkKTtcbiAgICByZXR1cm4gbmV3S2V5ICE9PSB1cGRhdGUuaWQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xuICAgIHZhciBtb2RlbHMgPSBbXTtcbiAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgICAgcmV0dXJuIHRha2VVcGRhdGVkTW9kZWwobW9kZWxzLCB1cGRhdGUsIHN0YXRlKTtcbiAgICB9KTtcblxuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KGVudGl0aWVzLCBzdGF0ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcyk7XG4gICAgfVxuXG4gICAgdmFyIGFkZGVkID0gW107XG4gICAgdmFyIHVwZGF0ZWQgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGVudGl0aWVzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZW50aXR5ID0gX3JlZjtcbiAgICAgIHZhciBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XG5cbiAgICAgIGlmIChpZCBpbiBzdGF0ZS5lbnRpdGllcykge1xuICAgICAgICB1cGRhdGVkLnB1c2goe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBjaGFuZ2VzOiBlbnRpdHlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRlZC5wdXNoKGVudGl0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpO1xuICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcmVBcnJheXNFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldID09PSBiW2ldKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZShtb2RlbHMsIHN0YXRlKSB7XG4gICAgbW9kZWxzLnNvcnQoc29ydCk7IC8vIEluc2VydC9vdmVyd3JpdGUgYWxsIG5ldy91cGRhdGVkXG5cbiAgICBtb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgIHN0YXRlLmVudGl0aWVzW3NlbGVjdElkKG1vZGVsKV0gPSBtb2RlbDtcbiAgICB9KTtcbiAgICB2YXIgYWxsRW50aXRpZXMgPSBPYmplY3QudmFsdWVzKHN0YXRlLmVudGl0aWVzKTtcbiAgICBhbGxFbnRpdGllcy5zb3J0KHNvcnQpO1xuICAgIHZhciBuZXdTb3J0ZWRJZHMgPSBhbGxFbnRpdGllcy5tYXAoc2VsZWN0SWQpO1xuICAgIHZhciBpZHMgPSBzdGF0ZS5pZHM7XG5cbiAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xuICAgICAgc3RhdGUuaWRzID0gbmV3U29ydGVkSWRzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlT25lOiByZW1vdmVPbmUsXG4gICAgcmVtb3ZlTWFueTogcmVtb3ZlTWFueSxcbiAgICByZW1vdmVBbGw6IHJlbW92ZUFsbCxcbiAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXG4gICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcbiAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXG4gICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXG4gICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXG4gICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSlcbiAgfTtcbn1cblxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXIob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9zb3J0Q29tcGFyZXIkc2VsZWN0SSA9IF9leHRlbmRzKHtcbiAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxuICAgIHNlbGVjdElkOiBmdW5jdGlvbiBzZWxlY3RJZChpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmlkO1xuICAgIH1cbiAgfSwgb3B0aW9ucyksXG4gICAgICBzZWxlY3RJZCA9IF9zb3J0Q29tcGFyZXIkc2VsZWN0SS5zZWxlY3RJZCxcbiAgICAgIHNvcnRDb21wYXJlciA9IF9zb3J0Q29tcGFyZXIkc2VsZWN0SS5zb3J0Q29tcGFyZXI7XG5cbiAgdmFyIHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKTtcbiAgdmFyIHNlbGVjdG9yc0ZhY3RvcnkgPSBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCk7XG4gIHZhciBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXIgPyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQsIHNvcnRDb21wYXJlcikgOiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgc2VsZWN0SWQ6IHNlbGVjdElkLFxuICAgIHNvcnRDb21wYXJlcjogc29ydENvbXBhcmVyXG4gIH0sIHN0YXRlRmFjdG9yeSwge30sIHNlbGVjdG9yc0ZhY3RvcnksIHt9LCBzdGF0ZUFkYXB0ZXIpO1xufVxuXG4vLyBBIHR5cGUgb2YgcHJvbWlzZS1saWtlIHRoYXQgcmVzb2x2ZXMgc3luY2hyb25vdXNseSBhbmQgc3VwcG9ydHMgb25seSBvbmUgb2JzZXJ2ZXJcblxuY29uc3QgX2l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qLyB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gKFN5bWJvbC5pdGVyYXRvciB8fCAoU3ltYm9sLml0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpKSkgOiBcIkBAaXRlcmF0b3JcIjtcblxuY29uc3QgX2FzeW5jSXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpKSA6IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc2VuZCBlcnJvcnMgdG8gcmVjb3ZlcnkgY29udGludWF0aW9uXG5mdW5jdGlvbiBfY2F0Y2goYm9keSwgcmVjb3Zlcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdHJldHVybiByZWNvdmVyKGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odm9pZCAwLCByZWNvdmVyKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBCb3Jyb3dlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9haS9uYW5vaWQvYmxvYi8zLjAuMi9ub24tc2VjdXJlL2luZGV4LmpzXG4vLyBUaGlzIGFscGhhYmV0IHVzZXMgYEEtWmEtejAtOV8tYCBzeW1ib2xzLiBBIGdlbmV0aWMgYWxnb3JpdGhtIGhlbHBlZFxuLy8gb3B0aW1pemUgdGhlIGd6aXAgY29tcHJlc3Npb24gZm9yIHRoaXMgYWxwaGFiZXQuXG52YXIgdXJsQWxwaGFiZXQgPSAnTW9kdWxlU3ltYmhhc093blByLTAxMjM0NTY3ODlBQkNERUZHSE5SVmZnY3RpVXZ6X0txWVRKa0x4cFpYSWpRVyc7XG4vKipcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cblxudmFyIG5hbm9pZCA9IGZ1bmN0aW9uIG5hbm9pZChzaXplKSB7XG4gIGlmIChzaXplID09PSB2b2lkIDApIHtcbiAgICBzaXplID0gMjE7XG4gIH1cblxuICB2YXIgaWQgPSAnJzsgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYC5cblxuICB2YXIgaSA9IHNpemU7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIC8vIGB8IDBgIGlzIG1vcmUgY29tcGFjdCBhbmQgZmFzdGVyIHRoYW4gYE1hdGguZmxvb3IoKWAuXG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59O1xuXG52YXIgY29tbW9uUHJvcGVydGllcyA9IFsnbmFtZScsICdtZXNzYWdlJywgJ3N0YWNrJywgJ2NvZGUnXTtcblxudmFyIFJlamVjdFdpdGhWYWx1ZSA9IGZ1bmN0aW9uIFJlamVjdFdpdGhWYWx1ZShwYXlsb2FkKSB7XG4gIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gIHRoaXMubmFtZSA9ICdSZWplY3RXaXRoVmFsdWUnO1xuICB0aGlzLm1lc3NhZ2UgPSAnUmVqZWN0ZWQnO1xufTsgLy8gUmV3b3JrZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NlcmlhbGl6ZS1lcnJvclxuXG5cbnZhciBtaW5pU2VyaWFsaXplRXJyb3IgPSBmdW5jdGlvbiBtaW5pU2VyaWFsaXplRXJyb3IodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICB2YXIgc2ltcGxlRXJyb3IgPSB7fTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNvbW1vblByb3BlcnRpZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wZXJ0eSA9IF9yZWY7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcGVydHldID09PSAnc3RyaW5nJykge1xuICAgICAgICBzaW1wbGVFcnJvcltwcm9wZXJ0eV0gPSB2YWx1ZVtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXBsZUVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBTdHJpbmcodmFsdWUpXG4gIH07XG59O1xuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB0eXBlUHJlZml4XHJcbiAqIEBwYXJhbSBwYXlsb2FkQ3JlYXRvclxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBc3luY1RodW5rKHR5cGVQcmVmaXgsIHBheWxvYWRDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHZhciBmdWxmaWxsZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArICcvZnVsZmlsbGVkJywgZnVuY3Rpb24gKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bG9hZDogcmVzdWx0LFxuICAgICAgbWV0YToge1xuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6ICdmdWxmaWxsZWQnXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIHZhciBwZW5kaW5nID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyAnL3BlbmRpbmcnLCBmdW5jdGlvbiAocmVxdWVzdElkLCBhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bG9hZDogdW5kZWZpbmVkLFxuICAgICAgbWV0YToge1xuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6ICdwZW5kaW5nJ1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICB2YXIgcmVqZWN0ZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArICcvcmVqZWN0ZWQnLCBmdW5jdGlvbiAoZXJyb3IsIHJlcXVlc3RJZCwgYXJnKSB7XG4gICAgdmFyIHJlamVjdGVkV2l0aFZhbHVlID0gZXJyb3IgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWU7XG4gICAgdmFyIGFib3J0ZWQgPSAhIWVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJztcbiAgICB2YXIgY29uZGl0aW9uID0gISFlcnJvciAmJiBlcnJvci5uYW1lID09PSAnQ29uZGl0aW9uRXJyb3InO1xuICAgIHJldHVybiB7XG4gICAgICBwYXlsb2FkOiBlcnJvciBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSA/IGVycm9yLnBheWxvYWQgOiB1bmRlZmluZWQsXG4gICAgICBlcnJvcjogKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemVFcnJvciB8fCBtaW5pU2VyaWFsaXplRXJyb3IpKGVycm9yIHx8ICdSZWplY3RlZCcpLFxuICAgICAgbWV0YToge1xuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgICAgIHJlamVjdGVkV2l0aFZhbHVlOiByZWplY3RlZFdpdGhWYWx1ZSxcbiAgICAgICAgcmVxdWVzdFN0YXR1czogJ3JlamVjdGVkJyxcbiAgICAgICAgYWJvcnRlZDogYWJvcnRlZCxcbiAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgdmFyIGRpc3BsYXllZFdhcm5pbmcgPSBmYWxzZTtcbiAgdmFyIEFDID0gdHlwZW9mIEFib3J0Q29udHJvbGxlciAhPT0gJ3VuZGVmaW5lZCcgPyBBYm9ydENvbnRyb2xsZXIgOlxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICB0aGlzLnNpZ25hbCA9IHtcbiAgICAgICAgYWJvcnRlZDogZmFsc2UsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uYWJvcnQ6IGZ1bmN0aW9uIG9uYWJvcnQoKSB7fSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBfY2xhc3MucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWRpc3BsYXllZFdhcm5pbmcpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmluZm8oXCJUaGlzIHBsYXRmb3JtIGRvZXMgbm90IGltcGxlbWVudCBBYm9ydENvbnRyb2xsZXIuIFxcbklmIHlvdSB3YW50IHRvIHVzZSB0aGUgQWJvcnRDb250cm9sbGVyIHRvIHJlYWN0IHRvIGBhYm9ydGAgZXZlbnRzLCBwbGVhc2UgY29uc2lkZXIgaW1wb3J0aW5nIGEgcG9seWZpbGwgbGlrZSAnYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsL2Rpc3QvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsLW9ubHknLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX2NsYXNzO1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcihhcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmEpIHtcbiAgICAgIHZhciByZXF1ZXN0SWQgPSBuYW5vaWQoKTtcbiAgICAgIHZhciBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQUMoKTtcbiAgICAgIHZhciBhYm9ydFJlYXNvbjtcbiAgICAgIHZhciBhYm9ydGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCh7XG4gICAgICAgICAgICBuYW1lOiAnQWJvcnRFcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBhYm9ydFJlYXNvbiB8fCAnQWJvcnRlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydGVkID0gZmFsc2U7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0KHJlYXNvbikge1xuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgIGFib3J0UmVhc29uID0gcmVhc29uO1xuICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBfdGVtcDMgPSBmdW5jdGlvbiBfdGVtcDMoX3Jlc3VsdCkge1xuICAgICAgICAgICAgaWYgKF9leGl0MikgcmV0dXJuIF9yZXN1bHQ7XG4gICAgICAgICAgICAvLyBXZSBkaXNwYXRjaCB0aGUgcmVzdWx0IGFjdGlvbiBfYWZ0ZXJfIHRoZSBjYXRjaCwgdG8gYXZvaWQgaGF2aW5nIGFueSBlcnJvcnNcbiAgICAgICAgICAgIC8vIGhlcmUgZ2V0IHN3YWxsb3dlZCBieSB0aGUgdHJ5L2NhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gcGVyIGh0dHBzOi8vdHdpdHRlci5jb20vZGFuX2FicmFtb3Yvc3RhdHVzLzc3MDkxNDIyMTYzODk0MjcyMFxuICAgICAgICAgICAgLy8gYW5kIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdHV0b3JpYWxzL2FkdmFuY2VkLXR1dG9yaWFsI2FzeW5jLWVycm9yLWhhbmRsaW5nLWxvZ2ljLWluLXRodW5rc1xuICAgICAgICAgICAgdmFyIHNraXBEaXNwYXRjaCA9IG9wdGlvbnMgJiYgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiYgcmVqZWN0ZWQubWF0Y2goZmluYWxBY3Rpb24pICYmIGZpbmFsQWN0aW9uLm1ldGEuY29uZGl0aW9uO1xuXG4gICAgICAgICAgICBpZiAoIXNraXBEaXNwYXRjaCkge1xuICAgICAgICAgICAgICBkaXNwYXRjaChmaW5hbEFjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaW5hbEFjdGlvbjtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIF9leGl0MiA9IGZhbHNlO1xuICAgICAgICAgIHZhciBmaW5hbEFjdGlvbjtcblxuICAgICAgICAgIHZhciBfdGVtcDQgPSBfY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5jb25kaXRpb24gJiYgb3B0aW9ucy5jb25kaXRpb24oYXJnLCB7XG4gICAgICAgICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhXG4gICAgICAgICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb25kaXRpb25FcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Fib3J0ZWQgZHVlIHRvIGNvbmRpdGlvbiBjYWxsYmFjayByZXR1cm5pbmcgZmFsc2UuJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHBlbmRpbmcocmVxdWVzdElkLCBhcmcpKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoUHJvbWlzZS5yYWNlKFthYm9ydGVkUHJvbWlzZSwgUHJvbWlzZS5yZXNvbHZlKHBheWxvYWRDcmVhdG9yKGFyZywge1xuICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICAgICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICByZWplY3RXaXRoVmFsdWU6IGZ1bmN0aW9uIHJlamVjdFdpdGhWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZChyZXN1bHQsIHJlcXVlc3RJZCwgYXJnKTtcbiAgICAgICAgICAgIH0pXSkpLnRoZW4oZnVuY3Rpb24gKF9Qcm9taXNlJHJhY2UpIHtcbiAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBfUHJvbWlzZSRyYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgZmluYWxBY3Rpb24gPSByZWplY3RlZChlcnIsIHJlcXVlc3RJZCwgYXJnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RlbXA0ICYmIF90ZW1wNC50aGVuID8gX3RlbXA0LnRoZW4oX3RlbXAzKSA6IF90ZW1wMyhfdGVtcDQpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7XG4gICAgICAgIGFib3J0OiBhYm9ydCxcbiAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgICAgIGFyZzogYXJnXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWN0aW9uQ3JlYXRvciwge1xuICAgIHBlbmRpbmc6IHBlbmRpbmcsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHR5cGVQcmVmaXg6IHR5cGVQcmVmaXhcbiAgfSk7XG59XG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cblxuZnVuY3Rpb24gdW53cmFwUmVzdWx0KGFjdGlvbikge1xuICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWUpIHtcbiAgICB0aHJvdyBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuXG4gIGlmIChhY3Rpb24uZXJyb3IpIHtcbiAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XG4gIH1cblxuICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG59XG5cbnZhciBoYXNNYXRjaEZ1bmN0aW9uID0gZnVuY3Rpb24gaGFzTWF0Y2hGdW5jdGlvbih2KSB7XG4gIHJldHVybiB2ICYmIHR5cGVvZiB2Lm1hdGNoID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIG1hdGNoZXMgPSBmdW5jdGlvbiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbikge1xuICBpZiAoaGFzTWF0Y2hGdW5jdGlvbihtYXRjaGVyKSkge1xuICAgIHJldHVybiBtYXRjaGVyLm1hdGNoKGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcbiAgfVxufTtcbi8qKlxyXG4gKiBBIGhpZ2hlci1vcmRlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIGNoZWNrXHJcbiAqIHdoZXRoZXIgYW4gYWN0aW9uIG1hdGNoZXMgYW55IG9uZSBvZiB0aGUgc3VwcGxpZWQgdHlwZSBndWFyZHMgb3IgYWN0aW9uXHJcbiAqIGNyZWF0b3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWF0Y2hlcnMgVGhlIHR5cGUgZ3VhcmRzIG9yIGFjdGlvbiBjcmVhdG9ycyB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQW55T2YoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtYXRjaGVycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtYXRjaGVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIG1hdGNoZXJzLnNvbWUoZnVuY3Rpb24gKG1hdGNoZXIpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7XG4gICAgfSk7XG4gIH07XG59XG4vKipcclxuICogQSBoaWdoZXItb3JkZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjaGVja1xyXG4gKiB3aGV0aGVyIGFuIGFjdGlvbiBtYXRjaGVzIGFsbCBvZiB0aGUgc3VwcGxpZWQgdHlwZSBndWFyZHMgb3IgYWN0aW9uXHJcbiAqIGNyZWF0b3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWF0Y2hlcnMgVGhlIHR5cGUgZ3VhcmRzIG9yIGFjdGlvbiBjcmVhdG9ycyB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xuXG5mdW5jdGlvbiBpc0FsbE9mKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1hdGNoZXJzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgbWF0Y2hlcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIG1hdGNoZXJzLmV2ZXJ5KGZ1bmN0aW9uIChtYXRjaGVyKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXHJcbiAqIEBwYXJhbSBhY3Rpb24gQSByZWR1eCBhY3Rpb25cclxuICogQHBhcmFtIHZhbGlkU3RhdHVzIEFuIGFycmF5IG9mIHZhbGlkIG1ldGEucmVxdWVzdFN0YXR1cyB2YWx1ZXNcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xuXG5mdW5jdGlvbiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIHZhbGlkU3RhdHVzKSB7XG4gIGlmICghYWN0aW9uIHx8ICFhY3Rpb24ubWV0YSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgaGFzVmFsaWRSZXF1ZXN0SWQgPSB0eXBlb2YgYWN0aW9uLm1ldGEucmVxdWVzdElkID09PSAnc3RyaW5nJztcbiAgdmFyIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cyA9IHZhbGlkU3RhdHVzLmluZGV4T2YoYWN0aW9uLm1ldGEucmVxdWVzdFN0YXR1cykgPiAtMTtcbiAgcmV0dXJuIGhhc1ZhbGlkUmVxdWVzdElkICYmIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cztcbn1cblxuZnVuY3Rpb24gaXNBc3luY1RodW5rQXJyYXkoYSkge1xuICByZXR1cm4gdHlwZW9mIGFbMF0gPT09ICdmdW5jdGlvbicgJiYgJ3BlbmRpbmcnIGluIGFbMF0gJiYgJ2Z1bGZpbGxlZCcgaW4gYVswXSAmJiAncmVqZWN0ZWQnIGluIGFbMF07XG59XG5cbmZ1bmN0aW9uIGlzUGVuZGluZygpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhc3luY1RodW5rcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFzeW5jVGh1bmtzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsncGVuZGluZyddKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcbiAgICByZXR1cm4gaXNQZW5kaW5nKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAvLyBub3RlOiB0aGlzIHR5cGUgd2lsbCBiZSBjb3JyZWN0IGJlY2F1c2Ugd2UgaGF2ZSBhdCBsZWFzdCAxIGFzeW5jVGh1bmtcbiAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHtcbiAgICAgIHJldHVybiBhc3luY1RodW5rLnBlbmRpbmc7XG4gICAgfSk7XG4gICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XG4gICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xuICB9O1xufVxuZnVuY3Rpb24gaXNSZWplY3RlZCgpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhc3luY1RodW5rcyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFzeW5jVGh1bmtzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsncmVqZWN0ZWQnXSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XG4gICAgcmV0dXJuIGlzUmVqZWN0ZWQoKShhc3luY1RodW5rc1swXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIC8vIG5vdGU6IHRoaXMgdHlwZSB3aWxsIGJlIGNvcnJlY3QgYmVjYXVzZSB3ZSBoYXZlIGF0IGxlYXN0IDEgYXN5bmNUaHVua1xuICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykge1xuICAgICAgcmV0dXJuIGFzeW5jVGh1bmsucmVqZWN0ZWQ7XG4gICAgfSk7XG4gICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XG4gICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xuICB9O1xufVxuZnVuY3Rpb24gaXNSZWplY3RlZFdpdGhWYWx1ZSgpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhc3luY1RodW5rcyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFzeW5jVGh1bmtzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICB2YXIgaGFzRmxhZyA9IGZ1bmN0aW9uIGhhc0ZsYWcoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZTtcbiAgfTtcblxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xuICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xuICAgIHJldHVybiBpc1JlamVjdGVkV2l0aFZhbHVlKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbGxPZihpc1JlamVjdGVkLmFwcGx5KHZvaWQgMCwgYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcbiAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XG4gIH07XG59XG5mdW5jdGlvbiBpc0Z1bGZpbGxlZCgpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhc3luY1RodW5rcyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIGFzeW5jVGh1bmtzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsnZnVsZmlsbGVkJ10pO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xuICAgIHJldHVybiBpc0Z1bGZpbGxlZCgpKGFzeW5jVGh1bmtzWzBdKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgLy8gbm90ZTogdGhpcyB0eXBlIHdpbGwgYmUgY29ycmVjdCBiZWNhdXNlIHdlIGhhdmUgYXQgbGVhc3QgMSBhc3luY1RodW5rXG4gICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7XG4gICAgICByZXR1cm4gYXN5bmNUaHVuay5mdWxmaWxsZWQ7XG4gICAgfSk7XG4gICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XG4gICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xuICB9O1xufVxuZnVuY3Rpb24gaXNBc3luY1RodW5rQWN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFzeW5jVGh1bmtzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXN5bmNUaHVua3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgWydwZW5kaW5nJywgJ2Z1bGZpbGxlZCcsICdyZWplY3RlZCddKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcbiAgICByZXR1cm4gaXNBc3luY1RodW5rQWN0aW9uKCkoYXN5bmNUaHVua3NbMF0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAvLyBub3RlOiB0aGlzIHR5cGUgd2lsbCBiZSBjb3JyZWN0IGJlY2F1c2Ugd2UgaGF2ZSBhdCBsZWFzdCAxIGFzeW5jVGh1bmtcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFzeW5jVGh1bmtzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXN5bmNUaHVuayA9IF9yZWY7XG4gICAgICBtYXRjaGVycy5wdXNoKGFzeW5jVGh1bmsucGVuZGluZywgYXN5bmNUaHVuay5yZWplY3RlZCwgYXN5bmNUaHVuay5mdWxmaWxsZWQpO1xuICAgIH1cblxuICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xuICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcbiAgfTtcbn1cblxuLy8gd2UgYXNzdW1lIFJUSyB3aWxsIGJlIHVzZWQgd2l0aCBSZWFjdCBOYXRpdmUgYW5kIG90aGVyIFByb3h5LWxlc3Ncbi8vIGVudmlyb25tZW50cy4gIEluIGFkZGl0aW9uLCB0aGF0J3MgaG93IEltbWVyIDQgYmVoYXZlZCwgYW5kIHNpbmNlXG4vLyB3ZSB3YW50IHRvIHNoaXAgdGhpcyBpbiBhbiBSVEsgbWlub3IsIHdlIHNob3VsZCBrZWVwIHRoZSBzYW1lIGJlaGF2aW9yLlxuXG5lbmFibGVFUzUoKTtcblxuZXhwb3J0IHsgTWlkZGxld2FyZUFycmF5LCBjb25maWd1cmVTdG9yZSwgY3JlYXRlQWN0aW9uLCBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvciwgY3JlYXRlRW50aXR5QWRhcHRlciwgY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLCBjcmVhdGVSZWR1Y2VyLCBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsIGNyZWF0ZVNsaWNlLCBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUsIGdldERlZmF1bHRNaWRkbGV3YXJlLCBnZXRUeXBlLCBpc0FsbE9mLCBpc0FueU9mLCBpc0FzeW5jVGh1bmtBY3Rpb24sIGlzRnVsZmlsbGVkLCBpc0ltbXV0YWJsZURlZmF1bHQsIGlzUGVuZGluZywgaXNQbGFpbiwgaXNQbGFpbk9iamVjdCwgaXNSZWplY3RlZCwgaXNSZWplY3RlZFdpdGhWYWx1ZSwgbmFub2lkLCB1bndyYXBSZXN1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHV4LXRvb2xraXQuZXNtLmpzLm1hcFxuIiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KHI+MT9yLTE6MCksZT0xO2U8cjtlKyspdFtlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCx0KTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyh0Lmxlbmd0aD9cIiBcIit0Lm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHQobil7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09cilyZXR1cm4hMDt2YXIgdD1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyLFwiY29uc3RydWN0b3JcIikmJnIuY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmRnVuY3Rpb24udG9TdHJpbmcuY2FsbCh0KT09PVp9KG4pfHxBcnJheS5pc0FycmF5KG4pfHwhIW5bTF18fCEhbi5jb25zdHJ1Y3RvcltMXXx8cyhuKXx8dihuKSl9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gcih0KXx8bigyMyx0KSx0W1FdLnR9ZnVuY3Rpb24gaShuLHIsdCl7dm9pZCAwPT09dCYmKHQ9ITEpLDA9PT1vKG4pPyh0P09iamVjdC5rZXlzOm5uKShuKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0JiZcInN5bWJvbFwiPT10eXBlb2YgZXx8cihlLG5bZV0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbih0LGUpe3JldHVybiByKGUsdCxuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciByPW5bUV07cmV0dXJuIHI/ci5pPjM/ci5pLTQ6ci5pOkFycmF5LmlzQXJyYXkobik/MTpzKG4pPzI6dihuKT8zOjB9ZnVuY3Rpb24gdShuLHIpe3JldHVybiAyPT09byhuKT9uLmhhcyhyKTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKX1mdW5jdGlvbiBhKG4scil7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHIpOm5bcl19ZnVuY3Rpb24gZihuLHIsdCl7dmFyIGU9byhuKTsyPT09ZT9uLnNldChyLHQpOjM9PT1lPyhuLmRlbGV0ZShyKSxuLmFkZCh0KSk6bltyXT10fWZ1bmN0aW9uIGMobixyKXtyZXR1cm4gbj09PXI/MCE9PW58fDEvbj09MS9yOm4hPW4mJnIhPXJ9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHI9cm4obik7ZGVsZXRlIHJbUV07Zm9yKHZhciB0PW5uKHIpLGU9MDtlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXSxvPXJbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJihyW2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSxyKX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHxyKG4pfHwhdChuKT9uOihvKG4pPjEmJihuLnNldD1uLmFkZD1uLmNsZWFyPW4uZGVsZXRlPWgpLE9iamVjdC5mcmVlemUobiksZSYmaShuLChmdW5jdGlvbihuLHIpe3JldHVybiBkKHIsITApfSksITApLG4pfWZ1bmN0aW9uIGgoKXtuKDIpfWZ1bmN0aW9uIHkobil7cmV0dXJuIG51bGw9PW58fFwib2JqZWN0XCIhPXR5cGVvZiBufHxPYmplY3QuaXNGcm96ZW4obil9ZnVuY3Rpb24gYihyKXt2YXIgdD10bltyXTtyZXR1cm4gdHx8bigxOCxyKSx0fWZ1bmN0aW9uIG0obixyKXt0bltuXXx8KHRuW25dPXIpfWZ1bmN0aW9uIF8oKXtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxVfHxuKDApLFV9ZnVuY3Rpb24gaihuLHIpe3ImJihiKFwiUGF0Y2hlc1wiKSxuLnU9W10sbi5zPVtdLG4udj1yKX1mdW5jdGlvbiBnKG4pe08obiksbi5wLmZvckVhY2goUyksbi5wPW51bGx9ZnVuY3Rpb24gTyhuKXtuPT09VSYmKFU9bi5sKX1mdW5jdGlvbiB3KG4pe3JldHVybiBVPXtwOltdLGw6VSxoOm4sbTohMCxfOjB9fWZ1bmN0aW9uIFMobil7dmFyIHI9bltRXTswPT09ci5pfHwxPT09ci5pP3IuaigpOnIuZz0hMH1mdW5jdGlvbiBQKHIsZSl7ZS5fPWUucC5sZW5ndGg7dmFyIGk9ZS5wWzBdLG89dm9pZCAwIT09ciYmciE9PWk7cmV0dXJuIGUuaC5PfHxiKFwiRVM1XCIpLlMoZSxyLG8pLG8/KGlbUV0uUCYmKGcoZSksbig0KSksdChyKSYmKHI9TShlLHIpLGUubHx8eChlLHIpKSxlLnUmJmIoXCJQYXRjaGVzXCIpLk0oaVtRXSxyLGUudSxlLnMpKTpyPU0oZSxpLFtdKSxnKGUpLGUudSYmZS52KGUudSxlLnMpLHIhPT1IP3I6dm9pZCAwfWZ1bmN0aW9uIE0obixyLHQpe2lmKHkocikpcmV0dXJuIHI7dmFyIGU9cltRXTtpZighZSlyZXR1cm4gaShyLChmdW5jdGlvbihpLG8pe3JldHVybiBBKG4sZSxyLGksbyx0KX0pLCEwKSxyO2lmKGUuQSE9PW4pcmV0dXJuIHI7aWYoIWUuUClyZXR1cm4geChuLGUudCwhMCksZS50O2lmKCFlLkkpe2UuST0hMCxlLkEuXy0tO3ZhciBvPTQ9PT1lLml8fDU9PT1lLmk/ZS5vPWwoZS5rKTplLm87aSgzPT09ZS5pP25ldyBTZXQobyk6bywoZnVuY3Rpb24ocixpKXtyZXR1cm4gQShuLGUsbyxyLGksdCl9KSkseChuLG8sITEpLHQmJm4udSYmYihcIlBhdGNoZXNcIikuUihlLHQsbi51LG4ucyl9cmV0dXJuIGUub31mdW5jdGlvbiBBKGUsaSxvLGEsYyxzKXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjPT09byYmbig1KSxyKGMpKXt2YXIgdj1NKGUsYyxzJiZpJiYzIT09aS5pJiYhdShpLkQsYSk/cy5jb25jYXQoYSk6dm9pZCAwKTtpZihmKG8sYSx2KSwhcih2KSlyZXR1cm47ZS5tPSExfWlmKHQoYykmJiF5KGMpKXtpZighZS5oLkYmJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHIsdCl7dm9pZCAwPT09dCYmKHQ9ITEpLG4uaC5GJiZuLm0mJmQocix0KX1mdW5jdGlvbiB6KG4scil7dmFyIHQ9bltRXTtyZXR1cm4odD9wKHQpOm4pW3JdfWZ1bmN0aW9uIEkobixyKXtpZihyIGluIG4pZm9yKHZhciB0PU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTt0Oyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHIpO2lmKGUpcmV0dXJuIGU7dD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9fWZ1bmN0aW9uIGsobil7bi5QfHwobi5QPSEwLG4ubCYmayhuLmwpKX1mdW5jdGlvbiBFKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIFIobixyLHQpe3ZhciBlPXMocik/YihcIk1hcFNldFwiKS5OKHIsdCk6dihyKT9iKFwiTWFwU2V0XCIpLlQocix0KTpuLk8/ZnVuY3Rpb24obixyKXt2YXIgdD1BcnJheS5pc0FycmF5KG4pLGU9e2k6dD8xOjAsQTpyP3IuQTpfKCksUDohMSxJOiExLEQ6e30sbDpyLHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1lbjt0JiYoaT1bZV0sbz1vbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHIsdCk6YihcIkVTNVwiKS5KKHIsdCk7cmV0dXJuKHQ/dC5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gRChlKXtyZXR1cm4gcihlKXx8bigyMixlKSxmdW5jdGlvbiBuKHIpe2lmKCF0KHIpKXJldHVybiByO3ZhciBlLHU9cltRXSxjPW8ocik7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPUYocixjKSx1Lkk9ITF9ZWxzZSBlPUYocixjKTtyZXR1cm4gaShlLChmdW5jdGlvbihyLHQpe3UmJmEodS50LHIpPT09dHx8ZihlLHIsbih0KSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBGKG4scil7c3dpdGNoKHIpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gTigpe2Z1bmN0aW9uIHQobixyKXt2YXIgdD1zW25dO3JldHVybiB0P3QuZW51bWVyYWJsZT1yOnNbbl09dD17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6cixnZXQ6ZnVuY3Rpb24oKXt2YXIgcj10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYociksZW4uZ2V0KHIsbil9LHNldDpmdW5jdGlvbihyKXt2YXIgdD10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCksZW4uc2V0KHQsbixyKX19LHR9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHI9bi5sZW5ndGgtMTtyPj0wO3ItLSl7dmFyIHQ9bltyXVtRXTtpZighdC5QKXN3aXRjaCh0Lmkpe2Nhc2UgNTphKHQpJiZrKHQpO2JyZWFrO2Nhc2UgNDpvKHQpJiZrKHQpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHI9bi50LHQ9bi5rLGU9bm4odCksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldO2lmKG8hPT1RKXt2YXIgYT1yW29dO2lmKHZvaWQgMD09PWEmJiF1KHIsbykpcmV0dXJuITA7dmFyIGY9dFtvXSxzPWYmJmZbUV07aWYocz9zLnQhPT1hOiFjKGYsYSkpcmV0dXJuITB9fXZhciB2PSEhcltRXTtyZXR1cm4gZS5sZW5ndGghPT1ubihyKS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciByPW4uaztpZihyLmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHIubGVuZ3RoLTEpO3JldHVybiEoIXR8fHQuZ2V0KX1mdW5jdGlvbiBmKHIpe3IuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obixyKXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obixyKXtpZihuKXtmb3IodmFyIGU9QXJyYXkoci5sZW5ndGgpLGk9MDtpPHIubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2ksdChpLCEwKSk7cmV0dXJuIGV9dmFyIG89cm4ocik7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PW5uKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXQoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpLG8pfShlLG4pLG89e2k6ZT81OjQsQTpyP3IuQTpfKCksUDohMSxJOiExLEQ6e30sbDpyLHQ6bixrOmksbzpudWxsLGc6ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4sdCxvKXtvP3IodCkmJnRbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHIpe2lmKHImJlwib2JqZWN0XCI9PXR5cGVvZiByKXt2YXIgdD1yW1FdO2lmKHQpe3ZhciBlPXQudCxvPXQuayxmPXQuRCxjPXQuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHIpe3IhPT1RJiYodm9pZCAwIT09ZVtyXXx8dShlLHIpP2Zbcl18fG4ob1tyXSk6KGZbcl09ITAsayh0KSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxrKHQpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHQpJiYoayh0KSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKXZvaWQgMD09PWZbbF0mJm4ob1tsXSl9fX19KG4ucFswXSksZShuLnApKX0sSzpmdW5jdGlvbihuKXtyZXR1cm4gND09PW4uaT9vKG4pOmEobil9fSl9ZnVuY3Rpb24gVCgpe2Z1bmN0aW9uIGUobil7aWYoIXQobikpcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAoZSk7aWYocyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLGUoblsxXSldfSkpKTtpZih2KG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKGUpKTt2YXIgcj1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBpIGluIG4pcltpXT1lKG5baV0pO3JldHVybiByfWZ1bmN0aW9uIGYobil7cmV0dXJuIHIobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbihyLHQpe3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10LnBhdGgsdT10Lm9wLGY9cixzPTA7czxpLmxlbmd0aC0xO3MrKyl7dmFyIHY9byhmKSxwPWlbc107MCE9PXYmJjEhPT12fHxcIl9fcHJvdG9fX1wiIT09cCYmXCJjb25zdHJ1Y3RvclwiIT09cHx8bigyNCksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmXCJwcm90b3R5cGVcIj09PXAmJm4oMjQpLFwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixwKSkmJm4oMTUsaS5qb2luKFwiL1wiKSl9dmFyIGw9byhmKSxkPWUodC52YWx1ZSksaD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKGwpe2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2UgYzpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDAsZCk7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzpyZXR1cm4gZi5hZGQoZCk7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2VcInJlbW92ZVwiOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMSk7Y2FzZSAyOnJldHVybiBmLmRlbGV0ZShoKTtjYXNlIDM6cmV0dXJuIGYuZGVsZXRlKHQudmFsdWUpO2RlZmF1bHQ6cmV0dXJuIGRlbGV0ZSBmW2hdfWRlZmF1bHQ6bigxNyx1KX19KSkscn0sUjpmdW5jdGlvbihuLHIsdCxlKXtzd2l0Y2gobi5pKXtjYXNlIDA6Y2FzZSA0OmNhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIG89bi50LHM9bi5vO2kobi5ELChmdW5jdGlvbihuLGkpe3ZhciB2PWEobyxuKSxwPWEocyxuKSxsPWk/dShvLG4pP1wicmVwbGFjZVwiOmM6XCJyZW1vdmVcIjtpZih2IT09cHx8XCJyZXBsYWNlXCIhPT1sKXt2YXIgZD1yLmNvbmNhdChuKTt0LnB1c2goXCJyZW1vdmVcIj09PWw/e29wOmwscGF0aDpkfTp7b3A6bCxwYXRoOmQsdmFsdWU6cH0pLGUucHVzaChsPT09Yz97b3A6XCJyZW1vdmVcIixwYXRoOmR9OlwicmVtb3ZlXCI9PT1sP3tvcDpjLHBhdGg6ZCx2YWx1ZTpmKHYpfTp7b3A6XCJyZXBsYWNlXCIscGF0aDpkLHZhbHVlOmYodil9KX19KSl9KG4scix0LGUpO2Nhc2UgNTpjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciBpPW4udCxvPW4uRCx1PW4ubztpZih1Lmxlbmd0aDxpLmxlbmd0aCl7dmFyIGE9W3UsaV07aT1hWzBdLHU9YVsxXTt2YXIgcz1bZSx0XTt0PXNbMF0sZT1zWzFdfWZvcih2YXIgdj0wO3Y8aS5sZW5ndGg7disrKWlmKG9bdl0mJnVbdl0hPT1pW3ZdKXt2YXIgcD1yLmNvbmNhdChbdl0pO3QucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYodVt2XSl9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKGlbdl0pfSl9Zm9yKHZhciBsPWkubGVuZ3RoO2w8dS5sZW5ndGg7bCsrKXt2YXIgZD1yLmNvbmNhdChbbF0pO3QucHVzaCh7b3A6YyxwYXRoOmQsdmFsdWU6Zih1W2xdKX0pfWkubGVuZ3RoPHUubGVuZ3RoJiZlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6ci5jb25jYXQoW1wibGVuZ3RoXCJdKSx2YWx1ZTppLmxlbmd0aH0pfShuLHIsdCxlKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXIuY29uY2F0KFt1XSk7dC5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpjLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89ci5jb25jYXQoW3VdKTt0LnB1c2goe29wOmMscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4scix0LGUpfX0sTTpmdW5jdGlvbihuLHIsdCxlKXt0LnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6cn0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gcihuLHIpe2Z1bmN0aW9uIHQoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHIpLG4ucHJvdG90eXBlPSh0LnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgdCl9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbihyKXtpZih0KHIpKXt2YXIgZT1SKG4uQS5oLHIsbik7bi5wLnNldChyLGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHIpfSkpKX1mdW5jdGlvbiB1KHIpe3IuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgYT1mdW5jdGlvbihuLHIpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHIpe24uX19wcm90b19fPXJ9fHxmdW5jdGlvbihuLHIpe2Zvcih2YXIgdCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihuW3RdPXJbdF0pfSkobixyKX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdGhpc1tRXT17aToyLGw6cixBOnI/ci5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLGc6ITF9LHRoaXN9cihuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obixyKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHAodCkuaGFzKG4pJiZwKHQpLmdldChuKT09PXJ8fChlKHQpLGsodCksdC5ELnNldChuLCEwKSx0Lm8uc2V0KG4sciksdC5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksZShyKSxrKHIpLHIuRC5zZXQobiwhMSksci5vLmRlbGV0ZShuKSwhMH0sby5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihlKG4pLGsobiksbi5EPW5ldyBNYXAsaShuLnQsKGZ1bmN0aW9uKHIpe24uRC5zZXQociwhMSl9KSksbi5vLmNsZWFyKCkpfSxvLmZvckVhY2g9ZnVuY3Rpb24obixyKXt2YXIgdD10aGlzO3AodGhpc1tRXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtuLmNhbGwocix0LmdldChpKSxpLHQpfSkpfSxvLmdldD1mdW5jdGlvbihuKXt2YXIgcj10aGlzW1FdO3Uocik7dmFyIGk9cChyKS5nZXQobik7aWYoci5JfHwhdChpKSlyZXR1cm4gaTtpZihpIT09ci50LmdldChuKSlyZXR1cm4gaTt2YXIgbz1SKHIuQS5oLGkscik7cmV0dXJuIGUociksci5vLnNldChuLG8pLG99LG8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLmtleXMoKX0sby52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbixyPXRoaXMsdD10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gci52YWx1ZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49dC5uZXh0KCk7cmV0dXJuIG4uZG9uZT9uOntkb25lOiExLHZhbHVlOnIuZ2V0KG4udmFsdWUpfX0sbn0sby5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG4scj10aGlzLHQ9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHIuZW50cmllcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj10Lm5leHQoKTtpZihuLmRvbmUpcmV0dXJuIG47dmFyIGU9ci5nZXQobi52YWx1ZSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6W24udmFsdWUsZV19fSxufSxvW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxufSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHRoaXNbUV09e2k6MyxsOnIsQTpyP3IuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLHQ6bixrOnRoaXMscDpuZXcgTWFwLGc6ITEsQzohMX0sdGhpc31yKG4sU2V0KTt2YXIgdD1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksdC5oYXM9ZnVuY3Rpb24obil7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSxyLm8/ISFyLm8uaGFzKG4pfHwhKCFyLnAuaGFzKG4pfHwhci5vLmhhcyhyLnAuZ2V0KG4pKSk6ci50LmhhcyhuKX0sdC5hZGQ9ZnVuY3Rpb24obil7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSx0aGlzLmhhcyhuKXx8KG8ociksayhyKSxyLm8uYWRkKG4pKSx0aGlzfSx0LmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSxvKHIpLGsociksci5vLmRlbGV0ZShuKXx8ISFyLnAuaGFzKG4pJiZyLm8uZGVsZXRlKHIucC5nZXQobikpfSx0LmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKG8obiksayhuKSxuLm8uY2xlYXIoKSl9LHQudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby52YWx1ZXMoKX0sdC5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby5lbnRyaWVzKCl9LHQua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSx0W1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHQuZm9yRWFjaD1mdW5jdGlvbihuLHIpe2Zvcih2YXIgdD10aGlzLnZhbHVlcygpLGU9dC5uZXh0KCk7IWUuZG9uZTspbi5jYWxsKHIsZS52YWx1ZSxlLnZhbHVlLHRoaXMpLGU9dC5uZXh0KCl9LG59KCk7bShcIk1hcFNldFwiLHtOOmZ1bmN0aW9uKG4scil7cmV0dXJuIG5ldyBmKG4scil9LFQ6ZnVuY3Rpb24obixyKXtyZXR1cm4gbmV3IGMobixyKX19KX1mdW5jdGlvbiBKKCl7TigpLEMoKSxUKCl9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gbn1mdW5jdGlvbiAkKG4pe3JldHVybiBufXZhciBHLFUsVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKFwieFwiKSxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAscT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0LEI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb3h5JiZ2b2lkIDAhPT1Qcm94eS5yZXZvY2FibGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0LEg9Vz9TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTooKEc9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxHKSxMPVc/U3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLFE9Vz9TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik6XCJfXyRpbW1lcl9zdGF0ZVwiLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIixZPXswOlwiSWxsZWdhbCBzdGF0ZVwiLDE6XCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLDI6XCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLDM6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiK259LDQ6XCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLDU6XCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIiw2OlwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsNzpcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLDg6XCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsOTpcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIiwxMDpcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLDExOlwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMjpcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTM6XCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIiwxNDpcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIiwxNTpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiK259LDE2OidTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJywxNzpmdW5jdGlvbihuKXtyZXR1cm5cIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIrbn0sMTg6ZnVuY3Rpb24obil7cmV0dXJuXCJUaGUgcGx1Z2luIGZvciAnXCIrbitcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIituK1wiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCJ9LDIwOlwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLDIxOmZ1bmN0aW9uKG4pe3JldHVyblwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIrbitcIidcIn0sMjI6ZnVuY3Rpb24obil7cmV0dXJuXCInY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDIzOmZ1bmN0aW9uKG4pe3JldHVyblwiJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjQ6XCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJ9LFo9XCJcIitPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLG5uPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0Lm93bktleXM/UmVmbGVjdC5vd25LZXlzOnZvaWQgMCE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pKX06T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMscm49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnN8fGZ1bmN0aW9uKG4pe3ZhciByPXt9O3JldHVybiBubihuKS5mb3JFYWNoKChmdW5jdGlvbih0KXtyW3RdPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobix0KX0pKSxyfSx0bj17fSxlbj17Z2V0OmZ1bmN0aW9uKG4scil7aWYocj09PVEpcmV0dXJuIG47dmFyIGU9cChuKTtpZighdShlLHIpKXJldHVybiBmdW5jdGlvbihuLHIsdCl7dmFyIGUsaT1JKHIsdCk7cmV0dXJuIGk/XCJ2YWx1ZVwiaW4gaT9pLnZhbHVlOm51bGw9PT0oZT1pLmdldCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY2FsbChuLmspOnZvaWQgMH0obixlLHIpO3ZhciBpPWVbcl07cmV0dXJuIG4uSXx8IXQoaSk/aTppPT09eihuLnQscik/KEUobiksbi5vW3JdPVIobi5BLmgsaSxuKSk6aX0saGFzOmZ1bmN0aW9uKG4scil7cmV0dXJuIHIgaW4gcChuKX0sb3duS2V5czpmdW5jdGlvbihuKXtyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHAobikpfSxzZXQ6ZnVuY3Rpb24obixyLHQpe3ZhciBlPUkocChuKSxyKTtpZihudWxsPT1lP3ZvaWQgMDplLnNldClyZXR1cm4gZS5zZXQuY2FsbChuLmssdCksITA7aWYoIW4uUCl7dmFyIGk9eihwKG4pLHIpLG89bnVsbD09aT92b2lkIDA6aVtRXTtpZihvJiZvLnQ9PT10KXJldHVybiBuLm9bcl09dCxuLkRbcl09ITEsITA7aWYoYyh0LGkpJiYodm9pZCAwIT09dHx8dShuLnQscikpKXJldHVybiEwO0UobiksayhuKX1yZXR1cm4gbi5vW3JdPT09dCYmXCJudW1iZXJcIiE9dHlwZW9mIHR8fChuLm9bcl09dCxuLkRbcl09ITAsITApfSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbihuLHIpe3JldHVybiB2b2lkIDAhPT16KG4udCxyKXx8ciBpbiBuLnQ/KG4uRFtyXT0hMSxFKG4pLGsobikpOmRlbGV0ZSBuLkRbcl0sbi5vJiZkZWxldGUgbi5vW3JdLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24obixyKXt2YXIgdD1wKG4pLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKTtyZXR1cm4gZT97d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOjEhPT1uLml8fFwibGVuZ3RoXCIhPT1yLGVudW1lcmFibGU6ZS5lbnVtZXJhYmxlLHZhbHVlOnRbcl19OmV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7bigxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXtuKDEyKX19LG9uPXt9O2koZW4sKGZ1bmN0aW9uKG4scil7b25bbl09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksb24uZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24ocix0KXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludCh0KSkmJm4oMTMpLGVuLmRlbGV0ZVByb3BlcnR5LmNhbGwodGhpcyxyWzBdLHQpfSxvbi5zZXQ9ZnVuY3Rpb24ocix0LGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT10JiZpc05hTihwYXJzZUludCh0KSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsclswXSx0LGUsclswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUocil7dmFyIGU9dGhpczt0aGlzLk89Qix0aGlzLkY9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHIsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9cjt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHQ7cmV0dXJuKHQ9aSkuY2FsbC5hcHBseSh0LFtyLG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSx0KHIpKXt2YXIgYz13KGUpLHM9UihlLHIsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/ZyhjKTpPKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IGcoYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXJ8fFwib2JqZWN0XCIhPXR5cGVvZiByKXtpZigoZj1pKHIpKT09PUgpcmV0dXJuO3JldHVybiB2b2lkIDA9PT1mJiYoZj1yKSxlLkYmJmQoZiwhMCksZn1uKDIxLHIpfSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbihuLHIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/ZnVuY3Rpb24ocil7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheSh0PjE/dC0xOjApLG89MTtvPHQ7bysrKWlbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGUucHJvZHVjZVdpdGhQYXRjaGVzKHIsKGZ1bmN0aW9uKHIpe3JldHVybiBuLmFwcGx5KHZvaWQgMCxbcl0uY29uY2F0KGkpKX0pKX06W2UucHJvZHVjZShuLHIsKGZ1bmN0aW9uKG4scil7dD1uLGk9cn0pKSx0LGldO3ZhciB0LGl9LFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09cj92b2lkIDA6ci51c2VQcm94aWVzKSYmdGhpcy5zZXRVc2VQcm94aWVzKHIudXNlUHJveGllcyksXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1yP3ZvaWQgMDpyLmF1dG9GcmVlemUpJiZ0aGlzLnNldEF1dG9GcmVlemUoci5hdXRvRnJlZXplKX12YXIgaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5jcmVhdGVEcmFmdD1mdW5jdGlvbihlKXt0KGUpfHxuKDgpLHIoZSkmJihlPUQoZSkpO3ZhciBpPXcodGhpcyksbz1SKHRoaXMsZSx2b2lkIDApO3JldHVybiBvW1FdLkM9ITAsTyhpKSxvfSxpLmZpbmlzaERyYWZ0PWZ1bmN0aW9uKHIsdCl7dmFyIGU9ciYmcltRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoZSYmZS5DfHxuKDkpLGUuSSYmbigxMCkpO3ZhciBpPWUuQTtyZXR1cm4gaihpLHQpLFAodm9pZCAwLGkpfSxpLnNldEF1dG9GcmVlemU9ZnVuY3Rpb24obil7dGhpcy5GPW59LGkuc2V0VXNlUHJveGllcz1mdW5jdGlvbihyKXtyJiYhQiYmbigyMCksdGhpcy5PPXJ9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4sdCl7dmFyIGU7Zm9yKGU9dC5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9dFtlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHIobik/byhuLHQpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHQuc2xpY2UoZSsxKSl9KSl9LGV9KCksYW49bmV3IHVuLGZuPWFuLnByb2R1Y2UsY249YW4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoYW4pLHNuPWFuLnNldEF1dG9GcmVlemUuYmluZChhbiksdm49YW4uc2V0VXNlUHJveGllcy5iaW5kKGFuKSxwbj1hbi5hcHBseVBhdGNoZXMuYmluZChhbiksbG49YW4uY3JlYXRlRHJhZnQuYmluZChhbiksZG49YW4uZmluaXNoRHJhZnQuYmluZChhbik7ZXhwb3J0IGRlZmF1bHQgZm47ZXhwb3J0e3VuIGFzIEltbWVyLHBuIGFzIGFwcGx5UGF0Y2hlcyxLIGFzIGNhc3REcmFmdCwkIGFzIGNhc3RJbW11dGFibGUsbG4gYXMgY3JlYXRlRHJhZnQsRCBhcyBjdXJyZW50LEogYXMgZW5hYmxlQWxsUGx1Z2lucyxOIGFzIGVuYWJsZUVTNSxDIGFzIGVuYWJsZU1hcFNldCxUIGFzIGVuYWJsZVBhdGNoZXMsZG4gYXMgZmluaXNoRHJhZnQsZCBhcyBmcmVlemUsTCBhcyBpbW1lcmFibGUsciBhcyBpc0RyYWZ0LHQgYXMgaXNEcmFmdGFibGUsSCBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwsZm4gYXMgcHJvZHVjZSxjbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsc24gYXMgc2V0QXV0b0ZyZWV6ZSx2biBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgcHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogY3JlYXRlU2VsZWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9