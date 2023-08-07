/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Types/eventTime.ts":
/*!********************************!*\
  !*** ./src/Types/eventTime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventTime: () => (/* binding */ EventTime)\n/* harmony export */ });\nvar EventTime = {\n    Start: \"Start\",\n    Stop: \"Stop\",\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVHlwZXMvZXZlbnRUaW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL214Ly4vc3JjL1R5cGVzL2V2ZW50VGltZS50cz9lZTU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRXZlbnRUaW1lID0ge1xuICAgIFN0YXJ0OiBcIlN0YXJ0XCIsXG4gICAgU3RvcDogXCJTdG9wXCIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Types/eventTime.ts\n");

        /***/
}),

/***/ "./src/Types/eventTypes.ts":
/*!*********************************!*\
  !*** ./src/Types/eventTypes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventType: () => (/* binding */ EventType)\n/* harmony export */ });\nvar EventType = {\n    OnLoad: \"OnLoad\",\n    OnSave: \"OnSave\",\n    OnChange: \"OnChange\",\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVHlwZXMvZXZlbnRUeXBlcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL214Ly4vc3JjL1R5cGVzL2V2ZW50VHlwZXMudHM/YTViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEV2ZW50VHlwZSA9IHtcbiAgICBPbkxvYWQ6IFwiT25Mb2FkXCIsXG4gICAgT25TYXZlOiBcIk9uU2F2ZVwiLFxuICAgIE9uQ2hhbmdlOiBcIk9uQ2hhbmdlXCIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Types/eventTypes.ts\n");

        /***/
}),

/***/ "./src/account.ts":
/*!************************!*\
  !*** ./src/account.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountForm: () => (/* binding */ AccountForm),\n/* harmony export */   accountForm: () => (/* binding */ accountForm)\n/* harmony export */ });\n/* harmony import */ var _decorators_onChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/onChange */ \"./src/decorators/onChange.ts\");\n/* harmony import */ var _decorators_onLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/onLoad */ \"./src/decorators/onLoad.ts\");\n/* harmony import */ var _formBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formBase */ \"./src/formBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\n\n\nvar AccountForm = /** @class */ (function (_super) {\n    __extends(AccountForm, _super);\n    function AccountForm() {\n        return _super.call(this) || this;\n    }\n    AccountForm.prototype.test = function () {\n        alert(\"kikoo\");\n    };\n    AccountForm.prototype.ch = function () {\n        alert(\"change\");\n    };\n    __decorate([\n        _decorators_onLoad__WEBPACK_IMPORTED_MODULE_1__.onLoad,\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", []),\n        __metadata(\"design:returntype\", void 0)\n    ], AccountForm.prototype, \"test\", null);\n    __decorate([\n        (0,_decorators_onChange__WEBPACK_IMPORTED_MODULE_0__.onChange)(\"name\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", []),\n        __metadata(\"design:returntype\", void 0)\n    ], AccountForm.prototype, \"ch\", null);\n    return AccountForm;\n}(_formBase__WEBPACK_IMPORTED_MODULE_2__.FormBase));\nvar accountForm = new AccountForm();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWNjb3VudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0Esa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDaUQ7QUFDSjtBQUNQO0FBQy9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFRO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teC8uL3NyYy9hY2NvdW50LnRzP2U5ZGYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBvbkNoYW5nZSB9IGZyb20gXCIuL2RlY29yYXRvcnMvb25DaGFuZ2VcIjtcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gXCIuL2RlY29yYXRvcnMvb25Mb2FkXCI7XG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gXCIuL2Zvcm1CYXNlXCI7XG5leHBvcnQgdmFyIEFjY291bnRGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY2NvdW50Rm9ybSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY2NvdW50Rm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFjY291bnRGb3JtLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhbGVydChcImtpa29vXCIpO1xuICAgIH07XG4gICAgQWNjb3VudEZvcm0ucHJvdG90eXBlLmNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhbGVydChcImNoYW5nZVwiKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBvbkxvYWQsXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG4gICAgXSwgQWNjb3VudEZvcm0ucHJvdG90eXBlLCBcInRlc3RcIiwgbnVsbCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIG9uQ2hhbmdlKFwibmFtZVwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIHZvaWQgMClcbiAgICBdLCBBY2NvdW50Rm9ybS5wcm90b3R5cGUsIFwiY2hcIiwgbnVsbCk7XG4gICAgcmV0dXJuIEFjY291bnRGb3JtO1xufShGb3JtQmFzZSkpO1xuZXhwb3J0IHZhciBhY2NvdW50Rm9ybSA9IG5ldyBBY2NvdW50Rm9ybSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/account.ts\n");

        /***/
}),

