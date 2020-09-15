(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/platform/CCPhysicsRayCastCallback.js';
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
        function PhysicsRayCastCallback() {
            this._type = 0;
            this._fixtures = [];
            this._points = [];
            this._normals = [];
            this._fractions = [];
        }
        PhysicsRayCastCallback.prototype.init = function (type) {
            this._type = type;
            this._fixtures.length = 0;
            this._points.length = 0;
            this._normals.length = 0;
            this._fractions.length = 0;
        };
        PhysicsRayCastCallback.prototype.ReportFixture = function (fixture, point, normal, fraction) {
            if (this._type === 0) {
                this._fixtures[0] = fixture;
                this._points[0] = point;
                this._normals[0] = normal;
                this._fractions[0] = fraction;
                return fraction;
            }
            this._fixtures.push(fixture);
            this._points.push(cc.v2(point));
            this._normals.push(cc.v2(normal));
            this._fractions.push(fraction);
            if (this._type === 1) {
                return 0;
            } else if (this._type >= 2) {
                return 1;
            }
            return fraction;
        };
        PhysicsRayCastCallback.prototype.getFixtures = function () {
            return this._fixtures;
        };
        PhysicsRayCastCallback.prototype.getPoints = function () {
            return this._points;
        };
        PhysicsRayCastCallback.prototype.getNormals = function () {
            return this._normals;
        };
        PhysicsRayCastCallback.prototype.getFractions = function () {
            return this._fractions;
        };
        cc.PhysicsRayCastCallback = module.exports = PhysicsRayCastCallback;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUGh5c2ljc1JheUNhc3RDYWxsYmFjay5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvcGh5c2ljcy9wbGF0Zm9ybS9DQ1BoeXNpY3NSYXlDYXN0Q2FsbGJhY2suanMiXSwibmFtZXMiOlsiUGh5c2ljc1JheUNhc3RDYWxsYmFjayIsIl90eXBlIiwiX2ZpeHR1cmVzIiwiX3BvaW50cyIsIl9ub3JtYWxzIiwiX2ZyYWN0aW9ucyIsInByb3RvdHlwZSIsImluaXQiLCJ0eXBlIiwibGVuZ3RoIiwiUmVwb3J0Rml4dHVyZSIsImZpeHR1cmUiLCJwb2ludCIsIm5vcm1hbCIsImZyYWN0aW9uIiwicHVzaCIsImNjIiwidjIiLCJnZXRGaXh0dXJlcyIsImdldFBvaW50cyIsImdldE5vcm1hbHMiLCJnZXRGcmFjdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUEwQkEsU0FBU0Esc0JBQVQsR0FBbUM7QUFBQSxZQUMvQixLQUFLQyxLQUFMLEdBQWEsQ0FBYixDQUQrQjtBQUFBLFlBRS9CLEtBQUtDLFNBQUwsR0FBaUIsRUFBakIsQ0FGK0I7QUFBQSxZQUcvQixLQUFLQyxPQUFMLEdBQWUsRUFBZixDQUgrQjtBQUFBLFlBSS9CLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FKK0I7QUFBQSxZQUsvQixLQUFLQyxVQUFMLEdBQWtCLEVBQWxCLENBTCtCO0FBQUE7UUFRbkNMLHNCQUFBQSxDQUF1Qk0sU0FBdkJOLENBQWlDTyxJQUFqQ1AsR0FBd0MsVUFBVVEsSUFBVixFQUFnQjtBQUFBLFlBQ3BELEtBQUtQLEtBQUwsR0FBYU8sSUFBYixDQURvRDtBQUFBLFlBRXBELEtBQUtOLFNBQUwsQ0FBZU8sTUFBZixHQUF3QixDQUF4QixDQUZvRDtBQUFBLFlBR3BELEtBQUtOLE9BQUwsQ0FBYU0sTUFBYixHQUFzQixDQUF0QixDQUhvRDtBQUFBLFlBSXBELEtBQUtMLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixDQUF2QixDQUpvRDtBQUFBLFlBS3BELEtBQUtKLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCLENBQXpCLENBTG9EO0FBQUEsU0FBeERUO1FBUUFBLHNCQUFBQSxDQUF1Qk0sU0FBdkJOLENBQWlDVSxhQUFqQ1YsR0FBaUQsVUFBVVcsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUFBLFlBQ3pGLElBQUksS0FBS2IsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQUEsZ0JBQ2xCLEtBQUtDLFNBQUwsQ0FBZSxDQUFmLElBQW9CUyxPQUFwQixDQURrQjtBQUFBLGdCQUVsQixLQUFLUixPQUFMLENBQWEsQ0FBYixJQUFrQlMsS0FBbEIsQ0FGa0I7QUFBQSxnQkFHbEIsS0FBS1IsUUFBTCxDQUFjLENBQWQsSUFBbUJTLE1BQW5CLENBSGtCO0FBQUEsZ0JBSWxCLEtBQUtSLFVBQUwsQ0FBZ0IsQ0FBaEIsSUFBcUJTLFFBQXJCLENBSmtCO0FBQUEsZ0JBS2xCLE9BQU9BLFFBQVAsQ0FMa0I7QUFBQSxhQURtRTtBQUFBLFlBU3pGLEtBQUtaLFNBQUwsQ0FBZWEsSUFBZixDQUFvQkosT0FBcEIsRUFUeUY7QUFBQSxZQVV6RixLQUFLUixPQUFMLENBQWFZLElBQWIsQ0FBa0JDLEVBQUFBLENBQUdDLEVBQUhELENBQU1KLEtBQU5JLENBQWxCLEVBVnlGO0FBQUEsWUFXekYsS0FBS1osUUFBTCxDQUFjVyxJQUFkLENBQW1CQyxFQUFBQSxDQUFHQyxFQUFIRCxDQUFNSCxNQUFORyxDQUFuQixFQVh5RjtBQUFBLFlBWXpGLEtBQUtYLFVBQUwsQ0FBZ0JVLElBQWhCLENBQXFCRCxRQUFyQixFQVp5RjtBQUFBLFlBY3pGLElBQUksS0FBS2IsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQUEsZ0JBQ2xCLE9BQU8sQ0FBUCxDQURrQjtBQUFBLGFBQXRCLE1BR0ssSUFBSSxLQUFLQSxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFBQSxnQkFDdEIsT0FBTyxDQUFQLENBRHNCO0FBQUEsYUFqQitEO0FBQUEsWUFxQnpGLE9BQU9hLFFBQVAsQ0FyQnlGO0FBQUEsU0FBN0ZkO1FBeUJBQSxzQkFBQUEsQ0FBdUJNLFNBQXZCTixDQUFpQ2tCLFdBQWpDbEIsR0FBK0MsWUFBWTtBQUFBLFlBQ3ZELE9BQU8sS0FBS0UsU0FBWixDQUR1RDtBQUFBLFNBQTNERjtRQUlBQSxzQkFBQUEsQ0FBdUJNLFNBQXZCTixDQUFpQ21CLFNBQWpDbkIsR0FBNkMsWUFBWTtBQUFBLFlBQ3JELE9BQU8sS0FBS0csT0FBWixDQURxRDtBQUFBLFNBQXpESDtRQUlBQSxzQkFBQUEsQ0FBdUJNLFNBQXZCTixDQUFpQ29CLFVBQWpDcEIsR0FBOEMsWUFBWTtBQUFBLFlBQ3RELE9BQU8sS0FBS0ksUUFBWixDQURzRDtBQUFBLFNBQTFESjtRQUlBQSxzQkFBQUEsQ0FBdUJNLFNBQXZCTixDQUFpQ3FCLFlBQWpDckIsR0FBZ0QsWUFBWTtBQUFBLFlBQ3hELE9BQU8sS0FBS0ssVUFBWixDQUR3RDtBQUFBLFNBQTVETDtRQUlBZ0IsRUFBQUEsQ0FBR2hCLHNCQUFIZ0IsR0FBNEJNLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCdEIsc0JBQTdDZ0IiLCJmaWxlIjoiQ0NQaHlzaWNzUmF5Q2FzdENhbGxiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5mdW5jdGlvbiBQaHlzaWNzUmF5Q2FzdENhbGxiYWNrICgpIHtcbiAgICB0aGlzLl90eXBlID0gMDtcbiAgICB0aGlzLl9maXh0dXJlcyA9IFtdO1xuICAgIHRoaXMuX3BvaW50cyA9IFtdO1xuICAgIHRoaXMuX25vcm1hbHMgPSBbXTtcbiAgICB0aGlzLl9mcmFjdGlvbnMgPSBbXTtcbn1cblxuUGh5c2ljc1JheUNhc3RDYWxsYmFjay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fZml4dHVyZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9wb2ludHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9ub3JtYWxzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhY3Rpb25zLmxlbmd0aCA9IDA7XG59O1xuXG5QaHlzaWNzUmF5Q2FzdENhbGxiYWNrLnByb3RvdHlwZS5SZXBvcnRGaXh0dXJlID0gZnVuY3Rpb24gKGZpeHR1cmUsIHBvaW50LCBub3JtYWwsIGZyYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuX3R5cGUgPT09IDApIHsgLy8gY2xvc2VzdFxuICAgICAgICB0aGlzLl9maXh0dXJlc1swXSA9IGZpeHR1cmU7XG4gICAgICAgIHRoaXMuX3BvaW50c1swXSA9IHBvaW50O1xuICAgICAgICB0aGlzLl9ub3JtYWxzWzBdID0gbm9ybWFsO1xuICAgICAgICB0aGlzLl9mcmFjdGlvbnNbMF0gPSBmcmFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGZyYWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpeHR1cmVzLnB1c2goZml4dHVyZSk7XG4gICAgdGhpcy5fcG9pbnRzLnB1c2goY2MudjIocG9pbnQpKTtcbiAgICB0aGlzLl9ub3JtYWxzLnB1c2goY2MudjIobm9ybWFsKSk7XG4gICAgdGhpcy5fZnJhY3Rpb25zLnB1c2goZnJhY3Rpb24pO1xuICAgIFxuICAgIGlmICh0aGlzLl90eXBlID09PSAxKSB7IC8vIGFueVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdHlwZSA+PSAyKSB7IC8vIGFsbFxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhY3Rpb247XG59O1xuXG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldEZpeHR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9maXh0dXJlcztcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldFBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRzO1xufTtcblxuUGh5c2ljc1JheUNhc3RDYWxsYmFjay5wcm90b3R5cGUuZ2V0Tm9ybWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFscztcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldEZyYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhY3Rpb25zO1xufTtcblxuY2MuUGh5c2ljc1JheUNhc3RDYWxsYmFjayA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc1JheUNhc3RDYWxsYmFjaztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBQaHlzaWNzUmF5Q2FzdENhbGxiYWNrKCkge1xuICAgIHRoaXMuX3R5cGUgPSAwO1xuICAgIHRoaXMuX2ZpeHR1cmVzID0gW107XG4gICAgdGhpcy5fcG9pbnRzID0gW107XG4gICAgdGhpcy5fbm9ybWFscyA9IFtdO1xuICAgIHRoaXMuX2ZyYWN0aW9ucyA9IFtdO1xufVxuXG5QaHlzaWNzUmF5Q2FzdENhbGxiYWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLl9maXh0dXJlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3BvaW50cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX25vcm1hbHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmFjdGlvbnMubGVuZ3RoID0gMDtcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLlJlcG9ydEZpeHR1cmUgPSBmdW5jdGlvbiAoZml4dHVyZSwgcG9pbnQsIG5vcm1hbCwgZnJhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gMCkge1xuICAgICAgICAvLyBjbG9zZXN0XG4gICAgICAgIHRoaXMuX2ZpeHR1cmVzWzBdID0gZml4dHVyZTtcbiAgICAgICAgdGhpcy5fcG9pbnRzWzBdID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuX25vcm1hbHNbMF0gPSBub3JtYWw7XG4gICAgICAgIHRoaXMuX2ZyYWN0aW9uc1swXSA9IGZyYWN0aW9uO1xuICAgICAgICByZXR1cm4gZnJhY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5fZml4dHVyZXMucHVzaChmaXh0dXJlKTtcbiAgICB0aGlzLl9wb2ludHMucHVzaChjYy52Mihwb2ludCkpO1xuICAgIHRoaXMuX25vcm1hbHMucHVzaChjYy52Mihub3JtYWwpKTtcbiAgICB0aGlzLl9mcmFjdGlvbnMucHVzaChmcmFjdGlvbik7XG5cbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gMSkge1xuICAgICAgICAvLyBhbnlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90eXBlID49IDIpIHtcbiAgICAgICAgLy8gYWxsXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFjdGlvbjtcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldEZpeHR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9maXh0dXJlcztcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldFBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRzO1xufTtcblxuUGh5c2ljc1JheUNhc3RDYWxsYmFjay5wcm90b3R5cGUuZ2V0Tm9ybWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9ybWFscztcbn07XG5cblBoeXNpY3NSYXlDYXN0Q2FsbGJhY2sucHJvdG90eXBlLmdldEZyYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhY3Rpb25zO1xufTtcblxuY2MuUGh5c2ljc1JheUNhc3RDYWxsYmFjayA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc1JheUNhc3RDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRVR2g1YzJsamMxSmhlVU5oYzNSRFlXeHNZbUZqYXk1cWN5SmRMQ0p1WVcxbGN5STZXeUpRYUhsemFXTnpVbUY1UTJGemRFTmhiR3hpWVdOcklpd2lYM1I1Y0dVaUxDSmZabWw0ZEhWeVpYTWlMQ0pmY0c5cGJuUnpJaXdpWDI1dmNtMWhiSE1pTENKZlpuSmhZM1JwYjI1eklpd2ljSEp2ZEc5MGVYQmxJaXdpYVc1cGRDSXNJblI1Y0dVaUxDSnNaVzVuZEdnaUxDSlNaWEJ2Y25SR2FYaDBkWEpsSWl3aVptbDRkSFZ5WlNJc0luQnZhVzUwSWl3aWJtOXliV0ZzSWl3aVpuSmhZM1JwYjI0aUxDSndkWE5vSWl3aVkyTWlMQ0oyTWlJc0ltZGxkRVpwZUhSMWNtVnpJaXdpWjJWMFVHOXBiblJ6SWl3aVoyVjBUbTl5YldGc2N5SXNJbWRsZEVaeVlXTjBhVzl1Y3lJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRXdRa0VzVTBGQlUwRXNjMEpCUVZRc1IwRkJiVU03UVVGREwwSXNVMEZCUzBNc1MwRkJUQ3hIUVVGaExFTkJRV0k3UVVGRFFTeFRRVUZMUXl4VFFVRk1MRWRCUVdsQ0xFVkJRV3BDTzBGQlEwRXNVMEZCUzBNc1QwRkJUQ3hIUVVGbExFVkJRV1k3UVVGRFFTeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFVkJRV2hDTzBGQlEwRXNVMEZCUzBNc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTklPenRCUVVWRVRDeDFRa0ZCZFVKTkxGTkJRWFpDTEVOQlFXbERReXhKUVVGcVF5eEhRVUYzUXl4VlFVRlZReXhKUVVGV0xFVkJRV2RDTzBGQlEzQkVMRk5CUVV0UUxFdEJRVXdzUjBGQllVOHNTVUZCWWp0QlFVTkJMRk5CUVV0T0xGTkJRVXdzUTBGQlpVOHNUVUZCWml4SFFVRjNRaXhEUVVGNFFqdEJRVU5CTEZOQlFVdE9MRTlCUVV3c1EwRkJZVTBzVFVGQllpeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxGTkJRVXRNTEZGQlFVd3NRMEZCWTBzc1RVRkJaQ3hIUVVGMVFpeERRVUYyUWp0QlFVTkJMRk5CUVV0S0xGVkJRVXdzUTBGQlowSkpMRTFCUVdoQ0xFZEJRWGxDTEVOQlFYcENPMEZCUTBnc1EwRk9SRHM3UVVGUlFWUXNkVUpCUVhWQ1RTeFRRVUYyUWl4RFFVRnBRMGtzWVVGQmFrTXNSMEZCYVVRc1ZVRkJWVU1zVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSkRMRTFCUVRGQ0xFVkJRV3REUXl4UlFVRnNReXhGUVVFMFF6dEJRVU42Uml4UlFVRkpMRXRCUVV0aUxFdEJRVXdzUzBGQlpTeERRVUZ1UWl4RlFVRnpRanRCUVVGRk8wRkJRM0JDTEdGQlFVdERMRk5CUVV3c1EwRkJaU3hEUVVGbUxFbEJRVzlDVXl4UFFVRndRanRCUVVOQkxHRkJRVXRTTEU5QlFVd3NRMEZCWVN4RFFVRmlMRWxCUVd0Q1V5eExRVUZzUWp0QlFVTkJMR0ZCUVV0U0xGRkJRVXdzUTBGQll5eERRVUZrTEVsQlFXMUNVeXhOUVVGdVFqdEJRVU5CTEdGQlFVdFNMRlZCUVV3c1EwRkJaMElzUTBGQmFFSXNTVUZCY1VKVExGRkJRWEpDTzBGQlEwRXNaVUZCVDBFc1VVRkJVRHRCUVVOSU96dEJRVVZFTEZOQlFVdGFMRk5CUVV3c1EwRkJaV0VzU1VGQlppeERRVUZ2UWtvc1QwRkJjRUk3UVVGRFFTeFRRVUZMVWl4UFFVRk1MRU5CUVdGWkxFbEJRV0lzUTBGQmEwSkRMRWRCUVVkRExFVkJRVWdzUTBGQlRVd3NTMEZCVGl4RFFVRnNRanRCUVVOQkxGTkJRVXRTTEZGQlFVd3NRMEZCWTFjc1NVRkJaQ3hEUVVGdFFrTXNSMEZCUjBNc1JVRkJTQ3hEUVVGTlNpeE5RVUZPTEVOQlFXNUNPMEZCUTBFc1UwRkJTMUlzVlVGQlRDeERRVUZuUWxVc1NVRkJhRUlzUTBGQmNVSkVMRkZCUVhKQ096dEJRVVZCTEZGQlFVa3NTMEZCUzJJc1MwRkJUQ3hMUVVGbExFTkJRVzVDTEVWQlFYTkNPMEZCUVVVN1FVRkRjRUlzWlVGQlR5eERRVUZRTzBGQlEwZ3NTMEZHUkN4TlFVZExMRWxCUVVrc1MwRkJTMEVzUzBGQlRDeEpRVUZqTEVOQlFXeENMRVZCUVhGQ08wRkJRVVU3UVVGRGVFSXNaVUZCVHl4RFFVRlFPMEZCUTBnN08wRkJSVVFzVjBGQlQyRXNVVUZCVUR0QlFVTklMRU5CZEVKRU96dEJRWGxDUVdRc2RVSkJRWFZDVFN4VFFVRjJRaXhEUVVGcFExa3NWMEZCYWtNc1IwRkJLME1zV1VGQldUdEJRVU4yUkN4WFFVRlBMRXRCUVV0b1FpeFRRVUZhTzBGQlEwZ3NRMEZHUkRzN1FVRkpRVVlzZFVKQlFYVkNUU3hUUVVGMlFpeERRVUZwUTJFc1UwRkJha01zUjBGQk5rTXNXVUZCV1R0QlFVTnlSQ3hYUVVGUExFdEJRVXRvUWl4UFFVRmFPMEZCUTBnc1EwRkdSRHM3UVVGSlFVZ3NkVUpCUVhWQ1RTeFRRVUYyUWl4RFFVRnBRMk1zVlVGQmFrTXNSMEZCT0VNc1dVRkJXVHRCUVVOMFJDeFhRVUZQTEV0QlFVdG9RaXhSUVVGYU8wRkJRMGdzUTBGR1JEczdRVUZKUVVvc2RVSkJRWFZDVFN4VFFVRjJRaXhEUVVGcFEyVXNXVUZCYWtNc1IwRkJaMFFzV1VGQldUdEJRVU40UkN4WFFVRlBMRXRCUVV0b1FpeFZRVUZhTzBGQlEwZ3NRMEZHUkRzN1FVRkpRVmNzUjBGQlIyaENMSE5DUVVGSUxFZEJRVFJDYzBJc1QwRkJUME1zVDBGQlVDeEhRVUZwUW5aQ0xITkNRVUUzUXlJc0ltWnBiR1VpT2lKRFExQm9lWE5wWTNOU1lYbERZWE4wUTJGc2JHSmhZMnN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55MHlNREU0SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xseHVYRzRnYUhSMGNITTZMeTkzZDNjdVkyOWpiM011WTI5dEwxeHVYRzRnVUdWeWJXbHpjMmx2YmlCcGN5Qm9aWEpsWW5rZ1ozSmhiblJsWkN3Z1puSmxaU0J2WmlCamFHRnlaMlVzSUhSdklHRnVlU0J3WlhKemIyNGdiMkowWVdsdWFXNW5JR0VnWTI5d2VWeHVJRzltSUhSb2FYTWdjMjltZEhkaGNtVWdZVzVrSUdGemMyOWphV0YwWldRZ1pXNW5hVzVsSUhOdmRYSmpaU0JqYjJSbElDaDBhR1VnWENKVGIyWjBkMkZ5WlZ3aUtTd2dZU0JzYVcxcGRHVmtMRnh1SUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh1SUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUIxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYRzRnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhHNWNiaUJVYUdVZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2FXNGdkR2hwY3lCTWFXTmxibk5sSUVGbmNtVmxiV1Z1ZENCaGNtVWdiR2xqWlc1elpXUXNJRzV2ZENCemIyeGtMbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEc1Y2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEc0Z1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEc0Z1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc0Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRseHVJRlJJUlNCVFQwWlVWMEZTUlM1Y2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4dVhHNWNibVoxYm1OMGFXOXVJRkJvZVhOcFkzTlNZWGxEWVhOMFEyRnNiR0poWTJzZ0tDa2dlMXh1SUNBZ0lIUm9hWE11WDNSNWNHVWdQU0F3TzF4dUlDQWdJSFJvYVhNdVgyWnBlSFIxY21WeklEMGdXMTA3WEc0Z0lDQWdkR2hwY3k1ZmNHOXBiblJ6SUQwZ1cxMDdYRzRnSUNBZ2RHaHBjeTVmYm05eWJXRnNjeUE5SUZ0ZE8xeHVJQ0FnSUhSb2FYTXVYMlp5WVdOMGFXOXVjeUE5SUZ0ZE8xeHVmVnh1WEc1UWFIbHphV056VW1GNVEyRnpkRU5oYkd4aVlXTnJMbkJ5YjNSdmRIbHdaUzVwYm1sMElEMGdablZ1WTNScGIyNGdLSFI1Y0dVcElIdGNiaUFnSUNCMGFHbHpMbDkwZVhCbElEMGdkSGx3WlR0Y2JpQWdJQ0IwYUdsekxsOW1hWGgwZFhKbGN5NXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11WDNCdmFXNTBjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFJvYVhNdVgyNXZjbTFoYkhNdWJHVnVaM1JvSUQwZ01EdGNiaUFnSUNCMGFHbHpMbDltY21GamRHbHZibk11YkdWdVozUm9JRDBnTUR0Y2JuMDdYRzVjYmxCb2VYTnBZM05TWVhsRFlYTjBRMkZzYkdKaFkyc3VjSEp2ZEc5MGVYQmxMbEpsY0c5eWRFWnBlSFIxY21VZ1BTQm1kVzVqZEdsdmJpQW9abWw0ZEhWeVpTd2djRzlwYm5Rc0lHNXZjbTFoYkN3Z1puSmhZM1JwYjI0cElIdGNiaUFnSUNCcFppQW9kR2hwY3k1ZmRIbHdaU0E5UFQwZ01Da2dleUF2THlCamJHOXpaWE4wWEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlpwZUhSMWNtVnpXekJkSUQwZ1ptbDRkSFZ5WlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY0c5cGJuUnpXekJkSUQwZ2NHOXBiblE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjV2Y20xaGJITmJNRjBnUFNCdWIzSnRZV3c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlp5WVdOMGFXOXVjMXN3WFNBOUlHWnlZV04wYVc5dU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1puSmhZM1JwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NWZabWw0ZEhWeVpYTXVjSFZ6YUNobWFYaDBkWEpsS1R0Y2JpQWdJQ0IwYUdsekxsOXdiMmx1ZEhNdWNIVnphQ2hqWXk1Mk1paHdiMmx1ZENrcE8xeHVJQ0FnSUhSb2FYTXVYMjV2Y20xaGJITXVjSFZ6YUNoall5NTJNaWh1YjNKdFlXd3BLVHRjYmlBZ0lDQjBhR2x6TGw5bWNtRmpkR2x2Ym5NdWNIVnphQ2htY21GamRHbHZiaWs3WEc0Z0lDQWdYRzRnSUNBZ2FXWWdLSFJvYVhNdVgzUjVjR1VnUFQwOUlERXBJSHNnTHk4Z1lXNTVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJR2xtSUNoMGFHbHpMbDkwZVhCbElENDlJRElwSUhzZ0x5OGdZV3hzWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQm1jbUZqZEdsdmJqdGNibjA3WEc1Y2JseHVVR2g1YzJsamMxSmhlVU5oYzNSRFlXeHNZbUZqYXk1d2NtOTBiM1I1Y0dVdVoyVjBSbWw0ZEhWeVpYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyWnBlSFIxY21Wek8xeHVmVHRjYmx4dVVHaDVjMmxqYzFKaGVVTmhjM1JEWVd4c1ltRmpheTV3Y205MGIzUjVjR1V1WjJWMFVHOXBiblJ6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDl3YjJsdWRITTdYRzU5TzF4dVhHNVFhSGx6YVdOelVtRjVRMkZ6ZEVOaGJHeGlZV05yTG5CeWIzUnZkSGx3WlM1blpYUk9iM0p0WVd4eklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dWIzSnRZV3h6TzF4dWZUdGNibHh1VUdoNWMybGpjMUpoZVVOaGMzUkRZV3hzWW1GamF5NXdjbTkwYjNSNWNHVXVaMlYwUm5KaFkzUnBiMjV6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDltY21GamRHbHZibk03WEc1OU8xeHVYRzVqWXk1UWFIbHphV056VW1GNVEyRnpkRU5oYkd4aVlXTnJJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JRYUhsemFXTnpVbUY1UTJGemRFTmhiR3hpWVdOck8xeHVJbDE5Il19