(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/vmath/utils.js';
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
        exports.equals = equals;
        exports.approx = approx;
        exports.clamp = clamp;
        exports.clamp01 = clamp01;
        exports.lerp = lerp;
        exports.toRadian = toRadian;
        exports.toDegree = toDegree;
        exports.randomRange = randomRange;
        exports.randomRangeInt = randomRangeInt;
        exports.pseudoRandom = pseudoRandom;
        exports.pseudoRandomRange = pseudoRandomRange;
        exports.pseudoRandomRangeInt = pseudoRandomRangeInt;
        exports.nextPow2 = nextPow2;
        exports.repeat = repeat;
        exports.pingPong = pingPong;
        exports.inverseLerp = inverseLerp;
        var _d2r = Math.PI / 180;
        var _r2d = 180 / Math.PI;
        var EPSILON = exports.EPSILON = 0.000001;
        function equals(a, b) {
            return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
        }
        function approx(a, b, maxDiff) {
            maxDiff = maxDiff || EPSILON;
            return Math.abs(a - b) <= maxDiff;
        }
        function clamp(val, min, max) {
            return val < min ? min : val > max ? max : val;
        }
        function clamp01(val) {
            return val < 0 ? 0 : val > 1 ? 1 : val;
        }
        function lerp(from, to, ratio) {
            return from + (to - from) * ratio;
        }
        function toRadian(a) {
            return a * _d2r;
        }
        function toDegree(a) {
            return a * _r2d;
        }
        var random = exports.random = Math.random;
        function randomRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        function randomRangeInt(min, max) {
            return Math.floor(randomRange(min, max));
        }
        function pseudoRandom(seed) {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        }
        function pseudoRandomRange(seed, min, max) {
            return pseudoRandom(seed) * (max - min) + min;
        }
        function pseudoRandomRangeInt(seed, min, max) {
            return Math.floor(pseudoRandomRange(seed, min, max));
        }
        function nextPow2(val) {
            --val;
            val = val >> 1 | val;
            val = val >> 2 | val;
            val = val >> 4 | val;
            val = val >> 8 | val;
            val = val >> 16 | val;
            ++val;
            return val;
        }
        function repeat(t, length) {
            return t - Math.floor(t / length) * length;
        }
        function pingPong(t, length) {
            t = repeat(t, length * 2);
            t = length - Math.abs(t - length);
            return t;
        }
        function inverseLerp(from, to, value) {
            return (value - from) / (to - from);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS92bWF0aC91dGlscy5qcyJdLCJuYW1lcyI6WyJlcXVhbHMiLCJjbGFtcDAxIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImFwcHJveCIsImNsYW1wIiwibGVycCIsInJhbmRvbVJhbmdlIiwicmFuZG9tUmFuZ2VJbnQiLCJwc2V1ZG9SYW5kb20iLCJwc2V1ZG9SYW5kb21SYW5nZSIsInBzZXVkb1JhbmRvbVJhbmdlSW50IiwibmV4dFBvdzIiLCJyZXBlYXQiLCJwaW5nUG9uZyIsImludmVyc2VMZXJwIiwiX2QyciIsIk1hdGgiLCJQSSIsIl9yMmQiLCJFUFNJTE9OIiwiYSIsImIiLCJhYnMiLCJtYXgiLCJtYXhEaWZmIiwidmFsIiwibWluIiwiZnJvbSIsInRvIiwicmF0aW8iLCJyYW5kb20iLCJmbG9vciIsInNlZWQiLCJ0IiwibGVuZ3RoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7SUF1QmdCQTs7O1FBcUNBQyxxREFBQUE7S0FyQ0FEO0lBeURBRSxpQkFBQUEsUUFBQUEsU0FBQUEsUUFBQUE7UUFTQUMsWUFBQUE7Ozs7O2dCQWxFQUgsU0FBQUE7Z0JBWUFJLFNBQUFBO2dCQWNBQyxRQUFBQTtnQkFXQUosVUFBQUE7Z0JBV0FLLE9BQUFBO2dCQVNBSixXQUFBQTtnQkFTQUMsV0FBQUE7Z0JBaUJBSSxjQUFBQTtnQkFZQUMsaUJBQUFBO2dCQVdBQyxlQUFBQTtnQkFjQUMsb0JBQUFBO2dCQWFBQyx1QkFBQUE7Z0JBV0FDLFdBQUFBO2dCQW9CQUMsU0FBQUE7Z0JBWUFDLFdBQUFBO2dCQWVBQyxjQUFBQTtRQW5OaEIsSUFBTUMsSUFBQUEsR0FBT0MsSUFBQUEsQ0FBS0MsRUFBTEQsR0FBVSxHQUF2QjtRQUlBLElBQU1FLElBQUFBLEdBQU8sTUFBUUYsSUFBQUEsQ0FBS0MsRUFBMUI7UUFLTyxJQUFNRSxPQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxPQUFBQSxHQUFVLFFBQWhCO1FBV0EsU0FBU3BCLE1BQVQsQ0FBZ0JxQixDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFBQSxZQUMzQixPQUFPTCxJQUFBQSxDQUFLTSxHQUFMTixDQUFTSSxDQUFBQSxHQUFJQyxDQUFiTCxLQUFtQkcsT0FBQUEsR0FBVUgsSUFBQUEsQ0FBS08sR0FBTFAsQ0FBUyxDQUFUQSxFQUFjQSxJQUFBQSxDQUFLTSxHQUFMTixDQUFTSSxDQUFUSixDQUFkQSxFQUEyQkEsSUFBQUEsQ0FBS00sR0FBTE4sQ0FBU0ssQ0FBVEwsQ0FBM0JBLENBQXBDLENBRDJCO0FBQUE7UUFZdEIsU0FBU2IsTUFBVCxDQUFnQmlCLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkcsT0FBdEIsRUFBK0I7QUFBQSxZQUNwQ0EsT0FBQUEsR0FBVUEsT0FBQUEsSUFBV0wsT0FBckJLLENBRG9DO0FBQUEsWUFFcEMsT0FBT1IsSUFBQUEsQ0FBS00sR0FBTE4sQ0FBU0ksQ0FBQUEsR0FBSUMsQ0FBYkwsS0FBbUJRLE9BQTFCLENBRm9DO0FBQUE7UUFjL0IsU0FBU3BCLEtBQVQsQ0FBZXFCLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCSCxHQUF6QixFQUE4QjtBQUFBLFlBQ25DLE9BQU9FLEdBQUFBLEdBQU1DLEdBQU5ELEdBQVlDLEdBQVpELEdBQWtCQSxHQUFBQSxHQUFNRixHQUFORSxHQUFZRixHQUFaRSxHQUFrQkEsR0FBM0MsQ0FEbUM7QUFBQTtRQVc5QixTQUFTekIsT0FBVCxDQUFpQnlCLEdBQWpCLEVBQXNCO0FBQUEsWUFDM0IsT0FBT0EsR0FBQUEsR0FBTSxDQUFOQSxHQUFVLENBQVZBLEdBQWNBLEdBQUFBLEdBQU0sQ0FBTkEsR0FBVSxDQUFWQSxHQUFjQSxHQUFuQyxDQUQyQjtBQUFBO1FBV3RCLFNBQVNwQixJQUFULENBQWNzQixJQUFkLEVBQW9CQyxFQUFwQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFBQSxZQUNwQyxPQUFPRixJQUFBQSxHQUFRQyxDQUFBQSxFQUFBQSxHQUFLRCxJQUFMQyxDQUFELEdBQWNDLEtBQTVCLENBRG9DO0FBQUE7UUFTL0IsU0FBUzVCLFFBQVQsQ0FBa0JtQixDQUFsQixFQUFxQjtBQUFBLFlBQzFCLE9BQU9BLENBQUFBLEdBQUlMLElBQVgsQ0FEMEI7QUFBQTtRQVNyQixTQUFTYixRQUFULENBQWtCa0IsQ0FBbEIsRUFBcUI7QUFBQSxZQUMxQixPQUFPQSxDQUFBQSxHQUFJRixJQUFYLENBRDBCO0FBQUE7UUFPckIsSUFBTVksTUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsTUFBQUEsR0FBU2QsSUFBQUEsQ0FBS2MsTUFBcEI7UUFVQSxTQUFTeEIsV0FBVCxDQUFxQm9CLEdBQXJCLEVBQTBCSCxHQUExQixFQUErQjtBQUFBLFlBQ3BDLE9BQU9QLElBQUFBLENBQUtjLE1BQUxkLEtBQWlCTyxDQUFBQSxHQUFBQSxHQUFNRyxHQUFOSCxDQUFqQlAsR0FBOEJVLEdBQXJDLENBRG9DO0FBQUE7UUFZL0IsU0FBU25CLGNBQVQsQ0FBd0JtQixHQUF4QixFQUE2QkgsR0FBN0IsRUFBa0M7QUFBQSxZQUN2QyxPQUFPUCxJQUFBQSxDQUFLZSxLQUFMZixDQUFXVixXQUFBQSxDQUFZb0IsR0FBWnBCLEVBQWlCaUIsR0FBakJqQixDQUFYVSxDQUFQLENBRHVDO0FBQUE7UUFXbEMsU0FBU1IsWUFBVCxDQUFzQndCLElBQXRCLEVBQTRCO0FBQUEsWUFDakNBLElBQUFBLEdBQVFBLENBQUFBLElBQUFBLEdBQU8sSUFBUEEsR0FBYyxLQUFkQSxDQUFELEdBQXdCLE1BQS9CQSxDQURpQztBQUFBLFlBRWpDLE9BQU9BLElBQUFBLEdBQU8sTUFBZCxDQUZpQztBQUFBO1FBYzVCLFNBQVN2QixpQkFBVCxDQUEyQnVCLElBQTNCLEVBQWlDTixHQUFqQyxFQUFzQ0gsR0FBdEMsRUFBMkM7QUFBQSxZQUNoRCxPQUFPZixZQUFBQSxDQUFhd0IsSUFBYnhCLElBQXNCZSxDQUFBQSxHQUFBQSxHQUFNRyxHQUFOSCxDQUF0QmYsR0FBbUNrQixHQUExQyxDQURnRDtBQUFBO1FBYTNDLFNBQVNoQixvQkFBVCxDQUE4QnNCLElBQTlCLEVBQW9DTixHQUFwQyxFQUF5Q0gsR0FBekMsRUFBOEM7QUFBQSxZQUNuRCxPQUFPUCxJQUFBQSxDQUFLZSxLQUFMZixDQUFXUCxpQkFBQUEsQ0FBa0J1QixJQUFsQnZCLEVBQXdCaUIsR0FBeEJqQixFQUE2QmMsR0FBN0JkLENBQVhPLENBQVAsQ0FEbUQ7QUFBQTtRQVc5QyxTQUFTTCxRQUFULENBQWtCYyxHQUFsQixFQUF1QjtBQUFBLFlBQzVCLEVBQUVBLEdBQUYsQ0FENEI7QUFBQSxZQUU1QkEsR0FBQUEsR0FBT0EsR0FBQUEsSUFBTyxDQUFQQSxHQUFZQSxHQUFuQkEsQ0FGNEI7QUFBQSxZQUc1QkEsR0FBQUEsR0FBT0EsR0FBQUEsSUFBTyxDQUFQQSxHQUFZQSxHQUFuQkEsQ0FINEI7QUFBQSxZQUk1QkEsR0FBQUEsR0FBT0EsR0FBQUEsSUFBTyxDQUFQQSxHQUFZQSxHQUFuQkEsQ0FKNEI7QUFBQSxZQUs1QkEsR0FBQUEsR0FBT0EsR0FBQUEsSUFBTyxDQUFQQSxHQUFZQSxHQUFuQkEsQ0FMNEI7QUFBQSxZQU01QkEsR0FBQUEsR0FBT0EsR0FBQUEsSUFBTyxFQUFQQSxHQUFhQSxHQUFwQkEsQ0FONEI7QUFBQSxZQU81QixFQUFFQSxHQUFGLENBUDRCO0FBQUEsWUFTNUIsT0FBT0EsR0FBUCxDQVQ0QjtBQUFBO1FBb0J2QixTQUFTYixNQUFULENBQWdCcUIsQ0FBaEIsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQUEsWUFDaEMsT0FBT0QsQ0FBQUEsR0FBSWpCLElBQUFBLENBQUtlLEtBQUxmLENBQVdpQixDQUFBQSxHQUFJQyxNQUFmbEIsSUFBeUJrQixNQUFwQyxDQURnQztBQUFBO1FBWTNCLFNBQVNyQixRQUFULENBQWtCb0IsQ0FBbEIsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUEsWUFDbENELENBQUFBLEdBQUlyQixNQUFBQSxDQUFPcUIsQ0FBUHJCLEVBQVVzQixNQUFBQSxHQUFTLENBQW5CdEIsQ0FBSnFCLENBRGtDO0FBQUEsWUFFbENBLENBQUFBLEdBQUlDLE1BQUFBLEdBQVNsQixJQUFBQSxDQUFLTSxHQUFMTixDQUFTaUIsQ0FBQUEsR0FBSUMsTUFBYmxCLENBQWJpQixDQUZrQztBQUFBLFlBR2xDLE9BQU9BLENBQVAsQ0FIa0M7QUFBQTtRQWU3QixTQUFTbkIsV0FBVCxDQUFxQmEsSUFBckIsRUFBMkJDLEVBQTNCLEVBQStCTyxLQUEvQixFQUFzQztBQUFBLFlBQzNDLE9BQVFBLENBQUFBLEtBQUFBLEdBQVFSLElBQVJRLENBQUQsR0FBa0JQLENBQUFBLEVBQUFBLEdBQUtELElBQUxDLENBQXpCLENBRDJDO0FBQUE7O0lBaEc3QnJCLFdBQUFBLEVBQUFBO0FBQUFBLFFBV0FDLFFBQUFBLENBQUFBLFFBQUFBLFFBQUFBLFdBQUFBLFVBQUFBLEVBWEFEO0FBQUFBLEtBQUFBLE1Bc0NBRztBQUFBQSxRQVdBQyxpQkFBQUEsbUJBQUFBLFdBQUFBOztTQUFBQSxFQVhBRDtBQUFBQSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGlnbm9yZVxuICovXG5jb25zdCBfZDJyID0gTWF0aC5QSSAvIDE4MC4wO1xuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF9yMmQgPSAxODAuMCAvIE1hdGguUEk7XG5cbi8qKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEVQU0lMT05cbiAqL1xuZXhwb3J0IGNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDw9IEVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEpLCBNYXRoLmFicyhiKSk7XG59XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUgYnkgZ2l2ZW4gbWF4RGlmZlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCBudW1iZXIgdG8gdGVzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIHRlc3QuXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4RGlmZiBNYXhpbXVtIGRpZmZlcmVuY2UuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwcm94KGEsIGIsIG1heERpZmYpIHtcbiAgbWF4RGlmZiA9IG1heERpZmYgfHwgRVBTSUxPTjtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8PSBtYXhEaWZmO1xufVxuXG4vKipcbiAqIENsYW1wcyBhIHZhbHVlIGJldHdlZW4gYSBtaW5pbXVtIGZsb2F0IGFuZCBtYXhpbXVtIGZsb2F0IHZhbHVlLlxuICpcbiAqIEBtZXRob2QgY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIHZhbCA8IG1pbiA/IG1pbiA6IHZhbCA+IG1heCA/IG1heCA6IHZhbDtcbn1cblxuLyoqXG4gKiBDbGFtcHMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuXG4gKlxuICogQG1ldGhvZCBjbGFtcDAxXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcDAxKHZhbCkge1xuICByZXR1cm4gdmFsIDwgMCA/IDAgOiB2YWwgPiAxID8gMSA6IHZhbDtcbn1cblxuLyoqXG4gKiBAbWV0aG9kIGxlcnBcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tXG4gKiBAcGFyYW0ge251bWJlcn0gdG9cbiAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyAtIHRoZSBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGZyb20sIHRvLCByYXRpbykge1xuICByZXR1cm4gZnJvbSArICh0byAtIGZyb20pICogcmF0aW87XG59XG5cbi8qKlxuKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cbipcbiogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogX2Qycjtcbn1cblxuLyoqXG4qIENvbnZlcnQgUmFkaWFuIFRvIERlZ3JlZVxuKlxuKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBSYWRpYW5cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYSkge1xuICByZXR1cm4gYSAqIF9yMmQ7XG59XG5cbi8qKlxuKiBAbWV0aG9kIHJhbmRvbVxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZmxvYXRpbmctcG9pbnQgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpLlxuICpcbiAqIEBtZXRob2QgcmFuZG9tUmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHJhbmRvbSBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSkuXG4gKlxuICogQG1ldGhvZCByYW5kb21SYW5nZUludFxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcmFuZG9tIGludGVnZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbVJhbmdlKG1pbiwgbWF4KSk7XG59XG5cbi8qKlxuICogTGluZWFyIGNvbmdydWVudGlhbCBnZW5lcmF0b3IgdXNpbmcgSHVsbC1Eb2JlbGwgVGhlb3JlbS5cbiAqXG4gKiBAbWV0aG9kIHBzZXVkb1JhbmRvbVxuICogQHBhcmFtIHtudW1iZXJ9IHNlZWQgdGhlIHJhbmRvbSBzZWVkXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBwc2V1ZG8gcmFuZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9SYW5kb20oc2VlZCkge1xuICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICByZXR1cm4gc2VlZCAvIDIzMzI4MC4wO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmbG9hdGluZy1wb2ludCBwc2V1ZG8tcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpLlxuICpcbiAqIEBtZXRob2QgcHNldWRvUmFuZG9tUmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByYW5kb20gbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9SYW5kb21SYW5nZShzZWVkLCBtaW4sIG1heCkge1xuICByZXR1cm4gcHNldWRvUmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBzZXVkby1yYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpLlxuICpcbiAqIEBtZXRob2QgcHNldWRvUmFuZG9tUmFuZ2VJbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByYW5kb20gaW50ZWdlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcHNldWRvUmFuZG9tUmFuZ2VJbnQoc2VlZCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocHNldWRvUmFuZG9tUmFuZ2Uoc2VlZCwgbWluLCBtYXgpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHBvd2VyIG9mIHR3byBmb3IgdGhlIHZhbHVlXG4gKlxuICogQG1ldGhvZCBuZXh0UG93MlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgdGhlIG5leHQgcG93ZXIgb2YgdHdvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0UG93Mih2YWwpIHtcbiAgLS12YWw7XG4gIHZhbCA9ICh2YWwgPj4gMSkgfCB2YWw7XG4gIHZhbCA9ICh2YWwgPj4gMikgfCB2YWw7XG4gIHZhbCA9ICh2YWwgPj4gNCkgfCB2YWw7XG4gIHZhbCA9ICh2YWwgPj4gOCkgfCB2YWw7XG4gIHZhbCA9ICh2YWwgPj4gMTYpIHwgdmFsO1xuICArK3ZhbDtcblxuICByZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIFJldHVybnMgZmxvYXQgcmVtYWluZGVyIGZvciB0IC8gbGVuZ3RoXG4gKlxuICogQG1ldGhvZCByZXBlYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0IHRpbWUgc3RhcnQgYXQgMFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCB0aW1lIG9mIG9uZSBjeWNsZVxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgdGltZSB3cmFwcGVkIGluIHRoZSBmaXJzdCBjeWNsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHQsIGxlbmd0aCkge1xuICByZXR1cm4gdCAtIE1hdGguZmxvb3IodCAvIGxlbmd0aCkgKiBsZW5ndGg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aW1lIHdyYXBwZWQgaW4gcGluZy1wb25nIG1vZGVcbiAqXG4gKiBAbWV0aG9kIHJlcGVhdFxuICogQHBhcmFtIHtudW1iZXJ9IHQgdGltZSBzdGFydCBhdCAwXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIHRpbWUgb2Ygb25lIGN5Y2xlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB0aW1lIHdyYXBwZWQgaW4gdGhlIGZpcnN0IGN5Y2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaW5nUG9uZyh0LCBsZW5ndGgpIHtcbiAgdCA9IHJlcGVhdCh0LCBsZW5ndGggKiAyKTtcbiAgdCA9IGxlbmd0aCAtIE1hdGguYWJzKHQgLSBsZW5ndGgpO1xuICByZXR1cm4gdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHJhdGlvIG9mIGEgdmFsdWUgd2l0aGluIGEgZ2l2ZW4gcmFuZ2VcbiAqXG4gKiBAbWV0aG9kIHJlcGVhdFxuICogQHBhcmFtIHtudW1iZXJ9IGZyb20gc3RhcnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0byBlbmQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBnaXZlbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcmF0aW8gYmV0d2VlbiBbZnJvbSx0b11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2VMZXJwKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXF1YWxzID0gZXF1YWxzO1xuZXhwb3J0cy5hcHByb3ggPSBhcHByb3g7XG5leHBvcnRzLmNsYW1wID0gY2xhbXA7XG5leHBvcnRzLmNsYW1wMDEgPSBjbGFtcDAxO1xuZXhwb3J0cy5sZXJwID0gbGVycDtcbmV4cG9ydHMudG9SYWRpYW4gPSB0b1JhZGlhbjtcbmV4cG9ydHMudG9EZWdyZWUgPSB0b0RlZ3JlZTtcbmV4cG9ydHMucmFuZG9tUmFuZ2UgPSByYW5kb21SYW5nZTtcbmV4cG9ydHMucmFuZG9tUmFuZ2VJbnQgPSByYW5kb21SYW5nZUludDtcbmV4cG9ydHMucHNldWRvUmFuZG9tID0gcHNldWRvUmFuZG9tO1xuZXhwb3J0cy5wc2V1ZG9SYW5kb21SYW5nZSA9IHBzZXVkb1JhbmRvbVJhbmdlO1xuZXhwb3J0cy5wc2V1ZG9SYW5kb21SYW5nZUludCA9IHBzZXVkb1JhbmRvbVJhbmdlSW50O1xuZXhwb3J0cy5uZXh0UG93MiA9IG5leHRQb3cyO1xuZXhwb3J0cy5yZXBlYXQgPSByZXBlYXQ7XG5leHBvcnRzLnBpbmdQb25nID0gcGluZ1Bvbmc7XG5leHBvcnRzLmludmVyc2VMZXJwID0gaW52ZXJzZUxlcnA7XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xudmFyIF9kMnIgPSBNYXRoLlBJIC8gMTgwLjA7XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xudmFyIF9yMmQgPSAxODAuMCAvIE1hdGguUEk7XG5cbi8qKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEVQU0lMT05cbiAqL1xudmFyIEVQU0lMT04gPSBleHBvcnRzLkVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSBieSBnaXZlbiBtYXhEaWZmXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhEaWZmIE1heGltdW0gZGlmZmVyZW5jZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGFwcHJveChhLCBiLCBtYXhEaWZmKSB7XG4gIG1heERpZmYgPSBtYXhEaWZmIHx8IEVQU0lMT047XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gbWF4RGlmZjtcbn1cblxuLyoqXG4gKiBDbGFtcHMgYSB2YWx1ZSBiZXR3ZWVuIGEgbWluaW11bSBmbG9hdCBhbmQgbWF4aW11bSBmbG9hdCB2YWx1ZS5cbiAqXG4gKiBAbWV0aG9kIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIHZhbCA8IG1pbiA/IG1pbiA6IHZhbCA+IG1heCA/IG1heCA6IHZhbDtcbn1cblxuLyoqXG4gKiBDbGFtcHMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuXG4gKlxuICogQG1ldGhvZCBjbGFtcDAxXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNsYW1wMDEodmFsKSB7XG4gIHJldHVybiB2YWwgPCAwID8gMCA6IHZhbCA+IDEgPyAxIDogdmFsO1xufVxuXG4vKipcbiAqIEBtZXRob2QgbGVycFxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b1xuICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gdGhlIGludGVycG9sYXRpb24gY29lZmZpY2llbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gbGVycChmcm9tLCB0bywgcmF0aW8pIHtcbiAgcmV0dXJuIGZyb20gKyAodG8gLSBmcm9tKSAqIHJhdGlvO1xufVxuXG4vKipcbiogQ29udmVydCBEZWdyZWUgVG8gUmFkaWFuXG4qXG4qIEBwYXJhbSB7TnVtYmVyfSBhIEFuZ2xlIGluIERlZ3JlZXNcbiovXG5mdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogX2Qycjtcbn1cblxuLyoqXG4qIENvbnZlcnQgUmFkaWFuIFRvIERlZ3JlZVxuKlxuKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBSYWRpYW5cbiovXG5mdW5jdGlvbiB0b0RlZ3JlZShhKSB7XG4gIHJldHVybiBhICogX3IyZDtcbn1cblxuLyoqXG4qIEBtZXRob2QgcmFuZG9tXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gTWF0aC5yYW5kb207XG5cbi8qKlxuICogUmV0dXJucyBhIGZsb2F0aW5nLXBvaW50IHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKS5cbiAqXG4gKiBAbWV0aG9kIHJhbmRvbVJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByYW5kb20gbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSkuXG4gKlxuICogQG1ldGhvZCByYW5kb21SYW5nZUludFxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcmFuZG9tIGludGVnZXJcbiAqL1xuZnVuY3Rpb24gcmFuZG9tUmFuZ2VJbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tUmFuZ2UobWluLCBtYXgpKTtcbn1cblxuLyoqXG4gKiBMaW5lYXIgY29uZ3J1ZW50aWFsIGdlbmVyYXRvciB1c2luZyBIdWxsLURvYmVsbCBUaGVvcmVtLlxuICpcbiAqIEBtZXRob2QgcHNldWRvUmFuZG9tXG4gKiBAcGFyYW0ge251bWJlcn0gc2VlZCB0aGUgcmFuZG9tIHNlZWRcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHBzZXVkbyByYW5kb21cbiAqL1xuZnVuY3Rpb24gcHNldWRvUmFuZG9tKHNlZWQpIHtcbiAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgcmV0dXJuIHNlZWQgLyAyMzMyODAuMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZmxvYXRpbmctcG9pbnQgcHNldWRvLXJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKS5cbiAqXG4gKiBAbWV0aG9kIHBzZXVkb1JhbmRvbVJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gc2VlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcmFuZG9tIG51bWJlclxuICovXG5mdW5jdGlvbiBwc2V1ZG9SYW5kb21SYW5nZShzZWVkLCBtaW4sIG1heCkge1xuICByZXR1cm4gcHNldWRvUmFuZG9tKHNlZWQpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBzZXVkby1yYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpLlxuICpcbiAqIEBtZXRob2QgcHNldWRvUmFuZG9tUmFuZ2VJbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByYW5kb20gaW50ZWdlclxuICovXG5mdW5jdGlvbiBwc2V1ZG9SYW5kb21SYW5nZUludChzZWVkLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihwc2V1ZG9SYW5kb21SYW5nZShzZWVkLCBtaW4sIG1heCkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgcG93ZXIgb2YgdHdvIGZvciB0aGUgdmFsdWVcbiAqXG4gKiBAbWV0aG9kIG5leHRQb3cyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB0aGUgbmV4dCBwb3dlciBvZiB0d29cbiAqL1xuZnVuY3Rpb24gbmV4dFBvdzIodmFsKSB7XG4gIC0tdmFsO1xuICB2YWwgPSB2YWwgPj4gMSB8IHZhbDtcbiAgdmFsID0gdmFsID4+IDIgfCB2YWw7XG4gIHZhbCA9IHZhbCA+PiA0IHwgdmFsO1xuICB2YWwgPSB2YWwgPj4gOCB8IHZhbDtcbiAgdmFsID0gdmFsID4+IDE2IHwgdmFsO1xuICArK3ZhbDtcblxuICByZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIFJldHVybnMgZmxvYXQgcmVtYWluZGVyIGZvciB0IC8gbGVuZ3RoXG4gKlxuICogQG1ldGhvZCByZXBlYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0IHRpbWUgc3RhcnQgYXQgMFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCB0aW1lIG9mIG9uZSBjeWNsZVxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgdGltZSB3cmFwcGVkIGluIHRoZSBmaXJzdCBjeWNsZVxuICovXG5mdW5jdGlvbiByZXBlYXQodCwgbGVuZ3RoKSB7XG4gIHJldHVybiB0IC0gTWF0aC5mbG9vcih0IC8gbGVuZ3RoKSAqIGxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRpbWUgd3JhcHBlZCBpbiBwaW5nLXBvbmcgbW9kZVxuICpcbiAqIEBtZXRob2QgcmVwZWF0XG4gKiBAcGFyYW0ge251bWJlcn0gdCB0aW1lIHN0YXJ0IGF0IDBcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggdGltZSBvZiBvbmUgY3ljbGVcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHRpbWUgd3JhcHBlZCBpbiB0aGUgZmlyc3QgY3ljbGVcbiAqL1xuZnVuY3Rpb24gcGluZ1BvbmcodCwgbGVuZ3RoKSB7XG4gIHQgPSByZXBlYXQodCwgbGVuZ3RoICogMik7XG4gIHQgPSBsZW5ndGggLSBNYXRoLmFicyh0IC0gbGVuZ3RoKTtcbiAgcmV0dXJuIHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyByYXRpbyBvZiBhIHZhbHVlIHdpdGhpbiBhIGdpdmVuIHJhbmdlXG4gKlxuICogQG1ldGhvZCByZXBlYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tIHN0YXJ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gdG8gZW5kIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgZ2l2ZW4gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHJhdGlvIGJldHdlZW4gW2Zyb20sdG9dXG4gKi9cbmZ1bmN0aW9uIGludmVyc2VMZXJwKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJJbVZ4ZFdGc2N5SXNJbUZ3Y0hKdmVDSXNJbU5zWVcxd0lpd2lZMnhoYlhBd01TSXNJbXhsY25BaUxDSjBiMUpoWkdsaGJpSXNJblJ2UkdWbmNtVmxJaXdpY21GdVpHOXRVbUZ1WjJVaUxDSnlZVzVrYjIxU1lXNW5aVWx1ZENJc0luQnpaWFZrYjFKaGJtUnZiU0lzSW5CelpYVmtiMUpoYm1SdmJWSmhibWRsSWl3aWNITmxkV1J2VW1GdVpHOXRVbUZ1WjJWSmJuUWlMQ0p1WlhoMFVHOTNNaUlzSW5KbGNHVmhkQ0lzSW5CcGJtZFFiMjVuSWl3aWFXNTJaWEp6WlV4bGNuQWlMQ0pmWkRKeUlpd2lUV0YwYUNJc0lsQkpJaXdpWDNJeVpDSXNJa1ZRVTBsTVQwNGlMQ0poSWl3aVlpSXNJbUZpY3lJc0ltMWhlQ0lzSW0xaGVFUnBabVlpTENKMllXd2lMQ0p0YVc0aUxDSm1jbTl0SWl3aWRHOGlMQ0p5WVhScGJ5SXNJbkpoYm1SdmJTSXNJbVpzYjI5eUlpd2ljMlZsWkNJc0luUWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdVVUYxUW1kQ1FTeE5MRWRCUVVGQkxFMDdVVUZaUVVNc1RTeEhRVUZCUVN4Tk8xRkJZMEZETEVzc1IwRkJRVUVzU3p0UlFWZEJReXhQTEVkQlFVRkJMRTg3VVVGWFFVTXNTU3hIUVVGQlFTeEpPMUZCVTBGRExGRXNSMEZCUVVFc1VUdFJRVk5CUXl4UkxFZEJRVUZCTEZFN1VVRnBRa0ZETEZjc1IwRkJRVUVzVnp0UlFWbEJReXhqTEVkQlFVRkJMR003VVVGWFFVTXNXU3hIUVVGQlFTeFpPMUZCWTBGRExHbENMRWRCUVVGQkxHbENPMUZCWVVGRExHOUNMRWRCUVVGQkxHOUNPMUZCVjBGRExGRXNSMEZCUVVFc1VUdFJRVzlDUVVNc1RTeEhRVUZCUVN4Tk8xRkJXVUZETEZFc1IwRkJRVUVzVVR0UlFXVkJReXhYTEVkQlFVRkJMRmM3UVVGMFRtaENPenM3UVVGSFFTeEpRVUZOUXl4UFFVRlBReXhMUVVGTFF5eEZRVUZNTEVkQlFWVXNTMEZCZGtJN1FVRkRRVHM3TzBGQlIwRXNTVUZCVFVNc1QwRkJUeXhSUVVGUlJpeExRVUZMUXl4RlFVRXhRanM3UVVGRlFUczdPMEZCUjA4c1NVRkJUVVVzTkVKQlFWVXNVVUZCYUVJN08wRkJSVkE3T3pzN096czdPenRCUVZOUExGTkJRVk53UWl4TlFVRlVMRU5CUVdkQ2NVSXNRMEZCYUVJc1JVRkJiVUpETEVOQlFXNUNMRVZCUVhOQ08wRkJRek5DTEZOQlFVOU1MRXRCUVV0TkxFZEJRVXdzUTBGQlUwWXNTVUZCU1VNc1EwRkJZaXhMUVVGdFFrWXNWVUZCVlVnc1MwRkJTMDhzUjBGQlRDeERRVUZUTEVkQlFWUXNSVUZCWTFBc1MwRkJTMDBzUjBGQlRDeERRVUZUUml4RFFVRlVMRU5CUVdRc1JVRkJNa0pLTEV0QlFVdE5MRWRCUVV3c1EwRkJVMFFzUTBGQlZDeERRVUV6UWl4RFFVRndRenRCUVVORU96dEJRVVZFT3pzN096czdPenRCUVZGUExGTkJRVk55UWl4TlFVRlVMRU5CUVdkQ2IwSXNRMEZCYUVJc1JVRkJiVUpETEVOQlFXNUNMRVZCUVhOQ1J5eFBRVUYwUWl4RlFVRXJRanRCUVVOd1EwRXNXVUZCVlVFc1YwRkJWMHdzVDBGQmNrSTdRVUZEUVN4VFFVRlBTQ3hMUVVGTFRTeEhRVUZNTEVOQlFWTkdMRWxCUVVsRExFTkJRV0lzUzBGQmJVSkhMRTlCUVRGQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096dEJRVk5QTEZOQlFWTjJRaXhMUVVGVUxFTkJRV1YzUWl4SFFVRm1MRVZCUVc5Q1F5eEhRVUZ3UWl4RlFVRjVRa2dzUjBGQmVrSXNSVUZCT0VJN1FVRkRia01zVTBGQlQwVXNUVUZCVFVNc1IwRkJUaXhIUVVGWlFTeEhRVUZhTEVkQlFXdENSQ3hOUVVGTlJpeEhRVUZPTEVkQlFWbEJMRWRCUVZvc1IwRkJhMEpGTEVkQlFUTkRPMEZCUTBRN08wRkJSVVE3T3pzN096czdRVUZQVHl4VFFVRlRka0lzVDBGQlZDeERRVUZwUW5WQ0xFZEJRV3BDTEVWQlFYTkNPMEZCUXpOQ0xGTkJRVTlCTEUxQlFVMHNRMEZCVGl4SFFVRlZMRU5CUVZZc1IwRkJZMEVzVFVGQlRTeERRVUZPTEVkQlFWVXNRMEZCVml4SFFVRmpRU3hIUVVGdVF6dEJRVU5FT3p0QlFVVkVPenM3T3pzN08wRkJUMDhzVTBGQlUzUkNMRWxCUVZRc1EwRkJZM2RDTEVsQlFXUXNSVUZCYjBKRExFVkJRWEJDTEVWQlFYZENReXhMUVVGNFFpeEZRVUVyUWp0QlFVTndReXhUUVVGUFJpeFBRVUZQTEVOQlFVTkRMRXRCUVV0RUxFbEJRVTRzU1VGQlkwVXNTMEZCTlVJN1FVRkRSRHM3UVVGRlJEczdPenM3UVVGTFR5eFRRVUZUZWtJc1VVRkJWQ3hEUVVGclFtZENMRU5CUVd4Q0xFVkJRWEZDTzBGQlF6RkNMRk5CUVU5QkxFbEJRVWxNTEVsQlFWZzdRVUZEUkRzN1FVRkZSRHM3T3pzN1FVRkxUeXhUUVVGVFZpeFJRVUZVTEVOQlFXdENaU3hEUVVGc1FpeEZRVUZ4UWp0QlFVTXhRaXhUUVVGUFFTeEpRVUZKUml4SlFVRllPMEZCUTBRN08wRkJSVVE3T3p0QlFVZFBMRWxCUVUxWkxEQkNRVUZUWkN4TFFVRkxZeXhOUVVGd1FqczdRVUZGVURzN096czdPenM3UVVGUlR5eFRRVUZUZUVJc1YwRkJWQ3hEUVVGeFFtOUNMRWRCUVhKQ0xFVkJRVEJDU0N4SFFVRXhRaXhGUVVFclFqdEJRVU53UXl4VFFVRlBVQ3hMUVVGTFl5eE5RVUZNTEUxQlFXbENVQ3hOUVVGTlJ5eEhRVUYyUWl4SlFVRTRRa0VzUjBGQmNrTTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czdRVUZSVHl4VFFVRlRia0lzWTBGQlZDeERRVUYzUW0xQ0xFZEJRWGhDTEVWQlFUWkNTQ3hIUVVFM1FpeEZRVUZyUXp0QlFVTjJReXhUUVVGUFVDeExRVUZMWlN4TFFVRk1MRU5CUVZkNlFpeFpRVUZaYjBJc1IwRkJXaXhGUVVGcFFrZ3NSMEZCYWtJc1EwRkJXQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUTdPenM3T3pzN1FVRlBUeXhUUVVGVFppeFpRVUZVTEVOQlFYTkNkMElzU1VGQmRFSXNSVUZCTkVJN1FVRkRha05CTEZOQlFVOHNRMEZCUTBFc1QwRkJUeXhKUVVGUUxFZEJRV01zUzBGQlppeEpRVUYzUWl4TlFVRXZRanRCUVVOQkxGTkJRVTlCTEU5QlFVOHNVVUZCWkR0QlFVTkVPenRCUVVWRU96czdPenM3T3pzN1FVRlRUeXhUUVVGVGRrSXNhVUpCUVZRc1EwRkJNa0oxUWl4SlFVRXpRaXhGUVVGcFEwNHNSMEZCYWtNc1JVRkJjME5JTEVkQlFYUkRMRVZCUVRKRE8wRkJRMmhFTEZOQlFVOW1MR0ZCUVdGM1FpeEpRVUZpTEV0QlFYTkNWQ3hOUVVGTlJ5eEhRVUUxUWl4SlFVRnRRMEVzUjBGQk1VTTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czdPMEZCVTA4c1UwRkJVMmhDTEc5Q1FVRlVMRU5CUVRoQ2MwSXNTVUZCT1VJc1JVRkJiME5PTEVkQlFYQkRMRVZCUVhsRFNDeEhRVUY2UXl4RlFVRTRRenRCUVVOdVJDeFRRVUZQVUN4TFFVRkxaU3hMUVVGTUxFTkJRVmQwUWl4clFrRkJhMEoxUWl4SlFVRnNRaXhGUVVGM1FrNHNSMEZCZUVJc1JVRkJOa0pJTEVkQlFUZENMRU5CUVZnc1EwRkJVRHRCUVVORU96dEJRVVZFT3pzN096czdPMEZCVDA4c1UwRkJVMW9zVVVGQlZDeERRVUZyUW1Nc1IwRkJiRUlzUlVGQmRVSTdRVUZETlVJc1NVRkJSVUVzUjBGQlJqdEJRVU5CUVN4UlFVRlBRU3hQUVVGUExFTkJRVklzUjBGQllVRXNSMEZCYmtJN1FVRkRRVUVzVVVGQlQwRXNUMEZCVHl4RFFVRlNMRWRCUVdGQkxFZEJRVzVDTzBGQlEwRkJMRkZCUVU5QkxFOUJRVThzUTBGQlVpeEhRVUZoUVN4SFFVRnVRanRCUVVOQlFTeFJRVUZQUVN4UFFVRlBMRU5CUVZJc1IwRkJZVUVzUjBGQmJrSTdRVUZEUVVFc1VVRkJUMEVzVDBGQlR5eEZRVUZTTEVkQlFXTkJMRWRCUVhCQ08wRkJRMEVzU1VGQlJVRXNSMEZCUmpzN1FVRkZRU3hUUVVGUFFTeEhRVUZRTzBGQlEwUTdPMEZCUlVRN096czdPenM3TzBGQlVVOHNVMEZCVTJJc1RVRkJWQ3hEUVVGblFuRkNMRU5CUVdoQ0xFVkJRVzFDUXl4TlFVRnVRaXhGUVVFeVFqdEJRVU5vUXl4VFFVRlBSQ3hKUVVGSmFrSXNTMEZCUzJVc1MwRkJUQ3hEUVVGWFJTeEpRVUZKUXl4TlFVRm1MRWxCUVhsQ1FTeE5RVUZ3UXp0QlFVTkVPenRCUVVWRU96czdPenM3T3p0QlFWRlBMRk5CUVZOeVFpeFJRVUZVTEVOQlFXdENiMElzUTBGQmJFSXNSVUZCY1VKRExFMUJRWEpDTEVWQlFUWkNPMEZCUTJ4RFJDeE5RVUZKY2tJc1QwRkJUM0ZDTEVOQlFWQXNSVUZCVlVNc1UwRkJVeXhEUVVGdVFpeERRVUZLTzBGQlEwRkVMRTFCUVVsRExGTkJRVk5zUWl4TFFVRkxUU3hIUVVGTUxFTkJRVk5YTEVsQlFVbERMRTFCUVdJc1EwRkJZanRCUVVOQkxGTkJRVTlFTEVOQlFWQTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czdPMEZCVTA4c1UwRkJVMjVDTEZkQlFWUXNRMEZCY1VKaExFbEJRWEpDTEVWQlFUSkNReXhGUVVFelFpeEZRVUVyUWs4c1MwRkJMMElzUlVGQmMwTTdRVUZETTBNc1UwRkJUeXhEUVVGRFFTeFJRVUZSVWl4SlFVRlVMRXRCUVd0Q1F5eExRVUZMUkN4SlFVRjJRaXhEUVVGUU8wRkJRMFFpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUVCcFoyNXZjbVZjYmlBcUwxeHVZMjl1YzNRZ1gyUXljaUE5SUUxaGRHZ3VVRWtnTHlBeE9EQXVNRHRjYmk4cUtseHVJQ29nUUdsbmJtOXlaVnh1SUNvdlhHNWpiMjV6ZENCZmNqSmtJRDBnTVRnd0xqQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktpcGNiaUFxSUVCd2NtOXdaWEowZVNCN2JuVnRZbVZ5ZlNCRlVGTkpURTlPWEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCRlVGTkpURTlPSUQwZ01DNHdNREF3TURFN1hHNWNiaThxS2x4dUlDb2dWR1Z6ZEhNZ2QyaGxkR2hsY2lCdmNpQnViM1FnZEdobElHRnlaM1Z0Wlc1MGN5Qm9ZWFpsSUdGd2NISnZlR2x0WVhSbGJIa2dkR2hsSUhOaGJXVWdkbUZzZFdVc0lIZHBkR2hwYmlCaGJpQmhZbk52YkhWMFpWeHVJQ29nYjNJZ2NtVnNZWFJwZG1VZ2RHOXNaWEpoYm1ObElHOW1JR2RzVFdGMGNtbDRMa1ZRVTBsTVQwNGdLR0Z1SUdGaWMyOXNkWFJsSUhSdmJHVnlZVzVqWlNCcGN5QjFjMlZrSUdadmNpQjJZV3gxWlhNZ2JHVnpjMXh1SUNvZ2RHaGhiaUJ2Y2lCbGNYVmhiQ0IwYnlBeExqQXNJR0Z1WkNCaElISmxiR0YwYVhabElIUnZiR1Z5WVc1alpTQnBjeUIxYzJWa0lHWnZjaUJzWVhKblpYSWdkbUZzZFdWektWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCaElGUm9aU0JtYVhKemRDQnVkVzFpWlhJZ2RHOGdkR1Z6ZEM1Y2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQmlJRlJvWlNCelpXTnZibVFnYm5WdFltVnlJSFJ2SUhSbGMzUXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1FtOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMGFHVWdiblZ0WW1WeWN5QmhjbVVnWVhCd2NtOTRhVzFoZEdWc2VTQmxjWFZoYkN3Z1ptRnNjMlVnYjNSb1pYSjNhWE5sTGx4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaWEYxWVd4ektHRXNJR0lwSUh0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1WVdKektHRWdMU0JpS1NBOFBTQkZVRk5KVEU5T0lDb2dUV0YwYUM1dFlYZ29NUzR3TENCTllYUm9MbUZpY3loaEtTd2dUV0YwYUM1aFluTW9ZaWtwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRlJsYzNSeklIZG9aWFJvWlhJZ2IzSWdibTkwSUhSb1pTQmhjbWQxYldWdWRITWdhR0YyWlNCaGNIQnliM2hwYldGMFpXeDVJSFJvWlNCellXMWxJSFpoYkhWbElHSjVJR2RwZG1WdUlHMWhlRVJwWm1aY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnWVNCVWFHVWdabWx5YzNRZ2JuVnRZbVZ5SUhSdklIUmxjM1F1WEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ1lpQlVhR1VnYzJWamIyNWtJRzUxYldKbGNpQjBieUIwWlhOMExseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJRzFoZUVScFptWWdUV0Y0YVcxMWJTQmthV1ptWlhKbGJtTmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UwSnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RHaGxJRzUxYldKbGNuTWdZWEpsSUdGd2NISnZlR2x0WVhSbGJIa2daWEYxWVd3c0lHWmhiSE5sSUc5MGFHVnlkMmx6WlM1Y2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR0Z3Y0hKdmVDaGhMQ0JpTENCdFlYaEVhV1ptS1NCN1hHNGdJRzFoZUVScFptWWdQU0J0WVhoRWFXWm1JSHg4SUVWUVUwbE1UMDQ3WEc0Z0lISmxkSFZ5YmlCTllYUm9MbUZpY3loaElDMGdZaWtnUEQwZ2JXRjRSR2xtWmp0Y2JuMWNibHh1THlvcVhHNGdLaUJEYkdGdGNITWdZU0IyWVd4MVpTQmlaWFIzWldWdUlHRWdiV2x1YVcxMWJTQm1iRzloZENCaGJtUWdiV0Y0YVcxMWJTQm1iRzloZENCMllXeDFaUzVjYmlBcVhHNGdLaUJBYldWMGFHOWtJR05zWVcxd1hHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdkbUZzWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JXbHVYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYldGNFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCamJHRnRjQ2gyWVd3c0lHMXBiaXdnYldGNEtTQjdYRzRnSUhKbGRIVnliaUIyWVd3Z1BDQnRhVzRnUHlCdGFXNGdPaUIyWVd3Z1BpQnRZWGdnUHlCdFlYZ2dPaUIyWVd3N1hHNTlYRzVjYmk4cUtseHVJQ29nUTJ4aGJYQnpJR0VnZG1Gc2RXVWdZbVYwZDJWbGJpQXdJR0Z1WkNBeExseHVJQ3BjYmlBcUlFQnRaWFJvYjJRZ1kyeGhiWEF3TVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlIWmhiRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMnhoYlhBd01TaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIWmhiQ0E4SURBZ1B5QXdJRG9nZG1Gc0lENGdNU0EvSURFZ09pQjJZV3c3WEc1OVhHNWNiaThxS2x4dUlDb2dRRzFsZEdodlpDQnNaWEp3WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1puSnZiVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUhSdlhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdjbUYwYVc4Z0xTQjBhR1VnYVc1MFpYSndiMnhoZEdsdmJpQmpiMlZtWm1samFXVnVkRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdiR1Z5Y0NobWNtOXRMQ0IwYnl3Z2NtRjBhVzhwSUh0Y2JpQWdjbVYwZFhKdUlHWnliMjBnS3lBb2RHOGdMU0JtY205dEtTQXFJSEpoZEdsdk8xeHVmVnh1WEc0dktpcGNiaW9nUTI5dWRtVnlkQ0JFWldkeVpXVWdWRzhnVW1Ga2FXRnVYRzRxWEc0cUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCaElFRnVaMnhsSUdsdUlFUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkRzlTWVdScFlXNG9ZU2tnZTF4dUlDQnlaWFIxY200Z1lTQXFJRjlrTW5JN1hHNTlYRzVjYmk4cUtseHVLaUJEYjI1MlpYSjBJRkpoWkdsaGJpQlVieUJFWldkeVpXVmNiaXBjYmlvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUdFZ1FXNW5iR1VnYVc0Z1VtRmthV0Z1WEc0cUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlIUnZSR1ZuY21WbEtHRXBJSHRjYmlBZ2NtVjBkWEp1SUdFZ0tpQmZjakprTzF4dWZWeHVYRzR2S2lwY2Jpb2dRRzFsZEdodlpDQnlZVzVrYjIxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRnVaRzl0SUQwZ1RXRjBhQzV5WVc1a2IyMDdYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVjeUJoSUdac2IyRjBhVzVuTFhCdmFXNTBJSEpoYm1SdmJTQnVkVzFpWlhJZ1ltVjBkMlZsYmlCdGFXNGdLR2x1WTJ4MWMybDJaU2tnWVc1a0lHMWhlQ0FvWlhoamJIVnphWFpsS1M1Y2JpQXFYRzRnS2lCQWJXVjBhRzlrSUhKaGJtUnZiVkpoYm1kbFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiV2x1WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JXRjRYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUhSb1pTQnlZVzVrYjIwZ2JuVnRZbVZ5WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlZVzVrYjIxU1lXNW5aU2h0YVc0c0lHMWhlQ2tnZTF4dUlDQnlaWFIxY200Z1RXRjBhQzV5WVc1a2IyMG9LU0FxSUNodFlYZ2dMU0J0YVc0cElDc2diV2x1TzF4dWZWeHVYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdZU0J5WVc1a2IyMGdhVzUwWldkbGNpQmlaWFIzWldWdUlHMXBiaUFvYVc1amJIVnphWFpsS1NCaGJtUWdiV0Y0SUNobGVHTnNkWE5wZG1VcExseHVJQ3BjYmlBcUlFQnRaWFJvYjJRZ2NtRnVaRzl0VW1GdVoyVkpiblJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdGFXNWNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J0WVhoY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdkR2hsSUhKaGJtUnZiU0JwYm5SbFoyVnlYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCeVlXNWtiMjFTWVc1blpVbHVkQ2h0YVc0c0lHMWhlQ2tnZTF4dUlDQnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpaHlZVzVrYjIxU1lXNW5aU2h0YVc0c0lHMWhlQ2twTzF4dWZWeHVYRzR2S2lwY2JpQXFJRXhwYm1WaGNpQmpiMjVuY25WbGJuUnBZV3dnWjJWdVpYSmhkRzl5SUhWemFXNW5JRWgxYkd3dFJHOWlaV3hzSUZSb1pXOXlaVzB1WEc0Z0tseHVJQ29nUUcxbGRHaHZaQ0J3YzJWMVpHOVNZVzVrYjIxY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnpaV1ZrSUhSb1pTQnlZVzVrYjIwZ2MyVmxaRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCMGFHVWdjSE5sZFdSdklISmhibVJ2YlZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjSE5sZFdSdlVtRnVaRzl0S0hObFpXUXBJSHRjYmlBZ2MyVmxaQ0E5SUNoelpXVmtJQ29nT1RNd01TQXJJRFE1TWprM0tTQWxJREl6TXpJNE1EdGNiaUFnY21WMGRYSnVJSE5sWldRZ0x5QXlNek15T0RBdU1EdGNibjFjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ1pteHZZWFJwYm1jdGNHOXBiblFnY0hObGRXUnZMWEpoYm1SdmJTQnVkVzFpWlhJZ1ltVjBkMlZsYmlCdGFXNGdLR2x1WTJ4MWMybDJaU2tnWVc1a0lHMWhlQ0FvWlhoamJIVnphWFpsS1M1Y2JpQXFYRzRnS2lCQWJXVjBhRzlrSUhCelpYVmtiMUpoYm1SdmJWSmhibWRsWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2MyVmxaRnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUcxcGJseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQjBhR1VnY21GdVpHOXRJRzUxYldKbGNseHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY0hObGRXUnZVbUZ1Wkc5dFVtRnVaMlVvYzJWbFpDd2diV2x1TENCdFlYZ3BJSHRjYmlBZ2NtVjBkWEp1SUhCelpYVmtiMUpoYm1SdmJTaHpaV1ZrS1NBcUlDaHRZWGdnTFNCdGFXNHBJQ3NnYldsdU8xeHVmVnh1WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nWVNCd2MyVjFaRzh0Y21GdVpHOXRJR2x1ZEdWblpYSWdZbVYwZDJWbGJpQnRhVzRnS0dsdVkyeDFjMmwyWlNrZ1lXNWtJRzFoZUNBb1pYaGpiSFZ6YVhabEtTNWNiaUFxWEc0Z0tpQkFiV1YwYUc5a0lIQnpaWFZrYjFKaGJtUnZiVkpoYm1kbFNXNTBYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYzJWbFpGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzFwYmx4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHMWhlRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCMGFHVWdjbUZ1Wkc5dElHbHVkR1ZuWlhKY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEJ6WlhWa2IxSmhibVJ2YlZKaGJtZGxTVzUwS0hObFpXUXNJRzFwYml3Z2JXRjRLU0I3WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnpaWFZrYjFKaGJtUnZiVkpoYm1kbEtITmxaV1FzSUcxcGJpd2diV0Y0S1NrN1hHNTlYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVjeUIwYUdVZ2JtVjRkQ0J3YjNkbGNpQnZaaUIwZDI4Z1ptOXlJSFJvWlNCMllXeDFaVnh1SUNwY2JpQXFJRUJ0WlhSb2IyUWdibVY0ZEZCdmR6SmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0IyWVd4Y2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdkR2hsSUhSb1pTQnVaWGgwSUhCdmQyVnlJRzltSUhSM2IxeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm1WNGRGQnZkeklvZG1Gc0tTQjdYRzRnSUMwdGRtRnNPMXh1SUNCMllXd2dQU0FvZG1Gc0lENCtJREVwSUh3Z2RtRnNPMXh1SUNCMllXd2dQU0FvZG1Gc0lENCtJRElwSUh3Z2RtRnNPMXh1SUNCMllXd2dQU0FvZG1Gc0lENCtJRFFwSUh3Z2RtRnNPMXh1SUNCMllXd2dQU0FvZG1Gc0lENCtJRGdwSUh3Z2RtRnNPMXh1SUNCMllXd2dQU0FvZG1Gc0lENCtJREUyS1NCOElIWmhiRHRjYmlBZ0t5dDJZV3c3WEc1Y2JpQWdjbVYwZFhKdUlIWmhiRHRjYm4xY2JseHVMeW9xWEc0Z0tpQlNaWFIxY201eklHWnNiMkYwSUhKbGJXRnBibVJsY2lCbWIzSWdkQ0F2SUd4bGJtZDBhRnh1SUNwY2JpQXFJRUJ0WlhSb2IyUWdjbVZ3WldGMFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdkQ0IwYVcxbElITjBZWEowSUdGMElEQmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JzWlc1bmRHZ2dkR2x0WlNCdlppQnZibVVnWTNsamJHVmNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnZEdobElIUnBiV1VnZDNKaGNIQmxaQ0JwYmlCMGFHVWdabWx5YzNRZ1kzbGpiR1ZjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxjR1ZoZENoMExDQnNaVzVuZEdncElIdGNiaUFnY21WMGRYSnVJSFFnTFNCTllYUm9MbVpzYjI5eUtIUWdMeUJzWlc1bmRHZ3BJQ29nYkdWdVozUm9PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGSmxkSFZ5Ym5NZ2RHbHRaU0IzY21Gd2NHVmtJR2x1SUhCcGJtY3RjRzl1WnlCdGIyUmxYRzRnS2x4dUlDb2dRRzFsZEdodlpDQnlaWEJsWVhSY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQjBJSFJwYldVZ2MzUmhjblFnWVhRZ01GeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR3hsYm1kMGFDQjBhVzFsSUc5bUlHOXVaU0JqZVdOc1pWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0IwYUdVZ2RHbHRaU0IzY21Gd2NHVmtJR2x1SUhSb1pTQm1hWEp6ZENCamVXTnNaVnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NHbHVaMUJ2Ym1jb2RDd2diR1Z1WjNSb0tTQjdYRzRnSUhRZ1BTQnlaWEJsWVhRb2RDd2diR1Z1WjNSb0lDb2dNaWs3WEc0Z0lIUWdQU0JzWlc1bmRHZ2dMU0JOWVhSb0xtRmljeWgwSUMwZ2JHVnVaM1JvS1R0Y2JpQWdjbVYwZFhKdUlIUTdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1Y3lCeVlYUnBieUJ2WmlCaElIWmhiSFZsSUhkcGRHaHBiaUJoSUdkcGRtVnVJSEpoYm1kbFhHNGdLbHh1SUNvZ1FHMWxkR2h2WkNCeVpYQmxZWFJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCbWNtOXRJSE4wWVhKMElIWmhiSFZsWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2RHOGdaVzVrSUhaaGJIVmxYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnZG1Gc2RXVWdaMmwyWlc0Z2RtRnNkV1ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2RHaGxJSEpoZEdsdklHSmxkSGRsWlc0Z1cyWnliMjBzZEc5ZFhHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJwYm5abGNuTmxUR1Z5Y0NobWNtOXRMQ0IwYnl3Z2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlDaDJZV3gxWlNBdElHWnliMjBwSUM4Z0tIUnZJQzBnWm5KdmJTazdYRzU5SWwxOSJdfQ==