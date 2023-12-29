import { defineComponent } from 'vue';
import s from './First.module.scss'
import charts from '../../assets/icon/charts.svg'
import { RouterLink } from 'vue-router';
import { Welcomelayout } from './Welcomelayout';
export const Third = () => (
    <Welcomelayout>
        {{
            icon: () => <img src={charts} />,
            title: () => <h2>会挣钱<br />还要会省钱</h2>,
            button: () => (
                <><RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink></>)
        }}
    </Welcomelayout>
)

Third.displayName = 'Third'