import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Start from '../views/Start.vue';
import Planner from '../views/Planner.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/planner',
        name: 'Planner',
        component: Planner
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;