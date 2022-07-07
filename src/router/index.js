import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/propertyListings",
    name: "propertyListings",
    component: () => import("../views/PropertyListings.vue"),
  },
  {
    path: "/propertyListings/:id",
    name: "PropertyDetails",
    component: () => import("../views/PropertyDetails.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
