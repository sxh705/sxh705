let readingProgressPlugin;

{
  // 保持阅读进度
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
      document.documentElement.scrollTop = v
    }
  }
  let bookmark_listener_enable = false;
  window.addEventListener('scroll', debounce(() => {
    if (!bookmark_listener_enable) return
    const k = getK();
    const v = document.documentElement.scrollTop
    if (k && v) {
      localStorage.setItem(k, v);
    }
  }, 1000))
  readingProgressPlugin = (hook, vm) => {
    hook.beforeEach(() => {
      let k = window.location.href;
      if (k.includes('?id')) {
        k = k.split('?id')[0]
        window.location.href = k;
      }
      bookmark_listener_enable = false
    })
    hook.doneEach(() => {
      bookmark_init()
      setTimeout(() => {
        bookmark_listener_enable = true
      }, 2000)
    })
  }
}