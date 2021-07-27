import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Start from '../views/Start.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/planner',
        name: 'Planner',
        component: () => import('../components/Calendar.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;