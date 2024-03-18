# 首页

博客部署完成 2023.12.15

* [首页](/)

* [test](/test/)

<div id="xh_note_readme">
    <code>
        <div v-html="global.log.value">
        </div>
    </code>
</div>

<script>

Vue.createApp({
    setup: () => {
        const global = window.global
        return { global }
    }
}).mount("#xh_note_readme")

</script>