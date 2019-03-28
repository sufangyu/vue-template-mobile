/**
 * 网络请求辅助类
 * 
 * https://www.jianshu.com/p/c66adc327553
 */
import { Toast } from 'vant';

let needLoadingRequestCount = 0;


/**
 * 开始加载中
 *
 * @param {string} [message=''] loading 提示语
 */
function startLoading(message = '') {
  Toast.loading({
    mask: true,
    duration: 0,
    forbidClick: true,
    message,
  });
}


/**
 * 结束加载中
 *
 */
function endLoading() {
  Toast.clear();
}


/**
 * 防抖函数
 *
 * @param {*} fn 执行函数
 * @param {number} [step=100] 延迟时间
 */
function debounce(fn, step = 100) {
  let timeout = null;
  return function exportFn() {
    clearTimeout(timeout);
    timeout = setTimeout((...args) => {
      fn.apply(this, args);
    }, step);
  };
}

/**
 * 关闭 loading 层
 *
 */
function tryCloseLoading() {
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}


/**
 * 显示 loading 层
 *
 * @export
 * @param {string} [message='']
 */
export function showFullScreenLoading(message = '') {
  if (needLoadingRequestCount === 0) {
    startLoading(message);
  }
  needLoadingRequestCount += 1;
}


/**
 * 延迟 loading 层
 *
 * @export
 * @returns
 */
export function hideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return;
  }
  needLoadingRequestCount -= 1;
  if (needLoadingRequestCount === 0) {
    debounce(tryCloseLoading, 300)();
  }
}
