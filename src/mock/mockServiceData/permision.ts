import Mock from "mockjs";

export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);

    if (username === "admin" && password === "admin") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "HomeView",
              label: "首页",
              icon: "s-home",
              url: "Home/Home",
            },
            {
              path: "/mall",
              name: "MallView",
              label: "商品管理",
              icon: "video-play",
              url: "MallManage/MallManage",
            },
            {
              path: "/user",
              name: "UserView",
              label: "用户管理",
              icon: "user",
              url: "UserManage/UserManage",
            },
            {
              label: "其他",
              icon: "more",
              path: "",
              children: [
                {
                  path: "/page1",
                  name: "Other1View",
                  label: "页面1",
                  icon: "setting",
                  url: "Other/PageOne",
                },
                {
                  path: "/page2",
                  name: "Other2View",
                  label: "页面2",
                  icon: "setting",
                  url: "Other/PageTwo",
                },
              ],
            },
          ],
        },
        token: Mock.Random.guid(),
        message: "获取成功",
      };
    } else if (username === "xiaoxiao" && password === "xiaoxiao") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "HomeView",
              label: "首页",
              icon: "s-home",
              url: "Home/Home",
            },
            {
              path: "/mall",
              name: "MallView",
              label: "商品管理",
              icon: "video-play",
              url: "MallManage/MallManage",
            },
          ],
        },
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