/***/ "./src/decorators/crmFormClass.ts":
/*!****************************************!*\
  !*** ./src/decorators/crmFormClass.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crmFormClass: () => (/* binding */ crmFormClass),\n/* harmony export */   crmFormToInstanciate: () => (/* binding */ crmFormToInstanciate)\n/* harmony export */ });\nvar crmFormToInstanciate;\n// Fonction de décoration pour enregistrer et décorer la classe\nfunction crmFormClass(constructor) {\n    crmFormToInstanciate = constructor;\n    return constructor;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9jcm1Gb3JtQ2xhc3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teC8uL3NyYy9kZWNvcmF0b3JzL2NybUZvcm1DbGFzcy50cz9jZjA0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgY3JtRm9ybVRvSW5zdGFuY2lhdGU7XG4vLyBGb25jdGlvbiBkZSBkw6ljb3JhdGlvbiBwb3VyIGVucmVnaXN0cmVyIGV0IGTDqWNvcmVyIGxhIGNsYXNzZVxuZXhwb3J0IGZ1bmN0aW9uIGNybUZvcm1DbGFzcyhjb25zdHJ1Y3Rvcikge1xuICAgIGNybUZvcm1Ub0luc3RhbmNpYXRlID0gY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/crmFormClass.ts\n");

        /***/
}),

/***/ "./src/decorators/onChange.ts":
/*!************************************!*\
  !*** ./src/decorators/onChange.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onChange: () => (/* binding */ onChange)\n/* harmony export */ });\n/* harmony import */ var _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\n/* harmony import */ var _Types_eventTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/eventTypes */ \"./src/Types/eventTypes.ts\");\n\n\nfunction onChange(attributeName) {\n    return function (formBase, functionName, descriptor) {\n        var eventManager = new _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__.EventManager(formBase);\n        eventManager.addEventDecorator(formBase, functionName, descriptor, _Types_eventTypes__WEBPACK_IMPORTED_MODULE_1__.EventType.OnChange);\n        _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__.EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });\n        return descriptor;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9vbkNoYW5nZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7QUFDaEI7QUFDekM7QUFDUDtBQUNBLCtCQUErQix3RUFBWTtBQUMzQywyRUFBMkUsd0RBQVM7QUFDcEYsUUFBUSx3RUFBWSx1QkFBdUIsMERBQTBEO0FBQ3JHO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL214Ly4vc3JjL2RlY29yYXRvcnMvb25DaGFuZ2UudHM/ZjBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vZXZlbnQtbWFuYWdlbWVudC9ldmVudE1hbmFnZXJcIjtcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9UeXBlcy9ldmVudFR5cGVzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25DaGFuZ2UoYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZm9ybUJhc2UsIGZ1bmN0aW9uTmFtZSwgZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50TWFuYWdlcihmb3JtQmFzZSk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5hZGRFdmVudERlY29yYXRvcihmb3JtQmFzZSwgZnVuY3Rpb25OYW1lLCBkZXNjcmlwdG9yLCBFdmVudFR5cGUuT25DaGFuZ2UpO1xuICAgICAgICBFdmVudE1hbmFnZXIub25DaGFuZ2VFdmVudHMucHVzaCh7IGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZU5hbWUsIGNhbGxiYWNrOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/onChange.ts\n");

        /***/
}),

