(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/recycle-pool.js';
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
        var _timsort = require('./timsort');
        var _timsort2 = _interopRequireDefault(_timsort);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var RecyclePool = function () {
            function RecyclePool(fn, size) {
                _classCallCheck(this, RecyclePool);
                this._fn = fn;
                this._count = 0;
                this._data = new Array(size);
                for (var i = 0; i < size; ++i) {
                    this._data[i] = fn();
                }
            }
            _createClass(RecyclePool, [
                {
                    key: 'reset',
                    value: function reset() {
                        this._count = 0;
                    }
                },
                {
                    key: 'resize',
                    value: function resize(size) {
                        if (size > this._data.length) {
                            for (var i = this._data.length; i < size; ++i) {
                                this._data[i] = this._fn();
                            }
                        }
                    }
                },
                {
                    key: 'add',
                    value: function add() {
                        if (this._count >= this._data.length) {
                            this.resize(this._data.length * 2);
                        }
                        return this._data[this._count++];
                    }
                },
                {
                    key: 'remove',
                    value: function remove(idx) {
                        if (idx >= this._count) {
                            return;
                        }
                        var last = this._count - 1;
                        var tmp = this._data[idx];
                        this._data[idx] = this._data[last];
                        this._data[last] = tmp;
                        this._count -= 1;
                    }
                },
                {
                    key: 'sort',
                    value: function sort(cmp) {
                        return (0, _timsort2.default)(this._data, 0, this._count, cmp);
                    }
                },
                {
                    key: 'length',
                    get: function get() {
                        return this._count;
                    }
                },
                {
                    key: 'data',
                    get: function get() {
                        return this._data;
                    }
                }
            ]);
            return RecyclePool;
        }();
        exports.default = RecyclePool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3ljbGUtcG9vbC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL21lbW9wL3JlY3ljbGUtcG9vbC5qcyJdLCJuYW1lcyI6WyJSZWN5Y2xlUG9vbCIsImZuIiwic2l6ZSIsIl9mbiIsIl9jb3VudCIsIl9kYXRhIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwicmVzaXplIiwiaWR4IiwibGFzdCIsInRtcCIsImNtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsV0FBQSxDQUFBOzs7Ozs7Ozs7O1lBRXFCQSxXQUFBQTtZQUNuQixTQUFBLFdBQUEsQ0FBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFdBQUEsRUFBQTtBQUFBLGdCQUNwQixLQUFLQyxHQUFMLEdBQVdGLEVBQVgsQ0FEb0I7QUFBQSxnQkFFcEIsS0FBS0csTUFBTCxHQUFjLENBQWQsQ0FGb0I7QUFBQSxnQkFHcEIsS0FBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosQ0FBVUosSUFBVixDQUFiLENBSG9CO0FBQUEsZ0JBS3BCLEtBQUssSUFBSUssQ0FBQUEsR0FBSSxDQUFSLENBQUwsQ0FBZ0JBLENBQUFBLEdBQUlMLElBQXBCLEVBQTBCLEVBQUVLLENBQTVCLEVBQStCO0FBQUEsb0JBQzdCLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBWCxJQUFnQk4sRUFBQUEsRUFBaEIsQ0FENkI7QUFBQSxpQkFMWDtBQUFBOzs7OzRDQWtCZDtBQUFBLHdCQUNOLEtBQUtHLE1BQUwsR0FBYyxDQUFkLENBRE07QUFBQTs7OzsyQ0FJREYsTUFBTTtBQUFBLHdCQUNYLElBQUlBLElBQUFBLEdBQU8sS0FBS0csS0FBTCxDQUFXRyxNQUF0QixFQUE4QjtBQUFBLDRCQUM1QixLQUFLLElBQUlELENBQUFBLEdBQUksS0FBS0YsS0FBTCxDQUFXRyxNQUFuQixDQUFMLENBQWdDRCxDQUFBQSxHQUFJTCxJQUFwQyxFQUEwQyxFQUFFSyxDQUE1QyxFQUErQztBQUFBLGdDQUM3QyxLQUFLRixLQUFMLENBQVdFLENBQVgsSUFBZ0IsS0FBS0osR0FBTCxFQUFoQixDQUQ2QztBQUFBLDZCQURuQjtBQUFBLHlCQURuQjtBQUFBOzs7OzBDQVFQO0FBQUEsd0JBQ0osSUFBSSxLQUFLQyxNQUFMLElBQWUsS0FBS0MsS0FBTCxDQUFXRyxNQUE5QixFQUFzQztBQUFBLDRCQUNwQyxLQUFLQyxNQUFMLENBQVksS0FBS0osS0FBTCxDQUFXRyxNQUFYLEdBQW9CLENBQWhDLEVBRG9DO0FBQUEseUJBRGxDO0FBQUEsd0JBS0osT0FBTyxLQUFLSCxLQUFMLENBQVcsS0FBS0QsTUFBTCxFQUFYLENBQVAsQ0FMSTtBQUFBOzs7OzJDQVFDTSxLQUFLO0FBQUEsd0JBQ1YsSUFBSUEsR0FBQUEsSUFBTyxLQUFLTixNQUFoQixFQUF3QjtBQUFBLDRCQUN0QixPQURzQjtBQUFBLHlCQURkO0FBQUEsd0JBS1YsSUFBSU8sSUFBQUEsR0FBTyxLQUFLUCxNQUFMLEdBQWMsQ0FBekIsQ0FMVTtBQUFBLHdCQU1WLElBQUlRLEdBQUFBLEdBQU0sS0FBS1AsS0FBTCxDQUFXSyxHQUFYLENBQVYsQ0FOVTtBQUFBLHdCQU9WLEtBQUtMLEtBQUwsQ0FBV0ssR0FBWCxJQUFrQixLQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBbEIsQ0FQVTtBQUFBLHdCQVFWLEtBQUtOLEtBQUwsQ0FBV00sSUFBWCxJQUFtQkMsR0FBbkIsQ0FSVTtBQUFBLHdCQVNWLEtBQUtSLE1BQUwsSUFBZSxDQUFmLENBVFU7QUFBQTs7Ozt5Q0FZUFMsS0FBSztBQUFBLHdCQUNSLE9BQU8sSUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUssS0FBS1IsS0FBVixFQUFpQixDQUFqQixFQUFvQixLQUFLRCxNQUF6QixFQUFpQ1MsR0FBakMsQ0FBUCxDQURRO0FBQUE7Ozs7d0NBeENHO0FBQUEsd0JBQ1gsT0FBTyxLQUFLVCxNQUFaLENBRFc7QUFBQTs7Ozt3Q0FJRjtBQUFBLHdCQUNULE9BQU8sS0FBS0MsS0FBWixDQURTO0FBQUE7Ozs7OzBCQWZRTDs7Ozs7OztZQUNIRSxRQUFBQSxDQUFNLFFBQUEsQ0FBQSxPQUFOQSxFQUFNLFNBQU5BLEVBQU0sUUFBTkEiLCJmaWxlIjoicmVjeWNsZS1wb29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvcnQgZnJvbSAnLi90aW1zb3J0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjeWNsZVBvb2wge1xuICBjb25zdHJ1Y3Rvcihmbiwgc2l6ZSkge1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZGF0YVtpXSA9IGZuKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgfVxuXG4gIHJlc2l6ZShzaXplKSB7XG4gICAgaWYgKHNpemUgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2RhdGEubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbaV0gPSB0aGlzLl9mbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZCgpIHtcbiAgICBpZiAodGhpcy5fY291bnQgPj0gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVzaXplKHRoaXMuX2RhdGEubGVuZ3RoICogMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFbdGhpcy5fY291bnQrK107XG4gIH1cblxuICByZW1vdmUoaWR4KSB7XG4gICAgaWYgKGlkeCA+PSB0aGlzLl9jb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xuICAgIGxldCB0bXAgPSB0aGlzLl9kYXRhW2lkeF07XG4gICAgdGhpcy5fZGF0YVtpZHhdID0gdGhpcy5fZGF0YVtsYXN0XTtcbiAgICB0aGlzLl9kYXRhW2xhc3RdID0gdG1wO1xuICAgIHRoaXMuX2NvdW50IC09IDE7XG4gIH1cblxuICBzb3J0KGNtcCkge1xuICAgIHJldHVybiBzb3J0KHRoaXMuX2RhdGEsIDAsIHRoaXMuX2NvdW50LCBjbXApO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RpbXNvcnQgPSByZXF1aXJlKCcuL3RpbXNvcnQnKTtcblxudmFyIF90aW1zb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbXNvcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVjeWNsZVBvb2wgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlY3ljbGVQb29sKGZuLCBzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY3ljbGVQb29sKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhpcy5fZGF0YVtpXSA9IGZuKCk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlY3ljbGVQb29sLCBbe1xuICAgIGtleTogJ3Jlc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKHNpemUpIHtcbiAgICAgIGlmIChzaXplID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2RhdGEubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVtpXSA9IHRoaXMuX2ZuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBpZiAodGhpcy5fY291bnQgPj0gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUodGhpcy5fZGF0YS5sZW5ndGggKiAyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbdGhpcy5fY291bnQrK107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGlkeCkge1xuICAgICAgaWYgKGlkeCA+PSB0aGlzLl9jb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xuICAgICAgdmFyIHRtcCA9IHRoaXMuX2RhdGFbaWR4XTtcbiAgICAgIHRoaXMuX2RhdGFbaWR4XSA9IHRoaXMuX2RhdGFbbGFzdF07XG4gICAgICB0aGlzLl9kYXRhW2xhc3RdID0gdG1wO1xuICAgICAgdGhpcy5fY291bnQgLT0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzb3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ydChjbXApIHtcbiAgICAgIHJldHVybiAoMCwgX3RpbXNvcnQyLmRlZmF1bHQpKHRoaXMuX2RhdGEsIDAsIHRoaXMuX2NvdW50LCBjbXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGF0YScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVjeWNsZVBvb2w7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3ljbGVQb29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkpsWTNsamJHVXRjRzl2YkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpTWldONVkyeGxVRzl2YkNJc0ltWnVJaXdpYzJsNlpTSXNJbDltYmlJc0lsOWpiM1Z1ZENJc0lsOWtZWFJoSWl3aVFYSnlZWGtpTENKcElpd2liR1Z1WjNSb0lpd2ljbVZ6YVhwbElpd2lhV1I0SWl3aWJHRnpkQ0lzSW5SdGNDSXNJbU50Y0NKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVVFN096czdPenM3TzBsQlJYRkNRU3hYTzBGQlEyNUNMSFZDUVVGWlF5eEZRVUZhTEVWQlFXZENReXhKUVVGb1FpeEZRVUZ6UWp0QlFVRkJPenRCUVVOd1FpeFRRVUZMUXl4SFFVRk1MRWRCUVZkR0xFVkJRVmc3UVVGRFFTeFRRVUZMUnl4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVOQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4SlFVRkpReXhMUVVGS0xFTkJRVlZLTEVsQlFWWXNRMEZCWWpzN1FVRkZRU3hUUVVGTExFbEJRVWxMTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVd3NTVUZCY0VJc1JVRkJNRUlzUlVGQlJVc3NRMEZCTlVJc1JVRkJLMEk3UVVGRE4wSXNWMEZCUzBZc1MwRkJUQ3hEUVVGWFJTeERRVUZZTEVsQlFXZENUaXhKUVVGb1FqdEJRVU5FTzBGQlEwWTdPenM3TkVKQlZVODdRVUZEVGl4WFFVRkxSeXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5FT3pzN01rSkJSVTFHTEVrc1JVRkJUVHRCUVVOWUxGVkJRVWxCTEU5QlFVOHNTMEZCUzBjc1MwRkJUQ3hEUVVGWFJ5eE5RVUYwUWl4RlFVRTRRanRCUVVNMVFpeGhRVUZMTEVsQlFVbEVMRWxCUVVrc1MwRkJTMFlzUzBGQlRDeERRVUZYUnl4TlFVRjRRaXhGUVVGblEwUXNTVUZCU1V3c1NVRkJjRU1zUlVGQk1FTXNSVUZCUlVzc1EwRkJOVU1zUlVGQkswTTdRVUZETjBNc1pVRkJTMFlzUzBGQlRDeERRVUZYUlN4RFFVRllMRWxCUVdkQ0xFdEJRVXRLTEVkQlFVd3NSVUZCYUVJN1FVRkRSRHRCUVVOR08wRkJRMFk3T3pzd1FrRkZTenRCUVVOS0xGVkJRVWtzUzBGQlMwTXNUVUZCVEN4SlFVRmxMRXRCUVV0RExFdEJRVXdzUTBGQlYwY3NUVUZCT1VJc1JVRkJjME03UVVGRGNFTXNZVUZCUzBNc1RVRkJUQ3hEUVVGWkxFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1RVRkJXQ3hIUVVGdlFpeERRVUZvUXp0QlFVTkVPenRCUVVWRUxHRkJRVThzUzBGQlMwZ3NTMEZCVEN4RFFVRlhMRXRCUVV0RUxFMUJRVXdzUlVGQldDeERRVUZRTzBGQlEwUTdPenN5UWtGRlRVMHNSeXhGUVVGTE8wRkJRMVlzVlVGQlNVRXNUMEZCVHl4TFFVRkxUaXhOUVVGb1FpeEZRVUYzUWp0QlFVTjBRanRCUVVORU96dEJRVVZFTEZWQlFVbFBMRTlCUVU4c1MwRkJTMUFzVFVGQlRDeEhRVUZqTEVOQlFYcENPMEZCUTBFc1ZVRkJTVkVzVFVGQlRTeExRVUZMVUN4TFFVRk1MRU5CUVZkTExFZEJRVmdzUTBGQlZqdEJRVU5CTEZkQlFVdE1MRXRCUVV3c1EwRkJWMHNzUjBGQldDeEpRVUZyUWl4TFFVRkxUQ3hMUVVGTUxFTkJRVmROTEVsQlFWZ3NRMEZCYkVJN1FVRkRRU3hYUVVGTFRpeExRVUZNTEVOQlFWZE5MRWxCUVZnc1NVRkJiVUpETEVkQlFXNUNPMEZCUTBFc1YwRkJTMUlzVFVGQlRDeEpRVUZsTEVOQlFXWTdRVUZEUkRzN08zbENRVVZKVXl4SExFVkJRVXM3UVVGRFVpeGhRVUZQTEhWQ1FVRkxMRXRCUVV0U0xFdEJRVllzUlVGQmFVSXNRMEZCYWtJc1JVRkJiMElzUzBGQlMwUXNUVUZCZWtJc1JVRkJhVU5UTEVkQlFXcERMRU5CUVZBN1FVRkRSRHM3TzNkQ1FURkRXVHRCUVVOWUxHRkJRVThzUzBGQlMxUXNUVUZCV2p0QlFVTkVPenM3ZDBKQlJWVTdRVUZEVkN4aFFVRlBMRXRCUVV0RExFdEJRVm83UVVGRFJEczdPenM3TzJ0Q1FXcENhMEpNTEZjaUxDSm1hV3hsSWpvaWNtVmplV05zWlMxd2IyOXNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhOdmNuUWdabkp2YlNBbkxpOTBhVzF6YjNKMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VtVmplV05zWlZCdmIyd2dlMXh1SUNCamIyNXpkSEoxWTNSdmNpaG1iaXdnYzJsNlpTa2dlMXh1SUNBZ0lIUm9hWE11WDJadUlEMGdabTQ3WEc0Z0lDQWdkR2hwY3k1ZlkyOTFiblFnUFNBd08xeHVJQ0FnSUhSb2FYTXVYMlJoZEdFZ1BTQnVaWGNnUVhKeVlYa29jMmw2WlNrN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITnBlbVU3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlpHRjBZVnRwWFNBOUlHWnVLQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWjJWMElHeGxibWQwYUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZZMjkxYm5RN1hHNGdJSDFjYmx4dUlDQm5aWFFnWkdGMFlTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWkdGMFlUdGNiaUFnZlZ4dVhHNGdJSEpsYzJWMEtDa2dlMXh1SUNBZ0lIUm9hWE11WDJOdmRXNTBJRDBnTUR0Y2JpQWdmVnh1WEc0Z0lISmxjMmw2WlNoemFYcGxLU0I3WEc0Z0lDQWdhV1lnS0hOcGVtVWdQaUIwYUdsekxsOWtZWFJoTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlIUm9hWE11WDJSaGRHRXViR1Z1WjNSb095QnBJRHdnYzJsNlpUc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJSaGRHRmJhVjBnUFNCMGFHbHpMbDltYmlncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHRmtaQ2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVmWTI5MWJuUWdQajBnZEdocGN5NWZaR0YwWVM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjbVZ6YVhwbEtIUm9hWE11WDJSaGRHRXViR1Z1WjNSb0lDb2dNaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJSaGRHRmJkR2hwY3k1ZlkyOTFiblFySzEwN1hHNGdJSDFjYmx4dUlDQnlaVzF2ZG1Vb2FXUjRLU0I3WEc0Z0lDQWdhV1lnS0dsa2VDQStQU0IwYUdsekxsOWpiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCc1lYTjBJRDBnZEdocGN5NWZZMjkxYm5RZ0xTQXhPMXh1SUNBZ0lHeGxkQ0IwYlhBZ1BTQjBhR2x6TGw5a1lYUmhXMmxrZUYwN1hHNGdJQ0FnZEdocGN5NWZaR0YwWVZ0cFpIaGRJRDBnZEdocGN5NWZaR0YwWVZ0c1lYTjBYVHRjYmlBZ0lDQjBhR2x6TGw5a1lYUmhXMnhoYzNSZElEMGdkRzF3TzF4dUlDQWdJSFJvYVhNdVgyTnZkVzUwSUMwOUlERTdYRzRnSUgxY2JseHVJQ0J6YjNKMEtHTnRjQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnpiM0owS0hSb2FYTXVYMlJoZEdFc0lEQXNJSFJvYVhNdVgyTnZkVzUwTENCamJYQXBPMXh1SUNCOVhHNTlJbDE5Il19