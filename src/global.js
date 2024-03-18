let globalPlugin;

{
    // 全局对象
    const global = {
        log: Vue.ref(''),
        doLog: (x, y) => {
            global.log.value += '<br>' + JSON.stringify(x) + ',' + JSON.stringify(y) + Date()
            console.log(x, y);
        }
    }
    global.doLog('logInit')
    window.global = global

    // PWA渐进应用

    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('src/sw.js')
    }

    // 书签持久化服务

    const debounce = (fn, delay) => {
        let timer = 0
        let d1 = (!delay) ? 5000 : delay;
        return () => {
            if (timer) {
                clearTimeout(timer)
                timer = setTimeout(fn, d1)
            } else {
                timer = setTimeout(fn, d1)
            }
        }
    }

    const throttle = (fn, delay) => {
        let valid = true
        return () => {
            if (!valid) {
                return false
            }
            valid = false
            setTimeout(() => {
                fn()
                valid = true;
            }, (!delay) ? 5000 : delay)
        }
    }

    const getK = () => {
        let k = window.location.href;
        if (k.includes('?id')) {
            k = k.split('?id')[0]
        }
        return k;
    }

    const bookmark_init = () => {
        const k = getK();
        const v = localStorage.getItem(k);
        if (v) {
            window.global.doLog('set: decodeURI(v)', decodeURI(v))
            document.documentElement.scrollTop = v
        }
    }

    let bookmark_listener_enable = false;

    window.addEventListener('scroll', debounce(() => {
        if (!bookmark_listener_enable) return
        const k = getK();
        const v = document.documentElement.scrollTop
        window.global.doLog('decodeURI(k)', decodeURI(k))
        window.global.doLog('decodeURI(v)', decodeURI(v))
        if (k && v) {
            localStorage.setItem(k, v);
        }
    }, 1000))

    globalPlugin = (hook, vm) => {
        hook.beforeEach(() => {
            bookmark_listener_enable = false
        })
        hook.doneEach(() => {
            bookmark_init()
            setTimeout(() => {
                bookmark_init()
                bookmark_listener_enable = true
            }, 2000)
        })
    }

}