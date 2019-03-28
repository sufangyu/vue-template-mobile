/**
 * 校验多语言 
 */
export default {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: field => `${field}不能为空`,
      confirmed: field => `两次输入的${field}不一致`,
    },
  },
};
