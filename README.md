# sxh的个人主页

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
                xhr.open("GET", "https://bing.img.run/1366x768.php", false);
                xhr.send(null);
                let url = xhr.responseURL;
                if (isPhone) {
                    this.url = url.replace("1366x768", "768x1366");
                } else {
                    this.url = url.replace("1366x768", "1366x768");
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