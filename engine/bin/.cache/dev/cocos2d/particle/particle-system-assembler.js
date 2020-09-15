(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/particle/particle-system-assembler.js';
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
        var _iaRenderData = require('../renderer/render-data/ia-render-data');
        var _iaRenderData2 = _interopRequireDefault(_iaRenderData);
        var _inputAssembler = require('../renderer/core/input-assembler');
        var _inputAssembler2 = _interopRequireDefault(_inputAssembler);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        var ParticleSystem = require('./CCParticleSystem');
        var renderer = require('../core/renderer/');
        var vfmtPosUvColor = require('../core/renderer/webgl/vertex-format').vfmtPosUvColor;
        var QuadBuffer = require('../core/renderer/webgl/quad-buffer');
        var particleSystemAssembler = {
            createIA: function createIA(comp) {
                var device = renderer.device;
                comp._vertexFormat = vfmtPosUvColor;
                comp._buffer = new QuadBuffer(renderer._handle, vfmtPosUvColor);
                comp._ia = new _inputAssembler2.default();
                comp._ia._vertexBuffer = comp._buffer._vb;
                comp._ia._indexBuffer = comp._buffer._ib;
                comp._ia._start = 0;
                comp._ia._count = 0;
            },
            updateRenderData: function updateRenderData(comp) {
                if (!comp._renderData) {
                    comp._renderData = new _iaRenderData2.default();
                }
                comp._renderData.ia = comp._ia;
                comp._renderData.material = comp.sharedMaterials[0];
            },
            renderIA: function renderIA(comp, renderer) {
                renderer._flushIA(comp._renderData);
            }
        };
        ParticleSystem._assembler = particleSystemAssembler;
        module.exports = particleSystemAssembler;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2xlLXN5c3RlbS1hc3NlbWJsZXIuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9wYXJ0aWNsZS9wYXJ0aWNsZS1zeXN0ZW0tYXNzZW1ibGVyLmpzIl0sIm5hbWVzIjpbIlBhcnRpY2xlU3lzdGVtIiwicmVxdWlyZSIsInJlbmRlcmVyIiwidmZtdFBvc1V2Q29sb3IiLCJRdWFkQnVmZmVyIiwicGFydGljbGVTeXN0ZW1Bc3NlbWJsZXIiLCJjcmVhdGVJQSIsImNvbXAiLCJkZXZpY2UiLCJfdmVydGV4Rm9ybWF0IiwiX2J1ZmZlciIsIl9oYW5kbGUiLCJfaWEiLCJJbnB1dEFzc2VtYmxlciIsIl92ZXJ0ZXhCdWZmZXIiLCJfdmIiLCJfaW5kZXhCdWZmZXIiLCJfaWIiLCJfc3RhcnQiLCJfY291bnQiLCJ1cGRhdGVSZW5kZXJEYXRhIiwiX3JlbmRlckRhdGEiLCJJQVJlbmRlckRhdGEiLCJpYSIsIm1hdGVyaWFsIiwic2hhcmVkTWF0ZXJpYWxzIiwicmVuZGVySUEiLCJfZmx1c2hJQSIsIl9hc3NlbWJsZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBeUJBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7O1FBT0EsT0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBOzs7Ozs7Ozs7UUFQQSxJQUFBLGFBQUEsR0FBQSxPQUFBLENBQUEsd0NBQUEsQ0FBQTs7UUFPQSxJQUFBLGVBQUEsR0FBQSxPQUFBLENBQUEsa0NBQUEsQ0FBQTs7Ozs7UUFMQSxJQUFNQSxjQUFBQSxHQUFpQkMsT0FBQUEsQ0FBUSxvQkFBUkEsQ0FBdkI7UUFDQSxJQUFNQyxRQUFBQSxHQUFXRCxPQUFBQSxDQUFRLG1CQUFSQSxDQUFqQjtRQUNBLElBQU1FLGNBQUFBLEdBQWlCRixPQUFBQSxDQUFRLHNDQUFSQSxFQUFnREUsY0FBdkU7UUFDQSxJQUFNQyxVQUFBQSxHQUFhSCxPQUFBQSxDQUFRLG9DQUFSQSxDQUFuQjtRQUlBLElBQUlJLHVCQUFBQSxHQUEwQjtBQUFBLFlBQzFCQyxRQUFBQSxFQUQwQixTQUFBLFFBQUEsQ0FDaEJDLElBRGdCLEVBQ1Y7QUFBQSxnQkFDWixJQUFJQyxNQUFBQSxHQUFTTixRQUFBQSxDQUFTTSxNQUF0QixDQURZO0FBQUEsZ0JBR1pELElBQUFBLENBQUtFLGFBQUxGLEdBQXFCSixjQUFyQkksQ0FIWTtBQUFBLGdCQU1aQSxJQUFBQSxDQUFLRyxPQUFMSCxHQUFlLElBQUlILFVBQUosQ0FBZUYsUUFBQUEsQ0FBU1MsT0FBeEIsRUFBaUNSLGNBQWpDLENBQWZJLENBTlk7QUFBQSxnQkFRWkEsSUFBQUEsQ0FBS0ssR0FBTEwsR0FBVyxJQUFJTSxnQkFBQUEsQ0FBQUEsT0FBSixFQUFYTixDQVJZO0FBQUEsZ0JBU1pBLElBQUFBLENBQUtLLEdBQUxMLENBQVNPLGFBQVRQLEdBQXlCQSxJQUFBQSxDQUFLRyxPQUFMSCxDQUFhUSxHQUF0Q1IsQ0FUWTtBQUFBLGdCQVVaQSxJQUFBQSxDQUFLSyxHQUFMTCxDQUFTUyxZQUFUVCxHQUF3QkEsSUFBQUEsQ0FBS0csT0FBTEgsQ0FBYVUsR0FBckNWLENBVlk7QUFBQSxnQkFXWkEsSUFBQUEsQ0FBS0ssR0FBTEwsQ0FBU1csTUFBVFgsR0FBa0IsQ0FBbEJBLENBWFk7QUFBQSxnQkFZWkEsSUFBQUEsQ0FBS0ssR0FBTEwsQ0FBU1ksTUFBVFosR0FBa0IsQ0FBbEJBLENBWlk7QUFBQSxhQURVO0FBQUEsWUFnQjFCYSxnQkFBQUEsRUFoQjBCLFNBQUEsZ0JBQUEsQ0FnQlJiLElBaEJRLEVBZ0JGO0FBQUEsZ0JBQ3BCLElBQUksQ0FBQ0EsSUFBQUEsQ0FBS2MsV0FBVixFQUF1QjtBQUFBLG9CQUNuQmQsSUFBQUEsQ0FBS2MsV0FBTGQsR0FBbUIsSUFBSWUsY0FBQUEsQ0FBQUEsT0FBSixFQUFuQmYsQ0FEbUI7QUFBQSxpQkFESDtBQUFBLGdCQUlwQkEsSUFBQUEsQ0FBS2MsV0FBTGQsQ0FBaUJnQixFQUFqQmhCLEdBQXNCQSxJQUFBQSxDQUFLSyxHQUEzQkwsQ0FKb0I7QUFBQSxnQkFLcEJBLElBQUFBLENBQUtjLFdBQUxkLENBQWlCaUIsUUFBakJqQixHQUE0QkEsSUFBQUEsQ0FBS2tCLGVBQUxsQixDQUFxQixDQUFyQkEsQ0FBNUJBLENBTG9CO0FBQUEsYUFoQkU7QUFBQSxZQXdCMUJtQixRQUFBQSxFQXhCMEIsU0FBQSxRQUFBLENBd0JoQm5CLElBeEJnQixFQXdCVkwsUUF4QlUsRUF3QkE7QUFBQSxnQkFDdEJBLFFBQUFBLENBQVN5QixRQUFUekIsQ0FBa0JLLElBQUFBLENBQUtjLFdBQXZCbkIsRUFEc0I7QUFBQSxhQXhCQTtBQUFBLFNBQTlCO1FBNkJBRixjQUFBQSxDQUFlNEIsVUFBZjVCLEdBQTRCSyx1QkFBNUJMO1FBRUE2QixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQnhCLHVCQUFqQndCIiwiZmlsZSI6InBhcnRpY2xlLXN5c3RlbS1hc3NlbWJsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kICBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIENodWtvbmcgQWlwdSByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgSUFSZW5kZXJEYXRhIGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlci1kYXRhL2lhLXJlbmRlci1kYXRhJztcbiBcbmNvbnN0IFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSgnLi9DQ1BhcnRpY2xlU3lzdGVtJyk7XG5jb25zdCByZW5kZXJlciA9IHJlcXVpcmUoJy4uL2NvcmUvcmVuZGVyZXIvJyk7XG5jb25zdCB2Zm10UG9zVXZDb2xvciA9IHJlcXVpcmUoJy4uL2NvcmUvcmVuZGVyZXIvd2ViZ2wvdmVydGV4LWZvcm1hdCcpLnZmbXRQb3NVdkNvbG9yO1xuY29uc3QgUXVhZEJ1ZmZlciA9IHJlcXVpcmUoJy4uL2NvcmUvcmVuZGVyZXIvd2ViZ2wvcXVhZC1idWZmZXInKTtcblxuaW1wb3J0IElucHV0QXNzZW1ibGVyIGZyb20gJy4uL3JlbmRlcmVyL2NvcmUvaW5wdXQtYXNzZW1ibGVyJztcblxudmFyIHBhcnRpY2xlU3lzdGVtQXNzZW1ibGVyID0ge1xuICAgIGNyZWF0ZUlBIChjb21wKSB7XG4gICAgICAgIGxldCBkZXZpY2UgPSByZW5kZXJlci5kZXZpY2U7XG4gICAgICAgIC8vIFZlcnRleCBmb3JtYXQgZGVmaW5lcyB2ZXJ0ZXggYnVmZmVyIGxheW91dDogeCwgeSwgdSwgdiBjb2xvclxuICAgICAgICBjb21wLl92ZXJ0ZXhGb3JtYXQgPSB2Zm10UG9zVXZDb2xvcjtcblxuICAgICAgICAvLyBDcmVhdGUgcXVhZCBidWZmZXIgZm9yIHZlcnRleCBhbmQgaW5kZXhcbiAgICAgICAgY29tcC5fYnVmZmVyID0gbmV3IFF1YWRCdWZmZXIocmVuZGVyZXIuX2hhbmRsZSwgdmZtdFBvc1V2Q29sb3IpO1xuXG4gICAgICAgIGNvbXAuX2lhID0gbmV3IElucHV0QXNzZW1ibGVyKCk7XG4gICAgICAgIGNvbXAuX2lhLl92ZXJ0ZXhCdWZmZXIgPSBjb21wLl9idWZmZXIuX3ZiO1xuICAgICAgICBjb21wLl9pYS5faW5kZXhCdWZmZXIgPSBjb21wLl9idWZmZXIuX2liO1xuICAgICAgICBjb21wLl9pYS5fc3RhcnQgPSAwO1xuICAgICAgICBjb21wLl9pYS5fY291bnQgPSAwO1xuICAgIH0sXG5cbiAgICB1cGRhdGVSZW5kZXJEYXRhIChjb21wKSB7XG4gICAgICAgIGlmICghY29tcC5fcmVuZGVyRGF0YSkge1xuICAgICAgICAgICAgY29tcC5fcmVuZGVyRGF0YSA9IG5ldyBJQVJlbmRlckRhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wLl9yZW5kZXJEYXRhLmlhID0gY29tcC5faWE7XG4gICAgICAgIGNvbXAuX3JlbmRlckRhdGEubWF0ZXJpYWwgPSBjb21wLnNoYXJlZE1hdGVyaWFsc1swXTtcbiAgICB9LFxuXG4gICAgcmVuZGVySUEgKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLl9mbHVzaElBKGNvbXAuX3JlbmRlckRhdGEpO1xuICAgIH1cbn07XG5cblBhcnRpY2xlU3lzdGVtLl9hc3NlbWJsZXIgPSBwYXJ0aWNsZVN5c3RlbUFzc2VtYmxlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJ0aWNsZVN5c3RlbUFzc2VtYmxlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaWFSZW5kZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvcmVuZGVyLWRhdGEvaWEtcmVuZGVyLWRhdGEnKTtcblxudmFyIF9pYVJlbmRlckRhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWFSZW5kZXJEYXRhKTtcblxudmFyIF9pbnB1dEFzc2VtYmxlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvcmUvaW5wdXQtYXNzZW1ibGVyJyk7XG5cbnZhciBfaW5wdXRBc3NlbWJsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5wdXRBc3NlbWJsZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUGFydGljbGVTeXN0ZW0gPSByZXF1aXJlKCcuL0NDUGFydGljbGVTeXN0ZW0nKTsgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwczovL3d3dy5jb2Nvcy5jb20vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENodWtvbmcgQWlwdSByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFNPRlRXQVJFLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi9jb3JlL3JlbmRlcmVyLycpO1xudmFyIHZmbXRQb3NVdkNvbG9yID0gcmVxdWlyZSgnLi4vY29yZS9yZW5kZXJlci93ZWJnbC92ZXJ0ZXgtZm9ybWF0JykudmZtdFBvc1V2Q29sb3I7XG52YXIgUXVhZEJ1ZmZlciA9IHJlcXVpcmUoJy4uL2NvcmUvcmVuZGVyZXIvd2ViZ2wvcXVhZC1idWZmZXInKTtcblxudmFyIHBhcnRpY2xlU3lzdGVtQXNzZW1ibGVyID0ge1xuICAgIGNyZWF0ZUlBOiBmdW5jdGlvbiBjcmVhdGVJQShjb21wKSB7XG4gICAgICAgIHZhciBkZXZpY2UgPSByZW5kZXJlci5kZXZpY2U7XG4gICAgICAgIC8vIFZlcnRleCBmb3JtYXQgZGVmaW5lcyB2ZXJ0ZXggYnVmZmVyIGxheW91dDogeCwgeSwgdSwgdiBjb2xvclxuICAgICAgICBjb21wLl92ZXJ0ZXhGb3JtYXQgPSB2Zm10UG9zVXZDb2xvcjtcblxuICAgICAgICAvLyBDcmVhdGUgcXVhZCBidWZmZXIgZm9yIHZlcnRleCBhbmQgaW5kZXhcbiAgICAgICAgY29tcC5fYnVmZmVyID0gbmV3IFF1YWRCdWZmZXIocmVuZGVyZXIuX2hhbmRsZSwgdmZtdFBvc1V2Q29sb3IpO1xuXG4gICAgICAgIGNvbXAuX2lhID0gbmV3IF9pbnB1dEFzc2VtYmxlcjIuZGVmYXVsdCgpO1xuICAgICAgICBjb21wLl9pYS5fdmVydGV4QnVmZmVyID0gY29tcC5fYnVmZmVyLl92YjtcbiAgICAgICAgY29tcC5faWEuX2luZGV4QnVmZmVyID0gY29tcC5fYnVmZmVyLl9pYjtcbiAgICAgICAgY29tcC5faWEuX3N0YXJ0ID0gMDtcbiAgICAgICAgY29tcC5faWEuX2NvdW50ID0gMDtcbiAgICB9LFxuICAgIHVwZGF0ZVJlbmRlckRhdGE6IGZ1bmN0aW9uIHVwZGF0ZVJlbmRlckRhdGEoY29tcCkge1xuICAgICAgICBpZiAoIWNvbXAuX3JlbmRlckRhdGEpIHtcbiAgICAgICAgICAgIGNvbXAuX3JlbmRlckRhdGEgPSBuZXcgX2lhUmVuZGVyRGF0YTIuZGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXAuX3JlbmRlckRhdGEuaWEgPSBjb21wLl9pYTtcbiAgICAgICAgY29tcC5fcmVuZGVyRGF0YS5tYXRlcmlhbCA9IGNvbXAuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgIH0sXG4gICAgcmVuZGVySUE6IGZ1bmN0aW9uIHJlbmRlcklBKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLl9mbHVzaElBKGNvbXAuX3JlbmRlckRhdGEpO1xuICAgIH1cbn07XG5cblBhcnRpY2xlU3lzdGVtLl9hc3NlbWJsZXIgPSBwYXJ0aWNsZVN5c3RlbUFzc2VtYmxlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJ0aWNsZVN5c3RlbUFzc2VtYmxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQmhjblJwWTJ4bExYTjVjM1JsYlMxaGMzTmxiV0pzWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdGeWRHbGpiR1ZUZVhOMFpXMGlMQ0p5WlhGMWFYSmxJaXdpY21WdVpHVnlaWElpTENKMlptMTBVRzl6VlhaRGIyeHZjaUlzSWxGMVlXUkNkV1ptWlhJaUxDSndZWEowYVdOc1pWTjVjM1JsYlVGemMyVnRZbXhsY2lJc0ltTnlaV0YwWlVsQklpd2lZMjl0Y0NJc0ltUmxkbWxqWlNJc0lsOTJaWEowWlhoR2IzSnRZWFFpTENKZlluVm1abVZ5SWl3aVgyaGhibVJzWlNJc0lsOXBZU0lzSWtsdWNIVjBRWE56WlcxaWJHVnlJaXdpWDNabGNuUmxlRUoxWm1abGNpSXNJbDkyWWlJc0lsOXBibVJsZUVKMVptWmxjaUlzSWw5cFlpSXNJbDl6ZEdGeWRDSXNJbDlqYjNWdWRDSXNJblZ3WkdGMFpWSmxibVJsY2tSaGRHRWlMQ0pmY21WdVpHVnlSR0YwWVNJc0lrbEJVbVZ1WkdWeVJHRjBZU0lzSW1saElpd2liV0YwWlhKcFlXd2lMQ0p6YUdGeVpXUk5ZWFJsY21saGJITWlMQ0p5Wlc1a1pYSkpRU0lzSWw5bWJIVnphRWxCSWl3aVgyRnpjMlZ0WW14bGNpSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJlVUpCT3pzN08wRkJUMEU3T3pzN096dEJRVXhCTEVsQlFVMUJMR2xDUVVGcFFrTXNVVUZCVVN4dlFrRkJVaXhEUVVGMlFpeERMRU5CTTBKQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk5FSkJMRWxCUVUxRExGZEJRVmRFTEZGQlFWRXNiVUpCUVZJc1EwRkJha0k3UVVGRFFTeEpRVUZOUlN4cFFrRkJhVUpHTEZGQlFWRXNjME5CUVZJc1JVRkJaMFJGTEdOQlFYWkZPMEZCUTBFc1NVRkJUVU1zWVVGQllVZ3NVVUZCVVN4dlEwRkJVaXhEUVVGdVFqczdRVUZKUVN4SlFVRkpTU3d3UWtGQk1FSTdRVUZETVVKRExGbEJSREJDTEc5Q1FVTm9Ra01zU1VGRVowSXNSVUZEVmp0QlFVTmFMRmxCUVVsRExGTkJRVk5PTEZOQlFWTk5MRTFCUVhSQ08wRkJRMEU3UVVGRFFVUXNZVUZCUzBVc1lVRkJUQ3hIUVVGeFFrNHNZMEZCY2tJN08wRkJSVUU3UVVGRFFVa3NZVUZCUzBjc1QwRkJUQ3hIUVVGbExFbEJRVWxPTEZWQlFVb3NRMEZCWlVZc1UwRkJVMU1zVDBGQmVFSXNSVUZCYVVOU0xHTkJRV3BETEVOQlFXWTdPMEZCUlVGSkxHRkJRVXRMTEVkQlFVd3NSMEZCVnl4SlFVRkpReXgzUWtGQlNpeEZRVUZZTzBGQlEwRk9MR0ZCUVV0TExFZEJRVXdzUTBGQlUwVXNZVUZCVkN4SFFVRjVRbEFzUzBGQlMwY3NUMEZCVEN4RFFVRmhTeXhIUVVGMFF6dEJRVU5CVWl4aFFVRkxTeXhIUVVGTUxFTkJRVk5KTEZsQlFWUXNSMEZCZDBKVUxFdEJRVXRITEU5QlFVd3NRMEZCWVU4c1IwRkJja003UVVGRFFWWXNZVUZCUzBzc1IwRkJUQ3hEUVVGVFRTeE5RVUZVTEVkQlFXdENMRU5CUVd4Q08wRkJRMEZZTEdGQlFVdExMRWRCUVV3c1EwRkJVMDhzVFVGQlZDeEhRVUZyUWl4RFFVRnNRanRCUVVOSUxFdEJaSGxDTzBGQlowSXhRa01zYjBKQmFFSXdRaXcwUWtGblFsSmlMRWxCYUVKUkxFVkJaMEpHTzBGQlEzQkNMRmxCUVVrc1EwRkJRMEVzUzBGQlMyTXNWMEZCVml4RlFVRjFRanRCUVVOdVFtUXNhVUpCUVV0akxGZEJRVXdzUjBGQmJVSXNTVUZCU1VNc2MwSkJRVW9zUlVGQmJrSTdRVUZEU0R0QlFVTkVaaXhoUVVGTFl5eFhRVUZNTEVOQlFXbENSU3hGUVVGcVFpeEhRVUZ6UW1oQ0xFdEJRVXRMTEVkQlFUTkNPMEZCUTBGTUxHRkJRVXRqTEZkQlFVd3NRMEZCYVVKSExGRkJRV3BDTEVkQlFUUkNha0lzUzBGQlMydENMR1ZCUVV3c1EwRkJjVUlzUTBGQmNrSXNRMEZCTlVJN1FVRkRTQ3hMUVhSQ2VVSTdRVUYzUWpGQ1F5eFpRWGhDTUVJc2IwSkJkMEpvUW01Q0xFbEJlRUpuUWl4RlFYZENWa3dzVVVGNFFsVXNSVUYzUWtFN1FVRkRkRUpCTEdsQ1FVRlRlVUlzVVVGQlZDeERRVUZyUW5CQ0xFdEJRVXRqTEZkQlFYWkNPMEZCUTBnN1FVRXhRbmxDTEVOQlFUbENPenRCUVRaQ1FYSkNMR1ZCUVdVMFFpeFZRVUZtTEVkQlFUUkNka0lzZFVKQlFUVkNPenRCUVVWQmQwSXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFucENMSFZDUVVGcVFpSXNJbVpwYkdVaU9pSndZWEowYVdOc1pTMXplWE4wWlcwdFlYTnpaVzFpYkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhHNWNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhHNWNiaUJRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhHNGdiMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCbGJtZHBibVVnYzI5MWNtTmxJR052WkdVZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQmhJR3hwYldsMFpXUXNYRzRnSUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNBZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYRzRnZEc4Z2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOXNaV3g1SUhSdklHUmxkbVZzYjNBZ1oyRnRaWE1nYjI0Z2VXOTFjaUIwWVhKblpYUWdjR3hoZEdadmNtMXpMaUJaYjNVZ2MyaGhiR3hjYmlBZ2JtOTBJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52Wm5SM1lYSmxJR1p2Y2lCa1pYWmxiRzl3YVc1bklHOTBhR1Z5SUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUhSb1lYUW5jMXh1SUNCMWMyVmtJR1p2Y2lCa1pYWmxiRzl3YVc1bklHZGhiV1Z6TGlCWmIzVWdZWEpsSUc1dmRDQm5jbUZ1ZEdWa0lIUnZJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzWEc0Z0lITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCRGIyTnZjeUJEY21WaGRHOXlMbHh1WEc0Z1ZHaGxJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJR2x1SUhSb2FYTWdUR2xqWlc1elpTQkJaM0psWlcxbGJuUWdZWEpsSUd4cFkyVnVjMlZrTENCdWIzUWdjMjlzWkM1Y2JpQkRhSFZyYjI1bklFRnBjSFVnY21WelpYSjJaWE1nWVd4c0lISnBaMmgwY3lCdWIzUWdaWGh3Y21WemMyeDVJR2R5WVc1MFpXUWdkRzhnZVc5MUxseHVYRzRnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHVJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFlnVFVWU1EwaEJUbFJCUWtsTVNWUlpMRnh1SUVaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHVJRUZWVkVoUFVsTWdUMUlnUTA5UVdWSkpSMGhVSUVoUFRFUkZVbE1nUWtVZ1RFbEJRa3hGSUVaUFVpQkJUbGtnUTB4QlNVMHNJRVJCVFVGSFJWTWdUMUlnVDFSSVJWSmNiaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxGeHVJRTlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlNCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTVjYmlCVVNFVWdVMDlHVkZkQlVrVXVYRzRnS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpOWNibHh1YVcxd2IzSjBJRWxCVW1WdVpHVnlSR0YwWVNCbWNtOXRJQ2N1TGk5eVpXNWtaWEpsY2k5eVpXNWtaWEl0WkdGMFlTOXBZUzF5Wlc1a1pYSXRaR0YwWVNjN1hHNGdYRzVqYjI1emRDQlFZWEowYVdOc1pWTjVjM1JsYlNBOUlISmxjWFZwY21Vb0p5NHZRME5RWVhKMGFXTnNaVk41YzNSbGJTY3BPMXh1WTI5dWMzUWdjbVZ1WkdWeVpYSWdQU0J5WlhGMWFYSmxLQ2N1TGk5amIzSmxMM0psYm1SbGNtVnlMeWNwTzF4dVkyOXVjM1FnZG1adGRGQnZjMVYyUTI5c2IzSWdQU0J5WlhGMWFYSmxLQ2N1TGk5amIzSmxMM0psYm1SbGNtVnlMM2RsWW1kc0wzWmxjblJsZUMxbWIzSnRZWFFuS1M1MlptMTBVRzl6VlhaRGIyeHZjanRjYm1OdmJuTjBJRkYxWVdSQ2RXWm1aWElnUFNCeVpYRjFhWEpsS0NjdUxpOWpiM0psTDNKbGJtUmxjbVZ5TDNkbFltZHNMM0YxWVdRdFluVm1abVZ5SnlrN1hHNWNibWx0Y0c5eWRDQkpibkIxZEVGemMyVnRZbXhsY2lCbWNtOXRJQ2N1TGk5eVpXNWtaWEpsY2k5amIzSmxMMmx1Y0hWMExXRnpjMlZ0WW14bGNpYzdYRzVjYm5aaGNpQndZWEowYVdOc1pWTjVjM1JsYlVGemMyVnRZbXhsY2lBOUlIdGNiaUFnSUNCamNtVmhkR1ZKUVNBb1kyOXRjQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdaR1YyYVdObElEMGdjbVZ1WkdWeVpYSXVaR1YyYVdObE8xeHVJQ0FnSUNBZ0lDQXZMeUJXWlhKMFpYZ2dabTl5YldGMElHUmxabWx1WlhNZ2RtVnlkR1Y0SUdKMVptWmxjaUJzWVhsdmRYUTZJSGdzSUhrc0lIVXNJSFlnWTI5c2IzSmNiaUFnSUNBZ0lDQWdZMjl0Y0M1ZmRtVnlkR1Y0Um05eWJXRjBJRDBnZG1adGRGQnZjMVYyUTI5c2IzSTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1EzSmxZWFJsSUhGMVlXUWdZblZtWm1WeUlHWnZjaUIyWlhKMFpYZ2dZVzVrSUdsdVpHVjRYRzRnSUNBZ0lDQWdJR052YlhBdVgySjFabVpsY2lBOUlHNWxkeUJSZFdGa1FuVm1abVZ5S0hKbGJtUmxjbVZ5TGw5b1lXNWtiR1VzSUhabWJYUlFiM05WZGtOdmJHOXlLVHRjYmx4dUlDQWdJQ0FnSUNCamIyMXdMbDlwWVNBOUlHNWxkeUJKYm5CMWRFRnpjMlZ0WW14bGNpZ3BPMXh1SUNBZ0lDQWdJQ0JqYjIxd0xsOXBZUzVmZG1WeWRHVjRRblZtWm1WeUlEMGdZMjl0Y0M1ZlluVm1abVZ5TGw5MllqdGNiaUFnSUNBZ0lDQWdZMjl0Y0M1ZmFXRXVYMmx1WkdWNFFuVm1abVZ5SUQwZ1kyOXRjQzVmWW5WbVptVnlMbDlwWWp0Y2JpQWdJQ0FnSUNBZ1kyOXRjQzVmYVdFdVgzTjBZWEowSUQwZ01EdGNiaUFnSUNBZ0lDQWdZMjl0Y0M1ZmFXRXVYMk52ZFc1MElEMGdNRHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkWEJrWVhSbFVtVnVaR1Z5UkdGMFlTQW9ZMjl0Y0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVdOdmJYQXVYM0psYm1SbGNrUmhkR0VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052YlhBdVgzSmxibVJsY2tSaGRHRWdQU0J1WlhjZ1NVRlNaVzVrWlhKRVlYUmhLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kyOXRjQzVmY21WdVpHVnlSR0YwWVM1cFlTQTlJR052YlhBdVgybGhPMXh1SUNBZ0lDQWdJQ0JqYjIxd0xsOXlaVzVrWlhKRVlYUmhMbTFoZEdWeWFXRnNJRDBnWTI5dGNDNXphR0Z5WldSTllYUmxjbWxoYkhOYk1GMDdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lISmxibVJsY2tsQklDaGpiMjF3TENCeVpXNWtaWEpsY2lrZ2UxeHVJQ0FnSUNBZ0lDQnlaVzVrWlhKbGNpNWZabXgxYzJoSlFTaGpiMjF3TGw5eVpXNWtaWEpFWVhSaEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc1UVlYSjBhV05zWlZONWMzUmxiUzVmWVhOelpXMWliR1Z5SUQwZ2NHRnlkR2xqYkdWVGVYTjBaVzFCYzNObGJXSnNaWEk3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NHRnlkR2xqYkdWVGVYTjBaVzFCYzNObGJXSnNaWEk3SWwxOSJdfQ==