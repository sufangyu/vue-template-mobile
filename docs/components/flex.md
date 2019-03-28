# Flex 弹性布局

`Flex`是`CSS flex`布局的一个封装. `Flex`的子元素不一定是`FlexItem`.


## 使用
```js
<template>
  <flex>
    <flex-item>1</flex-item>
    <flex-item>2</flex-item>
    <flex-item>3</flex-item>
  </flex>
</template>

<script>
import Flex, { FlexItem } from '@/components/flex';
...
</script>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| direction | 定位方向. 值可为`row`, `row-reverse`, `column`, `column-reverse` | String | 否 | 'row' |
| wrap | 子元素换行. 值可为`nowrap`, `wrap`, `wrap-reverse` | String | 否 | 'row' |
| justify | 主轴对齐方式. 值可为`start`, `end`, `center`, `between`, `around` | String | 否 | 'row' |
| align | 交叉轴对齐方式. 值可为`start`, `end`, `center`, `baseline`, `stretch` | String | 否 | 'row' |


## FlexItem

`FlexItem` 组件默认加上了样式 `flex:1`,保证所有 `item` 平均分宽度, `Flex` 容器的 `children` 不一定是 `FlexItem`.
