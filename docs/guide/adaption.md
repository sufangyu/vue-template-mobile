# 布局适配方案

使用 `rem` 适配方案, 以 `750px` 作为标准, 根据访问设备的屏幕宽度动态计算 `html` 的字体大小. `postcss-px2rem` 插件会自动把 `CSS` 文件中的 `px` 转换成 `rem` 单位.

**postcss-px2rem 配置**

```js
plugins: {
  ...
  'postcss-px2rem': {
    remUnit: 50,
  },
}
```

## 方案

```js
!function(win) {
  var doc = win.document;
  var htmlEle = doc.documentElement;
  var dpr = win.devicePixelRatio || 1;
  var eventType = 'orientationchange' in win ? 'orientationchange' : 'resize';
  var setFontSize = function() {
    var screenWidth = htmlEle.getBoundingClientRect().width || 375;
    if (1 == dpr || screenWidth > 750) {
      screenWidth = 750;
    }
    htmlEle.style.fontSize = screenWidth / 7.5 + 'px';
  };
  htmlEle.setAttribute('data-dpr', dpr);
  win.addEventListener(eventType, setFontSize, false);
  doc.addEventListener('DOMContentLoaded', function() {
    setTimeout(setFontSize);
  }, false);
}(window)
```

## CSS 如何写

设置 UI 设计稿的宽度为 `750px` 后, 把 UI 设计稿上元素的尺寸直接写成 `px` 即可, `postcss-px2rem` 插件会自动把 `px` 转换成 `rem` 单位. 例如设计稿上一个 100*100 图片 `CSS` 如下:

```css
img {
  width: 100px;
  height: 100px;
}
```

## 拓展阅读

- [移动端Web页面适配方案](https://segmentfault.com/a/1190000008767416)
- [淘宝弹性布局方案lib-flexible](https://juejin.im/post/5b557f53e51d4519195ad4001190000008767416)