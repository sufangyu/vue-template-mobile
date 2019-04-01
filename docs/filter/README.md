# 过滤器


项目内置几个常用的全局过滤器, 分别如下:
- 格式化时间
- 相对时间
- 格式化手机
- 隐藏部分手机号
- 格式化银行卡
- 千分位格式化
- 阿拉伯数组转中文数
- 千分位格式化
- 格式化小数位

> 如需自定义全局过滤器, 可在 `src/filter/index.js` 增加.


## 格式化日期

### 使用
```js
<p>格式化时间：{{ 1554041724286 | formatTime }}</p>

// 2019-04-01 10:04:35
```

### 函数
```js
formatTime(date, pattern)
```
**参数**
- date 时间戳
- pattern 格式. 默认值 `yyyy-MM-dd HH:mm:ss`


## 相对时间

### 使用
```js
<p>{{ 1554041724286 | fromNow }}</p>

// 刚刚 / N分钟前 / N小时前 / 1天前
```

### 函数
```js
fromNow(time, pattern)
```
**参数**
- time 时间戳
- pattern 格式. 默认值 `yyyy-MM-dd HH:mm:ss`


## 格式化手机

### 使用
```js
<p>{{ 15912345678 | formatPhone }}</p>

// 159 1234 5678
```

### 函数
```js
formatPhone(phone, separator = ' ')
```
**参数**
- phone 手机号码
- separator 连接符. 默认值 ' '


## 隐藏部分手机号

### 使用
```js
<p>{{ 15912345678 | formatPhoneHide }}</p>

// 159****5678
```

### 函数
```js
formatPhoneHide(phone)
```
**参数**
- phone 手机号码


## 格式化银行卡

### 使用
```js
<p>{{ 123123123123132 | formatBank }}</p>

// 1231 2312 3123 132
```

### 函数
```js
formatBank(val)
```
**参数**
- val 银行卡


## 千分位格式化

### 使用
```js
<p>{{ 5000039 | toThousands }}</p>

// 5,000,039
```

### 函数
```js
toThousands(num)
```
**参数**
- num 金额数值


## 阿拉伯数组转中文数字

### 使用
```js
<p>{{ 1100.1 | convertCurrency }}</p>

// 壹仟壹佰元壹角
```

### 函数
```js
convertCurrency(num)
```
**参数**
- num 金额数值



## 拓展阅读
- [过滤器](https://cn.vuejs.org/v2/guide/filters.html)