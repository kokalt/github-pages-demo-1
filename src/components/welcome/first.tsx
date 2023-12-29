
import s from './First.module.scss'
import pig from '../../assets/icon/pig.svg'
import { RouterLink } from 'vue-router';
import { Welcomelayout } from './Welcomelayout';
export const First = () =>
(
    <Welcomelayout>
        {{
            icon: () => <img class={s.pig} src={pig} />,
            title: () => <h2>会挣钱<br />还要会省钱</h2>,
            button: () => (
                <><RouterLink class={s.fake} to="/start">跳过</RouterLink>
                    <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink></>)
        }}
    </Welcomelayout>
)

First.displayName = 'First'