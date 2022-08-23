const tab = {
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: "/home",
        name: "HomeView",
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
        state.currentTab = val;
        const result = state.tabsList.findIndex((item) =>
          item.name === val.name
        );

        if (result === -1) {
          state.tabsList.push(val);
        } else {
          state.currentTab = null;
        }
      }
    },

    deleteMenu(state, val) {
      const result = state.tabsList.findIndex((item) => item.name == val.name);
      if (result > -1) {
        state.tabsList.splice(result, 1);
      }
    },

    updateCur(state, val) {
      const result = state.tabsList.findIndex((item) => item.name == val);
      if (result > -1) {
        state.currentTab = state.tabsList[result];
      }
    },
  },
};

export default tab;
