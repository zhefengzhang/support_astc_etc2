(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/mesh/index.js';
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
        require('./CCMesh');
        if (!CC_EDITOR || !Editor.isMainProcess) {
            require('./CCMeshRenderer');
            require('./mesh-renderer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9tZXNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImlzTWFpblByb2Nlc3MiLCJyZXF1aXJlIiwiQ0NfRURJVE9SIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7SUFDbUJBLElBQUFBLFFBQUFBLEdBQU9DLE9BQUFBLEdBQWUsTUFBZkEsR0FBZSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQXRCRDtJQUNQLElBQUEsVUFBQSxHQUFSLHVDQUFRO0lBQ0EsSUFBQSxTQUFBLEdBQVIsT0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQUEsUUFDSCxPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FERztBQUFBLEtBQUE7O0tBQVE7Ozs7OztRQUhaRSxPQUFBQSxDQUFRLFVBQVJBO1FBQ0EsSUFBSSxDQUFDQyxTQUFELElBQWMsQ0FBQ0gsTUFBQUEsQ0FBT0MsYUFBMUIsRUFBeUM7QUFBQSxZQUNyQ0MsT0FBQUEsQ0FBUSxrQkFBUkEsRUFEcUM7QUFBQSxZQUVyQ0EsT0FBQUEsQ0FBUSxpQkFBUkEsRUFGcUM7QUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vQ0NNZXNoJyk7XG5pZiAoIUNDX0VESVRPUiB8fCAhRWRpdG9yLmlzTWFpblByb2Nlc3MpIHtcbiAgICByZXF1aXJlKCcuL0NDTWVzaFJlbmRlcmVyJyk7XG4gICAgcmVxdWlyZSgnLi9tZXNoLXJlbmRlcmVyJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vQ0NNZXNoJyk7XG5pZiAoIUNDX0VESVRPUiB8fCAhRWRpdG9yLmlzTWFpblByb2Nlc3MpIHtcbiAgICByZXF1aXJlKCcuL0NDTWVzaFJlbmRlcmVyJyk7XG4gICAgcmVxdWlyZSgnLi9tZXNoLXJlbmRlcmVyJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW5KbGNYVnBjbVVpTENKRFExOUZSRWxVVDFJaUxDSkZaR2wwYjNJaUxDSnBjMDFoYVc1UWNtOWpaWE56SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQlFTeFJRVUZSTEZWQlFWSTdRVUZEUVN4SlFVRkpMRU5CUVVORExGTkJRVVFzU1VGQll5eERRVUZEUXl4UFFVRlBReXhoUVVFeFFpeEZRVUY1UXp0QlFVTnlRMGdzV1VGQlVTeHJRa0ZCVWp0QlFVTkJRU3haUVVGUkxHbENRVUZTTzBGQlEwZ2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUp5WlhGMWFYSmxLQ2N1TDBORFRXVnphQ2NwTzF4dWFXWWdLQ0ZEUTE5RlJFbFVUMUlnZkh3Z0lVVmthWFJ2Y2k1cGMwMWhhVzVRY205alpYTnpLU0I3WEc0Z0lDQWdjbVZ4ZFdseVpTZ25MaTlEUTAxbGMyaFNaVzVrWlhKbGNpY3BPMXh1SUNBZ0lISmxjWFZwY21Vb0p5NHZiV1Z6YUMxeVpXNWtaWEpsY2ljcE8xeHVmVnh1SWwxOSJdfQ==