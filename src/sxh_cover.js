// bing封面

let sxh_cover;

{
    let i = 0;
    let cover = () => {
        if (!window.location.href.endsWith("/#/")) return;
        if (document.querySelector("#jsdcsdnnewjkdnkjasj") == null) {
            // console.log("coverTO！")
            setTimeout(cover, 100);
            return;
        }
        // console.log("coverTIn")
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
    };

    sxh_cover = (hook, vm) => {
        hook.doneEach(() => {
            cover();
        })
    }

}
