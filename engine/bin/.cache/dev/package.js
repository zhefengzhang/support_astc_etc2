(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/package.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                module.exports = {
            'name': 'cocos-creator-js',
            'version': '2.1.3',
            'description': 'Cocos2d-html5 is a cross-platform 2D game engine written in Javascript, based on Cocos2d-X and licensed under MIT. It incorporates the same high level api as \u201CCocos2d JS-binding engine\u201D and compatible with Cocos2d-X. It currently supports canvas and WebGL renderering.',
            'homepage': 'http://www.cocos2d-x.org',
            'authors': ['AUTHORS.txt'],
            'license': 'MIT',
            'scripts': {
                'test': 'gulp test-in-ci',
                'build-chunks': 'node ./cocos2d/renderer/build/build-chunks',
                'build-mapping': 'node ./cocos2d/renderer/build/build-mapping'
            },
            'devDependencies': {
                'async': '1.5.2',
                'babel-plugin-add-module-exports': '^0.2.1',
                'babel-plugin-parser-opts': '1.0.1',
                'babel-plugin-transform-class-properties': '6.22.0',
                'babel-plugin-transform-decorators-legacy': '^1.3.4',
                'babel-plugin-transform-es2015-block-scoping': '6.22.0',
                'babel-plugin-transform-es2015-shorthand-properties': '6.22.0',
                'babel-plugin-transform-es2015-template-literals': '6.22.0',
                'babel-preset-env': '^1.2.2',
                'babelify': '7.3.0',
                'browserify': '13.0.0',
                'chalk': '1.1.0',
                'del': '3.0.0',
                'event-stream': '3.3.2',
                'fire-fs': '0.2.1',
                'gulp': '^3.9.1',
                'gulp-babel': '6.1.2',
                'gulp-cached': '1.1.0',
                'gulp-concat': '2.6.0',
                'gulp-fb': '0.5.1',
                'gulp-header': '1.2.2',
                'gulp-jshint': '1.11.2',
                'gulp-mirror': '0.4.0',
                'gulp-optimize-js': '^1.1.0',
                'gulp-plumber': '0.6.6',
                'gulp-rename': '1.2.2',
                'gulp-shell': '0.4.1',
                'gulp-size': '2.1.0',
                'gulp-sourcemaps': '1.5.2',
                'gulp-uglify': '^3.0.0',
                'gulp-util': '3.0.6',
                'js-sha1': '^0.6.0',
                'jshint-stylish': '2.1.0',
                'multipipe': '0.3.0',
                'persistify': '^1.1.1',
                'aliasify': '^2.1.0',
                'require-dir': '0.3.0',
                'uglify-es': '3.3.7',
                'vinyl': '1.1.0',
                'vinyl-buffer': '1.0.0',
                'vinyl-source-stream': '1.0.0',
                'watchify': '^3.7.0',
                'glsl-tokenizer': '^2.1.5',
                'gulp-qunit': '^2.0.1',
                'rollup': '^0.66.6',
                'rollup-plugin-node-resolve': '^3.4.0'
            }
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9wYWNrYWdlLmpzb24iXSwibmFtZXMiOlsibm9kZUVudiIsInJlcXVpcmUiLCJwcm9jZXNzIiwiX19tb2R1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19maWxlbmFtZSIsIl9fcmVxdWlyZSIsInJlcXVlc3QiLCJfX3F1aWNrX2NvbXBpbGVfXyIsIl9fZGVmaW5lIiwicmVnaXN0ZXJNb2R1bGUiLCJyZWdpc3Rlck1vZHVsZUZ1bmMiXSwibWFwcGluZ3MiOiJBQUNnQixDQUFDLFlBQVc7QUFBQSxJQUNSLElBQUlBLE9BQUEsR0FBVSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkUsQ0FEUTtBQUFBLElBRVIsSUFBSUMsUUFBQSxHQUFXSCxPQUFBLEdBQVVJLE1BQVYsR0FBbUIsRUFBQ0MsT0FBQSxFQUFRLEVBQVQsRUFBbEMsQ0FGUTtBQUFBLElBR1IsSUFBSUMsVUFBQSxHQUFhLHVCQUFqQixDQUhRO0FBQUEsSUFJUixJQUFJQyxTQUFBLEdBQVlQLE9BQUEsR0FBVSxVQUFVUSxPQUFWLEVBQW1CO0FBQUEsUUFDekMsT0FBT1AsT0FBQSxDQUFRTyxPQUFSLENBQVAsQ0FEeUM7QUFBQSxLQUE3QixHQUVaLFVBQVVBLE9BQVYsRUFBbUI7QUFBQSxRQUNuQixPQUFPQyxpQkFBQSxDQUFrQlIsT0FBbEIsQ0FBMEJPLE9BQTFCLEVBQW1DRixVQUFuQyxDQUFQLENBRG1CO0FBQUEsS0FGdkIsQ0FKUTtBQUFBLElBU1IsU0FBU0ksUUFBVCxDQUFtQkwsT0FBbkIsRUFBNEJKLE9BQTVCLEVBQXFDRyxNQUFyQyxFQUE2QztBQUFBLFFBQ3pDLElBQUksQ0FBQ0osT0FBTCxFQUFjO0FBQUEsWUFBQ1MsaUJBQUEsQ0FBa0JFLGNBQWxCLENBQWlDTCxVQUFqQyxFQUE2Q0YsTUFBN0MsRUFBRDtBQUFBLFNBRDJCO0FBQUEsUUFWakUsUUFBQUEsTUFBQSxDQUFPQyxPQUFQLEdBQWlCO0FBQUEsWUFDZixRQUFRLGtCQURPO0FBQUEsWUFFZixXQUFXLE9BRkk7QUFBQSxZQUdmLGVBQWUsd1JBSEE7QUFBQSxZQUlmLFlBQVksMEJBSkc7QUFBQSxZQUtmLFdBQVcsQ0FDVCxhQURTLENBTEk7QUFBQSxZQVFmLFdBQVcsS0FSSTtBQUFBLFlBU2YsV0FBVztBQUFBLGdCQUNULFFBQVEsaUJBREM7QUFBQSxnQkFFVCxnQkFBZ0IsNENBRlA7QUFBQSxnQkFHVCxpQkFBaUIsNkNBSFI7QUFBQSxhQVRJO0FBQUEsWUFjZixtQkFBbUI7QUFBQSxnQkFDakIsU0FBUyxPQURRO0FBQUEsZ0JBRWpCLG1DQUFtQyxRQUZsQjtBQUFBLGdCQUdqQiw0QkFBNEIsT0FIWDtBQUFBLGdCQUlqQiwyQ0FBMkMsUUFKMUI7QUFBQSxnQkFLakIsNENBQTRDLFFBTDNCO0FBQUEsZ0JBTWpCLCtDQUErQyxRQU45QjtBQUFBLGdCQU9qQixzREFBc0QsUUFQckM7QUFBQSxnQkFRakIsbURBQW1ELFFBUmxDO0FBQUEsZ0JBU2pCLG9CQUFvQixRQVRIO0FBQUEsZ0JBVWpCLFlBQVksT0FWSztBQUFBLGdCQVdqQixjQUFjLFFBWEc7QUFBQSxnQkFZakIsU0FBUyxPQVpRO0FBQUEsZ0JBYWpCLE9BQU8sT0FiVTtBQUFBLGdCQWNqQixnQkFBZ0IsT0FkQztBQUFBLGdCQWVqQixXQUFXLE9BZk07QUFBQSxnQkFnQmpCLFFBQVEsUUFoQlM7QUFBQSxnQkFpQmpCLGNBQWMsT0FqQkc7QUFBQSxnQkFrQmpCLGVBQWUsT0FsQkU7QUFBQSxnQkFtQmpCLGVBQWUsT0FuQkU7QUFBQSxnQkFvQmpCLFdBQVcsT0FwQk07QUFBQSxnQkFxQmpCLGVBQWUsT0FyQkU7QUFBQSxnQkFzQmpCLGVBQWUsUUF0QkU7QUFBQSxnQkF1QmpCLGVBQWUsT0F2QkU7QUFBQSxnQkF3QmpCLG9CQUFvQixRQXhCSDtBQUFBLGdCQXlCakIsZ0JBQWdCLE9BekJDO0FBQUEsZ0JBMEJqQixlQUFlLE9BMUJFO0FBQUEsZ0JBMkJqQixjQUFjLE9BM0JHO0FBQUEsZ0JBNEJqQixhQUFhLE9BNUJJO0FBQUEsZ0JBNkJqQixtQkFBbUIsT0E3QkY7QUFBQSxnQkE4QmpCLGVBQWUsUUE5QkU7QUFBQSxnQkErQmpCLGFBQWEsT0EvQkk7QUFBQSxnQkFnQ2pCLFdBQVcsUUFoQ007QUFBQSxnQkFpQ2pCLGtCQUFrQixPQWpDRDtBQUFBLGdCQWtDakIsYUFBYSxPQWxDSTtBQUFBLGdCQW1DakIsY0FBYyxRQW5DRztBQUFBLGdCQW9DakIsWUFBWSxRQXBDSztBQUFBLGdCQXFDakIsZUFBZSxPQXJDRTtBQUFBLGdCQXNDakIsYUFBYSxPQXRDSTtBQUFBLGdCQXVDakIsU0FBUyxPQXZDUTtBQUFBLGdCQXdDakIsZ0JBQWdCLE9BeENDO0FBQUEsZ0JBeUNqQix1QkFBdUIsT0F6Q047QUFBQSxnQkEwQ2pCLFlBQVksUUExQ0s7QUFBQSxnQkEyQ2pCLGtCQUFrQixRQTNDRDtBQUFBLGdCQTRDakIsY0FBYyxRQTVDRztBQUFBLGdCQTZDakIsVUFBVSxTQTdDTztBQUFBLGdCQThDakIsOEJBQThCLFFBOUNiO0FBQUEsYUFkSjtBQUFBLFNBQWpCLENBVWlFO0FBQUEsS0FUckM7QUFBQSxJQVlSLElBQUlMLE9BQUosRUFBYTtBQUFBLFFBQ1RVLFFBQUEsQ0FBU1AsUUFBQSxDQUFTRSxPQUFsQixFQUEyQkUsU0FBM0IsRUFBc0NKLFFBQXRDLEVBRFM7QUFBQSxLQUFiLE1BR0s7QUFBQSxRQUNETSxpQkFBQSxDQUFrQkcsa0JBQWxCLENBQXFDTixVQUFyQyxFQUFpRCxZQUFZO0FBQUEsWUFDekRJLFFBQUEsQ0FBU1AsUUFBQSxDQUFTRSxPQUFsQixFQUEyQkUsU0FBM0IsRUFBc0NKLFFBQXRDLEVBRHlEO0FBQUEsU0FBN0QsRUFEQztBQUFBLEtBZkc7QUFBQSxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmFtZVwiOiBcImNvY29zLWNyZWF0b3ItanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvY29zMmQtaHRtbDUgaXMgYSBjcm9zcy1wbGF0Zm9ybSAyRCBnYW1lIGVuZ2luZSB3cml0dGVuIGluIEphdmFzY3JpcHQsIGJhc2VkIG9uIENvY29zMmQtWCBhbmQgbGljZW5zZWQgdW5kZXIgTUlULiBJdCBpbmNvcnBvcmF0ZXMgdGhlIHNhbWUgaGlnaCBsZXZlbCBhcGkgYXMg4oCcQ29jb3MyZCBKUy1iaW5kaW5nIGVuZ2luZeKAnSBhbmQgY29tcGF0aWJsZSB3aXRoIENvY29zMmQtWC4gSXQgY3VycmVudGx5IHN1cHBvcnRzIGNhbnZhcyBhbmQgV2ViR0wgcmVuZGVyZXJpbmcuXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vd3d3LmNvY29zMmQteC5vcmdcIixcbiAgXCJhdXRob3JzXCI6IFtcbiAgICBcIkFVVEhPUlMudHh0XCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwiZ3VscCB0ZXN0LWluLWNpXCIsXG4gICAgXCJidWlsZC1jaHVua3NcIjogXCJub2RlIC4vY29jb3MyZC9yZW5kZXJlci9idWlsZC9idWlsZC1jaHVua3NcIixcbiAgICBcImJ1aWxkLW1hcHBpbmdcIjogXCJub2RlIC4vY29jb3MyZC9yZW5kZXJlci9idWlsZC9idWlsZC1tYXBwaW5nXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXN5bmNcIjogXCIxLjUuMlwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLWFkZC1tb2R1bGUtZXhwb3J0c1wiOiBcIl4wLjIuMVwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXBhcnNlci1vcHRzXCI6IFwiMS4wLjFcIixcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tY2xhc3MtcHJvcGVydGllc1wiOiBcIjYuMjIuMFwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1kZWNvcmF0b3JzLWxlZ2FjeVwiOiBcIl4xLjMuNFwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1lczIwMTUtYmxvY2stc2NvcGluZ1wiOiBcIjYuMjIuMFwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1lczIwMTUtc2hvcnRoYW5kLXByb3BlcnRpZXNcIjogXCI2LjIyLjBcIixcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXMyMDE1LXRlbXBsYXRlLWxpdGVyYWxzXCI6IFwiNi4yMi4wXCIsXG4gICAgXCJiYWJlbC1wcmVzZXQtZW52XCI6IFwiXjEuMi4yXCIsXG4gICAgXCJiYWJlbGlmeVwiOiBcIjcuMy4wXCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiMTMuMC4wXCIsXG4gICAgXCJjaGFsa1wiOiBcIjEuMS4wXCIsXG4gICAgXCJkZWxcIjogXCIzLjAuMFwiLFxuICAgIFwiZXZlbnQtc3RyZWFtXCI6IFwiMy4zLjJcIixcbiAgICBcImZpcmUtZnNcIjogXCIwLjIuMVwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwiZ3VscC1iYWJlbFwiOiBcIjYuMS4yXCIsXG4gICAgXCJndWxwLWNhY2hlZFwiOiBcIjEuMS4wXCIsXG4gICAgXCJndWxwLWNvbmNhdFwiOiBcIjIuNi4wXCIsXG4gICAgXCJndWxwLWZiXCI6IFwiMC41LjFcIixcbiAgICBcImd1bHAtaGVhZGVyXCI6IFwiMS4yLjJcIixcbiAgICBcImd1bHAtanNoaW50XCI6IFwiMS4xMS4yXCIsXG4gICAgXCJndWxwLW1pcnJvclwiOiBcIjAuNC4wXCIsXG4gICAgXCJndWxwLW9wdGltaXplLWpzXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJndWxwLXBsdW1iZXJcIjogXCIwLjYuNlwiLFxuICAgIFwiZ3VscC1yZW5hbWVcIjogXCIxLjIuMlwiLFxuICAgIFwiZ3VscC1zaGVsbFwiOiBcIjAuNC4xXCIsXG4gICAgXCJndWxwLXNpemVcIjogXCIyLjEuMFwiLFxuICAgIFwiZ3VscC1zb3VyY2VtYXBzXCI6IFwiMS41LjJcIixcbiAgICBcImd1bHAtdWdsaWZ5XCI6IFwiXjMuMC4wXCIsXG4gICAgXCJndWxwLXV0aWxcIjogXCIzLjAuNlwiLFxuICAgIFwianMtc2hhMVwiOiBcIl4wLjYuMFwiLFxuICAgIFwianNoaW50LXN0eWxpc2hcIjogXCIyLjEuMFwiLFxuICAgIFwibXVsdGlwaXBlXCI6IFwiMC4zLjBcIixcbiAgICBcInBlcnNpc3RpZnlcIjogXCJeMS4xLjFcIixcbiAgICBcImFsaWFzaWZ5XCI6IFwiXjIuMS4wXCIsXG4gICAgXCJyZXF1aXJlLWRpclwiOiBcIjAuMy4wXCIsXG4gICAgXCJ1Z2xpZnktZXNcIjogXCIzLjMuN1wiLFxuICAgIFwidmlueWxcIjogXCIxLjEuMFwiLFxuICAgIFwidmlueWwtYnVmZmVyXCI6IFwiMS4wLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCIxLjAuMFwiLFxuICAgIFwid2F0Y2hpZnlcIjogXCJeMy43LjBcIixcbiAgICBcImdsc2wtdG9rZW5pemVyXCI6IFwiXjIuMS41XCIsXG4gICAgXCJndWxwLXF1bml0XCI6IFwiXjIuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMC42Ni42XCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLW5vZGUtcmVzb2x2ZVwiOiBcIl4zLjQuMFwiXG4gIH1cbn1cbiJdfQ==