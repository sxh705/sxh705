let times = 25;
let cover = () => {
    console.log(times)
    if (--times <= 0) return;
    if (document.querySelector("#jsdcsdnnewjkdnkjasj") == null) {
        setTimeout(cover, 10);
        return;
    }
    let app = Vue.createApp({
        data() {
            return {
                url: ""
            }
        },
        methods: {
            IsPhone: function () {
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
                    xhr.open("GET", "https://bing.img.run/1366x768.php", true);
                    xhr.send(null);
                    let that = this;
                    xhr.onload = () => {
                        let url = xhr.responseURL;
                        if (isPhone) {
                            that.url = url.replace("1366x768", "768x1366");
                        } else {
                            that.url = url.replace("1366x768", "1366x768");
                        }
                        localStorage.setItem("url_val", that.url);
                    }
                }
            },
        },
        mounted() {
            this.IsPhone();
        },
    });
    app.mount("#jsdcsdnnewjkdnkjasj");
    times = 25;
};

