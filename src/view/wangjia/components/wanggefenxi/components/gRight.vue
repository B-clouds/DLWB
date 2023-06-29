<template>
    <div class="wuli">
        <!-- title -->
        <div class="w_title">
            <span>设备规模</span>
        </div>
        <div class="wbb">
            <div class="w_block" v-for="item in wuliList" :key="item.key">
                <div class="block">
                    <div class="left">
                        <span class="span1">{{ item.key }}：</span>
                    </div>
                    <span class="span2">{{ item.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "jRight",
    data() {
        return {
            wuliList: [
                { key: "站房", value: "XXXXXXX" },
                { key: "线路", value: "XXXXXXX" },
                { key: "变压器", value: "XXXXXXX" },
                { key: "用电户数", value: "XXXXXXX" },
                { key: "光伏", value: "XXXXXXX" },
                { key: "储能", value: "XXXXXXX" },
            ],
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("detiles2", (e) => {
            that.getDetail(e);
        });
    },
    activated() {},
    methods: {
        // 获取详细数据
        getDetail(e) {
            // 监听点击返回
            let ids = [];
            ids.push(e);
            let data = {
                action: "power.detail",
                params: {
                    nodes: ids,
                },
                callback: "detail",
            };
            ue.interface.broadcast("power.detail", JSON.stringify(data));
            window.ue.interface.detail = this.detail;
        },
        detail(e) {
            let data = e.params;
            this.wuliList = data.nodes[0].props;
        },
    },
};
</script>

<style scoped>
.wuli {
    width: 451.38px;
    height: 90%;
    position: fixed;
    right: 20px;
    top: 75.33px;
}
</style>
<style scoped>
.w_title {
    width: 100%;
    height: 47.3px;
    background: url("img/title.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}
.w_title > span {
    margin-left: 38.33px;
    font-family: YouSheBiaoTiHei;
    font-size: 26px;
    margin-top: -4px;
    font-weight: normal;
    background-image: -webkit-linear-gradient(
        bottom,
        #6bedff,
        #ffffff
    ) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
</style>
<style scoped>
.wbb {
    width: 100%;
    height: 980px;
    overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
    display: none;
}
.w_block {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
}
.w_block > .block {
    width: 421.44px;
    height: 100%;
    background: url("img/wbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}

.w_block > .block > .left {
    min-width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 2px;
}
.span1 {
    font-family: SourceHanSansSC-Regular;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #cecfd0;
}
.span2 {
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ffffff;
}
</style>