
import s from './First.module.scss'
import cloud from '../../assets/icon/cloud.svg'
import { RouterLink } from 'vue-router';
import { Welcomelayout } from './Welcomelayout';
export const Forth = () => (
    <Welcomelayout>
        {{
            icon: () => <img src={cloud} />,
            title: () => <h2>会挣钱<br />还要会省钱</h2>,
            button: () => (<>                 <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/start">开始应用</RouterLink>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink></>)
        }}
    </Welcomelayout>
)
Forth.displayName = 'Forth'