/***/ "./src/decorators/onLoad.ts":
/*!**********************************!*\
  !*** ./src/decorators/onLoad.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onLoad: () => (/* binding */ onLoad)\n/* harmony export */ });\n/* harmony import */ var _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\n/* harmony import */ var _Types_eventTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/eventTypes */ \"./src/Types/eventTypes.ts\");\n\n\nfunction onLoad(formBase, functionName, descriptor) {\n    var eventManager = new _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__.EventManager(formBase);\n    eventManager.addEventDecorator(formBase, functionName, descriptor, _Types_eventTypes__WEBPACK_IMPORTED_MODULE_1__.EventType.OnLoad);\n    _event_management_eventManager__WEBPACK_IMPORTED_MODULE_0__.EventManager.onLoadEvents.push(descriptor.value);\n    return descriptor;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9vbkxvYWQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdFO0FBQ2hCO0FBQ3pDO0FBQ1AsMkJBQTJCLHdFQUFZO0FBQ3ZDLHVFQUF1RSx3REFBUztBQUNoRixJQUFJLHdFQUFZO0FBQ2hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teC8uL3NyYy9kZWNvcmF0b3JzL29uTG9hZC50cz9kMGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9ldmVudC1tYW5hZ2VtZW50L2V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uL1R5cGVzL2V2ZW50VHlwZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoZm9ybUJhc2UsIGZ1bmN0aW9uTmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKGZvcm1CYXNlKTtcbiAgICBldmVudE1hbmFnZXIuYWRkRXZlbnREZWNvcmF0b3IoZm9ybUJhc2UsIGZ1bmN0aW9uTmFtZSwgZGVzY3JpcHRvciwgRXZlbnRUeXBlLk9uTG9hZCk7XG4gICAgRXZlbnRNYW5hZ2VyLm9uTG9hZEV2ZW50cy5wdXNoKGRlc2NyaXB0b3IudmFsdWUpO1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/onLoad.ts\n");

        /***/
}),

