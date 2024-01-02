(() => {
    const store = Vue.reactive({
        count: 7051,
    })

    let count1 = 3;
    let count2 = Vue.ref(3);

    window.sxhGl = {
        store,
        count1,//不会保存状态
        count2,//会保存状态
    }

    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('src/sw.js')
    }
})()

let _404 = () => {
    Vue.createApp({
        data() {
            return {sec: 1000}
        },
        mounted() {
            let url = window.location.href;
            if (url.endsWith("/#/note")) {
                window.location.href = url + "/";
                return;
            }
            let step = 1000;
            let f = () => {
                setTimeout(() => {
                    if (this.sec > 0) {
                        this.sec -= step;
                        f();
                    } else {
                        if (url !== window.location.href) {
                            return;
                        }
                        window.location.href = window.location.origin
                    }
                }, step);
            }
            f();
        }
    }).mount("#_404_sjhc")
}
