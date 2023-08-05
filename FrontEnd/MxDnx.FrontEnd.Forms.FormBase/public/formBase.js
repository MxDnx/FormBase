/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorators/crmValue.ts":
/*!************************************!*\
  !*** ./src/decorators/crmValue.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.crmValue = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nfunction crmValue(arg) {\n    return function (target, propertyKey) {\n        return;\n        return formBase_1.FormBase.FormContext.getAttribute(arg);\n    };\n}\nexports.crmValue = crmValue;\n\n\n//# sourceURL=webpack://form-base/./src/decorators/crmValue.ts?");

/***/ }),

/***/ "./src/decorators/onChange.ts":
/*!************************************!*\
  !*** ./src/decorators/onChange.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onChange = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst eventManager_1 = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nfunction onChange(attributeName) {\n    return function (target, propertyKey, descriptor) {\n        const originalMethod = descriptor.value;\n        descriptor.value = function (context) {\n            logManager_1.LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);\n            if (context === null) {\n                throw Error(\"Please Provide the context\");\n            }\n            formBase_1.FormBase.context = context;\n            const result = originalMethod.apply(this, context);\n            logManager_1.LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);\n            return result;\n        };\n        eventManager_1.EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });\n        return descriptor;\n    };\n}\nexports.onChange = onChange;\n\n\n//# sourceURL=webpack://form-base/./src/decorators/onChange.ts?");

/***/ }),

/***/ "./src/decorators/onLoad.ts":
/*!**********************************!*\
  !*** ./src/decorators/onLoad.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onLoad = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst eventManager_1 = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nfunction onLoad(target, propertyKey, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        logManager_1.LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);\n        if (context === null) {\n            throw Error(\"Please Provide the context\");\n        }\n        formBase_1.FormBase.context = context;\n        const result = originalMethod.apply(this, context);\n        logManager_1.LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);\n        return result;\n    };\n    eventManager_1.EventManager.onLoadEvents.push(descriptor.value);\n    return descriptor;\n}\nexports.onLoad = onLoad;\n\n\n//# sourceURL=webpack://form-base/./src/decorators/onLoad.ts?");

/***/ }),

/***/ "./src/event-management/eventManager.ts":
/*!**********************************************!*\
  !*** ./src/event-management/eventManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EventManager = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nclass EventManager {\n    constructor() {\n    }\n    initEvents() {\n        logManager_1.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onChangeEvents.forEach(onChangeEvent => {\n            formBase_1.FormBase.FormContext.getAttribute(onChangeEvent.attributeName).addOnChange(onChangeEvent.callback);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnSave Events\");\n        EventManager.onSaveEvents.forEach(onSaveEvent => {\n            formBase_1.FormBase.FormContext.data.entity.addOnSave(onSaveEvent);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnPostSave Events\");\n        EventManager.onPostSaveEvents.forEach(onPostSaveEvent => {\n            formBase_1.FormBase.FormContext.data.entity.addOnPostSave(onPostSaveEvent);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onLoadEvents.forEach(onLoadEvent => {\n            formBase_1.FormBase.FormContext.data.addOnLoad(onLoadEvent);\n        });\n    }\n}\nexports.EventManager = EventManager;\nEventManager.onLoadEvents = new Array();\nEventManager.onChangeEvents = new Array();\nEventManager.onSaveEvents = new Array();\nEventManager.onPostSaveEvents = new Array();\n\n\n//# sourceURL=webpack://form-base/./src/event-management/eventManager.ts?");

/***/ }),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FormBase = void 0;\nconst onLoad_1 = __webpack_require__(/*! ./decorators/onLoad */ \"./src/decorators/onLoad.ts\");\nconst crmValue_1 = __webpack_require__(/*! ./decorators/crmValue */ \"./src/decorators/crmValue.ts\");\nconst onChange_1 = __webpack_require__(/*! ./decorators/onChange */ \"./src/decorators/onChange.ts\");\nconst eventManager_1 = __webpack_require__(/*! ./event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nclass FormBase {\n    constructor() {\n        this.eventManager = new eventManager_1.EventManager();\n        this.eventManager.initEvents();\n    }\n    static get FormContext() {\n        return FormBase.context.getFormContext();\n    }\n    initForm() {\n    }\n    lastNameOnChange() {\n    }\n}\nexports.FormBase = FormBase;\nFormBase.appName = \"[BasicForm]\";\n__decorate([\n    (0, crmValue_1.crmValue)(\"firstname\"),\n    __metadata(\"design:type\", Object)\n], FormBase.prototype, \"firstname\", void 0);\n__decorate([\n    (0, crmValue_1.crmValue)(\"lastname\"),\n    __metadata(\"design:type\", Object)\n], FormBase.prototype, \"lastname\", void 0);\n__decorate([\n    onLoad_1.onLoad,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initForm\", null);\n__decorate([\n    (0, onChange_1.onChange)(\"lastname\"),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"lastNameOnChange\", null);\nlet b = new FormBase();\nb.initForm();\n\n\n//# sourceURL=webpack://form-base/./src/formBase.ts?");

/***/ }),

/***/ "./src/log-management/logManager.ts":
/*!******************************************!*\
  !*** ./src/log-management/logManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LogManager = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nclass LogManager {\n    static logInfo(message) {\n        console.info(`[${formBase_1.FormBase.appName}] - ${message}`);\n    }\n}\nexports.LogManager = LogManager;\n\n\n//# sourceURL=webpack://form-base/./src/log-management/logManager.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/formBase.ts");
/******/ 	
/******/ })()
;