/***/ "./src/event-management/eventManager.ts":
/*!**********************************************!*\
  !*** ./src/event-management/eventManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventManager: () => (/* binding */ EventManager)\n/* harmony export */ });\n/* harmony import */ var _Types_eventTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/eventTime */ \"./src/Types/eventTime.ts\");\n/* harmony import */ var _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\n\n\nvar EventManager = /** @class */ (function () {\n    function EventManager(formBase) {\n        this.formBase = formBase;\n    }\n    EventManager.prototype.addEventDecorator = function (formBase, functionName, descriptor, eventType) {\n        var originalMethod = descriptor.value;\n        var _this = this;\n        descriptor.value = function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            _this.logEvent(eventType, _Types_eventTime__WEBPACK_IMPORTED_MODULE_0__.EventTime.Start, functionName);\n            var result = originalMethod.apply(this, args);\n            _this.logEvent(eventType, _Types_eventTime__WEBPACK_IMPORTED_MODULE_0__.EventTime.Stop, functionName);\n            return result;\n        };\n    };\n    EventManager.prototype.logEvent = function (eventType, eventTime, functionName) {\n        _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__.LogManager.logCallerInfo(this.formBase.appName, \" \".concat(eventType, \"  \").concat(eventTime, \" function '\").concat(functionName, \"'\"));\n    };\n    EventManager.initEvents = function (formContext) {\n        _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onChangeEvents.forEach(function (onChangeEvent) {\n            formContext.getAttribute(onChangeEvent.attributeName).addOnChange(onChangeEvent.callback);\n        });\n        _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__.LogManager.logInfo(\"Load OnSave Events\");\n        EventManager.onSaveEvents.forEach(function (onSaveEvent) {\n            formContext.data.entity.addOnSave(onSaveEvent);\n        });\n        _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__.LogManager.logInfo(\"Load OnPostSave Events\");\n        EventManager.onPostSaveEvents.forEach(function (onPostSaveEvent) {\n            formContext.data.entity.addOnPostSave(onPostSaveEvent);\n        });\n        _log_management_logManager__WEBPACK_IMPORTED_MODULE_1__.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onLoadEvents.forEach(function (onLoadEvent) {\n            formContext.data.addOnLoad(onLoadEvent);\n        });\n    };\n    EventManager.onLoadEvents = new Array();\n    EventManager.onChangeEvents = new Array();\n    EventManager.onSaveEvents = new Array();\n    EventManager.onPostSaveEvents = new Array();\n    return EventManager;\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQtbWFuYWdlbWVudC9ldmVudE1hbmFnZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ1c7QUFDbkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0Esc0NBQXNDLHVEQUFTO0FBQy9DO0FBQ0Esc0NBQXNDLHVEQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSxrRUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsa0VBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLGtFQUFVO0FBQ2xCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxrRUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teC8uL3NyYy9ldmVudC1tYW5hZ2VtZW50L2V2ZW50TWFuYWdlci50cz83Y2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VGltZSB9IGZyb20gXCIuLi9UeXBlcy9ldmVudFRpbWVcIjtcbmltcG9ydCB7IExvZ01hbmFnZXIgfSBmcm9tIFwiLi4vbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlclwiO1xuZXhwb3J0IHZhciBFdmVudE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRNYW5hZ2VyKGZvcm1CYXNlKSB7XG4gICAgICAgIHRoaXMuZm9ybUJhc2UgPSBmb3JtQmFzZTtcbiAgICB9XG4gICAgRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5hZGRFdmVudERlY29yYXRvciA9IGZ1bmN0aW9uIChmb3JtQmFzZSwgZnVuY3Rpb25OYW1lLCBkZXNjcmlwdG9yLCBldmVudFR5cGUpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmxvZ0V2ZW50KGV2ZW50VHlwZSwgRXZlbnRUaW1lLlN0YXJ0LCBmdW5jdGlvbk5hbWUpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgX3RoaXMubG9nRXZlbnQoZXZlbnRUeXBlLCBFdmVudFRpbWUuU3RvcCwgZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBFdmVudE1hbmFnZXIucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgZXZlbnRUaW1lLCBmdW5jdGlvbk5hbWUpIHtcbiAgICAgICAgTG9nTWFuYWdlci5sb2dDYWxsZXJJbmZvKHRoaXMuZm9ybUJhc2UuYXBwTmFtZSwgXCIgXCIuY29uY2F0KGV2ZW50VHlwZSwgXCIgIFwiKS5jb25jYXQoZXZlbnRUaW1lLCBcIiBmdW5jdGlvbiAnXCIpLmNvbmNhdChmdW5jdGlvbk5hbWUsIFwiJ1wiKSk7XG4gICAgfTtcbiAgICBFdmVudE1hbmFnZXIuaW5pdEV2ZW50cyA9IGZ1bmN0aW9uIChmb3JtQ29udGV4dCkge1xuICAgICAgICBMb2dNYW5hZ2VyLmxvZ0luZm8oXCJMb2FkIE9uQ2hhbmdlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uQ2hhbmdlRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAgIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShvbkNoYW5nZUV2ZW50LmF0dHJpYnV0ZU5hbWUpLmFkZE9uQ2hhbmdlKG9uQ2hhbmdlRXZlbnQuY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgTG9nTWFuYWdlci5sb2dJbmZvKFwiTG9hZCBPblNhdmUgRXZlbnRzXCIpO1xuICAgICAgICBFdmVudE1hbmFnZXIub25TYXZlRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG9uU2F2ZUV2ZW50KSB7XG4gICAgICAgICAgICBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5hZGRPblNhdmUob25TYXZlRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgTG9nTWFuYWdlci5sb2dJbmZvKFwiTG9hZCBPblBvc3RTYXZlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uUG9zdFNhdmVFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAob25Qb3N0U2F2ZUV2ZW50KSB7XG4gICAgICAgICAgICBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5hZGRPblBvc3RTYXZlKG9uUG9zdFNhdmVFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBMb2dNYW5hZ2VyLmxvZ0luZm8oXCJMb2FkIE9uQ2hhbmdlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uTG9hZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChvbkxvYWRFdmVudCkge1xuICAgICAgICAgICAgZm9ybUNvbnRleHQuZGF0YS5hZGRPbkxvYWQob25Mb2FkRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEV2ZW50TWFuYWdlci5vbkxvYWRFdmVudHMgPSBuZXcgQXJyYXkoKTtcbiAgICBFdmVudE1hbmFnZXIub25DaGFuZ2VFdmVudHMgPSBuZXcgQXJyYXkoKTtcbiAgICBFdmVudE1hbmFnZXIub25TYXZlRXZlbnRzID0gbmV3IEFycmF5KCk7XG4gICAgRXZlbnRNYW5hZ2VyLm9uUG9zdFNhdmVFdmVudHMgPSBuZXcgQXJyYXkoKTtcbiAgICByZXR1cm4gRXZlbnRNYW5hZ2VyO1xufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/event-management/eventManager.ts\n");

        /***/
}),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormBase: () => (/* binding */ FormBase),\n/* harmony export */   initCrmForm: () => (/* binding */ initCrmForm),\n/* harmony export */   initForm: () => (/* binding */ initForm)\n/* harmony export */ });\n/* harmony import */ var _decorators_crmFormClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/crmFormClass */ \"./src/decorators/crmFormClass.ts\");\n/* harmony import */ var _event_management_eventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n//import { initForm } from \"./decorators/initForm\";\n\n//import { initForm } from \"./decorators/initForm\";\n\n/**\n * Form base\n */\nvar FormBase = /** @class */ (function () {\n    /**\n     * Creates an instance of form base.\n     * @param context\n     */\n    function FormBase() {\n        this.appName = \"[BaseForm]\";\n    }\n    FormBase.prototype.initCrmForm = function (context) {\n        debugger;\n        //the context is set via @initForm decorator\n        //it's the only way to be able to use the @crmValue decorator\n    };\n    Object.defineProperty(FormBase.prototype, \"formContext\", {\n        /**\n         * Gets form context\n         */\n        get: function () {\n            return this.context.getFormContext();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    __decorate([\n        initForm,\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object]),\n        __metadata(\"design:returntype\", void 0)\n    ], FormBase.prototype, \"initCrmForm\", null);\n    return FormBase;\n}());\n/**\n * Inits crm form\n * @param context\n * @returns\n */\nfunction initCrmForm(context) {\n    debugger;\n    if (_decorators_crmFormClass__WEBPACK_IMPORTED_MODULE_0__.crmFormToInstanciate)\n        return new _decorators_crmFormClass__WEBPACK_IMPORTED_MODULE_0__.crmFormToInstanciate(context);\n}\nfunction initForm(target, propertyKey, descriptor) {\n    debugger;\n    var originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        target.context = context;\n        _event_management_eventManager__WEBPACK_IMPORTED_MODULE_1__.EventManager.initEvents(context.getFormContext());\n    };\n    return descriptor;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUMyQztBQUNqRSxXQUFXLFdBQVc7QUFDeUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFFBQVEsMEVBQW9CO0FBQzVCLG1CQUFtQiwwRUFBb0I7QUFDdkM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBWTtBQUNwQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teC8uL3NyYy9mb3JtQmFzZS50cz85YzhjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG4vL2ltcG9ydCB7IGluaXRGb3JtIH0gZnJvbSBcIi4vZGVjb3JhdG9ycy9pbml0Rm9ybVwiO1xuaW1wb3J0IHsgY3JtRm9ybVRvSW5zdGFuY2lhdGUgfSBmcm9tIFwiLi9kZWNvcmF0b3JzL2NybUZvcm1DbGFzc1wiO1xuLy9pbXBvcnQgeyBpbml0Rm9ybSB9IGZyb20gXCIuL2RlY29yYXRvcnMvaW5pdEZvcm1cIjtcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gXCIuL2V2ZW50LW1hbmFnZW1lbnQvZXZlbnRNYW5hZ2VyXCI7XG4vKipcbiAqIEZvcm0gYmFzZVxuICovXG5leHBvcnQgdmFyIEZvcm1CYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgZm9ybSBiYXNlLlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgZnVuY3Rpb24gRm9ybUJhc2UoKSB7XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IFwiW0Jhc2VGb3JtXVwiO1xuICAgIH1cbiAgICBGb3JtQmFzZS5wcm90b3R5cGUuaW5pdENybUZvcm0gPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgLy90aGUgY29udGV4dCBpcyBzZXQgdmlhIEBpbml0Rm9ybSBkZWNvcmF0b3JcbiAgICAgICAgLy9pdCdzIHRoZSBvbmx5IHdheSB0byBiZSBhYmxlIHRvIHVzZSB0aGUgQGNybVZhbHVlIGRlY29yYXRvclxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1CYXNlLnByb3RvdHlwZSwgXCJmb3JtQ29udGV4dFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGZvcm0gY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZvcm1Db250ZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgaW5pdEZvcm0sXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0XSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG4gICAgXSwgRm9ybUJhc2UucHJvdG90eXBlLCBcImluaXRDcm1Gb3JtXCIsIG51bGwpO1xuICAgIHJldHVybiBGb3JtQmFzZTtcbn0oKSk7XG4vKipcbiAqIEluaXRzIGNybSBmb3JtXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRDcm1Gb3JtKGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAoY3JtRm9ybVRvSW5zdGFuY2lhdGUpXG4gICAgICAgIHJldHVybiBuZXcgY3JtRm9ybVRvSW5zdGFuY2lhdGUoY29udGV4dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdEZvcm0odGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgIGRlYnVnZ2VyO1xuICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHRhcmdldC5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluaXRFdmVudHMoY29udGV4dC5nZXRGb3JtQ29udGV4dCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

        /***/
}),

