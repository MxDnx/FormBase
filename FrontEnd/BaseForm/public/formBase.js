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

/***/ "./src/decorators/crmValue.ts":
/*!************************************!*\
  !*** ./src/decorators/crmValue.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.crmValue = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nfunction crmValue(arg) {\n    return function (target, propertyKey) {\n        return;\n        return formBase_1.FormBase.FormContext.getAttribute(arg);\n    };\n}\nexports.crmValue = crmValue;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9jcm1WYWx1ZS50cyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsbUJBQW1CLG1CQUFPLENBQUMsc0NBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS1iYXNlLy4vc3JjL2RlY29yYXRvcnMvY3JtVmFsdWUudHM/NWRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JtVmFsdWUgPSB2b2lkIDA7XG5jb25zdCBmb3JtQmFzZV8xID0gcmVxdWlyZShcIi4uL2Zvcm1CYXNlXCIpO1xuZnVuY3Rpb24gY3JtVmFsdWUoYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgcmV0dXJuIGZvcm1CYXNlXzEuRm9ybUJhc2UuRm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKGFyZyk7XG4gICAgfTtcbn1cbmV4cG9ydHMuY3JtVmFsdWUgPSBjcm1WYWx1ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decorators/crmValue.ts\n");

/***/ }),

/***/ "./src/decorators/onChange.ts":
/*!************************************!*\
  !*** ./src/decorators/onChange.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onChange = void 0;\nconst formBase_1 = __webpack_require__(/*! ../formBase */ \"./src/formBase.ts\");\nconst eventManager_1 = __webpack_require__(/*! ../event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nconst logManager_1 = __webpack_require__(/*! ../log-management/logManager */ \"./src/log-management/logManager.ts\");\nfunction onChange(attributeName) {\n    return function (target, propertyKey, descriptor) {\n        const originalMethod = descriptor.value;\n        descriptor.value = function (context) {\n            logManager_1.LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);\n            if (context === null) {\n                throw Error(\"Please Provide the context\");\n            }\n            formBase_1.FormBase.context = context;\n            const result = originalMethod.apply(this, context);\n            logManager_1.LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);\n            return result;\n        };\n        eventManager_1.EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });\n        return descriptor;\n    };\n}\nexports.onChange = onChange;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb3JhdG9ycy9vbkNoYW5nZS50cyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsbUJBQW1CLG1CQUFPLENBQUMsc0NBQWE7QUFDeEMsdUJBQXVCLG1CQUFPLENBQUMsZ0ZBQWtDO0FBQ2pFLHFCQUFxQixtQkFBTyxDQUFDLHdFQUE4QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsWUFBWTtBQUN0RjtBQUNBO0FBQ0EsMERBQTBELDBEQUEwRDtBQUNwSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLWJhc2UvLi9zcmMvZGVjb3JhdG9ycy9vbkNoYW5nZS50cz9mMGY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbkNoYW5nZSA9IHZvaWQgMDtcbmNvbnN0IGZvcm1CYXNlXzEgPSByZXF1aXJlKFwiLi4vZm9ybUJhc2VcIik7XG5jb25zdCBldmVudE1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9ldmVudC1tYW5hZ2VtZW50L2V2ZW50TWFuYWdlclwiKTtcbmNvbnN0IGxvZ01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9sb2ctbWFuYWdlbWVudC9sb2dNYW5hZ2VyXCIpO1xuZnVuY3Rpb24gb25DaGFuZ2UoYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgICAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgbG9nTWFuYWdlcl8xLkxvZ01hbmFnZXIubG9nSW5mbyhgU3RhcnQgT25Mb2FkIEV2ZW50IGZ1bmN0aW9uICcke3Byb3BlcnR5S2V5fSdgKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSB0aGUgY29udGV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1CYXNlXzEuRm9ybUJhc2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGxvZ01hbmFnZXJfMS5Mb2dNYW5hZ2VyLmxvZ0luZm8oYEVuZCBPbkxvYWQgRXZlbnQgZnVuY3Rpb24gJyR7cHJvcGVydHlLZXl9J2ApO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyXzEuRXZlbnRNYW5hZ2VyLm9uQ2hhbmdlRXZlbnRzLnB1c2goeyBhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGVOYW1lLCBjYWxsYmFjazogZGVzY3JpcHRvci52YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfTtcbn1cbmV4cG9ydHMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decorators/onChange.ts\n");

