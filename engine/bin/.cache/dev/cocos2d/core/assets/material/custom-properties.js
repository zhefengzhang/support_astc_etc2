(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/material/custom-properties.js';
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
        var _types = require('../../../renderer/types');
        var _murmurhash2_gc = require('./murmurhash2_gc');
        var _murmurhash2_gc2 = _interopRequireDefault(_murmurhash2_gc);
        var _utils = require('./utils');
        var _utils2 = _interopRequireDefault(_utils);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var CustomProperties = function () {
            function CustomProperties() {
                _classCallCheck(this, CustomProperties);
                this._properties = {};
                this._defines = {};
                this._dirty = false;
            }
            _createClass(CustomProperties, [
                {
                    key: 'setProperty',
                    value: function setProperty(name, value) {
                        var uniform = this._properties[name];
                        if (!uniform) {
                            uniform = Object.create(null);
                            uniform.name = name;
                            uniform.type = _types.ctor2enums[value.constructor];
                            this._properties[name] = uniform;
                        } else if (uniform.value === value)
                            return;
                        this._dirty = true;
                        uniform.value = value;
                    }
                },
                {
                    key: 'getProperty',
                    value: function getProperty(name) {
                        var prop = this._properties[name];
                        if (prop)
                            return prop.value;
                        return null;
                    }
                },
                {
                    key: 'define',
                    value: function define(name, value) {
                        if (this._defines[name] === value)
                            return;
                        this._dirty = true;
                        this._defines[name] = value;
                    }
                },
                {
                    key: 'getDefine',
                    value: function getDefine(name) {
                        return this._defines[name];
                    }
                },
                {
                    key: 'extractProperties',
                    value: function extractProperties() {
                        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        Object.assign(out, this._properties);
                        return out;
                    }
                },
                {
                    key: 'extractDefines',
                    value: function extractDefines() {
                        var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        Object.assign(out, this._defines);
                        return out;
                    }
                },
                {
                    key: 'getHash',
                    value: function getHash() {
                        if (!this._dirty)
                            return this._hash;
                        this._dirty = false;
                        var hash = '';
                        hash += _utils2.default.serializeDefines(this._defines);
                        hash += _utils2.default.serializeUniforms(this._properties);
                        return this._hash = (0, _murmurhash2_gc2.default)(hash, 666);
                    }
                }
            ]);
            return CustomProperties;
        }();
        exports.default = CustomProperties;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1wcm9wZXJ0aWVzLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9hc3NldHMvbWF0ZXJpYWwvY3VzdG9tLXByb3BlcnRpZXMuanMiXSwibmFtZXMiOlsiQ3VzdG9tUHJvcGVydGllcyIsIl9wcm9wZXJ0aWVzIiwiX2RlZmluZXMiLCJfZGlydHkiLCJuYW1lIiwidmFsdWUiLCJ1bmlmb3JtIiwiT2JqZWN0IiwiY3JlYXRlIiwidHlwZSIsImN0b3IyZW51bXMiLCJjb25zdHJ1Y3RvciIsInByb3AiLCJvdXQiLCJhc3NpZ24iLCJfaGFzaCIsImhhc2giLCJ1dGlscyIsInNlcmlhbGl6ZURlZmluZXMiLCJzZXJpYWxpemVVbmlmb3JtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNBLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFEQSxJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEseUJBQUEsQ0FBQTtRQUNBLElBQUEsZUFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOztRQUNBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7Ozs7Ozs7Ozs7WUFFcUJBLGdCQUFBQTtZQUNqQixTQUFBLGdCQUFBLEdBQWU7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGdCQUFBLEVBQUE7QUFBQSxnQkFDWCxLQUFLQyxXQUFMLEdBQW1CLEVBQW5CLENBRFc7QUFBQSxnQkFFWCxLQUFLQyxRQUFMLEdBQWdCLEVBQWhCLENBRlc7QUFBQSxnQkFHWCxLQUFLQyxNQUFMLEdBQWMsS0FBZCxDQUhXO0FBQUE7Ozs7Z0RBTUZDLE1BQU1DLE9BQU87QUFBQSx3QkFDdEIsSUFBSUMsT0FBQUEsR0FBVSxLQUFLTCxXQUFMLENBQWlC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ZSI6ImN1c3RvbS1wcm9wZXJ0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3RvcjJlbnVtcyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyL3R5cGVzJztcbmltcG9ydCBtdXJtdXJoYXNoMiBmcm9tICcuL211cm11cmhhc2gyX2djJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUHJvcGVydGllcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHRoaXMuX2RlZmluZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0eSAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHVuaWZvcm0gPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICBpZiAoIXVuaWZvcm0pIHtcbiAgICAgICAgICAgIHVuaWZvcm0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdW5pZm9ybS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHVuaWZvcm0udHlwZSA9IGN0b3IyZW51bXNbdmFsdWUuY29uc3RydWN0b3JdO1xuICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllc1tuYW1lXSA9IHVuaWZvcm07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5pZm9ybS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdW5pZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldFByb3BlcnR5KG5hbWUpIHtcbiAgICAgICAgbGV0IHByb3AgPSB0aGlzLl9wcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICBpZiAocHJvcCkgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGRlZmluZSAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZmluZXNbbmFtZV0gPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZGVmaW5lc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldERlZmluZSAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5lc1tuYW1lXTtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJvcGVydGllcyhvdXQgPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKG91dCwgdGhpcy5fcHJvcGVydGllcyk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZXh0cmFjdERlZmluZXMob3V0ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvdXQsIHRoaXMuX2RlZmluZXMpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGdldEhhc2ggKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KSByZXR1cm4gdGhpcy5faGFzaDtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBoYXNoID0gJyc7XG4gICAgICAgIGhhc2ggKz0gdXRpbHMuc2VyaWFsaXplRGVmaW5lcyh0aGlzLl9kZWZpbmVzKTtcbiAgICAgICAgaGFzaCArPSB1dGlscy5zZXJpYWxpemVVbmlmb3Jtcyh0aGlzLl9wcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faGFzaCA9IG11cm11cmhhc2gyKGhhc2gsIDY2Nik7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9yZW5kZXJlci90eXBlcycpO1xuXG52YXIgX211cm11cmhhc2gyX2djID0gcmVxdWlyZSgnLi9tdXJtdXJoYXNoMl9nYycpO1xuXG52YXIgX211cm11cmhhc2gyX2djMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX211cm11cmhhc2gyX2djKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBDdXN0b21Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1c3RvbVByb3BlcnRpZXMoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDdXN0b21Qcm9wZXJ0aWVzKTtcblxuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHRoaXMuX2RlZmluZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ3VzdG9tUHJvcGVydGllcywgW3tcbiAgICAgICAga2V5OiAnc2V0UHJvcGVydHknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB1bmlmb3JtID0gdGhpcy5fcHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgICAgIGlmICghdW5pZm9ybSkge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS50eXBlID0gX3R5cGVzLmN0b3IyZW51bXNbdmFsdWUuY29uc3RydWN0b3JdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXNbbmFtZV0gPSB1bmlmb3JtO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bmlmb3JtLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB1bmlmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFByb3BlcnR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5KG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5fcHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChwcm9wKSByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWZpbmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmaW5lKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGVmaW5lc1tuYW1lXSA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2RlZmluZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVmaW5lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlZmluZShuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5lc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXh0cmFjdFByb3BlcnRpZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXMoKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXQsIHRoaXMuX3Byb3BlcnRpZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZXh0cmFjdERlZmluZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdERlZmluZXMoKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXQsIHRoaXMuX2RlZmluZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SGFzaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIYXNoKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSkgcmV0dXJuIHRoaXMuX2hhc2g7XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgaGFzaCA9ICcnO1xuICAgICAgICAgICAgaGFzaCArPSBfdXRpbHMyLmRlZmF1bHQuc2VyaWFsaXplRGVmaW5lcyh0aGlzLl9kZWZpbmVzKTtcbiAgICAgICAgICAgIGhhc2ggKz0gX3V0aWxzMi5kZWZhdWx0LnNlcmlhbGl6ZVVuaWZvcm1zKHRoaXMuX3Byb3BlcnRpZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaCA9ICgwLCBfbXVybXVyaGFzaDJfZ2MyLmRlZmF1bHQpKGhhc2gsIDY2Nik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ3VzdG9tUHJvcGVydGllcztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ3VzdG9tUHJvcGVydGllcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OMWMzUnZiUzF3Y205d1pYSjBhV1Z6TG1weklsMHNJbTVoYldWeklqcGJJa04xYzNSdmJWQnliM0JsY25ScFpYTWlMQ0pmY0hKdmNHVnlkR2xsY3lJc0lsOWtaV1pwYm1Weklpd2lYMlJwY25SNUlpd2libUZ0WlNJc0luWmhiSFZsSWl3aWRXNXBabTl5YlNJc0lrOWlhbVZqZENJc0ltTnlaV0YwWlNJc0luUjVjR1VpTENKamRHOXlNbVZ1ZFcxeklpd2lZMjl1YzNSeWRXTjBiM0lpTENKd2NtOXdJaXdpYjNWMElpd2lZWE56YVdkdUlpd2lYMmhoYzJnaUxDSm9ZWE5vSWl3aWRYUnBiSE1pTENKelpYSnBZV3hwZW1WRVpXWnBibVZ6SWl3aWMyVnlhV0ZzYVhwbFZXNXBabTl5YlhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPMGxCUlhGQ1FTeG5RanRCUVVOcVFpeG5RMEZCWlR0QlFVRkJPenRCUVVOWUxHRkJRVXRETEZkQlFVd3NSMEZCYlVJc1JVRkJia0k3UVVGRFFTeGhRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFVkJRV2hDTzBGQlEwRXNZVUZCUzBNc1RVRkJUQ3hIUVVGakxFdEJRV1E3UVVGRFNEczdPenR2UTBGRldVTXNTU3hGUVVGTlF5eExMRVZCUVU4N1FVRkRkRUlzWjBKQlFVbERMRlZCUVZVc1MwRkJTMHdzVjBGQlRDeERRVUZwUWtjc1NVRkJha0lzUTBGQlpEdEJRVU5CTEdkQ1FVRkpMRU5CUVVORkxFOUJRVXdzUlVGQll6dEJRVU5XUVN3d1FrRkJWVU1zVDBGQlQwTXNUVUZCVUN4RFFVRmpMRWxCUVdRc1EwRkJWanRCUVVOQlJpeDNRa0ZCVVVZc1NVRkJVaXhIUVVGbFFTeEpRVUZtTzBGQlEwRkZMSGRDUVVGUlJ5eEpRVUZTTEVkQlFXVkRMR3RDUVVGWFRDeE5RVUZOVFN4WFFVRnFRaXhEUVVGbU8wRkJRMEVzY1VKQlFVdFdMRmRCUVV3c1EwRkJhVUpITEVsQlFXcENMRWxCUVhsQ1JTeFBRVUY2UWp0QlFVTklMR0ZCVEVRc1RVRk5TeXhKUVVGSlFTeFJRVUZSUkN4TFFVRlNMRXRCUVd0Q1FTeExRVUYwUWl4RlFVRTJRanM3UVVGRmJFTXNhVUpCUVV0R0xFMUJRVXdzUjBGQll5eEpRVUZrTzBGQlEwRkhMRzlDUVVGUlJDeExRVUZTTEVkQlFXZENRU3hMUVVGb1FqdEJRVU5JT3pzN2IwTkJSVmRFTEVrc1JVRkJUVHRCUVVOa0xHZENRVUZKVVN4UFFVRlBMRXRCUVV0WUxGZEJRVXdzUTBGQmFVSkhMRWxCUVdwQ0xFTkJRVmc3UVVGRFFTeG5Ra0ZCU1ZFc1NVRkJTaXhGUVVGVkxFOUJRVTlCTEV0QlFVdFFMRXRCUVZvN1FVRkRWaXh0UWtGQlR5eEpRVUZRTzBGQlEwZzdPenNyUWtGRlQwUXNTU3hGUVVGTlF5eExMRVZCUVU4N1FVRkRha0lzWjBKQlFVa3NTMEZCUzBnc1VVRkJUQ3hEUVVGalJTeEpRVUZrTEUxQlFYZENReXhMUVVFMVFpeEZRVUZ0UXp0QlFVTnVReXhwUWtGQlMwWXNUVUZCVEN4SFFVRmpMRWxCUVdRN1FVRkRRU3hwUWtGQlMwUXNVVUZCVEN4RFFVRmpSU3hKUVVGa0xFbEJRWE5DUXl4TFFVRjBRanRCUVVOSU96czdhME5CUlZWRUxFa3NSVUZCVFR0QlFVTmlMRzFDUVVGUExFdEJRVXRHTEZGQlFVd3NRMEZCWTBVc1NVRkJaQ3hEUVVGUU8wRkJRMGc3T3pzMFEwRkZNa0k3UVVGQlFTeG5Ra0ZCVmxNc1IwRkJWU3gxUlVGQlNpeEZRVUZKT3p0QlFVTjRRazRzYlVKQlFVOVBMRTFCUVZBc1EwRkJZMFFzUjBGQlpDeEZRVUZ0UWl4TFFVRkxXaXhYUVVGNFFqdEJRVU5CTEcxQ1FVRlBXU3hIUVVGUU8wRkJRMGc3T3p0NVEwRkZkMEk3UVVGQlFTeG5Ra0ZCVmtFc1IwRkJWU3gxUlVGQlNpeEZRVUZKT3p0QlFVTnlRazRzYlVKQlFVOVBMRTFCUVZBc1EwRkJZMFFzUjBGQlpDeEZRVUZ0UWl4TFFVRkxXQ3hSUVVGNFFqdEJRVU5CTEcxQ1FVRlBWeXhIUVVGUU8wRkJRMGc3T3p0clEwRkZWVHRCUVVOUUxHZENRVUZKTEVOQlFVTXNTMEZCUzFZc1RVRkJWaXhGUVVGclFpeFBRVUZQTEV0QlFVdFpMRXRCUVZvN1FVRkRiRUlzYVVKQlFVdGFMRTFCUVV3c1IwRkJZeXhMUVVGa096dEJRVVZCTEdkQ1FVRkpZU3hQUVVGUExFVkJRVmc3UVVGRFFVRXNiMEpCUVZGRExHZENRVUZOUXl4blFrRkJUaXhEUVVGMVFpeExRVUZMYUVJc1VVRkJOVUlzUTBGQlVqdEJRVU5CWXl4dlFrRkJVVU1zWjBKQlFVMUZMR2xDUVVGT0xFTkJRWGRDTEV0QlFVdHNRaXhYUVVFM1FpeERRVUZTT3p0QlFVVkJMRzFDUVVGUExFdEJRVXRqTEV0QlFVd3NSMEZCWVN3NFFrRkJXVU1zU1VGQldpeEZRVUZyUWl4SFFVRnNRaXhEUVVGd1FqdEJRVU5JT3pzN096czdhMEpCZUVSblFtaENMR2RDSWl3aVptbHNaU0k2SW1OMWMzUnZiUzF3Y205d1pYSjBhV1Z6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZM1J2Y2pKbGJuVnRjeUI5SUdaeWIyMGdKeTR1THk0dUx5NHVMM0psYm1SbGNtVnlMM1I1Y0dWekp6dGNibWx0Y0c5eWRDQnRkWEp0ZFhKb1lYTm9NaUJtY205dElDY3VMMjExY20xMWNtaGhjMmd5WDJkakp6dGNibWx0Y0c5eWRDQjFkR2xzY3lCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRM1Z6ZEc5dFVISnZjR1Z5ZEdsbGN5QjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSWdLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl3Y205d1pYSjBhV1Z6SUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUmxabWx1WlhNZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaR2x5ZEhrZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhSUWNtOXdaWEowZVNBb2JtRnRaU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElIVnVhV1p2Y20wZ1BTQjBhR2x6TGw5d2NtOXdaWEowYVdWelcyNWhiV1ZkTzF4dUlDQWdJQ0FnSUNCcFppQW9JWFZ1YVdadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhV1p2Y20wZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNXBabTl5YlM1dVlXMWxJRDBnYm1GdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWFXWnZjbTB1ZEhsd1pTQTlJR04wYjNJeVpXNTFiWE5iZG1Gc2RXVXVZMjl1YzNSeWRXTjBiM0pkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmNISnZjR1Z5ZEdsbGMxdHVZVzFsWFNBOUlIVnVhV1p2Y20wN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9kVzVwWm05eWJTNTJZV3gxWlNBOVBUMGdkbUZzZFdVcElISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJScGNuUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkVzVwWm05eWJTNTJZV3gxWlNBOUlIWmhiSFZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZEZCeWIzQmxjblI1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElIQnliM0FnUFNCMGFHbHpMbDl3Y205d1pYSjBhV1Z6VzI1aGJXVmRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjQ2tnY21WMGRYSnVJSEJ5YjNBdWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUgxY2JseHVJQ0FnSUdSbFptbHVaU0FvYm1GdFpTd2dkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMlJsWm1sdVpYTmJibUZ0WlYwZ1BUMDlJSFpoYkhWbEtTQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJScGNuUjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpHVm1hVzVsYzF0dVlXMWxYU0E5SUhaaGJIVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1sdVpTQW9ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWkdWbWFXNWxjMXR1WVcxbFhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbGVIUnlZV04wVUhKdmNHVnlkR2xsY3lodmRYUWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdVlYTnphV2R1S0c5MWRDd2dkR2hwY3k1ZmNISnZjR1Z5ZEdsbGN5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnZkWFE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaWGgwY21GamRFUmxabWx1WlhNb2IzVjBJRDBnZTMwcElIdGNiaUFnSUNBZ0lDQWdUMkpxWldOMExtRnpjMmxuYmlodmRYUXNJSFJvYVhNdVgyUmxabWx1WlhNcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2IzVjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRWhoYzJnZ0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11WDJScGNuUjVLU0J5WlhSMWNtNGdkR2hwY3k1ZmFHRnphRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaR2x5ZEhrZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHeGxkQ0JvWVhOb0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUdoaGMyZ2dLejBnZFhScGJITXVjMlZ5YVdGc2FYcGxSR1ZtYVc1bGN5aDBhR2x6TGw5a1pXWnBibVZ6S1R0Y2JpQWdJQ0FnSUNBZ2FHRnphQ0FyUFNCMWRHbHNjeTV6WlhKcFlXeHBlbVZWYm1sbWIzSnRjeWgwYUdsekxsOXdjbTl3WlhKMGFXVnpLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZhR0Z6YUNBOUlHMTFjbTExY21oaGMyZ3lLR2hoYzJnc0lEWTJOaWs3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTkiXX0=