# Exception 异常提示


## 使用
```js
<template>
  <exception
    title="401 Error!"
    description="抱歉，没有权限访问~"
    :hasGoback="false"
  ></exception>
</template>

<script>
import Exception from '@/components/exception';
</script>
```

## API
| 参数 | 说明 | 类型 | 必须 | 默认值|
| ------ | ------ | ------ | ------ | ------ |
| image | 图片 | String | 否 | '' |
| title | 标题 | String | 否 | '' |
| description | 描述文案 | String | 否 | '' |
| hasGoback | 是否显示返回按钮 | Boolean | 否 | true |


## slot
| 参数 | 说明 |
| ------ | ------ |
| image | 图片区域 |
| actions | 操作区域 |
