(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/fixed-array.js';
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
        var FixedArray = function () {
            function FixedArray(size) {
                _classCallCheck(this, FixedArray);
                this._count = 0;
                this._data = new Array(size);
            }
            _createClass(FixedArray, [
                {
                    key: '_resize',
                    value: function _resize(size) {
                        if (size > this._data.length) {
                            for (var i = this._data.length; i < size; ++i) {
                                this._data[i] = undefined;
                            }
                        }
                    }
                },
                {
                    key: 'reset',
                    value: function reset() {
                        for (var i = 0; i < this._count; ++i) {
                            this._data[i] = undefined;
                        }
                        this._count = 0;
                    }
                },
                {
                    key: 'push',
                    value: function push(val) {
                        if (this._count >= this._data.length) {
                            this._resize(this._data.length * 2);
                        }
                        this._data[this._count] = val;
                        ++this._count;
                    }
                },
                {
                    key: 'pop',
                    value: function pop() {
                        --this._count;
                        if (this._count < 0) {
                            this._count = 0;
                        }
                        var ret = this._data[this._count];
                        this._data[this._count] = undefined;
                        return ret;
                    }
                },
                {
                    key: 'fastRemove',
                    value: function fastRemove(idx) {
                        if (idx >= this._count || idx < 0) {
                            return;
                        }
                        var last = this._count - 1;
                        this._data[idx] = this._data[last];
                        this._data[last] = undefined;
                        this._count -= 1;
                    }
                },
                {
                    key: 'indexOf',
                    value: function indexOf(val) {
                        return this._data.indexOf(val);
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
            return FixedArray;
        }();
        exports.default = FixedArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpeGVkLWFycmF5LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvbWVtb3AvZml4ZWQtYXJyYXkuanMiXSwibmFtZXMiOlsiRml4ZWRBcnJheSIsInNpemUiLCJfY291bnQiLCJfZGF0YSIsIkFycmF5IiwibGVuZ3RoIiwiaSIsInVuZGVmaW5lZCIsInZhbCIsIl9yZXNpemUiLCJyZXQiLCJpZHgiLCJsYXN0IiwiaW5kZXhPZiIsImNtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsV0FBQSxDQUFBOzs7Ozs7Ozs7O1lBRXFCQSxVQUFBQTtZQUNuQixTQUFBLFVBQUEsQ0FBWUMsSUFBWixFQUFrQjtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsVUFBQSxFQUFBO0FBQUEsZ0JBQ2hCLEtBQUtDLE1BQUwsR0FBYyxDQUFkLENBRGdCO0FBQUEsZ0JBRWhCLEtBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLENBQVVILElBQVYsQ0FBYixDQUZnQjtBQUFBOzs7OzRDQUtWQSxNQUFNO0FBQUEsd0JBQ1osSUFBSUEsSUFBQUEsR0FBTyxLQUFLRSxLQUFMLENBQVdFLE1BQXRCLEVBQThCO0FBQUEsNEJBQzVCLEtBQUssSUFBSUMsQ0FBQUEsR0FBSSxLQUFLSCxLQUFMLENBQVdFLE1BQW5CLENBQUwsQ0FBZ0NDLENBQUFBLEdBQUlMLElBQXBDLEVBQTBDLEVBQUVLLENBQTVDLEVBQStDO0FBQUEsZ0NBQzdDLEtBQUtILEtBQUwsQ0FBV0csQ0FBWCxJQUFnQkMsU0FBaEIsQ0FENkM7QUFBQSw2QkFEbkI7QUFBQSx5QkFEbEI7QUFBQTs7Ozs0Q0FnQk47QUFBQSx3QkFDTixLQUFLLElBQUlELENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJLEtBQUtKLE1BQXpCLEVBQWlDLEVBQUVJLENBQW5DLEVBQXNDO0FBQUEsNEJBQ3BDLEtBQUtILEtBQUwsQ0FBV0csQ0FBWCxJQUFnQkMsU0FBaEIsQ0FEb0M7QUFBQSx5QkFEaEM7QUFBQSx3QkFLTixLQUFLTCxNQUFMLEdBQWMsQ0FBZCxDQUxNO0FBQUE7Ozs7eUNBUUhNLEtBQUs7QUFBQSx3QkFDUixJQUFJLEtBQUtOLE1BQUwsSUFBZSxLQUFLQyxLQUFMLENBQVdFLE1BQTlCLEVBQXNDO0FBQUEsNEJBQ3BDLEtBQUtJLE9BQUwsQ0FBYSxLQUFLTixLQUFMLENBQVdFLE1BQVgsR0FBb0IsQ0FBakMsRUFEb0M7QUFBQSx5QkFEOUI7QUFBQSx3QkFLUixLQUFLRixLQUFMLENBQVcsS0FBS0QsTUFBaEIsSUFBMEJNLEdBQTFCLENBTFE7QUFBQSx3QkFNUixFQUFFLEtBQUtOLE1BQVAsQ0FOUTtBQUFBOzs7OzBDQVNKO0FBQUEsd0JBQ0osRUFBRSxLQUFLQSxNQUFQLENBREk7QUFBQSx3QkFHSixJQUFJLEtBQUtBLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUFBLDRCQUNuQixLQUFLQSxNQUFMLEdBQWMsQ0FBZCxDQURtQjtBQUFBLHlCQUhqQjtBQUFBLHdCQU9KLElBQUlRLEdBQUFBLEdBQU0sS0FBS1AsS0FBTCxDQUFXLEtBQUtELE1BQWhCLENBQVYsQ0FQSTtBQUFBLHdCQVFKLEtBQUtDLEtBQUwsQ0FBVyxLQUFLRCxNQUFoQixJQUEwQkssU0FBMUIsQ0FSSTtBQUFBLHdCQVVKLE9BQU9HLEdBQVAsQ0FWSTtBQUFBOzs7OytDQWFLQyxLQUFLO0FBQUEsd0JBQ2QsSUFBSUEsR0FBQUEsSUFBTyxLQUFLVCxNQUFaUyxJQUFzQkEsR0FBQUEsR0FBTSxDQUFoQyxFQUFtQztBQUFBLDRCQUNqQyxPQURpQztBQUFBLHlCQURyQjtBQUFBLHdCQUtkLElBQUlDLElBQUFBLEdBQU8sS0FBS1YsTUFBTCxHQUFjLENBQXpCLENBTGM7QUFBQSx3QkFNZCxLQUFLQyxLQUFMLENBQVdRLEdBQVgsSUFBa0IsS0FBS1IsS0FBTCxDQUFXUyxJQUFYLENBQWxCLENBTmM7QUFBQSx3QkFPZCxLQUFLVCxLQUFMLENBQVdTLElBQVgsSUFBbUJMLFNBQW5CLENBUGM7QUFBQSx3QkFRZCxLQUFLTCxNQUFMLElBQWUsQ0FBZixDQVJjO0FBQUE7Ozs7NENBV1JNLEtBQUs7QUFBQSx3QkFDWCxPQUFPLEtBQUtMLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkwsR0FBbkIsQ0FBUCxDQURXO0FBQUE7Ozs7eUNBSVJNLEtBQUs7QUFBQSx3QkFDUixPQUFPLElBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFLLEtBQUtYLEtBQVYsRUFBaUIsQ0FBakIsRUFBb0IsS0FBS0QsTUFBekIsRUFBaUNZLEdBQWpDLENBQVAsQ0FEUTtBQUFBOzs7O3dDQXJERztBQUFBLHdCQUNYLE9BQU8sS0FBS1osTUFBWixDQURXO0FBQUE7Ozs7d0NBSUY7QUFBQSx3QkFDVCxPQUFPLEtBQUtDLEtBQVosQ0FEUztBQUFBOzs7OzswQkFsQlFIOzs7Ozs7O1lBQ0QsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEiLCJmaWxlIjoiZml4ZWQtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ydCBmcm9tICcuL3RpbXNvcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZEFycmF5IHtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB0aGlzLl9kYXRhID0gbmV3IEFycmF5KHNpemUpO1xuICB9XG5cbiAgX3Jlc2l6ZShzaXplKSB7XG4gICAgaWYgKHNpemUgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2RhdGEubGVuZ3RoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY291bnQ7ICsraSkge1xuICAgICAgdGhpcy5fZGF0YVtpXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLl9jb3VudCA9IDA7XG4gIH1cblxuICBwdXNoKHZhbCkge1xuICAgIGlmICh0aGlzLl9jb3VudCA+PSB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVzaXplKHRoaXMuX2RhdGEubGVuZ3RoICogMik7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVt0aGlzLl9jb3VudF0gPSB2YWw7XG4gICAgKyt0aGlzLl9jb3VudDtcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICAtLXRoaXMuX2NvdW50O1xuXG4gICAgaWYgKHRoaXMuX2NvdW50IDwgMCkge1xuICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgIH1cblxuICAgIGxldCByZXQgPSB0aGlzLl9kYXRhW3RoaXMuX2NvdW50XTtcbiAgICB0aGlzLl9kYXRhW3RoaXMuX2NvdW50XSA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmYXN0UmVtb3ZlKGlkeCkge1xuICAgIGlmIChpZHggPj0gdGhpcy5fY291bnQgfHwgaWR4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xuICAgIHRoaXMuX2RhdGFbaWR4XSA9IHRoaXMuX2RhdGFbbGFzdF07XG4gICAgdGhpcy5fZGF0YVtsYXN0XSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jb3VudCAtPSAxO1xuICB9XG5cbiAgaW5kZXhPZih2YWwpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5pbmRleE9mKHZhbCk7XG4gIH1cblxuICBzb3J0KGNtcCkge1xuICAgIHJldHVybiBzb3J0KHRoaXMuX2RhdGEsIDAsIHRoaXMuX2NvdW50LCBjbXApO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RpbXNvcnQgPSByZXF1aXJlKCcuL3RpbXNvcnQnKTtcblxudmFyIF90aW1zb3J0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbXNvcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRml4ZWRBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRml4ZWRBcnJheShzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpeGVkQXJyYXkpO1xuXG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRBcnJheSwgW3tcbiAgICBrZXk6ICdfcmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2l6ZShzaXplKSB7XG4gICAgICBpZiAoc2l6ZSA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl9kYXRhLmxlbmd0aDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgIHRoaXMuX2RhdGFbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jb3VudDsgKytpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICAgIGlmICh0aGlzLl9jb3VudCA+PSB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNpemUodGhpcy5fZGF0YS5sZW5ndGggKiAyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGF0YVt0aGlzLl9jb3VudF0gPSB2YWw7XG4gICAgICArK3RoaXMuX2NvdW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgIC0tdGhpcy5fY291bnQ7XG5cbiAgICAgIGlmICh0aGlzLl9jb3VudCA8IDApIHtcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0gdGhpcy5fZGF0YVt0aGlzLl9jb3VudF07XG4gICAgICB0aGlzLl9kYXRhW3RoaXMuX2NvdW50XSA9IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmYXN0UmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmFzdFJlbW92ZShpZHgpIHtcbiAgICAgIGlmIChpZHggPj0gdGhpcy5fY291bnQgfHwgaWR4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0ID0gdGhpcy5fY291bnQgLSAxO1xuICAgICAgdGhpcy5fZGF0YVtpZHhdID0gdGhpcy5fZGF0YVtsYXN0XTtcbiAgICAgIHRoaXMuX2RhdGFbbGFzdF0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb3VudCAtPSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luZGV4T2YnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleE9mKHZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaW5kZXhPZih2YWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzb3J0KGNtcCkge1xuICAgICAgcmV0dXJuICgwLCBfdGltc29ydDIuZGVmYXVsdCkodGhpcy5fZGF0YSwgMCwgdGhpcy5fY291bnQsIGNtcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkYXRhJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXhlZEFycmF5O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGaXhlZEFycmF5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVpwZUdWa0xXRnljbUY1TG1weklsMHNJbTVoYldWeklqcGJJa1pwZUdWa1FYSnlZWGtpTENKemFYcGxJaXdpWDJOdmRXNTBJaXdpWDJSaGRHRWlMQ0pCY25KaGVTSXNJbXhsYm1kMGFDSXNJbWtpTENKMWJtUmxabWx1WldRaUxDSjJZV3dpTENKZmNtVnphWHBsSWl3aWNtVjBJaXdpYVdSNElpd2liR0Z6ZENJc0ltbHVaR1Y0VDJZaUxDSmpiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096dEJRVUZCT3pzN096czdPenRKUVVWeFFrRXNWVHRCUVVOdVFpeHpRa0ZCV1VNc1NVRkJXaXhGUVVGclFqdEJRVUZCT3p0QlFVTm9RaXhUUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkJMRk5CUVV0RExFdEJRVXdzUjBGQllTeEpRVUZKUXl4TFFVRktMRU5CUVZWSUxFbEJRVllzUTBGQllqdEJRVU5FT3pzN096UkNRVVZQUVN4SkxFVkJRVTA3UVVGRFdpeFZRVUZKUVN4UFFVRlBMRXRCUVV0RkxFdEJRVXdzUTBGQlYwVXNUVUZCZEVJc1JVRkJPRUk3UVVGRE5VSXNZVUZCU3l4SlFVRkpReXhKUVVGSkxFdEJRVXRJTEV0QlFVd3NRMEZCVjBVc1RVRkJlRUlzUlVGQlowTkRMRWxCUVVsTUxFbEJRWEJETEVWQlFUQkRMRVZCUVVWTExFTkJRVFZETEVWQlFTdERPMEZCUXpkRExHVkJRVXRJTEV0QlFVd3NRMEZCVjBjc1EwRkJXQ3hKUVVGblFrTXNVMEZCYUVJN1FVRkRSRHRCUVVOR08wRkJRMFk3T3pzMFFrRlZUenRCUVVOT0xGZEJRVXNzU1VGQlNVUXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKTEV0QlFVdEtMRTFCUVhwQ0xFVkJRV2xETEVWQlFVVkpMRU5CUVc1RExFVkJRWE5ETzBGQlEzQkRMR0ZCUVV0SUxFdEJRVXdzUTBGQlYwY3NRMEZCV0N4SlFVRm5Ra01zVTBGQmFFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTFRDeE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkVPenM3ZVVKQlJVbE5MRWNzUlVGQlN6dEJRVU5TTEZWQlFVa3NTMEZCUzA0c1RVRkJUQ3hKUVVGbExFdEJRVXRETEV0QlFVd3NRMEZCVjBVc1RVRkJPVUlzUlVGQmMwTTdRVUZEY0VNc1lVRkJTMGtzVDBGQlRDeERRVUZoTEV0QlFVdE9MRXRCUVV3c1EwRkJWMFVzVFVGQldDeEhRVUZ2UWl4RFFVRnFRenRCUVVORU96dEJRVVZFTEZkQlFVdEdMRXRCUVV3c1EwRkJWeXhMUVVGTFJDeE5RVUZvUWl4SlFVRXdRazBzUjBGQk1VSTdRVUZEUVN4UlFVRkZMRXRCUVV0T0xFMUJRVkE3UVVGRFJEczdPekJDUVVWTE8wRkJRMG9zVVVGQlJTeExRVUZMUVN4TlFVRlFPenRCUVVWQkxGVkJRVWtzUzBGQlMwRXNUVUZCVEN4SFFVRmpMRU5CUVd4Q0xFVkJRWEZDTzBGQlEyNUNMR0ZCUVV0QkxFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwUTdPMEZCUlVRc1ZVRkJTVkVzVFVGQlRTeExRVUZMVUN4TFFVRk1MRU5CUVZjc1MwRkJTMFFzVFVGQmFFSXNRMEZCVmp0QlFVTkJMRmRCUVV0RExFdEJRVXdzUTBGQlZ5eExRVUZMUkN4TlFVRm9RaXhKUVVFd1Frc3NVMEZCTVVJN08wRkJSVUVzWVVGQlQwY3NSMEZCVUR0QlFVTkVPenM3SzBKQlJWVkRMRWNzUlVGQlN6dEJRVU5rTEZWQlFVbEJMRTlCUVU4c1MwRkJTMVFzVFVGQldpeEpRVUZ6UWxNc1RVRkJUU3hEUVVGb1F5eEZRVUZ0UXp0QlFVTnFRenRCUVVORU96dEJRVVZFTEZWQlFVbERMRTlCUVU4c1MwRkJTMVlzVFVGQlRDeEhRVUZqTEVOQlFYcENPMEZCUTBFc1YwRkJTME1zUzBGQlRDeERRVUZYVVN4SFFVRllMRWxCUVd0Q0xFdEJRVXRTTEV0QlFVd3NRMEZCVjFNc1NVRkJXQ3hEUVVGc1FqdEJRVU5CTEZkQlFVdFVMRXRCUVV3c1EwRkJWMU1zU1VGQldDeEpRVUZ0UWt3c1UwRkJia0k3UVVGRFFTeFhRVUZMVEN4TlFVRk1MRWxCUVdVc1EwRkJaanRCUVVORU96czdORUpCUlU5TkxFY3NSVUZCU3p0QlFVTllMR0ZCUVU4c1MwRkJTMHdzUzBGQlRDeERRVUZYVlN4UFFVRllMRU5CUVcxQ1RDeEhRVUZ1UWl4RFFVRlFPMEZCUTBRN096dDVRa0ZGU1Uwc1J5eEZRVUZMTzBGQlExSXNZVUZCVHl4MVFrRkJTeXhMUVVGTFdDeExRVUZXTEVWQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEV0QlFVdEVMRTFCUVhwQ0xFVkJRV2xEV1N4SFFVRnFReXhEUVVGUU8wRkJRMFE3T3p0M1FrRjJSRms3UVVGRFdDeGhRVUZQTEV0QlFVdGFMRTFCUVZvN1FVRkRSRHM3TzNkQ1FVVlZPMEZCUTFRc1lVRkJUeXhMUVVGTFF5eExRVUZhTzBGQlEwUTdPenM3T3p0clFrRndRbXRDU0N4Vklpd2labWxzWlNJNkltWnBlR1ZrTFdGeWNtRjVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhOdmNuUWdabkp2YlNBbkxpOTBhVzF6YjNKMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JtbDRaV1JCY25KaGVTQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtITnBlbVVwSUh0Y2JpQWdJQ0IwYUdsekxsOWpiM1Z1ZENBOUlEQTdYRzRnSUNBZ2RHaHBjeTVmWkdGMFlTQTlJRzVsZHlCQmNuSmhlU2h6YVhwbEtUdGNiaUFnZlZ4dVhHNGdJRjl5WlhOcGVtVW9jMmw2WlNrZ2UxeHVJQ0FnSUdsbUlDaHphWHBsSUQ0Z2RHaHBjeTVmWkdGMFlTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0IwYUdsekxsOWtZWFJoTG14bGJtZDBhRHNnYVNBOElITnBlbVU3SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWtZWFJoVzJsZElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2RsZENCc1pXNW5kR2dvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyTnZkVzUwTzF4dUlDQjlYRzVjYmlBZ1oyVjBJR1JoZEdFb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMlJoZEdFN1hHNGdJSDFjYmx4dUlDQnlaWE5sZENncElIdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11WDJOdmRXNTBPeUFySzJrcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJSaGRHRmJhVjBnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NWZZMjkxYm5RZ1BTQXdPMXh1SUNCOVhHNWNiaUFnY0hWemFDaDJZV3dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVmWTI5MWJuUWdQajBnZEdocGN5NWZaR0YwWVM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM0psYzJsNlpTaDBhR2x6TGw5a1lYUmhMbXhsYm1kMGFDQXFJRElwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVgyUmhkR0ZiZEdocGN5NWZZMjkxYm5SZElEMGdkbUZzTzF4dUlDQWdJQ3NyZEdocGN5NWZZMjkxYm5RN1hHNGdJSDFjYmx4dUlDQndiM0FvS1NCN1hHNGdJQ0FnTFMxMGFHbHpMbDlqYjNWdWREdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxsOWpiM1Z1ZENBOElEQXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgyTnZkVzUwSUQwZ01EdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdjbVYwSUQwZ2RHaHBjeTVmWkdGMFlWdDBhR2x6TGw5amIzVnVkRjA3WEc0Z0lDQWdkR2hwY3k1ZlpHRjBZVnQwYUdsekxsOWpiM1Z1ZEYwZ1BTQjFibVJsWm1sdVpXUTdYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNCOVhHNWNiaUFnWm1GemRGSmxiVzkyWlNocFpIZ3BJSHRjYmlBZ0lDQnBaaUFvYVdSNElENDlJSFJvYVhNdVgyTnZkVzUwSUh4OElHbGtlQ0E4SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2JHRnpkQ0E5SUhSb2FYTXVYMk52ZFc1MElDMGdNVHRjYmlBZ0lDQjBhR2x6TGw5a1lYUmhXMmxrZUYwZ1BTQjBhR2x6TGw5a1lYUmhXMnhoYzNSZE8xeHVJQ0FnSUhSb2FYTXVYMlJoZEdGYmJHRnpkRjBnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnZEdocGN5NWZZMjkxYm5RZ0xUMGdNVHRjYmlBZ2ZWeHVYRzRnSUdsdVpHVjRUMllvZG1Gc0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMlJoZEdFdWFXNWtaWGhQWmloMllXd3BPMXh1SUNCOVhHNWNiaUFnYzI5eWRDaGpiWEFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjMjl5ZENoMGFHbHpMbDlrWVhSaExDQXdMQ0IwYUdsekxsOWpiM1Z1ZEN3Z1kyMXdLVHRjYmlBZ2ZWeHVmU0pkZlE9PSJdfQ==