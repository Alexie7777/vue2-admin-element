import Mock from "mockjs";
import homeApi from "./mockServiceData/home";
import userApi from "./mockServiceData/user";

Mock.mock("/api/homeData", "get", homeApi.getHomeData);
Mock.mock("/api/userData", "get", userApi.getUserData);
// Mock.mock("/api/weather/city/101280601", "get", {
//   status: "error",
//   msg: "天气查询失败",
// });

// import Mock from "mockjs";
// // 接口地址
// Mock.mock("/api/post/news", "get", {
//   status: 200,
//   meg: "获取数据成功",
// });
