(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/load-pipeline/md5-pipe.js';
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
        var Pipeline = require('./pipeline');
        var ID = 'MD5Pipe';
        var UuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-]{8,})/;
        var MD5Pipe = function MD5Pipe(md5AssetsMap, md5NativeAssetsMap, libraryBase) {
            this.id = ID;
            this.async = false;
            this.pipeline = null;
            this.md5AssetsMap = md5AssetsMap;
            this.md5NativeAssetsMap = md5NativeAssetsMap;
            this.libraryBase = libraryBase;
        };
        MD5Pipe.ID = ID;
        MD5Pipe.prototype.handle = function (item) {
            item.url = this.transformURL(item.url);
            return null;
        };
        MD5Pipe.prototype.transformURL = function (url) {
            var isNativeAsset = !url.startsWith(this.libraryBase);
            var map = isNativeAsset ? this.md5NativeAssetsMap : this.md5AssetsMap;
            url = url.replace(UuidRegex, function (match, uuid) {
                var hashValue = map[uuid];
                return hashValue ? match + '.' + hashValue : match;
            });
            return url;
        };
        Pipeline.MD5Pipe = module.exports = MD5Pipe;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kNS1waXBlLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9sb2FkLXBpcGVsaW5lL21kNS1waXBlLmpzIl0sIm5hbWVzIjpbIlBpcGVsaW5lIiwicmVxdWlyZSIsIklEIiwiVXVpZFJlZ2V4IiwiTUQ1UGlwZSIsIm1kNUFzc2V0c01hcCIsIm1kNU5hdGl2ZUFzc2V0c01hcCIsImxpYnJhcnlCYXNlIiwiaWQiLCJhc3luYyIsInBpcGVsaW5lIiwicHJvdG90eXBlIiwiaGFuZGxlIiwiaXRlbSIsInVybCIsInRyYW5zZm9ybVVSTCIsImlzTmF0aXZlQXNzZXQiLCJzdGFydHNXaXRoIiwibWFwIiwicmVwbGFjZSIsIm1hdGNoIiwidXVpZCIsImhhc2hWYWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQTBCQSxJQUFJQSxRQUFBQSxHQUFXQyxPQUFBQSxDQUFRLFlBQVJBLENBQWY7UUFFQSxJQUFNQyxFQUFBQSxHQUFLLFNBQVg7UUFDQSxJQUFNQyxTQUFBQSxHQUFZLDhDQUFsQjtRQUVBLElBQUlDLE9BQUFBLEdBQVUsU0FBVkEsT0FBVSxDQUFVQyxZQUFWLEVBQXdCQyxrQkFBeEIsRUFBNENDLFdBQTVDLEVBQXlEO0FBQUEsWUFDbkUsS0FBS0MsRUFBTCxHQUFVTixFQUFWLENBRG1FO0FBQUEsWUFFbkUsS0FBS08sS0FBTCxHQUFhLEtBQWIsQ0FGbUU7QUFBQSxZQUduRSxLQUFLQyxRQUFMLEdBQWdCLElBQWhCLENBSG1FO0FBQUEsWUFJbkUsS0FBS0wsWUFBTCxHQUFvQkEsWUFBcEIsQ0FKbUU7QUFBQSxZQUtuRSxLQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCLENBTG1FO0FBQUEsWUFNbkUsS0FBS0MsV0FBTCxHQUFtQkEsV0FBbkIsQ0FObUU7QUFBQSxTQUF2RTtRQVFBSCxPQUFBQSxDQUFRRixFQUFSRSxHQUFhRixFQUFiRTtRQUVBQSxPQUFBQSxDQUFRTyxTQUFSUCxDQUFrQlEsTUFBbEJSLEdBQTJCLFVBQVNTLElBQVQsRUFBZTtBQUFBLFlBQ3RDQSxJQUFBQSxDQUFLQyxHQUFMRCxHQUFXLEtBQUtFLFlBQUwsQ0FBa0JGLElBQUFBLENBQUtDLEdBQXZCLENBQVhELENBRHNDO0FBQUEsWUFFdEMsT0FBTyxJQUFQLENBRnNDO0FBQUEsU0FBMUNUO1FBS0FBLE9BQUFBLENBQVFPLFNBQVJQLENBQWtCVyxZQUFsQlgsR0FBaUMsVUFBVVUsR0FBVixFQUFlO0FBQUEsWUFDNUMsSUFBSUUsYUFBQUEsR0FBZ0IsQ0FBQ0YsR0FBQUEsQ0FBSUcsVUFBSkgsQ0FBZSxLQUFLUCxXQUFwQk8sQ0FBckIsQ0FENEM7QUFBQSxZQUU1QyxJQUFJSSxHQUFBQSxHQUFNRixhQUFBQSxHQUFnQixLQUFLVixrQkFBckJVLEdBQTBDLEtBQUtYLFlBQXpELENBRjRDO0FBQUEsWUFHNUNTLEdBQUFBLEdBQU1BLEdBQUFBLENBQUlLLE9BQUpMLENBQVlYLFNBQVpXLEVBQXVCLFVBQVVNLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQUEsZ0JBQ2hELElBQUlDLFNBQUFBLEdBQVlKLEdBQUFBLENBQUlHLElBQUpILENBQWhCLENBRGdEO0FBQUEsZ0JBRWhELE9BQU9JLFNBQUFBLEdBQVlGLEtBQUFBLEdBQVEsR0FBUkEsR0FBY0UsU0FBMUJBLEdBQXNDRixLQUE3QyxDQUZnRDtBQUFBLGFBQTlDTixDQUFOQSxDQUg0QztBQUFBLFlBTzVDLE9BQU9BLEdBQVAsQ0FQNEM7QUFBQSxTQUFoRFY7UUFXQUosUUFBQUEsQ0FBU0ksT0FBVEosR0FBbUJ1QixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQm5CLE9BQXBDSiIsImZpbGUiOiJtZDUtcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBQaXBlbGluZSA9IHJlcXVpcmUoJy4vcGlwZWxpbmUnKTtcblxuY29uc3QgSUQgPSAnTUQ1UGlwZSc7XG5jb25zdCBVdWlkUmVnZXggPSAvLipbL1xcXFxdWzAtOWEtZkEtRl17Mn1bL1xcXFxdKFswLTlhLWZBLUYtXXs4LH0pLztcblxudmFyIE1ENVBpcGUgPSBmdW5jdGlvbiAobWQ1QXNzZXRzTWFwLCBtZDVOYXRpdmVBc3NldHNNYXAsIGxpYnJhcnlCYXNlKSB7XG4gICAgdGhpcy5pZCA9IElEO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZTtcbiAgICB0aGlzLnBpcGVsaW5lID0gbnVsbDtcbiAgICB0aGlzLm1kNUFzc2V0c01hcCA9IG1kNUFzc2V0c01hcDtcbiAgICB0aGlzLm1kNU5hdGl2ZUFzc2V0c01hcCA9IG1kNU5hdGl2ZUFzc2V0c01hcDtcbiAgICB0aGlzLmxpYnJhcnlCYXNlID0gbGlicmFyeUJhc2U7XG59O1xuTUQ1UGlwZS5JRCA9IElEO1xuXG5NRDVQaXBlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS51cmwgPSB0aGlzLnRyYW5zZm9ybVVSTChpdGVtLnVybCk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5NRDVQaXBlLnByb3RvdHlwZS50cmFuc2Zvcm1VUkwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgbGV0IGlzTmF0aXZlQXNzZXQgPSAhdXJsLnN0YXJ0c1dpdGgodGhpcy5saWJyYXJ5QmFzZSk7XG4gICAgbGV0IG1hcCA9IGlzTmF0aXZlQXNzZXQgPyB0aGlzLm1kNU5hdGl2ZUFzc2V0c01hcCA6IHRoaXMubWQ1QXNzZXRzTWFwO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKFV1aWRSZWdleCwgZnVuY3Rpb24gKG1hdGNoLCB1dWlkKSB7XG4gICAgICAgIGxldCBoYXNoVmFsdWUgPSBtYXBbdXVpZF07XG4gICAgICAgIHJldHVybiBoYXNoVmFsdWUgPyBtYXRjaCArICcuJyArIGhhc2hWYWx1ZSA6IG1hdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiB1cmw7XG59O1xuXG5cblBpcGVsaW5lLk1ENVBpcGUgPSBtb2R1bGUuZXhwb3J0cyA9IE1ENVBpcGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBQaXBlbGluZSA9IHJlcXVpcmUoJy4vcGlwZWxpbmUnKTtcblxudmFyIElEID0gJ01ENVBpcGUnO1xudmFyIFV1aWRSZWdleCA9IC8uKlsvXFxcXF1bMC05YS1mQS1GXXsyfVsvXFxcXF0oWzAtOWEtZkEtRi1dezgsfSkvO1xuXG52YXIgTUQ1UGlwZSA9IGZ1bmN0aW9uIE1ENVBpcGUobWQ1QXNzZXRzTWFwLCBtZDVOYXRpdmVBc3NldHNNYXAsIGxpYnJhcnlCYXNlKSB7XG4gICAgdGhpcy5pZCA9IElEO1xuICAgIHRoaXMuYXN5bmMgPSBmYWxzZTtcbiAgICB0aGlzLnBpcGVsaW5lID0gbnVsbDtcbiAgICB0aGlzLm1kNUFzc2V0c01hcCA9IG1kNUFzc2V0c01hcDtcbiAgICB0aGlzLm1kNU5hdGl2ZUFzc2V0c01hcCA9IG1kNU5hdGl2ZUFzc2V0c01hcDtcbiAgICB0aGlzLmxpYnJhcnlCYXNlID0gbGlicmFyeUJhc2U7XG59O1xuTUQ1UGlwZS5JRCA9IElEO1xuXG5NRDVQaXBlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0udXJsID0gdGhpcy50cmFuc2Zvcm1VUkwoaXRlbS51cmwpO1xuICAgIHJldHVybiBudWxsO1xufTtcblxuTUQ1UGlwZS5wcm90b3R5cGUudHJhbnNmb3JtVVJMID0gZnVuY3Rpb24gKHVybCkge1xuICAgIHZhciBpc05hdGl2ZUFzc2V0ID0gIXVybC5zdGFydHNXaXRoKHRoaXMubGlicmFyeUJhc2UpO1xuICAgIHZhciBtYXAgPSBpc05hdGl2ZUFzc2V0ID8gdGhpcy5tZDVOYXRpdmVBc3NldHNNYXAgOiB0aGlzLm1kNUFzc2V0c01hcDtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShVdWlkUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgdXVpZCkge1xuICAgICAgICB2YXIgaGFzaFZhbHVlID0gbWFwW3V1aWRdO1xuICAgICAgICByZXR1cm4gaGFzaFZhbHVlID8gbWF0Y2ggKyAnLicgKyBoYXNoVmFsdWUgOiBtYXRjaDtcbiAgICB9KTtcbiAgICByZXR1cm4gdXJsO1xufTtcblxuUGlwZWxpbmUuTUQ1UGlwZSA9IG1vZHVsZS5leHBvcnRzID0gTUQ1UGlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltMWtOUzF3YVhCbExtcHpJbDBzSW01aGJXVnpJanBiSWxCcGNHVnNhVzVsSWl3aWNtVnhkV2x5WlNJc0lrbEVJaXdpVlhWcFpGSmxaMlY0SWl3aVRVUTFVR2x3WlNJc0ltMWtOVUZ6YzJWMGMwMWhjQ0lzSW0xa05VNWhkR2wyWlVGemMyVjBjMDFoY0NJc0lteHBZbkpoY25sQ1lYTmxJaXdpYVdRaUxDSmhjM2x1WXlJc0luQnBjR1ZzYVc1bElpd2ljSEp2ZEc5MGVYQmxJaXdpYUdGdVpHeGxJaXdpYVhSbGJTSXNJblZ5YkNJc0luUnlZVzV6Wm05eWJWVlNUQ0lzSW1selRtRjBhWFpsUVhOelpYUWlMQ0p6ZEdGeWRITlhhWFJvSWl3aWJXRndJaXdpY21Wd2JHRmpaU0lzSW0xaGRHTm9JaXdpZFhWcFpDSXNJbWhoYzJoV1lXeDFaU0lzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJMRWxCUVVsQkxGZEJRVmRETEZGQlFWRXNXVUZCVWl4RFFVRm1PenRCUVVWQkxFbEJRVTFETEV0QlFVc3NVMEZCV0R0QlFVTkJMRWxCUVUxRExGbEJRVmtzT0VOQlFXeENPenRCUVVWQkxFbEJRVWxETEZWQlFWVXNVMEZCVmtFc1QwRkJWU3hEUVVGVlF5eFpRVUZXTEVWQlFYZENReXhyUWtGQmVFSXNSVUZCTkVORExGZEJRVFZETEVWQlFYbEVPMEZCUTI1RkxGTkJRVXRETEVWQlFVd3NSMEZCVlU0c1JVRkJWanRCUVVOQkxGTkJRVXRQTEV0QlFVd3NSMEZCWVN4TFFVRmlPMEZCUTBFc1UwRkJTME1zVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxGTkJRVXRNTEZsQlFVd3NSMEZCYjBKQkxGbEJRWEJDTzBGQlEwRXNVMEZCUzBNc2EwSkJRVXdzUjBGQk1FSkJMR3RDUVVFeFFqdEJRVU5CTEZOQlFVdERMRmRCUVV3c1IwRkJiVUpCTEZkQlFXNUNPMEZCUTBnc1EwRlFSRHRCUVZGQlNDeFJRVUZSUml4RlFVRlNMRWRCUVdGQkxFVkJRV0k3TzBGQlJVRkZMRkZCUVZGUExGTkJRVklzUTBGQmEwSkRMRTFCUVd4Q0xFZEJRVEpDTEZWQlFWTkRMRWxCUVZRc1JVRkJaVHRCUVVOMFEwRXNVMEZCUzBNc1IwRkJUQ3hIUVVGWExFdEJRVXRETEZsQlFVd3NRMEZCYTBKR0xFdEJRVXRETEVkQlFYWkNMRU5CUVZnN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFNDeERRVWhFT3p0QlFVdEJWaXhSUVVGUlR5eFRRVUZTTEVOQlFXdENTU3haUVVGc1FpeEhRVUZwUXl4VlFVRlZSQ3hIUVVGV0xFVkJRV1U3UVVGRE5VTXNVVUZCU1VVc1owSkJRV2RDTEVOQlFVTkdMRWxCUVVsSExGVkJRVW9zUTBGQlpTeExRVUZMVml4WFFVRndRaXhEUVVGeVFqdEJRVU5CTEZGQlFVbFhMRTFCUVUxR0xHZENRVUZuUWl4TFFVRkxWaXhyUWtGQmNrSXNSMEZCTUVNc1MwRkJTMFFzV1VGQmVrUTdRVUZEUVZNc1ZVRkJUVUVzU1VGQlNVc3NUMEZCU2l4RFFVRlphRUlzVTBGQldpeEZRVUYxUWl4VlFVRlZhVUlzUzBGQlZpeEZRVUZwUWtNc1NVRkJha0lzUlVGQmRVSTdRVUZEYUVRc1dVRkJTVU1zV1VGQldVb3NTVUZCU1Vjc1NVRkJTaXhEUVVGb1FqdEJRVU5CTEdWQlFVOURMRmxCUVZsR0xGRkJRVkVzUjBGQlVpeEhRVUZqUlN4VFFVRXhRaXhIUVVGelEwWXNTMEZCTjBNN1FVRkRTQ3hMUVVoTExFTkJRVTQ3UVVGSlFTeFhRVUZQVGl4SFFVRlFPMEZCUTBnc1EwRlNSRHM3UVVGWFFXUXNVMEZCVTBrc1QwRkJWQ3hIUVVGdFFtMUNMRTlCUVU5RExFOUJRVkFzUjBGQmFVSndRaXhQUVVGd1F5SXNJbVpwYkdVaU9pSnRaRFV0Y0dsd1pTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYRzRnSUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUNCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNibHh1SUZSb1pTQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QnBiaUIwYUdseklFeHBZMlZ1YzJVZ1FXZHlaV1Z0Wlc1MElHRnlaU0JzYVdObGJuTmxaQ3dnYm05MElITnZiR1F1WEc0Z1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVJSEpsYzJWeWRtVnpJR0ZzYkNCeWFXZG9kSE1nYm05MElHVjRjSEpsYzNOc2VTQm5jbUZ1ZEdWa0lIUnZJSGx2ZFM1Y2JseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzRnVkVoRklGTlBSbFJYUVZKRkxseHVJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvdlhHNWNiblpoY2lCUWFYQmxiR2x1WlNBOUlISmxjWFZwY21Vb0p5NHZjR2x3Wld4cGJtVW5LVHRjYmx4dVkyOXVjM1FnU1VRZ1BTQW5UVVExVUdsd1pTYzdYRzVqYjI1emRDQlZkV2xrVW1WblpYZ2dQU0F2TGlwYkwxeGNYRnhkV3pBdE9XRXRaa0V0UmwxN01uMWJMMXhjWEZ4ZEtGc3dMVGxoTFdaQkxVWXRYWHM0TEgwcEx6dGNibHh1ZG1GeUlFMUVOVkJwY0dVZ1BTQm1kVzVqZEdsdmJpQW9iV1ExUVhOelpYUnpUV0Z3TENCdFpEVk9ZWFJwZG1WQmMzTmxkSE5OWVhBc0lHeHBZbkpoY25sQ1lYTmxLU0I3WEc0Z0lDQWdkR2hwY3k1cFpDQTlJRWxFTzF4dUlDQWdJSFJvYVhNdVlYTjVibU1nUFNCbVlXeHpaVHRjYmlBZ0lDQjBhR2x6TG5CcGNHVnNhVzVsSUQwZ2JuVnNiRHRjYmlBZ0lDQjBhR2x6TG0xa05VRnpjMlYwYzAxaGNDQTlJRzFrTlVGemMyVjBjMDFoY0R0Y2JpQWdJQ0IwYUdsekxtMWtOVTVoZEdsMlpVRnpjMlYwYzAxaGNDQTlJRzFrTlU1aGRHbDJaVUZ6YzJWMGMwMWhjRHRjYmlBZ0lDQjBhR2x6TG14cFluSmhjbmxDWVhObElEMGdiR2xpY21GeWVVSmhjMlU3WEc1OU8xeHVUVVExVUdsd1pTNUpSQ0E5SUVsRU8xeHVYRzVOUkRWUWFYQmxMbkJ5YjNSdmRIbHdaUzVvWVc1a2JHVWdQU0JtZFc1amRHbHZiaWhwZEdWdEtTQjdYRzRnSUNBZ2FYUmxiUzUxY213Z1BTQjBhR2x6TG5SeVlXNXpabTl5YlZWU1RDaHBkR1Z0TG5WeWJDazdYRzRnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNU5SRFZRYVhCbExuQnliM1J2ZEhsd1pTNTBjbUZ1YzJadmNtMVZVa3dnUFNCbWRXNWpkR2x2YmlBb2RYSnNLU0I3WEc0Z0lDQWdiR1YwSUdselRtRjBhWFpsUVhOelpYUWdQU0FoZFhKc0xuTjBZWEowYzFkcGRHZ29kR2hwY3k1c2FXSnlZWEo1UW1GelpTazdYRzRnSUNBZ2JHVjBJRzFoY0NBOUlHbHpUbUYwYVhabFFYTnpaWFFnUHlCMGFHbHpMbTFrTlU1aGRHbDJaVUZ6YzJWMGMwMWhjQ0E2SUhSb2FYTXViV1ExUVhOelpYUnpUV0Z3TzF4dUlDQWdJSFZ5YkNBOUlIVnliQzV5WlhCc1lXTmxLRlYxYVdSU1pXZGxlQ3dnWm5WdVkzUnBiMjRnS0cxaGRHTm9MQ0IxZFdsa0tTQjdYRzRnSUNBZ0lDQWdJR3hsZENCb1lYTm9WbUZzZFdVZ1BTQnRZWEJiZFhWcFpGMDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm9ZWE5vVm1Gc2RXVWdQeUJ0WVhSamFDQXJJQ2N1SnlBcklHaGhjMmhXWVd4MVpTQTZJRzFoZEdOb08xeHVJQ0FnSUgwcE8xeHVJQ0FnSUhKbGRIVnliaUIxY213N1hHNTlPMXh1WEc1Y2JsQnBjR1ZzYVc1bExrMUVOVkJwY0dVZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlFMUVOVkJwY0dVN1hHNGlYWDA9Il19