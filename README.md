# sxh的个人主页

## 使用docsify进行构建

* 来自: https://github.com/docsifyjs/docsify-template/blob/main/index.html

* 教程：https://docsify.js.org/#/zh-cn/quickstart

* 编辑：https://github.com/sxh705/sxh705.github.io/tree/main

* 本地查看：终端 -> anywhere

* 远程查看：https://sxh705.github.io/

<script>
let app = Vue.createApp({
    data() {
        return {
            url: ""
        }
    },
    methods: {
        IsPhone : function () {
            let date = new Date();
            let dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            let dateSto = localStorage.getItem("url_date");
            if (dateStr == dateSto) {
                this.url = localStorage.getItem("url_val", dateStr);
            } else {
                localStorage.setItem("url_date", dateStr);
                let info = navigator.userAgent;
                let isPhone = /mobile/i.test(info);
                let xhr = new XMLHttpRequest();
                xhr.open("GET", "https://bing.img.run/m.php", false);
                xhr.send(null);
                let url = xhr.responseURL;
                if (isPhone) {
                    this.url = url.replace("1080x1920", "768x1366");
                } else {
                    this.url = url.replace("1080x1920", "1366x768");
                }
                localStorage.setItem("url_val", this.url);
            }
        },
    },
    mounted() {
        this.IsPhone();
    },
    unmounted() {
    },
})
app.mount("#jsdcsdnnewjkdnkjasj");
</script>