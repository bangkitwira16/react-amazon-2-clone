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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      rating = _useState[0],
      setrating = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      width: 200,
      height: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(ProductFeed, "AIJtYu5bAuSRxjU9sVw+cjTrIgM=");

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

/***/ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")) :
	0;
}(this, (function (react,PropTypes) { 'use strict';

react = react && react.hasOwnProperty('default') ? react['default'] : react;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var locales = {
  af: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  af_NA: {
    h: 'af'
  },
  af_ZA: {
    h: 'af'
  },
  agq: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  agq_CM: {
    h: 'agq'
  },
  ak: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ak_GH: {
    h: 'ak'
  },
  am: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  am_ET: {
    h: 'am'
  },
  ar: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ar_001: {
    h: 'ar'
  },
  ar_AE: {
    h: 'ar'
  },
  ar_BH: {
    h: 'ar'
  },
  ar_DJ: {
    h: 'ar'
  },
  ar_DZ: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_EG: {
    h: 'ar'
  },
  ar_EH: {
    h: 'ar'
  },
  ar_ER: {
    h: 'ar'
  },
  ar_IL: {
    h: 'ar'
  },
  ar_IQ: {
    h: 'ar'
  },
  ar_JO: {
    h: 'ar'
  },
  ar_KM: {
    h: 'ar'
  },
  ar_KW: {
    h: 'ar'
  },
  ar_LB: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_LY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MA: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_MR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_OM: {
    h: 'ar'
  },
  ar_PS: {
    h: 'ar'
  },
  ar_QA: {
    h: 'ar'
  },
  ar_SA: {
    h: 'ar'
  },
  ar_SD: {
    h: 'ar'
  },
  ar_SO: {
    h: 'ar'
  },
  ar_SS: {
    h: 'ar'
  },
  ar_SY: {
    h: 'ar'
  },
  ar_TD: {
    h: 'ar'
  },
  ar_TN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ar_YE: {
    h: 'ar'
  },
  as: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  as_IN: {
    h: 'as'
  },
  asa: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  asa_TZ: {
    h: 'asa'
  },
  ast: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ast_ES: {
    h: 'ast'
  },
  az: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  az_Cyrl: {
    h: 'az'
  },
  az_Cyrl_AZ: {
    h: 'az'
  },
  az_Latn: {
    h: 'az'
  },
  az_Latn_AZ: {
    h: 'az'
  },
  bas: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bas_CM: {
    h: 'bas'
  },
  be: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  be_BY: {
    h: 'be'
  },
  bem: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bem_ZM: {
    h: 'bem'
  },
  bez: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  bez_TZ: {
    h: 'bez'
  },
  bg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  bg_BG: {
    h: 'bg'
  },
  bm: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  bm_ML: {
    h: 'bm'
  },
  bn: {
    p: '#,##,##0.00!',
    g: ',',
    d: '.'
  },
  bn_BD: {
    h: 'bn'
  },
  bn_IN: {
    h: 'bn'
  },
  bo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  bo_CN: {
    h: 'bo'
  },
  bo_IN: {
    h: 'bo'
  },
  br: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  br_FR: {
    h: 'br'
  },
  brx: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  brx_IN: {
    h: 'brx'
  },
  bs: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  bs_Cyrl: {
    h: 'bs'
  },
  bs_Cyrl_BA: {
    h: 'bs'
  },
  bs_Latn: {
    h: 'bs'
  },
  bs_Latn_BA: {
    h: 'bs'
  },
  ca: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ca_AD: {
    h: 'ca'
  },
  ca_ES: {
    h: 'ca'
  },
  ca_ES_VALENCIA: {
    h: 'ca'
  },
  ca_FR: {
    h: 'ca'
  },
  ca_IT: {
    h: 'ca'
  },
  ce: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  ce_RU: {
    h: 'ce'
  },
  cgg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cgg_UG: {
    h: 'cgg'
  },
  chr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  chr_US: {
    h: 'chr'
  },
  ckb: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ckb_IQ: {
    h: 'ckb'
  },
  ckb_IR: {
    h: 'ckb'
  },
  cs: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cs_CZ: {
    h: 'cs'
  },
  cu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  cu_RU: {
    h: 'cu'
  },
  cy: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  cy_GB: {
    h: 'cy'
  },
  da: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  da_DK: {
    h: 'da'
  },
  da_GL: {
    h: 'da'
  },
  dav: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  dav_KE: {
    h: 'dav'
  },
  de: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  de_AT: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  de_BE: {
    h: 'de'
  },
  de_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  de_DE: {
    h: 'de'
  },
  de_LI: {
    p: '! #,##0.00',
    g: '\'',
    d: '.'
  },
  de_LU: {
    h: 'de'
  },
  dje: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  dje_NE: {
    h: 'dje'
  },
  dsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  dsb_DE: {
    h: 'dsb'
  },
  dua: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dua_CM: {
    h: 'dua'
  },
  dyo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  dyo_SN: {
    h: 'dyo'
  },
  dz: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  dz_BT: {
    h: 'dz'
  },
  ebu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ebu_KE: {
    h: 'ebu'
  },
  ee: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ee_GH: {
    h: 'ee'
  },
  ee_TG: {
    h: 'ee'
  },
  el: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  el_CY: {
    h: 'el'
  },
  el_GR: {
    h: 'el'
  },
  en: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  en_001: {
    h: 'en'
  },
  en_150: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_AG: {
    h: 'en'
  },
  en_AI: {
    h: 'en'
  },
  en_AS: {
    h: 'en'
  },
  en_AT: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  en_AU: {
    h: 'en'
  },
  en_BB: {
    h: 'en'
  },
  en_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  en_BI: {
    h: 'en'
  },
  en_BM: {
    h: 'en'
  },
  en_BS: {
    h: 'en'
  },
  en_BW: {
    h: 'en'
  },
  en_BZ: {
    h: 'en'
  },
  en_CA: {
    h: 'en'
  },
  en_CC: {
    h: 'en'
  },
  en_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ',',
    d: '.'
  },
  en_CK: {
    h: 'en'
  },
  en_CM: {
    h: 'en'
  },
  en_CX: {
    h: 'en'
  },
  en_CY: {
    h: 'en'
  },
  en_DE: {
    h: 'en'
  },
  en_DG: {
    h: 'en'
  },
  en_DK: {
    h: 'en'
  },
  en_DM: {
    h: 'en'
  },
  en_ER: {
    h: 'en'
  },
  en_FI: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_FJ: {
    h: 'en'
  },
  en_FK: {
    h: 'en'
  },
  en_FM: {
    h: 'en'
  },
  en_GB: {
    h: 'en'
  },
  en_GD: {
    h: 'en'
  },
  en_GG: {
    h: 'en'
  },
  en_GH: {
    h: 'en'
  },
  en_GI: {
    h: 'en'
  },
  en_GM: {
    h: 'en'
  },
  en_GU: {
    h: 'en'
  },
  en_GY: {
    h: 'en'
  },
  en_HK: {
    h: 'en'
  },
  en_IE: {
    h: 'en'
  },
  en_IL: {
    h: 'en'
  },
  en_IM: {
    h: 'en'
  },
  en_IN: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  en_IO: {
    h: 'en'
  },
  en_JE: {
    h: 'en'
  },
  en_JM: {
    h: 'en'
  },
  en_KE: {
    h: 'en'
  },
  en_KI: {
    h: 'en'
  },
  en_KN: {
    h: 'en'
  },
  en_KY: {
    h: 'en'
  },
  en_LC: {
    h: 'en'
  },
  en_LR: {
    h: 'en'
  },
  en_LS: {
    h: 'en'
  },
  en_MG: {
    h: 'en'
  },
  en_MH: {
    h: 'en'
  },
  en_MO: {
    h: 'en'
  },
  en_MP: {
    h: 'en'
  },
  en_MS: {
    h: 'en'
  },
  en_MT: {
    h: 'en'
  },
  en_MU: {
    h: 'en'
  },
  en_MW: {
    h: 'en'
  },
  en_MY: {
    h: 'en'
  },
  en_NA: {
    h: 'en'
  },
  en_NF: {
    h: 'en'
  },
  en_NG: {
    h: 'en'
  },
  en_NL: {
    p: '! #,##0.00;! -#,##0.00',
    g: ',',
    d: '.'
  },
  en_NR: {
    h: 'en'
  },
  en_NU: {
    h: 'en'
  },
  en_NZ: {
    h: 'en'
  },
  en_PG: {
    h: 'en'
  },
  en_PH: {
    h: 'en'
  },
  en_PK: {
    h: 'en'
  },
  en_PN: {
    h: 'en'
  },
  en_PR: {
    h: 'en'
  },
  en_PW: {
    h: 'en'
  },
  en_RW: {
    h: 'en'
  },
  en_SB: {
    h: 'en'
  },
  en_SC: {
    h: 'en'
  },
  en_SD: {
    h: 'en'
  },
  en_SE: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  en_SG: {
    h: 'en'
  },
  en_SH: {
    h: 'en'
  },
  en_SI: {
    h: 'en'
  },
  en_SL: {
    h: 'en'
  },
  en_SS: {
    h: 'en'
  },
  en_SX: {
    h: 'en'
  },
  en_SZ: {
    h: 'en'
  },
  en_TC: {
    h: 'en'
  },
  en_TK: {
    h: 'en'
  },
  en_TO: {
    h: 'en'
  },
  en_TT: {
    h: 'en'
  },
  en_TV: {
    h: 'en'
  },
  en_TZ: {
    h: 'en'
  },
  en_UG: {
    h: 'en'
  },
  en_UM: {
    h: 'en'
  },
  en_US: {
    h: 'en'
  },
  en_US_POSIX: {
    p: '! #0.00',
    g: ',',
    d: '.'
  },
  en_VC: {
    h: 'en'
  },
  en_VG: {
    h: 'en'
  },
  en_VI: {
    h: 'en'
  },
  en_VU: {
    h: 'en'
  },
  en_WS: {
    h: 'en'
  },
  en_ZA: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  en_ZM: {
    h: 'en'
  },
  en_ZW: {
    h: 'en'
  },
  eo: {
    p: '!#,##0.00',
    g: ' ',
    d: ','
  },
  eo_001: {
    h: 'eo'
  },
  es: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  es_419: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  es_AR: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_BO: {
    h: 'es'
  },
  es_BR: {
    h: 'es'
  },
  es_CL: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_CO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_CR: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  es_CU: {
    h: 'es'
  },
  es_DO: {
    h: 'es'
  },
  es_EA: {
    h: 'es'
  },
  es_EC: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  es_ES: {
    h: 'es'
  },
  es_GQ: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  es_GT: {
    h: 'es'
  },
  es_HN: {
    h: 'es'
  },
  es_IC: {
    h: 'es'
  },
  es_MX: {
    h: 'es'
  },
  es_NI: {
    h: 'es'
  },
  es_PA: {
    h: 'es'
  },
  es_PE: {
    h: 'es'
  },
  es_PH: {
    h: 'es'
  },
  es_PR: {
    h: 'es'
  },
  es_PY: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  es_SV: {
    h: 'es'
  },
  es_US: {
    h: 'es'
  },
  es_UY: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  es_VE: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  et: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  et_EE: {
    h: 'et'
  },
  eu: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  eu_ES: {
    h: 'eu'
  },
  ewo: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ewo_CM: {
    h: 'ewo'
  },
  fa: {
    p: '‎!#,##0.00',
    g: ',',
    d: '.'
  },
  fa_AF: {
    h: 'fa'
  },
  fa_IR: {
    h: 'fa'
  },
  ff: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ff_CM: {
    h: 'ff'
  },
  ff_GN: {
    h: 'ff'
  },
  ff_MR: {
    h: 'ff'
  },
  ff_SN: {
    h: 'ff'
  },
  fi: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fi_FI: {
    h: 'fi'
  },
  fil: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  fil_PH: {
    h: 'fil'
  },
  fo: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fo_DK: {
    h: 'fo'
  },
  fo_FO: {
    h: 'fo'
  },
  fr: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  fr_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_BF: {
    h: 'fr'
  },
  fr_BI: {
    h: 'fr'
  },
  fr_BJ: {
    h: 'fr'
  },
  fr_BL: {
    h: 'fr'
  },
  fr_CA: {
    h: 'fr'
  },
  fr_CD: {
    h: 'fr'
  },
  fr_CF: {
    h: 'fr'
  },
  fr_CG: {
    h: 'fr'
  },
  fr_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: ' ',
    d: '.'
  },
  fr_CI: {
    h: 'fr'
  },
  fr_CM: {
    h: 'fr'
  },
  fr_DJ: {
    h: 'fr'
  },
  fr_DZ: {
    h: 'fr'
  },
  fr_FR: {
    h: 'fr'
  },
  fr_GA: {
    h: 'fr'
  },
  fr_GF: {
    h: 'fr'
  },
  fr_GN: {
    h: 'fr'
  },
  fr_GP: {
    h: 'fr'
  },
  fr_GQ: {
    h: 'fr'
  },
  fr_HT: {
    h: 'fr'
  },
  fr_KM: {
    h: 'fr'
  },
  fr_LU: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MA: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  fr_MC: {
    h: 'fr'
  },
  fr_MF: {
    h: 'fr'
  },
  fr_MG: {
    h: 'fr'
  },
  fr_ML: {
    h: 'fr'
  },
  fr_MQ: {
    h: 'fr'
  },
  fr_MR: {
    h: 'fr'
  },
  fr_MU: {
    h: 'fr'
  },
  fr_NC: {
    h: 'fr'
  },
  fr_NE: {
    h: 'fr'
  },
  fr_PF: {
    h: 'fr'
  },
  fr_PM: {
    h: 'fr'
  },
  fr_RE: {
    h: 'fr'
  },
  fr_RW: {
    h: 'fr'
  },
  fr_SC: {
    h: 'fr'
  },
  fr_SN: {
    h: 'fr'
  },
  fr_SY: {
    h: 'fr'
  },
  fr_TD: {
    h: 'fr'
  },
  fr_TG: {
    h: 'fr'
  },
  fr_TN: {
    h: 'fr'
  },
  fr_VU: {
    h: 'fr'
  },
  fr_WF: {
    h: 'fr'
  },
  fr_YT: {
    h: 'fr'
  },
  fur: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  fur_IT: {
    h: 'fur'
  },
  fy: {
    p: '! #,##0.00;! #,##0.00-',
    g: '.',
    d: ','
  },
  fy_NL: {
    h: 'fy'
  },
  ga: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ga_IE: {
    h: 'ga'
  },
  gd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gd_GB: {
    h: 'gd'
  },
  gl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  gl_ES: {
    h: 'gl'
  },
  gsw: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  gsw_CH: {
    h: 'gsw'
  },
  gsw_FR: {
    h: 'gsw'
  },
  gsw_LI: {
    h: 'gsw'
  },
  gu: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  gu_IN: {
    h: 'gu'
  },
  guz: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  guz_KE: {
    h: 'guz'
  },
  gv: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  gv_IM: {
    h: 'gv'
  },
  ha: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ha_GH: {
    h: 'ha'
  },
  ha_NE: {
    h: 'ha'
  },
  ha_NG: {
    h: 'ha'
  },
  haw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  haw_US: {
    h: 'haw'
  },
  he: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  he_IL: {
    h: 'he'
  },
  hi: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  hi_IN: {
    h: 'hi'
  },
  hr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hr_BA: {
    h: 'hr'
  },
  hr_HR: {
    h: 'hr'
  },
  hsb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  hsb_DE: {
    h: 'hsb'
  },
  hu: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  hu_HU: {
    h: 'hu'
  },
  hy: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  hy_AM: {
    h: 'hy'
  },
  id: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  id_ID: {
    h: 'id'
  },
  ig: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ig_NG: {
    h: 'ig'
  },
  ii: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ii_CN: {
    h: 'ii'
  },
  is: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  is_IS: {
    h: 'is'
  },
  it: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  it_CH: {
    p: '! #,##0.00;!-#,##0.00',
    g: '\'',
    d: '.'
  },
  it_IT: {
    h: 'it'
  },
  it_SM: {
    h: 'it'
  },
  ja: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ja_JP: {
    h: 'ja'
  },
  jgo: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  jgo_CM: {
    h: 'jgo'
  },
  jmc: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  jmc_TZ: {
    h: 'jmc'
  },
  ka: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ka_GE: {
    h: 'ka'
  },
  kab: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  kab_DZ: {
    h: 'kab'
  },
  kam: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kam_KE: {
    h: 'kam'
  },
  kde: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kde_TZ: {
    h: 'kde'
  },
  kea: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kea_CV: {
    h: 'kea'
  },
  khq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  khq_ML: {
    h: 'khq'
  },
  ki: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ki_KE: {
    h: 'ki'
  },
  kk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  kk_KZ: {
    h: 'kk'
  },
  kkj: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  kkj_CM: {
    h: 'kkj'
  },
  kl: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  kl_GL: {
    h: 'kl'
  },
  kln: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kln_KE: {
    h: 'kln'
  },
  km: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  km_KH: {
    h: 'km'
  },
  kn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kn_IN: {
    h: 'kn'
  },
  ko: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ko_KP: {
    h: 'ko'
  },
  ko_KR: {
    h: 'ko'
  },
  kok: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  kok_IN: {
    h: 'kok'
  },
  ks: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ks_IN: {
    h: 'ks'
  },
  ksb: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  ksb_TZ: {
    h: 'ksb'
  },
  ksf: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksf_CM: {
    h: 'ksf'
  },
  ksh: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ksh_DE: {
    h: 'ksh'
  },
  kw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  kw_GB: {
    h: 'kw'
  },
  ky: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ky_KG: {
    h: 'ky'
  },
  lag: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lag_TZ: {
    h: 'lag'
  },
  lb: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  lb_LU: {
    h: 'lb'
  },
  lg: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  lg_UG: {
    h: 'lg'
  },
  lkt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  lkt_US: {
    h: 'lkt'
  },
  ln: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ln_AO: {
    h: 'ln'
  },
  ln_CD: {
    h: 'ln'
  },
  ln_CF: {
    h: 'ln'
  },
  ln_CG: {
    h: 'ln'
  },
  lo: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  lo_LA: {
    h: 'lo'
  },
  lrc: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  lrc_IQ: {
    h: 'lrc'
  },
  lrc_IR: {
    h: 'lrc'
  },
  lt: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  lt_LT: {
    h: 'lt'
  },
  lu: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  lu_CD: {
    h: 'lu'
  },
  luo: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  luo_KE: {
    h: 'luo'
  },
  luy: {
    p: '!#,##0.00;!- #,##0.00',
    g: ',',
    d: '.'
  },
  luy_KE: {
    h: 'luy'
  },
  lv: {
    p: '#0.00 !',
    g: ' ',
    d: ','
  },
  lv_LV: {
    h: 'lv'
  },
  mas: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mas_KE: {
    h: 'mas'
  },
  mas_TZ: {
    h: 'mas'
  },
  mer: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mer_KE: {
    h: 'mer'
  },
  mfe: {
    p: '!#,##0.00',
    g: ' ',
    d: '.'
  },
  mfe_MU: {
    h: 'mfe'
  },
  mg: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mg_MG: {
    h: 'mg'
  },
  mgh: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mgh_MZ: {
    h: 'mgh'
  },
  mgo: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mgo_CM: {
    h: 'mgo'
  },
  mk: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  mk_MK: {
    h: 'mk'
  },
  ml: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ml_IN: {
    h: 'ml'
  },
  mn: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  mn_MN: {
    h: 'mn'
  },
  mr: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mr_IN: {
    h: 'mr'
  },
  ms: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ms_BN: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  ms_MY: {
    h: 'ms'
  },
  ms_SG: {
    h: 'ms'
  },
  mt: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mt_MT: {
    h: 'mt'
  },
  mua: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  mua_CM: {
    h: 'mua'
  },
  my: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  my_MM: {
    h: 'my'
  },
  mzn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  mzn_IR: {
    h: 'mzn'
  },
  naq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  naq_NA: {
    h: 'naq'
  },
  nb: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  nb_NO: {
    h: 'nb'
  },
  nb_SJ: {
    h: 'nb'
  },
  nd: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nd_ZW: {
    h: 'nd'
  },
  ne: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ne_IN: {
    h: 'ne'
  },
  ne_NP: {
    h: 'ne'
  },
  nl: {
    p: '! #,##0.00;! -#,##0.00',
    g: '.',
    d: ','
  },
  nl_AW: {
    h: 'nl'
  },
  nl_BE: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  nl_BQ: {
    h: 'nl'
  },
  nl_CW: {
    h: 'nl'
  },
  nl_NL: {
    h: 'nl'
  },
  nl_SR: {
    h: 'nl'
  },
  nl_SX: {
    h: 'nl'
  },
  nmg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nmg_CM: {
    h: 'nmg'
  },
  nn: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  nn_NO: {
    h: 'nn'
  },
  nnh: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  nnh_CM: {
    h: 'nnh'
  },
  nus: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nus_SS: {
    h: 'nus'
  },
  nyn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  nyn_UG: {
    h: 'nyn'
  },
  om: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  om_ET: {
    h: 'om'
  },
  om_KE: {
    h: 'om'
  },
  or: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  or_IN: {
    h: 'or'
  },
  os: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  os_GE: {
    h: 'os'
  },
  os_RU: {
    h: 'os'
  },
  pa: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  pa_Arab: {
    h: 'pa'
  },
  pa_Arab_PK: {
    h: 'pa'
  },
  pa_Guru: {
    h: 'pa'
  },
  pa_Guru_IN: {
    h: 'pa'
  },
  pl: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pl_PL: {
    h: 'pl'
  },
  prg: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  prg_001: {
    h: 'prg'
  },
  ps: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ps_AF: {
    h: 'ps'
  },
  pt: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  pt_AO: {
    h: 'pt'
  },
  pt_BR: {
    h: 'pt'
  },
  pt_CH: {
    h: 'pt'
  },
  pt_CV: {
    h: 'pt'
  },
  pt_GQ: {
    h: 'pt'
  },
  pt_GW: {
    h: 'pt'
  },
  pt_LU: {
    h: 'pt'
  },
  pt_MO: {
    h: 'pt'
  },
  pt_MZ: {
    h: 'pt'
  },
  pt_PT: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  pt_ST: {
    h: 'pt'
  },
  pt_TL: {
    h: 'pt'
  },
  qu: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  qu_BO: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  qu_EC: {
    h: 'qu'
  },
  qu_PE: {
    h: 'qu'
  },
  rm: {
    p: '#,##0.00 !',
    g: '’',
    d: '.'
  },
  rm_CH: {
    h: 'rm'
  },
  rn: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  rn_BI: {
    h: 'rn'
  },
  ro: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  ro_MD: {
    h: 'ro'
  },
  ro_RO: {
    h: 'ro'
  },
  rof: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  rof_TZ: {
    h: 'rof'
  },
  root: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ru: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  ru_BY: {
    h: 'ru'
  },
  ru_KG: {
    h: 'ru'
  },
  ru_KZ: {
    h: 'ru'
  },
  ru_MD: {
    h: 'ru'
  },
  ru_RU: {
    h: 'ru'
  },
  ru_UA: {
    h: 'ru'
  },
  rw: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  rw_RW: {
    h: 'rw'
  },
  rwk: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  rwk_TZ: {
    h: 'rwk'
  },
  sah: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sah_RU: {
    h: 'sah'
  },
  saq: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  saq_KE: {
    h: 'saq'
  },
  sbp: {
    p: '#,##0.00!',
    g: ',',
    d: '.'
  },
  sbp_TZ: {
    h: 'sbp'
  },
  se: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  se_FI: {
    h: 'se'
  },
  se_NO: {
    h: 'se'
  },
  se_SE: {
    h: 'se'
  },
  seh: {
    p: '#,##0.00!',
    g: '.',
    d: ','
  },
  seh_MZ: {
    h: 'seh'
  },
  ses: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  ses_ML: {
    h: 'ses'
  },
  sg: {
    p: '!#,##0.00;!-#,##0.00',
    g: '.',
    d: ','
  },
  sg_CF: {
    h: 'sg'
  },
  shi: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  shi_Latn: {
    h: 'shi'
  },
  shi_Latn_MA: {
    h: 'shi'
  },
  shi_Tfng: {
    h: 'shi'
  },
  shi_Tfng_MA: {
    h: 'shi'
  },
  si: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  si_LK: {
    h: 'si'
  },
  sk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sk_SK: {
    h: 'sk'
  },
  sl: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sl_SI: {
    h: 'sl'
  },
  smn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  smn_FI: {
    h: 'smn'
  },
  sn: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sn_ZW: {
    h: 'sn'
  },
  so: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  so_DJ: {
    h: 'so'
  },
  so_ET: {
    h: 'so'
  },
  so_KE: {
    h: 'so'
  },
  so_SO: {
    h: 'so'
  },
  sq: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sq_AL: {
    h: 'sq'
  },
  sq_MK: {
    h: 'sq'
  },
  sq_XK: {
    h: 'sq'
  },
  sr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  sr_Cyrl: {
    h: 'sr'
  },
  sr_Cyrl_BA: {
    h: 'sr'
  },
  sr_Cyrl_ME: {
    h: 'sr'
  },
  sr_Cyrl_RS: {
    h: 'sr'
  },
  sr_Cyrl_XK: {
    h: 'sr'
  },
  sr_Latn: {
    h: 'sr'
  },
  sr_Latn_BA: {
    h: 'sr'
  },
  sr_Latn_ME: {
    h: 'sr'
  },
  sr_Latn_RS: {
    h: 'sr'
  },
  sr_Latn_XK: {
    h: 'sr'
  },
  sv: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  sv_AX: {
    h: 'sv'
  },
  sv_FI: {
    h: 'sv'
  },
  sv_SE: {
    h: 'sv'
  },
  sw: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  sw_CD: {
    p: '!#,##0.00',
    g: '.',
    d: ','
  },
  sw_KE: {
    h: 'sw'
  },
  sw_TZ: {
    h: 'sw'
  },
  sw_UG: {
    h: 'sw'
  },
  ta: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ta_IN: {
    h: 'ta'
  },
  ta_LK: {
    h: 'ta'
  },
  ta_MY: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  ta_SG: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  te: {
    p: '!#,##,##0.00',
    g: ',',
    d: '.'
  },
  te_IN: {
    h: 'te'
  },
  teo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  teo_KE: {
    h: 'teo'
  },
  teo_UG: {
    h: 'teo'
  },
  th: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  th_TH: {
    h: 'th'
  },
  ti: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ti_ER: {
    h: 'ti'
  },
  ti_ET: {
    h: 'ti'
  },
  tk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tk_TM: {
    h: 'tk'
  },
  to: {
    p: '! #,##0.00',
    g: ',',
    d: '.'
  },
  to_TO: {
    h: 'to'
  },
  tr: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  tr_CY: {
    h: 'tr'
  },
  tr_TR: {
    h: 'tr'
  },
  twq: {
    p: '#,##0.00!',
    g: ' ',
    d: '.'
  },
  twq_NE: {
    h: 'twq'
  },
  tzm: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  tzm_MA: {
    h: 'tzm'
  },
  ug: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  ug_CN: {
    h: 'ug'
  },
  uk: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uk_UA: {
    h: 'uk'
  },
  ur: {
    p: '! #,##,##0.00',
    g: ',',
    d: '.'
  },
  ur_IN: {
    h: 'ur'
  },
  ur_PK: {
    h: 'ur'
  },
  uz: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  uz_Arab: {
    p: '#,##0.00 !',
    g: '.',
    d: ','
  },
  uz_Arab_AF: {
    h: 'uz'
  },
  uz_Cyrl: {
    p: '! #,##0.00',
    g: ' ',
    d: ','
  },
  uz_Cyrl_UZ: {
    h: 'uz'
  },
  uz_Latn: {
    h: 'uz'
  },
  uz_Latn_UZ: {
    h: 'uz'
  },
  vai: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vai_Latn: {
    h: 'vai'
  },
  vai_Latn_LR: {
    h: 'vai'
  },
  vai_Vaii: {
    h: 'vai'
  },
  vai_Vaii_LR: {
    h: 'vai'
  },
  vi: {
    p: '! #,##0.00',
    g: '.',
    d: ','
  },
  vi_VN: {
    h: 'vi'
  },
  vo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vo_001: {
    h: 'vo'
  },
  vun: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  vun_TZ: {
    h: 'vun'
  },
  wae: {
    p: '!#,##0.00',
    g: '’',
    d: ','
  },
  wae_CH: {
    h: 'wae'
  },
  xog: {
    p: '#,##0.00 !',
    g: ',',
    d: '.'
  },
  xog_UG: {
    h: 'xog'
  },
  yav: {
    p: '#,##0.00 !',
    g: ' ',
    d: ','
  },
  yav_CM: {
    h: 'yav'
  },
  yi: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yi_001: {
    h: 'yi'
  },
  yo: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yo_BJ: {
    h: 'yo'
  },
  yo_NG: {
    h: 'yo'
  },
  yue: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  yue_HK: {
    h: 'yue'
  },
  zgh: {
    p: '#,##0.00!',
    g: ' ',
    d: ','
  },
  zgh_MA: {
    h: 'zgh'
  },
  zh: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zh_Hans: {
    h: 'zh'
  },
  zh_Hans_CN: {
    h: 'zh'
  },
  zh_Hans_HK: {
    h: 'zh'
  },
  zh_Hans_MO: {
    h: 'zh'
  },
  zh_Hans_SG: {
    h: 'zh'
  },
  zh_Hant: {
    h: 'zh'
  },
  zh_Hant_HK: {
    h: 'zh'
  },
  zh_Hant_MO: {
    h: 'zh'
  },
  zh_Hant_TW: {
    h: 'zh'
  },
  zu: {
    p: '!#,##0.00',
    g: ',',
    d: '.'
  },
  zu_ZA: {
    h: 'zu'
  }
};

var defaultLocales = {
  AED: 'ar_AE',
  AFN: 'fa_AF',
  ALL: 'sq',
  AMD: 'hy',
  ANG: 'nl',
  AOA: 'pt_AO',
  ARS: 'es_AR',
  AUD: 'en',
  AWG: 'nl_AW',
  AZN: 'az',
  BAM: 'bs',
  BBD: 'en_BB',
  BDT: 'bn_BD',
  BGN: 'bg',
  BHD: 'ar_BH',
  BIF: 'fr_BI',
  BMD: 'en_BM',
  BND: 'ms_BN',
  BOB: 'es_BO',
  BRL: 'pt_BR',
  BSD: 'en_BS',
  BTN: 'dz',
  BWP: 'en_BW',
  BYR: 'be',
  BZD: 'en_BZ',
  CAD: 'en_CA',
  CDF: 'fr_CD',
  CHF: 'de_CH',
  CLP: 'es_CL',
  CNY: 'zh_Hans_CN',
  COP: 'es_CO',
  CRC: 'es_CR',
  CUP: 'es_CU',
  CVE: 'pt_CV',
  CZK: 'cs',
  DJF: 'fr_DJ',
  DKK: 'da_DK',
  DOP: 'es_DO',
  DZD: 'ar_DZ',
  EGP: 'ar_EG',
  ERN: 'ti_ER',
  ETB: 'am',
  EUR: 'de',
  FJD: 'en_FJ',
  FKP: 'en_FK',
  GBP: 'en',
  GEL: 'ka',
  GHS: 'en_GH',
  GIP: 'en_GI',
  GMD: 'en_GM',
  GNF: 'fr_GN',
  GTQ: 'es_GT',
  GYD: 'en_GY',
  HKD: 'zh_Hans_HK',
  HNL: 'es_HN',
  HRK: 'hr_HR',
  HTG: 'en',
  HUF: 'hu_HU',
  IDR: 'id',
  ILS: 'he',
  INR: 'en_IN',
  IQD: 'ar_IQ',
  IRR: 'fa_IR',
  ISK: 'is',
  JMD: 'en_JM',
  JOD: 'ar_JO',
  JPY: 'ja',
  KES: 'en_KE',
  KGS: 'ky',
  KHR: 'km',
  KMF: 'ar',
  KPW: 'ko_KP',
  KRW: 'ko_KR',
  KWD: 'ar_KW',
  KYD: 'en_KY',
  KZT: 'kk',
  LAK: 'lo',
  LBP: 'ar_LB',
  LKR: 'si',
  LRD: 'en_LR',
  LSL: 'en_LS',
  LYD: 'ar_LY',
  MAD: 'ar',
  MDL: 'ro',
  MGA: 'fr_MG',
  MKD: 'mk',
  MMK: 'my',
  MNT: 'mn',
  MOP: 'zh',
  MRO: 'ar_MR',
  MUR: 'en_MU',
  MVR: 'en',
  MWK: 'en',
  MXN: 'es_MX',
  MYR: 'ms_MY',
  MZN: 'pt_MZ',
  NAD: 'en_NA',
  NGN: 'en_NG',
  NIO: 'es_NI',
  NOK: 'nb_NO',
  NPR: 'ne',
  NZD: 'en_NZ',
  OMR: 'ar_OM',
  PAB: 'es_PA',
  PEN: 'es_PE',
  PGK: 'en_PG',
  PHP: 'fil',
  PKR: 'ur_PK',
  PLN: 'pl',
  PYG: 'es_PY',
  QAR: 'ar_QA',
  RON: 'ro',
  RSD: 'sr',
  RUB: 'ru',
  RWF: 'rw',
  SAR: 'ar_SA',
  SBD: 'en_SB',
  SCR: 'en_SC',
  SDG: 'ar_SD',
  SEK: 'sv_SE',
  SGD: 'en_SG',
  SHP: 'en_SH',
  SLL: 'en_SL',
  SOS: 'so_SO',
  SRD: 'nl_SR',
  SSP: 'en',
  STD: 'pt_ST',
  SYP: 'ar_SY',
  SZL: 'en_SZ',
  THB: 'th',
  TJS: 'en',
  TMT: 'tk',
  TND: 'ar_TN',
  TOP: 'to',
  TRY: 'tr_TR',
  TTD: 'en_TT',
  TWD: 'zh_Hant_TW',
  TZS: 'sw_TZ',
  UAH: 'uk',
  UGX: 'en_UG',
  USD: 'en_US',
  UYU: 'es_UY',
  UZS: 'uz',
  VEF: 'es_VE',
  VND: 'vi',
  VUV: 'en_BI',
  WST: 'en_AS',
  XAF: 'fr',
  XCD: 'en',
  XOF: 'fr',
  XPF: 'fr_PF',
  YER: 'ar_YE',
  ZAR: 'zu',
  ZMW: 'en_ZM',
  ZWL: 'en_ZW'
};

var symbols = {
  'AED': 'د.إ',
  'AFN': '؋',
  'ALL': 'L',
  'AMD': 'AMD',
  'ANG': 'ƒ',
  'AOA': 'Kz',
  'ARS': '$',
  'AUD': '$',
  'AWG': 'ƒ',
  'AZN': '₼',
  'BAM': 'KM',
  'BBD': '$',
  'BDT': '৳',
  'BGN': 'лв',
  'BHD': '.د.ب',
  'BIF': 'FBu',
  'BMD': '$',
  'BND': '$',
  'BOB': 'Bs.',
  'BRL': 'R$',
  'BSD': '$',
  'BTC': '฿',
  'BTN': 'Nu.',
  'BWP': 'P',
  'BYR': 'p.',
  'BZD': 'BZ$',
  'CAD': '$',
  'CDF': 'FC',
  'CHF': 'Fr.',
  'CLP': '$',
  'CNY': '¥',
  'COP': '$',
  'CRC': '₡',
  'CUC': '$',
  'CUP': '₱',
  'CVE': '$',
  'CZK': 'Kč',
  'DJF': 'Fdj',
  'DKK': 'kr',
  'DOP': 'RD$',
  'DZD': 'دج',
  'EEK': 'kr',
  'EGP': '£',
  'ERN': 'Nfk',
  'ETB': 'Br',
  'ETH': 'Ξ',
  'EUR': '€',
  'FJD': '$',
  'FKP': '£',
  'GBP': '£',
  'GEL': '₾',
  'GGP': '£',
  'GHC': '₵',
  'GHS': 'GH₵',
  'GIP': '£',
  'GMD': 'D',
  'GNF': 'FG',
  'GTQ': 'Q',
  'GYD': '$',
  'HKD': '$',
  'HNL': 'L',
  'HRK': 'kn',
  'HTG': 'G',
  'HUF': 'Ft',
  'IDR': 'Rp',
  'ILS': '₪',
  'IMP': '£',
  'INR': '₹',
  'IQD': 'ع.د',
  'IRR': '﷼',
  'ISK': 'kr',
  'JEP': '£',
  'JMD': 'J$',
  'JOD': 'JD',
  'JPY': '¥',
  'KES': 'KSh',
  'KGS': 'лв',
  'KHR': '៛',
  'KMF': 'CF',
  'KPW': '₩',
  'KRW': '₩',
  'KWD': 'KD',
  'KYD': '$',
  'KZT': '₸',
  'LAK': '₭',
  'LBP': '£',
  'LKR': '₨',
  'LRD': '$',
  'LSL': 'M',
  'LTC': 'Ł',
  'LTL': 'Lt',
  'LVL': 'Ls',
  'LYD': 'LD',
  'MAD': 'MAD',
  'MDL': 'lei',
  'MGA': 'Ar',
  'MKD': 'ден',
  'MMK': 'K',
  'MNT': '₮',
  'MOP': 'MOP$',
  'MUR': '₨',
  'MVR': 'Rf',
  'MWK': 'MK',
  'MXN': '$',
  'MYR': 'RM',
  'MZN': 'MT',
  'NAD': '$',
  'NGN': '₦',
  'NIO': 'C$',
  'NOK': 'kr',
  'NPR': '₨',
  'NZD': '$',
  'OMR': '﷼',
  'PAB': 'B/.',
  'PEN': 'S/.',
  'PGK': 'K',
  'PHP': '₱',
  'PKR': '₨',
  'PLN': 'zł',
  'PYG': 'Gs',
  'QAR': '﷼',
  'RMB': '￥',
  'RON': 'lei',
  'RSD': 'Дин.',
  'RUB': '₽',
  'RWF': 'R₣',
  'SAR': '﷼',
  'SBD': '$',
  'SCR': '₨',
  'SDG': 'ج.س.',
  'SEK': 'kr',
  'SGD': '$',
  'SHP': '£',
  'SLL': 'Le',
  'SOS': 'S',
  'SRD': '$',
  'SSP': '£',
  'STD': 'Db',
  'SVC': '$',
  'SYP': '£',
  'SZL': 'E',
  'THB': '฿',
  'TJS': 'SM',
  'TMT': 'T',
  'TND': 'د.ت',
  'TOP': 'T$',
  'TRL': '₤',
  'TRY': '₺',
  'TTD': 'TT$',
  'TVD': '$',
  'TWD': 'NT$',
  'TZS': 'TSh',
  'UAH': '₴',
  'UGX': 'USh',
  'USD': '$',
  'UYU': '$U',
  'UZS': 'лв',
  'VEF': 'Bs',
  'VND': '₫',
  'VUV': 'VT',
  'WST': 'WS$',
  'XAF': 'FCFA',
  'XBT': 'Ƀ',
  'XCD': '$',
  'XOF': 'CFA',
  'XPF': '₣',
  'YER': '﷼',
  'ZAR': 'R',
  'ZWD': 'Z$'
};

var ReactCurrencyFormatter = function ReactCurrencyFormatter(props) {
  var getFormatter = function getFormatter(options) {
    var locale = void 0,
        currency = void 0,
        symbol = void 0,
        pattern = void 0,
        decimal = void 0,
        group = void 0;

    // Helper Functions
    var isUndefined = function isUndefined(o) {
      return typeof o === 'undefined';
    };

    var toFixed = function toFixed(n, precision) {
      return (+(Math.round(+(n + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
    };

    // Perform checks on inputs and set up defaults as needed (defaults to en, USD)
    if (isUndefined(options)) {
      options = {};
    }

    currency = isUndefined(options.currency) ? 'USD' : options.currency.toUpperCase();
    locale = isUndefined(options.locale) ? locales[defaultLocales[currency]] : locales[options.locale];

    if (!isUndefined(locale.h)) locale = locales[locale.h]; // Locale inheritance

    symbol = isUndefined(options.symbol) ? symbols[currency] : options.symbol;

    if (isUndefined(symbol)) symbol = currency; // In case we don't have the symbol, just use the ccy code

    pattern = isUndefined(options.pattern) ? locale.p : options.pattern;
    decimal = isUndefined(options.decimal) ? locale.d : options.decimal;
    group = isUndefined(options.group) ? locale.g : options.group;

    //console.log(locale);

    // encodePattern Function - returns a few simple characteristics of the pattern provided
    var encodePattern = function encodePattern(pattern) {
      var decimalPlaces = 0;
      var frontPadding = '';
      var backPadding = '';
      var groupLengths = [];

      //console.log(pattern);

      var patternStarted = false;
      var decimalsStarted = false;
      var patternEnded = false;

      var currentGroupLength = 0;
      var zeroLength = 0;

      for (var i = 0; i < pattern.length; ++i) {
        var c = pattern[i];

        if (!patternStarted && ['#', '0', ',', '.'].indexOf(c) > -1) {
          patternStarted = true;
        }

        if (!patternStarted) {
          frontPadding += c;
        }

        switch (c) {
          case '#':
            ++currentGroupLength;
            break;

          case '0':
            if (decimalsStarted) {
              ++decimalPlaces;
            } else {
              ++currentGroupLength;++zeroLength;
            }
            break;

          case ',':
            groupLengths.push(currentGroupLength);
            currentGroupLength = 0;
            break;

          case '.':
            groupLengths.push(currentGroupLength);
            decimalsStarted = true;
            break;
        }

        if (patternStarted && !(['#', '0', ',', '.'].indexOf(c) > -1)) {
          patternEnded = true;

          if (!decimalsStarted) {
            groupLengths.push(currentGroupLength);
          }
        }

        if (patternEnded) {
          backPadding += c;
        }
      }

      var encodedPattern = {
        decimalPlaces: decimalPlaces,
        frontPadding: frontPadding,
        backPadding: backPadding,
        groupLengths: groupLengths,
        zeroLength: zeroLength
      };

      return encodedPattern;
    };

    // Zero Padding helper function
    var pad = function pad(n, width) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    };

    // Format function
    var format = function format(n, f) {
      var formattedNumber = toFixed(Math.abs(n), f.decimalPlaces);

      var splitNumber = formattedNumber.split(".");

      // i.e. we actually have some sort of grouping in the values
      if (f.groupLengths.length > 1) {
        var segment = "";
        var cursor = splitNumber[0].length;
        var groupIndex = f.groupLengths.length - 1;

        while (cursor > 0) {
          if (groupIndex <= 0) {
            groupIndex = 1;
          } // Always reset to the first group length if the number is big

          var currentGroupLength = f.groupLengths[groupIndex];

          var start = cursor - currentGroupLength;

          segment = splitNumber[0].substring(start, cursor) + f.group + segment;

          cursor -= currentGroupLength;

          --groupIndex;
        }

        segment = segment.substring(0, segment.length - 1);
        //console.log(segment);
      }

      if (segment.length < f.zeroLength) {
        segment = pad(segment, f.zeroLength);
      }

      var formattedNumber = f.frontPadding + segment + (isUndefined(splitNumber[1]) ? '' : f.decimal + splitNumber[1]) + f.backPadding;

      return formattedNumber.replace('!', symbol);
    };

    // Use encode function to work out pattern
    var patternArray = pattern.split(";");
    var positiveFormat = encodePattern(patternArray[0]);

    positiveFormat.symbol = symbol;
    positiveFormat.decimal = decimal;
    positiveFormat.group = group;

    var negativeFormat = isUndefined(patternArray[1]) ? encodePattern("-" + patternArray[0]) : encodePattern(patternArray[1]);

    negativeFormat.symbol = symbol;
    negativeFormat.decimal = decimal;
    negativeFormat.group = group;

    var zero = isUndefined(patternArray[2]) ? format(0, positiveFormat) : patternArray[2];

    if (!isUndefined(patternArray[2])) {
      zeroFormat = patternArray[2];
    }

    return function (n) {
      var formattedNumber = void 0;
      n = Number(n);
      if (n > 0) {
        formattedNumber = format(n, positiveFormat);
      } else if (n == 0) {
        formattedNumber = zero.replace('!', symbol);
      } else {
        formattedNumber = format(n, negativeFormat);
      }
      return formattedNumber;
    };
  };

  var format = function format(number, options) {
    var formatterFunction = getFormatter(options);

    return formatterFunction(number);
  };

  var quantity = props.quantity,
      currency = props.currency,
      symbol = props.symbol,
      locale = props.locale,
      decimal = props.decimal,
      group = props.group,
      pattern = props.pattern;


  return format(props.quantity, {
    currency: currency,
    symbol: symbol,
    locale: locale,
    decimal: decimal,
    group: group,
    pattern: pattern
  });
};

ReactCurrencyFormatter.defaultProps = {
  currency: 'USD'
};

ReactCurrencyFormatter.propTypes = {
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string,
  symbol: PropTypes.string,
  locale: PropTypes.string,
  decimal: PropTypes.string,
  group: PropTypes.string,
  pattern: PropTypes.string
};

return ReactCurrencyFormatter;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXIvZGlzdC9yZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXIudW1kLmpzIl0sIm5hbWVzIjpbIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdEZlZWQiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsInNldHJhdGluZyIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxTQUFTQyxXQUFULE9BQXlFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbERDLEVBQWtELFFBQWxEQSxFQUFrRDtBQUFBLE1BQTlDQyxLQUE4QyxRQUE5Q0EsS0FBOEM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ3pDQywrQ0FBUSxDQUNoQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQlosVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTNDLENBQVgsSUFBNERBLFVBRDVCLENBRGlDO0FBQUEsTUFDOURZLE1BRDhEO0FBQUEsTUFDdERDLFNBRHNEOztBQUFBLG1CQUtsREwsK0NBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBTDBDO0FBQUEsTUFLOURHLFFBTDhEOztBQU9yRSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUlSO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsV0FBSyxFQUFFLEdBQTFCO0FBQStCLFlBQU0sRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0tZLEtBQUssQ0FBQ0gsTUFBRCxDQUFMLENBQ0lJLElBREosR0FFSUMsR0FGSixDQUVRLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNELDhEQUFDLDREQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDO0FBQUEsT0FGUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQVdJO0FBQUEsZ0JBQUlkO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXZCUUosVzs7S0FBQUEsVztBQXlCVCwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBLENBQUMsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsNENBQU8sR0FBRyxtQkFBTyxDQUFDLHNEQUFZO0FBQy9ILENBQUMsQ0FDd0U7QUFDekUsQ0FBQyxvQ0FBb0M7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixvQkFBb0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTgwNWUwY2U5YzY1YmMxODc0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIlxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gICAgY29uc3QgW3JhdGluZywgc2V0cmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPntjYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWRcclxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3Byb3AtdHlwZXMnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydyZWFjdCcsICdwcm9wLXR5cGVzJ10sIGZhY3RvcnkpIDpcblx0KGdsb2JhbC5yZWFjdEN1cnJlbmN5Rm9ybWF0dGVyID0gZmFjdG9yeShnbG9iYWwuUmVhY3QsZ2xvYmFsLlByb3BUeXBlcykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKHJlYWN0LFByb3BUeXBlcykgeyAndXNlIHN0cmljdCc7XG5cbnJlYWN0ID0gcmVhY3QgJiYgcmVhY3QuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IHJlYWN0WydkZWZhdWx0J10gOiByZWFjdDtcblByb3BUeXBlcyA9IFByb3BUeXBlcyAmJiBQcm9wVHlwZXMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFByb3BUeXBlc1snZGVmYXVsdCddIDogUHJvcFR5cGVzO1xuXG52YXIgbG9jYWxlcyA9IHtcbiAgYWY6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGFmX05BOiB7XG4gICAgaDogJ2FmJ1xuICB9LFxuICBhZl9aQToge1xuICAgIGg6ICdhZidcbiAgfSxcbiAgYWdxOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhZ3FfQ006IHtcbiAgICBoOiAnYWdxJ1xuICB9LFxuICBhazoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYWtfR0g6IHtcbiAgICBoOiAnYWsnXG4gIH0sXG4gIGFtOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBhbV9FVDoge1xuICAgIGg6ICdhbSdcbiAgfSxcbiAgYXI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBhcl8wMDE6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0FFOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9CSDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfREo6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0RaOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfRUc6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0VIOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9FUjoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfSUw6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0lROiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9KTzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfS006IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX0tXOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9MQjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX0xZOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfTUE6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBhcl9NUjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFyX09NOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9QUzoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfUUE6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NBOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TRDoge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfU086IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1NTOiB7XG4gICAgaDogJ2FyJ1xuICB9LFxuICBhcl9TWToge1xuICAgIGg6ICdhcidcbiAgfSxcbiAgYXJfVEQ6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFyX1ROOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXJfWUU6IHtcbiAgICBoOiAnYXInXG4gIH0sXG4gIGFzOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgYXNfSU46IHtcbiAgICBoOiAnYXMnXG4gIH0sXG4gIGFzYToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGFzYV9UWjoge1xuICAgIGg6ICdhc2EnXG4gIH0sXG4gIGFzdDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGFzdF9FUzoge1xuICAgIGg6ICdhc3QnXG4gIH0sXG4gIGF6OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYXpfQ3lybDoge1xuICAgIGg6ICdheidcbiAgfSxcbiAgYXpfQ3lybF9BWjoge1xuICAgIGg6ICdheidcbiAgfSxcbiAgYXpfTGF0bjoge1xuICAgIGg6ICdheidcbiAgfSxcbiAgYXpfTGF0bl9BWjoge1xuICAgIGg6ICdheidcbiAgfSxcbiAgYmFzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYmFzX0NNOiB7XG4gICAgaDogJ2JhcydcbiAgfSxcbiAgYmU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBiZV9CWToge1xuICAgIGg6ICdiZSdcbiAgfSxcbiAgYmVtOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBiZW1fWk06IHtcbiAgICBoOiAnYmVtJ1xuICB9LFxuICBiZXo6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJlel9UWjoge1xuICAgIGg6ICdiZXonXG4gIH0sXG4gIGJnOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYmdfQkc6IHtcbiAgICBoOiAnYmcnXG4gIH0sXG4gIGJtOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBibV9NTDoge1xuICAgIGg6ICdibSdcbiAgfSxcbiAgYm46IHtcbiAgICBwOiAnIywjIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJuX0JEOiB7XG4gICAgaDogJ2JuJ1xuICB9LFxuICBibl9JTjoge1xuICAgIGg6ICdibidcbiAgfSxcbiAgYm86IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBib19DTjoge1xuICAgIGg6ICdibydcbiAgfSxcbiAgYm9fSU46IHtcbiAgICBoOiAnYm8nXG4gIH0sXG4gIGJyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYnJfRlI6IHtcbiAgICBoOiAnYnInXG4gIH0sXG4gIGJyeDoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGJyeF9JTjoge1xuICAgIGg6ICdicngnXG4gIH0sXG4gIGJzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgYnNfQ3lybDoge1xuICAgIGg6ICdicydcbiAgfSxcbiAgYnNfQ3lybF9CQToge1xuICAgIGg6ICdicydcbiAgfSxcbiAgYnNfTGF0bjoge1xuICAgIGg6ICdicydcbiAgfSxcbiAgYnNfTGF0bl9CQToge1xuICAgIGg6ICdicydcbiAgfSxcbiAgY2E6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBjYV9BRDoge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2FfRVM6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNhX0VTX1ZBTEVOQ0lBOiB7XG4gICAgaDogJ2NhJ1xuICB9LFxuICBjYV9GUjoge1xuICAgIGg6ICdjYSdcbiAgfSxcbiAgY2FfSVQ6IHtcbiAgICBoOiAnY2EnXG4gIH0sXG4gIGNlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY2VfUlU6IHtcbiAgICBoOiAnY2UnXG4gIH0sXG4gIGNnZzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgY2dnX1VHOiB7XG4gICAgaDogJ2NnZydcbiAgfSxcbiAgY2hyOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBjaHJfVVM6IHtcbiAgICBoOiAnY2hyJ1xuICB9LFxuICBja2I6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGNrYl9JUToge1xuICAgIGg6ICdja2InXG4gIH0sXG4gIGNrYl9JUjoge1xuICAgIGg6ICdja2InXG4gIH0sXG4gIGNzOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgY3NfQ1o6IHtcbiAgICBoOiAnY3MnXG4gIH0sXG4gIGN1OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgY3VfUlU6IHtcbiAgICBoOiAnY3UnXG4gIH0sXG4gIGN5OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBjeV9HQjoge1xuICAgIGg6ICdjeSdcbiAgfSxcbiAgZGE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkYV9ESzoge1xuICAgIGg6ICdkYSdcbiAgfSxcbiAgZGFfR0w6IHtcbiAgICBoOiAnZGEnXG4gIH0sXG4gIGRhdjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZGF2X0tFOiB7XG4gICAgaDogJ2RhdidcbiAgfSxcbiAgZGU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBkZV9BVDoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGRlX0JFOiB7XG4gICAgaDogJ2RlJ1xuICB9LFxuICBkZV9DSDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICdcXCcnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkZV9ERToge1xuICAgIGg6ICdkZSdcbiAgfSxcbiAgZGVfTEk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJ1xcJycsXG4gICAgZDogJy4nXG4gIH0sXG4gIGRlX0xVOiB7XG4gICAgaDogJ2RlJ1xuICB9LFxuICBkamU6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGRqZV9ORToge1xuICAgIGg6ICdkamUnXG4gIH0sXG4gIGRzYjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGRzYl9ERToge1xuICAgIGg6ICdkc2InXG4gIH0sXG4gIGR1YToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGR1YV9DTToge1xuICAgIGg6ICdkdWEnXG4gIH0sXG4gIGR5bzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGR5b19TTjoge1xuICAgIGg6ICdkeW8nXG4gIH0sXG4gIGR6OiB7XG4gICAgcDogJyEjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBkel9CVDoge1xuICAgIGg6ICdkeidcbiAgfSxcbiAgZWJ1OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlYnVfS0U6IHtcbiAgICBoOiAnZWJ1J1xuICB9LFxuICBlZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZWVfR0g6IHtcbiAgICBoOiAnZWUnXG4gIH0sXG4gIGVlX1RHOiB7XG4gICAgaDogJ2VlJ1xuICB9LFxuICBlbDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVsX0NZOiB7XG4gICAgaDogJ2VsJ1xuICB9LFxuICBlbF9HUjoge1xuICAgIGg6ICdlbCdcbiAgfSxcbiAgZW46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuXzAwMToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fMTUwOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZW5fQUc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0FJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9BUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQVQ6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9BVToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQkI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JFOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZW5fQkk6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9CUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQlc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0JaOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DQToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ0M6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NIOiB7XG4gICAgcDogJyEgIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9DSzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fQ006IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0NYOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9DWToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fREU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0RHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ESzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fRE06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0VSOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9GSToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZW5fRko6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0ZLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9GTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0I6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dEOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR0g6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dJOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9HTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fR1U6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0dZOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ISzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSUU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0lMOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9JTToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSU46IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9JTzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fSkU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0pNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9LRToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fS0k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0tOOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9LWToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTEM6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX0xSOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9MUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTUc6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01IOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NTzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVA6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01TOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NVDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTVU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX01XOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9NWToge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTkE6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05GOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9ORzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTkw6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshIC0jLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBlbl9OUjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fTlU6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX05aOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUEg6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BLOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9QTjoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fUFI6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1BXOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9SVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0I6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TRDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0U6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX1NHOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TSDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU0k6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NMOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9TUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fU1g6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1NaOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UQzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVEs6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RPOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9UVDoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVFY6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1RaOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9VRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVU06IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1VTOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9VU19QT1NJWDoge1xuICAgIHA6ICchICMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVuX1ZDOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9WRzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fVkk6IHtcbiAgICBoOiAnZW4nXG4gIH0sXG4gIGVuX1ZVOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9XUzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW5fWkE6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGVuX1pNOiB7XG4gICAgaDogJ2VuJ1xuICB9LFxuICBlbl9aVzoge1xuICAgIGg6ICdlbidcbiAgfSxcbiAgZW86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGVvXzAwMToge1xuICAgIGg6ICdlbydcbiAgfSxcbiAgZXM6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc180MTk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGVzX0FSOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfQk86IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0JSOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19DTDoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19DTzoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX0NSOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfQ1U6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0RPOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19FQToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfRUM6IHtcbiAgICBwOiAnISMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZXNfRVM6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0dROiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19HVDoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfSE46IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX0lDOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19NWDoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfTkk6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BBOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QRToge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfUEg6IHtcbiAgICBoOiAnZXMnXG4gIH0sXG4gIGVzX1BSOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19QWToge1xuICAgIHA6ICchICMsIyMwLjAwOyEgLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGVzX1NWOiB7XG4gICAgaDogJ2VzJ1xuICB9LFxuICBlc19VUzoge1xuICAgIGg6ICdlcydcbiAgfSxcbiAgZXNfVVk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBlc19WRToge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBldDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGV0X0VFOiB7XG4gICAgaDogJ2V0J1xuICB9LFxuICBldToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGV1X0VTOiB7XG4gICAgaDogJ2V1J1xuICB9LFxuICBld286IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBld29fQ006IHtcbiAgICBoOiAnZXdvJ1xuICB9LFxuICBmYToge1xuICAgIHA6ICfigI4hIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZmFfQUY6IHtcbiAgICBoOiAnZmEnXG4gIH0sXG4gIGZhX0lSOiB7XG4gICAgaDogJ2ZhJ1xuICB9LFxuICBmZjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGZmX0NNOiB7XG4gICAgaDogJ2ZmJ1xuICB9LFxuICBmZl9HTjoge1xuICAgIGg6ICdmZidcbiAgfSxcbiAgZmZfTVI6IHtcbiAgICBoOiAnZmYnXG4gIH0sXG4gIGZmX1NOOiB7XG4gICAgaDogJ2ZmJ1xuICB9LFxuICBmaToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGZpX0ZJOiB7XG4gICAgaDogJ2ZpJ1xuICB9LFxuICBmaWw6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGZpbF9QSDoge1xuICAgIGg6ICdmaWwnXG4gIH0sXG4gIGZvOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZm9fREs6IHtcbiAgICBoOiAnZm8nXG4gIH0sXG4gIGZvX0ZPOiB7XG4gICAgaDogJ2ZvJ1xuICB9LFxuICBmcjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGZyX0JFOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgZnJfQkY6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0JJOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9CSjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQkw6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NBOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DRDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfQ0Y6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NHOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9DSDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZnJfQ0k6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0NNOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9ESjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfRFo6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0ZSOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HQToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR0Y6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0dOOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9HUDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfR1E6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX0hUOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9LTToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTFU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmcl9NQToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZyX01DOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NRjoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTUc6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01MOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9NUToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTVI6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX01VOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9OQzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfTkU6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1BGOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9QTToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfUkU6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1JXOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9TQzoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfU046IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1NZOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9URDoge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfVEc6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1ROOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmcl9WVToge1xuICAgIGg6ICdmcidcbiAgfSxcbiAgZnJfV0Y6IHtcbiAgICBoOiAnZnInXG4gIH0sXG4gIGZyX1lUOiB7XG4gICAgaDogJ2ZyJ1xuICB9LFxuICBmdXI6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBmdXJfSVQ6IHtcbiAgICBoOiAnZnVyJ1xuICB9LFxuICBmeToge1xuICAgIHA6ICchICMsIyMwLjAwOyEgIywjIzAuMDAtJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGZ5X05MOiB7XG4gICAgaDogJ2Z5J1xuICB9LFxuICBnYToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ2FfSUU6IHtcbiAgICBoOiAnZ2EnXG4gIH0sXG4gIGdkOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBnZF9HQjoge1xuICAgIGg6ICdnZCdcbiAgfSxcbiAgZ2w6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBnbF9FUzoge1xuICAgIGg6ICdnbCdcbiAgfSxcbiAgZ3N3OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICfigJknLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBnc3dfQ0g6IHtcbiAgICBoOiAnZ3N3J1xuICB9LFxuICBnc3dfRlI6IHtcbiAgICBoOiAnZ3N3J1xuICB9LFxuICBnc3dfTEk6IHtcbiAgICBoOiAnZ3N3J1xuICB9LFxuICBndToge1xuICAgIHA6ICchIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ3VfSU46IHtcbiAgICBoOiAnZ3UnXG4gIH0sXG4gIGd1ejoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgZ3V6X0tFOiB7XG4gICAgaDogJ2d1eidcbiAgfSxcbiAgZ3Y6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGd2X0lNOiB7XG4gICAgaDogJ2d2J1xuICB9LFxuICBoYToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGhhX0dIOiB7XG4gICAgaDogJ2hhJ1xuICB9LFxuICBoYV9ORToge1xuICAgIGg6ICdoYSdcbiAgfSxcbiAgaGFfTkc6IHtcbiAgICBoOiAnaGEnXG4gIH0sXG4gIGhhdzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaGF3X1VTOiB7XG4gICAgaDogJ2hhdydcbiAgfSxcbiAgaGU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBoZV9JTDoge1xuICAgIGg6ICdoZSdcbiAgfSxcbiAgaGk6IHtcbiAgICBwOiAnISMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGhpX0lOOiB7XG4gICAgaDogJ2hpJ1xuICB9LFxuICBocjoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGhyX0JBOiB7XG4gICAgaDogJ2hyJ1xuICB9LFxuICBocl9IUjoge1xuICAgIGg6ICdocidcbiAgfSxcbiAgaHNiOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgaHNiX0RFOiB7XG4gICAgaDogJ2hzYidcbiAgfSxcbiAgaHU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBodV9IVToge1xuICAgIGg6ICdodSdcbiAgfSxcbiAgaHk6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBoeV9BTToge1xuICAgIGg6ICdoeSdcbiAgfSxcbiAgaWQ6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGlkX0lEOiB7XG4gICAgaDogJ2lkJ1xuICB9LFxuICBpZzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgaWdfTkc6IHtcbiAgICBoOiAnaWcnXG4gIH0sXG4gIGlpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBpaV9DTjoge1xuICAgIGg6ICdpaSdcbiAgfSxcbiAgaXM6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBpc19JUzoge1xuICAgIGg6ICdpcydcbiAgfSxcbiAgaXQ6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBpdF9DSDoge1xuICAgIHA6ICchICMsIyMwLjAwOyEtIywjIzAuMDAnLFxuICAgIGc6ICdcXCcnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBpdF9JVDoge1xuICAgIGg6ICdpdCdcbiAgfSxcbiAgaXRfU006IHtcbiAgICBoOiAnaXQnXG4gIH0sXG4gIGphOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBqYV9KUDoge1xuICAgIGg6ICdqYSdcbiAgfSxcbiAgamdvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgamdvX0NNOiB7XG4gICAgaDogJ2pnbydcbiAgfSxcbiAgam1jOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBqbWNfVFo6IHtcbiAgICBoOiAnam1jJ1xuICB9LFxuICBrYToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGthX0dFOiB7XG4gICAgaDogJ2thJ1xuICB9LFxuICBrYWI6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGthYl9EWjoge1xuICAgIGg6ICdrYWInXG4gIH0sXG4gIGthbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga2FtX0tFOiB7XG4gICAgaDogJ2thbSdcbiAgfSxcbiAga2RlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrZGVfVFo6IHtcbiAgICBoOiAna2RlJ1xuICB9LFxuICBrZWE6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrZWFfQ1Y6IHtcbiAgICBoOiAna2VhJ1xuICB9LFxuICBraHE6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtocV9NTDoge1xuICAgIGg6ICdraHEnXG4gIH0sXG4gIGtpOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBraV9LRToge1xuICAgIGg6ICdraSdcbiAgfSxcbiAga2s6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBra19LWjoge1xuICAgIGg6ICdraydcbiAgfSxcbiAga2tqOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBra2pfQ006IHtcbiAgICBoOiAna2tqJ1xuICB9LFxuICBrbDoge1xuICAgIHA6ICchIywjIzAuMDA7IS0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrbF9HTDoge1xuICAgIGg6ICdrbCdcbiAgfSxcbiAga2xuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrbG5fS0U6IHtcbiAgICBoOiAna2xuJ1xuICB9LFxuICBrbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga21fS0g6IHtcbiAgICBoOiAna20nXG4gIH0sXG4gIGtuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrbl9JTjoge1xuICAgIGg6ICdrbidcbiAgfSxcbiAga286IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGtvX0tQOiB7XG4gICAgaDogJ2tvJ1xuICB9LFxuICBrb19LUjoge1xuICAgIGg6ICdrbydcbiAgfSxcbiAga29rOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga29rX0lOOiB7XG4gICAgaDogJ2tvaydcbiAgfSxcbiAga3M6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrc19JTjoge1xuICAgIGg6ICdrcydcbiAgfSxcbiAga3NiOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBrc2JfVFo6IHtcbiAgICBoOiAna3NiJ1xuICB9LFxuICBrc2Y6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrc2ZfQ006IHtcbiAgICBoOiAna3NmJ1xuICB9LFxuICBrc2g6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBrc2hfREU6IHtcbiAgICBoOiAna3NoJ1xuICB9LFxuICBrdzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAga3dfR0I6IHtcbiAgICBoOiAna3cnXG4gIH0sXG4gIGt5OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAga3lfS0c6IHtcbiAgICBoOiAna3knXG4gIH0sXG4gIGxhZzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbGFnX1RaOiB7XG4gICAgaDogJ2xhZydcbiAgfSxcbiAgbGI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBsYl9MVToge1xuICAgIGg6ICdsYidcbiAgfSxcbiAgbGc6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGxnX1VHOiB7XG4gICAgaDogJ2xnJ1xuICB9LFxuICBsa3Q6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIGxrdF9VUzoge1xuICAgIGg6ICdsa3QnXG4gIH0sXG4gIGxuOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbG5fQU86IHtcbiAgICBoOiAnbG4nXG4gIH0sXG4gIGxuX0NEOiB7XG4gICAgaDogJ2xuJ1xuICB9LFxuICBsbl9DRjoge1xuICAgIGg6ICdsbidcbiAgfSxcbiAgbG5fQ0c6IHtcbiAgICBoOiAnbG4nXG4gIH0sXG4gIGxvOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIGxvX0xBOiB7XG4gICAgaDogJ2xvJ1xuICB9LFxuICBscmM6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBscmNfSVE6IHtcbiAgICBoOiAnbHJjJ1xuICB9LFxuICBscmNfSVI6IHtcbiAgICBoOiAnbHJjJ1xuICB9LFxuICBsdDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGx0X0xUOiB7XG4gICAgaDogJ2x0J1xuICB9LFxuICBsdToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbHVfQ0Q6IHtcbiAgICBoOiAnbHUnXG4gIH0sXG4gIGx1bzoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbHVvX0tFOiB7XG4gICAgaDogJ2x1bydcbiAgfSxcbiAgbHV5OiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBsdXlfS0U6IHtcbiAgICBoOiAnbHV5J1xuICB9LFxuICBsdjoge1xuICAgIHA6ICcjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIGx2X0xWOiB7XG4gICAgaDogJ2x2J1xuICB9LFxuICBtYXM6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1hc19LRToge1xuICAgIGg6ICdtYXMnXG4gIH0sXG4gIG1hc19UWjoge1xuICAgIGg6ICdtYXMnXG4gIH0sXG4gIG1lcjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWVyX0tFOiB7XG4gICAgaDogJ21lcidcbiAgfSxcbiAgbWZlOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtZmVfTVU6IHtcbiAgICBoOiAnbWZlJ1xuICB9LFxuICBtZzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWdfTUc6IHtcbiAgICBoOiAnbWcnXG4gIH0sXG4gIG1naDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbWdoX01aOiB7XG4gICAgaDogJ21naCdcbiAgfSxcbiAgbWdvOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbWdvX0NNOiB7XG4gICAgaDogJ21nbydcbiAgfSxcbiAgbWs6IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBta19NSzoge1xuICAgIGg6ICdtaydcbiAgfSxcbiAgbWw6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1sX0lOOiB7XG4gICAgaDogJ21sJ1xuICB9LFxuICBtbjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG1uX01OOiB7XG4gICAgaDogJ21uJ1xuICB9LFxuICBtcjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXJfSU46IHtcbiAgICBoOiAnbXInXG4gIH0sXG4gIG1zOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBtc19CTjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG1zX01ZOiB7XG4gICAgaDogJ21zJ1xuICB9LFxuICBtc19TRzoge1xuICAgIGg6ICdtcydcbiAgfSxcbiAgbXQ6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG10X01UOiB7XG4gICAgaDogJ210J1xuICB9LFxuICBtdWE6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG11YV9DTToge1xuICAgIGg6ICdtdWEnXG4gIH0sXG4gIG15OiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXlfTU06IHtcbiAgICBoOiAnbXknXG4gIH0sXG4gIG16bjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbXpuX0lSOiB7XG4gICAgaDogJ216bidcbiAgfSxcbiAgbmFxOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBuYXFfTkE6IHtcbiAgICBoOiAnbmFxJ1xuICB9LFxuICBuYjoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIG5iX05POiB7XG4gICAgaDogJ25iJ1xuICB9LFxuICBuYl9TSjoge1xuICAgIGg6ICduYidcbiAgfSxcbiAgbmQ6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG5kX1pXOiB7XG4gICAgaDogJ25kJ1xuICB9LFxuICBuZToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG5lX0lOOiB7XG4gICAgaDogJ25lJ1xuICB9LFxuICBuZV9OUDoge1xuICAgIGg6ICduZSdcbiAgfSxcbiAgbmw6IHtcbiAgICBwOiAnISAjLCMjMC4wMDshIC0jLCMjMC4wMCcsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubF9BVzoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfQkU6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBubF9CUToge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfQ1c6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5sX05MOiB7XG4gICAgaDogJ25sJ1xuICB9LFxuICBubF9TUjoge1xuICAgIGg6ICdubCdcbiAgfSxcbiAgbmxfU1g6IHtcbiAgICBoOiAnbmwnXG4gIH0sXG4gIG5tZzoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIG5tZ19DTToge1xuICAgIGg6ICdubWcnXG4gIH0sXG4gIG5uOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgbm5fTk86IHtcbiAgICBoOiAnbm4nXG4gIH0sXG4gIG5uaDoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIG5uaF9DTToge1xuICAgIGg6ICdubmgnXG4gIH0sXG4gIG51czoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgbnVzX1NTOiB7XG4gICAgaDogJ251cydcbiAgfSxcbiAgbnluOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBueW5fVUc6IHtcbiAgICBoOiAnbnluJ1xuICB9LFxuICBvbToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgb21fRVQ6IHtcbiAgICBoOiAnb20nXG4gIH0sXG4gIG9tX0tFOiB7XG4gICAgaDogJ29tJ1xuICB9LFxuICBvcjoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIG9yX0lOOiB7XG4gICAgaDogJ29yJ1xuICB9LFxuICBvczoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIG9zX0dFOiB7XG4gICAgaDogJ29zJ1xuICB9LFxuICBvc19SVToge1xuICAgIGg6ICdvcydcbiAgfSxcbiAgcGE6IHtcbiAgICBwOiAnISAjLCMjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBwYV9BcmFiOiB7XG4gICAgaDogJ3BhJ1xuICB9LFxuICBwYV9BcmFiX1BLOiB7XG4gICAgaDogJ3BhJ1xuICB9LFxuICBwYV9HdXJ1OiB7XG4gICAgaDogJ3BhJ1xuICB9LFxuICBwYV9HdXJ1X0lOOiB7XG4gICAgaDogJ3BhJ1xuICB9LFxuICBwbDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHBsX1BMOiB7XG4gICAgaDogJ3BsJ1xuICB9LFxuICBwcmc6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwcmdfMDAxOiB7XG4gICAgaDogJ3ByZydcbiAgfSxcbiAgcHM6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBwc19BRjoge1xuICAgIGg6ICdwcydcbiAgfSxcbiAgcHQ6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHB0X0FPOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9CUjoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfQ0g6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0NWOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9HUToge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfR1c6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X0xVOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBwdF9NTzoge1xuICAgIGg6ICdwdCdcbiAgfSxcbiAgcHRfTVo6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X1BUOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcHRfU1Q6IHtcbiAgICBoOiAncHQnXG4gIH0sXG4gIHB0X1RMOiB7XG4gICAgaDogJ3B0J1xuICB9LFxuICBxdToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHF1X0JPOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcXVfRUM6IHtcbiAgICBoOiAncXUnXG4gIH0sXG4gIHF1X1BFOiB7XG4gICAgaDogJ3F1J1xuICB9LFxuICBybToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAn4oCZJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcm1fQ0g6IHtcbiAgICBoOiAncm0nXG4gIH0sXG4gIHJuOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBybl9CSToge1xuICAgIGg6ICdybidcbiAgfSxcbiAgcm86IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICByb19NRDoge1xuICAgIGg6ICdybydcbiAgfSxcbiAgcm9fUk86IHtcbiAgICBoOiAncm8nXG4gIH0sXG4gIHJvZjoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgcm9mX1RaOiB7XG4gICAgaDogJ3JvZidcbiAgfSxcbiAgcm9vdDoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJ1OiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgcnVfQlk6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X0tHOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9LWjoge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnVfTUQ6IHtcbiAgICBoOiAncnUnXG4gIH0sXG4gIHJ1X1JVOiB7XG4gICAgaDogJ3J1J1xuICB9LFxuICBydV9VQToge1xuICAgIGg6ICdydSdcbiAgfSxcbiAgcnc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHJ3X1JXOiB7XG4gICAgaDogJ3J3J1xuICB9LFxuICByd2s6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHJ3a19UWjoge1xuICAgIGg6ICdyd2snXG4gIH0sXG4gIHNhaDoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc2FoX1JVOiB7XG4gICAgaDogJ3NhaCdcbiAgfSxcbiAgc2FxOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzYXFfS0U6IHtcbiAgICBoOiAnc2FxJ1xuICB9LFxuICBzYnA6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNicF9UWjoge1xuICAgIGg6ICdzYnAnXG4gIH0sXG4gIHNlOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc2VfRkk6IHtcbiAgICBoOiAnc2UnXG4gIH0sXG4gIHNlX05POiB7XG4gICAgaDogJ3NlJ1xuICB9LFxuICBzZV9TRToge1xuICAgIGg6ICdzZSdcbiAgfSxcbiAgc2VoOiB7XG4gICAgcDogJyMsIyMwLjAwIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzZWhfTVo6IHtcbiAgICBoOiAnc2VoJ1xuICB9LFxuICBzZXM6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNlc19NTDoge1xuICAgIGg6ICdzZXMnXG4gIH0sXG4gIHNnOiB7XG4gICAgcDogJyEjLCMjMC4wMDshLSMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHNnX0NGOiB7XG4gICAgaDogJ3NnJ1xuICB9LFxuICBzaGk6IHtcbiAgICBwOiAnIywjIzAuMDAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHNoaV9MYXRuOiB7XG4gICAgaDogJ3NoaSdcbiAgfSxcbiAgc2hpX0xhdG5fTUE6IHtcbiAgICBoOiAnc2hpJ1xuICB9LFxuICBzaGlfVGZuZzoge1xuICAgIGg6ICdzaGknXG4gIH0sXG4gIHNoaV9UZm5nX01BOiB7XG4gICAgaDogJ3NoaSdcbiAgfSxcbiAgc2k6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNpX0xLOiB7XG4gICAgaDogJ3NpJ1xuICB9LFxuICBzazoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHNrX1NLOiB7XG4gICAgaDogJ3NrJ1xuICB9LFxuICBzbDoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHNsX1NJOiB7XG4gICAgaDogJ3NsJ1xuICB9LFxuICBzbW46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNtbl9GSToge1xuICAgIGg6ICdzbW4nXG4gIH0sXG4gIHNuOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICBzbl9aVzoge1xuICAgIGg6ICdzbidcbiAgfSxcbiAgc286IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHNvX0RKOiB7XG4gICAgaDogJ3NvJ1xuICB9LFxuICBzb19FVDoge1xuICAgIGg6ICdzbydcbiAgfSxcbiAgc29fS0U6IHtcbiAgICBoOiAnc28nXG4gIH0sXG4gIHNvX1NPOiB7XG4gICAgaDogJ3NvJ1xuICB9LFxuICBzcToge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHNxX0FMOiB7XG4gICAgaDogJ3NxJ1xuICB9LFxuICBzcV9NSzoge1xuICAgIGg6ICdzcSdcbiAgfSxcbiAgc3FfWEs6IHtcbiAgICBoOiAnc3EnXG4gIH0sXG4gIHNyOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgc3JfQ3lybDoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfQ3lybF9CQToge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfQ3lybF9NRToge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfQ3lybF9SUzoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfQ3lybF9YSzoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfTGF0bjoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfTGF0bl9CQToge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfTGF0bl9NRToge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfTGF0bl9SUzoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3JfTGF0bl9YSzoge1xuICAgIGg6ICdzcidcbiAgfSxcbiAgc3Y6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICBzdl9BWDoge1xuICAgIGg6ICdzdidcbiAgfSxcbiAgc3ZfRkk6IHtcbiAgICBoOiAnc3YnXG4gIH0sXG4gIHN2X1NFOiB7XG4gICAgaDogJ3N2J1xuICB9LFxuICBzdzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgc3dfQ0Q6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHN3X0tFOiB7XG4gICAgaDogJ3N3J1xuICB9LFxuICBzd19UWjoge1xuICAgIGg6ICdzdydcbiAgfSxcbiAgc3dfVUc6IHtcbiAgICBoOiAnc3cnXG4gIH0sXG4gIHRhOiB7XG4gICAgcDogJyEgIywjIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGFfSU46IHtcbiAgICBoOiAndGEnXG4gIH0sXG4gIHRhX0xLOiB7XG4gICAgaDogJ3RhJ1xuICB9LFxuICB0YV9NWToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRhX1NHOiB7XG4gICAgcDogJyEgIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdGU6IHtcbiAgICBwOiAnISMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRlX0lOOiB7XG4gICAgaDogJ3RlJ1xuICB9LFxuICB0ZW86IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRlb19LRToge1xuICAgIGg6ICd0ZW8nXG4gIH0sXG4gIHRlb19VRzoge1xuICAgIGg6ICd0ZW8nXG4gIH0sXG4gIHRoOiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0aF9USDoge1xuICAgIGg6ICd0aCdcbiAgfSxcbiAgdGk6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHRpX0VSOiB7XG4gICAgaDogJ3RpJ1xuICB9LFxuICB0aV9FVDoge1xuICAgIGg6ICd0aSdcbiAgfSxcbiAgdGs6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB0a19UTToge1xuICAgIGg6ICd0aydcbiAgfSxcbiAgdG86IHtcbiAgICBwOiAnISAjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB0b19UTzoge1xuICAgIGg6ICd0bydcbiAgfSxcbiAgdHI6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJy4nLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB0cl9DWToge1xuICAgIGg6ICd0cidcbiAgfSxcbiAgdHJfVFI6IHtcbiAgICBoOiAndHInXG4gIH0sXG4gIHR3cToge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdHdxX05FOiB7XG4gICAgaDogJ3R3cSdcbiAgfSxcbiAgdHptOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdHptX01BOiB7XG4gICAgaDogJ3R6bSdcbiAgfSxcbiAgdWc6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHVnX0NOOiB7XG4gICAgaDogJ3VnJ1xuICB9LFxuICB1azoge1xuICAgIHA6ICcjLCMjMC4wMCAhJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHVrX1VBOiB7XG4gICAgaDogJ3VrJ1xuICB9LFxuICB1cjoge1xuICAgIHA6ICchICMsIyMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHVyX0lOOiB7XG4gICAgaDogJ3VyJ1xuICB9LFxuICB1cl9QSzoge1xuICAgIGg6ICd1cidcbiAgfSxcbiAgdXo6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB1el9BcmFiOiB7XG4gICAgcDogJyMsIyMwLjAwICEnLFxuICAgIGc6ICcuJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgdXpfQXJhYl9BRjoge1xuICAgIGg6ICd1eidcbiAgfSxcbiAgdXpfQ3lybDoge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnICcsXG4gICAgZDogJywnXG4gIH0sXG4gIHV6X0N5cmxfVVo6IHtcbiAgICBoOiAndXonXG4gIH0sXG4gIHV6X0xhdG46IHtcbiAgICBoOiAndXonXG4gIH0sXG4gIHV6X0xhdG5fVVo6IHtcbiAgICBoOiAndXonXG4gIH0sXG4gIHZhaToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdmFpX0xhdG46IHtcbiAgICBoOiAndmFpJ1xuICB9LFxuICB2YWlfTGF0bl9MUjoge1xuICAgIGg6ICd2YWknXG4gIH0sXG4gIHZhaV9WYWlpOiB7XG4gICAgaDogJ3ZhaSdcbiAgfSxcbiAgdmFpX1ZhaWlfTFI6IHtcbiAgICBoOiAndmFpJ1xuICB9LFxuICB2aToge1xuICAgIHA6ICchICMsIyMwLjAwJyxcbiAgICBnOiAnLicsXG4gICAgZDogJywnXG4gIH0sXG4gIHZpX1ZOOiB7XG4gICAgaDogJ3ZpJ1xuICB9LFxuICB2bzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgdm9fMDAxOiB7XG4gICAgaDogJ3ZvJ1xuICB9LFxuICB2dW46IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHZ1bl9UWjoge1xuICAgIGg6ICd2dW4nXG4gIH0sXG4gIHdhZToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICfigJknLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB3YWVfQ0g6IHtcbiAgICBoOiAnd2FlJ1xuICB9LFxuICB4b2c6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB4b2dfVUc6IHtcbiAgICBoOiAneG9nJ1xuICB9LFxuICB5YXY6IHtcbiAgICBwOiAnIywjIzAuMDAgIScsXG4gICAgZzogJyAnLFxuICAgIGQ6ICcsJ1xuICB9LFxuICB5YXZfQ006IHtcbiAgICBoOiAneWF2J1xuICB9LFxuICB5aToge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgeWlfMDAxOiB7XG4gICAgaDogJ3lpJ1xuICB9LFxuICB5bzoge1xuICAgIHA6ICchIywjIzAuMDAnLFxuICAgIGc6ICcsJyxcbiAgICBkOiAnLidcbiAgfSxcbiAgeW9fQko6IHtcbiAgICBoOiAneW8nXG4gIH0sXG4gIHlvX05HOiB7XG4gICAgaDogJ3lvJ1xuICB9LFxuICB5dWU6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHl1ZV9ISzoge1xuICAgIGg6ICd5dWUnXG4gIH0sXG4gIHpnaDoge1xuICAgIHA6ICcjLCMjMC4wMCEnLFxuICAgIGc6ICcgJyxcbiAgICBkOiAnLCdcbiAgfSxcbiAgemdoX01BOiB7XG4gICAgaDogJ3pnaCdcbiAgfSxcbiAgemg6IHtcbiAgICBwOiAnISMsIyMwLjAwJyxcbiAgICBnOiAnLCcsXG4gICAgZDogJy4nXG4gIH0sXG4gIHpoX0hhbnM6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnNfQ046IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnNfSEs6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnNfTU86IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnNfU0c6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnQ6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnRfSEs6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnRfTU86IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHpoX0hhbnRfVFc6IHtcbiAgICBoOiAnemgnXG4gIH0sXG4gIHp1OiB7XG4gICAgcDogJyEjLCMjMC4wMCcsXG4gICAgZzogJywnLFxuICAgIGQ6ICcuJ1xuICB9LFxuICB6dV9aQToge1xuICAgIGg6ICd6dSdcbiAgfVxufTtcblxudmFyIGRlZmF1bHRMb2NhbGVzID0ge1xuICBBRUQ6ICdhcl9BRScsXG4gIEFGTjogJ2ZhX0FGJyxcbiAgQUxMOiAnc3EnLFxuICBBTUQ6ICdoeScsXG4gIEFORzogJ25sJyxcbiAgQU9BOiAncHRfQU8nLFxuICBBUlM6ICdlc19BUicsXG4gIEFVRDogJ2VuJyxcbiAgQVdHOiAnbmxfQVcnLFxuICBBWk46ICdheicsXG4gIEJBTTogJ2JzJyxcbiAgQkJEOiAnZW5fQkInLFxuICBCRFQ6ICdibl9CRCcsXG4gIEJHTjogJ2JnJyxcbiAgQkhEOiAnYXJfQkgnLFxuICBCSUY6ICdmcl9CSScsXG4gIEJNRDogJ2VuX0JNJyxcbiAgQk5EOiAnbXNfQk4nLFxuICBCT0I6ICdlc19CTycsXG4gIEJSTDogJ3B0X0JSJyxcbiAgQlNEOiAnZW5fQlMnLFxuICBCVE46ICdkeicsXG4gIEJXUDogJ2VuX0JXJyxcbiAgQllSOiAnYmUnLFxuICBCWkQ6ICdlbl9CWicsXG4gIENBRDogJ2VuX0NBJyxcbiAgQ0RGOiAnZnJfQ0QnLFxuICBDSEY6ICdkZV9DSCcsXG4gIENMUDogJ2VzX0NMJyxcbiAgQ05ZOiAnemhfSGFuc19DTicsXG4gIENPUDogJ2VzX0NPJyxcbiAgQ1JDOiAnZXNfQ1InLFxuICBDVVA6ICdlc19DVScsXG4gIENWRTogJ3B0X0NWJyxcbiAgQ1pLOiAnY3MnLFxuICBESkY6ICdmcl9ESicsXG4gIERLSzogJ2RhX0RLJyxcbiAgRE9QOiAnZXNfRE8nLFxuICBEWkQ6ICdhcl9EWicsXG4gIEVHUDogJ2FyX0VHJyxcbiAgRVJOOiAndGlfRVInLFxuICBFVEI6ICdhbScsXG4gIEVVUjogJ2RlJyxcbiAgRkpEOiAnZW5fRkonLFxuICBGS1A6ICdlbl9GSycsXG4gIEdCUDogJ2VuJyxcbiAgR0VMOiAna2EnLFxuICBHSFM6ICdlbl9HSCcsXG4gIEdJUDogJ2VuX0dJJyxcbiAgR01EOiAnZW5fR00nLFxuICBHTkY6ICdmcl9HTicsXG4gIEdUUTogJ2VzX0dUJyxcbiAgR1lEOiAnZW5fR1knLFxuICBIS0Q6ICd6aF9IYW5zX0hLJyxcbiAgSE5MOiAnZXNfSE4nLFxuICBIUks6ICdocl9IUicsXG4gIEhURzogJ2VuJyxcbiAgSFVGOiAnaHVfSFUnLFxuICBJRFI6ICdpZCcsXG4gIElMUzogJ2hlJyxcbiAgSU5SOiAnZW5fSU4nLFxuICBJUUQ6ICdhcl9JUScsXG4gIElSUjogJ2ZhX0lSJyxcbiAgSVNLOiAnaXMnLFxuICBKTUQ6ICdlbl9KTScsXG4gIEpPRDogJ2FyX0pPJyxcbiAgSlBZOiAnamEnLFxuICBLRVM6ICdlbl9LRScsXG4gIEtHUzogJ2t5JyxcbiAgS0hSOiAna20nLFxuICBLTUY6ICdhcicsXG4gIEtQVzogJ2tvX0tQJyxcbiAgS1JXOiAna29fS1InLFxuICBLV0Q6ICdhcl9LVycsXG4gIEtZRDogJ2VuX0tZJyxcbiAgS1pUOiAna2snLFxuICBMQUs6ICdsbycsXG4gIExCUDogJ2FyX0xCJyxcbiAgTEtSOiAnc2knLFxuICBMUkQ6ICdlbl9MUicsXG4gIExTTDogJ2VuX0xTJyxcbiAgTFlEOiAnYXJfTFknLFxuICBNQUQ6ICdhcicsXG4gIE1ETDogJ3JvJyxcbiAgTUdBOiAnZnJfTUcnLFxuICBNS0Q6ICdtaycsXG4gIE1NSzogJ215JyxcbiAgTU5UOiAnbW4nLFxuICBNT1A6ICd6aCcsXG4gIE1STzogJ2FyX01SJyxcbiAgTVVSOiAnZW5fTVUnLFxuICBNVlI6ICdlbicsXG4gIE1XSzogJ2VuJyxcbiAgTVhOOiAnZXNfTVgnLFxuICBNWVI6ICdtc19NWScsXG4gIE1aTjogJ3B0X01aJyxcbiAgTkFEOiAnZW5fTkEnLFxuICBOR046ICdlbl9ORycsXG4gIE5JTzogJ2VzX05JJyxcbiAgTk9LOiAnbmJfTk8nLFxuICBOUFI6ICduZScsXG4gIE5aRDogJ2VuX05aJyxcbiAgT01SOiAnYXJfT00nLFxuICBQQUI6ICdlc19QQScsXG4gIFBFTjogJ2VzX1BFJyxcbiAgUEdLOiAnZW5fUEcnLFxuICBQSFA6ICdmaWwnLFxuICBQS1I6ICd1cl9QSycsXG4gIFBMTjogJ3BsJyxcbiAgUFlHOiAnZXNfUFknLFxuICBRQVI6ICdhcl9RQScsXG4gIFJPTjogJ3JvJyxcbiAgUlNEOiAnc3InLFxuICBSVUI6ICdydScsXG4gIFJXRjogJ3J3JyxcbiAgU0FSOiAnYXJfU0EnLFxuICBTQkQ6ICdlbl9TQicsXG4gIFNDUjogJ2VuX1NDJyxcbiAgU0RHOiAnYXJfU0QnLFxuICBTRUs6ICdzdl9TRScsXG4gIFNHRDogJ2VuX1NHJyxcbiAgU0hQOiAnZW5fU0gnLFxuICBTTEw6ICdlbl9TTCcsXG4gIFNPUzogJ3NvX1NPJyxcbiAgU1JEOiAnbmxfU1InLFxuICBTU1A6ICdlbicsXG4gIFNURDogJ3B0X1NUJyxcbiAgU1lQOiAnYXJfU1knLFxuICBTWkw6ICdlbl9TWicsXG4gIFRIQjogJ3RoJyxcbiAgVEpTOiAnZW4nLFxuICBUTVQ6ICd0aycsXG4gIFRORDogJ2FyX1ROJyxcbiAgVE9QOiAndG8nLFxuICBUUlk6ICd0cl9UUicsXG4gIFRURDogJ2VuX1RUJyxcbiAgVFdEOiAnemhfSGFudF9UVycsXG4gIFRaUzogJ3N3X1RaJyxcbiAgVUFIOiAndWsnLFxuICBVR1g6ICdlbl9VRycsXG4gIFVTRDogJ2VuX1VTJyxcbiAgVVlVOiAnZXNfVVknLFxuICBVWlM6ICd1eicsXG4gIFZFRjogJ2VzX1ZFJyxcbiAgVk5EOiAndmknLFxuICBWVVY6ICdlbl9CSScsXG4gIFdTVDogJ2VuX0FTJyxcbiAgWEFGOiAnZnInLFxuICBYQ0Q6ICdlbicsXG4gIFhPRjogJ2ZyJyxcbiAgWFBGOiAnZnJfUEYnLFxuICBZRVI6ICdhcl9ZRScsXG4gIFpBUjogJ3p1JyxcbiAgWk1XOiAnZW5fWk0nLFxuICBaV0w6ICdlbl9aVydcbn07XG5cbnZhciBzeW1ib2xzID0ge1xuICAnQUVEJzogJ9ivLtilJyxcbiAgJ0FGTic6ICfYiycsXG4gICdBTEwnOiAnTCcsXG4gICdBTUQnOiAnQU1EJyxcbiAgJ0FORyc6ICfGkicsXG4gICdBT0EnOiAnS3onLFxuICAnQVJTJzogJyQnLFxuICAnQVVEJzogJyQnLFxuICAnQVdHJzogJ8aSJyxcbiAgJ0FaTic6ICfigrwnLFxuICAnQkFNJzogJ0tNJyxcbiAgJ0JCRCc6ICckJyxcbiAgJ0JEVCc6ICfgp7MnLFxuICAnQkdOJzogJ9C70LInLFxuICAnQkhEJzogJy7Yry7YqCcsXG4gICdCSUYnOiAnRkJ1JyxcbiAgJ0JNRCc6ICckJyxcbiAgJ0JORCc6ICckJyxcbiAgJ0JPQic6ICdCcy4nLFxuICAnQlJMJzogJ1IkJyxcbiAgJ0JTRCc6ICckJyxcbiAgJ0JUQyc6ICfguL8nLFxuICAnQlROJzogJ051LicsXG4gICdCV1AnOiAnUCcsXG4gICdCWVInOiAncC4nLFxuICAnQlpEJzogJ0JaJCcsXG4gICdDQUQnOiAnJCcsXG4gICdDREYnOiAnRkMnLFxuICAnQ0hGJzogJ0ZyLicsXG4gICdDTFAnOiAnJCcsXG4gICdDTlknOiAnwqUnLFxuICAnQ09QJzogJyQnLFxuICAnQ1JDJzogJ+KCoScsXG4gICdDVUMnOiAnJCcsXG4gICdDVVAnOiAn4oKxJyxcbiAgJ0NWRSc6ICckJyxcbiAgJ0NaSyc6ICdLxI0nLFxuICAnREpGJzogJ0ZkaicsXG4gICdES0snOiAna3InLFxuICAnRE9QJzogJ1JEJCcsXG4gICdEWkQnOiAn2K/YrCcsXG4gICdFRUsnOiAna3InLFxuICAnRUdQJzogJ8KjJyxcbiAgJ0VSTic6ICdOZmsnLFxuICAnRVRCJzogJ0JyJyxcbiAgJ0VUSCc6ICfOnicsXG4gICdFVVInOiAn4oKsJyxcbiAgJ0ZKRCc6ICckJyxcbiAgJ0ZLUCc6ICfCoycsXG4gICdHQlAnOiAnwqMnLFxuICAnR0VMJzogJ+KCvicsXG4gICdHR1AnOiAnwqMnLFxuICAnR0hDJzogJ+KCtScsXG4gICdHSFMnOiAnR0jigrUnLFxuICAnR0lQJzogJ8KjJyxcbiAgJ0dNRCc6ICdEJyxcbiAgJ0dORic6ICdGRycsXG4gICdHVFEnOiAnUScsXG4gICdHWUQnOiAnJCcsXG4gICdIS0QnOiAnJCcsXG4gICdITkwnOiAnTCcsXG4gICdIUksnOiAna24nLFxuICAnSFRHJzogJ0cnLFxuICAnSFVGJzogJ0Z0JyxcbiAgJ0lEUic6ICdScCcsXG4gICdJTFMnOiAn4oKqJyxcbiAgJ0lNUCc6ICfCoycsXG4gICdJTlInOiAn4oK5JyxcbiAgJ0lRRCc6ICfYuS7YrycsXG4gICdJUlInOiAn77e8JyxcbiAgJ0lTSyc6ICdrcicsXG4gICdKRVAnOiAnwqMnLFxuICAnSk1EJzogJ0okJyxcbiAgJ0pPRCc6ICdKRCcsXG4gICdKUFknOiAnwqUnLFxuICAnS0VTJzogJ0tTaCcsXG4gICdLR1MnOiAn0LvQsicsXG4gICdLSFInOiAn4Z+bJyxcbiAgJ0tNRic6ICdDRicsXG4gICdLUFcnOiAn4oKpJyxcbiAgJ0tSVyc6ICfigqknLFxuICAnS1dEJzogJ0tEJyxcbiAgJ0tZRCc6ICckJyxcbiAgJ0taVCc6ICfigrgnLFxuICAnTEFLJzogJ+KCrScsXG4gICdMQlAnOiAnwqMnLFxuICAnTEtSJzogJ+KCqCcsXG4gICdMUkQnOiAnJCcsXG4gICdMU0wnOiAnTScsXG4gICdMVEMnOiAnxYEnLFxuICAnTFRMJzogJ0x0JyxcbiAgJ0xWTCc6ICdMcycsXG4gICdMWUQnOiAnTEQnLFxuICAnTUFEJzogJ01BRCcsXG4gICdNREwnOiAnbGVpJyxcbiAgJ01HQSc6ICdBcicsXG4gICdNS0QnOiAn0LTQtdC9JyxcbiAgJ01NSyc6ICdLJyxcbiAgJ01OVCc6ICfigq4nLFxuICAnTU9QJzogJ01PUCQnLFxuICAnTVVSJzogJ+KCqCcsXG4gICdNVlInOiAnUmYnLFxuICAnTVdLJzogJ01LJyxcbiAgJ01YTic6ICckJyxcbiAgJ01ZUic6ICdSTScsXG4gICdNWk4nOiAnTVQnLFxuICAnTkFEJzogJyQnLFxuICAnTkdOJzogJ+KCpicsXG4gICdOSU8nOiAnQyQnLFxuICAnTk9LJzogJ2tyJyxcbiAgJ05QUic6ICfigqgnLFxuICAnTlpEJzogJyQnLFxuICAnT01SJzogJ++3vCcsXG4gICdQQUInOiAnQi8uJyxcbiAgJ1BFTic6ICdTLy4nLFxuICAnUEdLJzogJ0snLFxuICAnUEhQJzogJ+KCsScsXG4gICdQS1InOiAn4oKoJyxcbiAgJ1BMTic6ICd6xYInLFxuICAnUFlHJzogJ0dzJyxcbiAgJ1FBUic6ICfvt7wnLFxuICAnUk1CJzogJ++/pScsXG4gICdST04nOiAnbGVpJyxcbiAgJ1JTRCc6ICfQlNC40L0uJyxcbiAgJ1JVQic6ICfigr0nLFxuICAnUldGJzogJ1LigqMnLFxuICAnU0FSJzogJ++3vCcsXG4gICdTQkQnOiAnJCcsXG4gICdTQ1InOiAn4oKoJyxcbiAgJ1NERyc6ICfYrC7Ysy4nLFxuICAnU0VLJzogJ2tyJyxcbiAgJ1NHRCc6ICckJyxcbiAgJ1NIUCc6ICfCoycsXG4gICdTTEwnOiAnTGUnLFxuICAnU09TJzogJ1MnLFxuICAnU1JEJzogJyQnLFxuICAnU1NQJzogJ8KjJyxcbiAgJ1NURCc6ICdEYicsXG4gICdTVkMnOiAnJCcsXG4gICdTWVAnOiAnwqMnLFxuICAnU1pMJzogJ0UnLFxuICAnVEhCJzogJ+C4vycsXG4gICdUSlMnOiAnU00nLFxuICAnVE1UJzogJ1QnLFxuICAnVE5EJzogJ9ivLtiqJyxcbiAgJ1RPUCc6ICdUJCcsXG4gICdUUkwnOiAn4oKkJyxcbiAgJ1RSWSc6ICfigronLFxuICAnVFREJzogJ1RUJCcsXG4gICdUVkQnOiAnJCcsXG4gICdUV0QnOiAnTlQkJyxcbiAgJ1RaUyc6ICdUU2gnLFxuICAnVUFIJzogJ+KCtCcsXG4gICdVR1gnOiAnVVNoJyxcbiAgJ1VTRCc6ICckJyxcbiAgJ1VZVSc6ICckVScsXG4gICdVWlMnOiAn0LvQsicsXG4gICdWRUYnOiAnQnMnLFxuICAnVk5EJzogJ+KCqycsXG4gICdWVVYnOiAnVlQnLFxuICAnV1NUJzogJ1dTJCcsXG4gICdYQUYnOiAnRkNGQScsXG4gICdYQlQnOiAnyYMnLFxuICAnWENEJzogJyQnLFxuICAnWE9GJzogJ0NGQScsXG4gICdYUEYnOiAn4oKjJyxcbiAgJ1lFUic6ICfvt7wnLFxuICAnWkFSJzogJ1InLFxuICAnWldEJzogJ1okJ1xufTtcblxudmFyIFJlYWN0Q3VycmVuY3lGb3JtYXR0ZXIgPSBmdW5jdGlvbiBSZWFjdEN1cnJlbmN5Rm9ybWF0dGVyKHByb3BzKSB7XG4gIHZhciBnZXRGb3JtYXR0ZXIgPSBmdW5jdGlvbiBnZXRGb3JtYXR0ZXIob3B0aW9ucykge1xuICAgIHZhciBsb2NhbGUgPSB2b2lkIDAsXG4gICAgICAgIGN1cnJlbmN5ID0gdm9pZCAwLFxuICAgICAgICBzeW1ib2wgPSB2b2lkIDAsXG4gICAgICAgIHBhdHRlcm4gPSB2b2lkIDAsXG4gICAgICAgIGRlY2ltYWwgPSB2b2lkIDAsXG4gICAgICAgIGdyb3VwID0gdm9pZCAwO1xuXG4gICAgLy8gSGVscGVyIEZ1bmN0aW9uc1xuICAgIHZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgfTtcblxuICAgIHZhciB0b0ZpeGVkID0gZnVuY3Rpb24gdG9GaXhlZChuLCBwcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiAoKyhNYXRoLnJvdW5kKCsobiArICdlJyArIHByZWNpc2lvbikpICsgJ2UnICsgLXByZWNpc2lvbikpLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICB9O1xuXG4gICAgLy8gUGVyZm9ybSBjaGVja3Mgb24gaW5wdXRzIGFuZCBzZXQgdXAgZGVmYXVsdHMgYXMgbmVlZGVkIChkZWZhdWx0cyB0byBlbiwgVVNEKVxuICAgIGlmIChpc1VuZGVmaW5lZChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGN1cnJlbmN5ID0gaXNVbmRlZmluZWQob3B0aW9ucy5jdXJyZW5jeSkgPyAnVVNEJyA6IG9wdGlvbnMuY3VycmVuY3kudG9VcHBlckNhc2UoKTtcbiAgICBsb2NhbGUgPSBpc1VuZGVmaW5lZChvcHRpb25zLmxvY2FsZSkgPyBsb2NhbGVzW2RlZmF1bHRMb2NhbGVzW2N1cnJlbmN5XV0gOiBsb2NhbGVzW29wdGlvbnMubG9jYWxlXTtcblxuICAgIGlmICghaXNVbmRlZmluZWQobG9jYWxlLmgpKSBsb2NhbGUgPSBsb2NhbGVzW2xvY2FsZS5oXTsgLy8gTG9jYWxlIGluaGVyaXRhbmNlXG5cbiAgICBzeW1ib2wgPSBpc1VuZGVmaW5lZChvcHRpb25zLnN5bWJvbCkgPyBzeW1ib2xzW2N1cnJlbmN5XSA6IG9wdGlvbnMuc3ltYm9sO1xuXG4gICAgaWYgKGlzVW5kZWZpbmVkKHN5bWJvbCkpIHN5bWJvbCA9IGN1cnJlbmN5OyAvLyBJbiBjYXNlIHdlIGRvbid0IGhhdmUgdGhlIHN5bWJvbCwganVzdCB1c2UgdGhlIGNjeSBjb2RlXG5cbiAgICBwYXR0ZXJuID0gaXNVbmRlZmluZWQob3B0aW9ucy5wYXR0ZXJuKSA/IGxvY2FsZS5wIDogb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlY2ltYWwgPSBpc1VuZGVmaW5lZChvcHRpb25zLmRlY2ltYWwpID8gbG9jYWxlLmQgOiBvcHRpb25zLmRlY2ltYWw7XG4gICAgZ3JvdXAgPSBpc1VuZGVmaW5lZChvcHRpb25zLmdyb3VwKSA/IGxvY2FsZS5nIDogb3B0aW9ucy5ncm91cDtcblxuICAgIC8vY29uc29sZS5sb2cobG9jYWxlKTtcblxuICAgIC8vIGVuY29kZVBhdHRlcm4gRnVuY3Rpb24gLSByZXR1cm5zIGEgZmV3IHNpbXBsZSBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhlIHBhdHRlcm4gcHJvdmlkZWRcbiAgICB2YXIgZW5jb2RlUGF0dGVybiA9IGZ1bmN0aW9uIGVuY29kZVBhdHRlcm4ocGF0dGVybikge1xuICAgICAgdmFyIGRlY2ltYWxQbGFjZXMgPSAwO1xuICAgICAgdmFyIGZyb250UGFkZGluZyA9ICcnO1xuICAgICAgdmFyIGJhY2tQYWRkaW5nID0gJyc7XG4gICAgICB2YXIgZ3JvdXBMZW5ndGhzID0gW107XG5cbiAgICAgIC8vY29uc29sZS5sb2cocGF0dGVybik7XG5cbiAgICAgIHZhciBwYXR0ZXJuU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdmFyIGRlY2ltYWxzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHBhdHRlcm5FbmRlZCA9IGZhbHNlO1xuXG4gICAgICB2YXIgY3VycmVudEdyb3VwTGVuZ3RoID0gMDtcbiAgICAgIHZhciB6ZXJvTGVuZ3RoID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gcGF0dGVybltpXTtcblxuICAgICAgICBpZiAoIXBhdHRlcm5TdGFydGVkICYmIFsnIycsICcwJywgJywnLCAnLiddLmluZGV4T2YoYykgPiAtMSkge1xuICAgICAgICAgIHBhdHRlcm5TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGF0dGVyblN0YXJ0ZWQpIHtcbiAgICAgICAgICBmcm9udFBhZGRpbmcgKz0gYztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgICAgKytjdXJyZW50R3JvdXBMZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgaWYgKGRlY2ltYWxzU3RhcnRlZCkge1xuICAgICAgICAgICAgICArK2RlY2ltYWxQbGFjZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICArK2N1cnJlbnRHcm91cExlbmd0aDsrK3plcm9MZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJywnOlxuICAgICAgICAgICAgZ3JvdXBMZW5ndGhzLnB1c2goY3VycmVudEdyb3VwTGVuZ3RoKTtcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cExlbmd0aCA9IDA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgZ3JvdXBMZW5ndGhzLnB1c2goY3VycmVudEdyb3VwTGVuZ3RoKTtcbiAgICAgICAgICAgIGRlY2ltYWxzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXR0ZXJuU3RhcnRlZCAmJiAhKFsnIycsICcwJywgJywnLCAnLiddLmluZGV4T2YoYykgPiAtMSkpIHtcbiAgICAgICAgICBwYXR0ZXJuRW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKCFkZWNpbWFsc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGdyb3VwTGVuZ3Rocy5wdXNoKGN1cnJlbnRHcm91cExlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdHRlcm5FbmRlZCkge1xuICAgICAgICAgIGJhY2tQYWRkaW5nICs9IGM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVuY29kZWRQYXR0ZXJuID0ge1xuICAgICAgICBkZWNpbWFsUGxhY2VzOiBkZWNpbWFsUGxhY2VzLFxuICAgICAgICBmcm9udFBhZGRpbmc6IGZyb250UGFkZGluZyxcbiAgICAgICAgYmFja1BhZGRpbmc6IGJhY2tQYWRkaW5nLFxuICAgICAgICBncm91cExlbmd0aHM6IGdyb3VwTGVuZ3RocyxcbiAgICAgICAgemVyb0xlbmd0aDogemVyb0xlbmd0aFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGVuY29kZWRQYXR0ZXJuO1xuICAgIH07XG5cbiAgICAvLyBaZXJvIFBhZGRpbmcgaGVscGVyIGZ1bmN0aW9uXG4gICAgdmFyIHBhZCA9IGZ1bmN0aW9uIHBhZChuLCB3aWR0aCkge1xuICAgICAgbiA9IG4gKyAnJztcbiAgICAgIHJldHVybiBuLmxlbmd0aCA+PSB3aWR0aCA/IG4gOiBuZXcgQXJyYXkod2lkdGggLSBuLmxlbmd0aCArIDEpLmpvaW4oJzAnKSArIG47XG4gICAgfTtcblxuICAgIC8vIEZvcm1hdCBmdW5jdGlvblxuICAgIHZhciBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQobiwgZikge1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IHRvRml4ZWQoTWF0aC5hYnMobiksIGYuZGVjaW1hbFBsYWNlcyk7XG5cbiAgICAgIHZhciBzcGxpdE51bWJlciA9IGZvcm1hdHRlZE51bWJlci5zcGxpdChcIi5cIik7XG5cbiAgICAgIC8vIGkuZS4gd2UgYWN0dWFsbHkgaGF2ZSBzb21lIHNvcnQgb2YgZ3JvdXBpbmcgaW4gdGhlIHZhbHVlc1xuICAgICAgaWYgKGYuZ3JvdXBMZW5ndGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBcIlwiO1xuICAgICAgICB2YXIgY3Vyc29yID0gc3BsaXROdW1iZXJbMF0ubGVuZ3RoO1xuICAgICAgICB2YXIgZ3JvdXBJbmRleCA9IGYuZ3JvdXBMZW5ndGhzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgd2hpbGUgKGN1cnNvciA+IDApIHtcbiAgICAgICAgICBpZiAoZ3JvdXBJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBncm91cEluZGV4ID0gMTtcbiAgICAgICAgICB9IC8vIEFsd2F5cyByZXNldCB0byB0aGUgZmlyc3QgZ3JvdXAgbGVuZ3RoIGlmIHRoZSBudW1iZXIgaXMgYmlnXG5cbiAgICAgICAgICB2YXIgY3VycmVudEdyb3VwTGVuZ3RoID0gZi5ncm91cExlbmd0aHNbZ3JvdXBJbmRleF07XG5cbiAgICAgICAgICB2YXIgc3RhcnQgPSBjdXJzb3IgLSBjdXJyZW50R3JvdXBMZW5ndGg7XG5cbiAgICAgICAgICBzZWdtZW50ID0gc3BsaXROdW1iZXJbMF0uc3Vic3RyaW5nKHN0YXJ0LCBjdXJzb3IpICsgZi5ncm91cCArIHNlZ21lbnQ7XG5cbiAgICAgICAgICBjdXJzb3IgLT0gY3VycmVudEdyb3VwTGVuZ3RoO1xuXG4gICAgICAgICAgLS1ncm91cEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VnbWVudCA9IHNlZ21lbnQuc3Vic3RyaW5nKDAsIHNlZ21lbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coc2VnbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA8IGYuemVyb0xlbmd0aCkge1xuICAgICAgICBzZWdtZW50ID0gcGFkKHNlZ21lbnQsIGYuemVyb0xlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSBmLmZyb250UGFkZGluZyArIHNlZ21lbnQgKyAoaXNVbmRlZmluZWQoc3BsaXROdW1iZXJbMV0pID8gJycgOiBmLmRlY2ltYWwgKyBzcGxpdE51bWJlclsxXSkgKyBmLmJhY2tQYWRkaW5nO1xuXG4gICAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyLnJlcGxhY2UoJyEnLCBzeW1ib2wpO1xuICAgIH07XG5cbiAgICAvLyBVc2UgZW5jb2RlIGZ1bmN0aW9uIHRvIHdvcmsgb3V0IHBhdHRlcm5cbiAgICB2YXIgcGF0dGVybkFycmF5ID0gcGF0dGVybi5zcGxpdChcIjtcIik7XG4gICAgdmFyIHBvc2l0aXZlRm9ybWF0ID0gZW5jb2RlUGF0dGVybihwYXR0ZXJuQXJyYXlbMF0pO1xuXG4gICAgcG9zaXRpdmVGb3JtYXQuc3ltYm9sID0gc3ltYm9sO1xuICAgIHBvc2l0aXZlRm9ybWF0LmRlY2ltYWwgPSBkZWNpbWFsO1xuICAgIHBvc2l0aXZlRm9ybWF0Lmdyb3VwID0gZ3JvdXA7XG5cbiAgICB2YXIgbmVnYXRpdmVGb3JtYXQgPSBpc1VuZGVmaW5lZChwYXR0ZXJuQXJyYXlbMV0pID8gZW5jb2RlUGF0dGVybihcIi1cIiArIHBhdHRlcm5BcnJheVswXSkgOiBlbmNvZGVQYXR0ZXJuKHBhdHRlcm5BcnJheVsxXSk7XG5cbiAgICBuZWdhdGl2ZUZvcm1hdC5zeW1ib2wgPSBzeW1ib2w7XG4gICAgbmVnYXRpdmVGb3JtYXQuZGVjaW1hbCA9IGRlY2ltYWw7XG4gICAgbmVnYXRpdmVGb3JtYXQuZ3JvdXAgPSBncm91cDtcblxuICAgIHZhciB6ZXJvID0gaXNVbmRlZmluZWQocGF0dGVybkFycmF5WzJdKSA/IGZvcm1hdCgwLCBwb3NpdGl2ZUZvcm1hdCkgOiBwYXR0ZXJuQXJyYXlbMl07XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBhdHRlcm5BcnJheVsyXSkpIHtcbiAgICAgIHplcm9Gb3JtYXQgPSBwYXR0ZXJuQXJyYXlbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gdm9pZCAwO1xuICAgICAgbiA9IE51bWJlcihuKTtcbiAgICAgIGlmIChuID4gMCkge1xuICAgICAgICBmb3JtYXR0ZWROdW1iZXIgPSBmb3JtYXQobiwgcG9zaXRpdmVGb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmIChuID09IDApIHtcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gemVyby5yZXBsYWNlKCchJywgc3ltYm9sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlciA9IGZvcm1hdChuLCBuZWdhdGl2ZUZvcm1hdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChudW1iZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgZm9ybWF0dGVyRnVuY3Rpb24gPSBnZXRGb3JtYXR0ZXIob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVyRnVuY3Rpb24obnVtYmVyKTtcbiAgfTtcblxuICB2YXIgcXVhbnRpdHkgPSBwcm9wcy5xdWFudGl0eSxcbiAgICAgIGN1cnJlbmN5ID0gcHJvcHMuY3VycmVuY3ksXG4gICAgICBzeW1ib2wgPSBwcm9wcy5zeW1ib2wsXG4gICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBkZWNpbWFsID0gcHJvcHMuZGVjaW1hbCxcbiAgICAgIGdyb3VwID0gcHJvcHMuZ3JvdXAsXG4gICAgICBwYXR0ZXJuID0gcHJvcHMucGF0dGVybjtcblxuXG4gIHJldHVybiBmb3JtYXQocHJvcHMucXVhbnRpdHksIHtcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZGVjaW1hbDogZGVjaW1hbCxcbiAgICBncm91cDogZ3JvdXAsXG4gICAgcGF0dGVybjogcGF0dGVyblxuICB9KTtcbn07XG5cblJlYWN0Q3VycmVuY3lGb3JtYXR0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjdXJyZW5jeTogJ1VTRCdcbn07XG5cblJlYWN0Q3VycmVuY3lGb3JtYXR0ZXIucHJvcFR5cGVzID0ge1xuICBxdWFudGl0eTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlY2ltYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5yZXR1cm4gUmVhY3RDdXJyZW5jeUZvcm1hdHRlcjtcblxufSkpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=