/**
 * 格式化时间
 *
 * @export
 * @param {*} [date=new Date()] 时间
 * @param {string} [fmt='yyyy-MM-dd HH:mm:ss'] 格式
 * @returns
 */
export function parseTime(date = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
  date = new Date(date);
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }

  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });

  return fmt;
}

/**
 * 格式化相对时间
 *
 * @export
 * @param {*} time 目标时间
 * @param {*} fmt 格式
 * @returns
 */
export function fromNow(time, fmt) {
  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 0) {
    console.warn(`${time} more than the current time`);
    return time;
  }

  if (diff < 30) {
    return '刚刚';
  }
  if (diff < 3600) {
    return `${Math.ceil(diff / 60)}分钟前`;
  }
  if (diff < 3600 * 24) {
    return `${Math.floor(diff / 3600)}小时前`;
  }
  if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (fmt) {
    return parseTime(time, fmt);
  }

  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒`;
}


/**
 * 格式化 urlQuery
 *
 * @export
 * @param {*} url
 * @returns
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}


/**
 * 序列化 对象
 *
 * @export
 * @param {string} [query={}]
 * @returns
 */
export function serialize(query = {}) {
  const temp = [];
  /* eslint-disable no-restricted-syntax */
  for (const key in query) {
    if (Object.hasOwnProperty.call(query, key)) {
      const enValue = encodeURIComponent(query[key]);
      temp.push(`${key}=${enValue}`);
    }
  }
  return temp.join('&');
}


/**
 * 反序列化 字符串
 *
 * @export
 * @param {object} [query='']
 * @returns
 */
export function deserialize(query = '') {
  // 参数为空 或者 为空对象返回空对象
  if (!query || JSON.stringify(query) === '{}') {
    return {};
  }

  const reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
  const obj = {};
  while (reg.exec(query)) {
    obj[RegExp.$1] = decodeURIComponent(RegExp.$2);
  }
  return obj;
}


/**
 * 格式化手机
 *
 * @export
 * @param {*} phone 手机号
 * @param {string} [separator=' '] 连接符
 * @returns
 */
export function formatPhone(phone, separator = ' ') {
  const val = phone.toString().replace(/[^\d]/g, '');
  const arr = val.split('');
  let str = '';
  arr.forEach((v, index) => {
    if (index === 3 || index === 7) {
      str += separator;
    }
    str += v;
  });
  return str;
}


/**
 * 格式化手机
 *
 * @export
 * @param {*} phone 手机号
 * @returns
 */
export function formatPhoneHide(phone) {
  const phoneNumber = phone.toString();
  return `${phoneNumber.substr(0, 3)}****${phoneNumber.substr(7, 11)}`;
}


/**
 * 格式化银行卡 (4位一空格)
 *
 * @export
 * @param {*} val 银行卡号
 * @returns
 */
export function formatBank(val) {
  return val.toString().replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
}
