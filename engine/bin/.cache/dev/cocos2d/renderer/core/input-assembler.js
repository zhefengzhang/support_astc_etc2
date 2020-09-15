(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/input-assembler.js';
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
        var _gfx = require('../gfx');
        var _gfx2 = _interopRequireDefault(_gfx);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var InputAssembler = function () {
            function InputAssembler(vb, ib) {
                var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _gfx2.default.PT_TRIANGLES;
                _classCallCheck(this, InputAssembler);
                this._vertexBuffer = vb;
                this._indexBuffer = ib;
                this._primitiveType = pt;
                this._start = 0;
                this._count = -1;
            }
            _createClass(InputAssembler, [{
                    key: 'count',
                    get: function get() {
                        if (this._count !== -1) {
                            return this._count;
                        }
                        if (this._indexBuffer) {
                            return this._indexBuffer.count;
                        }
                        return this._vertexBuffer.count;
                    }
                }]);
            return InputAssembler;
        }();
        exports.default = InputAssembler;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWFzc2VtYmxlci5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2NvcmUvaW5wdXQtYXNzZW1ibGVyLmpzIl0sIm5hbWVzIjpbIklucHV0QXNzZW1ibGVyIiwidmIiLCJpYiIsInB0IiwiZ2Z4IiwiUFRfVFJJQU5HTEVTIiwiX3ZlcnRleEJ1ZmZlciIsIl9pbmRleEJ1ZmZlciIsIl9wcmltaXRpdmVUeXBlIiwiX3N0YXJ0IiwiX2NvdW50IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7Ozs7Ozs7OztZQUVxQkEsY0FBQUE7WUFDbkIsU0FBQSxjQUFBLENBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQTJDO0FBQUEsZ0JBQUEsSUFBdkJDLEVBQUFBLEdBQXVCLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBbEJDLEtBQUFBLENBQUFBLE9BQUFBLENBQUlDLFlBQWMsQ0FBQTtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsY0FBQSxFQUFBO0FBQUEsZ0JBQ3pDLEtBQUtDLGFBQUwsR0FBcUJMLEVBQXJCLENBRHlDO0FBQUEsZ0JBRXpDLEtBQUtNLFlBQUwsR0FBb0JMLEVBQXBCLENBRnlDO0FBQUEsZ0JBR3pDLEtBQUtNLGNBQUwsR0FBc0JMLEVBQXRCLENBSHlDO0FBQUEsZ0JBSXpDLEtBQUtNLE1BQUwsR0FBYyxDQUFkLENBSnlDO0FBQUEsZ0JBS3pDLEtBQUtDLE1BQUwsR0FBYyxDQUFDLENBQWYsQ0FMeUM7QUFBQTs7O3dDQWMvQjtBQUFBLHdCQUNWLElBQUksS0FBS0EsTUFBTCxLQUFnQixDQUFDLENBQXJCLEVBQXdCO0FBQUEsNEJBQ3RCLE9BQU8sS0FBS0EsTUFBWixDQURzQjtBQUFBLHlCQURkO0FBQUEsd0JBS1YsSUFBSSxLQUFLSCxZQUFULEVBQXVCO0FBQUEsNEJBQ3JCLE9BQU8sS0FBS0EsWUFBTCxDQUFrQkksS0FBekIsQ0FEcUI7QUFBQSx5QkFMYjtBQUFBLHdCQVNWLE9BQU8sS0FBS0wsYUFBTCxDQUFtQkssS0FBMUIsQ0FUVTtBQUFBOzs7OzBCQWZPWDs7Ozs7OztZQUNuQixRQUFBLENBQTJDLFFBQUEsQ0FBQSxPQUEzQyxFQUEyQyxTQUEzQyxFQUEyQyxRQUEzQyIsImZpbGUiOiJpbnB1dC1hc3NlbWJsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuaW1wb3J0IGdmeCBmcm9tICcuLi9nZngnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEFzc2VtYmxlciB7XG4gIGNvbnN0cnVjdG9yKHZiLCBpYiwgcHQgPSBnZnguUFRfVFJJQU5HTEVTKSB7XG4gICAgdGhpcy5fdmVydGV4QnVmZmVyID0gdmI7XG4gICAgdGhpcy5faW5kZXhCdWZmZXIgPSBpYjtcbiAgICB0aGlzLl9wcmltaXRpdmVUeXBlID0gcHQ7XG4gICAgdGhpcy5fc3RhcnQgPSAwO1xuICAgIHRoaXMuX2NvdW50ID0gLTE7XG5cbiAgICAvLyBUT0RPOiBpbnN0YW5jaW5nIGRhdGFcbiAgICAvLyB0aGlzLl9zdHJlYW0gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGluZGljZXMgb3IgdmVydGljZXMgdG8gZGlzcGF0Y2ggaW4gdGhlIGRyYXcgY2FsbC5cbiAgICovXG4gIGdldCBjb3VudCgpIHtcbiAgICBpZiAodGhpcy5fY291bnQgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luZGV4QnVmZmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5kZXhCdWZmZXIuY291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRleEJ1ZmZlci5jb3VudDtcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbnZhciBfZ2Z4ID0gcmVxdWlyZSgnLi4vZ2Z4Jyk7XG5cbnZhciBfZ2Z4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dmeCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJbnB1dEFzc2VtYmxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5wdXRBc3NlbWJsZXIodmIsIGliKSB7XG4gICAgdmFyIHB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBfZ2Z4Mi5kZWZhdWx0LlBUX1RSSUFOR0xFUztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEFzc2VtYmxlcik7XG5cbiAgICB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSB2YjtcbiAgICB0aGlzLl9pbmRleEJ1ZmZlciA9IGliO1xuICAgIHRoaXMuX3ByaW1pdGl2ZVR5cGUgPSBwdDtcbiAgICB0aGlzLl9zdGFydCA9IDA7XG4gICAgdGhpcy5fY291bnQgPSAtMTtcblxuICAgIC8vIFRPRE86IGluc3RhbmNpbmcgZGF0YVxuICAgIC8vIHRoaXMuX3N0cmVhbSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgaW5kaWNlcyBvciB2ZXJ0aWNlcyB0byBkaXNwYXRjaCBpbiB0aGUgZHJhdyBjYWxsLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dEFzc2VtYmxlciwgW3tcbiAgICBrZXk6ICdjb3VudCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fY291bnQgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2luZGV4QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleEJ1ZmZlci5jb3VudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEJ1ZmZlci5jb3VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRBc3NlbWJsZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0QXNzZW1ibGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1Y0hWMExXRnpjMlZ0WW14bGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKSmJuQjFkRUZ6YzJWdFlteGxjaUlzSW5aaUlpd2lhV0lpTENKd2RDSXNJbWRtZUNJc0lsQlVYMVJTU1VGT1IweEZVeUlzSWw5MlpYSjBaWGhDZFdabVpYSWlMQ0pmYVc1a1pYaENkV1ptWlhJaUxDSmZjSEpwYldsMGFYWmxWSGx3WlNJc0lsOXpkR0Z5ZENJc0lsOWpiM1Z1ZENJc0ltTnZkVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRnFRa0ZCUVRzN1FVRkZRVHM3T3pzN096czdTVUZGY1VKQkxHTTdRVUZEYmtJc01FSkJRVmxETEVWQlFWb3NSVUZCWjBKRExFVkJRV2hDTEVWQlFUSkRPMEZCUVVFc1VVRkJka0pETEVWQlFYVkNMSFZGUVVGc1FrTXNZMEZCU1VNc1dVRkJZenM3UVVGQlFUczdRVUZEZWtNc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWt3c1JVRkJja0k3UVVGRFFTeFRRVUZMVFN4WlFVRk1MRWRCUVc5Q1RDeEZRVUZ3UWp0QlFVTkJMRk5CUVV0TkxHTkJRVXdzUjBGQmMwSk1MRVZCUVhSQ08wRkJRMEVzVTBGQlMwMHNUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hUUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCUXl4RFFVRm1PenRCUVVWQk8wRkJRMEU3UVVGRFJEczdRVUZGUkRzN096czdPenQzUWtGSFdUdEJRVU5XTEZWQlFVa3NTMEZCUzBFc1RVRkJUQ3hMUVVGblFpeERRVUZETEVOQlFYSkNMRVZCUVhkQ08wRkJRM1JDTEdWQlFVOHNTMEZCUzBFc1RVRkJXanRCUVVORU96dEJRVVZFTEZWQlFVa3NTMEZCUzBnc1dVRkJWQ3hGUVVGMVFqdEJRVU55UWl4bFFVRlBMRXRCUVV0QkxGbEJRVXdzUTBGQmEwSkpMRXRCUVhwQ08wRkJRMFE3TzBGQlJVUXNZVUZCVHl4TFFVRkxUQ3hoUVVGTUxFTkJRVzFDU3l4TFFVRXhRanRCUVVORU96czdPenM3YTBKQmVrSnJRbGdzWXlJc0ltWnBiR1VpT2lKcGJuQjFkQzFoYzNObGJXSnNaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjYmx4dWFXMXdiM0owSUdkbWVDQm1jbTl0SUNjdUxpOW5abmduTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJKYm5CMWRFRnpjMlZ0WW14bGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIWmlMQ0JwWWl3Z2NIUWdQU0JuWm5ndVVGUmZWRkpKUVU1SFRFVlRLU0I3WEc0Z0lDQWdkR2hwY3k1ZmRtVnlkR1Y0UW5WbVptVnlJRDBnZG1JN1hHNGdJQ0FnZEdocGN5NWZhVzVrWlhoQ2RXWm1aWElnUFNCcFlqdGNiaUFnSUNCMGFHbHpMbDl3Y21sdGFYUnBkbVZVZVhCbElEMGdjSFE3WEc0Z0lDQWdkR2hwY3k1ZmMzUmhjblFnUFNBd08xeHVJQ0FnSUhSb2FYTXVYMk52ZFc1MElEMGdMVEU3WEc1Y2JpQWdJQ0F2THlCVVQwUlBPaUJwYm5OMFlXNWphVzVuSUdSaGRHRmNiaUFnSUNBdkx5QjBhR2x6TGw5emRISmxZVzBnUFNBd08xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUJ3Y205d1pYSjBlU0I3VG5WdFltVnlmU0JqYjNWdWRDQlVhR1VnYm5WdFltVnlJRzltSUdsdVpHbGpaWE1nYjNJZ2RtVnlkR2xqWlhNZ2RHOGdaR2x6Y0dGMFkyZ2dhVzRnZEdobElHUnlZWGNnWTJGc2JDNWNiaUFnSUNvdlhHNGdJR2RsZENCamIzVnVkQ2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVmWTI5MWJuUWdJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWTI5MWJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVgybHVaR1Y0UW5WbVptVnlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmFXNWtaWGhDZFdabVpYSXVZMjkxYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzWmxjblJsZUVKMVptWmxjaTVqYjNWdWREdGNiaUFnZlZ4dWZTSmRmUT09Il19