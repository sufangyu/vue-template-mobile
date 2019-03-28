# 根据条件判断是否显示

**示例：**
```html
<span v-has="{action: 'create', actions: ['create', 'edit']}">显示</span>
<span v-has="{action: 'remove', actions: ['create', 'edit']}">不显示</span>
```

**参数说明：**
action: 当前操作条件
actions: 符合显示的所有条件
