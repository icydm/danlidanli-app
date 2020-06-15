# danlidanli-app

1. 目前使用的插件（除了内置的）：

- mint-ui
- axios 获取数据
- crypto 加密
- vue-cropper 图片裁剪
- vue-qr 二维码生成
- clipboard 移动端粘贴复制
- vue-touch 移动端点击等事件
- amfe-flexible 移动端自适应
- better-scroll 支持滚动
- vue-calendar-component 日历插件

2. 已完成模块：

- 登陆注册
- 个人钱包模块
- 个人粉丝/关注模块
- 主要框架及首页推荐
- 扫一扫 （使用了原生H5+，需要在安卓端或真机上才可运行）
- 侧边栏
- 设置 （为了做到高仿，几乎将所有设置模块的功能都实现了，花了将近半个月，主要是大量涉及到H5+的原生功能，需要打包在Hubilder上测试，无法实时刷新，巨麻烦（我真是沙雕，居然会选择纯Vue + H5+plus））

3. 存在的问题：

- 支付功能提供了微信支付和支付宝支付，但是本人没有 appid，后台也没实现该功能，因此该功能为开发完。
- 扫描对应的 uuid 二维码会跳转相应的个人空间（二维码下载后台没有实现，前台用 base64 有问题，因此不支持二维码下载，我给替换成个人头像了）。
- 首页顶部滑动消失出现特效使用的是 transform：translate，但这破坏了 overflow：hidden，目前还没有办法，或者有想法但是要改很多地方。
- mint-ui的lazy-load无效果
- 在使用第三方连接定位城市和获取IP（设置的帮助页的网络诊断）时，移动端、PC端测试没问题，真机会报错，目前尚未解决
- 在设置模块的用户头像设置时，如果快速的点击会造成接口奔溃（可防抖），或者连续调用三个换头像的功能也会导致上述结果，应该是后台图片下载速度太慢导致的（这方面不想改，烦死了）。
## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```
