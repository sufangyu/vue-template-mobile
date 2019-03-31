/**
 * 千分位格式化
 * @param {数字} num
 */
export function toThousands(num) {
  let val = num.toString();

  if (!val.includes('.')) {
    val += '.';
  }
  return val.replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`).replace(/\.$/, '');
}


/**
 * 阿拉伯数组转中文数字
 * @param {number} money 金额
 * 
 */
/* eslint-disable prefer-destructuring */
export function convertCurrency(money = '') {
  const maxNum = 999999999999999.9999; // 最大处理的数字

  if (money === '') {
    return '';
  }
  if (money >= maxNum) {
    // 超出最大处理数字
    return '';
  }

  const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const cnIntRadice = ['', '拾', '佰', '仟'];
  const cnIntUnits = ['', '万', '亿', '兆']; // 对应整数部分扩展单位
  const cnDecUnits = ['角', '分', '毫', '厘']; // 对应小数部分单位
  const cnInteger = '整'; // 整数金额时后面跟的字符
  const cnIntLast = '元'; // 整型完以后的单位
  let integerNum; // 金额整数部分
  let decimalNum; // 金额小数部分
  let chineseStr = ''; // 输出的中文金额字符串
  let parts; // 分离金额后用的数组，预定义
  money = parseFloat(money);
  
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  money = money.toString();
  if (money.indexOf('.') === -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const intLen = integerNum.length;
    for (let i = 0; i < intLen; i += 1) {
      const n = integerNum.substr(i, 1);
      const p = intLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n === '0') {
        zeroCount += 1;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n, 10)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum !== '') {
    const decLen = decimalNum.length;
    for (let i = 0; i < decLen; i += 1) {
      const dn = decimalNum.substr(i, 1);
      if (dn !== '0') {
        chineseStr += cnNums[Number(dn)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}


/**
 * 格式化小数位
 *
 * @export
 * @param {*} val 小数
 * @param {number} [pos=2] 保留的小数位
 * @returns
 */
/* eslint-disable no-restricted-properties */
export function formatFloat(val, pos = 2) {
  let f = parseFloat(val);
  if (Number.isNaN(f)) {
    return false;
  }
  f = Math.round(val * Math.pow(10, pos)) / Math.pow(10, pos); // pow 幂
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + pos) {
    s += '0';
  }
  return s;
}
