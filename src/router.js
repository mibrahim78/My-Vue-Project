import {createRouter, createWebHistory} from "vue-router";
import Dcheros from './pages/Dcheros.vue';
import Calender from './pages/Calender.vue';
import Home from './pages/home.vue';
import markdown from './pages/markdown.vue';


const routes = [
    {path:'/', component:Home},
    {path:'/dc-heros', component:Dcheros},
    {path:'/calender', component:Calender},
    {path:'/markdown', component:markdown},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes ,
});

export default router;