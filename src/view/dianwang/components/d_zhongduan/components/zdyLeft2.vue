<template>
    <div class="zdyLeft">
        <div class="jcxx">
            <div class="j_titles">
                <span>基本信息</span>
            </div>
            <div class="kong"></div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>节点ID</span>
                </div>
                <div class="jbRight">
                    <span>{{ gljd }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>节点名称</span>
                </div>
                <div class="jbRight2">
                    <span>{{ sbmc }}</span>
                </div>
            </div>

            <div class="jbBlock">
                <div class="jbLeft">
                    <span>截面类型</span>
                </div>
                <div class="jbRight2">
                    <span>{{ jmlx }}</span>
                </div>
            </div>

            <div class="jbBlock">
                <div class="jbLeft">
                    <span>运维单位</span>
                </div>
                <div class="jbRight2">
                    <span>{{ ywdw }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>管廊高度</span>
                </div>
                <div class="jbRight2">
                    <span>{{ glgd }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>管廊宽度</span>
                </div>
                <div class="jbRight2">
                    <span>{{ glkd }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "zdyLeft",
    data() {
        return {
            gljd: "", //节点id
            sbmc: "", //节点名称
            jmlx: "", //截面
            ywdw: "", //运维单位
            glgd: "", //管廊高度
            glkd: "", //管廊宽度
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("jdjbxx", (e) => {
            that.gljd = e.gljd;
            that.sbmc = e.sbmc;
            that.jmlx = e.jmlx;
            that.ywdw = e.ywdw;
            that.glgd = e.glgd;
            that.glkd = e.glkd;
        });
    },
    methods: {
        zfTypeClick(e) {
            this.zfType_show = e;
        },
        oamClick(e) {
            this.oam_show = e;
        },
        dyClick(e) {
            this.dy_show = e;
        },
        xlClick(e) {
            this.xl_show = e;
        },
        jmClick(e) {
            this.jm_show = e;
        },
        goNeiJing() {
            this.$emit("goNeiJing");
        },
    },
};
</script>
<style>
/* 下拉框样式自定义 */
.el-select {
    width: 100% !important;
    height: 100% !important;
}
.inputs .el-select > .el-input > .el-input__inner {
    height: 32px !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    border: 0 !important;
    font-family: SourceHanSansSC-Regular !important;
    font-size: 14px !important;
    font-weight: normal !important;
    line-height: 32px !important;
    margin-left: 4px;
    color: #ffffff !important;
}
.el-scrollbar__wrap {
    margin: 0 !important;
}
.el-scrollbar__wrap::-webkit-scrollbar {
    display: none; /*隐藏滚动条*/
}
</style>
<style scoped>
.zdyLeft {
    width: 346px;
    height: 442px;
    position: fixed;
    left: 11px;
    top: 125px;
}

.jcxx {
    width: 100%;
    height: 100%;
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
</style>
<style scoped>
.kong {
    width: 100%;
    height: 54px;
}
.jbBlock {
    width: 100%;
    height: 34px;
    display: flex;
    margin-bottom: 18px;
    position: relative;
}
.jbBtn2 {
    position: absolute;
    top: 1px;
    right: 114px !important;
}
.jbBlock > .jbBtn {
    width: 81px;
    height: 33px;
    position: absolute;
    top: 1px;
    right: 22px;
    background: url("img/btns.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.jbBlock > .jbBtn > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
}
.jbBlock > .jbLeft {
    width: 97px;
    height: 100%;
    display: flex;
    align-items: center;
}
.jbBlock > .jbLeft > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 21px;
}
.jbBlock > .jbRight {
    width: 228px;
    height: 100%;
    display: flex;
    align-items: center;
    background: url("img/jbInput.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.jbBlock > .jbRight > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: #ada9a9;
    margin-left: 11px;
}
.jbBlock > .jbRight2 {
    width: 228px;
    height: 100%;
    background: url("img/jbInput2.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}
.jbBlock > .jbRight2 > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: #ada9a9;
    margin-left: 11px;
}
</style>
<style scoped>
.inputs {
    width: 100%;
    height: 100%;
    /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
    position: relative;
    background: rgba(25, 61, 112, 0.8);
    box-sizing: border-box;
    border: 1px solid #3876b6;
}
.inputs > img {
    position: absolute;
    top: 10px;
    right: 8px;
    width: 14px;
    height: 8px;
}
</style>
