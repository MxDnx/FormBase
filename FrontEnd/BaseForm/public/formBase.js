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

/***/ "./src/decorators/initForm.ts":
/*!************************************!*\
  !*** ./src/decorators/initForm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initForm = void 0;\nfunction initForm(target, propertyKey, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        target.context = context;\n    };\n    return descriptor;\n}\nexports.initForm = initForm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9pbml0Rm9ybS50cyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLWJhc2UvLi9zcmMvZGVjb3JhdG9ycy9pbml0Rm9ybS50cz8zOTBjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0Rm9ybSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGluaXRGb3JtKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHRhcmdldC5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufVxuZXhwb3J0cy5pbml0Rm9ybSA9IGluaXRGb3JtO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/initForm.ts\n");

/***/ }),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initCrmForm = exports.FormBase = void 0;\nconst initForm_1 = __webpack_require__(/*! ./decorators/initForm */ \"./src/decorators/initForm.ts\");\nconst crmFormClass_1 = __webpack_require__(/*! ./decorators/crmFormClass */ \"./src/decorators/crmFormClass.ts\");\n/**\n * Form base\n */\nclass FormBase {\n    /**\n     * Creates an instance of form base.\n     * @param context\n     */\n    constructor(context) {\n        this.appName = \"[BaseForm]\";\n        this.initContextViaDecorator(context);\n    }\n    /**\n     * Inits form\n     * @param context\n     */\n    initContextViaDecorator(context) {\n        //the context is set via @initForm decorator\n        //it's the only way to be able to use the @crmValue decorator \n    }\n    /**\n     * Gets form context\n     */\n    get formContext() {\n        return this.context.getFormContext();\n    }\n}\nexports.FormBase = FormBase;\n__decorate([\n    initForm_1.initForm,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initContextViaDecorator\", null);\n/**\n * Inits crm form\n * @param context\n * @returns\n */\nfunction initCrmForm(context) {\n    if (crmFormClass_1.crmFormToInstanciate)\n        return new crmFormClass_1.crmFormToInstanciate(context);\n}\nexports.initCrmForm = initCrmForm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixHQUFHLGdCQUFnQjtBQUN0QyxtQkFBbUIsbUJBQU8sQ0FBQywyREFBdUI7QUFDbEQsdUJBQXVCLG1CQUFPLENBQUMsbUVBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLWJhc2UvLi9zcmMvZm9ybUJhc2UudHM/OWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRDcm1Gb3JtID0gZXhwb3J0cy5Gb3JtQmFzZSA9IHZvaWQgMDtcbmNvbnN0IGluaXRGb3JtXzEgPSByZXF1aXJlKFwiLi9kZWNvcmF0b3JzL2luaXRGb3JtXCIpO1xuY29uc3QgY3JtRm9ybUNsYXNzXzEgPSByZXF1aXJlKFwiLi9kZWNvcmF0b3JzL2NybUZvcm1DbGFzc1wiKTtcbi8qKlxuICogRm9ybSBiYXNlXG4gKi9cbmNsYXNzIEZvcm1CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGZvcm0gYmFzZS5cbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gXCJbQmFzZUZvcm1dXCI7XG4gICAgICAgIHRoaXMuaW5pdENvbnRleHRWaWFEZWNvcmF0b3IoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRzIGZvcm1cbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGluaXRDb250ZXh0VmlhRGVjb3JhdG9yKGNvbnRleHQpIHtcbiAgICAgICAgLy90aGUgY29udGV4dCBpcyBzZXQgdmlhIEBpbml0Rm9ybSBkZWNvcmF0b3JcbiAgICAgICAgLy9pdCdzIHRoZSBvbmx5IHdheSB0byBiZSBhYmxlIHRvIHVzZSB0aGUgQGNybVZhbHVlIGRlY29yYXRvciBcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBmb3JtIGNvbnRleHRcbiAgICAgKi9cbiAgICBnZXQgZm9ybUNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcbiAgICB9XG59XG5leHBvcnRzLkZvcm1CYXNlID0gRm9ybUJhc2U7XG5fX2RlY29yYXRlKFtcbiAgICBpbml0Rm9ybV8xLmluaXRGb3JtLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgRm9ybUJhc2UucHJvdG90eXBlLCBcImluaXRDb250ZXh0VmlhRGVjb3JhdG9yXCIsIG51bGwpO1xuLyoqXG4gKiBJbml0cyBjcm0gZm9ybVxuICogQHBhcmFtIGNvbnRleHRcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGluaXRDcm1Gb3JtKGNvbnRleHQpIHtcbiAgICBpZiAoY3JtRm9ybUNsYXNzXzEuY3JtRm9ybVRvSW5zdGFuY2lhdGUpXG4gICAgICAgIHJldHVybiBuZXcgY3JtRm9ybUNsYXNzXzEuY3JtRm9ybVRvSW5zdGFuY2lhdGUoY29udGV4dCk7XG59XG5leHBvcnRzLmluaXRDcm1Gb3JtID0gaW5pdENybUZvcm07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

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