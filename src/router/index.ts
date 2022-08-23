import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
        component: () => import("@/views/UserView.vue"),
      },
      {
        path: "mall",
        name: "MallView",
        component: () => import("@/views/MallView.vue"),
      },
      {
        path: "page1",
        name: "Other1View",
        component: () => import("@/views/Other1View.vue"),
      },
      {
        path: "page2",
        name: "Other2View",
        component: () => import("@/views/Other2View.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView.vue"),
  },
];

const router = new VueRouter(
  {
    mode: "history",
    routes,
  },
);

router.beforeEach((to, _from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if (!token && to.name !== "LoginView") {
    next({ name: "LoginView" });
  } else {
    next();
  }
});

export default router;
