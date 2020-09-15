(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/render-buffer.js';
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
        var RenderBuffer = function () {
            function RenderBuffer(device, format, width, height) {
                _classCallCheck(this, RenderBuffer);
                this._device = device;
                this._format = format;
                this._glID = device._gl.createRenderbuffer();
                this.update(width, height);
            }
            _createClass(RenderBuffer, [
                {
                    key: 'update',
                    value: function update(width, height) {
                        this._width = width;
                        this._height = height;
                        var gl = this._device._gl;
                        gl.bindRenderbuffer(gl.RENDERBUFFER, this._glID);
                        gl.renderbufferStorage(gl.RENDERBUFFER, this._format, width, height);
                        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                    }
                },
                {
                    key: 'destroy',
                    value: function destroy() {
                        if (this._glID === null) {
                            console.error('The render-buffer already destroyed');
                            return;
                        }
                        var gl = this._device._gl;
                        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
                        gl.deleteRenderbuffer(this._glID);
                        this._glID = null;
                    }
                }
            ]);
            return RenderBuffer;
        }();
        exports.default = RenderBuffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci1idWZmZXIuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9nZngvcmVuZGVyLWJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJCdWZmZXIiLCJkZXZpY2UiLCJmb3JtYXQiLCJ3aWR0aCIsImhlaWdodCIsIl9kZXZpY2UiLCJfZm9ybWF0IiwiX2dsSUQiLCJfZ2wiLCJjcmVhdGVSZW5kZXJidWZmZXIiLCJ1cGRhdGUiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiZ2wiLCJiaW5kUmVuZGVyYnVmZmVyIiwiUkVOREVSQlVGRkVSIiwicmVuZGVyYnVmZmVyU3RvcmFnZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZVJlbmRlcmJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNFLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRG1CQSxZQUFBQTtZQVFuQixTQUFBLFlBQUEsQ0FBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEJDLEtBQTVCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsWUFBQSxFQUFBO0FBQUEsZ0JBQ3pDLEtBQUtDLE9BQUwsR0FBZUosTUFBZixDQUR5QztBQUFBLGdCQUV6QyxLQUFLSyxPQUFMLEdBQWVKLE1BQWYsQ0FGeUM7QUFBQSxnQkFJekMsS0FBS0ssS0FBTCxHQUFhTixNQUFBQSxDQUFPTyxHQUFQUCxDQUFXUSxrQkFBWFIsRUFBYixDQUp5QztBQUFBLGdCQUt6QyxLQUFLUyxNQUFMLENBQVlQLEtBQVosRUFBbUJDLE1BQW5CLEVBTHlDO0FBQUE7Ozs7MkNBUW5DRCxPQUFPQyxRQUFRO0FBQUEsd0JBQ3JCLEtBQUtPLE1BQUwsR0FBY1IsS0FBZCxDQURxQjtBQUFBLHdCQUVyQixLQUFLUyxPQUFMLEdBQWVSLE1BQWYsQ0FGcUI7QUFBQSx3QkFJckIsSUFBTVMsRUFBQUEsR0FBSyxLQUFLUixPQUFMLENBQWFHLEdBQXhCLENBSnFCO0FBQUEsd0JBS3JCSyxFQUFBQSxDQUFHQyxnQkFBSEQsQ0FBb0JBLEVBQUFBLENBQUdFLFlBQXZCRixFQUFxQyxLQUFLTixLQUExQ00sRUFMcUI7QUFBQSx3QkFNckJBLEVBQUFBLENBQUdHLG1CQUFISCxDQUF1QkEsRUFBQUEsQ0FBR0UsWUFBMUJGLEVBQXdDLEtBQUtQLE9BQTdDTyxFQUFzRFYsS0FBdERVLEVBQTZEVCxNQUE3RFMsRUFOcUI7QUFBQSx3QkFPckJBLEVBQUFBLENBQUdDLGdCQUFIRCxDQUFvQkEsRUFBQUEsQ0FBR0UsWUFBdkJGLEVBQXFDLElBQXJDQSxFQVBxQjtBQUFBOzs7OzhDQWFiO0FBQUEsd0JBQ1IsSUFBSSxLQUFLTixLQUFMLEtBQWUsSUFBbkIsRUFBeUI7QUFBQSw0QkFDdkJVLE9BQUFBLENBQVFDLEtBQVJELENBQWMscUNBQWRBLEVBRHVCO0FBQUEsNEJBRXZCLE9BRnVCO0FBQUEseUJBRGpCO0FBQUEsd0JBTVIsSUFBTUosRUFBQUEsR0FBSyxLQUFLUixPQUFMLENBQWFHLEdBQXhCLENBTlE7QUFBQSx3QkFRUkssRUFBQUEsQ0FBR0MsZ0JBQUhELENBQW9CQSxFQUFBQSxDQUFHRSxZQUF2QkYsRUFBcUMsSUFBckNBLEVBUlE7QUFBQSx3QkFTUkEsRUFBQUEsQ0FBR00sa0JBQUhOLENBQXNCLEtBQUtOLEtBQTNCTSxFQVRRO0FBQUEsd0JBV1IsS0FBS04sS0FBTCxHQUFhLElBQWIsQ0FYUTtBQUFBOzs7OzswQkE3QlNQOzs7Ozs7O1lBUVBDLFFBQUFBLENBQVFDLFFBQUFBLENBQXBCLE9BQVlELEVBQStCLFNBQS9CQSxFQUErQixRQUEvQkEiLCJmaWxlIjoicmVuZGVyLWJ1ZmZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckJ1ZmZlciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtEZXZpY2V9IGRldmljZVxuICAgKiBAcGFyYW0ge1JCX0ZNVF8qfSBmb3JtYXRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRldmljZSwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuX2Zvcm1hdCA9IGZvcm1hdDtcbiAgICBcbiAgICB0aGlzLl9nbElEID0gZGV2aWNlLl9nbC5jcmVhdGVSZW5kZXJidWZmZXIoKTtcbiAgICB0aGlzLnVwZGF0ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHVwZGF0ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgY29uc3QgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xuICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLl9nbElEKTtcbiAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5fZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9nbElEID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGUgcmVuZGVyLWJ1ZmZlciBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdsID0gdGhpcy5fZGV2aWNlLl9nbDtcblxuICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKTtcbiAgICBnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fZ2xJRCk7XG5cbiAgICB0aGlzLl9nbElEID0gbnVsbDtcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlckJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0RldmljZX0gZGV2aWNlXG4gICAqIEBwYXJhbSB7UkJfRk1UXyp9IGZvcm1hdFxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKi9cbiAgZnVuY3Rpb24gUmVuZGVyQnVmZmVyKGRldmljZSwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlckJ1ZmZlcik7XG5cbiAgICB0aGlzLl9kZXZpY2UgPSBkZXZpY2U7XG4gICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xuXG4gICAgdGhpcy5fZ2xJRCA9IGRldmljZS5fZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgdGhpcy51cGRhdGUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVuZGVyQnVmZmVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB2YXIgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xuICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIHRoaXMuX2dsSUQpO1xuICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIHRoaXMuX2Zvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkZXN0cm95XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHJlbmRlci1idWZmZXIgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2wgPSB0aGlzLl9kZXZpY2UuX2dsO1xuXG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgbnVsbCk7XG4gICAgICBnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5fZ2xJRCk7XG5cbiAgICAgIHRoaXMuX2dsSUQgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZW5kZXJCdWZmZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlckJ1ZmZlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5KbGJtUmxjaTFpZFdabVpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5UW5WbVptVnlJaXdpWkdWMmFXTmxJaXdpWm05eWJXRjBJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0pmWkdWMmFXTmxJaXdpWDJadmNtMWhkQ0lzSWw5bmJFbEVJaXdpWDJkc0lpd2lZM0psWVhSbFVtVnVaR1Z5WW5WbVptVnlJaXdpZFhCa1lYUmxJaXdpWDNkcFpIUm9JaXdpWDJobGFXZG9kQ0lzSW1kc0lpd2lZbWx1WkZKbGJtUmxjbUoxWm1abGNpSXNJbEpGVGtSRlVrSlZSa1pGVWlJc0luSmxibVJsY21KMVptWmxjbE4wYjNKaFoyVWlMQ0pqYjI1emIyeGxJaXdpWlhKeWIzSWlMQ0prWld4bGRHVlNaVzVrWlhKaWRXWm1aWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdTVUZCY1VKQkxGazdRVUZEYmtJN096czdPenM3UVVGUFFTeDNRa0ZCV1VNc1RVRkJXaXhGUVVGdlFrTXNUVUZCY0VJc1JVRkJORUpETEV0QlFUVkNMRVZCUVcxRFF5eE5RVUZ1UXl4RlFVRXlRenRCUVVGQk96dEJRVU42UXl4VFFVRkxReXhQUVVGTUxFZEJRV1ZLTEUxQlFXWTdRVUZEUVN4VFFVRkxTeXhQUVVGTUxFZEJRV1ZLTEUxQlFXWTdPMEZCUlVFc1UwRkJTMHNzUzBGQlRDeEhRVUZoVGl4UFFVRlBUeXhIUVVGUUxFTkJRVmRETEd0Q1FVRllMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eE5RVUZNTEVOQlFWbFFMRXRCUVZvc1JVRkJiVUpETEUxQlFXNUNPMEZCUTBRN096czdNa0pCUlU5RUxFc3NSVUZCVDBNc1RTeEZRVUZSTzBGQlEzSkNMRmRCUVV0UExFMUJRVXdzUjBGQlkxSXNTMEZCWkR0QlFVTkJMRmRCUVV0VExFOUJRVXdzUjBGQlpWSXNUVUZCWmpzN1FVRkZRU3hWUVVGTlV5eExRVUZMTEV0QlFVdFNMRTlCUVV3c1EwRkJZVWNzUjBGQmVFSTdRVUZEUVVzc1UwRkJSME1zWjBKQlFVZ3NRMEZCYjBKRUxFZEJRVWRGTEZsQlFYWkNMRVZCUVhGRExFdEJRVXRTTEV0QlFURkRPMEZCUTBGTkxGTkJRVWRITEcxQ1FVRklMRU5CUVhWQ1NDeEhRVUZIUlN4WlFVRXhRaXhGUVVGM1F5eExRVUZMVkN4UFFVRTNReXhGUVVGelJFZ3NTMEZCZEVRc1JVRkJOa1JETEUxQlFUZEVPMEZCUTBGVExGTkJRVWRETEdkQ1FVRklMRU5CUVc5Q1JDeEhRVUZIUlN4WlFVRjJRaXhGUVVGeFF5eEpRVUZ5UXp0QlFVTkVPenRCUVVWRU96czdPenM3T0VKQlIxVTdRVUZEVWl4VlFVRkpMRXRCUVV0U0xFdEJRVXdzUzBGQlpTeEpRVUZ1UWl4RlFVRjVRanRCUVVOMlFsVXNaMEpCUVZGRExFdEJRVklzUTBGQll5eHhRMEZCWkR0QlFVTkJPMEZCUTBRN08wRkJSVVFzVlVGQlRVd3NTMEZCU3l4TFFVRkxVaXhQUVVGTUxFTkJRV0ZITEVkQlFYaENPenRCUVVWQlN5eFRRVUZIUXl4blFrRkJTQ3hEUVVGdlFrUXNSMEZCUjBVc1dVRkJka0lzUlVGQmNVTXNTVUZCY2tNN1FVRkRRVVlzVTBGQlIwMHNhMEpCUVVnc1EwRkJjMElzUzBGQlMxb3NTMEZCTTBJN08wRkJSVUVzVjBGQlMwRXNTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRSRHM3T3pzN08ydENRWHBEYTBKUUxGa2lMQ0ptYVd4bElqb2ljbVZ1WkdWeUxXSjFabVpsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZKbGJtUmxja0oxWm1abGNpQjdYRzRnSUM4cUtseHVJQ0FnS2lCQVkyOXVjM1J5ZFdOMGIzSmNiaUFnSUNvZ1FIQmhjbUZ0SUh0RVpYWnBZMlY5SUdSbGRtbGpaVnh1SUNBZ0tpQkFjR0Z5WVcwZ2UxSkNYMFpOVkY4cWZTQm1iM0p0WVhSY2JpQWdJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJSGRwWkhSb1hHNGdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JvWldsbmFIUmNiaUFnSUNvdlhHNGdJR052Ym5OMGNuVmpkRzl5S0dSbGRtbGpaU3dnWm05eWJXRjBMQ0IzYVdSMGFDd2dhR1ZwWjJoMEtTQjdYRzRnSUNBZ2RHaHBjeTVmWkdWMmFXTmxJRDBnWkdWMmFXTmxPMXh1SUNBZ0lIUm9hWE11WDJadmNtMWhkQ0E5SUdadmNtMWhkRHRjYmlBZ0lDQmNiaUFnSUNCMGFHbHpMbDluYkVsRUlEMGdaR1YyYVdObExsOW5iQzVqY21WaGRHVlNaVzVrWlhKaWRXWm1aWElvS1R0Y2JpQWdJQ0IwYUdsekxuVndaR0YwWlNoM2FXUjBhQ3dnYUdWcFoyaDBLVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU0FvZDJsa2RHZ3NJR2hsYVdkb2RDa2dlMXh1SUNBZ0lIUm9hWE11WDNkcFpIUm9JRDBnZDJsa2RHZzdYRzRnSUNBZ2RHaHBjeTVmYUdWcFoyaDBJRDBnYUdWcFoyaDBPMXh1WEc0Z0lDQWdZMjl1YzNRZ1oyd2dQU0IwYUdsekxsOWtaWFpwWTJVdVgyZHNPMXh1SUNBZ0lHZHNMbUpwYm1SU1pXNWtaWEppZFdabVpYSW9aMnd1VWtWT1JFVlNRbFZHUmtWU0xDQjBhR2x6TGw5bmJFbEVLVHRjYmlBZ0lDQm5iQzV5Wlc1a1pYSmlkV1ptWlhKVGRHOXlZV2RsS0dkc0xsSkZUa1JGVWtKVlJrWkZVaXdnZEdocGN5NWZabTl5YldGMExDQjNhV1IwYUN3Z2FHVnBaMmgwS1R0Y2JpQWdJQ0JuYkM1aWFXNWtVbVZ1WkdWeVluVm1abVZ5S0dkc0xsSkZUa1JGVWtKVlJrWkZVaXdnYm5Wc2JDazdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nUUcxbGRHaHZaQ0JrWlhOMGNtOTVYRzRnSUNBcUwxeHVJQ0JrWlhOMGNtOTVLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbDluYkVsRUlEMDlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NkVWFHVWdjbVZ1WkdWeUxXSjFabVpsY2lCaGJISmxZV1I1SUdSbGMzUnliM2xsWkNjcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHZHNJRDBnZEdocGN5NWZaR1YyYVdObExsOW5iRHRjYmx4dUlDQWdJR2RzTG1KcGJtUlNaVzVrWlhKaWRXWm1aWElvWjJ3dVVrVk9SRVZTUWxWR1JrVlNMQ0J1ZFd4c0tUdGNiaUFnSUNCbmJDNWtaV3hsZEdWU1pXNWtaWEppZFdabVpYSW9kR2hwY3k1ZloyeEpSQ2s3WEc1Y2JpQWdJQ0IwYUdsekxsOW5iRWxFSUQwZ2JuVnNiRHRjYmlBZ2ZWeHVmU0pkZlE9PSJdfQ==