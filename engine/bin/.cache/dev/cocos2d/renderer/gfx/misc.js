(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/misc.js';
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
        exports.isPow2 = isPow2;
        function isPow2(v) {
            return !(v & v - 1) && !!v;
        }
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2MuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9nZngvbWlzYy5qcyJdLCJuYW1lcyI6WyJpc1BvdzIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7O0lBQWdCQTtRQUFVLE9BQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTtRQUNqQixVQUFQLE9BQU8sRUFBUDtBQUFBLFFBQ0QsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBLENBREM7QUFBQSxLQURjQTs7Ozs7OztnQkFBQUEsU0FBQUE7UUFBVCxTQUFTQSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUFBLFlBQ3hCLE9BQU8sQ0FBRUEsQ0FBQUEsQ0FBQUEsR0FBS0EsQ0FBQUEsR0FBSSxDQUFUQSxDQUFGLElBQW1CLENBQUMsQ0FBQ0EsQ0FBNUIsQ0FEd0I7QUFBQSIsImZpbGUiOiJtaXNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzUG93Mih2KSB7XG4gIHJldHVybiAhKHYgJiAodiAtIDEpKSAmJiAoISF2KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNQb3cyID0gaXNQb3cyO1xuZnVuY3Rpb24gaXNQb3cyKHYpIHtcbiAgcmV0dXJuICEodiAmIHYgLSAxKSAmJiAhIXY7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFwYzJNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYVhOUWIzY3lJaXdpZGlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1VVRkJaMEpCTEUwc1IwRkJRVUVzVFR0QlFVRlVMRk5CUVZOQkxFMUJRVlFzUTBGQlowSkRMRU5CUVdoQ0xFVkJRVzFDTzBGQlEzaENMRk5CUVU4c1JVRkJSVUVzU1VGQlMwRXNTVUZCU1N4RFFVRllMRXRCUVcxQ0xFTkJRVU1zUTBGQlEwRXNRMEZCTlVJN1FVRkRSQ0lzSW1acGJHVWlPaUp0YVhOakxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6VUc5M01paDJLU0I3WEc0Z0lISmxkSFZ5YmlBaEtIWWdKaUFvZGlBdElERXBLU0FtSmlBb0lTRjJLVHRjYm4waVhYMD0iXX0=