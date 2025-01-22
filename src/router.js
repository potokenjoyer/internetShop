import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: 'MainPage',
      component: MainPage
    },
  ],
});
