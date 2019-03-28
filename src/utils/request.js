import axios from 'axios';
import { Notify } from 'vant';
import { getToken, removeToken } from '@/utils/auth';
// import router from '@/router';
import { showFullScreenLoading, hideFullScreenLoading } from './request-helper';


const { CancelToken } = axios;
let cancel; // 取消请求对象
const promiseArr = {}; // 正在发起请求队列 
const TIME_OUT = 50000; // 超时设置

const request = (defaults = {}) => {
  // create an axios instance
  const instance = axios.create({
    headers: {
      'Content-Type': defaults.contentType || 'application/json;charset=utf-8',
    },
    timeout: defaults.timeout || TIME_OUT,
    cache: false, // 是否缓存页面
  });

  // request interceptor
  instance.interceptors.request.use(
    (config) => {
      if (config.loading) {
        const message = config.loadingMessage;
        showFullScreenLoading(message);
      }

      // 发起请求时，取消掉当前正在进行的相同请求
      if (promiseArr[config.url]) {
        promiseArr[config.url]('Cancel operation');
        promiseArr[config.url] = cancel;
      } else {
        promiseArr[config.url] = cancel;
      }

      const token = getToken();
      if (token) {
        config.headers['Access-Token'] = token;
      }

      // GET 请求设置时间戳参数, 解决缓存问题
      if (config.method === 'get' && !config.cache) {
        const timestamp = +new Date();
        config.params._ = timestamp;
      }

      return config;
    },
    error => Promise.reject(error),
  );

  // response interceptor
  instance.interceptors.response.use(
    (response) => {
      hideFullScreenLoading();
      const { data } = response;
      return Promise.resolve(data);
    },
    (error) => {
      hideFullScreenLoading();

      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '错误请求';
            break;
          case 401:
            error.message = '未授权，请重新登录';
            break;
          case 403:
            error.message = '拒绝访问';
            break;
          case 404:
            error.message = '请求错误，未找到该资源';
            break;
          case 405:
            error.message = '请求方法未允许';
            break;
          case 408:
            error.message = '请求超时';
            break;
          case 500:
            error.message = '服务器端出错';
            break;
          case 501:
            error.message = '网络未实现';
            break;
          case 502:
            error.message = '网络错误';
            break;
          case 503:
            error.message = '服务不可用';
            break;
          case 504:
            error.message = '网络超时';
            break;
          case 505:
            error.message = 'http版本不支持该请求';
            break;
          default:
            error.message = `连接错误${error.response.status}`;
        }
      } else {
        error.message = error.message || '连接到服务器失败';
      }

      try {
        const { status, statusText } = error.response;
        // 登录过期
        if (status === 401) {
          Notify({
            message: error.message,
          });
          removeToken();
          // router.replace('/login');
          // // 重新刷新页面, 初始化 vue 的状态
          // window.location.reload();
          return Promise.reject(error);
        }

        // 非登录过期错误
        Notify({
          message: `${status} - ${error.message}`,
        });
        return Promise.reject({
          status,
          statusText,
          message: error.message,
        });
      } catch (err) {
        return Promise.reject({
          status: 'canceled',
          statusText: 'Cancel operation',
          message: error.message,
        });
      }
    },
  );

  return instance(defaults);
};


/* eslint-disable object-curly-newline */
const http = {
  /**
   * GET 请求
   *
   * @param {string} [url=''] 地址
   * @param {*} [params={}] 查询参数
   * @param {*} [config={}] axios 配置
   * @param {boolean} [loading=true] 是否显示 loading
   * @param {string} [loadingMessage='加载中...'] loading 信息提示
   * @returns
   */
  get({ url = '', params = {}, config = {}, loading = true, loadingMessage = '加载中...' }) {
    const mergeConfig = Object.assign({}, {
      method: 'GET',
      url,
      params,
      loading,
      loadingMessage,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    }, config);
    return request(mergeConfig);
  },

  /**
   * POST 请求
   *
   * @param {string} [url=''] 地址
   * @param {*} [params={}] 查询参数
   * @param {*} [data={}] 提交内容
   * @param {*} [config={}] axios 配置
   * @param {boolean} [loading=true] 是否显示 loading
   * @param {string} [loadingMessage='加载中...'] loading 信息提示
   * @return {*}
   */
  post({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
    const mergeConfig = Object.assign({}, {
      method: 'POST',
      url,
      params,
      data,
      loading,
      loadingMessage,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    }, config);
    return request(mergeConfig);
  },

  /**
   * DELETE 请求
   *
   * @param {string} [url=''] 地址
   * @param {*} [params={}] 查询参数
   * @param {*} [data={}] 提交内容
   * @param {*} [config={}] axios 配置
   * @param {boolean} [loading=true] 是否显示 loading
   * @param {string} [loadingMessage='加载中...'] loading 信息提示
   * @return {*}
   */
  delete({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在删除...' }) {
    const mergeConfig = Object.assign({}, {
      method: 'DELETE',
      url,
      params,
      data,
      loading,
      loadingMessage,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    }, config);
    return request(mergeConfig);
  },

  /**
   * PUT 请求
   *
   * @param {string} [url=''] 地址
   * @param {*} [params={}] 查询参数
   * @param {*} [data={}] 提交内容
   * @param {*} [config={}] axios 配置
   * @param {boolean} [loading=true] 是否显示 loading
   * @param {string} [loadingMessage='加载中...'] loading 信息提示
   * @return {*}
   */
  put({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
    const mergeConfig = Object.assign({}, {
      method: 'PUT',
      url,
      params,
      data,
      loading,
      loadingMessage,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    }, config);
    return request(mergeConfig);
  },

  /**
   * PATCH 请求
   *
   * @param {string} [url=''] 地址
   * @param {*} [params={}] 查询参数
   * @param {*} [data={}] 提交内容
   * @param {*} [config={}] axios 配置
   * @param {boolean} [loading=true] 是否显示 loading
   * @param {string} [loadingMessage='加载中...'] loading 信息提示
   * @return {*}
   */
  patch({ url = '', params = {}, data = {}, config = {}, loading = true, loadingMessage = '正在提交...' }) {
    const mergeConfig = Object.assign({}, {
      method: 'PATCH',
      url,
      params,
      data,
      loading,
      loadingMessage,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    }, config);
    return request(mergeConfig);
  },

  /**
   * 并发请求
   *
   * @param {*} [args=[]] 请求数组
   * @returns
   */
  all: (args = []) => axios.all(args),
};

export default http;
