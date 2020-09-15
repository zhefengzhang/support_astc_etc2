(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/circular-pool.js';
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var CircularPool = function () {
            function CircularPool(fn, size) {
                _classCallCheck(this, CircularPool);
                this._cursor = 0;
                this._data = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._data[i] = fn();
                }
            }
            _createClass(CircularPool, [{
                    key: 'request',
                    value: function request() {
                        var item = this._data[this._cursor];
                        this._cursor = (this._cursor + 1) % this._data.length;
                        return item;
                    }
                }]);
            return CircularPool;
        }();
        exports.default = CircularPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyLXBvb2wuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9tZW1vcC9jaXJjdWxhci1wb29sLmpzIl0sIm5hbWVzIjpbImZuIiwic2l6ZSIsIkNpcmN1bGFyUG9vbCIsIl9jdXJzb3IiLCJfZGF0YSIsIkFycmF5IiwiaSIsIml0ZW0iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFDY0EsSUFBSUMsQ0FBQUEsT0FBSkQsRUFBVTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFESEUsWUFBQUE7WUFDbkIsU0FBQSxZQUFBLENBQVlGLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLEVBQUE7QUFBQSxnQkFDcEIsS0FBS0UsT0FBTCxHQUFlLENBQWYsQ0FEb0I7QUFBQSxnQkFFcEIsS0FBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosQ0FBVUosSUFBVixDQUFiLENBRm9CO0FBQUEsZ0JBSXBCLEtBQUssSUFBSUssQ0FBQUEsR0FBSSxDQUFSLENBQUwsQ0FBZ0JBLENBQUFBLEdBQUlMLElBQXBCLEVBQTBCLEVBQUVLLENBQTVCLEVBQStCO0FBQUEsb0JBQzdCLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBWCxJQUFnQk4sRUFBQUEsRUFBaEIsQ0FENkI7QUFBQSxpQkFKWDtBQUFBOzs7OENBU1o7QUFBQSx3QkFDUixJQUFJTyxJQUFBQSxHQUFPLEtBQUtILEtBQUwsQ0FBVyxLQUFLRCxPQUFoQixDQUFYLENBRFE7QUFBQSx3QkFFUixLQUFLQSxPQUFMLEdBQWdCLE1BQUtBLE9BQUwsR0FBZSxDQUFmLENBQUQsR0FBcUIsS0FBS0MsS0FBTCxDQUFXSSxNQUEvQyxDQUZRO0FBQUEsd0JBSVIsT0FBT0QsSUFBUCxDQUpRO0FBQUE7Ozs7MEJBVlNMOzs7O1FBRWpCLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBOztRQUdvQkQsaUJBQUFBLENBQVcsa0JBQVhBLENBQVcsVUFBWEEsRUFBVyxZQUFBO0FBQUEsWUFDN0IsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFENkI7QUFBQSxTQUFYQSIsImZpbGUiOiJjaXJjdWxhci1wb29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY3VsYXJQb29sIHtcbiAgY29uc3RydWN0b3IoZm4sIHNpemUpIHtcbiAgICB0aGlzLl9jdXJzb3IgPSAwO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZGF0YVtpXSA9IGZuKCk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCgpIHtcbiAgICBsZXQgaXRlbSA9IHRoaXMuX2RhdGFbdGhpcy5fY3Vyc29yXTtcbiAgICB0aGlzLl9jdXJzb3IgPSAodGhpcy5fY3Vyc29yICsgMSkgJSB0aGlzLl9kYXRhLmxlbmd0aDtcblxuICAgIHJldHVybiBpdGVtO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDaXJjdWxhclBvb2wgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENpcmN1bGFyUG9vbChmbiwgc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjdWxhclBvb2wpO1xuXG4gICAgdGhpcy5fY3Vyc29yID0gMDtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5KHNpemUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoaXMuX2RhdGFbaV0gPSBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaXJjdWxhclBvb2wsIFt7XG4gICAga2V5OiBcInJlcXVlc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdCgpIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5fZGF0YVt0aGlzLl9jdXJzb3JdO1xuICAgICAgdGhpcy5fY3Vyc29yID0gKHRoaXMuX2N1cnNvciArIDEpICUgdGhpcy5fZGF0YS5sZW5ndGg7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaXJjdWxhclBvb2w7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENpcmN1bGFyUG9vbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU5wY21OMWJHRnlMWEJ2YjJ3dWFuTWlYU3dpYm1GdFpYTWlPbHNpUTJseVkzVnNZWEpRYjI5c0lpd2labTRpTENKemFYcGxJaXdpWDJOMWNuTnZjaUlzSWw5a1lYUmhJaXdpUVhKeVlYa2lMQ0pwSWl3aWFYUmxiU0lzSW14bGJtZDBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEpRVUZ4UWtFc1dUdEJRVU51UWl4M1FrRkJXVU1zUlVGQldpeEZRVUZuUWtNc1NVRkJhRUlzUlVGQmMwSTdRVUZCUVRzN1FVRkRjRUlzVTBGQlMwTXNUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hUUVVGTFF5eExRVUZNTEVkQlFXRXNTVUZCU1VNc1MwRkJTaXhEUVVGVlNDeEpRVUZXTEVOQlFXSTdPMEZCUlVFc1UwRkJTeXhKUVVGSlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxLTEVsQlFYQkNMRVZCUVRCQ0xFVkJRVVZKTEVOQlFUVkNMRVZCUVN0Q08wRkJRemRDTEZkQlFVdEdMRXRCUVV3c1EwRkJWMFVzUTBGQldDeEpRVUZuUWt3c1NVRkJhRUk3UVVGRFJEdEJRVU5HT3pzN096aENRVVZUTzBGQlExSXNWVUZCU1Uwc1QwRkJUeXhMUVVGTFNDeExRVUZNTEVOQlFWY3NTMEZCUzBRc1QwRkJhRUlzUTBGQldEdEJRVU5CTEZkQlFVdEJMRTlCUVV3c1IwRkJaU3hEUVVGRExFdEJRVXRCTEU5QlFVd3NSMEZCWlN4RFFVRm9RaXhKUVVGeFFpeExRVUZMUXl4TFFVRk1MRU5CUVZkSkxFMUJRUzlET3p0QlFVVkJMR0ZCUVU5RUxFbEJRVkE3UVVGRFJEczdPenM3TzJ0Q1FXWnJRbEFzV1NJc0ltWnBiR1VpT2lKamFYSmpkV3hoY2kxd2IyOXNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRMmx5WTNWc1lYSlFiMjlzSUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvWm00c0lITnBlbVVwSUh0Y2JpQWdJQ0IwYUdsekxsOWpkWEp6YjNJZ1BTQXdPMXh1SUNBZ0lIUm9hWE11WDJSaGRHRWdQU0J1WlhjZ1FYSnlZWGtvYzJsNlpTazdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSE5wZW1VN0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZaR0YwWVZ0cFhTQTlJR1p1S0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVnhkV1Z6ZENncElIdGNiaUFnSUNCc1pYUWdhWFJsYlNBOUlIUm9hWE11WDJSaGRHRmJkR2hwY3k1ZlkzVnljMjl5WFR0Y2JpQWdJQ0IwYUdsekxsOWpkWEp6YjNJZ1BTQW9kR2hwY3k1ZlkzVnljMjl5SUNzZ01Ta2dKU0IwYUdsekxsOWtZWFJoTG14bGJtZDBhRHRjYmx4dUlDQWdJSEpsZEhWeWJpQnBkR1Z0TzF4dUlDQjlYRzU5SWwxOSJdfQ==