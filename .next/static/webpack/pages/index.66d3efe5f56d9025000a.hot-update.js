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
        id: id,
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
      lineNumber: 18,
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
          lineNumber: 25,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), products.slice(5, products.length).map(function (_ref4) {
      var id = _ref4.id,
          title = _ref4.title,
          price = _ref4.price,
          description = _ref4.description,
          category = _ref4.category,
          image = _ref4.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductFeed__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdHMiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE9BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUZBQWY7QUFBQSxlQUNLQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFVBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFVBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxVQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsVUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDBCQUNyQiw4REFBQyxpREFBRDtBQUVJLFVBQUUsRUFBRUwsRUFGUjtBQUdJLGFBQUssRUFBRUMsS0FIWDtBQUlJLGFBQUssRUFBRUMsS0FKWDtBQUtJLG1CQUFXLEVBQUVDLFdBTGpCO0FBTUksZ0JBQVEsRUFBRUMsUUFOZDtBQU9JLGFBQUssRUFBRUM7QUFQWCxTQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF4QixDQURMLGVBYUk7QUFDSSxlQUFTLEVBQUMsa0JBRGQ7QUFFSSxTQUFHLEVBQUMsaUNBRlI7QUFHSSxTQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFrQkk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNDSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFlBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFlBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFlBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFlBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxZQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsWUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDRCQUNyQiw4REFBQyxpREFBRDtBQUVJLGVBQUssRUFBRUosS0FGWDtBQUdJLGVBQUssRUFBRUMsS0FIWDtBQUlJLHFCQUFXLEVBQUVDLFdBSmpCO0FBS0ksa0JBQVEsRUFBRUMsUUFMZDtBQU1JLGVBQUssRUFBRUM7QUFOWCxXQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBeEI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLEVBOEJLSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCRCxRQUFRLENBQUNTLE1BQTFCLEVBQWtDUCxHQUFsQyxDQUFzQztBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFVBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFVBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxVQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsVUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDBCQUNuQyw4REFBQyxpREFBRDtBQUVJLGFBQUssRUFBRUosS0FGWDtBQUdJLGFBQUssRUFBRUMsS0FIWDtBQUlJLG1CQUFXLEVBQUVDLFdBSmpCO0FBS0ksZ0JBQVEsRUFBRUMsUUFMZDtBQU1JLGFBQUssRUFBRUM7QUFOWCxTQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUM7QUFBQSxLQUF0QyxDQTlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7S0E1Q1FKLE87QUE4Q1QsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZkM2VmZTVmNTZkOTAyNTAwMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0RmVlZCBmcm9tIFwiLi9Qcm9kdWN0RmVlZFwiXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCw0KS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEZlZWRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9keXpcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5zbGljZSg0LDUpLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0RmVlZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDUscHJvZHVjdHMubGVuZ3RoKS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEZlZWRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9