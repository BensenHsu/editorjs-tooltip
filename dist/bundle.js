/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tooltip"] = factory();
	else
		root["Tooltip"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _assets_tooltipIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tooltipIcon.svg */ \"./assets/tooltipIcon.svg\");\n/* harmony import */ var _assets_tooltipIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_tooltipIcon_svg__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n/**\n * Tooltip for the Editor.js.\n * Add a tooltip inline in the Toolbar.\n * Requires no server-side uploader.\n *\n * @typedef {object} TooltipData\n * @description Tool's input and output data format\n * @property {string} tooltip — tooltip text\n */\n\nvar Tooltip = /*#__PURE__*/function () {\n  /**\n   * @param {object} api Editor.js api\n   */\n  function Tooltip(_ref) {\n    var api = _ref.api,\n        _ref$config = _ref.config,\n        config = _ref$config === void 0 ? {} : _ref$config;\n\n    _classCallCheck(this, Tooltip);\n\n    this.api = api;\n    this.button = null;\n    this._state = false;\n    this.spanTooltip = null;\n    var _config$location = config.location,\n        location = _config$location === void 0 ? 'bottom' : _config$location;\n    this.tooltipLocation = location;\n    this.highlightColor = config.highlightColor;\n    this.underline = config.underline ? config.underline : false;\n    this.backgroundColor = config.backgroundColor;\n    this.textColor = config.textColor;\n    this.editorId = config.holder ? config.holder : 'editorjs';\n    this.tag = 'SPAN';\n    this.CSS = {\n      input: 'tooltip-tool__input',\n      tooltip: 'cdx-tooltip',\n      span: 'tooltip-tool__span',\n      underline: 'tooltip-tool__underline'\n    };\n    this.tooltipsObserver();\n    if (this.backgroundColor || this.textColor) this.customTooltip();\n  }\n  /**\n   * Customize the tooltips style with data passed in the config object\n   * implementing a Mutation Observer in the dynamic tooltip tag.\n   */\n\n\n  _createClass(Tooltip, [{\n    key: \"state\",\n    get: function get() {\n      return this._state;\n    },\n    set: function set(state) {\n      this._state = state;\n      var button = this.button;\n      var inlineToolButtonActive = this.api.styles.inlineToolButtonActive;\n      button.classList.toggle(inlineToolButtonActive, state);\n    }\n  }, {\n    key: \"customTooltip\",\n    value: function customTooltip() {\n      var _this = this;\n\n      var tooltipTag = document.querySelector('.ct');\n      var tooltipContent = document.querySelector('.ct__content');\n      var observer = new MutationObserver(function (mutationList) {\n        mutationList.forEach(function (mutation) {\n          if (mutation.type === 'childList') {\n            var content = tooltipContent.textContent;\n\n            if (document.querySelector(\"[data-tooltip=\\\"\".concat(content, \"\\\"]\"))) {\n              if (_this.backgroundColor) _this.setTooltipColor();\n              if (_this.textColor) _this.setTooltipTextColor();\n            } else {\n              tooltipTag.classList.remove('tooltip-color');\n              tooltipContent.classList.remove('tooltip-text-color');\n            }\n          }\n        });\n      });\n      observer.observe(tooltipContent, {\n        childList: true\n      });\n    }\n    /**\n     * Search the editorjs-tooltip style sheet\n     * @returns the editorjs-tooltip style sheet\n     */\n\n  }, {\n    key: \"tooltipSheet\",\n    value: function tooltipSheet() {\n      var sheetsList = document.styleSheets;\n      var sheets = Object.values(sheetsList);\n      return sheets.filter(function (sheet) {\n        return sheet.ownerNode.id === 'editorjs-tooltip';\n      });\n    }\n    /**\n     * Search for the cssRules of the selector passed\n     * @param {string} selector is the CSS selector required\n     * @returns the cssRules from the selector\n     */\n\n  }, {\n    key: \"tooltipCssRule\",\n    value: function tooltipCssRule(selector) {\n      var tooltipSheet = this.tooltipSheet();\n      var cssRules = Object.values(tooltipSheet[0].cssRules);\n      return cssRules.filter(function (cssRule) {\n        return cssRule.selectorText === selector;\n      });\n    }\n    /**\n     * Set the tooltip color using the cssRules to overwrite the rules\n     */\n\n  }, {\n    key: \"setTooltipColor\",\n    value: function setTooltipColor() {\n      var tooltipTag = document.querySelector('.ct');\n      var beforeTooltip = this.tooltipCssRule('.tooltip-color::before');\n      var afterTooltip = this.tooltipCssRule('.tooltip-color::after');\n      beforeTooltip[0].style.setProperty('background-color', this.backgroundColor);\n      afterTooltip[0].style.setProperty('background-color', this.backgroundColor);\n      tooltipTag.classList.add('tooltip-color');\n    }\n    /**\n     * Set the tooltip text color.\n     */\n\n  }, {\n    key: \"setTooltipTextColor\",\n    value: function setTooltipTextColor() {\n      var textColor = this.tooltipCssRule('.tooltip-text-color');\n      var tooltipContent = document.querySelector('.ct__content');\n      textColor[0].style.setProperty('color', this.textColor);\n      tooltipContent.classList.add('tooltip-text-color');\n    }\n    /**\n     * Observe if some tooltip span is inserted and create the respective tooltip\n     */\n\n  }, {\n    key: \"tooltipsObserver\",\n    value: function tooltipsObserver() {\n      var _this2 = this;\n\n      var holder = document.getElementById(this.editorId);\n      var observer = new MutationObserver(function (mutationList) {\n        mutationList.forEach(function (mutation) {\n          if (mutation.type === 'childList' && mutation.target.classList.contains('codex-editor__redactor')) {\n            var spanTooltips = document.querySelectorAll('.cdx-tooltip');\n            spanTooltips.forEach(function (span) {\n              return _this2.createTooltip(span.dataset.tooltip, span);\n            });\n          }\n        });\n      });\n      observer.observe(holder, {\n        childList: true,\n        subtree: true\n      });\n    }\n    /**\n     * Create the Tooltips with the Tooltip API\n     * @param {String} tooltipValue is the tooltip text\n     * @param {HTMLElement} spanTooltip is the selected text where the tooltip is created\n     */\n\n  }, {\n    key: \"createTooltip\",\n    value: function createTooltip(tooltipValue) {\n      var spanTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.spanTooltip;\n\n      if (this.spanTooltip) {\n        this.spanTooltip.dataset.tooltip = tooltipValue;\n        this.setBackgroundColor(this.spanTooltip);\n        this.setUnderlineDecoration(this.spanTooltip);\n      } else {\n        this.setBackgroundColor(spanTooltip);\n        this.setUnderlineDecoration(spanTooltip);\n      }\n\n      var tooltipLocation = this.tooltipLocation;\n      this.api.tooltip.onHover(spanTooltip, tooltipValue, {\n        placement: tooltipLocation\n      });\n    }\n    /**\n     * Set background-color and span custom class\n     * @param {HTMLElement} spanTooltip is the tooltip element\n     */\n\n  }, {\n    key: \"setBackgroundColor\",\n    value: function setBackgroundColor(spanTooltip) {\n      var tooltip = spanTooltip;\n\n      if (tooltip.childElementCount > 0) {\n        tooltip.firstChild.classList.add(this.CSS.span);\n        tooltip.firstChild.style.background = this.highlightColor;\n      } else {\n        tooltip.classList.add(this.CSS.span);\n        tooltip.style.background = this.highlightColor;\n      }\n    }\n    /**\n     * Set underline class\n     * @param {HTMLElement} spanTooltip is the tooltip element\n     */\n\n  }, {\n    key: \"setUnderlineDecoration\",\n    value: function setUnderlineDecoration(spanTooltip) {\n      var tooltip = spanTooltip;\n\n      if (this.underline) {\n        tooltip.childElementCount > 0 ? tooltip.firstChild.classList.add(this.CSS.underline) : tooltip.classList.add(this.CSS.underline);\n      }\n    }\n    /**\n     * render the button in the inline toolbar\n     * @returns the button element created to the inline toolbar\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.button = document.createElement('button');\n      this.button.type = 'button';\n      this.button.innerHTML = (_assets_tooltipIcon_svg__WEBPACK_IMPORTED_MODULE_1___default());\n      var inlineToolButton = this.api.styles.inlineToolButton;\n      this.button.classList.add(inlineToolButton);\n      return this.button;\n    }\n    /**\n     * The method is called when the button rendered in render() is clicked\n     * create a span to enclose the selected text.\n     * @param {object} range is an object with info about the selected text\n     * @returns\n     */\n\n  }, {\n    key: \"surround\",\n    value: function surround(range) {\n      if (this.state) {\n        this.unwrap(range);\n        return;\n      }\n\n      this.wrap(range);\n    }\n    /**\n     * wrap creates the span element for the selected text\n     * @param {object} range is an object with info about the selected text\n     */\n\n  }, {\n    key: \"wrap\",\n    value: function wrap(range) {\n      var selectedText = range.extractContents();\n      this.spanTooltip = document.createElement(this.tag);\n      this.spanTooltip.classList.add(this.CSS.tooltip);\n      this.spanTooltip.appendChild(selectedText);\n      range.insertNode(this.spanTooltip);\n      this.api.selection.expandToTag(this.spanTooltip);\n    }\n    /**\n     * unwrap delete the span if the tool is disabled\n     * @param {object} range is an object with info about the selected text\n     */\n\n  }, {\n    key: \"unwrap\",\n    value: function unwrap(range) {\n      this.spanTooltip = this.api.selection.findParentTag(this.tag, this.CSS.tooltip);\n      var text = range.extractContents();\n      this.spanTooltip.remove();\n      range.insertNode(text);\n    }\n    /**\n     * Checkstate is called when the user select any text\n     * check the state of the tool in the selected text\n     */\n\n  }, {\n    key: \"checkState\",\n    value: function checkState() {\n      this.spanTooltip = this.api.selection.findParentTag(this.tag);\n      this.state = !!this.spanTooltip;\n      if (this.state) this.showActions();else this.hideActions();\n    }\n    /**\n     * render actions in the Toolbar\n     * @returns the input in the Toolbar to insert the tooltip\n     */\n\n  }, {\n    key: \"renderActions\",\n    value: function renderActions() {\n      this.spanTooltip = this.api.selection.findParentTag(this.tag);\n      this.tooltipInput = document.createElement('input');\n      this.tooltipInput.placeholder = 'Add a tooltip';\n      this.tooltipInput.classList.add(this.api.styles.input);\n      this.tooltipInput.classList.add(this.CSS.input);\n\n      if (this.spanTooltip) {\n        var tooltipStored = this.spanTooltip.dataset.tooltip;\n        this.tooltipInput.value = tooltipStored;\n      }\n\n      this.tooltipInput.hidden = true;\n      return this.tooltipInput;\n    }\n    /**\n     * Show the input and create the tooltip when the user presses Enter\n     */\n\n  }, {\n    key: \"showActions\",\n    value: function showActions() {\n      var _this3 = this;\n\n      this.tooltipInput.hidden = false;\n      this.api.listeners.on(this.tooltipInput, 'keydown', function (e) {\n        if (e.key === 'Enter') {\n          var tooltipValue = _this3.tooltipInput.value;\n\n          _this3.createTooltip(tooltipValue);\n\n          _this3.closeToolbar();\n        }\n      }, false);\n    }\n    /**\n     * Hide the input if the user do not have tooltip in the selected text\n     */\n\n  }, {\n    key: \"hideActions\",\n    value: function hideActions() {\n      this.tooltipInput.hidden = true;\n    }\n    /**\n     * close the toolbar when the user presses Enter\n     */\n\n  }, {\n    key: \"closeToolbar\",\n    value: function closeToolbar() {\n      var toolbar = document.querySelector('.ce-inline-toolbar--showed');\n      toolbar.classList.remove('ce-inline-toolbar--showed');\n    }\n    /**\n     * satanize the data output\n    */\n\n  }], [{\n    key: \"isInline\",\n    get: function get() {\n      return true;\n    }\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        span: function span(e) {\n          e.classList.remove('tooltip-tool__span', 'tooltip-tool__underline');\n          return {\n            \"class\": true,\n            'data-tooltip': true\n          };\n        }\n      };\n    }\n  }]);\n\n  return Tooltip;\n}();\n\n\n\n//# sourceURL=webpack://Tooltip/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".tooltip-tool__input{\\n  border: 0;\\n  border-radius: 0 0 4px 4px;\\n  border-top: 1px solid rgba(201,201,204,.48);\\n}\\n\\n.tooltip-tool__span{\\n  color: #0086f5;\\n}\\n\\n.tooltip-tool__underline{\\n  text-decoration: underline;\\n}\\n\\n.tooltip-color::before {\\n  background-color: transparent;\\n}\\n\\n.tooltip-color::after {\\n  background-color: transparent;\\n}\\n\\n.tooltip-text-color {\\n  color: transparent;\\n}\\n\\n.cdx-tooltip {\\n  display: inline-block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Tooltip/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Tooltip/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Tooltip/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {\"attributes\":{\"id\":\"editorjs-tooltip\"}};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Tooltip/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement, attributes) {\n  Object.keys(attributes).forEach(function (key) {\n    styleElement.setAttribute(key, attributes[key]);\n  });\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Tooltip/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/tooltipIcon.svg":
/*!********************************!*\
  !*** ./assets/tooltipIcon.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" width=\\\"16\\\" height=\\\"14\\\" viewBox=\\\"0 0 21 21\\\"><path d=\\\"M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z\\\"></path></svg>\"\n\n//# sourceURL=webpack://Tooltip/./assets/tooltipIcon.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});