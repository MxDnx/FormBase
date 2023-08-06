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

/***/ "./src/decorators/crmFormClass.ts":
/*!****************************************!*\
  !*** ./src/decorators/crmFormClass.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.crmFormClass = exports.crmFormToInstanciate = void 0;\n// Fonction de décoration pour enregistrer et décorer la classe\nfunction crmFormClass(constructor) {\n    exports.crmFormToInstanciate = constructor;\n    return constructor;\n}\nexports.crmFormClass = crmFormClass;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9jcm1Gb3JtQ2xhc3MudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxJQUFJLDRCQUE0QjtBQUNoQztBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2RlY29yYXRvcnMvY3JtRm9ybUNsYXNzLnRzP2NmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNybUZvcm1DbGFzcyA9IGV4cG9ydHMuY3JtRm9ybVRvSW5zdGFuY2lhdGUgPSB2b2lkIDA7XG4vLyBGb25jdGlvbiBkZSBkw6ljb3JhdGlvbiBwb3VyIGVucmVnaXN0cmVyIGV0IGTDqWNvcmVyIGxhIGNsYXNzZVxuZnVuY3Rpb24gY3JtRm9ybUNsYXNzKGNvbnN0cnVjdG9yKSB7XG4gICAgZXhwb3J0cy5jcm1Gb3JtVG9JbnN0YW5jaWF0ZSA9IGNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cbmV4cG9ydHMuY3JtRm9ybUNsYXNzID0gY3JtRm9ybUNsYXNzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/crmFormClass.ts\n");

/***/ }),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initForm = exports.initCrmForm = exports.FormBase = void 0;\n//import { initForm } from \"./decorators/initForm\";\nconst crmFormClass_1 = __webpack_require__(/*! ./decorators/crmFormClass */ \"./src/decorators/crmFormClass.ts\");\n/**\n * Form base\n */\nclass FormBase {\n    /**\n     * Creates an instance of form base.\n     * @param context\n     */\n    constructor(context) {\n        this.appName = \"[BaseForm]\";\n        this.initContextViaDecorator(context);\n    }\n    initContextViaDecorator(context) {\n        //the context is set via @initForm decorator\n        //it's the only way to be able to use the @crmValue decorator \n    }\n    /**\n     * Gets form context\n     */\n    get formContext() {\n        return this.context.getFormContext();\n    }\n}\nexports.FormBase = FormBase;\n__decorate([\n    initForm,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initContextViaDecorator\", null);\n/**\n * Inits crm form\n * @param context\n * @returns\n */\nfunction initCrmForm(context) {\n    if (crmFormClass_1.crmFormToInstanciate)\n        return new crmFormClass_1.crmFormToInstanciate(context);\n}\nexports.initCrmForm = initCrmForm;\nfunction initForm(target, propertyKey, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        target.context = context;\n    };\n    return descriptor;\n}\nexports.initForm = initForm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLGdCQUFnQjtBQUN6RCxXQUFXLFdBQVc7QUFDdEIsdUJBQXVCLG1CQUFPLENBQUMsbUVBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2Zvcm1CYXNlLnRzPzljOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0Rm9ybSA9IGV4cG9ydHMuaW5pdENybUZvcm0gPSBleHBvcnRzLkZvcm1CYXNlID0gdm9pZCAwO1xuLy9pbXBvcnQgeyBpbml0Rm9ybSB9IGZyb20gXCIuL2RlY29yYXRvcnMvaW5pdEZvcm1cIjtcbmNvbnN0IGNybUZvcm1DbGFzc18xID0gcmVxdWlyZShcIi4vZGVjb3JhdG9ycy9jcm1Gb3JtQ2xhc3NcIik7XG4vKipcbiAqIEZvcm0gYmFzZVxuICovXG5jbGFzcyBGb3JtQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBmb3JtIGJhc2UuXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IFwiW0Jhc2VGb3JtXVwiO1xuICAgICAgICB0aGlzLmluaXRDb250ZXh0VmlhRGVjb3JhdG9yKGNvbnRleHQpO1xuICAgIH1cbiAgICBpbml0Q29udGV4dFZpYURlY29yYXRvcihjb250ZXh0KSB7XG4gICAgICAgIC8vdGhlIGNvbnRleHQgaXMgc2V0IHZpYSBAaW5pdEZvcm0gZGVjb3JhdG9yXG4gICAgICAgIC8vaXQncyB0aGUgb25seSB3YXkgdG8gYmUgYWJsZSB0byB1c2UgdGhlIEBjcm1WYWx1ZSBkZWNvcmF0b3IgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgZm9ybSBjb250ZXh0XG4gICAgICovXG4gICAgZ2V0IGZvcm1Db250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZvcm1Db250ZXh0KCk7XG4gICAgfVxufVxuZXhwb3J0cy5Gb3JtQmFzZSA9IEZvcm1CYXNlO1xuX19kZWNvcmF0ZShbXG4gICAgaW5pdEZvcm0sXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBGb3JtQmFzZS5wcm90b3R5cGUsIFwiaW5pdENvbnRleHRWaWFEZWNvcmF0b3JcIiwgbnVsbCk7XG4vKipcbiAqIEluaXRzIGNybSBmb3JtXG4gKiBAcGFyYW0gY29udGV4dFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaW5pdENybUZvcm0oY29udGV4dCkge1xuICAgIGlmIChjcm1Gb3JtQ2xhc3NfMS5jcm1Gb3JtVG9JbnN0YW5jaWF0ZSlcbiAgICAgICAgcmV0dXJuIG5ldyBjcm1Gb3JtQ2xhc3NfMS5jcm1Gb3JtVG9JbnN0YW5jaWF0ZShjb250ZXh0KTtcbn1cbmV4cG9ydHMuaW5pdENybUZvcm0gPSBpbml0Q3JtRm9ybTtcbmZ1bmN0aW9uIGluaXRGb3JtKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHRhcmdldC5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufVxuZXhwb3J0cy5pbml0Rm9ybSA9IGluaXRGb3JtO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

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