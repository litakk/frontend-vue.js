import { createRouter, createWebHistory } from "vue-router";
import Home from "./page/Home.vue";
import Login from "./page/Login.vue";
import Register from "./page/Register.vue";
import Games from "./page/Games.vue";
import GameCreate from "./page/GameCreate.vue";
import ActiveGame from "./page/ActiveGame.vue";

export const router = createRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login, },
        { path: '/register', component: Register, },
        { path: '/games', component: Games, },
        { path: '/games/create', component: GameCreate, },
        { path: '/games/active', component: ActiveGame, },
    ],
    history: createWebHistory()
})