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
