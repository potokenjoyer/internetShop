import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./pages/MainPage/MainPage.vue";
import AboutPage from "./pages/AbotPage/components/AboutPage.vue";
import OrderPage from "./pages/OrderPage/components/OrderPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
    {
      path: "/order",
      name: "OrderPage",
      component: OrderPage,
    },
  ],
});
