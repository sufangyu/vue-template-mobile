# Icon 图标

Icon 组件已全局注入, 可以直接使用, 无需每个都单独引入. 

## 实现

使用`svg-sprite-loader`插件, 再项目运行时把`src/icons/svg`目录的图标全部以`symbol`方式注入到 HTMl.

如果增加`svg`图标, 把对应的`svg`文件放到`src/icons/svg`目录下, 通过设置组件的`name`对应文件名称.


## 使用
```js
<icon-svg name="404" />
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| name | icon图标的名称, 对应文件名称 |  String | 是 | '' |


## TODO
- 增加几种`size`的支持
- 支持自定义尺寸