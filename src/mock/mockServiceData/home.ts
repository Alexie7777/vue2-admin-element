import Mock from "mockjs";

Mock.setup({
  timeout: 500,
});

const list: number[] = [];

export default {
  getStatisticData: () => {
    for (let i = 0; i < 7; i++) {
      list.push(Mock.mock({
        苹果: Mock.Random.float(100, 8000, 0, 0),
        vivo: Mock.Random.float(100, 8000, 0, 0),
        oppo: Mock.Random.float(100, 8000, 0, 0),
        魅族: Mock.Random.float(100, 8000, 0, 0),
        三星: Mock.Random.float(100, 8000, 0, 0),
        小米: Mock.Random.float(100, 8000, 0, 0),
      }));
    }
    return {
      code: 200,
      data: {
        //    饼图
        videoData: [
          {
            name: "小米",
            value: 2999,
          },
          {
            name: "苹果",
            value: 5999,
          },
          {
            name: "vivo",
            value: 1500,
          },
          {
            name: "oppo",
            value: 1999,
          },
          {
            name: "魅族",
            value: 3299,
          },
          {
            name: "三星",
            value: 4500,
          },
        ],
        // 柱状图
        userData: [
          {
            date: "周一",
            new: 5,
            active: 200,
          },
          {
            date: "周二",
            new: 10,
            active: 230,
          },
          {
            date: "周三",
            new: 8,
            active: 270,
          },
          {
            date: "周四",
            new: 3,
            active: 230,
          },
          {
            date: "周五",
            new: 14,
            active: 340,
          },
        ],
        // 折线图
        orderData: {
          date: [
            "20220501",
            "20220502",
            "20220503",
            "20220504",
            "20220505",
            "20220506",
            "20220507",
          ],
          data: list,
        },
        tableData: [
          {
            name: "今日支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "今日收藏订单",
            value: 210,
            icon: "star-on",
            color: "#ffb980",
          },
          {
            name: "今日未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
          },
          {
            name: "本月支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "本月收藏订单",
            value: 1234,
            icon: "star-on",
            color: "#ffb980",
          },
          {
            name: "本月未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
          },
        ],
      },
    };
  },
};
