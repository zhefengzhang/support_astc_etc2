(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/primitive/cone.js';
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
        exports.default = function () {
            var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return (0, _cylinder2.default)(0, radius, height, opts);
        };
        var _cylinder = require('./cylinder');
        var _cylinder2 = _interopRequireDefault(_cylinder);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmUuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9jb3JlLzNkL3ByaW1pdGl2ZS9jb25lLmpzIl0sIm5hbWVzIjpbInJhZGl1cyIsImhlaWdodCIsIm9wdHMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWUsT0FBK0MsT0FBQSxDQUFBLE9BQUEsQ0FBL0M7UUFBK0MsVUFBQSxPQUFBLEVBQUE7QUFBQSxRQUFBLE9BQUEsaUJBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsQ0FBQSxDQUFBO0FBQUE7O1FBQ3JELElBQUEsQ0FBQSxPQUFBLEVBQVlBO0FBQUFBLFlBQUFBLGlCQUFBQSxDQUFuQixjQUFtQkEsQ0FBbkIsVUFBbUJBLEVBQW5CLE1BQW1CQSxFQUFBQTtBQUFBQTtRQWRyQjtBQUFBLHNFQUFBO0FBQUEsMEJBYWUsWUFBK0M7QUFBQSxZQUFBLElBQXJDQSxNQUFBQSxHQUFxQyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQTVCLEdBQTRCLENBQUE7QUFBQSxZQUFBLElBQXZCQyxNQUFBQSxHQUF1QixTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQWQsQ0FBYyxDQUFBO0FBQUEsWUFBQSxJQUFYQyxJQUFBQSxHQUFXLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBSixFQUFJLENBQUE7QUFBQSxZQUM1RCxPQUFPLElBQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFTLENBQVQsRUFBWUYsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEJDLElBQTVCLENBQVAsQ0FENEQ7QUFBQSxVQWI5RDtBQUFBLFFBRUEsSUFBQSxTQUFBLEdBQUEsT0FBQSxDQUFBLFlBQUEsQ0FBQSxDQUZBO0FBQUEsMkRBQUE7QUFBQTs7U0FBQTtBQUFBOzs7UUFFQSxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSIsImZpbGUiOiJjb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3lsaW5kZXIgZnJvbSAnLi9jeWxpbmRlcic7XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0cy5oZWlnaHRTZWdtZW50c1xuICogQHBhcmFtIHtCb29sZWFufSBvcHRzLmNhcHBlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyYWRpdXMgPSAwLjUsIGhlaWdodCA9IDEsIG9wdHMgPSB7fSkge1xuICByZXR1cm4gY3lsaW5kZXIoMCwgcmFkaXVzLCBoZWlnaHQsIG9wdHMpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYWRpdXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDAuNTtcbiAgdmFyIGhlaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIHJldHVybiAoMCwgX2N5bGluZGVyMi5kZWZhdWx0KSgwLCByYWRpdXMsIGhlaWdodCwgb3B0cyk7XG59O1xuXG52YXIgX2N5bGluZGVyID0gcmVxdWlyZSgnLi9jeWxpbmRlcicpO1xuXG52YXIgX2N5bGluZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N5bGluZGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0cy5oZWlnaHRTZWdtZW50c1xuICogQHBhcmFtIHtCb29sZWFufSBvcHRzLmNhcHBlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltTnZibVV1YW5NaVhTd2libUZ0WlhNaU9sc2ljbUZrYVhWeklpd2lhR1ZwWjJoMElpd2liM0IwY3lKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenRyUWtGaFpTeFpRVUVyUXp0QlFVRkJMRTFCUVhKRFFTeE5RVUZ4UXl4MVJVRkJOVUlzUjBGQk5FSTdRVUZCUVN4TlFVRjJRa01zVFVGQmRVSXNkVVZCUVdRc1EwRkJZenRCUVVGQkxFMUJRVmhETEVsQlFWY3NkVVZCUVVvc1JVRkJTVHM3UVVGRE5VUXNVMEZCVHl4M1FrRkJVeXhEUVVGVUxFVkJRVmxHTEUxQlFWb3NSVUZCYjBKRExFMUJRWEJDTEVWQlFUUkNReXhKUVVFMVFpeERRVUZRTzBGQlEwUXNRenM3UVVGaVJEczdPenM3T3pzN1FVRkZRU0lzSW1acGJHVWlPaUpqYjI1bExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVwYlhCdmNuUWdZM2xzYVc1a1pYSWdabkp2YlNBbkxpOWplV3hwYm1SbGNpYzdYRzVjYmk4cUtseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJSEpoWkdsMWMxeHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR2hsYVdkb2RGeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzl3ZEhOY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnZjSFJ6TG5KaFpHbGhiRk5sWjIxbGJuUnpYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NW9aV2xuYUhSVFpXZHRaVzUwYzF4dUlDb2dRSEJoY21GdElIdENiMjlzWldGdWZTQnZjSFJ6TG1OaGNIQmxaRnh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUc5d2RITXVZWEpqWEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaHlZV1JwZFhNZ1BTQXdMalVzSUdobGFXZG9kQ0E5SURFc0lHOXdkSE1nUFNCN2ZTa2dlMXh1SUNCeVpYUjFjbTRnWTNsc2FXNWtaWElvTUN3Z2NtRmthWFZ6TENCb1pXbG5hSFFzSUc5d2RITXBPMXh1ZlZ4dUlsMTkiXX0=