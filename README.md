# support_astc_etc2
基于 CocosCreator 2.1.3 ,增加支持原生平台支持 etc2 和 astc 压缩纹理。

配置自定义引擎
![img](http://www.codefriends.cn:3389/20200915002.png) 

修改引擎安装目录的 jsb-adapter ，本地相对路径为（参考 mac 上的路径）：Creator/2.1.3/CocosCreator.app/Contents/Resources/builtin/jsb-adapter

构建时，需要先设置 etc2 纹理压缩。
![img](http://www.codefriends.cn:3389/20200915001.png) 

（由于编辑器不提供定制，所以如果要支持 astc 需要用户自己修改打包后的文件）构建后，搜索构建包的 res 文件夹下的 import 文件夹，搜索 6@29 替换成 7@37 （ 7 代表资源后缀 .astc, 查阅 CCMacro.js 的 SUPPORT_TEXTURE_FORMATS。37 代表渲染 ASTC_8x8 格式压缩纹理。30 ～ 43 均代表压缩纹理格式，查阅 enums.js 的 enums）。将 raw-assets 文件夹里的 .pkm 文件替换成 .astc 文件，并且文件名和 .pkm 文件同步。

当前只测试了 iphone xr ，ios 13.7 渲染 ASTC_8x8 和 .pkm 格式纹理压缩资源有效，其余未测试。

测试用的 astc 资源：http://www.codefriends.cn:3389/uuid.astc ，测试项目为编辑器构建的 helloworld 项目。
调试 jsb_global.cpp 的 js_loadImage 可以看到加载的 path 路径为 .astc 后缀，成功运行后，xcode 无任何报错。

参考：https://github.com/cocos-creator/cocos2d-x-lite/issues
https://github.com/cocos-creator-packages/jsb-adapter/pull/313
https://github.com/cocos-creator/engine/pull/6918

https://github.com/cocos-creator/engine/pull/3039
https://github.com/cocos-creator/cocos2d-x-lite/pull/1685