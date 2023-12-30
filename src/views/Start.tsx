import { defineComponent } from 'vue';
import { Button } from '../shared/Button/Button';
import s from './Start.module.scss';
import { FloatButton } from '../shared/FloatButton/FloatButton';
export const Start = defineComponent({
    setup: (props, context) => {
        return () => (
            <div>
                <div class={s.button_wrapper}>
                    <Button class={s.button}>测试</Button>
                </div>
                <FloatButton iconName='add' />
            </div>

        )
    }
})