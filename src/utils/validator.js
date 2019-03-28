/**
 * vee validator 自定义校验规则 
 */
export default {
  mobile: {
    getMessage(field) {
      return `${field}格式不正确`;
    },
    validate(val) {
      return val.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(val);
    },
  },
};
