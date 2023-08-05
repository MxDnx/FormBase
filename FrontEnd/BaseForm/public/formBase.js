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

/***/ "./src/decorators/onLoad.ts":
/*!**********************************!*\
  !*** ./src/decorators/onLoad.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onLoad = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst eventManager_1 = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nfunction onLoad(target, propertyKey, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = function (context) {\n        logManager_1.LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);\n        if (context === null) {\n            throw Error(\"Please Provide the context\");\n        }\n        formBase_1.FormBase.context = context;\n        const result = originalMethod.apply(this, context);\n        logManager_1.LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);\n        return result;\n    };\n    eventManager_1.EventManager.onLoadEvents.push(descriptor.value);\n    return descriptor;\n}\nexports.onLoad = onLoad;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9vbkxvYWQudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkLG1CQUFtQixtQkFBTyxDQUFDLHNDQUFhO0FBQ3hDLHVCQUF1QixtQkFBTyxDQUFDLGdGQUFrQztBQUNqRSxxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBOEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLFlBQVk7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxZQUFZO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2RlY29yYXRvcnMvb25Mb2FkLnRzP2QwZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uTG9hZCA9IHZvaWQgMDtcbmNvbnN0IGZvcm1CYXNlXzEgPSByZXF1aXJlKFwiLi4vZm9ybUJhc2VcIik7XG5jb25zdCBldmVudE1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9ldmVudC1tYW5hZ2VtZW50L2V2ZW50TWFuYWdlclwiKTtcbmNvbnN0IGxvZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9sb2ctbWFuYWdlbWVudC9sb2dNYW5hZ2VyXCIpO1xuZnVuY3Rpb24gb25Mb2FkKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGxvZ01hbmFnZXJfMS5Mb2dNYW5hZ2VyLmxvZ0luZm8oYFN0YXJ0IE9uTG9hZCBFdmVudCBmdW5jdGlvbiAnJHtwcm9wZXJ0eUtleX0nYCk7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIHRoZSBjb250ZXh0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1CYXNlXzEuRm9ybUJhc2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGNvbnRleHQpO1xuICAgICAgICBsb2dNYW5hZ2VyXzEuTG9nTWFuYWdlci5sb2dJbmZvKGBFbmQgT25Mb2FkIEV2ZW50IGZ1bmN0aW9uICcke3Byb3BlcnR5S2V5fSdgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIGV2ZW50TWFuYWdlcl8xLkV2ZW50TWFuYWdlci5vbkxvYWRFdmVudHMucHVzaChkZXNjcmlwdG9yLnZhbHVlKTtcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbn1cbmV4cG9ydHMub25Mb2FkID0gb25Mb2FkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/decorators/onLoad.ts\n");

/***/ }),

/***/ "./src/event-management/eventManager.ts":
/*!**********************************************!*\
  !*** ./src/event-management/eventManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EventManager = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nclass EventManager {\n    constructor() {\n    }\n    initEvents() {\n        logManager_1.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onChangeEvents.forEach(onChangeEvent => {\n            formBase_1.FormBase.FormContext.getAttribute(onChangeEvent.attributeName).addOnChange(onChangeEvent.callback);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnSave Events\");\n        EventManager.onSaveEvents.forEach(onSaveEvent => {\n            formBase_1.FormBase.FormContext.data.entity.addOnSave(onSaveEvent);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnPostSave Events\");\n        EventManager.onPostSaveEvents.forEach(onPostSaveEvent => {\n            formBase_1.FormBase.FormContext.data.entity.addOnPostSave(onPostSaveEvent);\n        });\n        logManager_1.LogManager.logInfo(\"Load OnChange Events\");\n        EventManager.onLoadEvents.forEach(onLoadEvent => {\n            formBase_1.FormBase.FormContext.data.addOnLoad(onLoadEvent);\n        });\n    }\n}\nexports.EventManager = EventManager;\nEventManager.onLoadEvents = new Array();\nEventManager.onChangeEvents = new Array();\nEventManager.onSaveEvents = new Array();\nEventManager.onPostSaveEvents = new Array();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQtbWFuYWdlbWVudC9ldmVudE1hbmFnZXIudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLG1CQUFtQixtQkFBTyxDQUFDLHNDQUFhO0FBQ3hDLHFCQUFxQixtQkFBTyxDQUFDLHdFQUE4QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2V2ZW50LW1hbmFnZW1lbnQvZXZlbnRNYW5hZ2VyLnRzPzdjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkV2ZW50TWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGZvcm1CYXNlXzEgPSByZXF1aXJlKFwiLi4vZm9ybUJhc2VcIik7XG5jb25zdCBsb2dNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlclwiKTtcbmNsYXNzIEV2ZW50TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIGxvZ01hbmFnZXJfMS5Mb2dNYW5hZ2VyLmxvZ0luZm8oXCJMb2FkIE9uQ2hhbmdlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uQ2hhbmdlRXZlbnRzLmZvckVhY2gob25DaGFuZ2VFdmVudCA9PiB7XG4gICAgICAgICAgICBmb3JtQmFzZV8xLkZvcm1CYXNlLkZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShvbkNoYW5nZUV2ZW50LmF0dHJpYnV0ZU5hbWUpLmFkZE9uQ2hhbmdlKG9uQ2hhbmdlRXZlbnQuY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9nTWFuYWdlcl8xLkxvZ01hbmFnZXIubG9nSW5mbyhcIkxvYWQgT25TYXZlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uU2F2ZUV2ZW50cy5mb3JFYWNoKG9uU2F2ZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIGZvcm1CYXNlXzEuRm9ybUJhc2UuRm9ybUNvbnRleHQuZGF0YS5lbnRpdHkuYWRkT25TYXZlKG9uU2F2ZUV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvZ01hbmFnZXJfMS5Mb2dNYW5hZ2VyLmxvZ0luZm8oXCJMb2FkIE9uUG9zdFNhdmUgRXZlbnRzXCIpO1xuICAgICAgICBFdmVudE1hbmFnZXIub25Qb3N0U2F2ZUV2ZW50cy5mb3JFYWNoKG9uUG9zdFNhdmVFdmVudCA9PiB7XG4gICAgICAgICAgICBmb3JtQmFzZV8xLkZvcm1CYXNlLkZvcm1Db250ZXh0LmRhdGEuZW50aXR5LmFkZE9uUG9zdFNhdmUob25Qb3N0U2F2ZUV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvZ01hbmFnZXJfMS5Mb2dNYW5hZ2VyLmxvZ0luZm8oXCJMb2FkIE9uQ2hhbmdlIEV2ZW50c1wiKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLm9uTG9hZEV2ZW50cy5mb3JFYWNoKG9uTG9hZEV2ZW50ID0+IHtcbiAgICAgICAgICAgIGZvcm1CYXNlXzEuRm9ybUJhc2UuRm9ybUNvbnRleHQuZGF0YS5hZGRPbkxvYWQob25Mb2FkRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlcjtcbkV2ZW50TWFuYWdlci5vbkxvYWRFdmVudHMgPSBuZXcgQXJyYXkoKTtcbkV2ZW50TWFuYWdlci5vbkNoYW5nZUV2ZW50cyA9IG5ldyBBcnJheSgpO1xuRXZlbnRNYW5hZ2VyLm9uU2F2ZUV2ZW50cyA9IG5ldyBBcnJheSgpO1xuRXZlbnRNYW5hZ2VyLm9uUG9zdFNhdmVFdmVudHMgPSBuZXcgQXJyYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/event-management/eventManager.ts\n");

/***/ }),

