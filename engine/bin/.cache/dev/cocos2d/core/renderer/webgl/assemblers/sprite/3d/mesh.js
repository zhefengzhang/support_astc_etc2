(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/sprite/3d/mesh.js';
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
        var js = require('../../../../../platform/js');
        var assembler = require('../2d/mesh');
        var fillVerticesWithoutCalc3D = require('../../utils').fillVerticesWithoutCalc3D;
        var vec3 = cc.vmath.vec3;
        var vec3_temp = vec3.create();
        module.exports = js.addon({
            updateWorldVerts: function updateWorldVerts(sprite) {
                var node = sprite.node, renderData = sprite._renderData, data = renderData._data;
                var matrix = node._worldMatrix;
                for (var i = 0, l = renderData.vertexCount; i < l; i++) {
                    var local = data[i + l];
                    var world = data[i];
                    vec3.set(vec3_temp, local.x, local.y, 0);
                    vec3.transformMat4(world, vec3_temp, matrix);
                }
            },
            fillBuffers: function fillBuffers(sprite, renderer) {
                var vertices = sprite.spriteFrame.vertices;
                if (!vertices) {
                    return;
                }
                if (renderer.worldMatDirty) {
                    this.updateWorldVerts(sprite);
                }
                var buffer = renderer._meshBuffer3D;
                var node = sprite.node;
                var offsetInfo = fillVerticesWithoutCalc3D(node, buffer, sprite._renderData, node._color._val);
                var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
                var triangles = vertices.triangles;
                for (var i = 0, l = triangles.length; i < l; i++) {
                    ibuf[indiceOffset++] = vertexId + triangles[i];
                }
            }
        }, assembler);
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2guanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9jb3JlL3JlbmRlcmVyL3dlYmdsL2Fzc2VtYmxlcnMvc3ByaXRlLzNkL21lc2guanMiXSwibmFtZXMiOlsianMiLCJyZXF1aXJlIiwiYXNzZW1ibGVyIiwiZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRCIsInZlYzMiLCJjYyIsInZtYXRoIiwidmVjM190ZW1wIiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZG9uIiwidXBkYXRlV29ybGRWZXJ0cyIsInNwcml0ZSIsIm5vZGUiLCJyZW5kZXJEYXRhIiwiX3JlbmRlckRhdGEiLCJkYXRhIiwiX2RhdGEiLCJtYXRyaXgiLCJfd29ybGRNYXRyaXgiLCJpIiwibCIsInZlcnRleENvdW50IiwibG9jYWwiLCJ3b3JsZCIsInNldCIsIngiLCJ5IiwidHJhbnNmb3JtTWF0NCIsImZpbGxCdWZmZXJzIiwicmVuZGVyZXIiLCJ2ZXJ0aWNlcyIsInNwcml0ZUZyYW1lIiwid29ybGRNYXREaXJ0eSIsImJ1ZmZlciIsIl9tZXNoQnVmZmVyM0QiLCJvZmZzZXRJbmZvIiwiX2NvbG9yIiwiX3ZhbCIsImlidWYiLCJfaURhdGEiLCJpbmRpY2VPZmZzZXQiLCJ2ZXJ0ZXhJZCIsInZlcnRleE9mZnNldCIsInRyaWFuZ2xlcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBeUJBLElBQU1BLEVBQUFBLEdBQUtDLE9BQUFBLENBQVEsNEJBQVJBLENBQVg7UUFDQSxJQUFNQyxTQUFBQSxHQUFZRCxPQUFBQSxDQUFRLFlBQVJBLENBQWxCO1FBQ0EsSUFBTUUseUJBQUFBLEdBQTRCRixPQUFBQSxDQUFRLGFBQVJBLEVBQXVCRSx5QkFBekQ7UUFFQSxJQUFNQyxJ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QVZ3QixDQUFsQ0wsQ0FEOEM7QUFBQSxpQkFyQnZCO0FBQUEsYUFmVDtBQUFBLFNBQVR4QyxFQXdDZEUsU0F4Q2NGLENBQWpCUyIsImZpbGUiOiJtZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QganMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybS9qcycpO1xuY29uc3QgYXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vMmQvbWVzaCcpO1xuY29uc3QgZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJykuZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRDtcblxuY29uc3QgdmVjMyA9IGNjLnZtYXRoLnZlYzM7XG5sZXQgdmVjM190ZW1wID0gdmVjMy5jcmVhdGUoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XG4gICAgdXBkYXRlV29ybGRWZXJ0cyAoc3ByaXRlKSB7XG4gICAgICAgIGxldCBub2RlID0gc3ByaXRlLm5vZGUsXG4gICAgICAgICAgICByZW5kZXJEYXRhID0gc3ByaXRlLl9yZW5kZXJEYXRhLFxuICAgICAgICAgICAgZGF0YSA9IHJlbmRlckRhdGEuX2RhdGE7XG5cbiAgICAgICAgbGV0IG1hdHJpeCA9IG5vZGUuX3dvcmxkTWF0cml4O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlbmRlckRhdGEudmVydGV4Q291bnQ7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsb2NhbCA9IGRhdGFbaSArIGxdO1xuICAgICAgICAgICAgbGV0IHdvcmxkID0gZGF0YVtpXTtcbiAgICAgICAgICAgIHZlYzMuc2V0KHZlYzNfdGVtcCwgbG9jYWwueCwgbG9jYWwueSwgMCk7XG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybU1hdDQod29ybGQsIHZlYzNfdGVtcCwgbWF0cml4KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaWxsQnVmZmVycyAoc3ByaXRlLCByZW5kZXJlcikge1xuICAgICAgICBsZXQgdmVydGljZXMgPSBzcHJpdGUuc3ByaXRlRnJhbWUudmVydGljZXM7XG4gICAgICAgIGlmICghdmVydGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB3b3JsZCB2ZXJ0c1xuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKHNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWZmZXJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IHJlbmRlcmVyLl9tZXNoQnVmZmVyM0Q7XG4gICAgICAgIGxldCBub2RlID0gc3ByaXRlLm5vZGU7XG4gICAgICAgIGxldCBvZmZzZXRJbmZvID0gZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRChub2RlLCBidWZmZXIsIHNwcml0ZS5fcmVuZGVyRGF0YSwgbm9kZS5fY29sb3IuX3ZhbCk7XG5cbiAgICAgICAgbGV0IGlidWYgPSBidWZmZXIuX2lEYXRhLFxuICAgICAgICAgICAgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgICAgICB2ZXJ0ZXhJZCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0O1xuXG4gICAgICAgIGxldCB0cmlhbmdsZXMgPSB2ZXJ0aWNlcy50cmlhbmdsZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdHJpYW5nbGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIHRyaWFuZ2xlc1tpXTtcbiAgICAgICAgfVxuICAgIH0sXG59LCBhc3NlbWJsZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIganMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybS9qcycpO1xudmFyIGFzc2VtYmxlciA9IHJlcXVpcmUoJy4uLzJkL21lc2gnKTtcbnZhciBmaWxsVmVydGljZXNXaXRob3V0Q2FsYzNEID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKS5maWxsVmVydGljZXNXaXRob3V0Q2FsYzNEO1xuXG52YXIgdmVjMyA9IGNjLnZtYXRoLnZlYzM7XG52YXIgdmVjM190ZW1wID0gdmVjMy5jcmVhdGUoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XG4gICAgdXBkYXRlV29ybGRWZXJ0czogZnVuY3Rpb24gdXBkYXRlV29ybGRWZXJ0cyhzcHJpdGUpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzcHJpdGUubm9kZSxcbiAgICAgICAgICAgIHJlbmRlckRhdGEgPSBzcHJpdGUuX3JlbmRlckRhdGEsXG4gICAgICAgICAgICBkYXRhID0gcmVuZGVyRGF0YS5fZGF0YTtcblxuICAgICAgICB2YXIgbWF0cml4ID0gbm9kZS5fd29ybGRNYXRyaXg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVuZGVyRGF0YS52ZXJ0ZXhDb3VudDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxvY2FsID0gZGF0YVtpICsgbF07XG4gICAgICAgICAgICB2YXIgd29ybGQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgdmVjMy5zZXQodmVjM190ZW1wLCBsb2NhbC54LCBsb2NhbC55LCAwKTtcbiAgICAgICAgICAgIHZlYzMudHJhbnNmb3JtTWF0NCh3b3JsZCwgdmVjM190ZW1wLCBtYXRyaXgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmaWxsQnVmZmVyczogZnVuY3Rpb24gZmlsbEJ1ZmZlcnMoc3ByaXRlLCByZW5kZXJlcikge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBzcHJpdGUuc3ByaXRlRnJhbWUudmVydGljZXM7XG4gICAgICAgIGlmICghdmVydGljZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB3b3JsZCB2ZXJ0c1xuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKHNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWZmZXJcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHJlbmRlcmVyLl9tZXNoQnVmZmVyM0Q7XG4gICAgICAgIHZhciBub2RlID0gc3ByaXRlLm5vZGU7XG4gICAgICAgIHZhciBvZmZzZXRJbmZvID0gZmlsbFZlcnRpY2VzV2l0aG91dENhbGMzRChub2RlLCBidWZmZXIsIHNwcml0ZS5fcmVuZGVyRGF0YSwgbm9kZS5fY29sb3IuX3ZhbCk7XG5cbiAgICAgICAgdmFyIGlidWYgPSBidWZmZXIuX2lEYXRhLFxuICAgICAgICAgICAgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgICAgICB2ZXJ0ZXhJZCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0O1xuXG4gICAgICAgIHZhciB0cmlhbmdsZXMgPSB2ZXJ0aWNlcy50cmlhbmdsZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdHJpYW5nbGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIHRyaWFuZ2xlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn0sIGFzc2VtYmxlcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFsYzJndWFuTWlYU3dpYm1GdFpYTWlPbHNpYW5NaUxDSnlaWEYxYVhKbElpd2lZWE56WlcxaWJHVnlJaXdpWm1sc2JGWmxjblJwWTJWelYybDBhRzkxZEVOaGJHTXpSQ0lzSW5abFl6TWlMQ0pqWXlJc0luWnRZWFJvSWl3aWRtVmpNMTkwWlcxd0lpd2lZM0psWVhSbElpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SXNJbUZrWkc5dUlpd2lkWEJrWVhSbFYyOXliR1JXWlhKMGN5SXNJbk53Y21sMFpTSXNJbTV2WkdVaUxDSnlaVzVrWlhKRVlYUmhJaXdpWDNKbGJtUmxja1JoZEdFaUxDSmtZWFJoSWl3aVgyUmhkR0VpTENKdFlYUnlhWGdpTENKZmQyOXliR1JOWVhSeWFYZ2lMQ0pwSWl3aWJDSXNJblpsY25SbGVFTnZkVzUwSWl3aWJHOWpZV3dpTENKM2IzSnNaQ0lzSW5ObGRDSXNJbmdpTENKNUlpd2lkSEpoYm5ObWIzSnRUV0YwTkNJc0ltWnBiR3hDZFdabVpYSnpJaXdpY21WdVpHVnlaWElpTENKMlpYSjBhV05sY3lJc0luTndjbWwwWlVaeVlXMWxJaXdpZDI5eWJHUk5ZWFJFYVhKMGVTSXNJbUoxWm1abGNpSXNJbDl0WlhOb1FuVm1abVZ5TTBRaUxDSnZabVp6WlhSSmJtWnZJaXdpWDJOdmJHOXlJaXdpWDNaaGJDSXNJbWxpZFdZaUxDSmZhVVJoZEdFaUxDSnBibVJwWTJWUFptWnpaWFFpTENKMlpYSjBaWGhKWkNJc0luWmxjblJsZUU5bVpuTmxkQ0lzSW5SeWFXRnVaMnhsY3lJc0lteGxibWQwYUNKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFYbENRU3hKUVVGTlFTeExRVUZMUXl4UlFVRlJMRFJDUVVGU0xFTkJRVmc3UVVGRFFTeEpRVUZOUXl4WlFVRlpSQ3hSUVVGUkxGbEJRVklzUTBGQmJFSTdRVUZEUVN4SlFVRk5SU3cwUWtGQk5FSkdMRkZCUVZFc1lVRkJVaXhGUVVGMVFrVXNlVUpCUVhwRU96dEJRVVZCTEVsQlFVMURMRTlCUVU5RExFZEJRVWRETEV0QlFVZ3NRMEZCVTBZc1NVRkJkRUk3UVVGRFFTeEpRVUZKUnl4WlFVRlpTQ3hMUVVGTFNTeE5RVUZNTEVWQlFXaENPenRCUVVWQlF5eFBRVUZQUXl4UFFVRlFMRWRCUVdsQ1ZpeEhRVUZIVnl4TFFVRklMRU5CUVZNN1FVRkRkRUpETEc5Q1FVUnpRaXcwUWtGRFNrTXNUVUZFU1N4RlFVTkpPMEZCUTNSQ0xGbEJRVWxETEU5QlFVOUVMRTlCUVU5RExFbEJRV3hDTzBGQlFVRXNXVUZEU1VNc1lVRkJZVVlzVDBGQlQwY3NWMEZFZUVJN1FVRkJRU3haUVVWSlF5eFBRVUZQUml4WFFVRlhSeXhMUVVaMFFqczdRVUZKUVN4WlFVRkpReXhUUVVGVFRDeExRVUZMVFN4WlFVRnNRanRCUVVOQkxHRkJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRlNMRVZCUVZkRExFbEJRVWxRTEZkQlFWZFJMRmRCUVM5Q0xFVkJRVFJEUml4SlFVRkpReXhEUVVGb1JDeEZRVUZ0UkVRc1IwRkJia1FzUlVGQmQwUTdRVUZEY0VRc1owSkJRVWxITEZGQlFWRlFMRXRCUVV0SkxFbEJRVWxETEVOQlFWUXNRMEZCV2p0QlFVTkJMR2RDUVVGSlJ5eFJRVUZSVWl4TFFVRkxTU3hEUVVGTUxFTkJRVm83UVVGRFFXcENMR2xDUVVGTGMwSXNSMEZCVEN4RFFVRlRia0lzVTBGQlZDeEZRVUZ2UW1sQ0xFMUJRVTFITEVOQlFURkNMRVZCUVRaQ1NDeE5RVUZOU1N4RFFVRnVReXhGUVVGelF5eERRVUYwUXp0QlFVTkJlRUlzYVVKQlFVdDVRaXhoUVVGTUxFTkJRVzFDU2l4TFFVRnVRaXhGUVVFd1FteENMRk5CUVRGQ0xFVkJRWEZEV1N4TlFVRnlRenRCUVVOSU8wRkJRMG9zUzBGaWNVSTdRVUZsZEVKWExHVkJabk5DTEhWQ1FXVlVha0lzVFVGbVV5eEZRV1ZFYTBJc1VVRm1ReXhGUVdWVE8wRkJRek5DTEZsQlFVbERMRmRCUVZkdVFpeFBRVUZQYjBJc1YwRkJVQ3hEUVVGdFFrUXNVVUZCYkVNN1FVRkRRU3haUVVGSkxFTkJRVU5CTEZGQlFVd3NSVUZCWlR0QlFVTllPMEZCUTBnN08wRkJSVVE3UVVGRFFTeFpRVUZKUkN4VFFVRlRSeXhoUVVGaUxFVkJRVFJDTzBGQlEzaENMR2xDUVVGTGRFSXNaMEpCUVV3c1EwRkJjMEpETEUxQlFYUkNPMEZCUTBnN08wRkJSVVE3UVVGRFFTeFpRVUZKYzBJc1UwRkJVMG9zVTBGQlUwc3NZVUZCZEVJN1FVRkRRU3haUVVGSmRFSXNUMEZCVDBRc1QwRkJUME1zU1VGQmJFSTdRVUZEUVN4WlFVRkpkVUlzWVVGQllXeERMREJDUVVFd1FsY3NTVUZCTVVJc1JVRkJaME54UWl4TlFVRm9ReXhGUVVGM1EzUkNMRTlCUVU5SExGZEJRUzlETEVWQlFUUkVSaXhMUVVGTGQwSXNUVUZCVEN4RFFVRlpReXhKUVVGNFJTeERRVUZxUWpzN1FVRkZRU3haUVVGSlF5eFBRVUZQVEN4UFFVRlBUU3hOUVVGc1FqdEJRVUZCTEZsQlEwbERMR1ZCUVdWTUxGZEJRVmRMTEZsQlJEbENPMEZCUVVFc1dVRkZTVU1zVjBGQlYwNHNWMEZCVjA4c1dVRkdNVUk3TzBGQlNVRXNXVUZCU1VNc1dVRkJXV0lzVTBGQlUyRXNVMEZCZWtJN1FVRkRRU3hoUVVGTExFbEJRVWw0UWl4SlFVRkpMRU5CUVZJc1JVRkJWME1zU1VGQlNYVkNMRlZCUVZWRExFMUJRVGxDTEVWQlFYTkRla0lzU1VGQlNVTXNRMEZCTVVNc1JVRkJOa05FTEVkQlFUZERMRVZCUVd0RU8wRkJRemxEYlVJc2FVSkJRVXRGTEdOQlFVd3NTVUZCZFVKRExGZEJRVmRGTEZWQlFWVjRRaXhEUVVGV0xFTkJRV3hETzBGQlEwZzdRVUZEU2p0QlFYWkRjVUlzUTBGQlZDeEZRWGREWkc1Q0xGTkJlRU5qTEVOQlFXcENJaXdpWm1sc1pTSTZJbTFsYzJndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh1WEc0Z2FIUjBjSE02THk5M2QzY3VZMjlqYjNNdVkyOXRMMXh1WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4dUlIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jYmlCMWMyVmtJR1p2Y2lCa1pYWmxiRzl3YVc1bklHZGhiV1Z6TGlCWmIzVWdZWEpsSUc1dmRDQm5jbUZ1ZEdWa0lIUnZJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzWEc0Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzVqYjI1emRDQnFjeUE5SUhKbGNYVnBjbVVvSnk0dUx5NHVMeTR1THk0dUx5NHVMM0JzWVhSbWIzSnRMMnB6SnlrN1hHNWpiMjV6ZENCaGMzTmxiV0pzWlhJZ1BTQnlaWEYxYVhKbEtDY3VMaTh5WkM5dFpYTm9KeWs3WEc1amIyNXpkQ0JtYVd4c1ZtVnlkR2xqWlhOWGFYUm9iM1YwUTJGc1l6TkVJRDBnY21WeGRXbHlaU2duTGk0dkxpNHZkWFJwYkhNbktTNW1hV3hzVm1WeWRHbGpaWE5YYVhSb2IzVjBRMkZzWXpORU8xeHVYRzVqYjI1emRDQjJaV016SUQwZ1kyTXVkbTFoZEdndWRtVmpNenRjYm14bGRDQjJaV016WDNSbGJYQWdQU0IyWldNekxtTnlaV0YwWlNncE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR3B6TG1Ga1pHOXVLSHRjYmlBZ0lDQjFjR1JoZEdWWGIzSnNaRlpsY25SeklDaHpjSEpwZEdVcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUc1dlpHVWdQU0J6Y0hKcGRHVXVibTlrWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYm1SbGNrUmhkR0VnUFNCemNISnBkR1V1WDNKbGJtUmxja1JoZEdFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaElEMGdjbVZ1WkdWeVJHRjBZUzVmWkdGMFlUdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ2JXRjBjbWw0SUQwZ2JtOWtaUzVmZDI5eWJHUk5ZWFJ5YVhnN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdjbVZ1WkdWeVJHRjBZUzUyWlhKMFpYaERiM1Z1ZERzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3h2WTJGc0lEMGdaR0YwWVZ0cElDc2diRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZDI5eWJHUWdQU0JrWVhSaFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVmpNeTV6WlhRb2RtVmpNMTkwWlcxd0xDQnNiMk5oYkM1NExDQnNiMk5oYkM1NUxDQXdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxZek11ZEhKaGJuTm1iM0p0VFdGME5DaDNiM0pzWkN3Z2RtVmpNMTkwWlcxd0xDQnRZWFJ5YVhncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHWnBiR3hDZFdabVpYSnpJQ2h6Y0hKcGRHVXNJSEpsYm1SbGNtVnlLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQjJaWEowYVdObGN5QTlJSE53Y21sMFpTNXpjSEpwZEdWR2NtRnRaUzUyWlhKMGFXTmxjenRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjJaWEowYVdObGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnZFhCa1lYUmxJSGR2Y214a0lIWmxjblJ6WEc0Z0lDQWdJQ0FnSUdsbUlDaHlaVzVrWlhKbGNpNTNiM0pzWkUxaGRFUnBjblI1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuVndaR0YwWlZkdmNteGtWbVZ5ZEhNb2MzQnlhWFJsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUdKMVptWmxjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1luVm1abVZ5SUQwZ2NtVnVaR1Z5WlhJdVgyMWxjMmhDZFdabVpYSXpSRHRjYmlBZ0lDQWdJQ0FnYkdWMElHNXZaR1VnUFNCemNISnBkR1V1Ym05a1pUdGNiaUFnSUNBZ0lDQWdiR1YwSUc5bVpuTmxkRWx1Wm04Z1BTQm1hV3hzVm1WeWRHbGpaWE5YYVhSb2IzVjBRMkZzWXpORUtHNXZaR1VzSUdKMVptWmxjaXdnYzNCeWFYUmxMbDl5Wlc1a1pYSkVZWFJoTENCdWIyUmxMbDlqYjJ4dmNpNWZkbUZzS1R0Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnYVdKMVppQTlJR0oxWm1abGNpNWZhVVJoZEdFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm1ScFkyVlBabVp6WlhRZ1BTQnZabVp6WlhSSmJtWnZMbWx1WkdsalpVOW1abk5sZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpsY25SbGVFbGtJRDBnYjJabWMyVjBTVzVtYnk1MlpYSjBaWGhQWm1aelpYUTdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElIUnlhV0Z1WjJ4bGN5QTlJSFpsY25ScFkyVnpMblJ5YVdGdVoyeGxjenRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQXNJR3dnUFNCMGNtbGhibWRzWlhNdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFluVm1XMmx1WkdsalpVOW1abk5sZENzclhTQTlJSFpsY25SbGVFbGtJQ3NnZEhKcFlXNW5iR1Z6VzJsZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibjBzSUdGemMyVnRZbXhsY2lrN1hHNGlYWDA9Il19