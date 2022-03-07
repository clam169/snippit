import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //only "/" works.
    {
        path: "/",
        component: () => import("../views/Index"),
    },
    {
        path: "/register",
        component: () => import("../views/Register"),
        name: "Register",
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
