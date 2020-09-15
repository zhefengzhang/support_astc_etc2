(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/frame-buffer.js';
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
        var FrameBuffer = function () {
            function FrameBuffer(device, width, height, options) {
                _classCallCheck(this, FrameBuffer);
                this._device = device;
                this._width = width;
                this._height = height;
                this._colors = options.colors || [];
                this._depth = options.depth || null;
                this._stencil = options.stencil || null;
                this._depthStencil = options.depthStencil || null;
                this._glID = device._gl.createFramebuffer();
            }
            _createClass(FrameBuffer, [{
                    key: 'destroy',
                    value: function destroy() {
                        if (this._glID === null) {
                            console.error('The frame-buffer already destroyed');
                            return;
                        }
                        var gl = this._device._gl;
                        gl.deleteFramebuffer(this._glID);
                        this._glID = null;
                    }
                }]);
            return FrameBuffer;
        }();
        exports.default = FrameBuffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLWJ1ZmZlci5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2dmeC9mcmFtZS1idWZmZXIuanMiXSwibmFtZXMiOlsiRnJhbWVCdWZmZXIiLCJkZXZpY2UiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJfZGV2aWNlIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9jb2xvcnMiLCJjb2xvcnMiLCJfZGVwdGgiLCJkZXB0aCIsIl9zdGVuY2lsIiwic3RlbmNpbCIsIl9kZXB0aFN0ZW5jaWwiLCJkZXB0aFN0ZW5jaWwiLCJfZ2xJRCIsIl9nbCIsImNyZWF0ZUZyYW1lYnVmZmVyIiwiY29uc29sZSIsImVycm9yIiwiZ2wiLCJkZWxldGVGcmFtZWJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNFLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRG1CQSxXQUFBQTtZQVluQixTQUFBLFdBQUEsQ0FBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsV0FBQSxFQUFBO0FBQUEsZ0JBQzFDLEtBQUtDLE9BQUwsR0FBZUosTUFBZixDQUQwQztBQUFBLGdCQUUxQyxLQUFLSyxNQUFMLEdBQWNKLEtBQWQsQ0FGMEM7QUFBQSxnQkFHMUMsS0FBS0ssT0FBTCxHQUFlSixNQUFmLENBSDBDO0FBQUEsZ0JBSzFDLEtBQUtLLE9BQUwsR0FBZUosT0FBQUEsQ0FBUUssTUFBUkwsSUFBa0IsRUFBakMsQ0FMMEM7QUFBQSxnQkFNMUMsS0FBS00sTUFBTCxHQUFjTixPQUFBQSxDQUFRTyxLQUFSUCxJQUFpQixJQUEvQixDQU4wQztBQUFBLGdCQU8xQyxLQUFLUSxRQUFMLEdBQWdCUixPQUFBQSxDQUFRUyxPQUFSVCxJQUFtQixJQUFuQyxDQVAwQztBQUFBLGdCQVExQyxLQUFLVSxhQUFMLEdBQXFCVixPQUFBQSxDQUFRVyxZQUFSWCxJQUF3QixJQUE3QyxDQVIwQztBQUFBLGdCQVUxQyxLQUFLWSxLQUFMLEdBQWFmLE1BQUFBLENBQU9nQixHQUFQaEIsQ0FBV2lCLGlCQUFYakIsRUFBYixDQVYwQztBQUFBOzs7OENBZ0JsQztBQUFBLHdCQUNSLElBQUksS0FBS2UsS0FBTCxLQUFlLElBQW5CLEVBQXlCO0FBQUEsNEJBQ3ZCRyxPQUFBQSxDQUFRQyxLQUFSRCxDQUFjLG9DQUFkQSxFQUR1QjtBQUFBLDRCQUV2QixPQUZ1QjtBQUFBLHlCQURqQjtBQUFBLHdCQU1SLElBQU1FLEVBQUFBLEdBQUssS0FBS2hCLE9BQUwsQ0FBYVksR0FBeEIsQ0FOUTtBQUFBLHdCQVFSSSxFQUFBQSxDQUFHQyxpQkFBSEQsQ0FBcUIsS0FBS0wsS0FBMUJLLEVBUlE7QUFBQSx3QkFVUixLQUFLTCxLQUFMLEdBQWEsSUFBYixDQVZRO0FBQUE7Ozs7MEJBNUJTaEIiLCJmaWxlIjoiZnJhbWUtYnVmZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVCdWZmZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RGV2aWNlfSBkZXZpY2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5jb2xvcnNcbiAgICogQHBhcmFtIHtSZW5kZXJCdWZmZXJ8VGV4dHVyZTJEfFRleHR1cmVDdWJlfSBvcHRpb25zLmRlcHRoXG4gICAqIEBwYXJhbSB7UmVuZGVyQnVmZmVyfFRleHR1cmUyRHxUZXh0dXJlQ3ViZX0gb3B0aW9ucy5zdGVuY2lsXG4gICAqIEBwYXJhbSB7UmVuZGVyQnVmZmVyfFRleHR1cmUyRHxUZXh0dXJlQ3ViZX0gb3B0aW9ucy5kZXB0aFN0ZW5jaWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRldmljZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHRoaXMuX2RldmljZSA9IGRldmljZTtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzIHx8IFtdO1xuICAgIHRoaXMuX2RlcHRoID0gb3B0aW9ucy5kZXB0aCB8fCBudWxsO1xuICAgIHRoaXMuX3N0ZW5jaWwgPSBvcHRpb25zLnN0ZW5jaWwgfHwgbnVsbDtcbiAgICB0aGlzLl9kZXB0aFN0ZW5jaWwgPSBvcHRpb25zLmRlcHRoU3RlbmNpbCB8fCBudWxsO1xuXG4gICAgdGhpcy5fZ2xJRCA9IGRldmljZS5fZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2dsSUQgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBmcmFtZS1idWZmZXIgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IHRoaXMuX2RldmljZS5fZ2w7XG5cbiAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0aGlzLl9nbElEKTtcblxuICAgIHRoaXMuX2dsSUQgPSBudWxsO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRnJhbWVCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtEZXZpY2V9IGRldmljZVxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmNvbG9yc1xuICAgKiBAcGFyYW0ge1JlbmRlckJ1ZmZlcnxUZXh0dXJlMkR8VGV4dHVyZUN1YmV9IG9wdGlvbnMuZGVwdGhcbiAgICogQHBhcmFtIHtSZW5kZXJCdWZmZXJ8VGV4dHVyZTJEfFRleHR1cmVDdWJlfSBvcHRpb25zLnN0ZW5jaWxcbiAgICogQHBhcmFtIHtSZW5kZXJCdWZmZXJ8VGV4dHVyZTJEfFRleHR1cmVDdWJlfSBvcHRpb25zLmRlcHRoU3RlbmNpbFxuICAgKi9cbiAgZnVuY3Rpb24gRnJhbWVCdWZmZXIoZGV2aWNlLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lQnVmZmVyKTtcblxuICAgIHRoaXMuX2RldmljZSA9IGRldmljZTtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzIHx8IFtdO1xuICAgIHRoaXMuX2RlcHRoID0gb3B0aW9ucy5kZXB0aCB8fCBudWxsO1xuICAgIHRoaXMuX3N0ZW5jaWwgPSBvcHRpb25zLnN0ZW5jaWwgfHwgbnVsbDtcbiAgICB0aGlzLl9kZXB0aFN0ZW5jaWwgPSBvcHRpb25zLmRlcHRoU3RlbmNpbCB8fCBudWxsO1xuXG4gICAgdGhpcy5fZ2xJRCA9IGRldmljZS5fZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRnJhbWVCdWZmZXIsIFt7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5fZ2xJRCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZnJhbWUtYnVmZmVyIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGdsID0gdGhpcy5fZGV2aWNlLl9nbDtcblxuICAgICAgZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5fZ2xJRCk7XG5cbiAgICAgIHRoaXMuX2dsSUQgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGcmFtZUJ1ZmZlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVCdWZmZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnlZVzFsTFdKMVptWmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SkdjbUZ0WlVKMVptWmxjaUlzSW1SbGRtbGpaU0lzSW5kcFpIUm9JaXdpYUdWcFoyaDBJaXdpYjNCMGFXOXVjeUlzSWw5a1pYWnBZMlVpTENKZmQybGtkR2dpTENKZmFHVnBaMmgwSWl3aVgyTnZiRzl5Y3lJc0ltTnZiRzl5Y3lJc0lsOWtaWEIwYUNJc0ltUmxjSFJvSWl3aVgzTjBaVzVqYVd3aUxDSnpkR1Z1WTJsc0lpd2lYMlJsY0hSb1UzUmxibU5wYkNJc0ltUmxjSFJvVTNSbGJtTnBiQ0lzSWw5bmJFbEVJaXdpWDJkc0lpd2lZM0psWVhSbFJuSmhiV1ZpZFdabVpYSWlMQ0pqYjI1emIyeGxJaXdpWlhKeWIzSWlMQ0puYkNJc0ltUmxiR1YwWlVaeVlXMWxZblZtWm1WeUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBsQlFYRkNRU3hYTzBGQlEyNUNPenM3T3pzN096czdPenRCUVZkQkxIVkNRVUZaUXl4TlFVRmFMRVZCUVc5Q1F5eExRVUZ3UWl4RlFVRXlRa01zVFVGQk0wSXNSVUZCYlVORExFOUJRVzVETEVWQlFUUkRPMEZCUVVFN08wRkJRekZETEZOQlFVdERMRTlCUVV3c1IwRkJaVW9zVFVGQlpqdEJRVU5CTEZOQlFVdExMRTFCUVV3c1IwRkJZMG9zUzBGQlpEdEJRVU5CTEZOQlFVdExMRTlCUVV3c1IwRkJaVW9zVFVGQlpqczdRVUZGUVN4VFFVRkxTeXhQUVVGTUxFZEJRV1ZLTEZGQlFWRkxMRTFCUVZJc1NVRkJhMElzUlVGQmFrTTdRVUZEUVN4VFFVRkxReXhOUVVGTUxFZEJRV05PTEZGQlFWRlBMRXRCUVZJc1NVRkJhVUlzU1VGQkwwSTdRVUZEUVN4VFFVRkxReXhSUVVGTUxFZEJRV2RDVWl4UlFVRlJVeXhQUVVGU0xFbEJRVzFDTEVsQlFXNURPMEZCUTBFc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWxZc1VVRkJVVmNzV1VGQlVpeEpRVUYzUWl4SlFVRTNRenM3UVVGRlFTeFRRVUZMUXl4TFFVRk1MRWRCUVdGbUxFOUJRVTluUWl4SFFVRlFMRU5CUVZkRExHbENRVUZZTEVWQlFXSTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czRRa0ZIVlR0QlFVTlNMRlZCUVVrc1MwRkJTMFlzUzBGQlRDeExRVUZsTEVsQlFXNUNMRVZCUVhsQ08wRkJRM1pDUnl4blFrRkJVVU1zUzBGQlVpeERRVUZqTEc5RFFVRmtPMEZCUTBFN1FVRkRSRHM3UVVGRlJDeFZRVUZOUXl4TFFVRkxMRXRCUVV0b1FpeFBRVUZNTEVOQlFXRlpMRWRCUVhoQ096dEJRVVZCU1N4VFFVRkhReXhwUWtGQlNDeERRVUZ4UWl4TFFVRkxUaXhMUVVFeFFqczdRVUZGUVN4WFFVRkxRU3hMUVVGTUxFZEJRV0VzU1VGQllqdEJRVU5FT3pzN096czdhMEpCZGtOclFtaENMRmNpTENKbWFXeGxJam9pWm5KaGJXVXRZblZtWm1WeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JuSmhiV1ZDZFdabVpYSWdlMXh1SUNBdktpcGNiaUFnSUNvZ1FHTnZibk4wY25WamRHOXlYRzRnSUNBcUlFQndZWEpoYlNCN1JHVjJhV05sZlNCa1pYWnBZMlZjYmlBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlIZHBaSFJvWEc0Z0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQm9aV2xuYUhSY2JpQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzl3ZEdsdmJuTmNiaUFnSUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnYjNCMGFXOXVjeTVqYjJ4dmNuTmNiaUFnSUNvZ1FIQmhjbUZ0SUh0U1pXNWtaWEpDZFdabVpYSjhWR1Y0ZEhWeVpUSkVmRlJsZUhSMWNtVkRkV0psZlNCdmNIUnBiMjV6TG1SbGNIUm9YRzRnSUNBcUlFQndZWEpoYlNCN1VtVnVaR1Z5UW5WbVptVnlmRlJsZUhSMWNtVXlSSHhVWlhoMGRYSmxRM1ZpWlgwZ2IzQjBhVzl1Y3k1emRHVnVZMmxzWEc0Z0lDQXFJRUJ3WVhKaGJTQjdVbVZ1WkdWeVFuVm1abVZ5ZkZSbGVIUjFjbVV5Ukh4VVpYaDBkWEpsUTNWaVpYMGdiM0IwYVc5dWN5NWtaWEIwYUZOMFpXNWphV3hjYmlBZ0lDb3ZYRzRnSUdOdmJuTjBjblZqZEc5eUtHUmxkbWxqWlN3Z2QybGtkR2dzSUdobGFXZG9kQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJSFJvYVhNdVgyUmxkbWxqWlNBOUlHUmxkbWxqWlR0Y2JpQWdJQ0IwYUdsekxsOTNhV1IwYUNBOUlIZHBaSFJvTzF4dUlDQWdJSFJvYVhNdVgyaGxhV2RvZENBOUlHaGxhV2RvZER0Y2JseHVJQ0FnSUhSb2FYTXVYMk52Ykc5eWN5QTlJRzl3ZEdsdmJuTXVZMjlzYjNKeklIeDhJRnRkTzF4dUlDQWdJSFJvYVhNdVgyUmxjSFJvSUQwZ2IzQjBhVzl1Y3k1a1pYQjBhQ0I4ZkNCdWRXeHNPMXh1SUNBZ0lIUm9hWE11WDNOMFpXNWphV3dnUFNCdmNIUnBiMjV6TG5OMFpXNWphV3dnZkh3Z2JuVnNiRHRjYmlBZ0lDQjBhR2x6TGw5a1pYQjBhRk4wWlc1amFXd2dQU0J2Y0hScGIyNXpMbVJsY0hSb1UzUmxibU5wYkNCOGZDQnVkV3hzTzF4dVhHNGdJQ0FnZEdocGN5NWZaMnhKUkNBOUlHUmxkbWxqWlM1Zloyd3VZM0psWVhSbFJuSmhiV1ZpZFdabVpYSW9LVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCQWJXVjBhRzlrSUdSbGMzUnliM2xjYmlBZ0lDb3ZYRzRnSUdSbGMzUnliM2tvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11WDJkc1NVUWdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0oxUm9aU0JtY21GdFpTMWlkV1ptWlhJZ1lXeHlaV0ZrZVNCa1pYTjBjbTk1WldRbktUdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQm5iQ0E5SUhSb2FYTXVYMlJsZG1salpTNWZaMnc3WEc1Y2JpQWdJQ0JuYkM1a1pXeGxkR1ZHY21GdFpXSjFabVpsY2loMGFHbHpMbDluYkVsRUtUdGNibHh1SUNBZ0lIUm9hWE11WDJkc1NVUWdQU0J1ZFd4c08xeHVJQ0I5WEc1OUlsMTkiXX0=