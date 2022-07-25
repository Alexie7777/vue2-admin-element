export default {
  state: {
    isCollapse: false,
  },
  mutations: {
    toggleMenu(state: any) {
      state.isCollapse = !(state.isCollapse);
    },
  },
};
