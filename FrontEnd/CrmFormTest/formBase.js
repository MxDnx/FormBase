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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.crmFormClass = exports.crmFormToInstanciate = void 0;\n// Fonction de décoration pour enregistrer et décorer la classe\nfunction crmFormClass(constructor) {\n    exports.crmFormToInstanciate = constructor;\n    return constructor;\n}\nexports.crmFormClass = crmFormClass;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9jcm1Gb3JtQ2xhc3MudHMiLCJtYXBwaW5ncyI6Ijs7O0FBRUEsK0RBQStEO0FBQy9ELFNBQWdCLFlBQVksQ0FBMkQsV0FBYztJQUNqRyw0QkFBb0IsR0FBRyxXQUFXLENBQUM7SUFDbkMsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQUhELG9DQUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2RlY29yYXRvcnMvY3JtRm9ybUNsYXNzLnRzPzdhMzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBjcm1Gb3JtVG9JbnN0YW5jaWF0ZTogbmV3IChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkgPT4gYW55IHwgdW5kZWZpbmVkO1xyXG5cclxuLy8gRm9uY3Rpb24gZGUgZMOpY29yYXRpb24gcG91ciBlbnJlZ2lzdHJlciBldCBkw6ljb3JlciBsYSBjbGFzc2VcclxuZXhwb3J0IGZ1bmN0aW9uIGNybUZvcm1DbGFzczxUIGV4dGVuZHMgeyBuZXcoY29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpOiBhbnkgfT4oY29uc3RydWN0b3I6IFQpOiBUIHtcclxuICAgIGNybUZvcm1Ub0luc3RhbmNpYXRlID0gY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/decorators/crmFormClass.ts\n");

/***/ }),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initForm = exports.initCrmForm = exports.FormBase = void 0;\n//import { initForm } from \"./decorators/initForm\";\nconst crmFormClass_1 = __webpack_require__(/*! ./decorators/crmFormClass */ \"./src/decorators/crmFormClass.ts\");\ndebugger;\n/**\n * Form base\n */\nclass FormBase {\n    /**\n     * Creates an instance of form base.\n     * @param context\n     */\n    constructor(context) {\n        this.appName = \"[BaseForm]\";\n        this.initContextViaDecorator(context);\n    }\n    initContextViaDecorator(context) {\n        //the context is set via @initForm decorator\n        //it's the only way to be able to use the @crmValue decorator \n    }\n    /**\n     * Gets form context\n     */\n    get formContext() {\n        return this.context.getFormContext();\n    }\n}\nexports.FormBase = FormBase;\n__decorate([\n    initForm,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initContextViaDecorator\", null);\n/**\n * Inits crm form\n * @param context\n * @returns\n */\nfunction initCrmForm(context) {\n    if (crmFormClass_1.crmFormToInstanciate)\n        return new crmFormClass_1.crmFormToInstanciate(context);\n}\nexports.initCrmForm = initCrmForm;\nfunction initForm(target, propertyKey, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        target.context = context;\n    };\n    return descriptor;\n}\nexports.initForm = initForm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1EO0FBQ25ELGdIQUErRTtBQUMvRSxRQUFRLENBQUM7QUFFVDs7R0FFRztBQUNILE1BQWEsUUFBUTtJQU1qQjs7O09BR0c7SUFDSCxZQUFZLE9BQWdDO1FBUjVDLFlBQU8sR0FBVyxZQUFZLENBQUM7UUFTM0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCx1QkFBdUIsQ0FBQyxPQUFnQztRQUNwRCw0Q0FBNEM7UUFDNUMsOERBQThEO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUExQkQsNEJBMEJDO0FBWEc7SUFEQyxRQUFROzs7O3VEQUlSO0FBVUw7Ozs7R0FJRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxPQUFnQztJQUN4RCxJQUFJLG1DQUFvQjtRQUNwQixPQUFPLElBQUksbUNBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUhELGtDQUdDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLE1BQWdCLEVBQUUsV0FBbUIsRUFBRSxVQUFlO0lBRTNFLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFeEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLE9BQWdDO1FBQ3pELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRTdCLENBQUMsQ0FBQztJQUVGLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFWRCw0QkFVQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tYmFzZS8uL3NyYy9mb3JtQmFzZS50cz9mZjIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgaW5pdEZvcm0gfSBmcm9tIFwiLi9kZWNvcmF0b3JzL2luaXRGb3JtXCI7XHJcbmltcG9ydCB7IGNybUZvcm1DbGFzcywgY3JtRm9ybVRvSW5zdGFuY2lhdGUgfSBmcm9tIFwiLi9kZWNvcmF0b3JzL2NybUZvcm1DbGFzc1wiO1xyXG5kZWJ1Z2dlcjtcclxuXHJcbi8qKlxyXG4gKiBGb3JtIGJhc2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZSB7XHJcblxyXG4gICAgYXBwTmFtZTogc3RyaW5nID0gXCJbQmFzZUZvcm1dXCI7XHJcbiAgICBjb250ZXh0ITogWHJtLkV2ZW50cy5FdmVudENvbnRleHQ7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBmb3JtIGJhc2UuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmluaXRDb250ZXh0VmlhRGVjb3JhdG9yKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbml0Rm9ybVxyXG4gICAgaW5pdENvbnRleHRWaWFEZWNvcmF0b3IoY29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgICAgICAvL3RoZSBjb250ZXh0IGlzIHNldCB2aWEgQGluaXRGb3JtIGRlY29yYXRvclxyXG4gICAgICAgIC8vaXQncyB0aGUgb25seSB3YXkgdG8gYmUgYWJsZSB0byB1c2UgdGhlIEBjcm1WYWx1ZSBkZWNvcmF0b3IgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGZvcm0gY29udGV4dFxyXG4gICAgICovXHJcbiAgICBnZXQgZm9ybUNvbnRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdHMgY3JtIGZvcm1cclxuICogQHBhcmFtIGNvbnRleHQgXHJcbiAqIEByZXR1cm5zICBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q3JtRm9ybShjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkge1xyXG4gICAgaWYgKGNybUZvcm1Ub0luc3RhbmNpYXRlKVxyXG4gICAgICAgIHJldHVybiBuZXcgY3JtRm9ybVRvSW5zdGFuY2lhdGUoY29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9ybSh0YXJnZXQ6IEZvcm1CYXNlLCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBhbnkpIHtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcblxyXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkge1xyXG4gICAgICAgIHRhcmdldC5jb250ZXh0ID0gY29udGV4dDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

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