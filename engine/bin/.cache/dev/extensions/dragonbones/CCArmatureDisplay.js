(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/extensions/dragonbones/CCArmatureDisplay.js';
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
        var EventTarget = require('../../cocos2d/core/event/event-target');
        dragonBones.CCArmatureDisplay = cc.Class({
            name: 'dragonBones.CCArmatureDisplay',
            properties: {
                node: {
                    get: function get() {
                        return this;
                    }
                }
            },
            ctor: function ctor() {
                this._eventTarget = new EventTarget();
            },
            setEventTarget: function setEventTarget(eventTarget) {
                this._eventTarget = eventTarget;
            },
            getRootDisplay: function getRootDisplay() {
                var parentSlot = this._armature._parent;
                if (!parentSlot) {
                    return this;
                }
                var slot;
                while (parentSlot) {
                    slot = parentSlot;
                    parentSlot = parentSlot._armature._parent;
                }
                return slot._armature.getDisplay();
            },
            convertToRootSpace: function convertToRootSpace(pos) {
                var slot = this._armature._parent;
                if (!slot) {
                    return pos;
                }
                slot.updateWorldMatrix();
                var worldMatrix = slot._worldMatrix;
                var newPos = cc.v2(0, 0);
                newPos.x = pos.x * worldMatrix.m00 + pos.y * worldMatrix.m04 + worldMatrix.m12;
                newPos.y = pos.x * worldMatrix.m01 + pos.y * worldMatrix.m05 + worldMatrix.m13;
                return newPos;
            },
            convertToWorldSpace: function convertToWorldSpace(point) {
                var newPos = this.convertToRootSpace(point);
                var ccNode = this.getRootNode();
                var finalPos = ccNode.convertToWorldSpace(newPos);
                return finalPos;
            },
            getRootNode: function getRootNode() {
                var rootDisplay = this.getRootDisplay();
                return rootDisplay && rootDisplay._ccNode;
            },
            dbInit: function dbInit(armature) {
                this._armature = armature;
            },
            dbClear: function dbClear() {
                this._armature = null;
            },
            dbUpdate: function dbUpdate() {
            },
            advanceTimeBySelf: function advanceTimeBySelf(on) {
                this.shouldAdvanced = !!on;
            },
            hasDBEventListener: function hasDBEventListener(type) {
                return this._eventTarget.hasEventListener(type);
            },
            addDBEventListener: function addDBEventListener(type, listener, target) {
                this._eventTarget.on(type, listener, target);
            },
            removeDBEventListener: function removeDBEventListener(type, listener, target) {
                this._eventTarget.off(type, listener, target);
            },
            dispatchDBEvent: function dispatchDBEvent(type, eventObject) {
                this._eventTarget.emit(type, eventObject);
            }
        });
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQXJtYXR1cmVEaXNwbGF5LmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2V4dGVuc2lvbnMvZHJhZ29uYm9uZXMvQ0NBcm1hdHVyZURpc3BsYXkuanMiXSwibmFtZXMiOlsiRXZlbnRUYXJnZXQiLCJyZXF1aXJlIiwiZHJhZ29uQm9uZXMiLCJDQ0FybWF0dXJlRGlzcGxheSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsIm5vZGUiLCJnZXQiLCJjdG9yIiwiX2V2ZW50VGFyZ2V0Iiwic2V0RXZlbnRUYXJnZXQiLCJldmVudFRhcmdldCIsImdldFJvb3REaXNwbGF5IiwicGFyZW50U2xvdCIsIl9hcm1hdHVyZSIsIl9wYXJlbnQiLCJzbG90IiwiZ2V0RGlzcGxheSIsImNvbnZlcnRUb1Jvb3RTcGFjZSIsInBvcyIsInVwZGF0ZVdvcmxkTWF0cml4Iiwid29ybGRNYXRyaXgiLCJfd29ybGRNYXRyaXgiLCJuZXdQb3MiLCJ2MiIsIngiLCJtMDAiLCJ5IiwibTA0IiwibTEyIiwibTAxIiwibTA1IiwibTEzIiwiY29udmVydFRvV29ybGRTcGFjZSIsInBvaW50IiwiY2NOb2RlIiwiZ2V0Um9vdE5vZGUiLCJmaW5hbFBvcyIsInJvb3REaXNwbGF5IiwiX2NjTm9kZSIsImRiSW5pdCIsImFybWF0dXJlIiwiZGJDbGVhciIsImRiVXBkYXRlIiwiYWR2YW5jZVRpbWVCeVNlbGYiLCJvbiIsInNob3VsZEFkdmFuY2VkIiwiaGFzREJFdmVudExpc3RlbmVyIiwidHlwZSIsImhhc0V2ZW50TGlzdGVuZXIiLCJhZGREQkV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsInRhcmdldCIsInJlbW92ZURCRXZlbnRMaXN0ZW5lciIsIm9mZiIsImRpc3BhdGNoREJFdmVudCIsImV2ZW50T2JqZWN0IiwiZW1pdCJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdB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LE1BcEZDLEVBb0ZPO0FBQUEsZ0JBQ3hDLEtBQUszQyxZQUFMLENBQWtCb0MsRUFBbEIsQ0FBcUJHLElBQXJCLEVBQTJCRyxRQUEzQixFQUFxQ0MsTUFBckMsRUFEd0M7QUFBQSxhQXBGUDtBQUFBLFlBd0ZyQ0MscUJBQUFBLEVBeEZxQyxTQUFBLHFCQUFBLENBd0ZkTCxJQXhGYyxFQXdGUkcsUUF4RlEsRUF3RkVDLE1BeEZGLEVBd0ZVO0FBQUEsZ0JBQzNDLEtBQUszQyxZQUFMLENBQWtCNkMsR0FBbEIsQ0FBc0JOLElBQXRCLEVBQTRCRyxRQUE1QixFQUFzQ0MsTUFBdEMsRUFEMkM7QUFBQSxhQXhGVjtBQUFBLFlBNEZyQ0csZUFBQUEsRUE1RnFDLFNBQUEsZUFBQSxDQTRGbkJQLElBNUZtQixFQTRGYlEsV0E1RmEsRUE0RkE7QUFBQSxnQkFDakMsS0FBSy9DLFlBQUwsQ0FBa0JnRCxJQUFsQixDQUF1QlQsSUFBdkIsRUFBNkJRLFdBQTdCLEVBRGlDO0FBQUEsYUE1RkE7QUFBQSxTQUFUdEQsQ0FBaENGIiwiZmlsZSI6IkNDQXJtYXR1cmVEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5sZXQgRXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuLi8uLi9jb2NvczJkL2NvcmUvZXZlbnQvZXZlbnQtdGFyZ2V0Jyk7XG5cbmRyYWdvbkJvbmVzLkNDQXJtYXR1cmVEaXNwbGF5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdkcmFnb25Cb25lcy5DQ0FybWF0dXJlRGlzcGxheScsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGFkYXB0IG9sZCBhcGlcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3RvciAoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50VGFyZ2V0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgfSxcblxuICAgIHNldEV2ZW50VGFyZ2V0IChldmVudFRhcmdldCkge1xuICAgICAgICB0aGlzLl9ldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0O1xuICAgIH0sXG5cbiAgICBnZXRSb290RGlzcGxheSAoKSB7XG4gICAgICAgIHZhciBwYXJlbnRTbG90ID0gdGhpcy5fYXJtYXR1cmUuX3BhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnRTbG90KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNsb3Q7XG4gICAgICAgIHdoaWxlIChwYXJlbnRTbG90KVxuICAgICAgICB7XG4gICAgICAgICAgICBzbG90ID0gcGFyZW50U2xvdDtcbiAgICAgICAgICAgIHBhcmVudFNsb3QgPSBwYXJlbnRTbG90Ll9hcm1hdHVyZS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzbG90Ll9hcm1hdHVyZS5nZXREaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIGNvbnZlcnRUb1Jvb3RTcGFjZSAocG9zKSB7XG4gICAgICAgIHZhciBzbG90ID0gdGhpcy5fYXJtYXR1cmUuX3BhcmVudDtcbiAgICAgICAgaWYgKCFzbG90KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgICAgIHNsb3QudXBkYXRlV29ybGRNYXRyaXgoKTtcblxuICAgICAgICBsZXQgd29ybGRNYXRyaXggPSBzbG90Ll93b3JsZE1hdHJpeDtcbiAgICAgICAgbGV0IG5ld1BvcyA9IGNjLnYyKDAsMCk7XG4gICAgICAgIG5ld1Bvcy54ID0gcG9zLnggKiB3b3JsZE1hdHJpeC5tMDAgKyBwb3MueSAqIHdvcmxkTWF0cml4Lm0wNCArIHdvcmxkTWF0cml4Lm0xMjtcbiAgICAgICAgbmV3UG9zLnkgPSBwb3MueCAqIHdvcmxkTWF0cml4Lm0wMSArIHBvcy55ICogd29ybGRNYXRyaXgubTA1ICsgd29ybGRNYXRyaXgubTEzO1xuICAgICAgICByZXR1cm4gbmV3UG9zO1xuICAgIH0sXG5cbiAgICBjb252ZXJ0VG9Xb3JsZFNwYWNlIChwb2ludCkge1xuICAgICAgICB2YXIgbmV3UG9zID0gdGhpcy5jb252ZXJ0VG9Sb290U3BhY2UocG9pbnQpO1xuICAgICAgICB2YXIgY2NOb2RlID0gdGhpcy5nZXRSb290Tm9kZSgpO1xuICAgICAgICB2YXIgZmluYWxQb3MgPSBjY05vZGUuY29udmVydFRvV29ybGRTcGFjZShuZXdQb3MpO1xuICAgICAgICByZXR1cm4gZmluYWxQb3M7XG4gICAgfSxcblxuICAgIGdldFJvb3ROb2RlICgpIHtcbiAgICAgICAgdmFyIHJvb3REaXNwbGF5ID0gdGhpcy5nZXRSb290RGlzcGxheSgpO1xuICAgICAgICByZXR1cm4gcm9vdERpc3BsYXkgJiYgcm9vdERpc3BsYXkuX2NjTm9kZTtcbiAgICB9LFxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gZHJhZ29uYm9uZXMgYXBpXG4gICAgZGJJbml0IChhcm1hdHVyZSkge1xuICAgICAgICB0aGlzLl9hcm1hdHVyZSA9IGFybWF0dXJlO1xuICAgIH0sXG5cbiAgICBkYkNsZWFyICgpIHtcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSBudWxsO1xuICAgIH0sXG5cbiAgICBkYlVwZGF0ZSAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBhZHZhbmNlVGltZUJ5U2VsZiAgKG9uKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkQWR2YW5jZWQgPSAhIW9uO1xuICAgIH0sXG5cbiAgICBoYXNEQkV2ZW50TGlzdGVuZXIgKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VGFyZ2V0Lmhhc0V2ZW50TGlzdGVuZXIodHlwZSk7XG4gICAgfSxcblxuICAgIGFkZERCRXZlbnRMaXN0ZW5lciAodHlwZSwgbGlzdGVuZXIsIHRhcmdldCkge1xuICAgICAgICB0aGlzLl9ldmVudFRhcmdldC5vbih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlREJFdmVudExpc3RlbmVyICh0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50VGFyZ2V0Lm9mZih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hEQkV2ZW50ICAodHlwZSwgZXZlbnRPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRUYXJnZXQuZW1pdCh0eXBlLCBldmVudE9iamVjdCk7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgRXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuLi8uLi9jb2NvczJkL2NvcmUvZXZlbnQvZXZlbnQtdGFyZ2V0Jyk7XG5cbmRyYWdvbkJvbmVzLkNDQXJtYXR1cmVEaXNwbGF5ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdkcmFnb25Cb25lcy5DQ0FybWF0dXJlRGlzcGxheScsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGFkYXB0IG9sZCBhcGlcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICB9LFxuICAgIHNldEV2ZW50VGFyZ2V0OiBmdW5jdGlvbiBzZXRFdmVudFRhcmdldChldmVudFRhcmdldCkge1xuICAgICAgICB0aGlzLl9ldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0O1xuICAgIH0sXG4gICAgZ2V0Um9vdERpc3BsYXk6IGZ1bmN0aW9uIGdldFJvb3REaXNwbGF5KCkge1xuICAgICAgICB2YXIgcGFyZW50U2xvdCA9IHRoaXMuX2FybWF0dXJlLl9wYXJlbnQ7XG4gICAgICAgIGlmICghcGFyZW50U2xvdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2xvdDtcbiAgICAgICAgd2hpbGUgKHBhcmVudFNsb3QpIHtcbiAgICAgICAgICAgIHNsb3QgPSBwYXJlbnRTbG90O1xuICAgICAgICAgICAgcGFyZW50U2xvdCA9IHBhcmVudFNsb3QuX2FybWF0dXJlLl9wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNsb3QuX2FybWF0dXJlLmdldERpc3BsYXkoKTtcbiAgICB9LFxuICAgIGNvbnZlcnRUb1Jvb3RTcGFjZTogZnVuY3Rpb24gY29udmVydFRvUm9vdFNwYWNlKHBvcykge1xuICAgICAgICB2YXIgc2xvdCA9IHRoaXMuX2FybWF0dXJlLl9wYXJlbnQ7XG4gICAgICAgIGlmICghc2xvdCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgICAgICBzbG90LnVwZGF0ZVdvcmxkTWF0cml4KCk7XG5cbiAgICAgICAgdmFyIHdvcmxkTWF0cml4ID0gc2xvdC5fd29ybGRNYXRyaXg7XG4gICAgICAgIHZhciBuZXdQb3MgPSBjYy52MigwLCAwKTtcbiAgICAgICAgbmV3UG9zLnggPSBwb3MueCAqIHdvcmxkTWF0cml4Lm0wMCArIHBvcy55ICogd29ybGRNYXRyaXgubTA0ICsgd29ybGRNYXRyaXgubTEyO1xuICAgICAgICBuZXdQb3MueSA9IHBvcy54ICogd29ybGRNYXRyaXgubTAxICsgcG9zLnkgKiB3b3JsZE1hdHJpeC5tMDUgKyB3b3JsZE1hdHJpeC5tMTM7XG4gICAgICAgIHJldHVybiBuZXdQb3M7XG4gICAgfSxcbiAgICBjb252ZXJ0VG9Xb3JsZFNwYWNlOiBmdW5jdGlvbiBjb252ZXJ0VG9Xb3JsZFNwYWNlKHBvaW50KSB7XG4gICAgICAgIHZhciBuZXdQb3MgPSB0aGlzLmNvbnZlcnRUb1Jvb3RTcGFjZShwb2ludCk7XG4gICAgICAgIHZhciBjY05vZGUgPSB0aGlzLmdldFJvb3ROb2RlKCk7XG4gICAgICAgIHZhciBmaW5hbFBvcyA9IGNjTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlKG5ld1Bvcyk7XG4gICAgICAgIHJldHVybiBmaW5hbFBvcztcbiAgICB9LFxuICAgIGdldFJvb3ROb2RlOiBmdW5jdGlvbiBnZXRSb290Tm9kZSgpIHtcbiAgICAgICAgdmFyIHJvb3REaXNwbGF5ID0gdGhpcy5nZXRSb290RGlzcGxheSgpO1xuICAgICAgICByZXR1cm4gcm9vdERpc3BsYXkgJiYgcm9vdERpc3BsYXkuX2NjTm9kZTtcbiAgICB9LFxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBkcmFnb25ib25lcyBhcGlcbiAgICBkYkluaXQ6IGZ1bmN0aW9uIGRiSW5pdChhcm1hdHVyZSkge1xuICAgICAgICB0aGlzLl9hcm1hdHVyZSA9IGFybWF0dXJlO1xuICAgIH0sXG4gICAgZGJDbGVhcjogZnVuY3Rpb24gZGJDbGVhcigpIHtcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUgPSBudWxsO1xuICAgIH0sXG4gICAgZGJVcGRhdGU6IGZ1bmN0aW9uIGRiVXBkYXRlKCkge30sXG4gICAgYWR2YW5jZVRpbWVCeVNlbGY6IGZ1bmN0aW9uIGFkdmFuY2VUaW1lQnlTZWxmKG9uKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkQWR2YW5jZWQgPSAhIW9uO1xuICAgIH0sXG4gICAgaGFzREJFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBoYXNEQkV2ZW50TGlzdGVuZXIodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUYXJnZXQuaGFzRXZlbnRMaXN0ZW5lcih0eXBlKTtcbiAgICB9LFxuICAgIGFkZERCRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkREJFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRUYXJnZXQub24odHlwZSwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfSxcbiAgICByZW1vdmVEQkV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZURCRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50VGFyZ2V0Lm9mZih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGRpc3BhdGNoREJFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hEQkV2ZW50KHR5cGUsIGV2ZW50T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50VGFyZ2V0LmVtaXQodHlwZSwgZXZlbnRPYmplY3QpO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EUVhKdFlYUjFjbVZFYVhOd2JHRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrVjJaVzUwVkdGeVoyVjBJaXdpY21WeGRXbHlaU0lzSW1SeVlXZHZia0p2Ym1Weklpd2lRME5CY20xaGRIVnlaVVJwYzNCc1lYa2lMQ0pqWXlJc0lrTnNZWE56SWl3aWJtRnRaU0lzSW5CeWIzQmxjblJwWlhNaUxDSnViMlJsSWl3aVoyVjBJaXdpWTNSdmNpSXNJbDlsZG1WdWRGUmhjbWRsZENJc0luTmxkRVYyWlc1MFZHRnlaMlYwSWl3aVpYWmxiblJVWVhKblpYUWlMQ0puWlhSU2IyOTBSR2x6Y0d4aGVTSXNJbkJoY21WdWRGTnNiM1FpTENKZllYSnRZWFIxY21VaUxDSmZjR0Z5Wlc1MElpd2ljMnh2ZENJc0ltZGxkRVJwYzNCc1lYa2lMQ0pqYjI1MlpYSjBWRzlTYjI5MFUzQmhZMlVpTENKd2IzTWlMQ0oxY0dSaGRHVlhiM0pzWkUxaGRISnBlQ0lzSW5kdmNteGtUV0YwY21sNElpd2lYM2R2Y214a1RXRjBjbWw0SWl3aWJtVjNVRzl6SWl3aWRqSWlMQ0o0SWl3aWJUQXdJaXdpZVNJc0ltMHdOQ0lzSW0weE1pSXNJbTB3TVNJc0ltMHdOU0lzSW0weE15SXNJbU52Ym5abGNuUlViMWR2Y214a1UzQmhZMlVpTENKd2IybHVkQ0lzSW1OalRtOWtaU0lzSW1kbGRGSnZiM1JPYjJSbElpd2labWx1WVd4UWIzTWlMQ0p5YjI5MFJHbHpjR3hoZVNJc0lsOWpZMDV2WkdVaUxDSmtZa2x1YVhRaUxDSmhjbTFoZEhWeVpTSXNJbVJpUTJ4bFlYSWlMQ0prWWxWd1pHRjBaU0lzSW1Ga2RtRnVZMlZVYVcxbFFubFRaV3htSWl3aWIyNGlMQ0p6YUc5MWJHUkJaSFpoYm1ObFpDSXNJbWhoYzBSQ1JYWmxiblJNYVhOMFpXNWxjaUlzSW5SNWNHVWlMQ0pvWVhORmRtVnVkRXhwYzNSbGJtVnlJaXdpWVdSa1JFSkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aWJHbHpkR1Z1WlhJaUxDSjBZWEpuWlhRaUxDSnlaVzF2ZG1WRVFrVjJaVzUwVEdsemRHVnVaWElpTENKdlptWWlMQ0prYVhOd1lYUmphRVJDUlhabGJuUWlMQ0psZG1WdWRFOWlhbVZqZENJc0ltVnRhWFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVhkQ1FTeEpRVUZKUVN4alFVRmpReXhSUVVGUkxIVkRRVUZTTEVOQlFXeENPenRCUVVWQlF5eFpRVUZaUXl4cFFrRkJXaXhIUVVGblEwTXNSMEZCUjBNc1MwRkJTQ3hEUVVGVE8wRkJRM0pEUXl4VlFVRk5MQ3RDUVVRclFqczdRVUZIY2tORExHZENRVUZaTzBGQlExSTdRVUZEUVVNc1kwRkJUVHRCUVVOR1F5eGxRVVJGTEdsQ1FVTkxPMEZCUTBnc2RVSkJRVThzU1VGQlVEdEJRVU5JTzBGQlNFTTdRVUZHUlN4TFFVaDVRanM3UVVGWmNrTkRMRkZCV25GRExHdENRVmszUWp0QlFVTktMR0ZCUVV0RExGbEJRVXdzUjBGQmIwSXNTVUZCU1Znc1YwRkJTaXhGUVVGd1FqdEJRVU5JTEV0QlpHOURPMEZCWjBKeVExa3NhMEpCYUVKeFF5d3dRa0ZuUW5KQ1F5eFhRV2hDY1VJc1JVRm5RbEk3UVVGRGVrSXNZVUZCUzBZc1dVRkJUQ3hIUVVGdlFrVXNWMEZCY0VJN1FVRkRTQ3hMUVd4Q2IwTTdRVUZ2UW5KRFF5eHJRa0Z3UW5GRExEUkNRVzlDYmtJN1FVRkRaQ3haUVVGSlF5eGhRVUZoTEV0QlFVdERMRk5CUVV3c1EwRkJaVU1zVDBGQmFFTTdRVUZEUVN4WlFVRkpMRU5CUVVOR0xGVkJRVXdzUlVGQmFVSTdRVUZEWWl4dFFrRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlJVUXNXVUZCU1Vjc1NVRkJTanRCUVVOQkxHVkJRVTlJTEZWQlFWQXNSVUZEUVR0QlFVTkpSeXh0UWtGQlQwZ3NWVUZCVUR0QlFVTkJRU3g1UWtGQllVRXNWMEZCVjBNc1UwRkJXQ3hEUVVGeFFrTXNUMEZCYkVNN1FVRkRTRHRCUVVORUxHVkJRVTlETEV0QlFVdEdMRk5CUVV3c1EwRkJaVWNzVlVGQlppeEZRVUZRTzBGQlEwZ3NTMEZxUTI5RE8wRkJiVU55UTBNc2MwSkJia054UXl3NFFrRnRRMnBDUXl4SFFXNURhVUlzUlVGdFExbzdRVUZEY2tJc1dVRkJTVWdzVDBGQlR5eExRVUZMUml4VFFVRk1MRU5CUVdWRExFOUJRVEZDTzBGQlEwRXNXVUZCU1N4RFFVRkRReXhKUVVGTUxFVkJRMEU3UVVGRFNTeHRRa0ZCVDBjc1IwRkJVRHRCUVVOSU8wRkJRMFJJTEdGQlFVdEpMR2xDUVVGTU96dEJRVVZCTEZsQlFVbERMR05CUVdOTUxFdEJRVXROTEZsQlFYWkNPMEZCUTBFc1dVRkJTVU1zVTBGQlUzSkNMRWRCUVVkelFpeEZRVUZJTEVOQlFVMHNRMEZCVGl4RlFVRlJMRU5CUVZJc1EwRkJZanRCUVVOQlJDeGxRVUZQUlN4RFFVRlFMRWRCUVZkT0xFbEJRVWxOTEVOQlFVb3NSMEZCVVVvc1dVRkJXVXNzUjBGQmNFSXNSMEZCTUVKUUxFbEJRVWxSTEVOQlFVb3NSMEZCVVU0c1dVRkJXVThzUjBGQk9VTXNSMEZCYjBSUUxGbEJRVmxSTEVkQlFUTkZPMEZCUTBGT0xHVkJRVTlKTEVOQlFWQXNSMEZCVjFJc1NVRkJTVTBzUTBGQlNpeEhRVUZSU2l4WlFVRlpVeXhIUVVGd1FpeEhRVUV3UWxnc1NVRkJTVkVzUTBGQlNpeEhRVUZSVGl4WlFVRlpWU3hIUVVFNVF5eEhRVUZ2UkZZc1dVRkJXVmNzUjBGQk0wVTdRVUZEUVN4bFFVRlBWQ3hOUVVGUU8wRkJRMGdzUzBGb1JHOURPMEZCYTBSeVExVXNkVUpCYkVSeFF5d3JRa0ZyUkdoQ1F5eExRV3hFWjBJc1JVRnJSRlE3UVVGRGVFSXNXVUZCU1Znc1UwRkJVeXhMUVVGTFRDeHJRa0ZCVEN4RFFVRjNRbWRDTEV0QlFYaENMRU5CUVdJN1FVRkRRU3haUVVGSlF5eFRRVUZUTEV0QlFVdERMRmRCUVV3c1JVRkJZanRCUVVOQkxGbEJRVWxETEZkQlFWZEdMRTlCUVU5R0xHMUNRVUZRTEVOQlFUSkNWaXhOUVVFelFpeERRVUZtTzBGQlEwRXNaVUZCVDJNc1VVRkJVRHRCUVVOSUxFdEJka1J2UXp0QlFYbEVja05FTEdWQmVrUnhReXg1UWtGNVJIUkNPMEZCUTFnc1dVRkJTVVVzWTBGQll5eExRVUZMTVVJc1kwRkJUQ3hGUVVGc1FqdEJRVU5CTEdWQlFVOHdRaXhsUVVGbFFTeFpRVUZaUXl4UFFVRnNRenRCUVVOSUxFdEJOVVJ2UXpzN08wRkJPRVJ5UXp0QlFVTkJPMEZCUTBGRExGVkJhRVZ4UXl4clFrRm5SVGRDUXl4UlFXaEZOa0lzUlVGblJXNUNPMEZCUTJRc1lVRkJTek5DTEZOQlFVd3NSMEZCYVVJeVFpeFJRVUZxUWp0QlFVTklMRXRCYkVWdlF6dEJRVzlGY2tORExGZEJjRVZ4UXl4eFFrRnZSVEZDTzBGQlExQXNZVUZCU3pWQ0xGTkJRVXdzUjBGQmFVSXNTVUZCYWtJN1FVRkRTQ3hMUVhSRmIwTTdRVUYzUlhKRE5rSXNXVUY0UlhGRExITkNRWGRGZWtJc1EwRkZXQ3hEUVRGRmIwTTdRVUUwUlhKRFF5eHhRa0UxUlhGRExEWkNRVFJGYWtKRExFVkJOVVZwUWl4RlFUUkZZanRCUVVOd1FpeGhRVUZMUXl4alFVRk1MRWRCUVhOQ0xFTkJRVU1zUTBGQlEwUXNSVUZCZUVJN1FVRkRTQ3hMUVRsRmIwTTdRVUZuUm5KRFJTeHpRa0ZvUm5GRExEaENRV2RHYWtKRExFbEJhRVpwUWl4RlFXZEdXRHRCUVVOMFFpeGxRVUZQTEV0QlFVdDJReXhaUVVGTUxFTkJRV3RDZDBNc1owSkJRV3hDTEVOQlFXMURSQ3hKUVVGdVF5eERRVUZRTzBGQlEwZ3NTMEZzUm05RE8wRkJiMFp5UTBVc2MwSkJjRVp4UXl3NFFrRnZSbXBDUml4SlFYQkdhVUlzUlVGdlJsaEhMRkZCY0VaWExFVkJiMFpFUXl4TlFYQkdReXhGUVc5R1R6dEJRVU40UXl4aFFVRkxNME1zV1VGQlRDeERRVUZyUW05RExFVkJRV3hDTEVOQlFYRkNSeXhKUVVGeVFpeEZRVUV5UWtjc1VVRkJNMElzUlVGQmNVTkRMRTFCUVhKRE8wRkJRMGdzUzBGMFJtOURPMEZCZDBaeVEwTXNlVUpCZUVaeFF5eHBRMEYzUm1STUxFbEJlRVpqTEVWQmQwWlNSeXhSUVhoR1VTeEZRWGRHUlVNc1RVRjRSa1lzUlVGM1JsVTdRVUZETTBNc1lVRkJTek5ETEZsQlFVd3NRMEZCYTBJMlF5eEhRVUZzUWl4RFFVRnpRazRzU1VGQmRFSXNSVUZCTkVKSExGRkJRVFZDTEVWQlFYTkRReXhOUVVGMFF6dEJRVU5JTEV0Qk1VWnZRenRCUVRSR2NrTkhMRzFDUVRWR2NVTXNNa0pCTkVadVFsQXNTVUUxUm0xQ0xFVkJORVppVVN4WFFUVkdZU3hGUVRSR1FUdEJRVU5xUXl4aFFVRkxMME1zV1VGQlRDeERRVUZyUW1kRUxFbEJRV3hDTEVOQlFYVkNWQ3hKUVVGMlFpeEZRVUUyUWxFc1YwRkJOMEk3UVVGRFNEdEJRVU5FT3p0QlFTOUdjVU1zUTBGQlZDeERRVUZvUXlJc0ltWnBiR1VpT2lKRFEwRnliV0YwZFhKbFJHbHpjR3hoZVM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2JpQjBieUIxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJ4bGJIa2dkRzhnWkdWMlpXeHZjQ0JuWVcxbGN5QnZiaUI1YjNWeUlIUmhjbWRsZENCd2JHRjBabTl5YlhNdUlGbHZkU0J6YUdGc2JGeHVJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2JpQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hHNGdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1YkdWMElFVjJaVzUwVkdGeVoyVjBJRDBnY21WeGRXbHlaU2duTGk0dkxpNHZZMjlqYjNNeVpDOWpiM0psTDJWMlpXNTBMMlYyWlc1MExYUmhjbWRsZENjcE8xeHVYRzVrY21GbmIyNUNiMjVsY3k1RFEwRnliV0YwZFhKbFJHbHpjR3hoZVNBOUlHTmpMa05zWVhOektIdGNiaUFnSUNCdVlXMWxPaUFuWkhKaFoyOXVRbTl1WlhNdVEwTkJjbTFoZEhWeVpVUnBjM0JzWVhrbkxGeHVYRzRnSUNBZ2NISnZjR1Z5ZEdsbGN6b2dlMXh1SUNBZ0lDQWdJQ0F2THlCaFpHRndkQ0J2YkdRZ1lYQnBYRzRnSUNBZ0lDQWdJRzV2WkdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkbGRDQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOMGIzSWdLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlsZG1WdWRGUmhjbWRsZENBOUlHNWxkeUJGZG1WdWRGUmhjbWRsZENncE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCelpYUkZkbVZ1ZEZSaGNtZGxkQ0FvWlhabGJuUlVZWEpuWlhRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpYWmxiblJVWVhKblpYUWdQU0JsZG1WdWRGUmhjbWRsZER0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWjJWMFVtOXZkRVJwYzNCc1lYa2dLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjR0Z5Wlc1MFUyeHZkQ0E5SUhSb2FYTXVYMkZ5YldGMGRYSmxMbDl3WVhKbGJuUTdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNHRnlaVzUwVTJ4dmRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhaaGNpQnpiRzkwTzF4dUlDQWdJQ0FnSUNCM2FHbHNaU0FvY0dGeVpXNTBVMnh2ZENsY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJ4dmRDQTlJSEJoY21WdWRGTnNiM1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEpsYm5SVGJHOTBJRDBnY0dGeVpXNTBVMnh2ZEM1ZllYSnRZWFIxY21VdVgzQmhjbVZ1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyeHZkQzVmWVhKdFlYUjFjbVV1WjJWMFJHbHpjR3hoZVNncE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyNTJaWEowVkc5U2IyOTBVM0JoWTJVZ0tIQnZjeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdjMnh2ZENBOUlIUm9hWE11WDJGeWJXRjBkWEpsTGw5d1lYSmxiblE3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hjMnh2ZENsY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ2Y3p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnpiRzkwTG5Wd1pHRjBaVmR2Y214a1RXRjBjbWw0S0NrN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUhkdmNteGtUV0YwY21sNElEMGdjMnh2ZEM1ZmQyOXliR1JOWVhSeWFYZzdYRzRnSUNBZ0lDQWdJR3hsZENCdVpYZFFiM01nUFNCall5NTJNaWd3TERBcE8xeHVJQ0FnSUNBZ0lDQnVaWGRRYjNNdWVDQTlJSEJ2Y3k1NElDb2dkMjl5YkdSTllYUnlhWGd1YlRBd0lDc2djRzl6TG5rZ0tpQjNiM0pzWkUxaGRISnBlQzV0TURRZ0t5QjNiM0pzWkUxaGRISnBlQzV0TVRJN1hHNGdJQ0FnSUNBZ0lHNWxkMUJ2Y3k1NUlEMGdjRzl6TG5nZ0tpQjNiM0pzWkUxaGRISnBlQzV0TURFZ0t5QndiM011ZVNBcUlIZHZjbXhrVFdGMGNtbDRMbTB3TlNBcklIZHZjbXhrVFdGMGNtbDRMbTB4TXp0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGQxQnZjenRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl1ZG1WeWRGUnZWMjl5YkdSVGNHRmpaU0FvY0c5cGJuUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHNWxkMUJ2Y3lBOUlIUm9hWE11WTI5dWRtVnlkRlJ2VW05dmRGTndZV05sS0hCdmFXNTBLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHTmpUbTlrWlNBOUlIUm9hWE11WjJWMFVtOXZkRTV2WkdVb0tUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdacGJtRnNVRzl6SUQwZ1kyTk9iMlJsTG1OdmJuWmxjblJVYjFkdmNteGtVM0JoWTJVb2JtVjNVRzl6S1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdacGJtRnNVRzl6TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JuWlhSU2IyOTBUbTlrWlNBb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCeWIyOTBSR2x6Y0d4aGVTQTlJSFJvYVhNdVoyVjBVbTl2ZEVScGMzQnNZWGtvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKdmIzUkVhWE53YkdGNUlDWW1JSEp2YjNSRWFYTndiR0Y1TGw5alkwNXZaR1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1SUNBZ0lDOHZJR1J5WVdkdmJtSnZibVZ6SUdGd2FWeHVJQ0FnSUdSaVNXNXBkQ0FvWVhKdFlYUjFjbVVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWVhKdFlYUjFjbVVnUFNCaGNtMWhkSFZ5WlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWkdKRGJHVmhjaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJGeWJXRjBkWEpsSUQwZ2JuVnNiRHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdaR0pWY0dSaGRHVWdLQ2tnZTF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWVdSMllXNWpaVlJwYldWQ2VWTmxiR1lnSUNodmJpa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTm9iM1ZzWkVGa2RtRnVZMlZrSUQwZ0lTRnZianRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdhR0Z6UkVKRmRtVnVkRXhwYzNSbGJtVnlJQ2gwZVhCbEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5bGRtVnVkRlJoY21kbGRDNW9ZWE5GZG1WdWRFeHBjM1JsYm1WeUtIUjVjR1VwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JoWkdSRVFrVjJaVzUwVEdsemRHVnVaWElnS0hSNWNHVXNJR3hwYzNSbGJtVnlMQ0IwWVhKblpYUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaWFpsYm5SVVlYSm5aWFF1YjI0b2RIbHdaU3dnYkdsemRHVnVaWElzSUhSaGNtZGxkQ2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEpsYlc5MlpVUkNSWFpsYm5STWFYTjBaVzVsY2lBb2RIbHdaU3dnYkdsemRHVnVaWElzSUhSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlsZG1WdWRGUmhjbWRsZEM1dlptWW9kSGx3WlN3Z2JHbHpkR1Z1WlhJc0lIUmhjbWRsZENrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdScGMzQmhkR05vUkVKRmRtVnVkQ0FnS0hSNWNHVXNJR1YyWlc1MFQySnFaV04wS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJWMlpXNTBWR0Z5WjJWMExtVnRhWFFvZEhsd1pTd2daWFpsYm5SUFltcGxZM1FwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNibHh1ZlNrN1hHNGlYWDA9Il19