/***/ "./src/log-management/logManager.ts":
/*!******************************************!*\
  !*** ./src/log-management/logManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogManager: () => (/* binding */ LogManager)\n/* harmony export */ });\nvar LogManager = /** @class */ (function () {\n    function LogManager() {\n    }\n    LogManager.logInfo = function (message) {\n        console.info(message);\n    };\n    LogManager.logCallerInfo = function (callerName, message) {\n        console.info(\"[\".concat(callerName, \"] - \").concat(message));\n    };\n    LogManager.eventLogInfo = function (formBase, eventType, eventTime, functionName) {\n        LogManager.logCallerInfo(formBase.appName, \" \".concat(eventType, \"  \").concat(eventTime, \" function '\").concat(functionName, \"'\"));\n    };\n    return LogManager;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXgvLi9zcmMvbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlci50cz8wNjY1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBMb2dNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvZ01hbmFnZXIoKSB7XG4gICAgfVxuICAgIExvZ01hbmFnZXIubG9nSW5mbyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcbiAgICB9O1xuICAgIExvZ01hbmFnZXIubG9nQ2FsbGVySW5mbyA9IGZ1bmN0aW9uIChjYWxsZXJOYW1lLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIltcIi5jb25jYXQoY2FsbGVyTmFtZSwgXCJdIC0gXCIpLmNvbmNhdChtZXNzYWdlKSk7XG4gICAgfTtcbiAgICBMb2dNYW5hZ2VyLmV2ZW50TG9nSW5mbyA9IGZ1bmN0aW9uIChmb3JtQmFzZSwgZXZlbnRUeXBlLCBldmVudFRpbWUsIGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICBMb2dNYW5hZ2VyLmxvZ0NhbGxlckluZm8oZm9ybUJhc2UuYXBwTmFtZSwgXCIgXCIuY29uY2F0KGV2ZW50VHlwZSwgXCIgIFwiKS5jb25jYXQoZXZlbnRUaW1lLCBcIiBmdW5jdGlvbiAnXCIpLmNvbmNhdChmdW5jdGlvbk5hbWUsIFwiJ1wiKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTG9nTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBMb2dNYW5hZ2VyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/log-management/logManager.ts\n");

        /***/
})

    /******/
});
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
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/account.ts");
/******/ 	window.mx = __webpack_exports__;
  /******/
  /******/
})()
  ;