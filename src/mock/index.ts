import Mock from "mockjs";
import homeApi from "./mockServiceData/home";
import userApi from "./mockServiceData/user";
import permissionApi from "./mockServiceData/permision";

Mock.mock("/api/homeData", "get", homeApi.getHomeData);
Mock.mock("/api/userData", "get", userApi.getUserData);
Mock.mock("/api/permission", "post", permissionApi.getMenu);
