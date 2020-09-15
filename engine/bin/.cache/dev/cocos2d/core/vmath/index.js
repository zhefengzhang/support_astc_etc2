(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/vmath/index.js';
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
        exports.color4 = exports.color3 = exports.mat4 = exports.mat3 = exports.mat23 = exports.mat2 = exports.quat = exports.vec4 = exports.vec3 = exports.vec2 = undefined;
        var _utils = require('./utils');
        Object.keys(_utils).forEach(function (key) {
            if (key === 'default' || key === '__esModule')
                return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _utils[key];
                }
            });
        });
        var _vec = require('./vec2');
        var _vec2 = _interopRequireDefault(_vec);
        var _vec3 = require('./vec3');
        var _vec4 = _interopRequireDefault(_vec3);
        var _vec5 = require('./vec4');
        var _vec6 = _interopRequireDefault(_vec5);
        var _quat = require('./quat');
        var _quat2 = _interopRequireDefault(_quat);
        var _mat = require('./mat2');
        var _mat2 = _interopRequireDefault(_mat);
        var _mat3 = require('./mat23');
        var _mat4 = _interopRequireDefault(_mat3);
        var _mat5 = require('./mat3');
        var _mat6 = _interopRequireDefault(_mat5);
        var _mat7 = require('./mat4');
        var _mat8 = _interopRequireDefault(_mat7);
        var _color = require('./color3');
        var _color2 = _interopRequireDefault(_color);
        var _color3 = require('./color4');
        var _color4 = _interopRequireDefault(_color3);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        exports.vec2 = _vec2.default;
        exports.vec3 = _vec4.default;
        exports.vec4 = _vec6.default;
        exports.quat = _quat2.default;
        exports.mat2 = _mat2.default;
        exports.mat23 = _mat4.default;
        exports.mat3 = _mat6.default;
        exports.mat4 = _mat8.default;
        exports.color3 = _color2.default;
        exports.color4 = _color4.default;
        exports.default = {
            vec2: _vec2.default,
            vec3: _vec4.default,
            vec4: _vec6.default,
            quat: _quat2.default,
            mat2: _mat2.default,
            mat23: _mat4.default,
            mat3: _mat6.default,
            mat4: _mat8.default,
            color3: _color2.default,
            color4: _color4.default
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS92bWF0aC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ2ZWMyIiwidmVjMyIsInZlYzQiLCJxdWF0IiwibWF0MiIsIm1hdDIzIiwibWF0MyIsIm1hdDQiLCJjb2xvcjMiLCJjb2xvcjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUFBLFNBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsUUFBQSxJQUFBLENBQUEsT0FBQSxFQUFBO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsU0FBQTtBQUFBOzs7O1FBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQUEsWUFBQSxJQUFBLEdBQUEsS0FBQSxTQUFBLElBQUEsR0FBQSxLQUFBLFlBQUE7QUFBQSxnQkFBQSxPQUFBO0FBQUEsWUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUE7QUFBQSxnQkFBQSxVQUFBLEVBQUEsSUFBQTtBQUFBLGdCQUFBLEdBQUEsRUFBQSxTQUFBLEdBQUEsR0FBQTtBQUFBLG9CQUFBLE9BQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQUEsaUJBQUE7QUFBQSxhQUFBLEVBQUE7QUFBQSxTQUFBO1FBRUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUE7O1FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7UUFDQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7O1FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUE7O1FBQ0EsSUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUEsQ0FBQTs7Ozs7Z0JBRVNBLE9BQUFBLEtBQUFBLENBQUFBO2dCQUFNQyxPQUFBQSxLQUFBQSxDQUFBQTtnQkFBTUMsT0FBQUEsS0FBQUEsQ0FBQUE7Z0JBQU1DLE9BQUFBLE1BQUFBLENBQUFBO2dCQUFNQyxPQUFBQSxLQUFBQSxDQUFBQTtnQkFBTUMsUUFBQUEsS0FBQUEsQ0FBQUE7Z0JBQU9DLE9BQUFBLEtBQUFBLENBQUFBO2dCQUFNQyxPQUFBQSxLQUFBQSxDQUFBQTtnQkFBTUMsU0FBQUEsT0FBQUEsQ0FBQUE7Z0JBQVFDLFNBQUFBLE9BQUFBLENBQUFBOzBCQUNuRDtBQUFBLFlBQUVULElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BQUY7QUFBQSxZQUFRQyxJQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUFSO0FBQUEsWUFBY0MsSUFBQUEsRUFBQUEsS0FBQUEsQ0FBQUEsT0FBZDtBQUFBLFlBQW9CQyxJQUFBQSxFQUFBQSxNQUFBQSxDQUFBQSxPQUFwQjtBQUFBLFlBQTBCQyxJQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUExQjtBQUFBLFlBQWdDQyxLQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUFoQztBQUFBLFlBQXVDQyxJQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUF2QztBQUFBLFlBQTZDQyxJQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQUE3QztBQUFBLFlBQW1EQyxNQUFBQSxFQUFBQSxPQUFBQSxDQUFBQSxPQUFuRDtBQUFBLFlBQTJEQyxNQUFBQSxFQUFBQSxPQUFBQSxDQUFBQSxPQUEzRDtBQUFBLFVBZGY7QUFBQTtJQUFBLElBQUEsT0FBQSxFQUFBO0FBQUEsUUFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBO0FBQUEsS0FBQSxNQUFBO0FBQUEsUUFBQSxpQkFBQSxDQUFBLGtCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSw0REFBQTtBQUFBLFNBQUEsRUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB2ZWMyIGZyb20gJy4vdmVjMic7XG5pbXBvcnQgdmVjMyBmcm9tICcuL3ZlYzMnO1xuaW1wb3J0IHZlYzQgZnJvbSAnLi92ZWM0JztcbmltcG9ydCBxdWF0IGZyb20gJy4vcXVhdCc7XG5pbXBvcnQgbWF0MiBmcm9tICcuL21hdDInO1xuaW1wb3J0IG1hdDIzIGZyb20gJy4vbWF0MjMnO1xuaW1wb3J0IG1hdDMgZnJvbSAnLi9tYXQzJztcbmltcG9ydCBtYXQ0IGZyb20gJy4vbWF0NCc7XG5pbXBvcnQgY29sb3IzIGZyb20gJy4vY29sb3IzJztcbmltcG9ydCBjb2xvcjQgZnJvbSAnLi9jb2xvcjQnO1xuXG5leHBvcnQgeyB2ZWMyLCB2ZWMzLCB2ZWM0LCBxdWF0LCBtYXQyLCBtYXQyMywgbWF0MywgbWF0NCwgY29sb3IzLCBjb2xvcjQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgdmVjMiwgdmVjMywgdmVjNCwgcXVhdCwgbWF0MiwgbWF0MjMsIG1hdDMsIG1hdDQsIGNvbG9yMywgY29sb3I0IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbG9yNCA9IGV4cG9ydHMuY29sb3IzID0gZXhwb3J0cy5tYXQ0ID0gZXhwb3J0cy5tYXQzID0gZXhwb3J0cy5tYXQyMyA9IGV4cG9ydHMubWF0MiA9IGV4cG9ydHMucXVhdCA9IGV4cG9ydHMudmVjNCA9IGV4cG9ydHMudmVjMyA9IGV4cG9ydHMudmVjMiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuT2JqZWN0LmtleXMoX3V0aWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXRpbHNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfdmVjID0gcmVxdWlyZSgnLi92ZWMyJyk7XG5cbnZhciBfdmVjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZlYyk7XG5cbnZhciBfdmVjMyA9IHJlcXVpcmUoJy4vdmVjMycpO1xuXG52YXIgX3ZlYzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92ZWMzKTtcblxudmFyIF92ZWM1ID0gcmVxdWlyZSgnLi92ZWM0Jyk7XG5cbnZhciBfdmVjNiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZlYzUpO1xuXG52YXIgX3F1YXQgPSByZXF1aXJlKCcuL3F1YXQnKTtcblxudmFyIF9xdWF0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3F1YXQpO1xuXG52YXIgX21hdCA9IHJlcXVpcmUoJy4vbWF0MicpO1xuXG52YXIgX21hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXQpO1xuXG52YXIgX21hdDMgPSByZXF1aXJlKCcuL21hdDIzJyk7XG5cbnZhciBfbWF0NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdDMpO1xuXG52YXIgX21hdDUgPSByZXF1aXJlKCcuL21hdDMnKTtcblxudmFyIF9tYXQ2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0NSk7XG5cbnZhciBfbWF0NyA9IHJlcXVpcmUoJy4vbWF0NCcpO1xuXG52YXIgX21hdDggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXQ3KTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vY29sb3IzJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbG9yMyA9IHJlcXVpcmUoJy4vY29sb3I0Jyk7XG5cbnZhciBfY29sb3I0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy52ZWMyID0gX3ZlYzIuZGVmYXVsdDtcbmV4cG9ydHMudmVjMyA9IF92ZWM0LmRlZmF1bHQ7XG5leHBvcnRzLnZlYzQgPSBfdmVjNi5kZWZhdWx0O1xuZXhwb3J0cy5xdWF0ID0gX3F1YXQyLmRlZmF1bHQ7XG5leHBvcnRzLm1hdDIgPSBfbWF0Mi5kZWZhdWx0O1xuZXhwb3J0cy5tYXQyMyA9IF9tYXQ0LmRlZmF1bHQ7XG5leHBvcnRzLm1hdDMgPSBfbWF0Ni5kZWZhdWx0O1xuZXhwb3J0cy5tYXQ0ID0gX21hdDguZGVmYXVsdDtcbmV4cG9ydHMuY29sb3IzID0gX2NvbG9yMi5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvcjQgPSBfY29sb3I0LmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSB7IHZlYzI6IF92ZWMyLmRlZmF1bHQsIHZlYzM6IF92ZWM0LmRlZmF1bHQsIHZlYzQ6IF92ZWM2LmRlZmF1bHQsIHF1YXQ6IF9xdWF0Mi5kZWZhdWx0LCBtYXQyOiBfbWF0Mi5kZWZhdWx0LCBtYXQyMzogX21hdDQuZGVmYXVsdCwgbWF0MzogX21hdDYuZGVmYXVsdCwgbWF0NDogX21hdDguZGVmYXVsdCwgY29sb3IzOiBfY29sb3IyLmRlZmF1bHQsIGNvbG9yNDogX2NvbG9yNC5kZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW5abFl6SWlMQ0oyWldNeklpd2lkbVZqTkNJc0luRjFZWFFpTENKdFlYUXlJaXdpYldGME1qTWlMQ0p0WVhReklpd2liV0YwTkNJc0ltTnZiRzl5TXlJc0ltTnZiRzl5TkNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVWQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3VVVGRlUwRXNTU3hIUVVGQlFTeGhPMUZCUVUxRExFa3NSMEZCUVVFc1lUdFJRVUZOUXl4SkxFZEJRVUZCTEdFN1VVRkJUVU1zU1N4SFFVRkJRU3hqTzFGQlFVMURMRWtzUjBGQlFVRXNZVHRSUVVGTlF5eExMRWRCUVVGQkxHRTdVVUZCVDBNc1NTeEhRVUZCUVN4aE8xRkJRVTFETEVrc1IwRkJRVUVzWVR0UlFVRk5ReXhOTEVkQlFVRkJMR1U3VVVGQlVVTXNUU3hIUVVGQlFTeGxPMnRDUVVOdVJDeEZRVUZGVkN4dFFrRkJSaXhGUVVGUlF5eHRRa0ZCVWl4RlFVRmpReXh0UWtGQlpDeEZRVUZ2UWtNc2IwSkJRWEJDTEVWQlFUQkNReXh0UWtGQk1VSXNSVUZCWjBORExHOUNRVUZvUXl4RlFVRjFRME1zYlVKQlFYWkRMRVZCUVRaRFF5eHRRa0ZCTjBNc1JVRkJiVVJETEhWQ1FVRnVSQ3hGUVVFeVJFTXNkVUpCUVRORUxFVWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdLaUJtY205dElDY3VMM1YwYVd4ekp6dGNibHh1YVcxd2IzSjBJSFpsWXpJZ1puSnZiU0FuTGk5MlpXTXlKenRjYm1sdGNHOXlkQ0IyWldNeklHWnliMjBnSnk0dmRtVmpNeWM3WEc1cGJYQnZjblFnZG1Wak5DQm1jbTl0SUNjdUwzWmxZelFuTzF4dWFXMXdiM0owSUhGMVlYUWdabkp2YlNBbkxpOXhkV0YwSnp0Y2JtbHRjRzl5ZENCdFlYUXlJR1p5YjIwZ0p5NHZiV0YwTWljN1hHNXBiWEJ2Y25RZ2JXRjBNak1nWm5KdmJTQW5MaTl0WVhReU15YzdYRzVwYlhCdmNuUWdiV0YwTXlCbWNtOXRJQ2N1TDIxaGRETW5PMXh1YVcxd2IzSjBJRzFoZERRZ1puSnZiU0FuTGk5dFlYUTBKenRjYm1sdGNHOXlkQ0JqYjJ4dmNqTWdabkp2YlNBbkxpOWpiMnh2Y2pNbk8xeHVhVzF3YjNKMElHTnZiRzl5TkNCbWNtOXRJQ2N1TDJOdmJHOXlOQ2M3WEc1Y2JtVjRjRzl5ZENCN0lIWmxZeklzSUhabFl6TXNJSFpsWXpRc0lIRjFZWFFzSUcxaGRESXNJRzFoZERJekxDQnRZWFF6TENCdFlYUTBMQ0JqYjJ4dmNqTXNJR052Ykc5eU5DQjlPMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdleUIyWldNeUxDQjJaV016TENCMlpXTTBMQ0J4ZFdGMExDQnRZWFF5TENCdFlYUXlNeXdnYldGME15d2diV0YwTkN3Z1kyOXNiM0l6TENCamIyeHZjalFnZlR0Y2JpSmRmUT09Il19