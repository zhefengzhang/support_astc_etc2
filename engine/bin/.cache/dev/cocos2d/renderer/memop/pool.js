(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/pool.js';
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
        var Pool = function () {
            function Pool(fn, size) {
                _classCallCheck(this, Pool);
                this._fn = fn;
                this._idx = size - 1;
                this._frees = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._frees[i] = fn();
                }
            }
            _createClass(Pool, [
                {
                    key: '_expand',
                    value: function _expand(size) {
                        var old = this._frees;
                        this._frees = new Array(size);
                        var len = size - old.length;
                        for (var i = 0; i < len; ++i) {
                            this._frees[i] = this._fn();
                        }
                        for (var _i = len, j = 0; _i < size; ++_i, ++j) {
                            this._frees[_i] = old[j];
                        }
                        this._idx += len;
                    }
                },
                {
                    key: 'alloc',
                    value: function alloc() {
                        if (this._idx < 0) {
                            this._expand(Math.round(this._frees.length * 1.2) + 1);
                        }
                        var ret = this._frees[this._idx];
                        this._frees[this._idx] = null;
                        --this._idx;
                        return ret;
                    }
                },
                {
                    key: 'free',
                    value: function free(obj) {
                        ++this._idx;
                        this._frees[this._idx] = obj;
                    }
                }
            ]);
            return Pool;
        }();
        exports.default = Pool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvb2wuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9tZW1vcC9wb29sLmpzIl0sIm5hbWVzIjpbIlBvb2wiLCJmbiIsInNpemUiLCJfZm4iLCJfaWR4IiwiX2ZyZWVzIiwiQXJyYXkiLCJpIiwib2xkIiwibGVuIiwibGVuZ3RoIiwiaiIsIl9leHBhbmQiLCJNYXRoIiwicm91bmQiLCJyZXQiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFDRSxJQUFzQixDQUFBLE9BQXRCLEVBQXNCO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURIQSxJQUFBQTtZQUNuQixTQUFBLElBQUEsQ0FBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtBQUFBLGdCQUNwQixLQUFLQyxHQUFMLEdBQVdGLEVBQVgsQ0FEb0I7QUFBQSxnQkFFcEIsS0FBS0csSUFBTCxHQUFZRixJQUFBQSxHQUFPLENBQW5CLENBRm9CO0FBQUEsZ0JBR3BCLEtBQUtHLE1BQUwsR0FBYyxJQUFJQyxLQUFKLENBQVVKLElBQVYsQ0FBZCxDQUhvQjtBQUFBLGdCQUtwQixLQUFLLElBQUlLLENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJTCxJQUFwQixFQUEwQixFQUFFSyxDQUE1QixFQUErQjtBQUFBLG9CQUM3QixLQUFLRixNQUFMLENBQVlFLENBQVosSUFBaUJOLEVBQUFBLEVBQWpCLENBRDZCO0FBQUEsaUJBTFg7QUFBQTs7Ozs0Q0FVZEMsTUFBTTtBQUFBLHdCQUNaLElBQUlNLEdBQUFBLEdBQU0sS0FBS0gsTUFBZixDQURZO0FBQUEsd0JBRVosS0FBS0EsTUFBTCxHQUFjLElBQUlDLEtBQUosQ0FBVUosSUFBVixDQUFkLENBRlk7QUFBQSx3QkFJWixJQUFJTyxHQUFBQSxHQUFNUCxJQUFBQSxHQUFPTSxHQUFBQSxDQUFJRSxNQUFyQixDQUpZO0FBQUEsd0JBS1osS0FBSyxJQUFJSCxDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSUUsR0FBcEIsRUFBeUIsRUFBRUYsQ0FBM0IsRUFBOEI7QUFBQSw0QkFDNUIsS0FBS0YsTUFBTCxDQUFZRSxDQUFaLElBQWlCLEtBQUtKLEdBQUwsRUFBakIsQ0FENEI7QUFBQSx5QkFMbEI7QUFBQSx3QkFTWixLQUFLLElBQUlJLEVBQUFBLEdBQUlFLEdBQVIsRUFBYUUsQ0FBQUEsR0FBSSxDQUFqQixDQUFMLENBQXlCSixFQUFBQSxHQUFJTCxJQUE3QixFQUFtQyxFQUFFSyxFQUFGLEVBQUssRUFBRUksQ0FBMUMsRUFBNkM7QUFBQSw0QkFDM0MsS0FBS04sTUFBTCxDQUFZRSxFQUFaLElBQWlCQyxHQUFBQSxDQUFJRyxDQUFKSCxDQUFqQixDQUQyQztBQUFBLHlCQVRqQztBQUFBLHdCQWFaLEtBQUtKLElBQUwsSUFBYUssR0FBYixDQWJZO0FBQUE7Ozs7NENBZ0JOO0FBQUEsd0JBRU4sSUFBSSxLQUFLTCxJQUFMLEdBQVksQ0FBaEIsRUFBbUI7QUFBQSw0QkFDakIsS0FBS1EsT0FBTCxDQUFhQyxJQUFBQSxDQUFLQyxLQUFMRCxDQUFXLEtBQUtSLE1BQUwsQ0FBWUssTUFBWixHQUFxQixHQUFoQ0csSUFBdUMsQ0FBcEQsRUFEaUI7QUFBQSx5QkFGYjtBQUFBLHdCQU1OLElBQUlFLEdBQUFBLEdBQU0sS0FBS1YsTUFBTCxDQUFZLEtBQUtELElBQWpCLENBQVYsQ0FOTTtBQUFBLHdCQU9OLEtBQUtDLE1BQUwsQ0FBWSxLQUFLRCxJQUFqQixJQUF5QixJQUF6QixDQVBNO0FBQUEsd0JBUU4sRUFBRSxLQUFLQSxJQUFQLENBUk07QUFBQSx3QkFVTixPQUFPVyxHQUFQLENBVk07QUFBQTs7Ozt5Q0FhSEMsS0FBSztBQUFBLHdCQUNSLEVBQUUsS0FBS1osSUFBUCxDQURRO0FBQUEsd0JBRVIsS0FBS0MsTUFBTCxDQUFZLEtBQUtELElBQWpCLElBQXlCWSxHQUF6QixDQUZRO0FBQUE7Ozs7OzBCQXhDU2hCOzs7O1FBRWpCLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBO1dBRWtCTTtBQUFBQTtZQUVsQixRQUFBLENBQStCLFFBQUEsQ0FBQSxPQUEvQixFQUErQixTQUEvQixFQUErQixRQUEvQjtXQUZrQkE7QUFBQUEiLCJmaWxlIjoicG9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2wge1xuICBjb25zdHJ1Y3Rvcihmbiwgc2l6ZSkge1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5faWR4ID0gc2l6ZSAtIDE7XG4gICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZnJlZXNbaV0gPSBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF9leHBhbmQoc2l6ZSkge1xuICAgIGxldCBvbGQgPSB0aGlzLl9mcmVlcztcbiAgICB0aGlzLl9mcmVlcyA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGxldCBsZW4gPSBzaXplIC0gb2xkLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0aGlzLl9mcmVlc1tpXSA9IHRoaXMuX2ZuKCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGxlbiwgaiA9IDA7IGkgPCBzaXplOyArK2ksICsraikge1xuICAgICAgdGhpcy5fZnJlZXNbaV0gPSBvbGRbal07XG4gICAgfVxuXG4gICAgdGhpcy5faWR4ICs9IGxlbjtcbiAgfVxuXG4gIGFsbG9jKCkge1xuICAgIC8vIGNyZWF0ZSBzb21lIG1vcmUgc3BhY2UgKGV4cGFuZCBieSAyMCUsIG1pbmltdW0gMSlcbiAgICBpZiAodGhpcy5faWR4IDwgMCkge1xuICAgICAgdGhpcy5fZXhwYW5kKE1hdGgucm91bmQodGhpcy5fZnJlZXMubGVuZ3RoICogMS4yKSArIDEpO1xuICAgIH1cblxuICAgIGxldCByZXQgPSB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdO1xuICAgIHRoaXMuX2ZyZWVzW3RoaXMuX2lkeF0gPSBudWxsO1xuICAgIC0tdGhpcy5faWR4O1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZyZWUob2JqKSB7XG4gICAgKyt0aGlzLl9pZHg7XG4gICAgdGhpcy5fZnJlZXNbdGhpcy5faWR4XSA9IG9iajtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUG9vbChmbiwgc2l6ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb29sKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5faWR4ID0gc2l6ZSAtIDE7XG4gICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZnJlZXNbaV0gPSBmbigpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb29sLCBbe1xuICAgIGtleTogXCJfZXhwYW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9leHBhbmQoc2l6ZSkge1xuICAgICAgdmFyIG9sZCA9IHRoaXMuX2ZyZWVzO1xuICAgICAgdGhpcy5fZnJlZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICAgIHZhciBsZW4gPSBzaXplIC0gb2xkLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdGhpcy5fZnJlZXNbaV0gPSB0aGlzLl9mbigpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IGxlbiwgaiA9IDA7IF9pIDwgc2l6ZTsgKytfaSwgKytqKSB7XG4gICAgICAgIHRoaXMuX2ZyZWVzW19pXSA9IG9sZFtqXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faWR4ICs9IGxlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb2NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsb2MoKSB7XG4gICAgICAvLyBjcmVhdGUgc29tZSBtb3JlIHNwYWNlIChleHBhbmQgYnkgMjAlLCBtaW5pbXVtIDEpXG4gICAgICBpZiAodGhpcy5faWR4IDwgMCkge1xuICAgICAgICB0aGlzLl9leHBhbmQoTWF0aC5yb3VuZCh0aGlzLl9mcmVlcy5sZW5ndGggKiAxLjIpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdO1xuICAgICAgdGhpcy5fZnJlZXNbdGhpcy5faWR4XSA9IG51bGw7XG4gICAgICAtLXRoaXMuX2lkeDtcblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZnJlZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmVlKG9iaikge1xuICAgICAgKyt0aGlzLl9pZHg7XG4gICAgICB0aGlzLl9mcmVlc1t0aGlzLl9pZHhdID0gb2JqO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb29sO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQnZiMnd1YW5NaVhTd2libUZ0WlhNaU9sc2lVRzl2YkNJc0ltWnVJaXdpYzJsNlpTSXNJbDltYmlJc0lsOXBaSGdpTENKZlpuSmxaWE1pTENKQmNuSmhlU0lzSW1raUxDSnZiR1FpTENKc1pXNGlMQ0pzWlc1bmRHZ2lMQ0pxSWl3aVgyVjRjR0Z1WkNJc0lrMWhkR2dpTENKeWIzVnVaQ0lzSW5KbGRDSXNJbTlpYWlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVGeFFrRXNTVHRCUVVOdVFpeG5Ra0ZCV1VNc1JVRkJXaXhGUVVGblFrTXNTVUZCYUVJc1JVRkJjMEk3UVVGQlFUczdRVUZEY0VJc1UwRkJTME1zUjBGQlRDeEhRVUZYUml4RlFVRllPMEZCUTBFc1UwRkJTMGNzU1VGQlRDeEhRVUZaUml4UFFVRlBMRU5CUVc1Q08wRkJRMEVzVTBGQlMwY3NUVUZCVEN4SFFVRmpMRWxCUVVsRExFdEJRVW9zUTBGQlZVb3NTVUZCVml4RFFVRmtPenRCUVVWQkxGTkJRVXNzU1VGQlNVc3NTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKVEN4SlFVRndRaXhGUVVFd1FpeEZRVUZGU3l4RFFVRTFRaXhGUVVFclFqdEJRVU0zUWl4WFFVRkxSaXhOUVVGTUxFTkJRVmxGTEVOQlFWb3NTVUZCYVVKT0xFbEJRV3BDTzBGQlEwUTdRVUZEUmpzN096czBRa0ZGVDBNc1NTeEZRVUZOTzBGQlExb3NWVUZCU1Uwc1RVRkJUU3hMUVVGTFNDeE5RVUZtTzBGQlEwRXNWMEZCUzBFc1RVRkJUQ3hIUVVGakxFbEJRVWxETEV0QlFVb3NRMEZCVlVvc1NVRkJWaXhEUVVGa096dEJRVVZCTEZWQlFVbFBMRTFCUVUxUUxFOUJRVTlOTEVsQlFVbEZMRTFCUVhKQ08wRkJRMEVzVjBGQlN5eEpRVUZKU0N4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbEZMRWRCUVhCQ0xFVkJRWGxDTEVWQlFVVkdMRU5CUVROQ0xFVkJRVGhDTzBGQlF6VkNMR0ZCUVV0R0xFMUJRVXdzUTBGQldVVXNRMEZCV2l4SlFVRnBRaXhMUVVGTFNpeEhRVUZNTEVWQlFXcENPMEZCUTBRN08wRkJSVVFzVjBGQlN5eEpRVUZKU1N4TFFVRkpSU3hIUVVGU0xFVkJRV0ZGTEVsQlFVa3NRMEZCZEVJc1JVRkJlVUpLTEV0QlFVbE1MRWxCUVRkQ0xFVkJRVzFETEVWQlFVVkxMRVZCUVVZc1JVRkJTeXhGUVVGRlNTeERRVUV4UXl4RlFVRTJRenRCUVVNelF5eGhRVUZMVGl4TlFVRk1MRU5CUVZsRkxFVkJRVm9zU1VGQmFVSkRMRWxCUVVsSExFTkJRVW9zUTBGQmFrSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTFVDeEpRVUZNTEVsQlFXRkxMRWRCUVdJN1FVRkRSRHM3T3pSQ1FVVlBPMEZCUTA0N1FVRkRRU3hWUVVGSkxFdEJRVXRNTEVsQlFVd3NSMEZCV1N4RFFVRm9RaXhGUVVGdFFqdEJRVU5xUWl4aFFVRkxVU3hQUVVGTUxFTkJRV0ZETEV0QlFVdERMRXRCUVV3c1EwRkJWeXhMUVVGTFZDeE5RVUZNTEVOQlFWbExMRTFCUVZvc1IwRkJjVUlzUjBGQmFFTXNTVUZCZFVNc1EwRkJjRVE3UVVGRFJEczdRVUZGUkN4VlFVRkpTeXhOUVVGTkxFdEJRVXRXTEUxQlFVd3NRMEZCV1N4TFFVRkxSQ3hKUVVGcVFpeERRVUZXTzBGQlEwRXNWMEZCUzBNc1RVRkJUQ3hEUVVGWkxFdEJRVXRFTEVsQlFXcENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRXNVVUZCUlN4TFFVRkxRU3hKUVVGUU96dEJRVVZCTEdGQlFVOVhMRWRCUVZBN1FVRkRSRHM3TzNsQ1FVVkpReXhITEVWQlFVczdRVUZEVWl4UlFVRkZMRXRCUVV0YUxFbEJRVkE3UVVGRFFTeFhRVUZMUXl4TlFVRk1MRU5CUVZrc1MwRkJTMFFzU1VGQmFrSXNTVUZCZVVKWkxFZEJRWHBDTzBGQlEwUTdPenM3T3p0clFrRXpRMnRDYUVJc1NTSXNJbVpwYkdVaU9pSndiMjlzTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUc5dmJDQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtHWnVMQ0J6YVhwbEtTQjdYRzRnSUNBZ2RHaHBjeTVmWm00Z1BTQm1ianRjYmlBZ0lDQjBhR2x6TGw5cFpIZ2dQU0J6YVhwbElDMGdNVHRjYmlBZ0lDQjBhR2x6TGw5bWNtVmxjeUE5SUc1bGR5QkJjbkpoZVNoemFYcGxLVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYzJsNlpUc2dLeXRwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDltY21WbGMxdHBYU0E5SUdadUtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdYMlY0Y0dGdVpDaHphWHBsS1NCN1hHNGdJQ0FnYkdWMElHOXNaQ0E5SUhSb2FYTXVYMlp5WldWek8xeHVJQ0FnSUhSb2FYTXVYMlp5WldWeklEMGdibVYzSUVGeWNtRjVLSE5wZW1VcE8xeHVYRzRnSUNBZ2JHVjBJR3hsYmlBOUlITnBlbVVnTFNCdmJHUXViR1Z1WjNSb08xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUFySzJrcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJaeVpXVnpXMmxkSUQwZ2RHaHBjeTVmWm00b0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdiR1Z1TENCcUlEMGdNRHNnYVNBOElITnBlbVU3SUNzcmFTd2dLeXRxS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDltY21WbGMxdHBYU0E5SUc5c1pGdHFYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TGw5cFpIZ2dLejBnYkdWdU8xeHVJQ0I5WEc1Y2JpQWdZV3hzYjJNb0tTQjdYRzRnSUNBZ0x5OGdZM0psWVhSbElITnZiV1VnYlc5eVpTQnpjR0ZqWlNBb1pYaHdZVzVrSUdKNUlESXdKU3dnYldsdWFXMTFiU0F4S1Z4dUlDQWdJR2xtSUNoMGFHbHpMbDlwWkhnZ1BDQXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOWxlSEJoYm1Rb1RXRjBhQzV5YjNWdVpDaDBhR2x6TGw5bWNtVmxjeTVzWlc1bmRHZ2dLaUF4TGpJcElDc2dNU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR1YwSUhKbGRDQTlJSFJvYVhNdVgyWnlaV1Z6VzNSb2FYTXVYMmxrZUYwN1hHNGdJQ0FnZEdocGN5NWZabkpsWlhOYmRHaHBjeTVmYVdSNFhTQTlJRzUxYkd3N1hHNGdJQ0FnTFMxMGFHbHpMbDlwWkhnN1hHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5WEc1Y2JpQWdabkpsWlNodlltb3BJSHRjYmlBZ0lDQXJLM1JvYVhNdVgybGtlRHRjYmlBZ0lDQjBhR2x6TGw5bWNtVmxjMXQwYUdsekxsOXBaSGhkSUQwZ2IySnFPMXh1SUNCOVhHNTlJbDE5Il19