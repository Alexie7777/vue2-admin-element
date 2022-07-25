import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainView",
    component: () => import("@/views/MainView.vue"),
    redirect: "home",
    children: [
      {
        path: "home",
        name: "HomeView",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "user",
        name: "UserView",
        component: () => import("../views/UserView.vue"),
      },
    ],
  },
];

const router = new VueRouter(
  {
    mode: "history",
    routes,
  },
);

export default router;
