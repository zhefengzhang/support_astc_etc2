(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/technique.js';
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
        var _config = require('../config');
        var _config2 = _interopRequireDefault(_config);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var _genID = 0;
        var Technique = function () {
            function Technique(stages, passes) {
                var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                _classCallCheck(this, Technique);
                this._id = _genID++;
                this._stageIDs = _config2.default.stageIDs(stages);
                this._passes = passes;
                this._layer = layer;
            }
            _createClass(Technique, [
                {
                    key: 'setStages',
                    value: function setStages(stages) {
                        this._stageIDs = _config2.default.stageIDs(stages);
                    }
                },
                {
                    key: 'passes',
                    get: function get() {
                        return this._passes;
                    }
                },
                {
                    key: 'stageIDs',
                    get: function get() {
                        return this._stageIDs;
                    }
                }
            ]);
            return Technique;
        }();
        exports.default = Technique;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2huaXF1ZS5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2NvcmUvdGVjaG5pcXVlLmpzIl0sIm5hbWVzIjpbIl9nZW5JRCIsIlRlY2huaXF1ZSIsInN0YWdlcyIsInBhc3NlcyIsImxheWVyIiwiX2lkIiwiX3N0YWdlSURzIiwiY29uZmlnIiwic3RhZ2VJRHMiLCJfcGFzc2VzIiwiX2xheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVBLElBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7Ozs7Ozs7Ozs7UUFFQSxJQUFJQSxNQUFBQSxHQUFTLENBQWI7WUFFcUJDLFNBQUFBO1lBTW5CLFNBQUEsU0FBQSxDQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUF1QztBQUFBLGdCQUFBLElBQVhDLEtBQUFBLEdBQVcsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFILENBQUcsQ0FBQTtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxFQUFBO0FBQUEsZ0JBQ3JDLEtBQUtDLEdBQUwsR0FBV0wsTUFBQUEsRUFBWCxDQURxQztBQUFBLGdCQUVyQyxLQUFLTSxTQUFMLEdBQWlCQyxRQUFBQSxDQUFBQSxPQUFBQSxDQUFPQyxRQUFQRCxDQUFnQkwsTUFBaEJLLENBQWpCLENBRnFDO0FBQUEsZ0JBR3JDLEtBQUtFLE9BQUwsR0FBZU4sTUFBZixDQUhxQztBQUFBLGdCQUlyQyxLQUFLTyxNQUFMLEdBQWNOLEtBQWQsQ0FKcUM7QUFBQTs7Ozs4Q0FRN0JGLFFBQVE7QUFBQSx3QkFDaEIsS0FBS0ksU0FBTCxHQUFpQkMsUUFBQUEsQ0FBQUEsT0FBQUEsQ0FBT0MsUUFBUEQsQ0FBZ0JMLE1BQWhCSyxDQUFqQixDQURnQjtBQUFBOzs7O3dDQUlMO0FBQUEsd0JBQ1gsT0FBTyxLQUFLRSxPQUFaLENBRFc7QUFBQTs7Ozt3Q0FJRTtBQUFBLHdCQUNiLE9BQU8sS0FBS0gsU0FBWixDQURhO0FBQUE7Ozs7OzBCQXRCSUw7Ozs7OztRQUZyQixpQkFBQSxDQUFBLGtCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSw0REFBQTtBQUFBLFNBQUEiLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxubGV0IF9nZW5JRCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlY2huaXF1ZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdGFnZXNcbiAgICogQHBhcmFtIHtBcnJheX0gcGFzc2VzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsYXllclxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhZ2VzLCBwYXNzZXMsIGxheWVyID0gMCkge1xuICAgIHRoaXMuX2lkID0gX2dlbklEKys7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBjb25maWcuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgICB0aGlzLl9wYXNzZXMgPSBwYXNzZXM7XG4gICAgdGhpcy5fbGF5ZXIgPSBsYXllcjtcbiAgICAvLyBUT0RPOiB0aGlzLl92ZXJzaW9uID0gJ3dlYmdsJyBvciAnd2ViZ2wyJyAvLyA/Pz8/XG4gIH1cblxuICBzZXRTdGFnZXMoc3RhZ2VzKSB7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBjb25maWcuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgfVxuXG4gIGdldCBwYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NlcztcbiAgfVxuXG4gIGdldCBzdGFnZUlEcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2VJRHM7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2dlbklEID0gMDtcblxudmFyIFRlY2huaXF1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YWdlc1xuICAgKiBAcGFyYW0ge0FycmF5fSBwYXNzZXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxheWVyXG4gICAqL1xuICBmdW5jdGlvbiBUZWNobmlxdWUoc3RhZ2VzLCBwYXNzZXMpIHtcbiAgICB2YXIgbGF5ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVjaG5pcXVlKTtcblxuICAgIHRoaXMuX2lkID0gX2dlbklEKys7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBfY29uZmlnMi5kZWZhdWx0LnN0YWdlSURzKHN0YWdlcyk7XG4gICAgdGhpcy5fcGFzc2VzID0gcGFzc2VzO1xuICAgIHRoaXMuX2xheWVyID0gbGF5ZXI7XG4gICAgLy8gVE9ETzogdGhpcy5fdmVyc2lvbiA9ICd3ZWJnbCcgb3IgJ3dlYmdsMicgLy8gPz8/P1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRlY2huaXF1ZSwgW3tcbiAgICBrZXk6ICdzZXRTdGFnZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGFnZXMoc3RhZ2VzKSB7XG4gICAgICB0aGlzLl9zdGFnZUlEcyA9IF9jb25maWcyLmRlZmF1bHQuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXNzZXMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Bhc3NlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFnZUlEcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhZ2VJRHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlY2huaXF1ZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVjaG5pcXVlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblJsWTJodWFYRjFaUzVxY3lKZExDSnVZVzFsY3lJNld5SmZaMlZ1U1VRaUxDSlVaV05vYm1seGRXVWlMQ0p6ZEdGblpYTWlMQ0p3WVhOelpYTWlMQ0pzWVhsbGNpSXNJbDlwWkNJc0lsOXpkR0ZuWlVsRWN5SXNJbU52Ym1acFp5SXNJbk4wWVdkbFNVUnpJaXdpWDNCaGMzTmxjeUlzSWw5c1lYbGxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0eGFrSkJRVUU3TzBGQlJVRTdPenM3T3pzN08wRkJSVUVzU1VGQlNVRXNVMEZCVXl4RFFVRmlPenRKUVVWeFFrTXNVenRCUVVOdVFqczdPenM3UVVGTFFTeHhRa0ZCV1VNc1RVRkJXaXhGUVVGdlFrTXNUVUZCY0VJc1JVRkJkVU03UVVGQlFTeFJRVUZZUXl4TFFVRlhMSFZGUVVGSUxFTkJRVWM3TzBGQlFVRTdPMEZCUTNKRExGTkJRVXRETEVkQlFVd3NSMEZCVjB3c1VVRkJXRHRCUVVOQkxGTkJRVXROTEZOQlFVd3NSMEZCYVVKRExHbENRVUZQUXl4UlFVRlFMRU5CUVdkQ1RpeE5RVUZvUWl4RFFVRnFRanRCUVVOQkxGTkJRVXRQTEU5QlFVd3NSMEZCWlU0c1RVRkJaanRCUVVOQkxGTkJRVXRQTEUxQlFVd3NSMEZCWTA0c1MwRkJaRHRCUVVOQk8wRkJRMFE3T3pzN09FSkJSVk5HTEUwc1JVRkJVVHRCUVVOb1FpeFhRVUZMU1N4VFFVRk1MRWRCUVdsQ1F5eHBRa0ZCVDBNc1VVRkJVQ3hEUVVGblFrNHNUVUZCYUVJc1EwRkJha0k3UVVGRFJEczdPM2RDUVVWWk8wRkJRMWdzWVVGQlR5eExRVUZMVHl4UFFVRmFPMEZCUTBRN096dDNRa0ZGWXp0QlFVTmlMR0ZCUVU4c1MwRkJTMGdzVTBGQldqdEJRVU5FT3pzN096czdhMEpCZUVKclFrd3NVeUlzSW1acGJHVWlPaUowWldOb2JtbHhkV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjYmx4dWFXMXdiM0owSUdOdmJtWnBaeUJtY205dElDY3VMaTlqYjI1bWFXY25PMXh1WEc1c1pYUWdYMmRsYmtsRUlEMGdNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWR1ZqYUc1cGNYVmxJSHRjYmlBZ0x5b3FYRzRnSUNBcUlFQndZWEpoYlNCN1FYSnlZWGw5SUhOMFlXZGxjMXh1SUNBZ0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCd1lYTnpaWE5jYmlBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHeGhlV1Z5WEc0Z0lDQXFMMXh1SUNCamIyNXpkSEoxWTNSdmNpaHpkR0ZuWlhNc0lIQmhjM05sY3l3Z2JHRjVaWElnUFNBd0tTQjdYRzRnSUNBZ2RHaHBjeTVmYVdRZ1BTQmZaMlZ1U1VRckt6dGNiaUFnSUNCMGFHbHpMbDl6ZEdGblpVbEVjeUE5SUdOdmJtWnBaeTV6ZEdGblpVbEVjeWh6ZEdGblpYTXBPMXh1SUNBZ0lIUm9hWE11WDNCaGMzTmxjeUE5SUhCaGMzTmxjenRjYmlBZ0lDQjBhR2x6TGw5c1lYbGxjaUE5SUd4aGVXVnlPMXh1SUNBZ0lDOHZJRlJQUkU4NklIUm9hWE11WDNabGNuTnBiMjRnUFNBbmQyVmlaMnduSUc5eUlDZDNaV0puYkRJbklDOHZJRDgvUHo5Y2JpQWdmVnh1WEc0Z0lITmxkRk4wWVdkbGN5aHpkR0ZuWlhNcElIdGNiaUFnSUNCMGFHbHpMbDl6ZEdGblpVbEVjeUE5SUdOdmJtWnBaeTV6ZEdGblpVbEVjeWh6ZEdGblpYTXBPMXh1SUNCOVhHNWNiaUFnWjJWMElIQmhjM05sY3lncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjR0Z6YzJWek8xeHVJQ0I5WEc1Y2JpQWdaMlYwSUhOMFlXZGxTVVJ6S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXpkR0ZuWlVsRWN6dGNiaUFnZlZ4dWZTSmRmUT09Il19