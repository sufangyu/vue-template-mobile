/**
 * 项目全局配置文件
 *
 * 通常配置项有以下:
 *    - API 前置路径
 *    - 多语言
 *    - ***
 */
const getAPIBase = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/api';
  }

  return 'https://api.domain.com';
};

export default {
  // API 前置路径
  API_BASE: getAPIBase(),

  // 多语言配置
  LANGUAGES: [
    { name: '中文简体', lang: 'zh' },
    { name: 'English', lang: 'en' },
  ],
};
