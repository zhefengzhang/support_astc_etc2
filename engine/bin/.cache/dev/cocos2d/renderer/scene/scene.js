(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/scene/scene.js';
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
        var _memop = require('../memop');
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var Scene = function () {
            function Scene(app) {
                _classCallCheck(this, Scene);
                this._lights = new _memop.FixedArray(16);
                this._models = new _memop.FixedArray(16);
                this._cameras = new _memop.FixedArray(16);
                this._debugCamera = null;
                this._app = app;
                this._views = [];
            }
            _createClass(Scene, [
                {
                    key: '_add',
                    value: function _add(pool, item) {
                        if (item._poolID !== -1) {
                            return;
                        }
                        pool.push(item);
                        item._poolID = pool.length - 1;
                    }
                },
                {
                    key: '_remove',
                    value: function _remove(pool, item) {
                        if (item._poolID === -1) {
                            return;
                        }
                        pool.data[pool.length - 1]._poolID = item._poolID;
                        pool.fastRemove(item._poolID);
                        item._poolID = -1;
                    }
                },
                {
                    key: 'tick',
                    value: function tick() {
                        for (var i = 0; i < this._models.length; ++i) {
                            var model = this._models.data[i];
                            model._updateTransform();
                        }
                    }
                },
                {
                    key: 'reset',
                    value: function reset() {
                        for (var i = 0; i < this._models.length; ++i) {
                            var model = this._models.data[i];
                            model._viewID = -1;
                        }
                    }
                },
                {
                    key: 'setDebugCamera',
                    value: function setDebugCamera(cam) {
                        this._debugCamera = cam;
                    }
                },
                {
                    key: 'getCameraCount',
                    value: function getCameraCount() {
                        return this._cameras.length;
                    }
                },
                {
                    key: 'getCamera',
                    value: function getCamera(idx) {
                        return this._cameras.data[idx];
                    }
                },
                {
                    key: 'addCamera',
                    value: function addCamera(camera) {
                        this._add(this._cameras, camera);
                    }
                },
                {
                    key: 'removeCamera',
                    value: function removeCamera(camera) {
                        this._remove(this._cameras, camera);
                    }
                },
                {
                    key: 'getModelCount',
                    value: function getModelCount() {
                        return this._models.length;
                    }
                },
                {
                    key: 'getModel',
                    value: function getModel(idx) {
                        return this._models.data[idx];
                    }
                },
                {
                    key: 'addModel',
                    value: function addModel(model) {
                        this._add(this._models, model);
                    }
                },
                {
                    key: 'removeModel',
                    value: function removeModel(model) {
                        this._remove(this._models, model);
                    }
                },
                {
                    key: 'getLightCount',
                    value: function getLightCount() {
                        return this._lights.length;
                    }
                },
                {
                    key: 'getLight',
                    value: function getLight(idx) {
                        return this._lights.data[idx];
                    }
                },
                {
                    key: 'addLight',
                    value: function addLight(light) {
                        this._add(this._lights, light);
                    }
                },
                {
                    key: 'removeLight',
                    value: function removeLight(light) {
                        this._remove(this._lights, light);
                    }
                },
                {
                    key: 'addView',
                    value: function addView(view) {
                        if (this._views.indexOf(view) === -1) {
                            this._views.push(view);
                        }
                    }
                },
                {
                    key: 'removeView',
                    value: function removeView(view) {
                        var idx = this._views.indexOf(view);
                        if (idx !== -1) {
                            this._views.splice(idx, 1);
                        }
                    }
                }
            ]);
            return Scene;
        }();
        exports.default = Scene;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjZW5lLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvc2NlbmUvc2NlbmUuanMiXSwibmFtZXMiOlsiU2NlbmUiLCJhcHAiLCJfbGlnaHRzIiwiRml4ZWRBcnJheSIsIl9tb2RlbHMiLCJfY2FtZXJhcyIsIl9kZWJ1Z0NhbWVyYSIsIl9hcHAiLCJfdmlld3MiLCJwb29sIiwiaXRlbSIsIl9wb29sSUQiLCJwdXNoIiwibGVuZ3RoIiwiZGF0YSIsImZhc3RSZW1vdmUiLCJpIiwibW9kZWwiLCJfdXBkYXRlVHJhbnNmb3JtIiwiX3ZpZXdJRCIsImNhbSIsImlkeCIsImNhbWVyYSIsIl9hZGQiLCJfcmVtb3ZlIiwibGlnaHQiLCJ2aWV3IiwiaW5kZXhPZiIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQUVBLE9BQUEsaUJBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQUEsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUEsQ0FBQTs7Ozs7O1lBS01BLEtBQUFBO1lBSUosU0FBQSxLQUFBLENBQVlDLEdBQVosRUFBaUI7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtBQUFBLGdCQUNmLEtBQUtDLE9BQUwsR0FBZSxJQUFJQyxNQUFBQSxDQUFBQSxVQUFKLENBQWUsRUFBZixDQUFmLENBRGU7QUFBQSxnQkFFZixLQUFLQyxPQUFMLEdBQWUsSUFBSUQsTUFBQUEsQ0FBQUEsVUFBSixDQUFlLEVBQWYsQ0FBZixDQUZlO0FBQUEsZ0JBR2YsS0FBS0UsUUFBTCxHQUFnQixJQUFJRixNQUFBQSxDQUFBQSxVQUFKLENBQWUsRUFBZixDQUFoQixDQUhlO0FBQUEsZ0JBSWYsS0FBS0csWUFBTCxHQUFvQixJQUFwQixDQUplO0FBQUEsZ0JBS2YsS0FBS0MsSUFBTCxHQUFZ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Ozs7O29EQVFIO0FBQUEsd0JBQ2QsT0FBTyxLQUFLZixPQUFMLENBQWFXLE1BQXBCLENBRGM7QUFBQTs7Ozs2Q0FTUFEsS0FBSztBQUFBLHdCQUNaLE9BQU8sS0FBS25CLE9BQUwsQ0FBYVksSUFBYixDQUFrQk8sR0FBbEIsQ0FBUCxDQURZO0FBQUE7Ozs7NkNBUUxJLE9BQU87QUFBQSx3QkFDZCxLQUFLRixJQUFMLENBQVUsS0FBS3JCLE9BQWYsRUFBd0J1QixLQUF4QixFQURjO0FBQUE7Ozs7Z0RBUUpBLE9BQU87QUFBQSx3QkFDakIsS0FBS0QsT0FBTCxDQUFhLEtBQUt0QixPQUFsQixFQUEyQnVCLEtBQTNCLEVBRGlCO0FBQUE7Ozs7NENBUVhDLE1BQU07QUFBQSx3QkFDWixJQUFJLEtBQUtsQixNQUFMLENBQVltQixPQUFaLENBQW9CRCxJQUFwQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQUEsNEJBQ3BDLEtBQUtsQixNQUFMLENBQVlJLElBQVosQ0FBaUJjLElBQWpCLEVBRG9DO0FBQUEseUJBRDFCO0FBQUE7Ozs7K0NBVUhBLE1BQU07QUFBQSx3QkFDZixJQUFJTCxHQUFBQSxHQUFNLEtBQUtiLE1BQUwsQ0FBWW1CLE9BQVosQ0FBb0JELElBQXBCLENBQVYsQ0FEZTtBQUFBLHdCQUVmLElBQUlMLEdBQUFBLEtBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQUEsNEJBQ2QsS0FBS2IsTUFBTCxDQUFZb0IsTUFBWixDQUFtQlAsR0FBbkIsRUFBd0IsQ0FBeEIsRUFEYztBQUFBLHlCQUZEO0FBQUE7Ozs7OzBCQVFKckI7Ozs7O1dBdkxiO0FBQUE7O1dBQUE7QUFBQSIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG5pbXBvcnQgeyBGaXhlZEFycmF5IH0gZnJvbSAnLi4vbWVtb3AnO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNjZW5lXG4gKi9cbmNsYXNzIFNjZW5lIHtcbiAgLyoqXG4gICAqIFNldHVwIGEgZGVmYXVsdCBlbXB0eSBzY2VuZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwKSB7XG4gICAgdGhpcy5fbGlnaHRzID0gbmV3IEZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX21vZGVscyA9IG5ldyBGaXhlZEFycmF5KDE2KTtcbiAgICB0aGlzLl9jYW1lcmFzID0gbmV3IEZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX2RlYnVnQ2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAvLyBOT1RFOiB3ZSBkb24ndCB1c2UgcG9vbCBmb3Igdmlld3MgKGJlY2F1c2UgaXQncyBsZXNzIGNoYW5nZWQgYW5kIGl0IGRvZXNuJ3QgaGF2ZSBwb29sSUQpXG4gICAgdGhpcy5fdmlld3MgPSBbXTtcbiAgfVxuXG4gIF9hZGQocG9vbCwgaXRlbSkge1xuICAgIGlmIChpdGVtLl9wb29sSUQgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcG9vbC5wdXNoKGl0ZW0pO1xuICAgIGl0ZW0uX3Bvb2xJRCA9IHBvb2wubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIF9yZW1vdmUocG9vbCwgaXRlbSkge1xuICAgIGlmIChpdGVtLl9wb29sSUQgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcG9vbC5kYXRhW3Bvb2wubGVuZ3RoLTFdLl9wb29sSUQgPSBpdGVtLl9wb29sSUQ7XG4gICAgcG9vbC5mYXN0UmVtb3ZlKGl0ZW0uX3Bvb2xJRCk7XG4gICAgaXRlbS5fcG9vbElEID0gLTE7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIGJ1aWx0LWluIGJvdW5kaW5nIHNoYXBlcyBpZiBuZWVkZWQsXG4gICAqIHVzZWQgaW4gdGhlIGZydXN0dW0gY3VsbGluZyBwcm9jZXNzXG4gICAqL1xuICB0aWNrKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHMuZGF0YVtpXTtcbiAgICAgIG1vZGVsLl91cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgdGhlIG1vZGVsIHZpZXdJRHNcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHMuZGF0YVtpXTtcbiAgICAgIG1vZGVsLl92aWV3SUQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWJ1ZyBjYW1lcmFcbiAgICogQHBhcmFtIHtDYW1lcmF9IGNhbSB0aGUgZGVidWcgY2FtZXJhXG4gICAqL1xuICBzZXREZWJ1Z0NhbWVyYShjYW0pIHtcbiAgICB0aGlzLl9kZWJ1Z0NhbWVyYSA9IGNhbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvdW50IG9mIHJlZ2lzdGVyZWQgY2FtZXJhc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBjYW1lcmEgY291bnRcbiAgICovXG4gIGdldENhbWVyYUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jYW1lcmFzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBjYW1lcmFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBjYW1lcmEgaW5kZXhcbiAgICogQHJldHVybnMge0NhbWVyYX0gdGhlIHNwZWNpZmllZCBjYW1lcmFcbiAgICovXG4gIGdldENhbWVyYShpZHgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FtZXJhcy5kYXRhW2lkeF07XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgYSBjYW1lcmFcbiAgICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSB0aGUgbmV3IGNhbWVyYVxuICAgKi9cbiAgYWRkQ2FtZXJhKGNhbWVyYSkge1xuICAgIHRoaXMuX2FkZCh0aGlzLl9jYW1lcmFzLCBjYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhIGNhbWVyYVxuICAgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIHRoZSBjYW1lcmEgdG8gYmUgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlQ2FtZXJhKGNhbWVyYSkge1xuICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9jYW1lcmFzLCBjYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY291bnQgb2YgcmVnaXN0ZXJlZCBtb2RlbFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBtb2RlbCBjb3VudFxuICAgKi9cbiAgZ2V0TW9kZWxDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBtb2RlbFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IG1vZGVsIGluZGV4XG4gICAqIEByZXR1cm5zIHtNb2RlbH0gdGhlIHNwZWNpZmllZCBtb2RlbFxuICAgKi9cbiAgZ2V0TW9kZWwoaWR4KSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVscy5kYXRhW2lkeF07XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgYSBtb2RlbFxuICAgKiBAcGFyYW0ge01vZGVsfSBtb2RlbCB0aGUgbmV3IG1vZGVsXG4gICAqL1xuICBhZGRNb2RlbChtb2RlbCkge1xuICAgIHRoaXMuX2FkZCh0aGlzLl9tb2RlbHMsIG1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYSBtb2RlbFxuICAgKiBAcGFyYW0ge01vZGVsfSBtb2RlbCB0aGUgbW9kZWwgdG8gYmUgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlTW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLl9yZW1vdmUodGhpcy5fbW9kZWxzLCBtb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIGxpZ2h0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGxpZ2h0IGNvdW50XG4gICAqL1xuICBnZXRMaWdodENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9saWdodHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3BlY2lmaWVkIGxpZ2h0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggbGlnaHQgaW5kZXhcbiAgICogQHJldHVybnMge0xpZ2h0fSB0aGUgc3BlY2lmaWVkIGxpZ2h0XG4gICAqL1xuICBnZXRMaWdodChpZHgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRzLmRhdGFbaWR4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciBhIGxpZ2h0XG4gICAqIEBwYXJhbSB7TGlnaHR9IGxpZ2h0IHRoZSBuZXcgbGlnaHRcbiAgICovXG4gIGFkZExpZ2h0KGxpZ2h0KSB7XG4gICAgdGhpcy5fYWRkKHRoaXMuX2xpZ2h0cywgbGlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhIGxpZ2h0XG4gICAqIEBwYXJhbSB7TGlnaHR9IGxpZ2h0IHRoZSBsaWdodCB0byBiZSByZW1vdmVkXG4gICAqL1xuICByZW1vdmVMaWdodChsaWdodCkge1xuICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9saWdodHMsIGxpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciBhIHZpZXdcbiAgICogQHBhcmFtIHtWaWV3fSB2aWV3IHRoZSBuZXcgdmlld1xuICAgKi9cbiAgYWRkVmlldyh2aWV3KSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdzLmluZGV4T2YodmlldykgPT09IC0xKSB7XG4gICAgICB0aGlzLl92aWV3cy5wdXNoKHZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYSB2aWV3XG4gICAqIEBwYXJhbSB7Vmlld30gdmlldyB0aGUgdmlldyB0byBiZSByZW1vdmVkXG4gICAqL1xuICByZW1vdmVWaWV3KHZpZXcpIHtcbiAgICBsZXQgaWR4ID0gdGhpcy5fdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fdmlld3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxudmFyIF9tZW1vcCA9IHJlcXVpcmUoJy4uL21lbW9wJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2NlbmVcbiAqL1xudmFyIFNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogU2V0dXAgYSBkZWZhdWx0IGVtcHR5IHNjZW5lXG4gICAqL1xuICBmdW5jdGlvbiBTY2VuZShhcHApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NlbmUpO1xuXG4gICAgdGhpcy5fbGlnaHRzID0gbmV3IF9tZW1vcC5GaXhlZEFycmF5KDE2KTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgX21lbW9wLkZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX2NhbWVyYXMgPSBuZXcgX21lbW9wLkZpeGVkQXJyYXkoMTYpO1xuICAgIHRoaXMuX2RlYnVnQ2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAvLyBOT1RFOiB3ZSBkb24ndCB1c2UgcG9vbCBmb3Igdmlld3MgKGJlY2F1c2UgaXQncyBsZXNzIGNoYW5nZWQgYW5kIGl0IGRvZXNuJ3QgaGF2ZSBwb29sSUQpXG4gICAgdGhpcy5fdmlld3MgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY2VuZSwgW3tcbiAgICBrZXk6ICdfYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZChwb29sLCBpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5fcG9vbElEICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBvb2wucHVzaChpdGVtKTtcbiAgICAgIGl0ZW0uX3Bvb2xJRCA9IHBvb2wubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZShwb29sLCBpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5fcG9vbElEID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBvb2wuZGF0YVtwb29sLmxlbmd0aCAtIDFdLl9wb29sSUQgPSBpdGVtLl9wb29sSUQ7XG4gICAgICBwb29sLmZhc3RSZW1vdmUoaXRlbS5fcG9vbElEKTtcbiAgICAgIGl0ZW0uX3Bvb2xJRCA9IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVwZGF0ZSBidWlsdC1pbiBib3VuZGluZyBzaGFwZXMgaWYgbmVlZGVkLFxuICAgICAqIHVzZWQgaW4gdGhlIGZydXN0dW0gY3VsbGluZyBwcm9jZXNzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fbW9kZWxzLmRhdGFbaV07XG4gICAgICAgIG1vZGVsLl91cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNldCB0aGUgbW9kZWwgdmlld0lEc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fbW9kZWxzLmRhdGFbaV07XG4gICAgICAgIG1vZGVsLl92aWV3SUQgPSAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlYnVnIGNhbWVyYVxuICAgICAqIEBwYXJhbSB7Q2FtZXJhfSBjYW0gdGhlIGRlYnVnIGNhbWVyYVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXREZWJ1Z0NhbWVyYScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlYnVnQ2FtZXJhKGNhbSkge1xuICAgICAgdGhpcy5fZGVidWdDYW1lcmEgPSBjYW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIGNhbWVyYXNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBjYW1lcmEgY291bnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2FtZXJhQ291bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYW1lcmFDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW1lcmFzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNwZWNpZmllZCBjYW1lcmFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IGNhbWVyYSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtDYW1lcmF9IHRoZSBzcGVjaWZpZWQgY2FtZXJhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENhbWVyYScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhbWVyYShpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW1lcmFzLmRhdGFbaWR4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlciBhIGNhbWVyYVxuICAgICAqIEBwYXJhbSB7Q2FtZXJhfSBjYW1lcmEgdGhlIG5ldyBjYW1lcmFcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkQ2FtZXJhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2FtZXJhKGNhbWVyYSkge1xuICAgICAgdGhpcy5fYWRkKHRoaXMuX2NhbWVyYXMsIGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGEgY2FtZXJhXG4gICAgICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSB0aGUgY2FtZXJhIHRvIGJlIHJlbW92ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQ2FtZXJhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FtZXJhKGNhbWVyYSkge1xuICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2NhbWVyYXMsIGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb3VudCBvZiByZWdpc3RlcmVkIG1vZGVsXG4gICAgICogQHJldHVybnMge251bWJlcn0gbW9kZWwgY291bnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW9kZWxDb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vZGVsQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kZWxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNwZWNpZmllZCBtb2RlbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggbW9kZWwgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TW9kZWx9IHRoZSBzcGVjaWZpZWQgbW9kZWxcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW9kZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNb2RlbChpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2RlbHMuZGF0YVtpZHhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlZ2lzdGVyIGEgbW9kZWxcbiAgICAgKiBAcGFyYW0ge01vZGVsfSBtb2RlbCB0aGUgbmV3IG1vZGVsXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZE1vZGVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTW9kZWwobW9kZWwpIHtcbiAgICAgIHRoaXMuX2FkZCh0aGlzLl9tb2RlbHMsIG1vZGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmUgYSBtb2RlbFxuICAgICAqIEBwYXJhbSB7TW9kZWx9IG1vZGVsIHRoZSBtb2RlbCB0byBiZSByZW1vdmVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZU1vZGVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTW9kZWwobW9kZWwpIHtcbiAgICAgIHRoaXMuX3JlbW92ZSh0aGlzLl9tb2RlbHMsIG1vZGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvdW50IG9mIHJlZ2lzdGVyZWQgbGlnaHRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBsaWdodCBjb3VudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMaWdodENvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGlnaHRDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saWdodHMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3BlY2lmaWVkIGxpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBsaWdodCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtMaWdodH0gdGhlIHNwZWNpZmllZCBsaWdodFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExpZ2h0KGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpZ2h0cy5kYXRhW2lkeF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVnaXN0ZXIgYSBsaWdodFxuICAgICAqIEBwYXJhbSB7TGlnaHR9IGxpZ2h0IHRoZSBuZXcgbGlnaHRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkTGlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaWdodChsaWdodCkge1xuICAgICAgdGhpcy5fYWRkKHRoaXMuX2xpZ2h0cywgbGlnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbW92ZSBhIGxpZ2h0XG4gICAgICogQHBhcmFtIHtMaWdodH0gbGlnaHQgdGhlIGxpZ2h0IHRvIGJlIHJlbW92ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTGlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMaWdodChsaWdodCkge1xuICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2xpZ2h0cywgbGlnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlZ2lzdGVyIGEgdmlld1xuICAgICAqIEBwYXJhbSB7Vmlld30gdmlldyB0aGUgbmV3IHZpZXdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkVmlldycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFZpZXcodmlldykge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdzLmluZGV4T2YodmlldykgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdzLnB1c2godmlldyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGEgdmlld1xuICAgICAqIEBwYXJhbSB7Vmlld30gdmlldyB0aGUgdmlldyB0byBiZSByZW1vdmVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVWaWV3KHZpZXcpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLl92aWV3cy5pbmRleE9mKHZpZXcpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fdmlld3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjZW5lO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OalpXNWxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsTmpaVzVsSWl3aVlYQndJaXdpWDJ4cFoyaDBjeUlzSWtacGVHVmtRWEp5WVhraUxDSmZiVzlrWld4eklpd2lYMk5oYldWeVlYTWlMQ0pmWkdWaWRXZERZVzFsY21FaUxDSmZZWEJ3SWl3aVgzWnBaWGR6SWl3aWNHOXZiQ0lzSW1sMFpXMGlMQ0pmY0c5dmJFbEVJaXdpY0hWemFDSXNJbXhsYm1kMGFDSXNJbVJoZEdFaUxDSm1ZWE4wVW1WdGIzWmxJaXdpYVNJc0ltMXZaR1ZzSWl3aVgzVndaR0YwWlZSeVlXNXpabTl5YlNJc0lsOTJhV1YzU1VRaUxDSmpZVzBpTENKcFpIZ2lMQ0pqWVcxbGNtRWlMQ0pmWVdSa0lpd2lYM0psYlc5MlpTSXNJbXhwWjJoMElpd2lkbWxsZHlJc0ltbHVaR1Y0VDJZaUxDSnpjR3hwWTJVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHhha0pCUVVFN08wRkJSVUU3T3pzN1FVRkZRVHM3TzBsQlIwMUJMRXM3UVVGRFNqczdPMEZCUjBFc2FVSkJRVmxETEVkQlFWb3NSVUZCYVVJN1FVRkJRVHM3UVVGRFppeFRRVUZMUXl4UFFVRk1MRWRCUVdVc1NVRkJTVU1zYVVKQlFVb3NRMEZCWlN4RlFVRm1MRU5CUVdZN1FVRkRRU3hUUVVGTFF5eFBRVUZNTEVkQlFXVXNTVUZCU1VRc2FVSkJRVW9zUTBGQlpTeEZRVUZtTEVOQlFXWTdRVUZEUVN4VFFVRkxSU3hSUVVGTUxFZEJRV2RDTEVsQlFVbEdMR2xDUVVGS0xFTkJRV1VzUlVGQlppeERRVUZvUWp0QlFVTkJMRk5CUVV0SExGbEJRVXdzUjBGQmIwSXNTVUZCY0VJN1FVRkRRU3hUUVVGTFF5eEpRVUZNTEVkQlFWbE9MRWRCUVZvN08wRkJSVUU3UVVGRFFTeFRRVUZMVHl4TlFVRk1MRWRCUVdNc1JVRkJaRHRCUVVORU96czdPM2xDUVVWSlF5eEpMRVZCUVUxRExFa3NSVUZCVFR0QlFVTm1MRlZCUVVsQkxFdEJRVXRETEU5QlFVd3NTMEZCYVVJc1EwRkJReXhEUVVGMFFpeEZRVUY1UWp0QlFVTjJRanRCUVVORU96dEJRVVZFUml4WFFVRkxSeXhKUVVGTUxFTkJRVlZHTEVsQlFWWTdRVUZEUVVFc1YwRkJTME1zVDBGQlRDeEhRVUZsUml4TFFVRkxTU3hOUVVGTUxFZEJRV01zUTBGQk4wSTdRVUZEUkRzN096UkNRVVZQU2l4SkxFVkJRVTFETEVrc1JVRkJUVHRCUVVOc1FpeFZRVUZKUVN4TFFVRkxReXhQUVVGTUxFdEJRV2xDTEVOQlFVTXNRMEZCZEVJc1JVRkJlVUk3UVVGRGRrSTdRVUZEUkRzN1FVRkZSRVlzVjBGQlMwc3NTVUZCVEN4RFFVRlZUQ3hMUVVGTFNTeE5RVUZNTEVkQlFWa3NRMEZCZEVJc1JVRkJlVUpHTEU5QlFYcENMRWRCUVcxRFJDeExRVUZMUXl4UFFVRjRRenRCUVVOQlJpeFhRVUZMVFN4VlFVRk1MRU5CUVdkQ1RDeExRVUZMUXl4UFFVRnlRanRCUVVOQlJDeFhRVUZMUXl4UFFVRk1MRWRCUVdVc1EwRkJReXhEUVVGb1FqdEJRVU5FT3p0QlFVVkVPenM3T3pzN096SkNRVWxQTzBGQlEwd3NWMEZCU3l4SlFVRkpTeXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVrc1MwRkJTMW9zVDBGQlRDeERRVUZoVXl4TlFVRnFReXhGUVVGNVF5eEZRVUZGUnl4RFFVRXpReXhGUVVFNFF6dEJRVU0xUXl4WlFVRkpReXhSUVVGUkxFdEJRVXRpTEU5QlFVd3NRMEZCWVZVc1NVRkJZaXhEUVVGclFrVXNRMEZCYkVJc1EwRkJXanRCUVVOQlF5eGpRVUZOUXl4blFrRkJUanRCUVVORU8wRkJRMFk3TzBGQlJVUTdPenM3T3pzMFFrRkhVVHRCUVVOT0xGZEJRVXNzU1VGQlNVWXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKTEV0QlFVdGFMRTlCUVV3c1EwRkJZVk1zVFVGQmFrTXNSVUZCZVVNc1JVRkJSVWNzUTBGQk0wTXNSVUZCT0VNN1FVRkROVU1zV1VGQlNVTXNVVUZCVVN4TFFVRkxZaXhQUVVGTUxFTkJRV0ZWTEVsQlFXSXNRMEZCYTBKRkxFTkJRV3hDTEVOQlFWbzdRVUZEUVVNc1kwRkJUVVVzVDBGQlRpeEhRVUZuUWl4RFFVRkRMRU5CUVdwQ08wRkJRMFE3UVVGRFJqczdRVUZGUkRzN096czdPenR0UTBGSlpVTXNSeXhGUVVGTE8wRkJRMnhDTEZkQlFVdGtMRmxCUVV3c1IwRkJiMEpqTEVkQlFYQkNPMEZCUTBRN08wRkJSVVE3T3pzN096czdjVU5CU1dsQ08wRkJRMllzWVVGQlR5eExRVUZMWml4UlFVRk1MRU5CUVdOUkxFMUJRWEpDTzBGQlEwUTdPMEZCUlVRN096czdPenM3T3poQ1FVdFZVU3hITEVWQlFVczdRVUZEWWl4aFFVRlBMRXRCUVV0b1FpeFJRVUZNTEVOQlFXTlRMRWxCUVdRc1EwRkJiVUpQTEVkQlFXNUNMRU5CUVZBN1FVRkRSRHM3UVVGRlJEczdPenM3T3pzNFFrRkpWVU1zVFN4RlFVRlJPMEZCUTJoQ0xGZEJRVXRETEVsQlFVd3NRMEZCVlN4TFFVRkxiRUlzVVVGQlppeEZRVUY1UW1sQ0xFMUJRWHBDTzBGQlEwUTdPMEZCUlVRN096czdPenM3YVVOQlNXRkJMRTBzUlVGQlVUdEJRVU51UWl4WFFVRkxSU3hQUVVGTUxFTkJRV0VzUzBGQlMyNUNMRkZCUVd4Q0xFVkJRVFJDYVVJc1RVRkJOVUk3UVVGRFJEczdRVUZGUkRzN096czdPenR2UTBGSlowSTdRVUZEWkN4aFFVRlBMRXRCUVV0c1FpeFBRVUZNTEVOQlFXRlRMRTFCUVhCQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096WkNRVXRUVVN4SExFVkJRVXM3UVVGRFdpeGhRVUZQTEV0QlFVdHFRaXhQUVVGTUxFTkJRV0ZWTEVsQlFXSXNRMEZCYTBKUExFZEJRV3hDTEVOQlFWQTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czJRa0ZKVTBvc1N5eEZRVUZQTzBGQlEyUXNWMEZCUzAwc1NVRkJUQ3hEUVVGVkxFdEJRVXR1UWl4UFFVRm1MRVZCUVhkQ1lTeExRVUY0UWp0QlFVTkVPenRCUVVWRU96czdPenM3TzJkRFFVbFpRU3hMTEVWQlFVODdRVUZEYWtJc1YwRkJTMDhzVDBGQlRDeERRVUZoTEV0QlFVdHdRaXhQUVVGc1FpeEZRVUV5UW1Fc1MwRkJNMEk3UVVGRFJEczdRVUZGUkRzN096czdPenR2UTBGSlowSTdRVUZEWkN4aFFVRlBMRXRCUVV0bUxFOUJRVXdzUTBGQllWY3NUVUZCY0VJN1FVRkRSRHM3UVVGRlJEczdPenM3T3pzN05rSkJTMU5STEVjc1JVRkJTenRCUVVOYUxHRkJRVThzUzBGQlMyNUNMRTlCUVV3c1EwRkJZVmtzU1VGQllpeERRVUZyUWs4c1IwRkJiRUlzUTBGQlVEdEJRVU5FT3p0QlFVVkVPenM3T3pzN096WkNRVWxUU1N4TExFVkJRVTg3UVVGRFpDeFhRVUZMUml4SlFVRk1MRU5CUVZVc1MwRkJTM0pDTEU5QlFXWXNSVUZCZDBKMVFpeExRVUY0UWp0QlFVTkVPenRCUVVWRU96czdPenM3TzJkRFFVbFpRU3hMTEVWQlFVODdRVUZEYWtJc1YwRkJTMFFzVDBGQlRDeERRVUZoTEV0QlFVdDBRaXhQUVVGc1FpeEZRVUV5UW5WQ0xFdEJRVE5DTzBGQlEwUTdPMEZCUlVRN096czdPenM3TkVKQlNWRkRMRWtzUlVGQlRUdEJRVU5hTEZWQlFVa3NTMEZCUzJ4Q0xFMUJRVXdzUTBGQldXMUNMRTlCUVZvc1EwRkJiMEpFTEVsQlFYQkNMRTFCUVRoQ0xFTkJRVU1zUTBGQmJrTXNSVUZCYzBNN1FVRkRjRU1zWVVGQlMyeENMRTFCUVV3c1EwRkJXVWtzU1VGQldpeERRVUZwUW1Nc1NVRkJha0k3UVVGRFJEdEJRVU5HT3p0QlFVVkVPenM3T3pzN095dENRVWxYUVN4SkxFVkJRVTA3UVVGRFppeFZRVUZKVEN4TlFVRk5MRXRCUVV0aUxFMUJRVXdzUTBGQldXMUNMRTlCUVZvc1EwRkJiMEpFTEVsQlFYQkNMRU5CUVZZN1FVRkRRU3hWUVVGSlRDeFJRVUZSTEVOQlFVTXNRMEZCWWl4RlFVRm5RanRCUVVOa0xHRkJRVXRpTEUxQlFVd3NRMEZCV1c5Q0xFMUJRVm9zUTBGQmJVSlFMRWRCUVc1Q0xFVkJRWGRDTEVOQlFYaENPMEZCUTBRN1FVRkRSanM3T3pzN08ydENRVWRaY2tJc1N5SXNJbVpwYkdVaU9pSnpZMlZ1WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNXBiWEJ2Y25RZ2V5QkdhWGhsWkVGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YldWdGIzQW5PMXh1WEc0dktpcGNiaUFxSUVFZ2NtVndjbVZ6Wlc1MFlYUnBiMjRnYjJZZ2RHaGxJSE5qWlc1bFhHNGdLaTljYm1Oc1lYTnpJRk5qWlc1bElIdGNiaUFnTHlvcVhHNGdJQ0FxSUZObGRIVndJR0VnWkdWbVlYVnNkQ0JsYlhCMGVTQnpZMlZ1WlZ4dUlDQWdLaTljYmlBZ1kyOXVjM1J5ZFdOMGIzSW9ZWEJ3S1NCN1hHNGdJQ0FnZEdocGN5NWZiR2xuYUhSeklEMGdibVYzSUVacGVHVmtRWEp5WVhrb01UWXBPMXh1SUNBZ0lIUm9hWE11WDIxdlpHVnNjeUE5SUc1bGR5QkdhWGhsWkVGeWNtRjVLREUyS1R0Y2JpQWdJQ0IwYUdsekxsOWpZVzFsY21GeklEMGdibVYzSUVacGVHVmtRWEp5WVhrb01UWXBPMXh1SUNBZ0lIUm9hWE11WDJSbFluVm5RMkZ0WlhKaElEMGdiblZzYkR0Y2JpQWdJQ0IwYUdsekxsOWhjSEFnUFNCaGNIQTdYRzVjYmlBZ0lDQXZMeUJPVDFSRk9pQjNaU0JrYjI0bmRDQjFjMlVnY0c5dmJDQm1iM0lnZG1sbGQzTWdLR0psWTJGMWMyVWdhWFFuY3lCc1pYTnpJR05vWVc1blpXUWdZVzVrSUdsMElHUnZaWE51SjNRZ2FHRjJaU0J3YjI5c1NVUXBYRzRnSUNBZ2RHaHBjeTVmZG1sbGQzTWdQU0JiWFR0Y2JpQWdmVnh1WEc0Z0lGOWhaR1FvY0c5dmJDd2dhWFJsYlNrZ2UxeHVJQ0FnSUdsbUlDaHBkR1Z0TGw5d2IyOXNTVVFnSVQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NHOXZiQzV3ZFhOb0tHbDBaVzBwTzF4dUlDQWdJR2wwWlcwdVgzQnZiMnhKUkNBOUlIQnZiMnd1YkdWdVozUm9JQzBnTVR0Y2JpQWdmVnh1WEc0Z0lGOXlaVzF2ZG1Vb2NHOXZiQ3dnYVhSbGJTa2dlMXh1SUNBZ0lHbG1JQ2hwZEdWdExsOXdiMjlzU1VRZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjRzl2YkM1a1lYUmhXM0J2YjJ3dWJHVnVaM1JvTFRGZExsOXdiMjlzU1VRZ1BTQnBkR1Z0TGw5d2IyOXNTVVE3WEc0Z0lDQWdjRzl2YkM1bVlYTjBVbVZ0YjNabEtHbDBaVzB1WDNCdmIyeEpSQ2s3WEc0Z0lDQWdhWFJsYlM1ZmNHOXZiRWxFSUQwZ0xURTdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nZFhCa1lYUmxJR0oxYVd4MExXbHVJR0p2ZFc1a2FXNW5JSE5vWVhCbGN5QnBaaUJ1WldWa1pXUXNYRzRnSUNBcUlIVnpaV1FnYVc0Z2RHaGxJR1p5ZFhOMGRXMGdZM1ZzYkdsdVp5QndjbTlqWlhOelhHNGdJQ0FxTDF4dUlDQjBhV05yS0NrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVmYlc5a1pXeHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNCc1pYUWdiVzlrWld3Z1BTQjBhR2x6TGw5dGIyUmxiSE11WkdGMFlWdHBYVHRjYmlBZ0lDQWdJRzF2WkdWc0xsOTFjR1JoZEdWVWNtRnVjMlp2Y20wb0tUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2djbVZ6WlhRZ2RHaGxJRzF2WkdWc0lIWnBaWGRKUkhOY2JpQWdJQ292WEc0Z0lISmxjMlYwS0NrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVmYlc5a1pXeHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNCc1pYUWdiVzlrWld3Z1BTQjBhR2x6TGw5dGIyUmxiSE11WkdGMFlWdHBYVHRjYmlBZ0lDQWdJRzF2WkdWc0xsOTJhV1YzU1VRZ1BTQXRNVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVTJWMElIUm9aU0JrWldKMVp5QmpZVzFsY21GY2JpQWdJQ29nUUhCaGNtRnRJSHREWVcxbGNtRjlJR05oYlNCMGFHVWdaR1ZpZFdjZ1kyRnRaWEpoWEc0Z0lDQXFMMXh1SUNCelpYUkVaV0oxWjBOaGJXVnlZU2hqWVcwcElIdGNiaUFnSUNCMGFHbHpMbDlrWldKMVowTmhiV1Z5WVNBOUlHTmhiVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdkR2hsSUdOdmRXNTBJRzltSUhKbFoybHpkR1Z5WldRZ1kyRnRaWEpoYzF4dUlDQWdLaUJBY21WMGRYSnVjeUI3Ym5WdFltVnlmU0JqWVcxbGNtRWdZMjkxYm5SY2JpQWdJQ292WEc0Z0lHZGxkRU5oYldWeVlVTnZkVzUwS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWpZVzFsY21GekxteGxibWQwYUR0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkhaWFFnZEdobElITndaV05wWm1sbFpDQmpZVzFsY21GY2JpQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2xrZUNCallXMWxjbUVnYVc1a1pYaGNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2UwTmhiV1Z5WVgwZ2RHaGxJSE53WldOcFptbGxaQ0JqWVcxbGNtRmNiaUFnSUNvdlhHNGdJR2RsZEVOaGJXVnlZU2hwWkhncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZZMkZ0WlhKaGN5NWtZWFJoVzJsa2VGMDdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nY21WbmFYTjBaWElnWVNCallXMWxjbUZjYmlBZ0lDb2dRSEJoY21GdElIdERZVzFsY21GOUlHTmhiV1Z5WVNCMGFHVWdibVYzSUdOaGJXVnlZVnh1SUNBZ0tpOWNiaUFnWVdSa1EyRnRaWEpoS0dOaGJXVnlZU2tnZTF4dUlDQWdJSFJvYVhNdVgyRmtaQ2gwYUdsekxsOWpZVzFsY21GekxDQmpZVzFsY21FcE8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJSEpsYlc5MlpTQmhJR05oYldWeVlWeHVJQ0FnS2lCQWNHRnlZVzBnZTBOaGJXVnlZWDBnWTJGdFpYSmhJSFJvWlNCallXMWxjbUVnZEc4Z1ltVWdjbVZ0YjNabFpGeHVJQ0FnS2k5Y2JpQWdjbVZ0YjNabFEyRnRaWEpoS0dOaGJXVnlZU2tnZTF4dUlDQWdJSFJvYVhNdVgzSmxiVzkyWlNoMGFHbHpMbDlqWVcxbGNtRnpMQ0JqWVcxbGNtRXBPMXh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVkbGRDQjBhR1VnWTI5MWJuUWdiMllnY21WbmFYTjBaWEpsWkNCdGIyUmxiRnh1SUNBZ0tpQkFjbVYwZFhKdWN5QjdiblZ0WW1WeWZTQnRiMlJsYkNCamIzVnVkRnh1SUNBZ0tpOWNiaUFnWjJWMFRXOWtaV3hEYjNWdWRDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYlc5a1pXeHpMbXhsYm1kMGFEdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJIWlhRZ2RHaGxJSE53WldOcFptbGxaQ0J0YjJSbGJGeHVJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVdSNElHMXZaR1ZzSUdsdVpHVjRYRzRnSUNBcUlFQnlaWFIxY201eklIdE5iMlJsYkgwZ2RHaGxJSE53WldOcFptbGxaQ0J0YjJSbGJGeHVJQ0FnS2k5Y2JpQWdaMlYwVFc5a1pXd29hV1I0S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyMXZaR1ZzY3k1a1lYUmhXMmxrZUYwN1hHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2djbVZuYVhOMFpYSWdZU0J0YjJSbGJGeHVJQ0FnS2lCQWNHRnlZVzBnZTAxdlpHVnNmU0J0YjJSbGJDQjBhR1VnYm1WM0lHMXZaR1ZzWEc0Z0lDQXFMMXh1SUNCaFpHUk5iMlJsYkNodGIyUmxiQ2tnZTF4dUlDQWdJSFJvYVhNdVgyRmtaQ2gwYUdsekxsOXRiMlJsYkhNc0lHMXZaR1ZzS1R0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQnlaVzF2ZG1VZ1lTQnRiMlJsYkZ4dUlDQWdLaUJBY0dGeVlXMGdlMDF2WkdWc2ZTQnRiMlJsYkNCMGFHVWdiVzlrWld3Z2RHOGdZbVVnY21WdGIzWmxaRnh1SUNBZ0tpOWNiaUFnY21WdGIzWmxUVzlrWld3b2JXOWtaV3dwSUh0Y2JpQWdJQ0IwYUdsekxsOXlaVzF2ZG1Vb2RHaHBjeTVmYlc5a1pXeHpMQ0J0YjJSbGJDazdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nUjJWMElIUm9aU0JqYjNWdWRDQnZaaUJ5WldkcGMzUmxjbVZrSUd4cFoyaDBYRzRnSUNBcUlFQnlaWFIxY201eklIdHVkVzFpWlhKOUlHeHBaMmgwSUdOdmRXNTBYRzRnSUNBcUwxeHVJQ0JuWlhSTWFXZG9kRU52ZFc1MEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlzYVdkb2RITXViR1Z1WjNSb08xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRWRsZENCMGFHVWdjM0JsWTJsbWFXVmtJR3hwWjJoMFhHNGdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwWkhnZ2JHbG5hSFFnYVc1a1pYaGNiaUFnSUNvZ1FISmxkSFZ5Ym5NZ2UweHBaMmgwZlNCMGFHVWdjM0JsWTJsbWFXVmtJR3hwWjJoMFhHNGdJQ0FxTDF4dUlDQm5aWFJNYVdkb2RDaHBaSGdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJHbG5hSFJ6TG1SaGRHRmJhV1I0WFR0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQnlaV2RwYzNSbGNpQmhJR3hwWjJoMFhHNGdJQ0FxSUVCd1lYSmhiU0I3VEdsbmFIUjlJR3hwWjJoMElIUm9aU0J1WlhjZ2JHbG5hSFJjYmlBZ0lDb3ZYRzRnSUdGa1pFeHBaMmgwS0d4cFoyaDBLU0I3WEc0Z0lDQWdkR2hwY3k1ZllXUmtLSFJvYVhNdVgyeHBaMmgwY3l3Z2JHbG5hSFFwTzF4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlISmxiVzkyWlNCaElHeHBaMmgwWEc0Z0lDQXFJRUJ3WVhKaGJTQjdUR2xuYUhSOUlHeHBaMmgwSUhSb1pTQnNhV2RvZENCMGJ5QmlaU0J5WlcxdmRtVmtYRzRnSUNBcUwxeHVJQ0J5WlcxdmRtVk1hV2RvZENoc2FXZG9kQ2tnZTF4dUlDQWdJSFJvYVhNdVgzSmxiVzkyWlNoMGFHbHpMbDlzYVdkb2RITXNJR3hwWjJoMEtUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJ5WldkcGMzUmxjaUJoSUhacFpYZGNiaUFnSUNvZ1FIQmhjbUZ0SUh0V2FXVjNmU0IyYVdWM0lIUm9aU0J1WlhjZ2RtbGxkMXh1SUNBZ0tpOWNiaUFnWVdSa1ZtbGxkeWgyYVdWM0tTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdVgzWnBaWGR6TG1sdVpHVjRUMllvZG1sbGR5a2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5MmFXVjNjeTV3ZFhOb0tIWnBaWGNwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCeVpXMXZkbVVnWVNCMmFXVjNYRzRnSUNBcUlFQndZWEpoYlNCN1ZtbGxkMzBnZG1sbGR5QjBhR1VnZG1sbGR5QjBieUJpWlNCeVpXMXZkbVZrWEc0Z0lDQXFMMXh1SUNCeVpXMXZkbVZXYVdWM0tIWnBaWGNwSUh0Y2JpQWdJQ0JzWlhRZ2FXUjRJRDBnZEdocGN5NWZkbWxsZDNNdWFXNWtaWGhQWmloMmFXVjNLVHRjYmlBZ0lDQnBaaUFvYVdSNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmZG1sbGQzTXVjM0JzYVdObEtHbGtlQ3dnTVNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOalpXNWxPMXh1SWwxOSJdfQ==