/***/ }),

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

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FormBase = void 0;\nconst onLoad_1 = __webpack_require__(/*! ./decorators/onLoad */ \"./src/decorators/onLoad.ts\");\nconst crmValue_1 = __webpack_require__(/*! ./decorators/crmValue */ \"./src/decorators/crmValue.ts\");\nconst onChange_1 = __webpack_require__(/*! ./decorators/onChange */ \"./src/decorators/onChange.ts\");\nconst eventManager_1 = __webpack_require__(/*! ./event-management/eventManager */ \"./src/event-management/eventManager.ts\");\nclass FormBase {\n    constructor() {\n        this.eventManager = new eventManager_1.EventManager();\n        // this.eventManager.initEvents();\n    }\n    static get FormContext() {\n        return FormBase.context.getFormContext();\n    }\n    initForm() {\n    }\n    lastNameOnChange() {\n    }\n}\nexports.FormBase = FormBase;\nFormBase.appName = \"[BaseForm]\";\n__decorate([\n    (0, crmValue_1.crmValue)(\"firstname\"),\n    __metadata(\"design:type\", Object)\n], FormBase.prototype, \"firstname\", void 0);\n__decorate([\n    (0, crmValue_1.crmValue)(\"lastname\"),\n    __metadata(\"design:type\", Object)\n], FormBase.prototype, \"lastname\", void 0);\n__decorate([\n    onLoad_1.onLoad,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"initForm\", null);\n__decorate([\n    (0, onChange_1.onChange)(\"lastname\"),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], FormBase.prototype, \"lastNameOnChange\", null);\nlet b = new FormBase();\nb.initForm();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybUJhc2UudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQixpQkFBaUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDOUMsbUJBQW1CLG1CQUFPLENBQUMsMkRBQXVCO0FBQ2xELG1CQUFtQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRUFBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tYmFzZS8uL3NyYy9mb3JtQmFzZS50cz85YzhjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRm9ybUJhc2UgPSB2b2lkIDA7XG5jb25zdCBvbkxvYWRfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcnMvb25Mb2FkXCIpO1xuY29uc3QgY3JtVmFsdWVfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcnMvY3JtVmFsdWVcIik7XG5jb25zdCBvbkNoYW5nZV8xID0gcmVxdWlyZShcIi4vZGVjb3JhdG9ycy9vbkNoYW5nZVwiKTtcbmNvbnN0IGV2ZW50TWFuYWdlcl8xID0gcmVxdWlyZShcIi4vZXZlbnQtbWFuYWdlbWVudC9ldmVudE1hbmFnZXJcIik7XG5jbGFzcyBGb3JtQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gbmV3IGV2ZW50TWFuYWdlcl8xLkV2ZW50TWFuYWdlcigpO1xuICAgICAgICAvLyB0aGlzLmV2ZW50TWFuYWdlci5pbml0RXZlbnRzKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRm9ybUNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiBGb3JtQmFzZS5jb250ZXh0LmdldEZvcm1Db250ZXh0KCk7XG4gICAgfVxuICAgIGluaXRGb3JtKCkge1xuICAgIH1cbiAgICBsYXN0TmFtZU9uQ2hhbmdlKCkge1xuICAgIH1cbn1cbmV4cG9ydHMuRm9ybUJhc2UgPSBGb3JtQmFzZTtcbkZvcm1CYXNlLmFwcE5hbWUgPSBcIltCYXNlRm9ybV1cIjtcbl9fZGVjb3JhdGUoW1xuICAgICgwLCBjcm1WYWx1ZV8xLmNybVZhbHVlKShcImZpcnN0bmFtZVwiKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuXSwgRm9ybUJhc2UucHJvdG90eXBlLCBcImZpcnN0bmFtZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgKDAsIGNybVZhbHVlXzEuY3JtVmFsdWUpKFwibGFzdG5hbWVcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbl0sIEZvcm1CYXNlLnByb3RvdHlwZSwgXCJsYXN0bmFtZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb25Mb2FkXzEub25Mb2FkLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgRm9ybUJhc2UucHJvdG90eXBlLCBcImluaXRGb3JtXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgKDAsIG9uQ2hhbmdlXzEub25DaGFuZ2UpKFwibGFzdG5hbWVcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBGb3JtQmFzZS5wcm90b3R5cGUsIFwibGFzdE5hbWVPbkNoYW5nZVwiLCBudWxsKTtcbmxldCBiID0gbmV3IEZvcm1CYXNlKCk7XG5iLmluaXRGb3JtKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/formBase.ts\n");

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