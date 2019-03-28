import http from '@/utils/request';

export function getUser(username = '') {
  const url = `https://api.github.com/users/${username}`;
  return http.get({ url });
}

export function getUsers() {
  const url = 'https://api.github.com/users';
  return http.get({ url });
}


export function updateUser(params = {}, data = {}) {
  const url = 'https://api.github.com/users';
  return http.post({ url, params, data });
}
