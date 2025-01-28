import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./pages/MainPage/MainPage.vue";
import AboutPage from "./pages/AbotPage/components/AboutPage.vue";
import OrderPage from "./pages/OrderPage/components/OrderPage.vue";
import UserPage from "./pages/UserProfilePage/UserPage.vue";
import LoginPage from "./pages/UserProfilePage/LoginPage.vue";



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
    {
      path: "/user",
      name: "UserPage",
      component: UserPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ],
});
