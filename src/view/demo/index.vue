<template>
    <div class="demo">
        <img :src="imgs" />
    </div>
</template>
<script>
export default {
    name: "demo",
    components: {},
    data() {
        return {
            imgs: "",
        };
    },
    created() {},
    mounted() {
        // 实现序列帧
        let i = 0;
        setInterval(() => {
            if (i < 179) {
                i++;
            } else if (i == 179) {
                i = 0;
            }
            this.imgs = require("./img/a_" + i + ".png");
        }, 33.51);
    },
    methods: {},
};
</script>
<style scoped>
.demo {
    width: 406px;
    height: 35px;
    margin-left: 10%;
    margin-top: 20%;
}
.demo > img {
    width: 100%;
    height: 100%;
}
</style>