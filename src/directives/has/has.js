// 权限指令. 不满足就删除 DOM 节点
export default {
  inserted(el, binding) {
    const { action, actions } = binding.value;
    if (!actions.includes(action)) {
      el.parentNode.removeChild(el);
    }
  },
};
