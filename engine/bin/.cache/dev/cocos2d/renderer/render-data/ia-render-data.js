(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/render-data/ia-render-data.js';
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
        exports.default = undefined;
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _baseRenderData = require('./base-render-data');
        var _baseRenderData2 = _interopRequireDefault(_baseRenderData);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var IARenderData = function (_BaseRenderData) {
            _inherits(IARenderData, _BaseRenderData);
            function IARenderData() {
                _classCallCheck(this, IARenderData);
                var _this = _possibleConstructorReturn(this, (IARenderData.__proto__ || Object.getPrototypeOf(IARenderData)).call(this));
                _this.ia = null;
                return _this;
            }
            _createClass(IARenderData, [{
                    key: 'type',
                    get: function get() {
                        return IARenderData.type;
                    }
                }]);
            return IARenderData;
        }(_baseRenderData2.default);
        exports.default = IARenderData;
        IARenderData.type = 'IARenderData';
        cc.IARenderData = IARenderData;
        module.exports = exports['default'];
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlhLXJlbmRlci1kYXRhLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvcmVuZGVyLWRhdGEvaWEtcmVuZGVyLWRhdGEuanMiXSwibmFtZXMiOlsiSUFSZW5kZXJEYXRhIiwiaWEiLCJ0eXBlIiwiQmFzZVJlbmRlckRhdGEiLCJjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFQSxJQUFBLGVBQUEsR0FBQSxPQUFBLENBQUEsb0JBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9xQkEsWUFBQUE7O1lBQ2pCLFNBQUEsWUFBQSxHQUFlO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLEVBQUE7QUFBQSxnQkFBQSxJQUFBLEtBQUEsR0FBQSwwQkFBQSxDQUFBLElBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsZ0JBRVgsS0FBQSxDQUFLQyxFQUFMLEdBQVUsSUFBVixDQUZXO0FBQUEsZ0JBQUEsT0FBQSxLQUFBLENBQUE7QUFBQTs7O3dDQUtIO0FBQUEsd0JBQ1IsT0FBT0QsWUFBQUEsQ0FBYUUsSUFBcEIsQ0FEUTtBQUFBOzs7VUFOMEJDLGdCQUFBQSxDQUFBQTswQkFBckJIO1FBV3JCQSxZQUFBQSxDQUFhRSxJQUFiRixHQUFvQixjQUFwQkE7UUFDQUksRUFBQUEsQ0FBR0osWUFBSEksR0FBa0JKLFlBQWxCSSIsImZpbGUiOiJpYS1yZW5kZXItZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gIFxuIFxuaW1wb3J0IEJhc2VSZW5kZXJEYXRhIGZyb20gJy4vYmFzZS1yZW5kZXItZGF0YSc7XG5cbi8qKlxuICogSUFSZW5kZXJEYXRhIGlzIHVzZXIgY3VzdG9taXplZCByZW5kZXIgZGF0YSB0eXBlLCB1c2VyIHNob3VsZCBwcm92aWRlIHRoZSBlbnRpZXIgaW5wdXQgYXNzZW1ibGVyLlxuICogSUFSZW5kZXJEYXRhIGp1c3QgZGVmaW5lcyBhIHByb3BlcnR5IGBpYWAgZm9yIGFjY2Vzc2luZyB0aGUgaW5wdXQgYXNzZW1ibGVyLlxuICogSXQgZG9lc24ndCBtYW5hZ2UgbWVtb3J5IHNvIHVzZXJzIHNob3VsZCBtYW5hZ2UgdGhlIG1lbW9yeSBvZiBpbnB1dCBhc3NlbWJsZXIgYnkgdGhlbXNlbHZlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUFSZW5kZXJEYXRhIGV4dGVuZHMgQmFzZVJlbmRlckRhdGEge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pYSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUgKCkge1xuICAgICAgICByZXR1cm4gSUFSZW5kZXJEYXRhLnR5cGU7XG4gICAgfVxufVxuXG5JQVJlbmRlckRhdGEudHlwZSA9ICdJQVJlbmRlckRhdGEnO1xuY2MuSUFSZW5kZXJEYXRhID0gSUFSZW5kZXJEYXRhOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Jhc2VSZW5kZXJEYXRhID0gcmVxdWlyZSgnLi9iYXNlLXJlbmRlci1kYXRhJyk7XG5cbnZhciBfYmFzZVJlbmRlckRhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZVJlbmRlckRhdGEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIENvcHlyaWdodCAoYykgMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gIFxuXG4vKipcbiAqIElBUmVuZGVyRGF0YSBpcyB1c2VyIGN1c3RvbWl6ZWQgcmVuZGVyIGRhdGEgdHlwZSwgdXNlciBzaG91bGQgcHJvdmlkZSB0aGUgZW50aWVyIGlucHV0IGFzc2VtYmxlci5cbiAqIElBUmVuZGVyRGF0YSBqdXN0IGRlZmluZXMgYSBwcm9wZXJ0eSBgaWFgIGZvciBhY2Nlc3NpbmcgdGhlIGlucHV0IGFzc2VtYmxlci5cbiAqIEl0IGRvZXNuJ3QgbWFuYWdlIG1lbW9yeSBzbyB1c2VycyBzaG91bGQgbWFuYWdlIHRoZSBtZW1vcnkgb2YgaW5wdXQgYXNzZW1ibGVyIGJ5IHRoZW1zZWx2ZXMuXG4gKi9cbnZhciBJQVJlbmRlckRhdGEgPSBmdW5jdGlvbiAoX0Jhc2VSZW5kZXJEYXRhKSB7XG4gICAgX2luaGVyaXRzKElBUmVuZGVyRGF0YSwgX0Jhc2VSZW5kZXJEYXRhKTtcblxuICAgIGZ1bmN0aW9uIElBUmVuZGVyRGF0YSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElBUmVuZGVyRGF0YSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElBUmVuZGVyRGF0YS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElBUmVuZGVyRGF0YSkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmlhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJQVJlbmRlckRhdGEsIFt7XG4gICAgICAgIGtleTogJ3R5cGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBJQVJlbmRlckRhdGEudHlwZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJQVJlbmRlckRhdGE7XG59KF9iYXNlUmVuZGVyRGF0YTIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElBUmVuZGVyRGF0YTtcblxuXG5JQVJlbmRlckRhdGEudHlwZSA9ICdJQVJlbmRlckRhdGEnO1xuY2MuSUFSZW5kZXJEYXRhID0gSUFSZW5kZXJEYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWxoTFhKbGJtUmxjaTFrWVhSaExtcHpJbDBzSW01aGJXVnpJanBiSWtsQlVtVnVaR1Z5UkdGMFlTSXNJbWxoSWl3aWRIbHdaU0lzSWtKaGMyVlNaVzVrWlhKRVlYUmhJaXdpWTJNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVVWQk96czdPenM3T3pzN095dGxRVVpCT3p0QlFVbEJPenM3T3p0SlFVdHhRa0VzV1RzN08wRkJRMnBDTERSQ1FVRmxPMEZCUVVFN08wRkJRVUU3TzBGQlJWZ3NZMEZCUzBNc1JVRkJUQ3hIUVVGVkxFbEJRVlk3UVVGR1Z6dEJRVWRrT3pzN096UkNRVVZYTzBGQlExSXNiVUpCUVU5RUxHRkJRV0ZGTEVsQlFYQkNPMEZCUTBnN096czdSVUZTY1VORExIZENPenRyUWtGQmNrSklMRms3T3p0QlFWZHlRa0VzWVVGQllVVXNTVUZCWWl4SFFVRnZRaXhqUVVGd1FqdEJRVU5CUlN4SFFVRkhTaXhaUVVGSUxFZEJRV3RDUVN4WlFVRnNRaUlzSW1acGJHVWlPaUpwWVMxeVpXNWtaWEl0WkdGMFlTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzRnSUZ4dUlGeHVhVzF3YjNKMElFSmhjMlZTWlc1a1pYSkVZWFJoSUdaeWIyMGdKeTR2WW1GelpTMXlaVzVrWlhJdFpHRjBZU2M3WEc1Y2JpOHFLbHh1SUNvZ1NVRlNaVzVrWlhKRVlYUmhJR2x6SUhWelpYSWdZM1Z6ZEc5dGFYcGxaQ0J5Wlc1a1pYSWdaR0YwWVNCMGVYQmxMQ0IxYzJWeUlITm9iM1ZzWkNCd2NtOTJhV1JsSUhSb1pTQmxiblJwWlhJZ2FXNXdkWFFnWVhOelpXMWliR1Z5TGx4dUlDb2dTVUZTWlc1a1pYSkVZWFJoSUdwMWMzUWdaR1ZtYVc1bGN5QmhJSEJ5YjNCbGNuUjVJR0JwWVdBZ1ptOXlJR0ZqWTJWemMybHVaeUIwYUdVZ2FXNXdkWFFnWVhOelpXMWliR1Z5TGx4dUlDb2dTWFFnWkc5bGMyNG5kQ0J0WVc1aFoyVWdiV1Z0YjNKNUlITnZJSFZ6WlhKeklITm9iM1ZzWkNCdFlXNWhaMlVnZEdobElHMWxiVzl5ZVNCdlppQnBibkIxZENCaGMzTmxiV0pzWlhJZ1lua2dkR2hsYlhObGJIWmxjeTVjYmlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1VGU1pXNWtaWEpFWVhSaElHVjRkR1Z1WkhNZ1FtRnpaVkpsYm1SbGNrUmhkR0VnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5SUNncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cFlTQTlJRzUxYkd3N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElIUjVjR1VnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1NVRlNaVzVrWlhKRVlYUmhMblI1Y0dVN1hHNGdJQ0FnZlZ4dWZWeHVYRzVKUVZKbGJtUmxja1JoZEdFdWRIbHdaU0E5SUNkSlFWSmxibVJsY2tSaGRHRW5PMXh1WTJNdVNVRlNaVzVrWlhKRVlYUmhJRDBnU1VGU1pXNWtaWEpFWVhSaE95SmRmUT09Il19