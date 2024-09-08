import  { createRouter, createWebHistory } from "vue-router";
const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Quizzi-Vue',
            component: () => import('../views/Quizzi.vue')
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: () => import('../views/Quiz.vue')
        }
    ]
})
0
export default router;