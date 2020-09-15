(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/tilemap/CCTiledTile.js';
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
        var TiledTile = cc.Class({
            name: 'cc.TiledTile',
            extends: cc.Component,
            editor: CC_EDITOR && {
                executeInEditMode: true,
                menu: 'i18n:MAIN_MENU.component.renderers/TiledTile'
            },
            ctor: function ctor() {
                this._layer = null;
            },
            properties: {
                _x: 0,
                _y: 0,
                x: {
                    get: function get() {
                        return this._x;
                    },
                    set: function set(value) {
                        if (value === this._x)
                            return;
                        if (this._layer && this._layer._isInvalidPosition(value, this._y)) {
                            cc.warn('Invalid x, the valid value is between [%s] ~ [%s]', 0, this._layer._layerSize.width);
                            return;
                        }
                        this._resetTile();
                        this._x = value;
                        this._updateInfo();
                    },
                    type: cc.Integer
                },
                y: {
                    get: function get() {
                        return this._y;
                    },
                    set: function set(value) {
                        if (value === this._y)
                            return;
                        if (this._layer && this._layer._isInvalidPosition(this._x, value)) {
                            cc.warn('Invalid y, the valid value is between [%s] ~ [%s]', 0, this._layer._layerSize.height);
                            return;
                        }
                        this._resetTile();
                        this._y = value;
                        this._updateInfo();
                    },
                    type: cc.Integer
                },
                gid: {
                    get: function get() {
                        if (this._layer) {
                            return this._layer.getTileGIDAt(this._x, this._y);
                        }
                        return 0;
                    },
                    set: function set(value) {
                        if (this._layer) {
                            this._layer.setTileGIDAt(value, this._x, this._y);
                        }
                    },
                    type: cc.Integer
                }
            },
            onEnable: function onEnable() {
                var parent = this.node.parent;
                this._layer = parent.getComponent(cc.TiledLayer);
                this._resetTile();
                this._updateInfo();
            },
            onDisable: function onDisable() {
                this._resetTile();
            },
            _resetTile: function _resetTile() {
                if (this._layer && this._layer.getTiledTileAt(this._x, this._y) === this) {
                    this._layer.setTiledTileAt(this._x, this._y, null);
                }
            },
            _updateInfo: function _updateInfo() {
                if (!this._layer)
                    return;
                var x = this._x, y = this._y;
                if (this._layer.getTiledTileAt(x, y)) {
                    cc.warn('There is already a TiledTile at [%s, %s]', x, y);
                    return;
                }
                this.node.setPosition(this._layer.getPositionAt(x, y));
                this._layer.setTiledTileAt(x, y, this);
            }
        });
        cc.TiledTile = module.exports = TiledTile;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVGlsZWRUaWxlLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvdGlsZW1hcC9DQ1RpbGVkVGlsZS5qcyJdLCJuYW1lcyI6WyJUaWxlZFRpbGUiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJleGVjdXRlSW5FZGl0TW9kZSIsIm1lbnUiLCJjdG9yIiwiX2xheWVyIiwicHJvcGVydGllcyIsIl94IiwiX3kiLCJ4IiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJfaXNJbnZhbGlkUG9zaXRpb24iLCJ3YXJuIiwiX2xheWVyU2l6ZSIsIndpZHRoIiwiX3Jlc2V0VGlsZSIsIl91cGRhdGVJbmZvIiwidHlwZSIsIkludGVnZXIiLCJ5IiwiaGVpZ2h0IiwiZ2lkIiwiZ2V0VGlsZUdJREF0Iiwic2V0VGlsZUdJREF0Iiwib25FbmFibGUiLCJwYXJlbnQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiVGlsZWRMYXllciIsIm9uRGlzYWJsZSIsImdldFRpbGVkVGlsZUF0Iiwic2V0VGlsZWRUaWxlQXQiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uQXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFtQ0EsSUFBSUEsU0FBQUEsR0FBWUMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3JCRSxJQUFBQSxFQUFNLGNBRGU7QUFBQSxZQUVyQkMsT0FBQUEsRUFBU0gsRUFBQUEsQ0FBR0ksU0FGUztBQUFBLFlBSXJCQyxNQUFBQSxFQUFRQyxTQUFBQSxJQUFhO0FBQUEsZ0JBQ2pCQyxpQkFBQUEsRUFBbUIsSUFERjtBQUFBLGdCQUVqQkMsSUFBQUEsRUFBTSw4Q0FGVztB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QUFzQztBQUFBLG9CQUNsQzFCLEVBQUFBLENBQUdtQixJQUFIbkIsQ0FBUSwwQ0FBUkEsRUFBb0RjLENBQXBEZCxFQUF1RDBCLENBQXZEMUIsRUFEa0M7QUFBQSxvQkFFbEMsT0FGa0M7QUFBQSxpQkFKM0I7QUFBQSxnQkFRWCxLQUFLaUMsSUFBTCxDQUFVTSxXQUFWLENBQXNCLEtBQUs3QixNQUFMLENBQVk4QixhQUFaLENBQTBCMUIsQ0FBMUIsRUFBNkJZLENBQTdCLENBQXRCLEVBUlc7QUFBQSxnQkFTWCxLQUFLaEIsTUFBTCxDQUFZNEIsY0FBWixDQUEyQnhCLENBQTNCLEVBQThCWSxDQUE5QixFQUFpQyxJQUFqQyxFQVRXO0FBQUEsYUF0R007QUFBQSxTQUFUMUIsQ0FBaEI7UUFtSEFBLEVBQUFBLENBQUdELFNBQUhDLEdBQWV5QyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQjFDLFNBQWhDQyIsImZpbGUiOiJDQ1RpbGVkVGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqICEjZW4gVGlsZWRUaWxlIGNhbiBjb250cm9sIHRoZSBzcGVjaWZpZWQgbWFwIHRpbGUuIFxuICogSXQgd2lsbCBhcHBseSB0aGUgbm9kZSByb3RhdGlvbiwgc2NhbGUsIHRyYW5zbGF0ZSB0byB0aGUgbWFwIHRpbGUuXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgVGlsZWRUaWxlJ3MgZ2lkIHRvIGNoYW5nZSB0aGUgbWFwIHRpbGUncyBzdHlsZS5cbiAqICEjemggVGlsZWRUaWxlIOWPr+S7peWNleeLrOWvueafkOS4gOS4quWcsOWbvuWdl+i/m+ihjOaTjeS9nOOAglxuICog5LuW5Lya5bCG6IqC54K555qE5peL6L2s77yM57yp5pS+77yM5bmz56e75pON5L2c5bqU55So5Zyo6L+Z5Liq5Zyw5Zu+5Z2X5LiK77yM5bm25Y+v5Lul6YCa6L+H5pu05o2i5b2T5YmN5Zyw5Zu+5Z2X55qEIGdpZCDmnaXmm7TmjaLlnLDlm77lnZfnmoTmmL7npLrmoLflvI/jgIJcbiAqIEBjbGFzcyBUaWxlZFRpbGVcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5sZXQgVGlsZWRUaWxlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5UaWxlZFRpbGUnLFxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL1RpbGVkVGlsZScsXG4gICAgfSxcblxuICAgIGN0b3IgKCkge1xuICAgICAgICB0aGlzLl9sYXllciA9IG51bGw7XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX3g6IDAsXG4gICAgICAgIF95OiAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIFNwZWNpZnkgdGhlIFRpbGVkVGlsZSBob3Jpem9udGFsIGNvb3JkaW5hdGXvvIx1c2UgbWFwIHRpbGUgYXMgdGhlIHVuaXQuXG4gICAgICAgICAqICEjemgg5oyH5a6aIFRpbGVkVGlsZSDnmoTmqKrlkJHlnZDmoIfvvIzku6XlnLDlm77lnZfkuLrljZXkvY1cbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHhcbiAgICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICAgKi9cbiAgICAgICAgeDoge1xuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl94KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xheWVyICYmIHRoaXMuX2xheWVyLl9pc0ludmFsaWRQb3NpdGlvbih2YWx1ZSwgdGhpcy5feSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgSW52YWxpZCB4LCB0aGUgdmFsaWQgdmFsdWUgaXMgYmV0d2VlbiBbJXNdIH4gWyVzXWAsIDAsIHRoaXMuX2xheWVyLl9sYXllclNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJbmZvKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlclxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIFNwZWNpZnkgdGhlIFRpbGVkVGlsZSB2ZXJ0aWNhbCBjb29yZGluYXRl77yMdXNlIG1hcCB0aWxlIGFzIHRoZSB1bml0LlxuICAgICAgICAgKiAhI3poIOaMh+WumiBUaWxlZFRpbGUg55qE57q15ZCR5Z2Q5qCH77yM5Lul5Zyw5Zu+5Z2X5Li65Y2V5L2NXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB5XG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIHk6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5feSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYXllciAmJiB0aGlzLl9sYXllci5faXNJbnZhbGlkUG9zaXRpb24odGhpcy5feCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYEludmFsaWQgeSwgdGhlIHZhbGlkIHZhbHVlIGlzIGJldHdlZW4gWyVzXSB+IFslc11gLCAwLCB0aGlzLl9sYXllci5fbGF5ZXJTaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRUaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZm8oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gU3BlY2lmeSB0aGUgVGlsZWRUaWxlIGdpZC5cbiAgICAgICAgICogISN6aCDmjIflrpogVGlsZWRUaWxlIOeahCBnaWQg5YC8XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBnaWRcbiAgICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICAgKi9cbiAgICAgICAgZ2lkOiB7XG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYXllcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXIuZ2V0VGlsZUdJREF0KHRoaXMuX3gsIHRoaXMuX3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xheWVyLnNldFRpbGVHSURBdCh2YWx1ZSwgdGhpcy5feCwgdGhpcy5feSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICB0aGlzLl9sYXllciA9IHBhcmVudC5nZXRDb21wb25lbnQoY2MuVGlsZWRMYXllcik7XG4gICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgICAgICB0aGlzLl91cGRhdGVJbmZvKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSAoKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgIH0sXG5cbiAgICBfcmVzZXRUaWxlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xheWVyICYmIHRoaXMuX2xheWVyLmdldFRpbGVkVGlsZUF0KHRoaXMuX3gsIHRoaXMuX3kpID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXllci5zZXRUaWxlZFRpbGVBdCh0aGlzLl94LCB0aGlzLl95LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlSW5mbyAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbGF5ZXIpIHJldHVybjtcblxuICAgICAgICBsZXQgeCA9IHRoaXMuX3gsICB5ID0gdGhpcy5feTtcbiAgICAgICAgaWYgKHRoaXMuX2xheWVyLmdldFRpbGVkVGlsZUF0KHgsIHkpKSB7XG4gICAgICAgICAgICBjYy53YXJuKCdUaGVyZSBpcyBhbHJlYWR5IGEgVGlsZWRUaWxlIGF0IFslcywgJXNdJywgeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2xheWVyLmdldFBvc2l0aW9uQXQoeCwgeSkpO1xuICAgICAgICB0aGlzLl9sYXllci5zZXRUaWxlZFRpbGVBdCh4LCB5LCB0aGlzKTtcbiAgICB9LFxufSk7XG5cbmNjLlRpbGVkVGlsZSA9IG1vZHVsZS5leHBvcnRzID0gVGlsZWRUaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuIFRpbGVkVGlsZSBjYW4gY29udHJvbCB0aGUgc3BlY2lmaWVkIG1hcCB0aWxlLiBcbiAqIEl0IHdpbGwgYXBwbHkgdGhlIG5vZGUgcm90YXRpb24sIHNjYWxlLCB0cmFuc2xhdGUgdG8gdGhlIG1hcCB0aWxlLlxuICogWW91IGNhbiBjaGFuZ2UgdGhlIFRpbGVkVGlsZSdzIGdpZCB0byBjaGFuZ2UgdGhlIG1hcCB0aWxlJ3Mgc3R5bGUuXG4gKiAhI3poIFRpbGVkVGlsZSDlj6/ku6XljZXni6zlr7nmn5DkuIDkuKrlnLDlm77lnZfov5vooYzmk43kvZzjgIJcbiAqIOS7luS8muWwhuiKgueCueeahOaXi+i9rO+8jOe8qeaUvu+8jOW5s+enu+aTjeS9nOW6lOeUqOWcqOi/meS4quWcsOWbvuWdl+S4iu+8jOW5tuWPr+S7pemAmui/h+abtOaNouW9k+WJjeWcsOWbvuWdl+eahCBnaWQg5p2l5pu05o2i5Zyw5Zu+5Z2X55qE5pi+56S65qC35byP44CCXG4gKiBAY2xhc3MgVGlsZWRUaWxlXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xudmFyIFRpbGVkVGlsZSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuVGlsZWRUaWxlJyxcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlLFxuICAgICAgICBtZW51OiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnJlbmRlcmVycy9UaWxlZFRpbGUnXG4gICAgfSxcblxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2xheWVyID0gbnVsbDtcbiAgICB9LFxuXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF94OiAwLFxuICAgICAgICBfeTogMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBTcGVjaWZ5IHRoZSBUaWxlZFRpbGUgaG9yaXpvbnRhbCBjb29yZGluYXRl77yMdXNlIG1hcCB0aWxlIGFzIHRoZSB1bml0LlxuICAgICAgICAgKiAhI3poIOaMh+WumiBUaWxlZFRpbGUg55qE5qiq5ZCR5Z2Q5qCH77yM5Lul5Zyw5Zu+5Z2X5Li65Y2V5L2NXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB4XG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIHg6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl94KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xheWVyICYmIHRoaXMuX2xheWVyLl9pc0ludmFsaWRQb3NpdGlvbih2YWx1ZSwgdGhpcy5feSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybignSW52YWxpZCB4LCB0aGUgdmFsaWQgdmFsdWUgaXMgYmV0d2VlbiBbJXNdIH4gWyVzXScsIDAsIHRoaXMuX2xheWVyLl9sYXllclNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJbmZvKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gU3BlY2lmeSB0aGUgVGlsZWRUaWxlIHZlcnRpY2FsIGNvb3JkaW5hdGXvvIx1c2UgbWFwIHRpbGUgYXMgdGhlIHVuaXQuXG4gICAgICAgICAqICEjemgg5oyH5a6aIFRpbGVkVGlsZSDnmoTnurXlkJHlnZDmoIfvvIzku6XlnLDlm77lnZfkuLrljZXkvY1cbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHlcbiAgICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICAgKi9cbiAgICAgICAgeToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX3kpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGF5ZXIgJiYgdGhpcy5fbGF5ZXIuX2lzSW52YWxpZFBvc2l0aW9uKHRoaXMuX3gsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKCdJbnZhbGlkIHksIHRoZSB2YWxpZCB2YWx1ZSBpcyBiZXR3ZWVuIFslc10gfiBbJXNdJywgMCwgdGhpcy5fbGF5ZXIuX2xheWVyU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJbmZvKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gU3BlY2lmeSB0aGUgVGlsZWRUaWxlIGdpZC5cbiAgICAgICAgICogISN6aCDmjIflrpogVGlsZWRUaWxlIOeahCBnaWQg5YC8XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBnaWRcbiAgICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICAgKi9cbiAgICAgICAgZ2lkOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xheWVyLmdldFRpbGVHSURBdCh0aGlzLl94LCB0aGlzLl95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGF5ZXIuc2V0VGlsZUdJREF0KHZhbHVlLCB0aGlzLl94LCB0aGlzLl95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uIG9uRW5hYmxlKCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgdGhpcy5fbGF5ZXIgPSBwYXJlbnQuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTGF5ZXIpO1xuICAgICAgICB0aGlzLl9yZXNldFRpbGUoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5mbygpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0VGlsZSgpO1xuICAgIH0sXG4gICAgX3Jlc2V0VGlsZTogZnVuY3Rpb24gX3Jlc2V0VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xheWVyICYmIHRoaXMuX2xheWVyLmdldFRpbGVkVGlsZUF0KHRoaXMuX3gsIHRoaXMuX3kpID09PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXllci5zZXRUaWxlZFRpbGVBdCh0aGlzLl94LCB0aGlzLl95LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX3VwZGF0ZUluZm86IGZ1bmN0aW9uIF91cGRhdGVJbmZvKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xheWVyKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHggPSB0aGlzLl94LFxuICAgICAgICAgICAgeSA9IHRoaXMuX3k7XG4gICAgICAgIGlmICh0aGlzLl9sYXllci5nZXRUaWxlZFRpbGVBdCh4LCB5KSkge1xuICAgICAgICAgICAgY2Mud2FybignVGhlcmUgaXMgYWxyZWFkeSBhIFRpbGVkVGlsZSBhdCBbJXMsICVzXScsIHgsIHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9sYXllci5nZXRQb3NpdGlvbkF0KHgsIHkpKTtcbiAgICAgICAgdGhpcy5fbGF5ZXIuc2V0VGlsZWRUaWxlQXQoeCwgeSwgdGhpcyk7XG4gICAgfVxufSk7XG5cbmNjLlRpbGVkVGlsZSA9IG1vZHVsZS5leHBvcnRzID0gVGlsZWRUaWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFZHbHNaV1JVYVd4bExtcHpJbDBzSW01aGJXVnpJanBiSWxScGJHVmtWR2xzWlNJc0ltTmpJaXdpUTJ4aGMzTWlMQ0p1WVcxbElpd2laWGgwWlc1a2N5SXNJa052YlhCdmJtVnVkQ0lzSW1Wa2FYUnZjaUlzSWtORFgwVkVTVlJQVWlJc0ltVjRaV04xZEdWSmJrVmthWFJOYjJSbElpd2liV1Z1ZFNJc0ltTjBiM0lpTENKZmJHRjVaWElpTENKd2NtOXdaWEowYVdWeklpd2lYM2dpTENKZmVTSXNJbmdpTENKblpYUWlMQ0p6WlhRaUxDSjJZV3gxWlNJc0lsOXBjMGx1ZG1Gc2FXUlFiM05wZEdsdmJpSXNJbmRoY200aUxDSmZiR0Y1WlhKVGFYcGxJaXdpZDJsa2RHZ2lMQ0pmY21WelpYUlVhV3hsSWl3aVgzVndaR0YwWlVsdVptOGlMQ0owZVhCbElpd2lTVzUwWldkbGNpSXNJbmtpTENKb1pXbG5hSFFpTENKbmFXUWlMQ0puWlhSVWFXeGxSMGxFUVhRaUxDSnpaWFJVYVd4bFIwbEVRWFFpTENKdmJrVnVZV0pzWlNJc0luQmhjbVZ1ZENJc0ltNXZaR1VpTENKblpYUkRiMjF3YjI1bGJuUWlMQ0pVYVd4bFpFeGhlV1Z5SWl3aWIyNUVhWE5oWW14bElpd2laMlYwVkdsc1pXUlVhV3hsUVhRaUxDSnpaWFJVYVd4bFpGUnBiR1ZCZENJc0luTmxkRkJ2YzJsMGFXOXVJaXdpWjJWMFVHOXphWFJwYjI1QmRDSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCTUVKQk96czdPenM3T3pzN1FVRlRRU3hKUVVGSlFTeFpRVUZaUXl4SFFVRkhReXhMUVVGSUxFTkJRVk03UVVGRGNrSkRMRlZCUVUwc1kwRkVaVHRCUVVWeVFrTXNZVUZCVTBnc1IwRkJSMGtzVTBGR1V6czdRVUZKY2tKRExGbEJRVkZETEdGQlFXRTdRVUZEYWtKRExESkNRVUZ0UWl4SlFVUkdPMEZCUldwQ1F5eGpRVUZOTzBGQlJsY3NTMEZLUVRzN1FVRlRja0pETEZGQlZIRkNMR3RDUVZOaU8wRkJRMG9zWVVGQlMwTXNUVUZCVEN4SFFVRmpMRWxCUVdRN1FVRkRTQ3hMUVZodlFqczdPMEZCWVhKQ1F5eG5Ra0ZCV1R0QlFVTlNReXhaUVVGSkxFTkJSRWs3UVVGRlVrTXNXVUZCU1N4RFFVWkpPenRCUVVsU096czdPenM3UVVGTlFVTXNWMEZCUnp0QlFVTkRReXhsUVVSRUxHbENRVU5STzBGQlEwZ3NkVUpCUVU4c1MwRkJTMGdzUlVGQldqdEJRVU5JTEdGQlNFWTdRVUZKUTBrc1pVRktSQ3hsUVVsTlF5eExRVXBPTEVWQlNXRTdRVUZEVWl4dlFrRkJTVUVzVlVGQlZTeExRVUZMVEN4RlFVRnVRaXhGUVVGMVFqdEJRVU4yUWl4dlFrRkJTU3hMUVVGTFJpeE5RVUZNTEVsQlFXVXNTMEZCUzBFc1RVRkJUQ3hEUVVGWlVTeHJRa0ZCV2l4RFFVRXJRa1FzUzBGQkwwSXNSVUZCYzBNc1MwRkJTMG9zUlVGQk0wTXNRMEZCYmtJc1JVRkJiVVU3UVVGREwwUmlMSFZDUVVGSGJVSXNTVUZCU0N4elJFRkJOa1FzUTBGQk4wUXNSVUZCWjBVc1MwRkJTMVFzVFVGQlRDeERRVUZaVlN4VlFVRmFMRU5CUVhWQ1F5eExRVUYyUmp0QlFVTkJPMEZCUTBnN1FVRkRSQ3h4UWtGQlMwTXNWVUZCVER0QlFVTkJMSEZDUVVGTFZpeEZRVUZNTEVkQlFWVkxMRXRCUVZZN1FVRkRRU3h4UWtGQlMwMHNWMEZCVER0QlFVTklMR0ZCWWtZN08wRkJZME5ETEd0Q1FVRk5lRUlzUjBGQlIzbENPMEZCWkZZc1UwRldTenM3UVVFeVFsSTdPenM3T3p0QlFVMUJReXhYUVVGSE8wRkJRME5ZTEdWQlJFUXNhVUpCUTFFN1FVRkRTQ3gxUWtGQlR5eExRVUZMUml4RlFVRmFPMEZCUTBnc1lVRklSanRCUVVsRFJ5eGxRVXBFTEdWQlNVMURMRXRCU2s0c1JVRkpZVHRCUVVOU0xHOUNRVUZKUVN4VlFVRlZMRXRCUVV0S0xFVkJRVzVDTEVWQlFYVkNPMEZCUTNaQ0xHOUNRVUZKTEV0QlFVdElMRTFCUVV3c1NVRkJaU3hMUVVGTFFTeE5RVUZNTEVOQlFWbFJMR3RDUVVGYUxFTkJRU3RDTEV0QlFVdE9MRVZCUVhCRExFVkJRWGREU3l4TFFVRjRReXhEUVVGdVFpeEZRVUZ0UlR0QlFVTXZSR3BDTEhWQ1FVRkhiVUlzU1VGQlNDeHpSRUZCTmtRc1EwRkJOMFFzUlVGQlowVXNTMEZCUzFRc1RVRkJUQ3hEUVVGWlZTeFZRVUZhTEVOQlFYVkNUeXhOUVVGMlJqdEJRVU5CTzBGQlEwZzdRVUZEUkN4eFFrRkJTMHdzVlVGQlREdEJRVU5CTEhGQ1FVRkxWQ3hGUVVGTUxFZEJRVlZKTEV0QlFWWTdRVUZEUVN4eFFrRkJTMDBzVjBGQlREdEJRVU5JTEdGQllrWTdPMEZCWTBORExHdENRVUZOZUVJc1IwRkJSM2xDTzBGQlpGWXNVMEZxUTBzN08wRkJhMFJTT3pzN096czdRVUZOUVVjc1lVRkJTenRCUVVORVlpeGxRVVJETEdsQ1FVTk5PMEZCUTBnc2IwSkJRVWtzUzBGQlMwd3NUVUZCVkN4RlFVRnBRanRCUVVOaUxESkNRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVzFDTEZsQlFWb3NRMEZCZVVJc1MwRkJTMnBDTEVWQlFUbENMRVZCUVd0RExFdEJRVXRETEVWQlFYWkRMRU5CUVZBN1FVRkRTRHRCUVVORUxIVkNRVUZQTEVOQlFWQTdRVUZEU0N4aFFVNUJPMEZCVDBSSExHVkJVRU1zWlVGUFNVTXNTMEZRU2l4RlFVOVhPMEZCUTFJc2IwSkJRVWtzUzBGQlMxQXNUVUZCVkN4RlFVRnBRanRCUVVOaUxIbENRVUZMUVN4TlFVRk1MRU5CUVZsdlFpeFpRVUZhTEVOQlFYbENZaXhMUVVGNlFpeEZRVUZuUXl4TFFVRkxUQ3hGUVVGeVF5eEZRVUY1UXl4TFFVRkxReXhGUVVFNVF6dEJRVU5JTzBGQlEwb3NZVUZZUVRzN1FVRlpSRmNzYTBKQlFVMTRRaXhIUVVGSGVVSTdRVUZhVWp0QlFYaEVSeXhMUVdKVE96dEJRWEZHY2tKTkxGbEJja1p4UWl4elFrRnhSbFE3UVVGRFVpeFpRVUZKUXl4VFFVRlRMRXRCUVV0RExFbEJRVXdzUTBGQlZVUXNUVUZCZGtJN1FVRkRRU3hoUVVGTGRFSXNUVUZCVEN4SFFVRmpjMElzVDBGQlQwVXNXVUZCVUN4RFFVRnZRbXhETEVkQlFVZHRReXhWUVVGMlFpeERRVUZrTzBGQlEwRXNZVUZCUzJJc1ZVRkJURHRCUVVOQkxHRkJRVXRETEZkQlFVdzdRVUZEU0N4TFFURkdiMEk3UVVFMFJuSkNZU3hoUVRWR2NVSXNkVUpCTkVaU08wRkJRMVFzWVVGQlMyUXNWVUZCVER0QlFVTklMRXRCT1VadlFqdEJRV2RIY2tKQkxHTkJhRWR4UWl4M1FrRm5SMUE3UVVGRFZpeFpRVUZKTEV0QlFVdGFMRTFCUVV3c1NVRkJaU3hMUVVGTFFTeE5RVUZNTEVOQlFWa3lRaXhqUVVGYUxFTkJRVEpDTEV0QlFVdDZRaXhGUVVGb1F5eEZRVUZ2UXl4TFFVRkxReXhGUVVGNlF5eE5RVUZwUkN4SlFVRndSU3hGUVVFd1JUdEJRVU4wUlN4cFFrRkJTMGdzVFVGQlRDeERRVUZaTkVJc1kwRkJXaXhEUVVFeVFpeExRVUZMTVVJc1JVRkJhRU1zUlVGQmIwTXNTMEZCUzBNc1JVRkJla01zUlVGQk5rTXNTVUZCTjBNN1FVRkRTRHRCUVVOS0xFdEJjRWR2UWp0QlFYTkhja0pWTEdWQmRFZHhRaXg1UWtGelIwNDdRVUZEV0N4WlFVRkpMRU5CUVVNc1MwRkJTMklzVFVGQlZpeEZRVUZyUWpzN1FVRkZiRUlzV1VGQlNVa3NTVUZCU1N4TFFVRkxSaXhGUVVGaU8wRkJRVUVzV1VGQmEwSmpMRWxCUVVrc1MwRkJTMklzUlVGQk0wSTdRVUZEUVN4WlFVRkpMRXRCUVV0SUxFMUJRVXdzUTBGQldUSkNMR05CUVZvc1EwRkJNa0oyUWl4RFFVRXpRaXhGUVVFNFFsa3NRMEZCT1VJc1EwRkJTaXhGUVVGelF6dEJRVU5zUXpGQ0xHVkJRVWR0UWl4SlFVRklMRU5CUVZFc01FTkJRVklzUlVGQmIwUk1MRU5CUVhCRUxFVkJRWFZFV1N4RFFVRjJSRHRCUVVOQk8wRkJRMGc3UVVGRFJDeGhRVUZMVHl4SlFVRk1MRU5CUVZWTkxGZEJRVllzUTBGQmMwSXNTMEZCU3pkQ0xFMUJRVXdzUTBGQldUaENMR0ZCUVZvc1EwRkJNRUl4UWl4RFFVRXhRaXhGUVVFMlFsa3NRMEZCTjBJc1EwRkJkRUk3UVVGRFFTeGhRVUZMYUVJc1RVRkJUQ3hEUVVGWk5FSXNZMEZCV2l4RFFVRXlRbmhDTEVOQlFUTkNMRVZCUVRoQ1dTeERRVUU1UWl4RlFVRnBReXhKUVVGcVF6dEJRVU5JTzBGQmFFaHZRaXhEUVVGVUxFTkJRV2hDT3p0QlFXMUlRVEZDTEVkQlFVZEVMRk5CUVVnc1IwRkJaVEJETEU5QlFVOURMRTlCUVZBc1IwRkJhVUl6UXl4VFFVRm9ReUlzSW1acGJHVWlPaUpEUTFScGJHVmtWR2xzWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERXpMVEl3TVRZZ1EyaDFhMjl1WnlCVVpXTm9ibTlzYjJkcFpYTWdTVzVqTGx4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55MHlNREU0SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xseHVYRzRnYUhSMGNITTZMeTkzZDNjdVkyOWpiM011WTI5dEwxeHVYRzRnVUdWeWJXbHpjMmx2YmlCcGN5Qm9aWEpsWW5rZ1ozSmhiblJsWkN3Z1puSmxaU0J2WmlCamFHRnlaMlVzSUhSdklHRnVlU0J3WlhKemIyNGdiMkowWVdsdWFXNW5JR0VnWTI5d2VWeHVJRzltSUhSb2FYTWdjMjltZEhkaGNtVWdZVzVrSUdGemMyOWphV0YwWldRZ1pXNW5hVzVsSUhOdmRYSmpaU0JqYjJSbElDaDBhR1VnWENKVGIyWjBkMkZ5WlZ3aUtTd2dZU0JzYVcxcGRHVmtMRnh1SUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh1SUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUIxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYRzRnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhHNWNiaUJVYUdVZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2FXNGdkR2hwY3lCTWFXTmxibk5sSUVGbmNtVmxiV1Z1ZENCaGNtVWdiR2xqWlc1elpXUXNJRzV2ZENCemIyeGtMbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEc1Y2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEc0Z1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEc0Z1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc0Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRseHVJRlJJUlNCVFQwWlVWMEZTUlM1Y2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4dVhHNHZLaXBjYmlBcUlDRWpaVzRnVkdsc1pXUlVhV3hsSUdOaGJpQmpiMjUwY205c0lIUm9aU0J6Y0dWamFXWnBaV1FnYldGd0lIUnBiR1V1SUZ4dUlDb2dTWFFnZDJsc2JDQmhjSEJzZVNCMGFHVWdibTlrWlNCeWIzUmhkR2x2Yml3Z2MyTmhiR1VzSUhSeVlXNXpiR0YwWlNCMGJ5QjBhR1VnYldGd0lIUnBiR1V1WEc0Z0tpQlpiM1VnWTJGdUlHTm9ZVzVuWlNCMGFHVWdWR2xzWldSVWFXeGxKM01nWjJsa0lIUnZJR05vWVc1blpTQjBhR1VnYldGd0lIUnBiR1VuY3lCemRIbHNaUzVjYmlBcUlDRWplbWdnVkdsc1pXUlVhV3hsSU9XUHIrUzdwZVdObGVlTHJPV3Z1ZWFma09TNGdPUzRxdVdjc09XYnZ1V2RsK2kvbStpaGpPYVRqZVM5bk9PQWdseHVJQ29nNUx1VzVMeWE1YkNHNklxQzU0SzU1NXFFNXBlTDZMMnM3N3lNNTd5cDVwUys3N3lNNWJtejU2ZTc1cE9ONUwyYzVicVU1NVNvNVp5bzZMK1o1TGlxNVp5dzVadSs1WjJYNUxpSzc3eU01Ym0yNVkrdjVMdWw2WUNhNkwrSDVwdTA1bzJpNWIyVDVZbU41Wnl3NVp1KzVaMlg1NXFFSUdkcFpDRG1uYVhtbTdUbWphTGxuTERsbTc3bG5aZm5tb1RtbUw3bnBMcm1vTGZsdkkvamdJSmNiaUFxSUVCamJHRnpjeUJVYVd4bFpGUnBiR1ZjYmlBcUlFQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGeHVJQ292WEc1c1pYUWdWR2xzWldSVWFXeGxJRDBnWTJNdVEyeGhjM01vZTF4dUlDQWdJRzVoYldVNklDZGpZeTVVYVd4bFpGUnBiR1VuTEZ4dUlDQWdJR1Y0ZEdWdVpITTZJR05qTGtOdmJYQnZibVZ1ZEN4Y2JseHVJQ0FnSUdWa2FYUnZjam9nUTBOZlJVUkpWRTlTSUNZbUlIdGNiaUFnSUNBZ0lDQWdaWGhsWTNWMFpVbHVSV1JwZEUxdlpHVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lHMWxiblU2SUNkcE1UaHVPazFCU1U1ZlRVVk9WUzVqYjIxd2IyNWxiblF1Y21WdVpHVnlaWEp6TDFScGJHVmtWR2xzWlNjc1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOMGIzSWdLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlzWVhsbGNpQTlJRzUxYkd3N1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIzQmxjblJwWlhNNklIdGNiaUFnSUNBZ0lDQWdYM2c2SURBc1hHNGdJQ0FnSUNBZ0lGOTVPaUF3TEZ4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lBaEkyVnVJRk53WldOcFpua2dkR2hsSUZScGJHVmtWR2xzWlNCb2IzSnBlbTl1ZEdGc0lHTnZiM0prYVc1aGRHWHZ2SXgxYzJVZ2JXRndJSFJwYkdVZ1lYTWdkR2hsSUhWdWFYUXVYRzRnSUNBZ0lDQWdJQ0FxSUNFamVtZ2c1b3lINWE2YUlGUnBiR1ZrVkdsc1pTRG5tb1RtcUtybGtKSGxuWkRtb0lmdnZJemt1NlhsbkxEbG03N2xuWmZrdUxybGpaWGt2WTFjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnliM0JsY25SNUlIdE9kVzFpWlhKOUlIaGNiaUFnSUNBZ0lDQWdJQ29nUUdSbFptRjFiSFFnTUZ4dUlDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdlRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwSUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFFnS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUQwOVBTQjBhR2x6TGw5NEtTQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyeGhlV1Z5SUNZbUlIUm9hWE11WDJ4aGVXVnlMbDlwYzBsdWRtRnNhV1JRYjNOcGRHbHZiaWgyWVd4MVpTd2dkR2hwY3k1ZmVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyTXVkMkZ5YmloZ1NXNTJZV3hwWkNCNExDQjBhR1VnZG1Gc2FXUWdkbUZzZFdVZ2FYTWdZbVYwZDJWbGJpQmJKWE5kSUg0Z1d5VnpYV0FzSURBc0lIUm9hWE11WDJ4aGVXVnlMbDlzWVhsbGNsTnBlbVV1ZDJsa2RHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM0psYzJWMFZHbHNaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM2dnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTFjR1JoZEdWSmJtWnZLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nWTJNdVNXNTBaV2RsY2x4dUlDQWdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQWhJMlZ1SUZOd1pXTnBabmtnZEdobElGUnBiR1ZrVkdsc1pTQjJaWEowYVdOaGJDQmpiMjl5WkdsdVlYUmw3N3lNZFhObElHMWhjQ0IwYVd4bElHRnpJSFJvWlNCMWJtbDBMbHh1SUNBZ0lDQWdJQ0FnS2lBaEkzcG9JT2FNaCtXdW1pQlVhV3hsWkZScGJHVWc1NXFFNTdxMTVaQ1I1WjJRNXFDSDc3eU01THVsNVp5dzVadSs1WjJYNUxpNjVZMlY1TDJOWEc0Z0lDQWdJQ0FnSUNBcUlFQndjbTl3WlhKMGVTQjdUblZ0WW1WeWZTQjVYRzRnSUNBZ0lDQWdJQ0FxSUVCa1pXWmhkV3gwSURCY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSGs2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RsZENBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMlYwSUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlNBOVBUMGdkR2hwY3k1ZmVTa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXNZWGxsY2lBbUppQjBhR2x6TGw5c1lYbGxjaTVmYVhOSmJuWmhiR2xrVUc5emFYUnBiMjRvZEdocGN5NWZlQ3dnZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmpMbmRoY200b1lFbHVkbUZzYVdRZ2VTd2dkR2hsSUhaaGJHbGtJSFpoYkhWbElHbHpJR0psZEhkbFpXNGdXeVZ6WFNCK0lGc2xjMTFnTENBd0xDQjBhR2x6TGw5c1lYbGxjaTVmYkdGNVpYSlRhWHBsTG1obGFXZG9kQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmY21WelpYUlVhV3hsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZVNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1Z3WkdGMFpVbHVabThvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCall5NUpiblJsWjJWeVhHNGdJQ0FnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJQ0VqWlc0Z1UzQmxZMmxtZVNCMGFHVWdWR2xzWldSVWFXeGxJR2RwWkM1Y2JpQWdJQ0FnSUNBZ0lDb2dJU042YUNEbWpJZmxycG9nVkdsc1pXUlVhV3hsSU9lYWhDQm5hV1FnNVlDOFhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3VG5WdFltVnlmU0JuYVdSY2JpQWdJQ0FnSUNBZ0lDb2dRR1JsWm1GMWJIUWdNRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1oybGtPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5aWFFnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJHRjVaWEl1WjJWMFZHbHNaVWRKUkVGMEtIUm9hWE11WDNnc0lIUm9hWE11WDNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhRZ0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyeGhlV1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyeGhlV1Z5TG5ObGRGUnBiR1ZIU1VSQmRDaDJZV3gxWlN3Z2RHaHBjeTVmZUN3Z2RHaHBjeTVmZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklHTmpMa2x1ZEdWblpYSmNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnZia1Z1WVdKc1pTQW9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQndZWEpsYm5RZ1BTQjBhR2x6TG01dlpHVXVjR0Z5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5c1lYbGxjaUE5SUhCaGNtVnVkQzVuWlhSRGIyMXdiMjVsYm5Rb1kyTXVWR2xzWldSTVlYbGxjaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0psYzJWMFZHbHNaU2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDkxY0dSaGRHVkpibVp2S0NrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUc5dVJHbHpZV0pzWlNBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzSmxjMlYwVkdsc1pTZ3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmZjbVZ6WlhSVWFXeGxJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyeGhlV1Z5SUNZbUlIUm9hWE11WDJ4aGVXVnlMbWRsZEZScGJHVmtWR2xzWlVGMEtIUm9hWE11WDNnc0lIUm9hWE11WDNrcElEMDlQU0IwYUdsektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlzWVhsbGNpNXpaWFJVYVd4bFpGUnBiR1ZCZENoMGFHbHpMbDk0TENCMGFHbHpMbDk1TENCdWRXeHNLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JmZFhCa1lYUmxTVzVtYnlBb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTVmYkdGNVpYSXBJSEpsZEhWeWJqdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ2VDQTlJSFJvYVhNdVgzZ3NJQ0I1SUQwZ2RHaHBjeTVmZVR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyeGhlV1Z5TG1kbGRGUnBiR1ZrVkdsc1pVRjBLSGdzSUhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCall5NTNZWEp1S0NkVWFHVnlaU0JwY3lCaGJISmxZV1I1SUdFZ1ZHbHNaV1JVYVd4bElHRjBJRnNsY3l3Z0pYTmRKeXdnZUN3Z2VTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbExuTmxkRkJ2YzJsMGFXOXVLSFJvYVhNdVgyeGhlV1Z5TG1kbGRGQnZjMmwwYVc5dVFYUW9lQ3dnZVNrcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5c1lYbGxjaTV6WlhSVWFXeGxaRlJwYkdWQmRDaDRMQ0I1TENCMGFHbHpLVHRjYmlBZ0lDQjlMRnh1ZlNrN1hHNWNibU5qTGxScGJHVmtWR2xzWlNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ZHbHNaV1JVYVd4bE8xeHVJbDE5Il19