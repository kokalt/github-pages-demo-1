import { defineComponent, ref } from "vue";

export const App = defineComponent({
    setup() {
        const count = ref(0)
        const onclick = () => count.value += 1
        return () => (
            <>
                <div>
                    {count.value}
                </div>
                <button onClick={onclick}>+1</button>
            </>
        )
    }
})
