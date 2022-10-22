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
    redirect: "/vue2",
    children: [
      {
        path: "/vue2",
        name: "vue2",
        component: IframeView,
      },
      {
        path: "/vue3",
        name: "vue3",
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
