self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductFeed */ "./src/components/ProductFeed.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\User\\Documents\\react\\Amazon-starter-template-nextjs\\src\\components\\Product.js";


function Product(_ref) {
  var _this = this;

  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          price = _ref2.price,
          description = _ref2.description,
          category = _ref2.category,
          image = _ref2.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductFeed__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(function (_ref3) {
        var id = _ref3.id,
            title = _ref3.title,
            price = _ref3.price,
            description = _ref3.description,
            category = _ref3.category,
            image = _ref3.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductFeed__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdHMiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE9BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUZBQWY7QUFBQSxlQUNLQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFVBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFVBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxVQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsVUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDBCQUNyQiw4REFBQyxpREFBRDtBQUVJLGFBQUssRUFBRUosS0FGWDtBQUdJLGFBQUssRUFBRUMsS0FIWDtBQUlJLG1CQUFXLEVBQUVDLFdBSmpCO0FBS0ksZ0JBQVEsRUFBRUMsUUFMZDtBQU1JLGFBQUssRUFBRUM7QUFOWCxTQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF4QixDQURMLGVBWUk7QUFDSSxlQUFTLEVBQUMsa0JBRGQ7QUFFSSxTQUFHLEVBQUMsaUNBRlI7QUFHSSxTQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFpQkk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNDSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFlBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFlBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFlBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFlBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxZQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsWUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDRCQUNyQiw4REFBQyxpREFBRDtBQUVJLGVBQUssRUFBRUosS0FGWDtBQUdJLGVBQUssRUFBRUMsS0FIWDtBQUlJLHFCQUFXLEVBQUVDLFdBSmpCO0FBS0ksa0JBQVEsRUFBRUMsUUFMZDtBQU1JLGVBQUssRUFBRUM7QUFOWCxXQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBeEI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUNIOztLQWxDUUosTztBQW9DVCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MTlkNjYyZjUyMDEyNzdlMTI3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RGZWVkIGZyb20gXCIuL1Byb2R1Y3RGZWVkXCJcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IG1kOi1tdC01MiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5zbGljZSgwLDQpLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0RmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoNCw1KS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEZlZWRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=