import Cookie from "js-cookie";

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
    menu: [],
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

    updateMenu(state, val) {
      state.menu = val;
      console.log(JSON.stringify(val), "JSON");
      Cookie.set("menu", JSON.stringify(val));
    },

    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
      Cookie.remove("token");
    },

    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return;
      }

      console.log(Cookie.get("menu"));
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      const menuArr = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((child) => {
            child.component = () => import(`@/views/${child.name}.vue`);
            return child;
          });
          menuArr.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.name}.vue`);
          menuArr.push(item);
        }
      });

      console.log(router);
      menuArr.forEach((item) => {
        router.addRoute("MainView", item);
      });
    },
  },
};

export default tab;
