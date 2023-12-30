import { Transition, VNode, defineComponent, ref, watchEffect, } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwpie';
import { throttle } from '../shared/throttle';
const pushMap: Record<string, string> = {
    'welcome1': '/welcome/2',
    'welcome2': '/welcome/3',
    'welcome3': '/welcome/4',
    'welcome4': '/start',
}
export const Welcome = defineComponent({
    setup: (props, context) => {
        const route = useRoute()
        const router = useRouter()
        const main = ref<HTMLElement | null>(null)
        const { direction, swipe } = useSwipe(main, { beforeStart: e => e.preventDefault() })

        const replace = throttle(() => {
            const name = (route.name || 'welcome1').toString()
            router.replace(pushMap[name])
        }, 500)

        watchEffect(() => {
            if (swipe.value && direction.value === 'left') {
                replace()
            }

        })
        return () => (
            <div class={s.wrapper}>
                <header>
                    <svg>
                        <use xlinkHref='#logo'></use>
                    </svg>
                    <h1>山竹记账</h1>
                </header>
                <main ref={main} class={s.main}>
                    <RouterView name='main'>
                        {({ Component: X, route: R, }: {
                            Component: VNode;
                            route: RouteLocationNormalizedLoaded;
                        }) => <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                            leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                                {X}
                            </Transition>
                        }
                    </RouterView>
                </main>
                <footer> <RouterView name='footer' /></footer>
            </div>
        )
    }
})