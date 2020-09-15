(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/skeleton/CCJointMatrixCurve.js';
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
        var _require = require('../../../animation/animation-curves'), DynamicAnimCurve = _require.DynamicAnimCurve, quickFindIndex = _require.quickFindIndex;
        var JointMatrixCurve = cc.Class({
            name: 'cc.JointMatrixCurve',
            extends: DynamicAnimCurve,
            _findFrameIndex: quickFindIndex,
            sample: function sample(time, ratio) {
                var ratios = this.ratios;
                var index = this._findFrameIndex(ratios, ratio);
                if (index < -1) {
                    index = ~index - 1;
                }
                var pairs = this.pairs;
                for (var i = 0; i < pairs.length; i++) {
                    var pair = pairs[i];
                    pair.target._jointMatrix = pair.values[index];
                }
            }
        });
        module.exports = JointMatrixCurve;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDSm9pbnRNYXRyaXhDdXJ2ZS5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvM2Qvc2tlbGV0b24vQ0NKb2ludE1hdHJpeEN1cnZlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJEeW5hbWljQW5pbUN1cnZlIiwicXVpY2tGaW5kSW5kZXgiLCJjYyIsIl9maW5kRnJhbWVJbmRleCIsInRpbWUiLCJyYXRpbyIsIkpvaW50TWF0cml4Q3VydmUiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwic2FtcGxlIiwicmF0aW9zIiwiaW5kZXgiLCJwYWlycyIsImkiLCJsZW5ndGgiLCJwYWlyIiwidGFyZ2V0IiwiX2pvaW50TWF0cml4IiwidmFsdWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUE2Q0EsSUFBUSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxrQ0FBUkE7bUJBQXJDQyxPQUFBQSxHQUFBQSxNQUFBQTtxQkFBa0JDOztRQUVIQyxPQUFBLE9BQUEsQ0FBUyxPQUFULENBQUFBO1FBQ2IsVUFEc0IsT0FDdEIsRUFEc0I7QUFBQSxRQUVuQkYsT0FGbUIsaUJBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsQ0FFbkJBLENBRm1CO0FBQUE7SUFJNUJHLFNBQWlCRixRQUFqQkUsQ0FKNEIsT0FJNUJBLEVBSjRCLE9BSTVCQSxFQUo0QixNQUk1QkEsRUFKNEI7QUFBQSxRQUFBLElBS3BCQyxDQUFBQSxPQUxvQixFQUtkQztBQUFBQSxZQUxjLGlCQUFBLENBS1AsY0FMTyxDQUtQLFVBTE8sRUFLUCxNQUxPLEVBS2RBO0FBQUFBLFNBTGM7QUFBQTt1QkFGYU4sT0FBQUEsQ0FBUSxxQ0FBUkEsR0FBckNDLGdCQUFBQSxZQUFBQSxrQkFBa0JDLGNBQUFBLFlBQUFBO1FBRTFCLElBQUlLLGdCQUFBQSxHQUFtQkosRUFBQUEsQ0FBR0ssS0FBSEwsQ0FBUztBQUFBLFlBQzVCTSxJQUFBQSxFQUFNLHFCQURzQjtBQUFBLFlBRTVCQyxPQUFBQSxFQUFTVCxnQkFGbUI7QUFBQSxZQUk1QkcsZUFBQUEsRUFBaUJGLGNBSlc7QUFBQSxZQUs1QlMsTUFBQUEsRUFMNEIsU0FBQSxNQUFBLENBS3BCTixJQUxvQixFQUtkQyxLQUxjLEVBS1A7QUFBQSxnQkFDakIsSUFBSU0sTUFBQUEsR0FBUyxLQUFLQSxNQUFsQixDQURpQjtBQUFBLGdCQUVqQixJQUFJQyxLQUFBQSxHQUFRLEtBQUtULGVBQUwsQ0FBcUJRLE1BQXJCLEVBQTZCTixLQUE3QixDQUFaLENBRmlCO0FBQUEsZ0JBR2pCLElBQUlPLEtBQUFBLEdBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQUEsb0JBQ1pBLEtBQUFBLEdBQVEsQ0FBQ0EsS0FBRCxHQUFTLENBQWpCQSxDQURZO0FBQUEsaUJBSEM7QUFBQSxnQkFPakIsSUFBSUMsS0FBQUEsR0FBUSxLQUFLQSxLQUFqQixDQVBpQjtBQUFBLGdCQVFqQixLQUFLLElBQUlDLENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJRCxLQUFBQSxDQUFNRSxNQUExQixFQUFrQ0QsQ0FBQUEsRUFBbEMsRUFBdUM7QUFBQSxvQkFDbkMsSUFBSUUsSUFBQUEsR0FBT0gsS0FBQUEsQ0FBTUMsQ0FBTkQsQ0FBWCxDQURtQztBQUFBLG9CQUVuQ0csSUFBQUEsQ0FBS0MsTUFBTEQsQ0FBWUUsWUFBWkYsR0FBMkJBLElBQUFBLENBQUtHLE1BQUxILENBQVlKLEtBQVpJLENBQTNCQSxDQUZtQztBQUFBLGlCQVJ0QjtBQUFBLGFBTE87QUFBQSxTQUFUZCxDQUF2QjtRQW9CQWtCLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCZCxnQkFBakJjLENBcEJnQztBQUFBO0lBT1osSUFBQSxPQUFBLEVBQUtqQjtBQUFBQSxRQUNELFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBRENBO0FBQUFBLEtBQUwsTUFHWDtBQUFBO1lBRWdCVSxRQUFBQSxDQUFqQixRQUFBLENBQUEsT0FBaUJBLEVBQWpCLFNBQWlCQSxFQUFqQixRQUFpQkE7V0FGaEI7QUFBQSIsImZpbGUiOiJDQ0pvaW50TWF0cml4Q3VydmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IER5bmFtaWNBbmltQ3VydmUsIHF1aWNrRmluZEluZGV4IH0gPSByZXF1aXJlKCcuLi8uLi8uLi9hbmltYXRpb24vYW5pbWF0aW9uLWN1cnZlcycpO1xuXG5sZXQgSm9pbnRNYXRyaXhDdXJ2ZSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuSm9pbnRNYXRyaXhDdXJ2ZScsXG4gICAgZXh0ZW5kczogRHluYW1pY0FuaW1DdXJ2ZSxcblxuICAgIF9maW5kRnJhbWVJbmRleDogcXVpY2tGaW5kSW5kZXgsXG4gICAgc2FtcGxlICh0aW1lLCByYXRpbykge1xuICAgICAgICBsZXQgcmF0aW9zID0gdGhpcy5yYXRpb3M7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2ZpbmRGcmFtZUluZGV4KHJhdGlvcywgcmF0aW8pO1xuICAgICAgICBpZiAoaW5kZXggPCAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSB+aW5kZXggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhaXJzID0gdGhpcy5wYWlycztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIHBhaXIudGFyZ2V0Ll9qb2ludE1hdHJpeCA9IHBhaXIudmFsdWVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpvaW50TWF0cml4Q3VydmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2FuaW1hdGlvbi9hbmltYXRpb24tY3VydmVzJyksXG4gICAgRHluYW1pY0FuaW1DdXJ2ZSA9IF9yZXF1aXJlLkR5bmFtaWNBbmltQ3VydmUsXG4gICAgcXVpY2tGaW5kSW5kZXggPSBfcmVxdWlyZS5xdWlja0ZpbmRJbmRleDtcblxudmFyIEpvaW50TWF0cml4Q3VydmUgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLkpvaW50TWF0cml4Q3VydmUnLFxuICAgIGV4dGVuZHM6IER5bmFtaWNBbmltQ3VydmUsXG5cbiAgICBfZmluZEZyYW1lSW5kZXg6IHF1aWNrRmluZEluZGV4LFxuICAgIHNhbXBsZTogZnVuY3Rpb24gc2FtcGxlKHRpbWUsIHJhdGlvKSB7XG4gICAgICAgIHZhciByYXRpb3MgPSB0aGlzLnJhdGlvcztcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZEZyYW1lSW5kZXgocmF0aW9zLCByYXRpbyk7XG4gICAgICAgIGlmIChpbmRleCA8IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IH5pbmRleCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFpcnMgPSB0aGlzLnBhaXJzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgcGFpci50YXJnZXQuX2pvaW50TWF0cml4ID0gcGFpci52YWx1ZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSm9pbnRNYXRyaXhDdXJ2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRTbTlwYm5STllYUnlhWGhEZFhKMlpTNXFjeUpkTENKdVlXMWxjeUk2V3lKeVpYRjFhWEpsSWl3aVJIbHVZVzFwWTBGdWFXMURkWEoyWlNJc0luRjFhV05yUm1sdVpFbHVaR1Y0SWl3aVNtOXBiblJOWVhSeWFYaERkWEoyWlNJc0ltTmpJaXdpUTJ4aGMzTWlMQ0p1WVcxbElpd2laWGgwWlc1a2N5SXNJbDltYVc1a1JuSmhiV1ZKYm1SbGVDSXNJbk5oYlhCc1pTSXNJblJwYldVaUxDSnlZWFJwYnlJc0luSmhkR2x2Y3lJc0ltbHVaR1Y0SWl3aWNHRnBjbk1pTENKcElpd2liR1Z1WjNSb0lpd2ljR0ZwY2lJc0luUmhjbWRsZENJc0lsOXFiMmx1ZEUxaGRISnBlQ0lzSW5aaGJIVmxjeUlzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMlZCUVRaRFFTeFJRVUZSTEhGRFFVRlNMRU03U1VGQmNrTkRMR2RDTEZsQlFVRkJMR2RDTzBsQlFXdENReXhqTEZsQlFVRkJMR003TzBGQlJURkNMRWxCUVVsRExHMUNRVUZ0UWtNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlF6VkNReXhWUVVGTkxIRkNRVVJ6UWp0QlFVVTFRa01zWVVGQlUwNHNaMEpCUm0xQ096dEJRVWsxUWs4c2NVSkJRV2xDVGl4alFVcFhPMEZCU3pWQ1R5eFZRVXcwUWl4clFrRkxjRUpETEVsQlRHOUNMRVZCUzJSRExFdEJUR01zUlVGTFVEdEJRVU5xUWl4WlFVRkpReXhUUVVGVExFdEJRVXRCTEUxQlFXeENPMEZCUTBFc1dVRkJTVU1zVVVGQlVTeExRVUZMVEN4bFFVRk1MRU5CUVhGQ1NTeE5RVUZ5UWl4RlFVRTJRa1FzUzBGQk4wSXNRMEZCV2p0QlFVTkJMRmxCUVVsRkxGRkJRVkVzUTBGQlF5eERRVUZpTEVWQlFXZENPMEZCUTFwQkxHOUNRVUZSTEVOQlFVTkJMRXRCUVVRc1IwRkJVeXhEUVVGcVFqdEJRVU5JT3p0QlFVVkVMRmxCUVVsRExGRkJRVkVzUzBGQlMwRXNTMEZCYWtJN1FVRkRRU3hoUVVGTExFbEJRVWxETEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVUXNUVUZCVFVVc1RVRkJNVUlzUlVGQmEwTkVMRWRCUVd4RExFVkJRWFZETzBGQlEyNURMR2RDUVVGSlJTeFBRVUZQU0N4TlFVRk5ReXhEUVVGT0xFTkJRVmc3UVVGRFFVVXNhVUpCUVV0RExFMUJRVXdzUTBGQldVTXNXVUZCV2l4SFFVRXlRa1lzUzBGQlMwY3NUVUZCVEN4RFFVRlpVQ3hMUVVGYUxFTkJRVE5DTzBGQlEwZzdRVUZEU2p0QlFXcENNa0lzUTBGQlZDeERRVUYyUWpzN1FVRnZRa0ZSTEU5QlFVOURMRTlCUVZBc1IwRkJhVUp1UWl4blFrRkJha0lpTENKbWFXeGxJam9pUTBOS2IybHVkRTFoZEhKcGVFTjFjblpsTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ2V5QkVlVzVoYldsalFXNXBiVU4xY25abExDQnhkV2xqYTBacGJtUkpibVJsZUNCOUlEMGdjbVZ4ZFdseVpTZ25MaTR2TGk0dkxpNHZZVzVwYldGMGFXOXVMMkZ1YVcxaGRHbHZiaTFqZFhKMlpYTW5LVHRjYmx4dWJHVjBJRXB2YVc1MFRXRjBjbWw0UTNWeWRtVWdQU0JqWXk1RGJHRnpjeWg3WEc0Z0lDQWdibUZ0WlRvZ0oyTmpMa3B2YVc1MFRXRjBjbWw0UTNWeWRtVW5MRnh1SUNBZ0lHVjRkR1Z1WkhNNklFUjVibUZ0YVdOQmJtbHRRM1Z5ZG1Vc1hHNWNiaUFnSUNCZlptbHVaRVp5WVcxbFNXNWtaWGc2SUhGMWFXTnJSbWx1WkVsdVpHVjRMRnh1SUNBZ0lITmhiWEJzWlNBb2RHbHRaU3dnY21GMGFXOHBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmhkR2x2Y3lBOUlIUm9hWE11Y21GMGFXOXpPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FXNWtaWGdnUFNCMGFHbHpMbDltYVc1a1JuSmhiV1ZKYm1SbGVDaHlZWFJwYjNNc0lISmhkR2x2S1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1WkdWNElEd2dMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x1WkdWNElEMGdmbWx1WkdWNElDMGdNVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVdseWN5QTlJSFJvYVhNdWNHRnBjbk03WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2NHRnBjbk11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQndZV2x5SUQwZ2NHRnBjbk5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVdseUxuUmhjbWRsZEM1ZmFtOXBiblJOWVhSeWFYZ2dQU0J3WVdseUxuWmhiSFZsYzF0cGJtUmxlRjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JLYjJsdWRFMWhkSEpwZUVOMWNuWmxPMXh1SWwxOSJdfQ==