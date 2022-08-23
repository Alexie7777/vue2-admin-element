import Mock from "mockjs";

export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);

    if (username === "admin" && password === "admin") {
      return {
        code: 200,
        menu: [
          {
            path: "/home",
            name: "HomeView",
            label: "首页",
            icon: "s-home",
          },
          {
            path: "/mall",
            name: "MallView",
            label: "商品管理",
            icon: "video-play",
          },
          {
            path: "/user",
            name: "UserView",
            label: "用户管理",
            icon: "user",
          },
          {
            label: "其他",
            icon: "more",
            children: [
              {
                path: "/page1",
                name: "Other1View",
                label: "页面1",
                icon: "setting",
              },
              {
                path: "/page2",
                name: "Other2View",
                label: "页面2",
                icon: "setting",
              },
            ],
          },
        ],
        token: Mock.Random.guid(),
        message: "获取成功",
      };
    } else if (username === "xiaoxiao" && password === "xiaoxiao") {
      return {
        code: 200,
        menu: [
          {
            path: "/home",
            name: "HomeView",
            label: "首页",
            icon: "s-home",
          },
          {
            path: "/mall",
            name: "MallView",
            label: "商品管理",
            icon: "video-play",
          },
        ],
        token: Mock.Random.guid(),
        message: "获取成功",
      };
    } else {
      return {
        code: 401,
        message: "验证失败",
      };
    }
  },
};
