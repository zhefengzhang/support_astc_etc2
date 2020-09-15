(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/render-data/base-render-data.js';
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var BaseRenderData = function BaseRenderData() {
            _classCallCheck(this, BaseRenderData);
            this.material = null;
            this.vertexCount = 0;
            this.indiceCount = 0;
        };
        exports.default = BaseRenderData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtcmVuZGVyLWRhdGEuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9yZW5kZXItZGF0YS9iYXNlLXJlbmRlci1kYXRhLmpzIl0sIm5hbWVzIjpbIkJhc2VSZW5kZXJEYXRhIiwibWF0ZXJpYWwiLCJ2ZXJ0ZXhDb3VudCIsImluZGljZUNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBQUEsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBOztJQUVBLFNBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7O1NBQUE7QUFBQTs7Ozs7OztZQUtxQkEsY0FBQUEsR0FDbkIsU0FBQSxjQUFBLEdBQWU7QUFBQSxZQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsY0FBQSxFQUFBO0FBQUEsWUFDWCxLQUFLQyxRQUFMLEdBQWdCLElBQWhCLENBRFc7QUFBQSxZQUVYLEtBQUtDLFdBQUwsR0FBbUIsQ0FBbkIsQ0FGVztBQUFBLFlBR1gsS0FBS0MsV0FBTCxHQUFtQixDQUFuQixDQUhXO0FBQUE7MEJBRElIOzRDQUxyQjtBQUFBOzs7V0FNaUI7QUFBQTtZQUNYLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBO1dBRFc7QUFBQSIsImZpbGUiOiJiYXNlLXJlbmRlci1kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiAgXG5cbi8qKlxuICogQmFzZVJlbmRlckRhdGEgaXMgYSBjb3JlIGRhdGEgYWJzdHJhY3Rpb24gZm9yIHJlbmRlcmVyLCB0aGlzIGlzIGEgYWJzdHJhY3QgY2xhc3MuXG4gKiBBbiBpbmhlcml0ZWQgcmVuZGVyIGRhdGEgdHlwZSBzaG91bGQgZGVmaW5lIHJhdyB2ZXJ0ZXggZGF0YXMuXG4gKiBVc2VyIHNob3VsZCBhbHNvIGRlZmluZSB0aGUgZWZmZWN0LCB2ZXJ0ZXggY291bnQgYW5kIGluZGV4IGNvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUmVuZGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xuICAgICAgdGhpcy52ZXJ0ZXhDb3VudCA9IDA7XG4gICAgICB0aGlzLmluZGljZUNvdW50ID0gMDtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuICBcblxuLyoqXG4gKiBCYXNlUmVuZGVyRGF0YSBpcyBhIGNvcmUgZGF0YSBhYnN0cmFjdGlvbiBmb3IgcmVuZGVyZXIsIHRoaXMgaXMgYSBhYnN0cmFjdCBjbGFzcy5cbiAqIEFuIGluaGVyaXRlZCByZW5kZXIgZGF0YSB0eXBlIHNob3VsZCBkZWZpbmUgcmF3IHZlcnRleCBkYXRhcy5cbiAqIFVzZXIgc2hvdWxkIGFsc28gZGVmaW5lIHRoZSBlZmZlY3QsIHZlcnRleCBjb3VudCBhbmQgaW5kZXggY291bnQuXG4gKi9cbnZhciBCYXNlUmVuZGVyRGF0YSA9IGZ1bmN0aW9uIEJhc2VSZW5kZXJEYXRhKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZVJlbmRlckRhdGEpO1xuXG4gIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xuICB0aGlzLnZlcnRleENvdW50ID0gMDtcbiAgdGhpcy5pbmRpY2VDb3VudCA9IDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXNlUmVuZGVyRGF0YTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUpoYzJVdGNtVnVaR1Z5TFdSaGRHRXVhbk1pWFN3aWJtRnRaWE1pT2xzaVFtRnpaVkpsYm1SbGNrUmhkR0VpTENKdFlYUmxjbWxoYkNJc0luWmxjblJsZUVOdmRXNTBJaXdpYVc1a2FXTmxRMjkxYm5RaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPMEZCUVVFN08wRkJSVUU3T3pzN08wbEJTM0ZDUVN4akxFZEJRMjVDTERCQ1FVRmxPMEZCUVVFN08wRkJRMWdzVDBGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEU5QlFVdERMRmRCUVV3c1IwRkJiVUlzUTBGQmJrSTdRVUZEUVN4UFFVRkxReXhYUVVGTUxFZEJRVzFDTEVOQlFXNUNPMEZCUTBnc1F6czdhMEpCVEd0Q1NDeGpJaXdpWm1sc1pTSTZJbUpoYzJVdGNtVnVaR1Z5TFdSaGRHRXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkRiM0I1Y21sbmFIUWdLR01wSURJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUNCY2JseHVMeW9xWEc0Z0tpQkNZWE5sVW1WdVpHVnlSR0YwWVNCcGN5QmhJR052Y21VZ1pHRjBZU0JoWW5OMGNtRmpkR2x2YmlCbWIzSWdjbVZ1WkdWeVpYSXNJSFJvYVhNZ2FYTWdZU0JoWW5OMGNtRmpkQ0JqYkdGemN5NWNiaUFxSUVGdUlHbHVhR1Z5YVhSbFpDQnlaVzVrWlhJZ1pHRjBZU0IwZVhCbElITm9iM1ZzWkNCa1pXWnBibVVnY21GM0lIWmxjblJsZUNCa1lYUmhjeTVjYmlBcUlGVnpaWElnYzJodmRXeGtJR0ZzYzI4Z1pHVm1hVzVsSUhSb1pTQmxabVpsWTNRc0lIWmxjblJsZUNCamIzVnVkQ0JoYm1RZ2FXNWtaWGdnWTI5MWJuUXVYRzRnS2k5Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUpoYzJWU1pXNWtaWEpFWVhSaElIdGNiaUFnWTI5dWMzUnlkV04wYjNJZ0tDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYUmxjbWxoYkNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0IwYUdsekxuWmxjblJsZUVOdmRXNTBJRDBnTUR0Y2JpQWdJQ0FnSUhSb2FYTXVhVzVrYVdObFEyOTFiblFnUFNBd08xeHVJQ0I5WEc1OUlsMTkiXX0=