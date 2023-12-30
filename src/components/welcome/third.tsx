
import s from './Welcome.module.scss'
export const Third = () => (
    <div class={s.card}>
        <svg>
            <use xlinkHref='#charts'></use>
        </svg>
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
)

Third.displayName = 'Third'