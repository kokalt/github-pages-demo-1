import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Welcome } from "../views/Welcome";
import { Secord } from "../components/welcome/secord";
import { Third } from "../components/welcome/third";
import { Forth } from "../components/welcome/forth";

export const routes: RouteRecordRaw[] = [
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '1', component: First, },
            { path: '2', component: Secord, },
            { path: '3', component: Third, },
            { path: '4', component: Forth, }
        ]
    }
]