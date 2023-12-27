import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Welcome } from "../views/Welcome";
import { Secord } from "../components/welcome/Secord";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1', },
            { path: '1', component: First, },
            { path: '2', component: Secord, },
            { path: '3', component: Third, },
            { path: '4', component: Forth, }
        ]
    }
]