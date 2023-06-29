<template>
    <div class="wuli">
        <div class="jcxx2">
            <div class="j_titles">
                <span>间隔物理信息</span>
            </div>
            <div class="kong"></div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>间隔ID：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="jgdybh"
                            placement="top-start"
                        >
                            <span>{{ jgdybh }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>间隔类型：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="jgdylx"
                            placement="top-start"
                        >
                            <span>{{ jgdylx }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>间隔名称：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="jgdymc"
                            placement="top-start"
                        >
                            <span>{{ jgdymc }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>所属电站：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="ssdz"
                            placement="top-start"
                        >
                            <span>{{ ssdz }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>所属地市：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="ssds"
                            placement="top-start"
                        >
                            <span>{{ ssds }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>运维单位：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="ywdw"
                            placement="top-start"
                        >
                            <span>{{ ywdw }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>电压等级：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="dydj"
                            placement="top-start"
                        >
                            <span>{{ dydj }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>投运日期：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="tyrq"
                            placement="top-start"
                        >
                            <span>{{ tyrq }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>退运日期：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="tuiyrq"
                            placement="top-start"
                        >
                            <span>{{ tuiyrq }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>间隔编号：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="jgdybh"
                            placement="top-start"
                        >
                            <span>{{ jgdybh }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "wuli",
    data() {
        return {
            jgdybh: "", //间隔id
            jgdylx: "", //间隔类型
            jgdymc: "", //间隔名称
            ssdz: "", //所属电站
            ssds: "", //所属地市
            ywdw: "", //运维单位
            dydj: "", //电压等级
            Str_Unit: "", //运维单位
            tyrq: "", //投运日期
            tuiyrq: "", //退运日期
            jgdybh: "", //间隔编号
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("hangObjs", (e) => {
            that.jgdybh = e.jgdybh;
            that.jgdylx = e.jgdylx;
            that.jgdymc = e.jgdymc;
            that.ssdz = e.ssdz;
            that.ssds = e.ssds;
            that.ywdw = e.ywdw;
            that.dydj = e.dydj;
            that.tyrq = e.tyrq;
            that.tuiyrq = e.tuiyrq;
            that.jgdybh = e.jgdybh;
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
    width: 379px;
    height: 680px;
    position: fixed;
    left: 11px;
    top: 125px;
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
    height: 932px;
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
    margin-bottom: 11px;
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
    width: 80px;
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
<style scoped>
.jcxx {
    width: 100%;
    height: 238px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.jcxx2 {
    width: 100%;
    height: 412px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.j_titles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background: url("img/jtitle.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}
.j_titles > span {
    font-family: Source Han Sans SC;
    font-size: 20px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 18px;
}

.kong {
    width: 100%;
    height: 40px;
}
.j_item {
    width: 364px;
    height: 66px;
    margin-left: 8px;
    margin-top: 6px;
    background: url("img/jbgitem.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    justify-content: space-between;
}
.j_item > .items {
    width: 170px;
    height: 100%;
    margin-left: 6px;
    display: flex;
    justify-content: space-between;
}
.j_item > .items > .lefts {
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
}
.j_item > .items > .lefts > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #6df0ff;
}
.j_item > .items > .rights {
    width: 90px;
    height: 30%;
    margin-top: 13%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.j_item > .items > .rights::-webkit-scrollbar {
    display: none;
}
.j_item > .items > .rights > span {
    font-family: Source Han Sans SC;

    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #d8d8d8;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap !important;
}
</style>
