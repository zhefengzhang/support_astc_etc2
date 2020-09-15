(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/Texture2D.js';
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
        var Texture2D = function Texture2D(device, options) {
            this._device = device;
            this._width = 4;
            this._height = 4;
            this._image = null;
            if (options) {
                if (options.width !== undefined) {
                    this._width = options.width;
                }
                if (options.height !== undefined) {
                    this._height = options.height;
                }
                this.updateImage(options);
            }
        };
        Texture2D.prototype.update = function update(options) {
            this.updateImage(options);
        };
        Texture2D.prototype.updateImage = function updateImage(options) {
            if (options.images && options.images[0]) {
                var image = options.images[0];
                if (image && image !== this._image) {
                    this._image = image;
                }
            }
        };
        Texture2D.prototype.destroy = function destroy() {
            this._image = null;
        };
        module.exports = Texture2D;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHR1cmUyRC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvY2FudmFzL1RleHR1cmUyRC5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJUZXh0dXJlMkQiLCJvcHRpb25zIiwiX2RldmljZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJfaW1hZ2UiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsInVwZGF0ZUltYWdlIiwicHJvdG90eXBlIiwidXBkYXRlIiwiaW1hZ2VzIiwiaW1hZ2UiLCJkZXN0cm95IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUNBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOztJQUVnQixJQUFBLFVBQUEsR0FBbUJBLHNEQUFuQjtJQUNDQSxJQUFmLFNBQUEsR0FBQSxPQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFBQSxnQ0FBQTtBQUFBLEtBQUEsR0FFQSxVQUFBLE9BQUEsRUFBQTtBQUFBLFFBQ0EsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBLENBREE7QUFBQSxLQUZlQTtJQUtmLFNBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7O1NBQUE7QUFBQTtRQU5GLElBQUlDLFNBQUFBLEdBQVksU0FBU0EsU0FBVCxDQUFtQkQsTUFBbkIsRUFBMkJFLE9BQTNCLEVBQW9DO0FBQUEsWUFDbEQsS0FBS0MsT0FBTCxHQUFlSCxNQUFmLENBRGtEO0FBQUEsWUFHbEQsS0FBS0ksTUFBTCxHQUFjLENBQWQsQ0FIa0Q7QUFBQSxZQUlsRCxLQUFLQyxPQUFMLEdBQWUsQ0FBZixDQUprRDtBQUFBLFlBTWxELEtBQUtDLE1BQUwsR0FBYyxJQUFkLENBTmtEO0FBQUEsWUFRbEQsSUFBSUosT0FBSixFQUFhO0FBQUEsZ0JBQ1gsSUFBSUEsT0FBQUEsQ0FBUUssS0FBUkwsS0FBa0JNLFNBQXRCLEVBQWlDO0FBQUEsb0JBQy9CLEtBQUtKLE1BQUwsR0FBY0YsT0FBQUEsQ0FBUUssS0FBdEIsQ0FEK0I7QUFBQSxpQkFEdEI7QUFBQSxnQkFJWCxJQUFJTCxPQUFBQSxDQUFRTyxNQUFSUCxLQUFtQk0sU0FBdkIsRUFBa0M7QUFBQSxvQkFDaEMsS0FBS0gsT0FBTCxHQUFlSCxPQUFBQSxDQUFRTyxNQUF2QixDQURnQztBQUFBLGlCQUp2QjtBQUFBLGdCQVFYLEtBQUtDLFdBQUwsQ0FBaUJSLE9BQWpCLEVBUlc7QUFBQSxhQVJxQztBQUFBLFNBQXBEO1FBb0JBRCxTQUFBQSxDQUFVVSxTQUFWVixDQUFvQlcsTUFBcEJYLEdBQTZCLFNBQVNXLE1BQVQsQ0FBaUJWLE9BQWpCLEVBQTBCO0FBQUEsWUFDckQsS0FBS1EsV0FBTCxDQUFpQlIsT0FBakIsRUFEcUQ7QUFBQSxTQUF2REQ7UUFJQUEsU0FBQUEsQ0FBVVUsU0FBVlYsQ0FBb0JTLFdBQXBCVCxHQUFrQyxTQUFTUyxXQUFULENBQXNCUixPQUF0QixFQUErQjtBQUFBLFlBQy9ELElBQUlBLE9BQUFBLENBQVFXLE1BQVJYLElBQWtCQSxPQUFBQSxDQUFRVyxNQUFSWCxDQUFlLENBQWZBLENBQXRCLEVBQXlDO0FBQUEsZ0JBQ3ZDLElBQUlZLEtBQUFBLEdBQVFaLE9BQUFBLENBQVFXLE1BQVJYLENBQWUsQ0FBZkEsQ0FBWixDQUR1QztBQUFBLGdCQUV2QyxJQUFJWSxLQUFBQSxJQUFTQSxLQUFBQSxLQUFVLEtBQUtSLE1BQTVCLEVBQW9DO0FBQUEsb0JBQ2xDLEtBQUtBLE1BQUwsR0FBY1EsS0FBZCxDQURrQztBQUFBLGlCQUZHO0FBQUEsYUFEc0I7QUFBQSxTQUFqRWI7UUFTQUEsU0FBQUEsQ0FBVVUsU0FBVlYsQ0FBb0JjLE9BQXBCZCxHQUE4QixTQUFTYyxPQUFULEdBQW9CO0FBQUEsWUFDaEQsS0FBS1QsTUFBTCxHQUFjLElBQWQsQ0FEZ0Q7QUFBQSxTQUFsREw7UUFJQWUsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJmLFNBQWpCZSxDQS9CRTtBQUFBO0lBR2NULElBQVIsT0FBUUEsRUFBVUM7QUFBQUEsUUFDTk4sUUFBQUEsQ0FBZCxRQUFBLENBQUEsT0FBY0EsRUFBZCxTQUFjQSxFQUFkLFFBQWNBLEVBRE1NO0FBQUFBLEtBQVZELE1BR1I7QUFBQSxRQUNhTCxpQkFBQUEsQ0FBZixrQkFBZUEsQ0FBZixVQUFlQSxFQUFmLFlBQUE7QUFBQSxZQUNELFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBREM7QUFBQSxTQUFlQSxFQURiO0FBQUEiLCJmaWxlIjoiVGV4dHVyZTJELmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gIFxuIFxudmFyIFRleHR1cmUyRCA9IGZ1bmN0aW9uIFRleHR1cmUyRChkZXZpY2UsIG9wdGlvbnMpIHtcbiAgdGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuICAgIFxuICB0aGlzLl93aWR0aCA9IDQ7XG4gIHRoaXMuX2hlaWdodCA9IDQ7XG5cbiAgdGhpcy5faW1hZ2UgPSBudWxsO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVJbWFnZShvcHRpb25zKTtcbiAgfVxufTtcblxuVGV4dHVyZTJELnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG9wdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVJbWFnZShvcHRpb25zKTtcbn07XG5cblRleHR1cmUyRC5wcm90b3R5cGUudXBkYXRlSW1hZ2UgPSBmdW5jdGlvbiB1cGRhdGVJbWFnZSAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pbWFnZXMgJiYgb3B0aW9ucy5pbWFnZXNbMF0pIHtcbiAgICB2YXIgaW1hZ2UgPSBvcHRpb25zLmltYWdlc1swXTtcbiAgICBpZiAoaW1hZ2UgJiYgaW1hZ2UgIT09IHRoaXMuX2ltYWdlKSB7XG4gICAgICB0aGlzLl9pbWFnZSA9IGltYWdlO1xuICAgIH1cbiAgfVxufTtcblxuVGV4dHVyZTJELnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuX2ltYWdlID0gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZTJEO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiAgXG5cbnZhciBUZXh0dXJlMkQgPSBmdW5jdGlvbiBUZXh0dXJlMkQoZGV2aWNlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2RldmljZSA9IGRldmljZTtcblxuICB0aGlzLl93aWR0aCA9IDQ7XG4gIHRoaXMuX2hlaWdodCA9IDQ7XG5cbiAgdGhpcy5faW1hZ2UgPSBudWxsO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVJbWFnZShvcHRpb25zKTtcbiAgfVxufTtcblxuVGV4dHVyZTJELnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUob3B0aW9ucykge1xuICB0aGlzLnVwZGF0ZUltYWdlKG9wdGlvbnMpO1xufTtcblxuVGV4dHVyZTJELnByb3RvdHlwZS51cGRhdGVJbWFnZSA9IGZ1bmN0aW9uIHVwZGF0ZUltYWdlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaW1hZ2VzICYmIG9wdGlvbnMuaW1hZ2VzWzBdKSB7XG4gICAgdmFyIGltYWdlID0gb3B0aW9ucy5pbWFnZXNbMF07XG4gICAgaWYgKGltYWdlICYmIGltYWdlICE9PSB0aGlzLl9pbWFnZSkge1xuICAgICAgdGhpcy5faW1hZ2UgPSBpbWFnZTtcbiAgICB9XG4gIH1cbn07XG5cblRleHR1cmUyRC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuX2ltYWdlID0gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZTJEO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxSbGVIUjFjbVV5UkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpVWlhoMGRYSmxNa1FpTENKa1pYWnBZMlVpTENKdmNIUnBiMjV6SWl3aVgyUmxkbWxqWlNJc0lsOTNhV1IwYUNJc0lsOW9aV2xuYUhRaUxDSmZhVzFoWjJVaUxDSjNhV1IwYUNJc0luVnVaR1ZtYVc1bFpDSXNJbWhsYVdkb2RDSXNJblZ3WkdGMFpVbHRZV2RsSWl3aWNISnZkRzkwZVhCbElpd2lkWEJrWVhSbElpd2lhVzFoWjJWeklpd2lhVzFoWjJVaUxDSmtaWE4wY205NUlpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkRRVHM3UVVGRlFTeEpRVUZKUVN4WlFVRlpMRk5CUVZOQkxGTkJRVlFzUTBGQmJVSkRMRTFCUVc1Q0xFVkJRVEpDUXl4UFFVRXpRaXhGUVVGdlF6dEJRVU5zUkN4UFFVRkxReXhQUVVGTUxFZEJRV1ZHTEUxQlFXWTdPMEZCUlVFc1QwRkJTMGNzVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVN4UFFVRkxReXhQUVVGTUxFZEJRV1VzUTBGQlpqczdRVUZGUVN4UFFVRkxReXhOUVVGTUxFZEJRV01zU1VGQlpEczdRVUZGUVN4TlFVRkpTaXhQUVVGS0xFVkJRV0U3UVVGRFdDeFJRVUZKUVN4UlFVRlJTeXhMUVVGU0xFdEJRV3RDUXl4VFFVRjBRaXhGUVVGcFF6dEJRVU12UWl4WFFVRkxTaXhOUVVGTUxFZEJRV05HTEZGQlFWRkxMRXRCUVhSQ08wRkJRMFE3UVVGRFJDeFJRVUZKVEN4UlFVRlJUeXhOUVVGU0xFdEJRVzFDUkN4VFFVRjJRaXhGUVVGclF6dEJRVU5vUXl4WFFVRkxTQ3hQUVVGTUxFZEJRV1ZJTEZGQlFWRlBMRTFCUVhaQ08wRkJRMFE3TzBGQlJVUXNVMEZCUzBNc1YwRkJUQ3hEUVVGcFFsSXNUMEZCYWtJN1FVRkRSRHRCUVVOR0xFTkJiRUpFT3p0QlFXOUNRVVlzVlVGQlZWY3NVMEZCVml4RFFVRnZRa01zVFVGQmNFSXNSMEZCTmtJc1UwRkJVMEVzVFVGQlZDeERRVUZwUWxZc1QwRkJha0lzUlVGQk1FSTdRVUZEY2tRc1QwRkJTMUVzVjBGQlRDeERRVUZwUWxJc1QwRkJha0k3UVVGRFJDeERRVVpFT3p0QlFVbEJSaXhWUVVGVlZ5eFRRVUZXTEVOQlFXOUNSQ3hYUVVGd1FpeEhRVUZyUXl4VFFVRlRRU3hYUVVGVUxFTkJRWE5DVWl4UFFVRjBRaXhGUVVFclFqdEJRVU12UkN4TlFVRkpRU3hSUVVGUlZ5eE5RVUZTTEVsQlFXdENXQ3hSUVVGUlZ5eE5RVUZTTEVOQlFXVXNRMEZCWml4RFFVRjBRaXhGUVVGNVF6dEJRVU4yUXl4UlFVRkpReXhSUVVGUldpeFJRVUZSVnl4TlFVRlNMRU5CUVdVc1EwRkJaaXhEUVVGYU8wRkJRMEVzVVVGQlNVTXNVMEZCVTBFc1ZVRkJWU3hMUVVGTFVpeE5RVUUxUWl4RlFVRnZRenRCUVVOc1F5eFhRVUZMUVN4TlFVRk1MRWRCUVdOUkxFdEJRV1E3UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZRUkRzN1FVRlRRV1FzVlVGQlZWY3NVMEZCVml4RFFVRnZRa2tzVDBGQmNFSXNSMEZCT0VJc1UwRkJVMEVzVDBGQlZDeEhRVUZ2UWp0QlFVTm9SQ3hQUVVGTFZDeE5RVUZNTEVkQlFXTXNTVUZCWkR0QlFVTkVMRU5CUmtRN08wRkJTVUZWTEU5QlFVOURMRTlCUVZBc1IwRkJhVUpxUWl4VFFVRnFRaUlzSW1acGJHVWlPaUpVWlhoMGRYSmxNa1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmNiaTh2SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlBZ1hHNGdYRzUyWVhJZ1ZHVjRkSFZ5WlRKRUlEMGdablZ1WTNScGIyNGdWR1Y0ZEhWeVpUSkVLR1JsZG1salpTd2diM0IwYVc5dWN5a2dlMXh1SUNCMGFHbHpMbDlrWlhacFkyVWdQU0JrWlhacFkyVTdYRzRnSUNBZ1hHNGdJSFJvYVhNdVgzZHBaSFJvSUQwZ05EdGNiaUFnZEdocGN5NWZhR1ZwWjJoMElEMGdORHRjYmx4dUlDQjBhR2x6TGw5cGJXRm5aU0E5SUc1MWJHdzdYRzVjYmlBZ2FXWWdLRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTUzYVdSMGFDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDkzYVdSMGFDQTlJRzl3ZEdsdmJuTXVkMmxrZEdnN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1obGFXZG9kQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5b1pXbG5hSFFnUFNCdmNIUnBiMjV6TG1obGFXZG9kRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG5Wd1pHRjBaVWx0WVdkbEtHOXdkR2x2Ym5NcE8xeHVJQ0I5WEc1OU8xeHVYRzVVWlhoMGRYSmxNa1F1Y0hKdmRHOTBlWEJsTG5Wd1pHRjBaU0E5SUdaMWJtTjBhVzl1SUhWd1pHRjBaU0FvYjNCMGFXOXVjeWtnZTF4dUlDQjBhR2x6TG5Wd1pHRjBaVWx0WVdkbEtHOXdkR2x2Ym5NcE8xeHVmVHRjYmx4dVZHVjRkSFZ5WlRKRUxuQnliM1J2ZEhsd1pTNTFjR1JoZEdWSmJXRm5aU0E5SUdaMWJtTjBhVzl1SUhWd1pHRjBaVWx0WVdkbElDaHZjSFJwYjI1ektTQjdYRzRnSUdsbUlDaHZjSFJwYjI1ekxtbHRZV2RsY3lBbUppQnZjSFJwYjI1ekxtbHRZV2RsYzFzd1hTa2dlMXh1SUNBZ0lIWmhjaUJwYldGblpTQTlJRzl3ZEdsdmJuTXVhVzFoWjJWeld6QmRPMXh1SUNBZ0lHbG1JQ2hwYldGblpTQW1KaUJwYldGblpTQWhQVDBnZEdocGN5NWZhVzFoWjJVcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJsdFlXZGxJRDBnYVcxaFoyVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVVWlhoMGRYSmxNa1F1Y0hKdmRHOTBlWEJsTG1SbGMzUnliM2tnUFNCbWRXNWpkR2x2YmlCa1pYTjBjbTk1SUNncElIdGNiaUFnZEdocGN5NWZhVzFoWjJVZ1BTQnVkV3hzTzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JVWlhoMGRYSmxNa1E3WEc0aVhYMD0iXX0=