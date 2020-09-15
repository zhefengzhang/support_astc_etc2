(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/memop/linked-array.js';
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
        var _pool = require('./pool');
        var _pool2 = _interopRequireDefault(_pool);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var LinkedArray = function () {
            function LinkedArray(fn, size) {
                _classCallCheck(this, LinkedArray);
                this._fn = fn;
                this._count = 0;
                this._head = null;
                this._tail = null;
                this._pool = new _pool2.default(fn, size);
            }
            _createClass(LinkedArray, [
                {
                    key: 'add',
                    value: function add() {
                        var node = this._pool.alloc();
                        if (!this._tail) {
                            this._head = node;
                        } else {
                            this._tail._next = node;
                            node._prev = this._tail;
                        }
                        this._tail = node;
                        this._count += 1;
                        return node;
                    }
                },
                {
                    key: 'remove',
                    value: function remove(node) {
                        if (node._prev) {
                            node._prev._next = node._next;
                        } else {
                            this._head = node._next;
                        }
                        if (node._next) {
                            node._next._prev = node._prev;
                        } else {
                            this._tail = node._prev;
                        }
                        node._next = null;
                        node._prev = null;
                        this._pool.free(node);
                        this._count -= 1;
                    }
                },
                {
                    key: 'forEach',
                    value: function forEach(fn, binder) {
                        var cursor = this._head;
                        if (!cursor) {
                            return;
                        }
                        if (binder) {
                            fn = fn.bind(binder);
                        }
                        var idx = 0;
                        var next = cursor;
                        while (cursor) {
                            next = cursor._next;
                            fn(cursor, idx, this);
                            cursor = next;
                            ++idx;
                        }
                    }
                },
                {
                    key: 'head',
                    get: function get() {
                        return this._head;
                    }
                },
                {
                    key: 'tail',
                    get: function get() {
                        return this._tail;
                    }
                },
                {
                    key: 'length',
                    get: function get() {
                        return this._count;
                    }
                }
            ]);
            return LinkedArray;
        }();
        exports.default = LinkedArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtlZC1hcnJheS5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL21lbW9wL2xpbmtlZC1hcnJheS5qcyJdLCJuYW1lcyI6WyJMaW5rZWRBcnJheSIsImZuIiwic2l6ZSIsIl9mbiIsIl9jb3VudCIsIl9oZWFkIiwiX3RhaWwiLCJfcG9vbCIsIlBvb2wiLCJub2RlIiwiYWxsb2MiLCJfbmV4dCIsIl9wcmV2IiwiZnJlZSIsImJpbmRlciIsImN1cnNvciIsImJpbmQiLCJpZHgiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUFBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUE7Ozs7Ozs7Ozs7WUFJcUJBLFdBQUFBO1lBQ25CLFNBQUEsV0FBQSxDQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQjtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsV0FBQSxFQUFBO0FBQUEsZ0JBQ3BCLEtBQUtDLEdBQUwsR0FBV0YsRUFBWCxDQURvQjtBQUFBLGdCQUVwQixLQUFLRyxNQUFMLEdBQWMsQ0FBZCxDQUZvQjtBQUFBLGdCQUdwQixLQUFLQyxLQUFMLEdBQWEsSUFBYixDQUhvQjtBQUFBLGdCQUlwQixLQUFLQyxLQUFMLEdBQWEsSUFBYixDQUpvQjtBQUFBLGdCQU1wQixLQUFLQyxLQUFMLEdBQWEsSUFBSUMsTUFBQUEsQ0FBQUEsT0FBSixDQUFTUCxFQUFULEVBQWFDLElBQWIsQ0FBYixDQU5vQjtBQUFBOzs7OzBDQXFCaEI7QUFBQSx3QkFDSixJQUFJTyxJQUFBQSxHQUFPLEtBQUtGLEtBQUwsQ0FBV0csS0FBWCxFQUFYLENBREk7QUFBQSx3QkFHSixJQUFJLENBQUMsS0FBS0osS0FBVixFQUFpQjtBQUFBLDRCQUNmLEtBQUtELEtBQUwsR0FBYUksSUFBYixDQURlO0FBQUEseUJBQWpCLE1BRU87QUFBQSw0QkFDTCxLQUFLSCxLQUFMLENBQVdLLEtBQVgsR0FBbUJGLElBQW5CLENBREs7QUFBQSw0QkFFTEEsSUFBQUEsQ0FBS0csS0FBTEgsR0FBYSxLQUFLSCxLQUFsQkcsQ0FGSztBQUFBLHlCQUxIO0FBQUEsd0JBU0osS0FBS0gsS0FBTCxHQUFhRyxJQUFiLENBVEk7QUFBQSx3QkFVSixLQUFLTCxNQUFMLElBQWUsQ0FBZixDQVZJO0FBQUEsd0JBWUosT0FBT0ssSUFBUCxDQVpJO0FBQUE7Ozs7MkNBZUNBLE1BQU07QUFBQSx3QkFDWCxJQUFJQSxJQUFBQSxDQUFLRyxLQUFULEVBQWdCO0FBQUEsNEJBQ2RILElBQUFBLENBQUtHLEtBQUxILENBQVdFLEtBQVhGLEdBQW1CQSxJQUFBQSxDQUFLRSxLQUF4QkYsQ0FEYztBQUFBLHlCQUFoQixNQUVPO0FBQUEsNEJBQ0wsS0FBS0osS0FBTCxHQUFhSSxJQUFBQSxDQUFLRSxLQUFsQixDQURLO0FBQUEseUJBSEk7QUFBQSx3QkFPWCxJQUFJRixJQUFBQSxDQUFLRSxLQUFULEVBQWdCO0FBQUEsNEJBQ2RGLElBQUFBLENBQUtFLEtBQUxGLENBQVdHLEtBQVhILEdBQW1CQSxJQUFBQSxDQUFLRyxLQUF4QkgsQ0FEYztBQUFBLHlCQUFoQixNQUVPO0FBQUEsNEJBQ0wsS0FBS0gsS0FBTCxHQUFhRyxJQUFBQSxDQUFLRyxLQUFsQixDQURLO0FBQUEseUJBVEk7QUFBQSx3QkFhWEgsSUFBQUEsQ0FBS0UsS0FBTEYsR0FBYSxJQUFiQSxDQWJXO0FBQUEsd0JBY1hBLElBQUFBLENBQUtHLEtBQUxILEdBQWEsSUFBYkEsQ0FkVztBQUFBLHdCQWVYLEtBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkosSUFBaEIsRUFmVztBQUFBLHdCQWdCWCxLQUFLTCxNQUFMLElBQWUsQ0FBZixDQWhCVztBQUFBOzs7OzRDQW1CTEgsSUFBSWEsUUFBUTtBQUFBLHdCQUNsQixJQUFJQyxNQUFBQSxHQUFTLEtBQUtWLEtBQWxCLENBRGtCO0FBQUEsd0JBRWxCLElBQUksQ0FBQ1UsTUFBTCxFQUFhO0FBQUEsNEJBQ1gsT0FEVztBQUFBLHlCQUZLO0FBQUEsd0JBTWxCLElBQUlELE1BQUosRUFBWTtBQUFBLDRCQUNWYixFQUFBQSxHQUFLQSxFQUFBQSxDQUFHZSxJQUFIZixDQUFRYSxNQUFSYixDQUFMQSxDQURVO0FBQUEseUJBTk07QUFBQSx3QkFVbEIsSUFBSWdCLEdBQUFBLEdBQU0sQ0FBVixDQVZrQjtBQUFBLHdCQVdsQixJQUFJQyxJQUFBQSxHQUFPSCxNQUFYLENBWGtCO0FBQUEsd0JBYWxCLE9BQU9BLE1BQVAsRUFBZTtBQUFBLDRCQUNiRyxJQUFBQSxHQUFPSCxNQUFBQSxDQUFPSixLQUFkTyxDQURhO0FBQUEsNEJBRWJqQixFQUFBQSxDQUFHYyxNQUFIZCxFQUFXZ0IsR0FBWGhCLEVBQWdCLElBQWhCQSxFQUZhO0FBQUEsNEJBSWJjLE1BQUFBLEdBQVNHLElBQVRILENBSmE7QUFBQSw0QkFLYixFQUFFRSxHQUFGLENBTGE7QUFBQSx5QkFiRztBQUFBOzs7O3dDQTlDVDtBQUFBLHdCQUNULE9BQU8sS0FBS1osS0FBWixDQURTO0FBQUE7Ozs7d0NBSUE7QUFBQSx3QkFDVCxPQUFPLEtBQUtDLEtBQVosQ0FEUztBQUFBOzs7O3dDQUlFO0FBQUEsd0JBQ1gsT0FBTyxLQUFLRixNQUFaLENBRFc7QUFBQTs7Ozs7MEJBbEJNSjs7Ozs7O1FBRnJCLGlCQUFBLENBQUEsa0JBQUEsQ0FBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLDREQUFBO0FBQUEsU0FBQSIsImZpbGUiOiJsaW5rZWQtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9vbCBmcm9tICcuL3Bvb2wnO1xuXG4vLyBOT1RFOiB5b3UgbXVzdCBoYXZlIGBfcHJldmAgYW5kIGBfbmV4dGAgZmllbGQgaW4gdGhlIG9iamVjdCByZXR1cm5zIGJ5IGBmbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkQXJyYXkge1xuICBjb25zdHJ1Y3Rvcihmbiwgc2l6ZSkge1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2hlYWQgPSBudWxsO1xuICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgdGhpcy5fcG9vbCA9IG5ldyBQb29sKGZuLCBzaXplKTtcbiAgfVxuXG4gIGdldCBoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkO1xuICB9XG5cbiAgZ2V0IHRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhaWw7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuX3Bvb2wuYWxsb2MoKTtcblxuICAgIGlmICghdGhpcy5fdGFpbCkge1xuICAgICAgdGhpcy5faGVhZCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RhaWwuX25leHQgPSBub2RlO1xuICAgICAgbm9kZS5fcHJldiA9IHRoaXMuX3RhaWw7XG4gICAgfVxuICAgIHRoaXMuX3RhaWwgPSBub2RlO1xuICAgIHRoaXMuX2NvdW50ICs9IDE7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJlbW92ZShub2RlKSB7XG4gICAgaWYgKG5vZGUuX3ByZXYpIHtcbiAgICAgIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fbmV4dCkge1xuICAgICAgbm9kZS5fbmV4dC5fcHJldiA9IG5vZGUuX3ByZXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgIH1cblxuICAgIG5vZGUuX25leHQgPSBudWxsO1xuICAgIG5vZGUuX3ByZXYgPSBudWxsO1xuICAgIHRoaXMuX3Bvb2wuZnJlZShub2RlKTtcbiAgICB0aGlzLl9jb3VudCAtPSAxO1xuICB9XG5cbiAgZm9yRWFjaChmbiwgYmluZGVyKSB7XG4gICAgbGV0IGN1cnNvciA9IHRoaXMuX2hlYWQ7XG4gICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYmluZGVyKSB7XG4gICAgICBmbiA9IGZuLmJpbmQoYmluZGVyKTtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gMDtcbiAgICBsZXQgbmV4dCA9IGN1cnNvcjtcblxuICAgIHdoaWxlIChjdXJzb3IpIHtcbiAgICAgIG5leHQgPSBjdXJzb3IuX25leHQ7XG4gICAgICBmbihjdXJzb3IsIGlkeCwgdGhpcyk7XG5cbiAgICAgIGN1cnNvciA9IG5leHQ7XG4gICAgICArK2lkeDtcbiAgICB9XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcG9vbCA9IHJlcXVpcmUoJy4vcG9vbCcpO1xuXG52YXIgX3Bvb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9vbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIE5PVEU6IHlvdSBtdXN0IGhhdmUgYF9wcmV2YCBhbmQgYF9uZXh0YCBmaWVsZCBpbiB0aGUgb2JqZWN0IHJldHVybnMgYnkgYGZuYFxuXG52YXIgTGlua2VkQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpbmtlZEFycmF5KGZuLCBzaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmtlZEFycmF5KTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fY291bnQgPSAwO1xuICAgIHRoaXMuX2hlYWQgPSBudWxsO1xuICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgdGhpcy5fcG9vbCA9IG5ldyBfcG9vbDIuZGVmYXVsdChmbiwgc2l6ZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlua2VkQXJyYXksIFt7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sLmFsbG9jKCk7XG5cbiAgICAgIGlmICghdGhpcy5fdGFpbCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RhaWwuX25leHQgPSBub2RlO1xuICAgICAgICBub2RlLl9wcmV2ID0gdGhpcy5fdGFpbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RhaWwgPSBub2RlO1xuICAgICAgdGhpcy5fY291bnQgKz0gMTtcblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLl9wcmV2KSB7XG4gICAgICAgIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLl9uZXh0KSB7XG4gICAgICAgIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFpbCA9IG5vZGUuX3ByZXY7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX25leHQgPSBudWxsO1xuICAgICAgbm9kZS5fcHJldiA9IG51bGw7XG4gICAgICB0aGlzLl9wb29sLmZyZWUobm9kZSk7XG4gICAgICB0aGlzLl9jb3VudCAtPSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvckVhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JFYWNoKGZuLCBiaW5kZXIpIHtcbiAgICAgIHZhciBjdXJzb3IgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmluZGVyKSB7XG4gICAgICAgIGZuID0gZm4uYmluZChiaW5kZXIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWR4ID0gMDtcbiAgICAgIHZhciBuZXh0ID0gY3Vyc29yO1xuXG4gICAgICB3aGlsZSAoY3Vyc29yKSB7XG4gICAgICAgIG5leHQgPSBjdXJzb3IuX25leHQ7XG4gICAgICAgIGZuKGN1cnNvciwgaWR4LCB0aGlzKTtcblxuICAgICAgICBjdXJzb3IgPSBuZXh0O1xuICAgICAgICArK2lkeDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoZWFkJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oZWFkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RhaWwnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhaWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlua2VkQXJyYXk7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtlZEFycmF5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbXhwYm10bFpDMWhjbkpoZVM1cWN5SmRMQ0p1WVcxbGN5STZXeUpNYVc1clpXUkJjbkpoZVNJc0ltWnVJaXdpYzJsNlpTSXNJbDltYmlJc0lsOWpiM1Z1ZENJc0lsOW9aV0ZrSWl3aVgzUmhhV3dpTENKZmNHOXZiQ0lzSWxCdmIyd2lMQ0p1YjJSbElpd2lZV3hzYjJNaUxDSmZibVY0ZENJc0lsOXdjbVYySWl3aVpuSmxaU0lzSW1KcGJtUmxjaUlzSW1OMWNuTnZjaUlzSW1KcGJtUWlMQ0pwWkhnaUxDSnVaWGgwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdRVUZCUVRzN096czdPenM3UVVGRlFUczdTVUZGY1VKQkxGYzdRVUZEYmtJc2RVSkJRVmxETEVWQlFWb3NSVUZCWjBKRExFbEJRV2hDTEVWQlFYTkNPMEZCUVVFN08wRkJRM0JDTEZOQlFVdERMRWRCUVV3c1IwRkJWMFlzUlVGQldEdEJRVU5CTEZOQlFVdEhMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEVzVTBGQlMwTXNTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRRU3hUUVVGTFF5eExRVUZNTEVkQlFXRXNTVUZCWWpzN1FVRkZRU3hUUVVGTFF5eExRVUZNTEVkQlFXRXNTVUZCU1VNc1kwRkJTaXhEUVVGVFVDeEZRVUZVTEVWQlFXRkRMRWxCUVdJc1EwRkJZanRCUVVORU96czdPekJDUVdOTE8wRkJRMG9zVlVGQlNVOHNUMEZCVHl4TFFVRkxSaXhMUVVGTUxFTkJRVmRITEV0QlFWZ3NSVUZCV0RzN1FVRkZRU3hWUVVGSkxFTkJRVU1zUzBGQlMwb3NTMEZCVml4RlFVRnBRanRCUVVObUxHRkJRVXRFTEV0QlFVd3NSMEZCWVVrc1NVRkJZanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdGQlFVdElMRXRCUVV3c1EwRkJWMHNzUzBGQldDeEhRVUZ0UWtZc1NVRkJia0k3UVVGRFFVRXNZVUZCUzBjc1MwRkJUQ3hIUVVGaExFdEJRVXRPTEV0QlFXeENPMEZCUTBRN1FVRkRSQ3hYUVVGTFFTeExRVUZNTEVkQlFXRkhMRWxCUVdJN1FVRkRRU3hYUVVGTFRDeE5RVUZNTEVsQlFXVXNRMEZCWmpzN1FVRkZRU3hoUVVGUFN5eEpRVUZRTzBGQlEwUTdPenN5UWtGRlRVRXNTU3hGUVVGTk8wRkJRMWdzVlVGQlNVRXNTMEZCUzBjc1MwRkJWQ3hGUVVGblFqdEJRVU5rU0N4aFFVRkxSeXhMUVVGTUxFTkJRVmRFTEV0QlFWZ3NSMEZCYlVKR0xFdEJRVXRGTEV0QlFYaENPMEZCUTBRc1QwRkdSQ3hOUVVWUE8wRkJRMHdzWVVGQlMwNHNTMEZCVEN4SFFVRmhTU3hMUVVGTFJTeExRVUZzUWp0QlFVTkVPenRCUVVWRUxGVkJRVWxHTEV0QlFVdEZMRXRCUVZRc1JVRkJaMEk3UVVGRFpFWXNZVUZCUzBVc1MwRkJUQ3hEUVVGWFF5eExRVUZZTEVkQlFXMUNTQ3hMUVVGTFJ5eExRVUY0UWp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHRkJRVXRPTEV0QlFVd3NSMEZCWVVjc1MwRkJTMGNzUzBGQmJFSTdRVUZEUkRzN1FVRkZSRWdzVjBGQlMwVXNTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRRVVlzVjBGQlMwY3NTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRRU3hYUVVGTFRDeExRVUZNTEVOQlFWZE5MRWxCUVZnc1EwRkJaMEpLTEVsQlFXaENPMEZCUTBFc1YwRkJTMHdzVFVGQlRDeEpRVUZsTEVOQlFXWTdRVUZEUkRzN096UkNRVVZQU0N4RkxFVkJRVWxoTEUwc1JVRkJVVHRCUVVOc1FpeFZRVUZKUXl4VFFVRlRMRXRCUVV0V0xFdEJRV3hDTzBGQlEwRXNWVUZCU1N4RFFVRkRWU3hOUVVGTUxFVkJRV0U3UVVGRFdEdEJRVU5FT3p0QlFVVkVMRlZCUVVsRUxFMUJRVW9zUlVGQldUdEJRVU5XWWl4aFFVRkxRU3hIUVVGSFpTeEpRVUZJTEVOQlFWRkdMRTFCUVZJc1EwRkJURHRCUVVORU96dEJRVVZFTEZWQlFVbEhMRTFCUVUwc1EwRkJWanRCUVVOQkxGVkJRVWxETEU5QlFVOUlMRTFCUVZnN08wRkJSVUVzWVVGQlQwRXNUVUZCVUN4RlFVRmxPMEZCUTJKSExHVkJRVTlJTEU5QlFVOUtMRXRCUVdRN1FVRkRRVllzVjBGQlIyTXNUVUZCU0N4RlFVRlhSU3hIUVVGWUxFVkJRV2RDTEVsQlFXaENPenRCUVVWQlJpeHBRa0ZCVTBjc1NVRkJWRHRCUVVOQkxGVkJRVVZFTEVkQlFVWTdRVUZEUkR0QlFVTkdPenM3ZDBKQmJFVlZPMEZCUTFRc1lVRkJUeXhMUVVGTFdpeExRVUZhTzBGQlEwUTdPenQzUWtGRlZUdEJRVU5VTEdGQlFVOHNTMEZCUzBNc1MwRkJXanRCUVVORU96czdkMEpCUlZrN1FVRkRXQ3hoUVVGUExFdEJRVXRHTEUxQlFWbzdRVUZEUkRzN096czdPMnRDUVhCQ2EwSktMRmNpTENKbWFXeGxJam9pYkdsdWEyVmtMV0Z5Y21GNUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkJ2YjJ3Z1puSnZiU0FuTGk5d2IyOXNKenRjYmx4dUx5OGdUazlVUlRvZ2VXOTFJRzExYzNRZ2FHRjJaU0JnWDNCeVpYWmdJR0Z1WkNCZ1gyNWxlSFJnSUdacFpXeGtJR2x1SUhSb1pTQnZZbXBsWTNRZ2NtVjBkWEp1Y3lCaWVTQmdabTVnWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRXhwYm10bFpFRnljbUY1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvWm00c0lITnBlbVVwSUh0Y2JpQWdJQ0IwYUdsekxsOW1iaUE5SUdadU8xeHVJQ0FnSUhSb2FYTXVYMk52ZFc1MElEMGdNRHRjYmlBZ0lDQjBhR2x6TGw5b1pXRmtJRDBnYm5Wc2JEdGNiaUFnSUNCMGFHbHpMbDkwWVdsc0lEMGdiblZzYkR0Y2JseHVJQ0FnSUhSb2FYTXVYM0J2YjJ3Z1BTQnVaWGNnVUc5dmJDaG1iaXdnYzJsNlpTazdYRzRnSUgxY2JseHVJQ0JuWlhRZ2FHVmhaQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmFHVmhaRHRjYmlBZ2ZWeHVYRzRnSUdkbGRDQjBZV2xzS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTBZV2xzTzF4dUlDQjlYRzVjYmlBZ1oyVjBJR3hsYm1kMGFDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWTI5MWJuUTdYRzRnSUgxY2JseHVJQ0JoWkdRb0tTQjdYRzRnSUNBZ2JHVjBJRzV2WkdVZ1BTQjBhR2x6TGw5d2IyOXNMbUZzYkc5aktDazdYRzVjYmlBZ0lDQnBaaUFvSVhSb2FYTXVYM1JoYVd3cElIdGNiaUFnSUNBZ0lIUm9hWE11WDJobFlXUWdQU0J1YjJSbE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOTBZV2xzTGw5dVpYaDBJRDBnYm05a1pUdGNiaUFnSUNBZ0lHNXZaR1V1WDNCeVpYWWdQU0IwYUdsekxsOTBZV2xzTzF4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TGw5MFlXbHNJRDBnYm05a1pUdGNiaUFnSUNCMGFHbHpMbDlqYjNWdWRDQXJQU0F4TzF4dVhHNGdJQ0FnY21WMGRYSnVJRzV2WkdVN1hHNGdJSDFjYmx4dUlDQnlaVzF2ZG1Vb2JtOWtaU2tnZTF4dUlDQWdJR2xtSUNodWIyUmxMbDl3Y21WMktTQjdYRzRnSUNBZ0lDQnViMlJsTGw5d2NtVjJMbDl1WlhoMElEMGdibTlrWlM1ZmJtVjRkRHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYUdWaFpDQTlJRzV2WkdVdVgyNWxlSFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0c1dlpHVXVYMjVsZUhRcElIdGNiaUFnSUNBZ0lHNXZaR1V1WDI1bGVIUXVYM0J5WlhZZ1BTQnViMlJsTGw5d2NtVjJPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMbDkwWVdsc0lEMGdibTlrWlM1ZmNISmxkanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnViMlJsTGw5dVpYaDBJRDBnYm5Wc2JEdGNiaUFnSUNCdWIyUmxMbDl3Y21WMklEMGdiblZzYkR0Y2JpQWdJQ0IwYUdsekxsOXdiMjlzTG1aeVpXVW9ibTlrWlNrN1hHNGdJQ0FnZEdocGN5NWZZMjkxYm5RZ0xUMGdNVHRjYmlBZ2ZWeHVYRzRnSUdadmNrVmhZMmdvWm00c0lHSnBibVJsY2lrZ2UxeHVJQ0FnSUd4bGRDQmpkWEp6YjNJZ1BTQjBhR2x6TGw5b1pXRmtPMXh1SUNBZ0lHbG1JQ2doWTNWeWMyOXlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR0pwYm1SbGNpa2dlMXh1SUNBZ0lDQWdabTRnUFNCbWJpNWlhVzVrS0dKcGJtUmxjaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR1YwSUdsa2VDQTlJREE3WEc0Z0lDQWdiR1YwSUc1bGVIUWdQU0JqZFhKemIzSTdYRzVjYmlBZ0lDQjNhR2xzWlNBb1kzVnljMjl5S1NCN1hHNGdJQ0FnSUNCdVpYaDBJRDBnWTNWeWMyOXlMbDl1WlhoME8xeHVJQ0FnSUNBZ1ptNG9ZM1Z5YzI5eUxDQnBaSGdzSUhSb2FYTXBPMXh1WEc0Z0lDQWdJQ0JqZFhKemIzSWdQU0J1WlhoME8xeHVJQ0FnSUNBZ0t5dHBaSGc3WEc0Z0lDQWdmVnh1SUNCOVhHNTlJbDE5Il19