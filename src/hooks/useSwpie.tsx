import { computed, onMounted, onUnmounted, ref, Ref } from "vue";
type Point = {
    x: number;
    y: number;
}

export const useSwipe = (element: Ref<HTMLElement | null>) => {
    const swipe = ref(false)
    const start = ref<Point>()
    const end = ref<Point>()
    const distance = computed(() => {
        if (!start.value || !end.value) { return null }
        return {
            x: end.value.x - start.value.x,
            y: end.value.y - start.value.y,
        }
    })
    const direction = computed(() => {
        if (!distance.value) { return '' }
        const { x, y } = distance.value
        if (Math.abs(x) > Math.abs(y)) {
            return x > 0 ? 'right' : 'left'
        } else {
            return y > 0 ? 'down' : 'up'
        }
    })
    const onStart = (e: TouchEvent) => {
        swipe.value = true
        end.value = start.value = { x: e.touches[0].screenX, y: e.touches[0].screenY }
    }

    const onMove = (e: TouchEvent) => {
        if (!swipe.value) { return }
        end.value = { x: e.touches[0].screenX, y: e.touches[0].screenY }
    }
    const onEnd = () => {
        swipe.value == false
    }
    onMounted(() => {
        if (!element) { return }
        element.value?.addEventListener('touchstart', onStart)
        element.value?.addEventListener('touchmove', onMove)
        element.value?.addEventListener('touchend', onEnd)
    })
    onUnmounted(() => {
        if (!element) { return }
        element.value?.removeEventListener('touchstart', onStart)
        element.value?.removeEventListener('touchmove', onMove)
        element.value?.removeEventListener('touchend', onEnd)
    })
    return {
        swipe,
        direction,
        distance
    }
}