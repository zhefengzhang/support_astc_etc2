(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/index.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        var _circularPool = require('./circular-pool');
        Object.defineProperty(exports, 'CircularPool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_circularPool).default;
            }
        });
        var _fixedArray = require('./fixed-array');
        Object.defineProperty(exports, 'FixedArray', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_fixedArray).default;
            }
        });
        var _linkedArray = require('./linked-array');
        Object.defineProperty(exports, 'LinkedArray', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_linkedArray).default;
            }
        });
        var _pool = require('./pool');
        Object.defineProperty(exports, 'Pool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_pool).default;
            }
        });
        var _recyclePool = require('./recycle-pool');
        Object.defineProperty(exports, 'RecyclePool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_recyclePool).default;
            }
        });
        var _typedArrayPool = require('./typed-array-pool');
        Object.defineProperty(exports, 'TypedArrayPool', {
            enumerable: true,
            get: function get() {
                return _interopRequireDefault(_typedArrayPool).default;
            }
        });
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvbWVtb3AvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBU0E7Ozs7Ozs7MkRBQ0FBOzs7Ozs7OzREQUNBQTs7Ozs7OztxREFDQUE7Ozs7Ozs7NERBQ0FBOzs7Ozs7OytEQUNBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2lyY3VsYXJQb29sIH0gZnJvbSAnLi9jaXJjdWxhci1wb29sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRml4ZWRBcnJheSB9IGZyb20gJy4vZml4ZWQtYXJyYXknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRBcnJheSB9IGZyb20gJy4vbGlua2VkLWFycmF5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9vbCB9IGZyb20gJy4vcG9vbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlY3ljbGVQb29sIH0gZnJvbSAnLi9yZWN5Y2xlLXBvb2wnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBlZEFycmF5UG9vbCB9IGZyb20gJy4vdHlwZWQtYXJyYXktcG9vbCc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NpcmN1bGFyUG9vbCA9IHJlcXVpcmUoJy4vY2lyY3VsYXItcG9vbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NpcmN1bGFyUG9vbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmN1bGFyUG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZml4ZWRBcnJheSA9IHJlcXVpcmUoJy4vZml4ZWQtYXJyYXknKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaXhlZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZml4ZWRBcnJheSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbGlua2VkQXJyYXkgPSByZXF1aXJlKCcuL2xpbmtlZC1hcnJheScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtlZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlua2VkQXJyYXkpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3Bvb2wgPSByZXF1aXJlKCcuL3Bvb2wnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQb29sJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcmVjeWNsZVBvb2wgPSByZXF1aXJlKCcuL3JlY3ljbGUtcG9vbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlY3ljbGVQb29sJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjeWNsZVBvb2wpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3R5cGVkQXJyYXlQb29sID0gcmVxdWlyZSgnLi90eXBlZC1hcnJheS1wb29sJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVHlwZWRBcnJheVBvb2wnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlZEFycmF5UG9vbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPMmxFUVVGVFFTeFBPenM3T3pzN096czdLME5CUTBGQkxFODdPenM3T3pzN096dG5SRUZEUVVFc1R6czdPenM3T3pzN08zbERRVU5CUVN4UE96czdPenM3T3pzN1owUkJRMEZCTEU4N096czdPenM3T3p0dFJFRkRRVUVzVHlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdRMmx5WTNWc1lYSlFiMjlzSUgwZ1puSnZiU0FuTGk5amFYSmpkV3hoY2kxd2IyOXNKenRjYm1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1JtbDRaV1JCY25KaGVTQjlJR1p5YjIwZ0p5NHZabWw0WldRdFlYSnlZWGtuTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk1hVzVyWldSQmNuSmhlU0I5SUdaeWIyMGdKeTR2YkdsdWEyVmtMV0Z5Y21GNUp6dGNibVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVUc5dmJDQjlJR1p5YjIwZ0p5NHZjRzl2YkNjN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRkpsWTNsamJHVlFiMjlzSUgwZ1puSnZiU0FuTGk5eVpXTjVZMnhsTFhCdmIyd25PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCVWVYQmxaRUZ5Y21GNVVHOXZiQ0I5SUdaeWIyMGdKeTR2ZEhsd1pXUXRZWEp5WVhrdGNHOXZiQ2M3SWwxOSJdfQ==