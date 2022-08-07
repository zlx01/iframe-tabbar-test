import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IframeView from "@/views/IframeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/baidu",
    children: [
      {
        path: "/baidu",
        name: "baidu",
        component: IframeView,
      },
      {
        path: "/game",
        name: "game",
        component: IframeView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
