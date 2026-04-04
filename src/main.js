import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import "./styles.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/products", component: ProductsPage },
    { path: "/products/:slug", component: ProductDetailPage },
    { path: "/contact", component: ContactPage },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
