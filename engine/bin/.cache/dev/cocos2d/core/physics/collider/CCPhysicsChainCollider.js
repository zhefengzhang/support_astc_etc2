(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/collider/CCPhysicsChainCollider.js';
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
        var PTM_RATIO = require('../CCPhysicsTypes').PTM_RATIO;
        var PhysicsChainCollider = cc.Class({
            name: 'cc.PhysicsChainCollider',
            extends: cc.PhysicsCollider,
            editor: {
                menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Chain',
                inspector: CC_EDITOR && 'packages://inspector/inspectors/comps/physics/points-base-collider.js',
                requireComponent: cc.RigidBody
            },
            properties: {
                loop: false,
                points: {
                    default: function _default() {
                        return [
                            cc.v2(-50, 0),
                            cc.v2(50, 0)
                        ];
                    },
                    type: [cc.Vec2]
                },
                threshold: {
                    default: 1,
                    serializable: false,
                    visible: false
                }
            },
            _createShape: function _createShape(scale) {
                var shape = new b2.ChainShape();
                var points = this.points;
                var vertices = [];
                for (var i = 0; i < points.length; i++) {
                    var p = points[i];
                    vertices.push(new b2.Vec2(p.x / PTM_RATIO * scale.x, p.y / PTM_RATIO * scale.y));
                }
                if (this.loop) {
                    shape.CreateLoop(vertices, vertices.length);
                } else {
                    shape.CreateChain(vertices, vertices.length);
                }
                return shape;
            },
            resetInEditor: CC_EDITOR && function () {
                this.resetPointsByContour();
            },
            resetPointsByContour: CC_EDITOR && function () {
                var PhysicsUtils = Editor.require('scene://utils/physics');
                PhysicsUtils.resetPoints(this, {
                    threshold: this.threshold,
                    loop: this.loop
                });
            }
        });
        cc.PhysicsChainCollider = module.exports = PhysicsChainCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUGh5c2ljc0NoYWluQ29sbGlkZXIuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9jb3JlL3BoeXNpY3MvY29sbGlkZXIvQ0NQaHlzaWNzQ2hhaW5Db2xsaWRlci5qcyJdLCJuYW1lcyI6WyJQVE1fUkFUSU8iLCJyZXF1aXJlIiwiUGh5c2ljc0NoYWluQ29sbGlkZXIiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJQaHlzaWNzQ29sbGlkZXIiLCJlZGl0b3IiLCJtZW51IiwiQ0NfRURJVE9SIiwiaW5zcGVjdG9yIiwicmVxdWlyZUNvbXBvbmVudCIsIlJpZ2lkQm9keSIsInByb3BlcnRpZXMiLCJsb29wIiwicG9pbnRzIiwiZGVmYXVsdCIsInYyIiwidHlwZSIsIlZlYzIiLCJ0aHJlc2hvbGQiLCJzZXJpYWxpemFibGUiLCJ2aXNpYmxlIiwiX2NyZWF0ZVNoYXBlIiwic2NhbGUiLCJzaGFwZSIsImIyIiwiQ2hhaW5TaGFwZSIsInZlcnRpY2VzIiwiaSIsImxlbmd0aCIsInAiLCJwdXNoIiwieCIsInkiLCJDcmVhdGVMb29wIiwiQ3JlYXRlQ2hhaW4iLCJyZXNldEluRWRpdG9yIiwicmVzZXRQb2ludHNCeUNvbnRvdXIiLCJQaHlzaWNzVXRpbHMiLCJFZGl0b3IiLCJyZXNldFBvaW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQTBCQSxJQUFJQSxTQUFBQSxHQUFZQyxPQUFBQSxDQUFRLG1CQUFSQSxFQUE2QkQsU0FBN0M7UUFNQSxJQUFJRSxvQkFBQUEsR0FBdUJDLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUNoQ0UsSUFBQUEsRUFBTSx5QkFEMEI7QUFBQSxZQUVoQ0MsT0FBQUEsRUFBU0gsRUFB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dkM7QUFBQSxpQkFBL0J5QixFQUYyQztBQUFBLGFBOURmO0FBQUEsU0FBVHJDLENBQTNCO1FBb0VBQSxFQUFBQSxDQUFHRCxvQkFBSEMsR0FBMEJ3QyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQnpDLG9CQUEzQ0MiLCJmaWxlIjoiQ0NQaHlzaWNzQ2hhaW5Db2xsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFBUTV9SQVRJTyA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuUFRNX1JBVElPO1xuXG4vKipcbiAqIEBjbGFzcyBQaHlzaWNzQ2hhaW5Db2xsaWRlclxuICogQGV4dGVuZHMgUG9seWdvbkNvbGxpZGVyXG4gKi9cbnZhciBQaHlzaWNzQ2hhaW5Db2xsaWRlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuUGh5c2ljc0NoYWluQ29sbGlkZXInLFxuICAgIGV4dGVuZHM6IGNjLlBoeXNpY3NDb2xsaWRlcixcblxuICAgIGVkaXRvcjoge1xuICAgICAgICBtZW51OiBDQ19FRElUT1IgJiYgJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5waHlzaWNzL0NvbGxpZGVyL0NoYWluJyxcbiAgICAgICAgaW5zcGVjdG9yOiBDQ19FRElUT1IgJiYgJ3BhY2thZ2VzOi8vaW5zcGVjdG9yL2luc3BlY3RvcnMvY29tcHMvcGh5c2ljcy9wb2ludHMtYmFzZS1jb2xsaWRlci5qcycsXG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlJpZ2lkQm9keVxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIFdoZXRoZXIgdGhlIGNoYWluIGlzIGxvb3BcbiAgICAgICAgICogISN6aCDpk77mnaHmmK/lkKbpppblsL7nm7jov55cbiAgICAgICAgICogQHByb3BlcnR5IGxvb3BcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBsb29wOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBDaGFpbiBwb2ludHNcbiAgICAgICAgICogISN6aCDpk77mnaHpobbngrnmlbDnu4RcbiAgICAgICAgICogQHByb3BlcnR5IHBvaW50c1xuICAgICAgICAgKiBAdHlwZSB7VmVjMltdfVxuICAgICAgICAgKi9cbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiBbY2MudjIoLTUwLCAwKSwgY2MudjIoNTAsIDApXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBbY2MuVmVjMl1cbiAgICAgICAgfSxcblxuICAgICAgICB0aHJlc2hvbGQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVNoYXBlOiBmdW5jdGlvbiAoc2NhbGUpIHtcbiAgICAgICAgdmFyIHNoYXBlID0gbmV3IGIyLkNoYWluU2hhcGUoKTtcblxuICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHAgPSBwb2ludHNbaV07XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKCBuZXcgYjIuVmVjMihwLngvUFRNX1JBVElPKnNjYWxlLngsIHAueS9QVE1fUkFUSU8qc2NhbGUueSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvb3ApIHtcbiAgICAgICAgICAgIHNoYXBlLkNyZWF0ZUxvb3AodmVydGljZXMsIHZlcnRpY2VzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5DcmVhdGVDaGFpbih2ZXJ0aWNlcywgdmVydGljZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgfSxcblxuICAgIHJlc2V0SW5FZGl0b3I6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQb2ludHNCeUNvbnRvdXIoKTtcbiAgICB9LFxuXG4gICAgcmVzZXRQb2ludHNCeUNvbnRvdXI6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBQaHlzaWNzVXRpbHMgPSBFZGl0b3IucmVxdWlyZSgnc2NlbmU6Ly91dGlscy9waHlzaWNzJyk7XG4gICAgICAgIFBoeXNpY3NVdGlscy5yZXNldFBvaW50cyh0aGlzLCB7dGhyZXNob2xkOiB0aGlzLnRocmVzaG9sZCwgbG9vcDogdGhpcy5sb29wfSk7XG4gICAgfVxufSk7XG5cbmNjLlBoeXNpY3NDaGFpbkNvbGxpZGVyID0gbW9kdWxlLmV4cG9ydHMgPSBQaHlzaWNzQ2hhaW5Db2xsaWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgUFRNX1JBVElPID0gcmVxdWlyZSgnLi4vQ0NQaHlzaWNzVHlwZXMnKS5QVE1fUkFUSU87XG5cbi8qKlxuICogQGNsYXNzIFBoeXNpY3NDaGFpbkNvbGxpZGVyXG4gKiBAZXh0ZW5kcyBQb2x5Z29uQ29sbGlkZXJcbiAqL1xudmFyIFBoeXNpY3NDaGFpbkNvbGxpZGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcicsXG4gICAgZXh0ZW5kczogY2MuUGh5c2ljc0NvbGxpZGVyLFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6IENDX0VESVRPUiAmJiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvQ29sbGlkZXIvQ2hhaW4nLFxuICAgICAgICBpbnNwZWN0b3I6IENDX0VESVRPUiAmJiAncGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9waHlzaWNzL3BvaW50cy1iYXNlLWNvbGxpZGVyLmpzJyxcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gV2hldGhlciB0aGUgY2hhaW4gaXMgbG9vcFxuICAgICAgICAgKiAhI3poIOmTvuadoeaYr+WQpummluWwvuebuOi/nlxuICAgICAgICAgKiBAcHJvcGVydHkgbG9vcFxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIENoYWluIHBvaW50c1xuICAgICAgICAgKiAhI3poIOmTvuadoemhtueCueaVsOe7hFxuICAgICAgICAgKiBAcHJvcGVydHkgcG9pbnRzXG4gICAgICAgICAqIEB0eXBlIHtWZWMyW119XG4gICAgICAgICAqL1xuICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbY2MudjIoLTUwLCAwKSwgY2MudjIoNTAsIDApXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBbY2MuVmVjMl1cbiAgICAgICAgfSxcblxuICAgICAgICB0aHJlc2hvbGQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfY3JlYXRlU2hhcGU6IGZ1bmN0aW9uIF9jcmVhdGVTaGFwZShzY2FsZSkge1xuICAgICAgICB2YXIgc2hhcGUgPSBuZXcgYjIuQ2hhaW5TaGFwZSgpO1xuXG4gICAgICAgIHZhciBwb2ludHMgPSB0aGlzLnBvaW50cztcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IGIyLlZlYzIocC54IC8gUFRNX1JBVElPICogc2NhbGUueCwgcC55IC8gUFRNX1JBVElPICogc2NhbGUueSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICAgICAgc2hhcGUuQ3JlYXRlTG9vcCh2ZXJ0aWNlcywgdmVydGljZXMubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLkNyZWF0ZUNoYWluKHZlcnRpY2VzLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9LFxuXG4gICAgcmVzZXRJbkVkaXRvcjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldFBvaW50c0J5Q29udG91cigpO1xuICAgIH0sXG5cbiAgICByZXNldFBvaW50c0J5Q29udG91cjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIFBoeXNpY3NVdGlscyA9IEVkaXRvci5yZXF1aXJlKCdzY2VuZTovL3V0aWxzL3BoeXNpY3MnKTtcbiAgICAgICAgUGh5c2ljc1V0aWxzLnJlc2V0UG9pbnRzKHRoaXMsIHsgdGhyZXNob2xkOiB0aGlzLnRocmVzaG9sZCwgbG9vcDogdGhpcy5sb29wIH0pO1xuICAgIH1cbn0pO1xuXG5jYy5QaHlzaWNzQ2hhaW5Db2xsaWRlciA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc0NoYWluQ29sbGlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EVUdoNWMybGpjME5vWVdsdVEyOXNiR2xrWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUZSTlgxSkJWRWxQSWl3aWNtVnhkV2x5WlNJc0lsQm9lWE5wWTNORGFHRnBia052Ykd4cFpHVnlJaXdpWTJNaUxDSkRiR0Z6Y3lJc0ltNWhiV1VpTENKbGVIUmxibVJ6SWl3aVVHaDVjMmxqYzBOdmJHeHBaR1Z5SWl3aVpXUnBkRzl5SWl3aWJXVnVkU0lzSWtORFgwVkVTVlJQVWlJc0ltbHVjM0JsWTNSdmNpSXNJbkpsY1hWcGNtVkRiMjF3YjI1bGJuUWlMQ0pTYVdkcFpFSnZaSGtpTENKd2NtOXdaWEowYVdWeklpd2liRzl2Y0NJc0luQnZhVzUwY3lJc0ltUmxabUYxYkhRaUxDSjJNaUlzSW5SNWNHVWlMQ0pXWldNeUlpd2lkR2h5WlhOb2IyeGtJaXdpYzJWeWFXRnNhWHBoWW14bElpd2lkbWx6YVdKc1pTSXNJbDlqY21WaGRHVlRhR0Z3WlNJc0luTmpZV3hsSWl3aWMyaGhjR1VpTENKaU1pSXNJa05vWVdsdVUyaGhjR1VpTENKMlpYSjBhV05sY3lJc0lta2lMQ0pzWlc1bmRHZ2lMQ0p3SWl3aWNIVnphQ0lzSW5naUxDSjVJaXdpUTNKbFlYUmxURzl2Y0NJc0lrTnlaV0YwWlVOb1lXbHVJaXdpY21WelpYUkpia1ZrYVhSdmNpSXNJbkpsYzJWMFVHOXBiblJ6UW5sRGIyNTBiM1Z5SWl3aVVHaDVjMmxqYzFWMGFXeHpJaXdpUldScGRHOXlJaXdpY21WelpYUlFiMmx1ZEhNaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVEJDUVN4SlFVRkpRU3haUVVGWlF5eFJRVUZSTEcxQ1FVRlNMRVZCUVRaQ1JDeFRRVUUzUXpzN1FVRkZRVHM3T3p0QlFVbEJMRWxCUVVsRkxIVkNRVUYxUWtNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlEyaERReXhWUVVGTkxIbENRVVF3UWp0QlFVVm9RME1zWVVGQlUwZ3NSMEZCUjBrc1pVRkdiMEk3TzBGQlNXaERReXhaUVVGUk8wRkJRMHBETEdOQlFVMURMR0ZCUVdFc2FVUkJSR1k3UVVGRlNrTXNiVUpCUVZkRUxHRkJRV0VzZFVWQlJuQkNPMEZCUjBwRkxEQkNRVUZyUWxRc1IwRkJSMVU3UVVGSWFrSXNTMEZLZDBJN08wRkJWV2hEUXl4blFrRkJXVHRCUVVOU096czdPenM3UVVGTlFVTXNZMEZCVFN4TFFWQkZPenRCUVZOU096czdPenM3UVVGTlFVTXNaMEpCUVZFN1FVRkRTa01zY1VKQlFWTXNiMEpCUVZrN1FVRkRhRUlzZFVKQlFVOHNRMEZCUTJRc1IwRkJSMlVzUlVGQlNDeERRVUZOTEVOQlFVTXNSVUZCVUN4RlFVRlhMRU5CUVZnc1EwRkJSQ3hGUVVGblFtWXNSMEZCUjJVc1JVRkJTQ3hEUVVGTkxFVkJRVTRzUlVGQlZTeERRVUZXTEVOQlFXaENMRU5CUVZBN1FVRkRTaXhoUVVoSE8wRkJTVXBETEd0Q1FVRk5MRU5CUVVOb1FpeEhRVUZIYVVJc1NVRkJTanRCUVVwR0xGTkJaa0U3TzBGQmMwSlNReXh0UWtGQlZ6dEJRVU5RU2l4eFFrRkJVeXhEUVVSR08wRkJSVkJMTERCQ1FVRmpMRXRCUmxBN1FVRkhVRU1zY1VKQlFWTTdRVUZJUmp0QlFYUkNTQ3hMUVZadlFqczdRVUYxUTJoRFF5eHJRa0ZCWXl4elFrRkJWVU1zUzBGQlZpeEZRVUZwUWp0QlFVTXpRaXhaUVVGSlF5eFJRVUZSTEVsQlFVbERMRWRCUVVkRExGVkJRVkFzUlVGQldqczdRVUZGUVN4WlFVRkpXaXhUUVVGVExFdEJRVXRCTEUxQlFXeENPMEZCUTBFc1dVRkJTV0VzVjBGQlZ5eEZRVUZtTzBGQlEwRXNZVUZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsa0xFOUJRVTlsTEUxQlFUTkNMRVZCUVcxRFJDeEhRVUZ1UXl4RlFVRjNRenRCUVVOd1F5eG5Ra0ZCU1VVc1NVRkJTV2hDTEU5QlFVOWpMRU5CUVZBc1EwRkJVanRCUVVOQlJDeHhRa0ZCVTBrc1NVRkJWQ3hEUVVGbExFbEJRVWxPTEVkQlFVZFFMRWxCUVZBc1EwRkJXVmtzUlVGQlJVVXNRMEZCUml4SFFVRkpiRU1zVTBGQlNpeEhRVUZqZVVJc1RVRkJUVk1zUTBGQmFFTXNSVUZCYlVOR0xFVkJRVVZITEVOQlFVWXNSMEZCU1c1RExGTkJRVW9zUjBGQlkzbENMRTFCUVUxVkxFTkJRWFpFTEVOQlFXWTdRVUZEU0RzN1FVRkZSQ3haUVVGSkxFdEJRVXR3UWl4SlFVRlVMRVZCUVdVN1FVRkRXRmNzYTBKQlFVMVZMRlZCUVU0c1EwRkJhVUpRTEZGQlFXcENMRVZCUVRKQ1FTeFRRVUZUUlN4TlFVRndRenRCUVVOSUxGTkJSa1FzVFVGSFN6dEJRVU5FVEN4clFrRkJUVmNzVjBGQlRpeERRVUZyUWxJc1VVRkJiRUlzUlVGQk5FSkJMRk5CUVZORkxFMUJRWEpETzBGQlEwZzdRVUZEUkN4bFFVRlBUQ3hMUVVGUU8wRkJRMGdzUzBGNFJDdENPenRCUVRCRWFFTlpMRzFDUVVGbE5VSXNZVUZCWVN4WlFVRlpPMEZCUTNCRExHRkJRVXMyUWl4dlFrRkJURHRCUVVOSUxFdEJOVVFyUWpzN1FVRTRSR2hEUVN3d1FrRkJjMEkzUWl4aFFVRmhMRmxCUVZrN1FVRkRNME1zV1VGQlNUaENMR1ZCUVdWRExFOUJRVTk0UXl4UFFVRlFMRU5CUVdVc2RVSkJRV1lzUTBGQmJrSTdRVUZEUVhWRExIRkNRVUZoUlN4WFFVRmlMRU5CUVhsQ0xFbEJRWHBDTEVWQlFTdENMRVZCUVVOeVFpeFhRVUZYTEV0QlFVdEJMRk5CUVdwQ0xFVkJRVFJDVGl4TlFVRk5MRXRCUVV0QkxFbEJRWFpETEVWQlFTOUNPMEZCUTBnN1FVRnFSU3RDTEVOQlFWUXNRMEZCTTBJN08wRkJiMFZCV2l4SFFVRkhSQ3h2UWtGQlNDeEhRVUV3UW5sRExFOUJRVTlETEU5QlFWQXNSMEZCYVVJeFF5eHZRa0ZCTTBNaUxDSm1hV3hsSWpvaVEwTlFhSGx6YVdOelEyaGhhVzVEYjJ4c2FXUmxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFekxUSXdNVFlnUTJoMWEyOXVaeUJVWldOb2JtOXNiMmRwWlhNZ1NXNWpMbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJQ0IzYjNKc1pIZHBaR1VzSUhKdmVXRnNkSGt0Wm5KbFpTd2dibTl1TFdGemMybG5ibUZpYkdVc0lISmxkbTlqWVdKc1pTQmhibVFnYm05dUxXVjRZMngxYzJsMlpTQnNhV05sYm5ObFhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNiaUFnYm05MElIVnpaU0JEYjJOdmN5QkRjbVZoZEc5eUlITnZablIzWVhKbElHWnZjaUJrWlhabGJHOXdhVzVuSUc5MGFHVnlJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJSFJvWVhRbmMxeHVJQ0IxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYRzRnSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHVYRzRnVkdobElITnZablIzWVhKbElHOXlJSFJ2YjJ4eklHbHVJSFJvYVhNZ1RHbGpaVzV6WlNCQlozSmxaVzFsYm5RZ1lYSmxJR3hwWTJWdWMyVmtMQ0J1YjNRZ2MyOXNaQzVjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4dVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dUlFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWWdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxGeHVJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPSUU1UElFVldSVTVVSUZOSVFVeE1JRlJJUlZ4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNiaUJVU0VVZ1UwOUdWRmRCVWtVdVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2JseHVkbUZ5SUZCVVRWOVNRVlJKVHlBOUlISmxjWFZwY21Vb0p5NHVMME5EVUdoNWMybGpjMVI1Y0dWekp5a3VVRlJOWDFKQlZFbFBPMXh1WEc0dktpcGNiaUFxSUVCamJHRnpjeUJRYUhsemFXTnpRMmhoYVc1RGIyeHNhV1JsY2x4dUlDb2dRR1Y0ZEdWdVpITWdVRzlzZVdkdmJrTnZiR3hwWkdWeVhHNGdLaTljYm5aaGNpQlFhSGx6YVdOelEyaGhhVzVEYjJ4c2FXUmxjaUE5SUdOakxrTnNZWE56S0h0Y2JpQWdJQ0J1WVcxbE9pQW5ZMk11VUdoNWMybGpjME5vWVdsdVEyOXNiR2xrWlhJbkxGeHVJQ0FnSUdWNGRHVnVaSE02SUdOakxsQm9lWE5wWTNORGIyeHNhV1JsY2l4Y2JseHVJQ0FnSUdWa2FYUnZjam9nZTF4dUlDQWdJQ0FnSUNCdFpXNTFPaUJEUTE5RlJFbFVUMUlnSmlZZ0oya3hPRzQ2VFVGSlRsOU5SVTVWTG1OdmJYQnZibVZ1ZEM1d2FIbHphV056TDBOdmJHeHBaR1Z5TDBOb1lXbHVKeXhjYmlBZ0lDQWdJQ0FnYVc1emNHVmpkRzl5T2lCRFExOUZSRWxVVDFJZ0ppWWdKM0JoWTJ0aFoyVnpPaTh2YVc1emNHVmpkRzl5TDJsdWMzQmxZM1J2Y25NdlkyOXRjSE12Y0doNWMybGpjeTl3YjJsdWRITXRZbUZ6WlMxamIyeHNhV1JsY2k1cWN5Y3NYRzRnSUNBZ0lDQWdJSEpsY1hWcGNtVkRiMjF3YjI1bGJuUTZJR05qTGxKcFoybGtRbTlrZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J3Y205d1pYSjBhV1Z6T2lCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lBaEkyVnVJRmRvWlhSb1pYSWdkR2hsSUdOb1lXbHVJR2x6SUd4dmIzQmNiaUFnSUNBZ0lDQWdJQ29nSVNONmFDRHBrNzdtbmFIbW1LL2xrS2JwcHBibHNMN25tN2pvdjU1Y2JpQWdJQ0FnSUNBZ0lDb2dRSEJ5YjNCbGNuUjVJR3h2YjNCY2JpQWdJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwSnZiMnhsWVc1OVhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JzYjI5d09pQm1ZV3h6WlN4Y2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ0lTTmxiaUJEYUdGcGJpQndiMmx1ZEhOY2JpQWdJQ0FnSUNBZ0lDb2dJU042YUNEcGs3N21uYUhwb2Jibmdybm1sYkRudTRSY2JpQWdJQ0FnSUNBZ0lDb2dRSEJ5YjNCbGNuUjVJSEJ2YVc1MGMxeHVJQ0FnSUNBZ0lDQWdLaUJBZEhsd1pTQjdWbVZqTWx0ZGZWeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY0c5cGJuUnpPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJiWTJNdWRqSW9MVFV3TENBd0tTd2dZMk11ZGpJb05UQXNJREFwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCYlkyTXVWbVZqTWwxY2JpQWdJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdJQ0IwYUhKbGMyaHZiR1E2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWEpwWVd4cGVtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtbHphV0pzWlRvZ1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWDJOeVpXRjBaVk5vWVhCbE9pQm1kVzVqZEdsdmJpQW9jMk5oYkdVcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhOb1lYQmxJRDBnYm1WM0lHSXlMa05vWVdsdVUyaGhjR1VvS1R0Y2JseHVJQ0FnSUNBZ0lDQjJZWElnY0c5cGJuUnpJRDBnZEdocGN5NXdiMmx1ZEhNN1hHNGdJQ0FnSUNBZ0lIWmhjaUIyWlhKMGFXTmxjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSEJ2YVc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhBZ1BTQndiMmx1ZEhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpYSjBhV05sY3k1d2RYTm9LQ0J1WlhjZ1lqSXVWbVZqTWlod0xuZ3ZVRlJOWDFKQlZFbFBLbk5qWVd4bExuZ3NJSEF1ZVM5UVZFMWZVa0ZVU1U4cWMyTmhiR1V1ZVNrZ0tUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG14dmIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITm9ZWEJsTGtOeVpXRjBaVXh2YjNBb2RtVnlkR2xqWlhNc0lIWmxjblJwWTJWekxteGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YUdGd1pTNURjbVZoZEdWRGFHRnBiaWgyWlhKMGFXTmxjeXdnZG1WeWRHbGpaWE11YkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJoaGNHVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lISmxjMlYwU1c1RlpHbDBiM0k2SUVORFgwVkVTVlJQVWlBbUppQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbVZ6WlhSUWIybHVkSE5DZVVOdmJuUnZkWElvS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY21WelpYUlFiMmx1ZEhOQ2VVTnZiblJ2ZFhJNklFTkRYMFZFU1ZSUFVpQW1KaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJRYUhsemFXTnpWWFJwYkhNZ1BTQkZaR2wwYjNJdWNtVnhkV2x5WlNnbmMyTmxibVU2THk5MWRHbHNjeTl3YUhsemFXTnpKeWs3WEc0Z0lDQWdJQ0FnSUZCb2VYTnBZM05WZEdsc2N5NXlaWE5sZEZCdmFXNTBjeWgwYUdsekxDQjdkR2h5WlhOb2IyeGtPaUIwYUdsekxuUm9jbVZ6YUc5c1pDd2diRzl2Y0RvZ2RHaHBjeTVzYjI5d2ZTazdYRzRnSUNBZ2ZWeHVmU2s3WEc1Y2JtTmpMbEJvZVhOcFkzTkRhR0ZwYmtOdmJHeHBaR1Z5SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCUWFIbHphV056UTJoaGFXNURiMnhzYVdSbGNqdGNiaUpkZlE9PSJdfQ==