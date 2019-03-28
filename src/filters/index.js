import {
  parseTime,
  formatPhone as formatPhoneFilter,
  formatPhoneHide as formatPhoneHideFilter,
  formatBank as formatBankFilter,
} from '@/utils';
import {
  toThousands as toThousandsFilter,
  formatFloat as formatFloatFilter,
  convertCurrency as convertCurrencyFilter,
} from '@/utils/number';


/**
 * 格式化日期
 *
 * @export
 * @param {*} date 时间戳
 * @param {string} [pattern = 'YYYY-MM-DD HH:mm:ss'] 格式
 * @returns
 */
export function formatTime(date, pattern = '{y}-{m}-{d} {h}:{i}:{s}') {
  if (!date) {
    return '-';
  }

  return parseTime(date, pattern);
}


/**
 * 格式化手机
 *
 * @export
 * @param {*} phone 手机号
 * @param {string} [separator=' '] 连接符
 * @returns
 */
export function formatPhone(phone, separator) {
  if (!phone) {
    return '-';
  }

  return formatPhoneFilter(phone, separator);
}


/**
 * 隐藏部分手机号
 *
 * @export
 * @param {*} phone 手机号
 * @returns
 */
export function formatPhoneHide(phone) {
  if (!phone) {
    return '-';
  }

  return formatPhoneHideFilter(phone);
}


/**
 * 格式化银行卡 (4位一空格)
 *
 * @export
 * @param {*} val 银行卡号
 * @returns
 */
export function formatBank(val) {
  if (!val) {
    return '-';
  }

  return formatBankFilter(val);
}


/**
 * 千分位格式化
 * @param {数字} num
 */
export function toThousands(num) {
  return toThousandsFilter(num);
}


/**
 * 阿拉伯数组转中文数组
 * @param {数字} num
 */
export function convertCurrency(num) {
  return convertCurrencyFilter(num);
}


/**
 * 格式化小数位
 *
 * @export
 * @param {*} val 小数
 * @param {number} [pos=2] 保留的小数位
 * @returns
 */
export function formatFloat(val, pos = 2) {
  return formatFloatFilter(val, pos);
}
