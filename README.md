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
            IsPhone: function() {
                //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
                var info = navigator.userAgent;
                //通过正则表达式的test方法判断是否包含“Mobile”字符串
                var isPhone = /mobile/i.test(info);
                //如果包含“Mobile”（是手机设备）则返回true
                console.log(isPhone);
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://bing.img.run/m.php", false);
                xhr.send(null);
                let url = xhr.responseURL;
                if (isPhone) {
                    this.url = url.replace("1080x1920", "768x1366");
                } else {
                    this.url = url.replace("1080x1920", "1366x768");
                }
                return isPhone;
            },
        },
        mounted() {
            this.IsPhone();
        }
    })
    app.mount("#jsdcsdnnewjkdnkjasj");
</script>