(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/sprite/tiled.js';
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
        var utils = require('../utils');
        var renderer = {
            createData: function createData(sprite) {
                var renderData = sprite.requestRenderData();
                return renderData;
            },
            updateRenderData: function updateRenderData(sprite) {
                if (!sprite._material) {
                    sprite._activateMaterial();
                }
            },
            draw: function draw(ctx, sprite) {
                var node = sprite.node;
                var matrix = node._worldMatrix;
                var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
                ctx.transform(a, b, c, d, tx, ty);
                ctx.scale(1, -1);
                utils.context.setGlobalAlpha(ctx, node.opacity / 255);
                var frame = sprite.spriteFrame;
                var rect = frame._rect;
                var tex = frame._texture;
                var sx = rect.x;
                var sy = rect.y;
                var sw = frame._rotated ? rect.height : rect.width;
                var sh = frame._rotated ? rect.width : rect.height;
                var image = utils.getFrameCache(tex, node._color, sx, sy, sw, sh);
                var w = node.width, h = node.height, x = -node.anchorX * w, y = -node.anchorY * h;
                y = -y - h;
                ctx.translate(x, y);
                ctx.fillStyle = ctx.createPattern(image, 'repeat');
                ctx.fillRect(0, 0, w, h);
                return 1;
            }
        };
        module.exports = renderer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGVkLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9jYW52YXMvcmVuZGVyZXJzL3Nwcml0ZS90aWxlZC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJyZW5kZXJlciIsImNyZWF0ZURhdGEiLCJzcHJpdGUiLCJyZW5kZXJEYXRhIiwicmVxdWVzdFJlbmRlckRhdGEiLCJ1cGRhdGVSZW5kZXJEYXRhIiwiX21hdGVyaWFsIiwiX2FjdGl2YXRlTWF0ZXJpYWwiLCJkcmF3IiwiY3R4Iiwibm9kZSIsIm1hdHJpeCIsIl93b3JsZE1hdHJpeCIsImEiLCJtMDAiLCJiIiwibTAxIiwiYyIsIm0wNCIsImQiLCJtMDUiLCJ0eCIsIm0xMiIsInR5IiwibTEzIiwidHJhbnNmb3JtIiwic2NhbGUiLCJjb250ZXh0Iiwic2V0R2xvYmFsQWxwaGEiLCJvcGFjaXR5IiwiZnJhbWUiLCJzcHJpdGVGcmFtZSIsInJlY3QiLCJfcmVjdCIsInRleCIsIl90ZXh0dXJlIiwic3giLCJ4Iiwic3kiLCJ5Iiwic3ciLCJfcm90YXRlZCIsImhlaWdodCIsIndpZHRoIiwic2giLCJpbWFnZSIsImdldEZyYW1lQ2FjaGUiLCJfY29sb3IiLCJ3IiwiaCIsImFuY2hvclgiLCJhbmNob3JZIiwidHJhbnNsYXRlIiwiZmlsbFN0eWxlIiwiY3JlYXRlUGF0dGVybiIsImZpbGxSZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBeUJBLElBQU1BLEtBQUFBLEdBQVFDLE9BQUFBLENBQVEsVUFBUkEsQ0FBZDtRQUVBLElBQUlDLFFBQUFBLEdBQVc7QUFBQSxZQUNYQyxVQUFBQSxFQURXLFNBQUEsVUFBQSxDQUNDQyxNQURELEVB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QTRCZlYsQ0FBQUEsR0FBSSxDQUFFQSxDQUFGLEdBQU1VLENBQVZWLENBNUJlO0FBQUEsZ0JBOEJmOUIsR0FBQUEsQ0FBSTJDLFNBQUozQyxDQUFjNEIsQ0FBZDVCLEVBQWlCOEIsQ0FBakI5QixFQTlCZTtBQUFBLGdCQStCZkEsR0FBQUEsQ0FBSTRDLFNBQUo1QyxHQUFnQkEsR0FBQUEsQ0FBSTZDLGFBQUo3QyxDQUFrQm9DLEtBQWxCcEMsRUFBeUIsUUFBekJBLENBQWhCQSxDQS9CZTtBQUFBLGdCQWdDZkEsR0FBQUEsQ0FBSThDLFFBQUo5QyxDQUFhLENBQWJBLEVBQWdCLENBQWhCQSxFQUFtQnVDLENBQW5CdkMsRUFBc0J3QyxDQUF0QnhDLEVBaENlO0FBQUEsZ0JBaUNmLE9BQU8sQ0FBUCxDQWpDZTtBQUFBLGFBWlI7QUFBQSxTQUFmO1FBaURBK0MsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJ4RCxRQUFqQndEIiwiZmlsZSI6InRpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubGV0IHJlbmRlcmVyID0ge1xuICAgIGNyZWF0ZURhdGEgKHNwcml0ZSkge1xuICAgICAgICBsZXQgcmVuZGVyRGF0YSA9IHNwcml0ZS5yZXF1ZXN0UmVuZGVyRGF0YSgpO1xuICAgICAgICByZXR1cm4gcmVuZGVyRGF0YTtcbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVJlbmRlckRhdGEgKHNwcml0ZSkge1xuICAgICAgICBpZiAoIXNwcml0ZS5fbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHNwcml0ZS5fYWN0aXZhdGVNYXRlcmlhbCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRyYXcgKGN0eCwgc3ByaXRlKSB7XG4gICAgICAgIGxldCBub2RlID0gc3ByaXRlLm5vZGU7XG4gICAgICAgIC8vIFRyYW5zZm9ybVxuICAgICAgICBsZXQgbWF0cml4ID0gbm9kZS5fd29ybGRNYXRyaXg7XG4gICAgICAgIGxldCBhID0gbWF0cml4Lm0wMCwgYiA9IG1hdHJpeC5tMDEsIGMgPSBtYXRyaXgubTA0LCBkID0gbWF0cml4Lm0wNSxcbiAgICAgICAgICAgIHR4ID0gbWF0cml4Lm0xMiwgdHkgPSBtYXRyaXgubTEzO1xuICAgICAgICBjdHgudHJhbnNmb3JtKGEsIGIsIGMsIGQsIHR4LCB0eSk7XG4gICAgICAgIGN0eC5zY2FsZSgxLCAtMSk7XG5cbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGJsZW5kIGZ1bmN0aW9uXG5cbiAgICAgICAgLy8gb3BhY2l0eVxuICAgICAgICB1dGlscy5jb250ZXh0LnNldEdsb2JhbEFscGhhKGN0eCwgbm9kZS5vcGFjaXR5IC8gMjU1KTtcblxuICAgICAgICBsZXQgZnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgIGxldCByZWN0ID0gZnJhbWUuX3JlY3Q7XG4gICAgICAgIGxldCB0ZXggPSBmcmFtZS5fdGV4dHVyZTtcbiAgICAgICAgbGV0IHN4ID0gcmVjdC54O1xuICAgICAgICBsZXQgc3kgPSByZWN0Lnk7XG4gICAgICAgIGxldCBzdyA9IGZyYW1lLl9yb3RhdGVkID8gcmVjdC5oZWlnaHQgOiByZWN0LndpZHRoO1xuICAgICAgICBsZXQgc2ggPSBmcmFtZS5fcm90YXRlZCA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodDtcblxuICAgICAgICBsZXQgaW1hZ2UgPSB1dGlscy5nZXRGcmFtZUNhY2hlKHRleCwgbm9kZS5fY29sb3IsIHN4LCBzeSwgc3csIHNoKTtcblxuICAgICAgICBsZXQgdyA9IG5vZGUud2lkdGgsXG4gICAgICAgICAgICBoID0gbm9kZS5oZWlnaHQsXG4gICAgICAgICAgICB4ID0gLW5vZGUuYW5jaG9yWCAqIHcsXG4gICAgICAgICAgICB5ID0gLW5vZGUuYW5jaG9yWSAqIGg7XG4gICAgICAgIHkgPSAtIHkgLSBoO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguY3JlYXRlUGF0dGVybihpbWFnZSwgJ3JlcGVhdCcpO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXJlciIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciByZW5kZXJlciA9IHtcbiAgICBjcmVhdGVEYXRhOiBmdW5jdGlvbiBjcmVhdGVEYXRhKHNwcml0ZSkge1xuICAgICAgICB2YXIgcmVuZGVyRGF0YSA9IHNwcml0ZS5yZXF1ZXN0UmVuZGVyRGF0YSgpO1xuICAgICAgICByZXR1cm4gcmVuZGVyRGF0YTtcbiAgICB9LFxuICAgIHVwZGF0ZVJlbmRlckRhdGE6IGZ1bmN0aW9uIHVwZGF0ZVJlbmRlckRhdGEoc3ByaXRlKSB7XG4gICAgICAgIGlmICghc3ByaXRlLl9tYXRlcmlhbCkge1xuICAgICAgICAgICAgc3ByaXRlLl9hY3RpdmF0ZU1hdGVyaWFsKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyYXc6IGZ1bmN0aW9uIGRyYXcoY3R4LCBzcHJpdGUpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzcHJpdGUubm9kZTtcbiAgICAgICAgLy8gVHJhbnNmb3JtXG4gICAgICAgIHZhciBtYXRyaXggPSBub2RlLl93b3JsZE1hdHJpeDtcbiAgICAgICAgdmFyIGEgPSBtYXRyaXgubTAwLFxuICAgICAgICAgICAgYiA9IG1hdHJpeC5tMDEsXG4gICAgICAgICAgICBjID0gbWF0cml4Lm0wNCxcbiAgICAgICAgICAgIGQgPSBtYXRyaXgubTA1LFxuICAgICAgICAgICAgdHggPSBtYXRyaXgubTEyLFxuICAgICAgICAgICAgdHkgPSBtYXRyaXgubTEzO1xuICAgICAgICBjdHgudHJhbnNmb3JtKGEsIGIsIGMsIGQsIHR4LCB0eSk7XG4gICAgICAgIGN0eC5zY2FsZSgxLCAtMSk7XG5cbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGJsZW5kIGZ1bmN0aW9uXG5cbiAgICAgICAgLy8gb3BhY2l0eVxuICAgICAgICB1dGlscy5jb250ZXh0LnNldEdsb2JhbEFscGhhKGN0eCwgbm9kZS5vcGFjaXR5IC8gMjU1KTtcblxuICAgICAgICB2YXIgZnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgIHZhciByZWN0ID0gZnJhbWUuX3JlY3Q7XG4gICAgICAgIHZhciB0ZXggPSBmcmFtZS5fdGV4dHVyZTtcbiAgICAgICAgdmFyIHN4ID0gcmVjdC54O1xuICAgICAgICB2YXIgc3kgPSByZWN0Lnk7XG4gICAgICAgIHZhciBzdyA9IGZyYW1lLl9yb3RhdGVkID8gcmVjdC5oZWlnaHQgOiByZWN0LndpZHRoO1xuICAgICAgICB2YXIgc2ggPSBmcmFtZS5fcm90YXRlZCA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodDtcblxuICAgICAgICB2YXIgaW1hZ2UgPSB1dGlscy5nZXRGcmFtZUNhY2hlKHRleCwgbm9kZS5fY29sb3IsIHN4LCBzeSwgc3csIHNoKTtcblxuICAgICAgICB2YXIgdyA9IG5vZGUud2lkdGgsXG4gICAgICAgICAgICBoID0gbm9kZS5oZWlnaHQsXG4gICAgICAgICAgICB4ID0gLW5vZGUuYW5jaG9yWCAqIHcsXG4gICAgICAgICAgICB5ID0gLW5vZGUuYW5jaG9yWSAqIGg7XG4gICAgICAgIHkgPSAteSAtIGg7XG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5jcmVhdGVQYXR0ZXJuKGltYWdlLCAncmVwZWF0Jyk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluUnBiR1ZrTG1weklsMHNJbTVoYldWeklqcGJJblYwYVd4eklpd2ljbVZ4ZFdseVpTSXNJbkpsYm1SbGNtVnlJaXdpWTNKbFlYUmxSR0YwWVNJc0luTndjbWwwWlNJc0luSmxibVJsY2tSaGRHRWlMQ0p5WlhGMVpYTjBVbVZ1WkdWeVJHRjBZU0lzSW5Wd1pHRjBaVkpsYm1SbGNrUmhkR0VpTENKZmJXRjBaWEpwWVd3aUxDSmZZV04wYVhaaGRHVk5ZWFJsY21saGJDSXNJbVJ5WVhjaUxDSmpkSGdpTENKdWIyUmxJaXdpYldGMGNtbDRJaXdpWDNkdmNteGtUV0YwY21sNElpd2lZU0lzSW0wd01DSXNJbUlpTENKdE1ERWlMQ0pqSWl3aWJUQTBJaXdpWkNJc0ltMHdOU0lzSW5SNElpd2liVEV5SWl3aWRIa2lMQ0p0TVRNaUxDSjBjbUZ1YzJadmNtMGlMQ0p6WTJGc1pTSXNJbU52Ym5SbGVIUWlMQ0p6WlhSSGJHOWlZV3hCYkhCb1lTSXNJbTl3WVdOcGRIa2lMQ0ptY21GdFpTSXNJbk53Y21sMFpVWnlZVzFsSWl3aWNtVmpkQ0lzSWw5eVpXTjBJaXdpZEdWNElpd2lYM1JsZUhSMWNtVWlMQ0p6ZUNJc0luZ2lMQ0p6ZVNJc0lua2lMQ0p6ZHlJc0lsOXliM1JoZEdWa0lpd2lhR1ZwWjJoMElpd2lkMmxrZEdnaUxDSnphQ0lzSW1sdFlXZGxJaXdpWjJWMFJuSmhiV1ZEWVdOb1pTSXNJbDlqYjJ4dmNpSXNJbmNpTENKb0lpd2lZVzVqYUc5eVdDSXNJbUZ1WTJodmNsa2lMQ0owY21GdWMyeGhkR1VpTENKbWFXeHNVM1I1YkdVaUxDSmpjbVZoZEdWUVlYUjBaWEp1SWl3aVptbHNiRkpsWTNRaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJlVUpCTEVsQlFVMUJMRkZCUVZGRExGRkJRVkVzVlVGQlVpeERRVUZrT3p0QlFVVkJMRWxCUVVsRExGZEJRVmM3UVVGRFdFTXNZMEZFVnl4elFrRkRRME1zVFVGRVJDeEZRVU5UTzBGQlEyaENMRmxCUVVsRExHRkJRV0ZFTEU5QlFVOUZMR2xDUVVGUUxFVkJRV3BDTzBGQlEwRXNaVUZCVDBRc1ZVRkJVRHRCUVVOSUxFdEJTbFU3UVVGTldFVXNiMEpCVGxjc05FSkJUVTlJTEUxQlRsQXNSVUZOWlR0QlFVTjBRaXhaUVVGSkxFTkJRVU5CTEU5QlFVOUpMRk5CUVZvc1JVRkJkVUk3UVVGRGJrSktMRzFDUVVGUFN5eHBRa0ZCVUR0QlFVTklPMEZCUTBvc1MwRldWVHRCUVZsWVF5eFJRVnBYTEdkQ1FWbE1ReXhIUVZwTExFVkJXVUZRTEUxQldrRXNSVUZaVVR0QlFVTm1MRmxCUVVsUkxFOUJRVTlTTEU5QlFVOVJMRWxCUVd4Q08wRkJRMEU3UVVGRFFTeFpRVUZKUXl4VFFVRlRSQ3hMUVVGTFJTeFpRVUZzUWp0QlFVTkJMRmxCUVVsRExFbEJRVWxHTEU5QlFVOUhMRWRCUVdZN1FVRkJRU3haUVVGdlFrTXNTVUZCU1Vvc1QwRkJUMHNzUjBGQkwwSTdRVUZCUVN4WlFVRnZRME1zU1VGQlNVNHNUMEZCVDA4c1IwRkJMME03UVVGQlFTeFpRVUZ2UkVNc1NVRkJTVklzVDBGQlQxTXNSMEZCTDBRN1FVRkJRU3haUVVOSlF5eExRVUZMVml4UFFVRlBWeXhIUVVSb1FqdEJRVUZCTEZsQlEzRkNReXhMUVVGTFdpeFBRVUZQWVN4SFFVUnFRenRCUVVWQlppeFpRVUZKWjBJc1UwRkJTaXhEUVVGaldpeERRVUZrTEVWQlFXbENSU3hEUVVGcVFpeEZRVUZ2UWtVc1EwRkJjRUlzUlVGQmRVSkZMRU5CUVhaQ0xFVkJRVEJDUlN4RlFVRXhRaXhGUVVFNFFrVXNSVUZCT1VJN1FVRkRRV1FzV1VGQlNXbENMRXRCUVVvc1EwRkJWU3hEUVVGV0xFVkJRV0VzUTBGQlF5eERRVUZrT3p0QlFVVkJPenRCUVVWQk8wRkJRMEUxUWl4alFVRk5Oa0lzVDBGQlRpeERRVUZqUXl4alFVRmtMRU5CUVRaQ2JrSXNSMEZCTjBJc1JVRkJhME5ETEV0QlFVdHRRaXhQUVVGTUxFZEJRV1VzUjBGQmFrUTdPMEZCUlVFc1dVRkJTVU1zVVVGQlVUVkNMRTlCUVU4MlFpeFhRVUZ1UWp0QlFVTkJMRmxCUVVsRExFOUJRVTlHTEUxQlFVMUhMRXRCUVdwQ08wRkJRMEVzV1VGQlNVTXNUVUZCVFVvc1RVRkJUVXNzVVVGQmFFSTdRVUZEUVN4WlFVRkpReXhMUVVGTFNpeExRVUZMU3l4RFFVRmtPMEZCUTBFc1dVRkJTVU1zUzBGQlMwNHNTMEZCUzA4c1EwRkJaRHRCUVVOQkxGbEJRVWxETEV0QlFVdFdMRTFCUVUxWExGRkJRVTRzUjBGQmFVSlVMRXRCUVV0VkxFMUJRWFJDTEVkQlFTdENWaXhMUVVGTFZ5eExRVUUzUXp0QlFVTkJMRmxCUVVsRExFdEJRVXRrTEUxQlFVMVhMRkZCUVU0c1IwRkJhVUpVTEV0QlFVdFhMRXRCUVhSQ0xFZEJRVGhDV0N4TFFVRkxWU3hOUVVFMVF6czdRVUZGUVN4WlFVRkpSeXhSUVVGUkwwTXNUVUZCVFdkRUxHRkJRVTRzUTBGQmIwSmFMRWRCUVhCQ0xFVkJRWGxDZUVJc1MwRkJTM0ZETEUxQlFUbENMRVZCUVhORFdDeEZRVUYwUXl4RlFVRXdRMFVzUlVGQk1VTXNSVUZCT0VORkxFVkJRVGxETEVWQlFXdEVTU3hGUVVGc1JDeERRVUZhT3p0QlFVVkJMRmxCUVVsSkxFbEJRVWwwUXl4TFFVRkxhVU1zUzBGQllqdEJRVUZCTEZsQlEwbE5MRWxCUVVsMlF5eExRVUZMWjBNc1RVRkVZanRCUVVGQkxGbEJSVWxNTEVsQlFVa3NRMEZCUXpOQ0xFdEJRVXQzUXl4UFFVRk9MRWRCUVdkQ1JpeERRVVo0UWp0QlFVRkJMRmxCUjBsVUxFbEJRVWtzUTBGQlF6ZENMRXRCUVV0NVF5eFBRVUZPTEVkQlFXZENSaXhEUVVoNFFqdEJRVWxCVml4WlFVRkpMRU5CUVVWQkxFTkJRVVlzUjBGQlRWVXNRMEZCVmpzN1FVRkZRWGhETEZsQlFVa3lReXhUUVVGS0xFTkJRV05tTEVOQlFXUXNSVUZCYVVKRkxFTkJRV3BDTzBGQlEwRTVRaXhaUVVGSk5FTXNVMEZCU2l4SFFVRm5RalZETEVsQlFVazJReXhoUVVGS0xFTkJRV3RDVkN4TFFVRnNRaXhGUVVGNVFpeFJRVUY2UWl4RFFVRm9RanRCUVVOQmNFTXNXVUZCU1RoRExGRkJRVW9zUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFVkJRVzFDVUN4RFFVRnVRaXhGUVVGelFrTXNRMEZCZEVJN1FVRkRRU3hsUVVGUExFTkJRVkE3UVVGRFNEdEJRVGxEVlN4RFFVRm1PenRCUVdsRVFVOHNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFucEVMRkZCUVdwQ0lpd2labWxzWlNJNkluUnBiR1ZrTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3Y3pvdkwzZDNkeTVqYjJOdmN5NWpiMjB2WEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4dUlIUnZJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52YkdWc2VTQjBieUJrWlhabGJHOXdJR2RoYldWeklHOXVJSGx2ZFhJZ2RHRnlaMlYwSUhCc1lYUm1iM0p0Y3k0Z1dXOTFJSE5vWVd4c1hHNGdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4dUlIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQnpkV0pzYVdObGJuTmxMQ0JoYm1RdmIzSWdjMlZzYkNCamIzQnBaWE1nYjJZZ1EyOWpiM01nUTNKbFlYUnZjaTVjYmx4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNibHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNiaUJCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MQ0JFUVUxQlIwVlRJRTlTSUU5VVNFVlNYRzRnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYRzVjYm1OdmJuTjBJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTR2ZFhScGJITW5LVHRjYmx4dWJHVjBJSEpsYm1SbGNtVnlJRDBnZTF4dUlDQWdJR055WldGMFpVUmhkR0VnS0hOd2NtbDBaU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVZ1WkdWeVJHRjBZU0E5SUhOd2NtbDBaUzV5WlhGMVpYTjBVbVZ1WkdWeVJHRjBZU2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WdVpHVnlSR0YwWVR0Y2JpQWdJQ0I5TEZ4dUlDQWdJRnh1SUNBZ0lIVndaR0YwWlZKbGJtUmxja1JoZEdFZ0tITndjbWwwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhOd2NtbDBaUzVmYldGMFpYSnBZV3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE53Y21sMFpTNWZZV04wYVhaaGRHVk5ZWFJsY21saGJDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1J5WVhjZ0tHTjBlQ3dnYzNCeWFYUmxLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnViMlJsSUQwZ2MzQnlhWFJsTG01dlpHVTdYRzRnSUNBZ0lDQWdJQzh2SUZSeVlXNXpabTl5YlZ4dUlDQWdJQ0FnSUNCc1pYUWdiV0YwY21sNElEMGdibTlrWlM1ZmQyOXliR1JOWVhSeWFYZzdYRzRnSUNBZ0lDQWdJR3hsZENCaElEMGdiV0YwY21sNExtMHdNQ3dnWWlBOUlHMWhkSEpwZUM1dE1ERXNJR01nUFNCdFlYUnlhWGd1YlRBMExDQmtJRDBnYldGMGNtbDRMbTB3TlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFI0SUQwZ2JXRjBjbWw0TG0weE1pd2dkSGtnUFNCdFlYUnlhWGd1YlRFek8xeHVJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTm1iM0p0S0dFc0lHSXNJR01zSUdRc0lIUjRMQ0IwZVNrN1hHNGdJQ0FnSUNBZ0lHTjBlQzV6WTJGc1pTZ3hMQ0F0TVNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnVkU5RVR6b2dhR0Z1Wkd4bElHSnNaVzVrSUdaMWJtTjBhVzl1WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdiM0JoWTJsMGVWeHVJQ0FnSUNBZ0lDQjFkR2xzY3k1amIyNTBaWGgwTG5ObGRFZHNiMkpoYkVGc2NHaGhLR04wZUN3Z2JtOWtaUzV2Y0dGamFYUjVJQzhnTWpVMUtUdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1puSmhiV1VnUFNCemNISnBkR1V1YzNCeWFYUmxSbkpoYldVN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5WldOMElEMGdabkpoYldVdVgzSmxZM1E3WEc0Z0lDQWdJQ0FnSUd4bGRDQjBaWGdnUFNCbWNtRnRaUzVmZEdWNGRIVnlaVHRjYmlBZ0lDQWdJQ0FnYkdWMElITjRJRDBnY21WamRDNTRPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2Mza2dQU0J5WldOMExuazdYRzRnSUNBZ0lDQWdJR3hsZENCemR5QTlJR1p5WVcxbExsOXliM1JoZEdWa0lEOGdjbVZqZEM1b1pXbG5hSFFnT2lCeVpXTjBMbmRwWkhSb08xeHVJQ0FnSUNBZ0lDQnNaWFFnYzJnZ1BTQm1jbUZ0WlM1ZmNtOTBZWFJsWkNBL0lISmxZM1F1ZDJsa2RHZ2dPaUJ5WldOMExtaGxhV2RvZER0Y2JseHVJQ0FnSUNBZ0lDQnNaWFFnYVcxaFoyVWdQU0IxZEdsc2N5NW5aWFJHY21GdFpVTmhZMmhsS0hSbGVDd2dibTlrWlM1ZlkyOXNiM0lzSUhONExDQnplU3dnYzNjc0lITm9LVHRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdkeUE5SUc1dlpHVXVkMmxrZEdnc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvSUQwZ2JtOWtaUzVvWldsbmFIUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNElEMGdMVzV2WkdVdVlXNWphRzl5V0NBcUlIY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCNUlEMGdMVzV2WkdVdVlXNWphRzl5V1NBcUlHZzdYRzRnSUNBZ0lDQWdJSGtnUFNBdElIa2dMU0JvTzF4dVhHNGdJQ0FnSUNBZ0lHTjBlQzUwY21GdWMyeGhkR1VvZUN3Z2VTazdYRzRnSUNBZ0lDQWdJR04wZUM1bWFXeHNVM1I1YkdVZ1BTQmpkSGd1WTNKbFlYUmxVR0YwZEdWeWJpaHBiV0ZuWlN3Z0ozSmxjR1ZoZENjcE8xeHVJQ0FnSUNBZ0lDQmpkSGd1Wm1sc2JGSmxZM1FvTUN3Z01Dd2dkeXdnYUNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUgxY2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5Wlc1a1pYSmxjaUpkZlE9PSJdfQ==