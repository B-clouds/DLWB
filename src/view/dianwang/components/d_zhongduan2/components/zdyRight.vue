<template>
    <div class="zdyRight">
        <div class="jcxx">
            <div class="j_titles">
                <span>起点信息</span>
            </div>
            <div class="kong"></div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>起点ID</span>
                </div>
                <div class="jbRight">
                    <span>{{ qdsb }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>起点名称</span>
                </div>
                <div class="jbRight2">
                    <span>{{ qdsbmc }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>截面类型</span>
                </div>
                <div class="jbRight2">
                    <span>{{ qdjmlx }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>起点位置</span>
                </div>
                <div class="jbRight2">
                    <span>{{ qdwz }}</span>
                </div>
            </div>
        </div>

        <div class="jcxx2">
            <div class="j_titles">
                <span>终点信息</span>
            </div>
            <div class="kong"></div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>终点ID</span>
                </div>
                <div class="jbRight">
                    <span>{{ zdsb }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>终点名称</span>
                </div>
                <div class="jbRight2">
                    <span>{{ zdsbmc }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>截面类型</span>
                </div>
                <div class="jbRight2">
                    <span>{{ zdjmlx }}</span>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>终点位置</span>
                </div>
                <div class="jbRight2">
                    <span>{{ zdwz }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "zdyRight",
    data() {
        return {
            qdsb: "", //起点ID
            qdsbmc: "", //起点名称
            qdjmlx: "", //起点截面类型
            qdwz: "", //起点位置
            zdsb: "", //终点ID
            zdsbmc: "", //终点名称
            zdjmlx: "", //终点截面类型
            zdwz: "", //终点位置
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("qdId", (e) => {
            that.qdsb = e.oid;
            that.qdsbmc = e.sbmc;
            that.qdjmlx = e.jmlx;
            that.qdwz = e.x + "," + e.y;
        });
        that.$bus.$on("zdId", (e) => {
            that.zdsb = e.oid;
            that.zdsbmc = e.sbmc;
            that.zdjmlx = e.jmlx;
            that.zdwz = e.x + "," + e.y;
        });
    },
    methods: {
        jmClick(e) {
            this.jm_show = e;
        },
    },
};
</script>

<style scoped>
.zdyRight {
    width: 346px;
    height: 790px;
    position: fixed;
    right: 11px;
    top: 125px;
}

.jcxx {
    width: 100%;
    height: 274px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.jcxx2 {
    width: 100%;
    height: 274px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
    margin-top: 20px;
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
