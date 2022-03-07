import { createRouter, createWebHistory } from "vue-router";

import testIndex from "../components/testFolder/index.vue";
const routes = [
    {
        path: "/",
        component: testIndex,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