/***/ "./src/formBase.ts":
/*!*************************!*\
  !*** ./src/formBase.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FormBase = void 0;\nconst onLoad_1 = __webpack_require__(/*! ./decorators/onLoad */ \"./src/decorators/onLoad.ts\");\nconst eventManager_1 = __webpack_require__(/*! ./event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nclass FormBase {\n    constructor() {\n        this.eventManager = new eventManager_1.EventManager();\n    }\n    static get FormContext() {\n        return FormBase.context.getFormContext();\n    }\n    initForm(context) {\n        this.eventManager.initEvents();\n    }\n}\nexports.FormBase = FormBase;\nFormBase.appName = \"[BaseForm]\";\n__decorate([\n    onLoad_1.onLoad,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initForm\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQixpQkFBaUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDOUMsdUJBQXVCLG1CQUFPLENBQUMsK0VBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLWJhc2UvLi9zcmMvZm9ybUJhc2UudHM/OWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZvcm1CYXNlID0gdm9pZCAwO1xuY29uc3Qgb25Mb2FkXzEgPSByZXF1aXJlKFwiLi9kZWNvcmF0b3JzL29uTG9hZFwiKTtcbmNvbnN0IGV2ZW50TWFuYWdlcl8xID0gcmVxdWlyZShcIi4vZXZlbnQtbWFuYWdlbWVudC9ldmVudE1hbmFnZXJcIik7XG5jbGFzcyBGb3JtQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gbmV3IGV2ZW50TWFuYWdlcl8xLkV2ZW50TWFuYWdlcigpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IEZvcm1Db250ZXh0KCkge1xuICAgICAgICByZXR1cm4gRm9ybUJhc2UuY29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xuICAgIH1cbiAgICBpbml0Rm9ybShjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmluaXRFdmVudHMoKTtcbiAgICB9XG59XG5leHBvcnRzLkZvcm1CYXNlID0gRm9ybUJhc2U7XG5Gb3JtQmFzZS5hcHBOYW1lID0gXCJbQmFzZUZvcm1dXCI7XG5fX2RlY29yYXRlKFtcbiAgICBvbkxvYWRfMS5vbkxvYWQsXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBGb3JtQmFzZS5wcm90b3R5cGUsIFwiaW5pdEZvcm1cIiwgbnVsbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

/***/ }),

/***/ "./src/log-management/logManager.ts":
/*!******************************************!*\
  !*** ./src/log-management/logManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LogManager = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nclass LogManager {\n    static logInfo(message) {\n        console.info(`[${formBase_1.FormBase.appName}] - ${message}`);\n    }\n}\nexports.LogManager = LogManager;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlci50cyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsbUJBQW1CLG1CQUFPLENBQUMsc0NBQWE7QUFDeEM7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEIsTUFBTSxRQUFRO0FBQ25FO0FBQ0E7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLWJhc2UvLi9zcmMvbG9nLW1hbmFnZW1lbnQvbG9nTWFuYWdlci50cz8wNjY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2dNYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZm9ybUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9mb3JtQmFzZVwiKTtcbmNsYXNzIExvZ01hbmFnZXIge1xuICAgIHN0YXRpYyBsb2dJbmZvKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGBbJHtmb3JtQmFzZV8xLkZvcm1CYXNlLmFwcE5hbWV9XSAtICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG5leHBvcnRzLkxvZ01hbmFnZXIgPSBMb2dNYW5hZ2VyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/log-management/logManager.ts\n");

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