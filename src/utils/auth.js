import Cookies from 'js-cookie';

const TOKEN_KEY = 'user-token';

/**
 * 获取 账户权限
 */
export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

/**
 * 设置 账户权限
 * @param {*} token
 */
export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

/**
 * 删除 账户权限
 */
export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}
