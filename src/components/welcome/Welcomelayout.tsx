import { FunctionalComponent, } from 'vue';
import s from './First.module.scss'
export const Welcomelayout: FunctionalComponent = (props, context) => {
    const { slots: { icon, title, button } } = context
    return (
        <div class={s.wrapper}>
            <div class={s.card}>
                {icon?.()}
                {title?.()}

            </div>
            <div class={s.actions}>
                {button?.()}
            </div>
        </div>
    )

}