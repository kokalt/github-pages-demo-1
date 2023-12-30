export const throttle = (fn: Function, time: number) => {
    let tiemr: number | undefined = undefined
    return (...args: any[]) => {
        if (tiemr) {
            return
        } else {
            fn(...args)
            tiemr = setTimeout(() => {
                tiemr = undefined
            }, time)
        }
    }
}