export default {
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentTab: null,
  },
  mutations: {
    toggleMenu(state) {
      state.isCollapse = !(state.isCollapse);
    },

    selectMenu(state, val) {
      if (val.name !== "home") {
        const result = state.tabsList.findIndex((item) => item.name);

        if (result !== -1) {
          state.tabsList.push(val);
          state.currentTab = val;
        } else {
          state.currentTab = null;
        }
      }
    },
  },
};
