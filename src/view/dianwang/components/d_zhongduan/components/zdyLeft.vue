<template>
    <div class="zdyLeft">
        <div class="jcxx">
            <div class="j_titles">
                <span>基本信息</span>
            </div>
            <div class="kong"></div>

            <div class="jbBlock">
                <div class="jbLeft">
                    <span>节点名称</span>
                </div>
                <div class="jbRight2">
                    <input v-model="sbmc" placeholder="最大输入不超过10个字" />
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>投运日期</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-date-picker
                            v-model="value1"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择投运日期"
                        >
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>退运日期</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-date-picker
                            v-model="value2"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择退运日期"
                        >
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>所属线路</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-select
                            v-model="ssxl"
                            @visible-change="xlClick"
                            placeholder=""
                        >
                            <el-option
                                v-for="item in xl"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <img v-show="!xl_show" src="./img/xia.png" />
                        <img v-show="xl_show" src="./img/shang.png" />
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>截面类型</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-select
                            v-model="jmlx"
                            @visible-change="jmClick"
                            placeholder=""
                        >
                            <el-option
                                v-for="item in jm"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <img v-show="!jm_show" src="./img/xia.png" />
                        <img v-show="jm_show" src="./img/shang.png" />
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>管廊高度</span>
                </div>
                <div class="jbRight2">
                    <input v-model="glgd" placeholder="最大输入不超过10个字" />
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>管廊宽度</span>
                </div>
                <div class="jbRight2">
                    <input v-model="glkd" placeholder="最大输入不超过10个字" />
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>运维单位</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-select
                            v-model="ywdw"
                            @visible-change="oamClick"
                            placeholder=""
                        >
                            <el-option
                                v-for="item in oam"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <img v-show="!oam_show" src="./img/xia.png" />
                        <img v-show="oam_show" src="./img/shang.png" />
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>电压等级</span>
                </div>
                <div class="jbRight2">
                    <div class="inputs">
                        <el-select
                            v-model="dydj"
                            @visible-change="dyClick"
                            placeholder=""
                        >
                            <el-option
                                v-for="item in dianya"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <img v-show="!dy_show" src="./img/xia.png" />
                        <img v-show="dy_show" src="./img/shang.png" />
                    </div>
                </div>
            </div>
            <div class="jbBlock">
                <div class="jbLeft">
                    <span>建构方式</span>
                </div>
                <div class="jbRight">
                    <span>自定义</span>
                </div>
            </div>
            <div class="jbBlock">
                <div
                    class="jbBtn jbBtn2"
                    v-show="showUpdate"
                    @click="goNeiJing"
                >
                    <span>内景视角</span>
                </div>
                <div class="jbBlock">
                    <div class="jbBtn" v-show="!showUpdate" @click="addClick">
                        <span>新增</span>
                    </div>
                    <div class="jbBtn" v-show="showUpdate" @click="updateClick">
                        <span>更新</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import time from "@/utils/currentDate";

export default {
    name: "zdyLeft",
    data() {
        return {
            // ------------------------站房类型------------------
            zfType: [
                {
                    value: "变电站",
                    label: "变电站",
                },
                {
                    value: "",
                    label: "全部",
                },
            ],
            zfType_value: "",
            zfType_show: false,
            //  ----------------------------------------- 运维单位
            oam: [
                {
                    value: "国网雄县供电公司",
                    label: "国网雄县供电公司",
                },
                {
                    value: "",
                    label: "全部",
                },
            ],
            ywdw: "",
            oam_show: false,
            //------------------------------------ 所属线路------------------------------
            xl: [
                {
                    value: "",
                    label: "全部",
                },
            ],
            ssxl: "",
            xl_show: false,
            // ---------------------------------截面类型----------------------------------
            jm: [
                {
                    value: "3*2*1",
                    label: "3*2*1",
                },
                {
                    value: "1*1*1",
                    label: "1*1*1",
                },
                {
                    value: "1*1*0",
                    label: "1*1*0",
                },
                {
                    value: "",
                    label: "全部",
                },
            ],
            jmlx: "",
            jm_show: false,
            // ------------------------------电压--------------------------
            dianya: [
                {
                    value: "交流500kV",
                    label: "500kV",
                },
                {
                    value: "交流220kV",
                    label: "220kV",
                },
                {
                    value: "交流110kV",
                    label: "110kV",
                },
                {
                    value: "交流35kV",
                    label: "35kV",
                },
                {
                    value: "交流10kV",
                    label: "10kV",
                },
                {
                    value: "交流0.4kV",
                    label: "0.4kV",
                },
                {
                    value: "",
                    label: "全部",
                },
            ],
            dydj: "",
            dy_show: "",
            value1: "", //投运日期
            value2: "", //退运日期
            sbmc: "", //设备名称
            glgd: "", //管廊高度
            glkd: "", //管廊宽度
            showUpdate: false,
            getSjc: "", //存放oid
        };
    },
    deactivated() {
        this.showUpdate = false;
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
            this.$bus.$emit("goNJOID", this.getSjc);
        },
        addClick() {
            let times = time.getCurrentDate();
            let sjc =
                times.year +
                "-" +
                times.month +
                "-" +
                times.date +
                " " +
                times.hours +
                ":" +
                times.minutes +
                ":" +
                times.seconds;
            let sjc2 = Date.parse(sjc) / 1000;
            this.getSjc = "zdy" + sjc2;
            // 发送消息
            let v = {
                TwinType: "CablePGP",
                ModifyType: "New",
                Data: {
                    oid: this.getSjc,
                    sbmc: this.sbmc,
                    tyrq: this.value1,
                    tuiyrq: this.value2,
                    ssxl: this.ssxl,
                    jmlx: this.jmlx,
                    glgd: this.glgd,
                    glkd: this.glkd,
                    ywdw: this.ywdw,
                    dydj: this.dydj,
                    ssdt: window.xianMing,
                    fbzt: "已发布",
                    sfxzdw: 1,
                    zdycj: 1,
                },
            };
            let data = {
                functionName: "CustomGeneration",
                backFunctionName: "addSuccess",
                functionParameters: [
                    {
                        key: "CustomGeneration",
                        value: JSON.stringify(v),
                    },
                ],
            };
            this.selectList = [];

            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.addSuccess = this.addSuccess;
        },
        addSuccess(e) {
            this.showUpdate = true;
            this.$emit("showKJ", true);
            this.$bus.$emit("getKongJian", e);
        },
        updateClick() {
            let v = {
                TwinType: "CablePGP",
                ModifyType: "Update",
                Data: {
                    oid: this.getSjc,
                    sbmc: this.sbmc,
                    tyrq: this.value1,
                    tuiyrq: this.value2,
                    ssxl: this.ssxl,
                    jmlx: this.jmlx,
                    glgd: this.glgd,
                    glkd: this.glkd,
                    ywdw: this.ywdw,
                    dydj: this.dydj,
                    ssdt: window.xianMing,
                    fbzt: "已发布",
                    sfxzdw: 1,
                    zdycj: 1,
                },
            };
            let data = {
                functionName: "CustomGeneration",
                backFunctionName: "updateSuccess",
                functionParameters: [
                    {
                        key: "CustomGeneration",
                        value: JSON.stringify(v),
                    },
                ],
            };
            this.selectList = [];

            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.updateSuccess = this.updateSuccess;
        },
        updateSuccess(e) {
            this.$bus.$emit("getKongJian", e);
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
    height: 696px;
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
    z-index: 999;
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
