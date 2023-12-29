import { defineComponent } from 'vue';
import s from './First.module.scss'
import clock from '../../assets/icon/clock.svg'
import { RouterLink } from 'vue-router';
import { Welcomelayout } from './Welcomelayout';
export const Secord = () => (
    <Welcomelayout>
        {{
            icon: () => <img src={clock} />,
            title: () => <h2>会挣钱<br />还要会省钱</h2>,
            button: () => (
                <><RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink></>)
        }}
    </Welcomelayout>
)
Secord.displayName = 'Secord'