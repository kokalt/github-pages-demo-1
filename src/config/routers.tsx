import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Welcome } from "../views/Welcome";
import { Secord } from "../components/welcome/Secord";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { FirstAction } from "../components/welcome/FirstAction";
import { SecondActions } from "../components/welcome/SecordAction";
import { ThirdActions } from "../components/welcome/ThirdAction";
import { ForthActions } from "../components/welcome/ForthAction";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1', },
            { path: '1', name: 'welcome1', components: { main: First, footer: FirstAction }, },
            { path: '2', name: 'welcome2', components: { main: Secord, footer: SecondActions }, },
            { path: '3', name: 'welcome3', components: { main: Third, footer: ThirdActions }, },
            { path: '4', name: 'welcome4', components: { main: Forth, footer: ForthActions }, }
        ]
    }
]