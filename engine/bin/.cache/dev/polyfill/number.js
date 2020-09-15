(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/polyfill/number.js';
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
        Number.parseFloat = Number.parseFloat || parseFloat;
        Number.parseInt = Number.parseInt || parseInt;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9wb2x5ZmlsbC9udW1iZXIuanMiXSwibmFtZXMiOlsiTnVtYmVyIiwicGFyc2VGbG9hdCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiO0lBQ29CQSxJQUFBQSxPQUFBQSxHQUFPQyxPQUFjQSxPQUFkQSxLQUEzQixXQUEyQkEsSUFBM0IsT0FBQSxPQUFBLEtBQUEsV0FBb0JEO0lBQ0ZBLElBQUFBLFFBQUFBLEdBQUEsT0FBQSxHQUFsQixNQUFrQixHQUFsQixFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQWtCQTs7Ozs7Ozs7Ozs7O1FBRGxCQSxNQUFBQSxDQUFPQyxVQUFQRCxHQUFvQkEsTUFBQUEsQ0FBT0MsVUFBUEQsSUFBcUJDLFVBQXpDRDtRQUNBQSxNQUFBQSxDQUFPRSxRQUFQRixHQUFrQkEsTUFBQUEsQ0FBT0UsUUFBUEYsSUFBbUJFLFFBQXJDRiIsImZpbGUiOiJudW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbk51bWJlci5wYXJzZUZsb2F0ID0gTnVtYmVyLnBhcnNlRmxvYXQgfHwgcGFyc2VGbG9hdDtcbk51bWJlci5wYXJzZUludCA9IE51bWJlci5wYXJzZUludCB8fCBwYXJzZUludDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5OdW1iZXIucGFyc2VGbG9hdCA9IE51bWJlci5wYXJzZUZsb2F0IHx8IHBhcnNlRmxvYXQ7XG5OdW1iZXIucGFyc2VJbnQgPSBOdW1iZXIucGFyc2VJbnQgfHwgcGFyc2VJbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTUxYldKbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKT2RXMWlaWElpTENKd1lYSnpaVVpzYjJGMElpd2ljR0Z5YzJWSmJuUWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRMEZCTEU5QlFVOURMRlZCUVZBc1IwRkJiMEpFTEU5QlFVOURMRlZCUVZBc1NVRkJjVUpCTEZWQlFYcERPMEZCUTBGRUxFOUJRVTlGTEZGQlFWQXNSMEZCYTBKR0xFOUJRVTlGTEZGQlFWQXNTVUZCYlVKQkxGRkJRWEpESWl3aVptbHNaU0k2SW01MWJXSmxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklseHVUblZ0WW1WeUxuQmhjbk5sUm14dllYUWdQU0JPZFcxaVpYSXVjR0Z5YzJWR2JHOWhkQ0I4ZkNCd1lYSnpaVVpzYjJGME8xeHVUblZ0WW1WeUxuQmhjbk5sU1c1MElEMGdUblZ0WW1WeUxuQmhjbk5sU1c1MElIeDhJSEJoY25ObFNXNTBPMXh1SWwxOSJdfQ==