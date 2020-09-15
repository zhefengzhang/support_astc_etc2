(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/polyfill/string.js';
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
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (searchString, position) {
                position = position || 0;
                return this.lastIndexOf(searchString, position) === position;
            };
        }
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function (searchString, position) {
                if (typeof position === 'undefined' || position > this.length) {
                    position = this.length;
                }
                position -= searchString.length;
                var lastIndex = this.indexOf(searchString, position);
                return lastIndex !== -1 && lastIndex === position;
            };
        }
        if (!String.prototype.trimLeft) {
            String.prototype.trimLeft = function () {
                return this.replace(/^\s+/, '');
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9wb2x5ZmlsbC9zdHJpbmcuanMiXSwibmFtZXMiOlsicHJvdG90eXBlIiwic3RhcnRzV2l0aCIsInNlYXJjaFN0cmluZyIsInBvc2l0aW9uIiwibGFzdEluZGV4T2YiLCJTdHJpbmciLCJlbmRzV2l0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsImluZGV4T2YiLCJ0cmltTGVmdCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7SUFBWUEsSUFBVUMsT0FBQUEsR0FBWSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBdEJEO0lBQ1IsSUFBaUJDLFFBQUFBLEdBQWEsT0FBQSxHQUFVQyxNQUFWLEdBQVVBLEVBQUFBLE9BQUFBLEVBQWNDLEVBQWRELEVBQXhDO0lBQ2VDLElBQUFBLFVBQUFBLEdBQVgsK0JBQVdBO0lBQ0NDLElBQUFBLFNBQUFBLEdBQVlGLE9BQUFBLEdBQWNDLFVBQS9CLE9BQStCQSxFQUFjQTtBQUFBQSxRQUZ4RCxPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FFd0RBO0FBQUFBLEtBQTVCRCxHQUUvQixVQUFBLE9BQUEsRUFBQTtBQUFBLDhEQUFBO0FBQUEsS0FGbUJFO0lBS2hCLFNBQUEsUUFBQSxDQUE0QixPQUE1QixFQUFzQ0YsT0FBdEMsRUFBb0RDLE1BQXBELEVBQTRCO0FBQUEsUUFDYkEsSUFBUCxDQUFBLE9BQU9BLEVBQWE7QUFBQSxZQUFBLGlCQUFBLENBQWVBLGNBQWYsQ0FBdUMsVUFBdkMsRUFBdUMsTUFBdkMsRUFBQTtBQUFBLFNBREE7QUFBQTtRQVJoQyxJQUFJLENBQUNFLE1BQUFBLENBQU9MLFNBQVBLLENBQWlCSixVQUF0QixFQUFrQztBQUFBLFlBQzlCSSxNQUFBQSxDQUFPTCxTQUFQSyxDQUFpQkosVUFBakJJLEdBQThCLFVBQVVILFlBQVYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUEsZ0JBQzVEQSxRQUFBQSxHQUFXQSxRQUFBQSxJQUFZLENBQXZCQSxDQUQ0RDtBQUFBLGdCQUU1RCxPQUFPLEtBQUtDLFdBQUwsQ0FBaUJGLFlBQWpCLEVBQStCQyxRQUEvQixNQUE2Q0EsUUFBcEQsQ0FGNEQ7QUFBQSxhQUFoRUUsQ0FEOEI7QUFBQTtRQU9sQyxJQUFJLENBQUNBLE1BQUFBLENBQU9MLFNBQVBLLENBQWlCQyxRQUF0QixFQUFnQztBQUFBLFlBQzVCRCxNQUFBQSxDQUFPTCxTQUFQSyxDQUFpQkMsUUFBakJELEdBQTRCLFVBQVVILFlBQVYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUEsZ0JBQzFELElBQUksT0FBT0EsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsUUFBQUEsR0FBVyxLQUFLSSxNQUF2RCxFQUErRDtBQUFBLG9CQUMzREosUUFBQUEsR0FBVyxLQUFLSSxNQUFoQkosQ0FEMkQ7QUFBQSxpQkFETDtBQUFBLGdCQUkxREEsUUFBQUEsSUFBWUQsWUFBQUEsQ0FBYUssTUFBekJKLENBSjBEO0FBQUEsZ0JBSzFELElBQUlLLFNBQUFBLEdBQVksS0FBS0MsT0FBTCxDQUFhUCxZQUFiLEVBQTJCQyxRQUEzQixDQUFoQixDQUwwRDtBQUFBLGdCQU0xRCxPQUFPSyxTQUFBQSxLQUFjLENBQUMsQ0FBZkEsSUFBb0JBLFNBQUFBLEtBQWNMLFFBQXpDLENBTjBEO0FBQUEsYUFBOURFLENBRDRCO0FBQUE7UUFXaEMsSUFBSSxDQUFDQSxNQUFBQSxDQUFPTCxTQUFQSyxDQUFpQkssUUFBdEIsRUFBZ0M7QUFBQSxZQUM1QkwsTUFBQUEsQ0FBT0wsU0FBUEssQ0FBaUJLLFFBQWpCTCxHQUE0QixZQUFZO0FBQUEsZ0JBQ3BDLE9BQU8sS0FBS00sT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBUCxDQURvQztBQUFBLGFBQXhDTixDQUQ0QjtBQUFBLFNBVkE7QUFBQTtJQUd2QixJQUFBLE9BQUEsRUFBQTtBQUFBLFFBQ1dILFFBQUFBLENBQWFLLFFBQUFBLENBQXpCLE9BQVlMLEVBQVosU0FBWUEsRUFBWixRQUFZQSxFQURYO0FBQUEsS0FBQSxNQUdNTTtBQUFBQSxRQU5YLGlCQUFBLENBQUEsa0JBQUEsQ0FBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLFlBUUgsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFSRztBQUFBLFNBQUEsRUFNV0E7QUFBQUEiLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IDA7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pID09PSBwb3NpdGlvbjtcbiAgICB9O1xufVxuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgcG9zaXRpb24gPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xuICAgIH07XG59XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS50cmltTGVmdCkge1xuICAgIFN0cmluZy5wcm90b3R5cGUudHJpbUxlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrLywgJycpO1xuICAgIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCAwO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PT0gcG9zaXRpb247XG4gICAgfTtcbn1cblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICd1bmRlZmluZWQnIHx8IHBvc2l0aW9uID4gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgICB9O1xufVxuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUudHJpbUxlZnQpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnRyaW1MZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzKy8sICcnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OMGNtbHVaeTVxY3lKZExDSnVZVzFsY3lJNld5SlRkSEpwYm1jaUxDSndjbTkwYjNSNWNHVWlMQ0p6ZEdGeWRITlhhWFJvSWl3aWMyVmhjbU5vVTNSeWFXNW5JaXdpY0c5emFYUnBiMjRpTENKc1lYTjBTVzVrWlhoUFppSXNJbVZ1WkhOWGFYUm9JaXdpYkdWdVozUm9JaXdpYkdGemRFbHVaR1Y0SWl3aWFXNWtaWGhQWmlJc0luUnlhVzFNWldaMElpd2ljbVZ3YkdGalpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hKUVVGSkxFTkJRVU5CTEU5QlFVOURMRk5CUVZBc1EwRkJhVUpETEZWQlFYUkNMRVZCUVd0RE8wRkJRemxDUml4WFFVRlBReXhUUVVGUUxFTkJRV2xDUXl4VlFVRnFRaXhIUVVFNFFpeFZRVUZWUXl4WlFVRldMRVZCUVhkQ1F5eFJRVUY0UWl4RlFVRnJRenRCUVVNMVJFRXNiVUpCUVZkQkxGbEJRVmtzUTBGQmRrSTdRVUZEUVN4bFFVRlBMRXRCUVV0RExGZEJRVXdzUTBGQmFVSkdMRmxCUVdwQ0xFVkJRU3RDUXl4UlFVRXZRaXhOUVVFMlEwRXNVVUZCY0VRN1FVRkRTQ3hMUVVoRU8wRkJTVWc3TzBGQlJVUXNTVUZCU1N4RFFVRkRTaXhQUVVGUFF5eFRRVUZRTEVOQlFXbENTeXhSUVVGMFFpeEZRVUZuUXp0QlFVTTFRazRzVjBGQlQwTXNVMEZCVUN4RFFVRnBRa3NzVVVGQmFrSXNSMEZCTkVJc1ZVRkJWVWdzV1VGQlZpeEZRVUYzUWtNc1VVRkJlRUlzUlVGQmEwTTdRVUZETVVRc1dVRkJTU3hQUVVGUFFTeFJRVUZRTEV0QlFXOUNMRmRCUVhCQ0xFbEJRVzFEUVN4WFFVRlhMRXRCUVV0SExFMUJRWFpFTEVWQlFTdEVPMEZCUXpORVNDeDFRa0ZCVnl4TFFVRkxSeXhOUVVGb1FqdEJRVU5JTzBGQlEwUklMRzlDUVVGWlJDeGhRVUZoU1N4TlFVRjZRanRCUVVOQkxGbEJRVWxETEZsQlFWa3NTMEZCUzBNc1QwRkJUQ3hEUVVGaFRpeFpRVUZpTEVWQlFUSkNReXhSUVVFelFpeERRVUZvUWp0QlFVTkJMR1ZCUVU5SkxHTkJRV01zUTBGQlF5eERRVUZtTEVsQlFXOUNRU3hqUVVGalNpeFJRVUY2UXp0QlFVTklMRXRCVUVRN1FVRlJTRHM3UVVGRlJDeEpRVUZKTEVOQlFVTktMRTlCUVU5RExGTkJRVkFzUTBGQmFVSlRMRkZCUVhSQ0xFVkJRV2RETzBGQlF6VkNWaXhYUVVGUFF5eFRRVUZRTEVOQlFXbENVeXhSUVVGcVFpeEhRVUUwUWl4WlFVRlpPMEZCUTNCRExHVkJRVThzUzBGQlMwTXNUMEZCVEN4RFFVRmhMRTFCUVdJc1JVRkJjVUlzUlVGQmNrSXNRMEZCVUR0QlFVTklMRXRCUmtRN1FVRkhTQ0lzSW1acGJHVWlPaUp6ZEhKcGJtY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcFppQW9JVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjM1JoY25SelYybDBhQ2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjM1JoY25SelYybDBhQ0E5SUdaMWJtTjBhVzl1SUNoelpXRnlZMmhUZEhKcGJtY3NJSEJ2YzJsMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1SUQwZ2NHOXphWFJwYjI0Z2ZId2dNRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHRnpkRWx1WkdWNFQyWW9jMlZoY21Ob1UzUnlhVzVuTENCd2IzTnBkR2x2YmlrZ1BUMDlJSEJ2YzJsMGFXOXVPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzVsYm1SelYybDBhQ2tnZTF4dUlDQWdJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVaVzVrYzFkcGRHZ2dQU0JtZFc1amRHbHZiaUFvYzJWaGNtTm9VM1J5YVc1bkxDQndiM05wZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhCdmMybDBhVzl1SUQwOVBTQW5kVzVrWldacGJtVmtKeUI4ZkNCd2IzTnBkR2x2YmlBK0lIUm9hWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM05wZEdsdmJpQTlJSFJvYVhNdWJHVnVaM1JvTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dUlDMDlJSE5sWVhKamFGTjBjbWx1Wnk1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUhaaGNpQnNZWE4wU1c1a1pYZ2dQU0IwYUdsekxtbHVaR1Y0VDJZb2MyVmhjbU5vVTNSeWFXNW5MQ0J3YjNOcGRHbHZiaWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzWVhOMFNXNWtaWGdnSVQwOUlDMHhJQ1ltSUd4aGMzUkpibVJsZUNBOVBUMGdjRzl6YVhScGIyNDdYRzRnSUNBZ2ZUdGNibjFjYmx4dWFXWWdLQ0ZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMblJ5YVcxTVpXWjBLU0I3WEc0Z0lDQWdVM1J5YVc1bkxuQnliM1J2ZEhsd1pTNTBjbWx0VEdWbWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZ3YkdGalpTZ3ZYbHhjY3lzdkxDQW5KeWs3WEc0Z0lDQWdmVHRjYm4xY2JpSmRmUT09Il19