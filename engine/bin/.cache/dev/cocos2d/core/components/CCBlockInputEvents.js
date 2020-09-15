(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCBlockInputEvents.js';
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
        var BlockEvents = [
            'touchstart',
            'touchmove',
            'touchend',
            'mousedown',
            'mousemove',
            'mouseup',
            'mouseenter',
            'mouseleave',
            'mousewheel'
        ];
        function stopPropagation(event) {
            event.stopPropagation();
        }
        var BlockInputEvents = cc.Class({
            name: 'cc.BlockInputEvents',
            extends: require('./CCComponent'),
            editor: {
                menu: 'i18n:MAIN_MENU.component.ui/Block Input Events',
                inspector: 'packages://inspector/inspectors/comps/block-input-events.js',
                help: 'i18n:COMPONENT.help_url.block_input_events'
            },
            onEnable: function onEnable() {
                for (var i = 0; i < BlockEvents.length; i++) {
                    this.node.on(BlockEvents[i], stopPropagation, this);
                }
            },
            onDisable: function onDisable() {
                for (var i = 0; i < BlockEvents.length; i++) {
                    this.node.off(BlockEvents[i], stopPropagation, this);
                }
            }
        });
        cc.BlockInputEvents = module.exports = BlockInputEvents;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQmxvY2tJbnB1dEV2ZW50cy5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvY29tcG9uZW50cy9DQ0Jsb2NrSW5wdXRFdmVudHMuanMiXSwibmFtZXMiOlsiQmxvY2tFdmVudHMiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsIkJsb2NrSW5wdXRFdmVudHMiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJyZXF1aXJlIiwiZWRpdG9yIiwibWVudSIsImluc3BlY3RvciIsImhlbHAiLCJvbkVuYWJsZSIsImkiLCJsZW5ndGgiLCJub2RlIiwib24iLCJvbkRpc2FibGUiLCJvZmYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUEwQkEsSUFBTUEsV0FBQUEsR0FBYztBQUFBLFlBQUMsWUFBRDtBQUFBLFlBQWUsV0FBZjtBQUFBLFlBQTRCLFVBQTVCO0FBQUEsWUFDQyxXQUREO0FBQUEsWUFDYyxXQURkO0FBQUEsWUFDMkIsU0FEM0I7QUFBQSxZQUVDLFlBRkQ7QUFBQSxZQUVlLFlBRmY7QUFBQSxZQUU2QixZQUY3QjtBQUFBLFNBQXBCO1FBSUEsU0FBU0MsZUFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFBQSxZQUM3QkEsS0FBQUEsQ0FBTUQsZUFBTkMsR0FENkI7QUFBQTtRQWVqQyxJQUFNQyxnQkFBQUEsR0FBbUJDLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUM5QkUsSUFBQUEsRUFBTSxxQkFEd0I7QUFBQSxZQUU5QkMsT0FBQUEsRUFBU0MsT0FBQUEsQ0FBUSxlQUFSQSxDQUZxQjtBQUFBLFlBRzlCQyxNQUFBQSxFQUFRO0FBQUEsZ0JBQ0pDLElBQUFBLEVBQU0sZ0RBREY7QUFBQSxnQkFFSkMsU0FBQUEsRUFBVyw2REFGUDtBQUFBLGdCQUdKQyxJQUFBQSxFQUFNLDRDQUhGO0FBQUEsYUFIc0I7QUFBQSxZQVM5QkMsUUFBQUEsRUFUOEIsU0FBQSxRQUFBLEdBU2xCO0FBQUEsZ0JBQ1IsS0FBSyxJQUFJQyxDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSWQsV0FBQUEsQ0FBWWUsTUFBaEMsRUFBd0NELENBQUFBLEVBQXhDLEVBQTZDO0FBQUEsb0JBR3pDLEtBQUtFLElBQUwsQ0FBVUMsRUFBVixDQUFhakIsV0FBQUEsQ0FBWWMsQ0FBWmQsQ0FBYixFQUE2QkMsZUFBN0IsRUFBOEMsSUFBOUMsRUFIeUM7QUFBQSxpQkFEckM7QUFBQSxhQVRrQjtBQUFBLFlBZ0I5QmlCLFNBQUFBLEVBaEI4QixTQUFBLFNBQUEsR0FnQmpCO0FBQUEsZ0JBQ1QsS0FBSyxJQUFJSixDQUFBQSxHQUFJLENBQVIsQ0FBTCxDQUFnQkEsQ0FBQUEsR0FBSWQsV0FBQUEsQ0FBWWUsTUFBaEMsRUFBd0NELENBQUFBLEVBQXhDLEVBQTZDO0FBQUEsb0JBQ3pDLEtBQUtFLElBQUwsQ0FBVUcsR0FBVixDQUFjbkIsV0FBQUEsQ0FBWWMsQ0FBWmQsQ0FBZCxFQUE4QkMsZUFBOUIsRUFBK0MsSUFBL0MsRUFEeUM7QUFBQSxpQkFEcEM7QUFBQSxhQWhCaUI7QUFBQSxTQUFURyxDQUF6QjtRQXVCQUEsRUFBQUEsQ0FBR0QsZ0JBQUhDLEdBQXNCZ0IsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJqQixnQkFBdkNDIiwiZmlsZSI6IkNDQmxvY2tJbnB1dEV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgQmxvY2tFdmVudHMgPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLFxuICAgICAgICAgICAgICAgICAgICAgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsICdtb3VzZXdoZWVsJ107XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuLyoqXG4gKiAhI2VuXG4gKiBUaGlzIGNvbXBvbmVudCB3aWxsIGJsb2NrIGFsbCBpbnB1dCBldmVudHMgKG1vdXNlIGFuZCB0b3VjaCkgd2l0aGluIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIG5vZGUsIHByZXZlbnRpbmcgdGhlIGlucHV0IGZyb20gcGVuZXRyYXRpbmcgaW50byB0aGUgdW5kZXJseWluZyBub2RlLCB0eXBpY2FsbHkgZm9yIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB0b3AgVUkuPGJyPlxuICogVGhpcyBjb21wb25lbnQgZG9lcyBub3QgaGF2ZSBhbnkgQVBJIGludGVyZmFjZSBhbmQgY2FuIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBzY2VuZSB0byB0YWtlIGVmZmVjdC5cbiAqICEjemhcbiAqIOivpee7hOS7tuWwhuaLpuaIquaJgOWxnuiKgueCuSBib3VuZGluZyBib3gg5YaF55qE5omA5pyJ6L6T5YWl5LqL5Lu277yI6byg5qCH5ZKM6Kem5pG477yJ77yM6Ziy5q2i6L6T5YWl56m/6YCP5Yiw5LiL5bGC6IqC54K577yM5LiA6Iis55So5LqO5LiK5bGCIFVJIOeahOiDjOaZr+OAgjxicj5cbiAqIOivpee7hOS7tuayoeacieS7u+S9lSBBUEkg5o6l5Y+j77yM55u05o6l5re75Yqg5Yiw5Zy65pmv5Y2z5Y+v55Sf5pWI44CCXG4gKlxuICogQGNsYXNzIEJsb2NrSW5wdXRFdmVudHNcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jb25zdCBCbG9ja0lucHV0RXZlbnRzID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5CbG9ja0lucHV0RXZlbnRzJyxcbiAgICBleHRlbmRzOiByZXF1aXJlKCcuL0NDQ29tcG9uZW50JyksXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQudWkvQmxvY2sgSW5wdXQgRXZlbnRzJyxcbiAgICAgICAgaW5zcGVjdG9yOiAncGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9ibG9jay1pbnB1dC1ldmVudHMuanMnLFxuICAgICAgICBoZWxwOiAnaTE4bjpDT01QT05FTlQuaGVscF91cmwuYmxvY2tfaW5wdXRfZXZlbnRzJyxcbiAgICB9LFxuXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJsb2NrRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBzdXBwbHkgdGhlICd0aGlzJyBwYXJhbWV0ZXIgc28gdGhhdCB0aGUgY2FsbGJhY2sgY291bGQgYmUgYWRkZWQgYW5kIHJlbW92ZWQgY29ycmVjdGx5LFxuICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGUgc2FtZSBjb21wb25lbnQgaXMgYWRkZWQgbW9yZSB0aGFuIG9uY2UgdG8gYSBOb2RlLlxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKEJsb2NrRXZlbnRzW2ldLCBzdG9wUHJvcGFnYXRpb24sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkRpc2FibGUgKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJsb2NrRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub2ZmKEJsb2NrRXZlbnRzW2ldLCBzdG9wUHJvcGFnYXRpb24sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLkJsb2NrSW5wdXRFdmVudHMgPSBtb2R1bGUuZXhwb3J0cyA9IEJsb2NrSW5wdXRFdmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIEJsb2NrRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJywgJ21vdXNld2hlZWwnXTtcblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbi8qKlxuICogISNlblxuICogVGhpcyBjb21wb25lbnQgd2lsbCBibG9jayBhbGwgaW5wdXQgZXZlbnRzIChtb3VzZSBhbmQgdG91Y2gpIHdpdGhpbiB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBub2RlLCBwcmV2ZW50aW5nIHRoZSBpbnB1dCBmcm9tIHBlbmV0cmF0aW5nIGludG8gdGhlIHVuZGVybHlpbmcgbm9kZSwgdHlwaWNhbGx5IGZvciB0aGUgYmFja2dyb3VuZCBvZiB0aGUgdG9wIFVJLjxicj5cbiAqIFRoaXMgY29tcG9uZW50IGRvZXMgbm90IGhhdmUgYW55IEFQSSBpbnRlcmZhY2UgYW5kIGNhbiBiZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgc2NlbmUgdG8gdGFrZSBlZmZlY3QuXG4gKiAhI3poXG4gKiDor6Xnu4Tku7blsIbmi6bmiKrmiYDlsZ7oioLngrkgYm91bmRpbmcgYm94IOWGheeahOaJgOaciei+k+WFpeS6i+S7tu+8iOm8oOagh+WSjOinpuaRuO+8ie+8jOmYsuatoui+k+WFpeepv+mAj+WIsOS4i+WxguiKgueCue+8jOS4gOiIrOeUqOS6juS4iuWxgiBVSSDnmoTog4zmma/jgII8YnI+XG4gKiDor6Xnu4Tku7bmsqHmnInku7vkvZUgQVBJIOaOpeWPo++8jOebtOaOpea3u+WKoOWIsOWcuuaZr+WNs+WPr+eUn+aViOOAglxuICpcbiAqIEBjbGFzcyBCbG9ja0lucHV0RXZlbnRzXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xudmFyIEJsb2NrSW5wdXRFdmVudHMgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLkJsb2NrSW5wdXRFdmVudHMnLFxuICAgIGV4dGVuZHM6IHJlcXVpcmUoJy4vQ0NDb21wb25lbnQnKSxcbiAgICBlZGl0b3I6IHtcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC51aS9CbG9jayBJbnB1dCBFdmVudHMnLFxuICAgICAgICBpbnNwZWN0b3I6ICdwYWNrYWdlczovL2luc3BlY3Rvci9pbnNwZWN0b3JzL2NvbXBzL2Jsb2NrLWlucHV0LWV2ZW50cy5qcycsXG4gICAgICAgIGhlbHA6ICdpMThuOkNPTVBPTkVOVC5oZWxwX3VybC5ibG9ja19pbnB1dF9ldmVudHMnXG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBCbG9ja0V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc3VwcGx5IHRoZSAndGhpcycgcGFyYW1ldGVyIHNvIHRoYXQgdGhlIGNhbGxiYWNrIGNvdWxkIGJlIGFkZGVkIGFuZCByZW1vdmVkIGNvcnJlY3RseSxcbiAgICAgICAgICAgIC8vIGV2ZW4gaWYgdGhlIHNhbWUgY29tcG9uZW50IGlzIGFkZGVkIG1vcmUgdGhhbiBvbmNlIHRvIGEgTm9kZS5cbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihCbG9ja0V2ZW50c1tpXSwgc3RvcFByb3BhZ2F0aW9uLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQmxvY2tFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoQmxvY2tFdmVudHNbaV0sIHN0b3BQcm9wYWdhdGlvbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuQmxvY2tJbnB1dEV2ZW50cyA9IG1vZHVsZS5leHBvcnRzID0gQmxvY2tJbnB1dEV2ZW50cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRRbXh2WTJ0SmJuQjFkRVYyWlc1MGN5NXFjeUpkTENKdVlXMWxjeUk2V3lKQ2JHOWphMFYyWlc1MGN5SXNJbk4wYjNCUWNtOXdZV2RoZEdsdmJpSXNJbVYyWlc1MElpd2lRbXh2WTJ0SmJuQjFkRVYyWlc1MGN5SXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSW5KbGNYVnBjbVVpTENKbFpHbDBiM0lpTENKdFpXNTFJaXdpYVc1emNHVmpkRzl5SWl3aWFHVnNjQ0lzSW05dVJXNWhZbXhsSWl3aWFTSXNJbXhsYm1kMGFDSXNJbTV2WkdVaUxDSnZiaUlzSW05dVJHbHpZV0pzWlNJc0ltOW1aaUlzSW0xdlpIVnNaU0lzSW1WNGNHOXlkSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk1FSkJMRWxCUVUxQkxHTkJRV01zUTBGQlF5eFpRVUZFTEVWQlFXVXNWMEZCWml4RlFVRTBRaXhWUVVFMVFpeEZRVU5ETEZkQlJFUXNSVUZEWXl4WFFVUmtMRVZCUXpKQ0xGTkJSRE5DTEVWQlJVTXNXVUZHUkN4RlFVVmxMRmxCUm1Zc1JVRkZOa0lzV1VGR04wSXNRMEZCY0VJN08wRkJTVUVzVTBGQlUwTXNaVUZCVkN4RFFVRXdRa01zUzBGQk1VSXNSVUZCYVVNN1FVRkROMEpCTEZWQlFVMUVMR1ZCUVU0N1FVRkRTRHM3UVVGRlJEczdPenM3T3pzN096czdRVUZYUVN4SlFVRk5SU3h0UWtGQmJVSkRMRWRCUVVkRExFdEJRVWdzUTBGQlV6dEJRVU01UWtNc1ZVRkJUU3h4UWtGRWQwSTdRVUZGT1VKRExHRkJRVk5ETEZGQlFWRXNaVUZCVWl4RFFVWnhRanRCUVVjNVFrTXNXVUZCVVR0QlFVTktReXhqUVVGTkxHZEVRVVJHTzBGQlJVcERMRzFDUVVGWExEWkVRVVpRTzBGQlIwcERMR05CUVUwN1FVRklSaXhMUVVoelFqczdRVUZUT1VKRExGbEJWRGhDTEhOQ1FWTnNRanRCUVVOU0xHRkJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKWkN4WlFVRlpaU3hOUVVGb1F5eEZRVUYzUTBRc1IwRkJlRU1zUlVGQk5rTTdRVUZEZWtNN1FVRkRRVHRCUVVOQkxHbENRVUZMUlN4SlFVRk1MRU5CUVZWRExFVkJRVllzUTBGQllXcENMRmxCUVZsakxFTkJRVm9zUTBGQllpeEZRVUUyUW1Jc1pVRkJOMElzUlVGQk9FTXNTVUZCT1VNN1FVRkRTRHRCUVVOS0xFdEJaalpDTzBGQlowSTVRbWxDTEdGQmFFSTRRaXgxUWtGblFtcENPMEZCUTFRc1lVRkJTeXhKUVVGSlNpeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxrTEZsQlFWbGxMRTFCUVdoRExFVkJRWGREUkN4SFFVRjRReXhGUVVFMlF6dEJRVU42UXl4cFFrRkJTMFVzU1VGQlRDeERRVUZWUnl4SFFVRldMRU5CUVdOdVFpeFpRVUZaWXl4RFFVRmFMRU5CUVdRc1JVRkJPRUppTEdWQlFUbENMRVZCUVN0RExFbEJRUzlETzBGQlEwZzdRVUZEU2p0QlFYQkNOa0lzUTBGQlZDeERRVUY2UWpzN1FVRjFRa0ZITEVkQlFVZEVMR2RDUVVGSUxFZEJRWE5DYVVJc1QwRkJUME1zVDBGQlVDeEhRVUZwUW14Q0xHZENRVUYyUXlJc0ltWnBiR1VpT2lKRFEwSnNiMk5yU1c1d2RYUkZkbVZ1ZEhNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhNeTB5TURFMklFTm9kV3R2Ym1jZ1ZHVmphRzV2Ykc5bmFXVnpJRWx1WXk1Y2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UY3RNakF4T0NCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNWNibHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNibHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNiaUJ2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHVnVaMmx1WlNCemIzVnlZMlVnWTI5a1pTQW9kR2hsSUZ3aVUyOW1kSGRoY21WY0lpa3NJR0VnYkdsdGFYUmxaQ3hjYmlBZ2QyOXliR1IzYVdSbExDQnliM2xoYkhSNUxXWnlaV1VzSUc1dmJpMWhjM05wWjI1aFlteGxMQ0J5WlhadlkyRmliR1VnWVc1a0lHNXZiaTFsZUdOc2RYTnBkbVVnYkdsalpXNXpaVnh1SUhSdklIVnpaU0JEYjJOdmN5QkRjbVZoZEc5eUlITnZiR1ZzZVNCMGJ5QmtaWFpsYkc5d0lHZGhiV1Z6SUc5dUlIbHZkWElnZEdGeVoyVjBJSEJzWVhSbWIzSnRjeTRnV1c5MUlITm9ZV3hzWEc0Z0lHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jYmlBZ2RYTmxaQ0JtYjNJZ1pHVjJaV3h2Y0dsdVp5Qm5ZVzFsY3k0Z1dXOTFJR0Z5WlNCdWIzUWdaM0poYm5SbFpDQjBieUJ3ZFdKc2FYTm9MQ0JrYVhOMGNtbGlkWFJsTEZ4dUlDQnpkV0pzYVdObGJuTmxMQ0JoYm1RdmIzSWdjMlZzYkNCamIzQnBaWE1nYjJZZ1EyOWpiM01nUTNKbFlYUnZjaTVjYmx4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNibHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNiaUJCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MQ0JFUVUxQlIwVlRJRTlTSUU5VVNFVlNYRzRnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYRzVjYm1OdmJuTjBJRUpzYjJOclJYWmxiblJ6SUQwZ1d5ZDBiM1ZqYUhOMFlYSjBKeXdnSjNSdmRXTm9iVzkyWlNjc0lDZDBiM1ZqYUdWdVpDY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbmJXOTFjMlZrYjNkdUp5d2dKMjF2ZFhObGJXOTJaU2NzSUNkdGIzVnpaWFZ3Snl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2R0YjNWelpXVnVkR1Z5Snl3Z0oyMXZkWE5sYkdWaGRtVW5MQ0FuYlc5MWMyVjNhR1ZsYkNkZE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEc5d1VISnZjR0ZuWVhScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ1pYWmxiblF1YzNSdmNGQnliM0JoWjJGMGFXOXVLQ2s3WEc1OVhHNWNiaThxS2x4dUlDb2dJU05sYmx4dUlDb2dWR2hwY3lCamIyMXdiMjVsYm5RZ2QybHNiQ0JpYkc5amF5QmhiR3dnYVc1d2RYUWdaWFpsYm5SeklDaHRiM1Z6WlNCaGJtUWdkRzkxWTJncElIZHBkR2hwYmlCMGFHVWdZbTkxYm1ScGJtY2dZbTk0SUc5bUlIUm9aU0J1YjJSbExDQndjbVYyWlc1MGFXNW5JSFJvWlNCcGJuQjFkQ0JtY205dElIQmxibVYwY21GMGFXNW5JR2x1ZEc4Z2RHaGxJSFZ1WkdWeWJIbHBibWNnYm05a1pTd2dkSGx3YVdOaGJHeDVJR1p2Y2lCMGFHVWdZbUZqYTJkeWIzVnVaQ0J2WmlCMGFHVWdkRzl3SUZWSkxqeGljajVjYmlBcUlGUm9hWE1nWTI5dGNHOXVaVzUwSUdSdlpYTWdibTkwSUdoaGRtVWdZVzU1SUVGUVNTQnBiblJsY21aaFkyVWdZVzVrSUdOaGJpQmlaU0JoWkdSbFpDQmthWEpsWTNSc2VTQjBieUIwYUdVZ2MyTmxibVVnZEc4Z2RHRnJaU0JsWm1abFkzUXVYRzRnS2lBaEkzcG9YRzRnS2lEb3I2WG51NFRrdTdibHNJYm1pNmJtaUtybWlZRGxzWjdvaW9Mbmdya2dZbTkxYm1ScGJtY2dZbTk0SU9XR2hlZWFoT2FKZ09hY2llaStrK1dGcGVTNmkrUzd0dSs4aU9tOG9PYWdoK1dTak9pbnB1YVJ1Tys4aWUrOGpPbVlzdWF0b3VpK2srV0ZwZWVwdittQWorV0lzT1M0aStXeGd1aUtndWVDdWUrOGpPUzRnT2lJck9lVXFPUzZqdVM0aXVXeGdpQlZTU0RubW9Ub2c0em1tYS9qZ0lJOFluSStYRzRnS2lEb3I2WG51NFRrdTdibXNxSG1uSW5rdTd2a3ZaVWdRVkJKSU9hT3BlV1BvKys4ak9lYnRPYU9wZWEzdStXS29PV0lzT1djdXVhWnIrV05zK1dQcitlVW4rYVZpT09BZ2x4dUlDcGNiaUFxSUVCamJHRnpjeUJDYkc5amEwbHVjSFYwUlhabGJuUnpYRzRnS2lCQVpYaDBaVzVrY3lCRGIyMXdiMjVsYm5SY2JpQXFMMXh1WTI5dWMzUWdRbXh2WTJ0SmJuQjFkRVYyWlc1MGN5QTlJR05qTGtOc1lYTnpLSHRjYmlBZ0lDQnVZVzFsT2lBblkyTXVRbXh2WTJ0SmJuQjFkRVYyWlc1MGN5Y3NYRzRnSUNBZ1pYaDBaVzVrY3pvZ2NtVnhkV2x5WlNnbkxpOURRME52YlhCdmJtVnVkQ2NwTEZ4dUlDQWdJR1ZrYVhSdmNqb2dlMXh1SUNBZ0lDQWdJQ0J0Wlc1MU9pQW5hVEU0YmpwTlFVbE9YMDFGVGxVdVkyOXRjRzl1Wlc1MExuVnBMMEpzYjJOcklFbHVjSFYwSUVWMlpXNTBjeWNzWEc0Z0lDQWdJQ0FnSUdsdWMzQmxZM1J2Y2pvZ0ozQmhZMnRoWjJWek9pOHZhVzV6Y0dWamRHOXlMMmx1YzNCbFkzUnZjbk12WTI5dGNITXZZbXh2WTJzdGFXNXdkWFF0WlhabGJuUnpMbXB6Snl4Y2JpQWdJQ0FnSUNBZ2FHVnNjRG9nSjJreE9HNDZRMDlOVUU5T1JVNVVMbWhsYkhCZmRYSnNMbUpzYjJOclgybHVjSFYwWDJWMlpXNTBjeWNzWEc0Z0lDQWdmU3hjYmx4dUlDQWdJRzl1Ulc1aFlteGxJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQkNiRzlqYTBWMlpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MzVndjR3g1SUhSb1pTQW5kR2hwY3ljZ2NHRnlZVzFsZEdWeUlITnZJSFJvWVhRZ2RHaGxJR05oYkd4aVlXTnJJR052ZFd4a0lHSmxJR0ZrWkdWa0lHRnVaQ0J5WlcxdmRtVmtJR052Y25KbFkzUnNlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR1YyWlc0Z2FXWWdkR2hsSUhOaGJXVWdZMjl0Y0c5dVpXNTBJR2x6SUdGa1pHVmtJRzF2Y21VZ2RHaGhiaUJ2Ym1ObElIUnZJR0VnVG05a1pTNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVibTlrWlM1dmJpaENiRzlqYTBWMlpXNTBjMXRwWFN3Z2MzUnZjRkJ5YjNCaFoyRjBhVzl1TENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc0Z0lDQWdiMjVFYVhOaFlteGxJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQkNiRzlqYTBWMlpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXViMlJsTG05bVppaENiRzlqYTBWMlpXNTBjMXRwWFN3Z2MzUnZjRkJ5YjNCaFoyRjBhVzl1TENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wcE8xeHVYRzVqWXk1Q2JHOWphMGx1Y0hWMFJYWmxiblJ6SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCQ2JHOWphMGx1Y0hWMFJYWmxiblJ6TzF4dUlsMTkiXX0=