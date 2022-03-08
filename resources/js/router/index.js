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
    {
        path: "/card",
        component: () => import("../../components/NewSnippit"),
        name: "NewSnippit",
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
