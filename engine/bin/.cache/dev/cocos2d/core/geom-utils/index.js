(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/geom-utils/index.js';
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
        cc.geomUtils = {
            Triangle: require('./triangle'),
            Aabb: require('./aabb'),
            Ray: require('./ray'),
            intersect: require('./intersect')
        };
        exports.default = cc.geomUtils;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9nZW9tLXV0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjYyIsImdlb21VdGlscyIsIlRyaWFuZ2xlIiwiQWFiYiIsIlJheSIsImludGVyc2VjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZSxPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUE7UUFDTyxVQUFSLE9BQVEsRUFEUDtBQUFBLFFBRUcsT0FGSCxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUVHLENBRkg7QUFBQTtJQUlBQSxTQUFRLFFBQVJBLENBQUEsT0FBQUEsRUFBQSxPQUFBQSxFQUFBLE1BQUFBLEVBQUE7QUFBQSxRQUpmLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQSxTQUllO0FBQUE7O1FBSmZDLEVBQUFBLENBQUdDLFNBQUhELEdBQWU7QUFBQSxZQUNYRSxRQUFBQSxFQUFVSCxPQUFBQSxDQUFRLFlBQVJBLENBREM7QUFBQSxZQUVYSSxJQUFBQSxFQUFNSixPQUFBQSxDQUFRLFFBQVJBLENBRks7QUFBQSxZQUdYSyxHQUFBQSxFQUFLTCxPQUFBQSxDQUFRLE9BQVJBLENBSE07QUFBQSxZQUlYTSxTQUFBQSxFQUFXTixPQUFBQSxDQUFRLGFBQVJBLENBSkE7QUFBQSxTQUFmQzswQkFPZUEsRUFBQUEsQ0FBR0M7NENBSEg7QUFBQTtJQUdBRCxJQUFHQyxPQUFIRDs7S0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLmdlb21VdGlscyA9IHtcbiAgICBUcmlhbmdsZTogcmVxdWlyZSgnLi90cmlhbmdsZScpLFxuICAgIEFhYmI6IHJlcXVpcmUoJy4vYWFiYicpLFxuICAgIFJheTogcmVxdWlyZSgnLi9yYXknKSxcbiAgICBpbnRlcnNlY3Q6IHJlcXVpcmUoJy4vaW50ZXJzZWN0Jylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNjLmdlb21VdGlsc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmNjLmdlb21VdGlscyA9IHtcbiAgICBUcmlhbmdsZTogcmVxdWlyZSgnLi90cmlhbmdsZScpLFxuICAgIEFhYmI6IHJlcXVpcmUoJy4vYWFiYicpLFxuICAgIFJheTogcmVxdWlyZSgnLi9yYXknKSxcbiAgICBpbnRlcnNlY3Q6IHJlcXVpcmUoJy4vaW50ZXJzZWN0Jylcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNjLmdlb21VdGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmpJaXdpWjJWdmJWVjBhV3h6SWl3aVZISnBZVzVuYkdVaUxDSnlaWEYxYVhKbElpd2lRV0ZpWWlJc0lsSmhlU0lzSW1sdWRHVnljMlZqZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRMEZCTEVkQlFVZERMRk5CUVVnc1IwRkJaVHRCUVVOWVF5eGpRVUZWUXl4UlFVRlJMRmxCUVZJc1EwRkVRenRCUVVWWVF5eFZRVUZOUkN4UlFVRlJMRkZCUVZJc1EwRkdTenRCUVVkWVJTeFRRVUZMUml4UlFVRlJMRTlCUVZJc1EwRklUVHRCUVVsWVJ5eGxRVUZYU0N4UlFVRlJMR0ZCUVZJN1FVRktRU3hEUVVGbU96dHJRa0ZQWlVnc1IwRkJSME1zVXlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklseHVZMk11WjJWdmJWVjBhV3h6SUQwZ2UxeHVJQ0FnSUZSeWFXRnVaMnhsT2lCeVpYRjFhWEpsS0NjdUwzUnlhV0Z1WjJ4bEp5a3NYRzRnSUNBZ1FXRmlZam9nY21WeGRXbHlaU2duTGk5aFlXSmlKeWtzWEc0Z0lDQWdVbUY1T2lCeVpYRjFhWEpsS0NjdUwzSmhlU2NwTEZ4dUlDQWdJR2x1ZEdWeWMyVmpkRG9nY21WeGRXbHlaU2duTGk5cGJuUmxjbk5sWTNRbktWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJNdVoyVnZiVlYwYVd4elhHNGlYWDA9Il19