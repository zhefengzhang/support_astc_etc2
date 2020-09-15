(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/mesh-util.js';
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
        exports.postLoadMesh = postLoadMesh;
        function postLoadMesh(mesh, callback) {
            if (mesh.loaded || !mesh.nativeUrl) {
                callback && callback();
                return;
            }
            cc.loader.load(mesh.nativeUrl, function (err, buffer) {
                if (buffer) {
                    mesh._nativeAsset = buffer;
                }
                callback && callback(err);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2gtdXRpbC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvdXRpbHMvbWVzaC11dGlsLmpzIl0sIm5hbWVzIjpbInBvc3RMb2FkTWVzaCIsIm1lc2giLCJjYWxsYmFjayIsImxvYWRlZCIsIm5hdGl2ZVVybCIsImNjIiwibG9hZGVyIiwibG9hZCIsImVyciIsImJ1ZmZlciIsIl9uYXRpdmVBc3NldCJdLCJtYXBwaW5ncyI6Ijs7OztRQXlCZ0JBLFNBQUFBO1FBekJoQixPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUE7Ozs7Ozs7Ozs7Z0JBeUJnQkEsZUFBQUE7UUFBVCxTQUFTQSxZQUFULENBQXVCQyxJQUF2QixFQUE2QkMsUUFBN0IsRUFBdUM7QUFBQSxZQUMxQyxJQUFJRCxJQUFBQSxDQUFLRSxNQUFMRixJQUFlLENBQUNBLElBQUFBLENBQUtHLFNBQXpCLEVBQW9DO0FBQUEsZ0JBQ2hDRixRQUFBQSxJQUFZQSxRQUFBQSxFQUFaQSxDQURnQztBQUFBLGdCQUVoQyxPQUZnQztBQUFBLGFBRE07QUFBQSxZQU0xQ0csRUFBQUEsQ0FBR0MsTUFBSEQsQ0FBVUUsSUFBVkYsQ0FBZUosSUFBQUEsQ0FBS0csU0FBcEJDLEVBQStCLFVBQVVHLEdBQVYsRUFBZUMsTUFBZixFQUF1QjtBQUFBLGdCQUNsRCxJQUFJQSxNQUFKLEVBQVk7QUFBQSxvQkFDUlIsSUFBQUEsQ0FBS1MsWUFBTFQsR0FBb0JRLE1BQXBCUixDQURRO0FBQUEsaUJBRHNDO0FBQUEsZ0JBSWxEQyxRQUFBQSxJQUFZQSxRQUFBQSxDQUFTTSxHQUFUTixDQUFaQSxDQUprRDtBQUFBLGFBQXRERyxFQU4wQztBQUFBIiwiZmlsZSI6Im1lc2gtdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zdExvYWRNZXNoIChtZXNoLCBjYWxsYmFjaykge1xuICAgIGlmIChtZXNoLmxvYWRlZCB8fCAhbWVzaC5uYXRpdmVVcmwpIHtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBsb2FkIGltYWdlXG4gICAgY2MubG9hZGVyLmxvYWQobWVzaC5uYXRpdmVVcmwsIGZ1bmN0aW9uIChlcnIsIGJ1ZmZlcikge1xuICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICBtZXNoLl9uYXRpdmVBc3NldCA9IGJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBvc3RMb2FkTWVzaCA9IHBvc3RMb2FkTWVzaDtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE5IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBwb3N0TG9hZE1lc2gobWVzaCwgY2FsbGJhY2spIHtcbiAgICBpZiAobWVzaC5sb2FkZWQgfHwgIW1lc2gubmF0aXZlVXJsKSB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbG9hZCBpbWFnZVxuICAgIGNjLmxvYWRlci5sb2FkKG1lc2gubmF0aXZlVXJsLCBmdW5jdGlvbiAoZXJyLCBidWZmZXIpIHtcbiAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgbWVzaC5fbmF0aXZlQXNzZXQgPSBidWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltMWxjMmd0ZFhScGJDNXFjeUpkTENKdVlXMWxjeUk2V3lKd2IzTjBURzloWkUxbGMyZ2lMQ0p0WlhOb0lpd2lZMkZzYkdKaFkyc2lMQ0pzYjJGa1pXUWlMQ0p1WVhScGRtVlZjbXdpTENKall5SXNJbXh2WVdSbGNpSXNJbXh2WVdRaUxDSmxjbklpTENKaWRXWm1aWElpTENKZmJtRjBhWFpsUVhOelpYUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMUZCZVVKblFrRXNXU3hIUVVGQlFTeFpPMEZCZWtKb1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFYbENUeXhUUVVGVFFTeFpRVUZVTEVOQlFYVkNReXhKUVVGMlFpeEZRVUUyUWtNc1VVRkJOMElzUlVGQmRVTTdRVUZETVVNc1VVRkJTVVFzUzBGQlMwVXNUVUZCVEN4SlFVRmxMRU5CUVVOR0xFdEJRVXRITEZOQlFYcENMRVZCUVc5RE8wRkJRMmhEUml4dlFrRkJXVUVzVlVGQldqdEJRVU5CTzBGQlEwZzdRVUZEUkR0QlFVTkJSeXhQUVVGSFF5eE5RVUZJTEVOQlFWVkRMRWxCUVZZc1EwRkJaVTRzUzBGQlMwY3NVMEZCY0VJc1JVRkJLMElzVlVGQlZVa3NSMEZCVml4RlFVRmxReXhOUVVGbUxFVkJRWFZDTzBGQlEyeEVMRmxCUVVsQkxFMUJRVW9zUlVGQldUdEJRVU5TVWl4cFFrRkJTMU1zV1VGQlRDeEhRVUZ2UWtRc1RVRkJjRUk3UVVGRFNEdEJRVU5FVUN4dlFrRkJXVUVzVTBGQlUwMHNSMEZCVkN4RFFVRmFPMEZCUTBnc1MwRk1SRHRCUVUxSUlpd2labWxzWlNJNkltMWxjMmd0ZFhScGJDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREU1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xseHVYRzRnYUhSMGNITTZMeTkzZDNjdVkyOWpiM011WTI5dEwxeHVYRzRnVUdWeWJXbHpjMmx2YmlCcGN5Qm9aWEpsWW5rZ1ozSmhiblJsWkN3Z1puSmxaU0J2WmlCamFHRnlaMlVzSUhSdklHRnVlU0J3WlhKemIyNGdiMkowWVdsdWFXNW5JR0VnWTI5d2VWeHVJRzltSUhSb2FYTWdjMjltZEhkaGNtVWdZVzVrSUdGemMyOWphV0YwWldRZ1pXNW5hVzVsSUhOdmRYSmpaU0JqYjJSbElDaDBhR1VnWENKVGIyWjBkMkZ5WlZ3aUtTd2dZU0JzYVcxcGRHVmtMRnh1SUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh1SUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUIxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYRzRnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhHNWNiaUJVYUdVZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2FXNGdkR2hwY3lCTWFXTmxibk5sSUVGbmNtVmxiV1Z1ZENCaGNtVWdiR2xqWlc1elpXUXNJRzV2ZENCemIyeGtMbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEc1Y2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEc0Z1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEc0Z1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc0Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRseHVJRlJJUlNCVFQwWlVWMEZTUlM1Y2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NHOXpkRXh2WVdSTlpYTm9JQ2h0WlhOb0xDQmpZV3hzWW1GamF5a2dlMXh1SUNBZ0lHbG1JQ2h0WlhOb0xteHZZV1JsWkNCOGZDQWhiV1Z6YUM1dVlYUnBkbVZWY213cElIdGNiaUFnSUNBZ0lDQWdZMkZzYkdKaFkyc2dKaVlnWTJGc2JHSmhZMnNvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJzYjJGa0lHbHRZV2RsWEc0Z0lDQWdZMk11Ykc5aFpHVnlMbXh2WVdRb2JXVnphQzV1WVhScGRtVlZjbXdzSUdaMWJtTjBhVzl1SUNobGNuSXNJR0oxWm1abGNpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1luVm1abVZ5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WlhOb0xsOXVZWFJwZG1WQmMzTmxkQ0E5SUdKMVptWmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCallXeHNZbUZqYXlBbUppQmpZV3hzWW1GamF5aGxjbklwTzF4dUlDQWdJSDBwTzF4dWZTSmRmUT09Il19