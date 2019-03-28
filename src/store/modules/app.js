import Cookies from 'js-cookie';

const LANGUAGE_CODE_KEY = 'language';
const SIDEBAR_IS_CLOSED_KEY = 'sidebar-closed';

const app = {
  state: {
    device: 'desktop',
    language: Cookies.get(LANGUAGE_CODE_KEY) || 'zh',
    sidebar: {
      opened: !+Cookies.get(SIDEBAR_IS_CLOSED_KEY),
      withoutAnimation: false,
    },
  },
  getters: {
    sidebar: state => state.sidebar,
    language: state => state.language,
    device: state => state.device,
  },
  actions: {
    // 切换 侧边菜单栏隐藏/显示
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    // 隐藏 侧边菜单栏
    closeSidebar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    // 显示 侧边菜单栏
    openSidebar({ commit }, { withoutAnimation }) {
      commit('OPEN_SIDEBAR', withoutAnimation);
    },
    // 切换 当前浏览器设备 mobile/desktop
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
    // 设置 当前语言
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      // sidebarStatus =>>  1: 隐藏; 0: 显示
      if (state.sidebar.opened) {
        Cookies.set(SIDEBAR_IS_CLOSED_KEY, 1);
      } else {
        Cookies.set(SIDEBAR_IS_CLOSED_KEY, 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set(SIDEBAR_IS_CLOSED_KEY, 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    OPEN_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set(SIDEBAR_IS_CLOSED_KEY, 0);
      state.sidebar.opened = true;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    SET_LANGUAGE: (state, language) => {
      Cookies.set(LANGUAGE_CODE_KEY, language);
      state.language = language;
    },
  },
};

export default app;
