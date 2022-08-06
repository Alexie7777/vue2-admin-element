import axios from "axios";

const service = axios.create({
  baseURL: "/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// service.interceptors.response.use((res) => {
//   const code: number = res.data.code;
//   if (code != 200) {
//     return Promise.reject(res.data);
//   }
//   return res.data;
// }, (err) => {
//   return Promise.reject(err);
// });
//
export default service;
