<template>
    <div class="hongguan">
        <!-- <div class="tops" @mouseenter="yiru" @mouseleave="yichu">
      <transition name="transitionTop">
        <div class="block" v-show="showTop">
          <div class="img" @click="tuichu"></div>
        </div>
      </transition>
    </div> -->
        <div class="fanhui" @click="tuichu"></div>
        <div class="bottoms">
            <div class="blocks" @click="dyClick4">
                <div class="icon" :class="show220 ? 'icon2' : ''"></div>
                <span style="color: #c000c0">220kV</span>
            </div>
            <div class="blocks" @click="dyClick3">
                <div class="icon" :class="show110 ? 'icon2' : ''"></div>
                <span style="color: #008000">110kV</span>
            </div>
            <div class="blocks" @click="dyClick2">
                <div class="icon" :class="show35 ? 'icon2' : ''"></div>
                <span style="color: #ffcc00">35kV</span>
            </div>
            <div class="blocks" @click="dyClick1">
                <div class="icon" :class="show10 ? 'icon2' : ''"></div>
                <span style="color: #b94842">10kV</span>
            </div>
        </div>
        <div class="zhezhao" v-show="showZheZhao">
            <div class="iconss"></div>
            <div class="bList">
                <div
                    class="bListItem"
                    v-show="list.length > 1"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <span>{{ item }}</span>
                </div>
                <div
                    class="bListItem"
                    v-show="list.length <= 1"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <span class="blSpan">{{ item }}</span>
                </div>
            </div>
        </div>
        <!-- 蒙版 -->
        <div class="zhezhao2" v-show="showMb">
            <div class="zBlocs">
                <div class="closezB" @click="closeMbclick"></div>
                <div class="titles">
                    <span>图形加载提醒</span>
                </div>
                <div class="icons"></div>
                <div class="titleItem">
                    <span>构建未完善时，查询条件会存在缺失情况 !</span>
                </div>
                <div class="mbBtn mbBtn2" @click="closeMbclick">
                    <span>继续加载</span>
                </div>
                <div class="mbBtn" @click="tuichu2">
                    <span>关闭</span>
                </div>
            </div>
            <!-- <div class="zhezhao2" v-show="showMb">
      <div class="zBlocs">
        <div class="closezB" @click="closeMBclick"></div>
        <div class="titles">
          <span>场景创建提醒</span>
        </div>
        <div class="icons"></div>
        <div class="titleItem">
          <span>电网构架已生成：</span>
          <span class="span1" v-for="(item, index) in kvList" :key="index"
            >{{ item }},</span
          >
        </div>
        <div class="mbBtn" @click="cjClick">
          <span>创建</span>
        </div>
      </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "hongguan",
    components: {},
    data() {
        return {
            showTop: false,
            show10: false,
            show35: false,
            show110: false,
            show220: false,
            showZheZhao: false,
            list: ["数据请求中"],
            index1: 0,
            index2: 0,
            index3: 0,
            index4: 0,
            index5: 0,
            index6: 0,
            index7: 0,
            index8: 0,
            showMb: false,
            kvList: [],
        };
    },
    created() {},
    mounted() {
        let that = this;
        that.$bus.$on("closeLoading", (e) => {
            if (e.type == "false") {
                that.list = e.obj;
            } else {
                that.showZheZhao = false;
            }
        });
    },
    activated() {
        this.show10 = false;
        this.show35 = false;
        this.show110 = false;
        this.show220 = false;
        this.getSelectKv();
        let that = this;
        // that.$bus.$emit("isShowZNZ", true);
    },
    deactivated() {
        this.showTop = false;
        this.show10 = false;
        this.show35 = false;
        this.show110 = false;
        this.show220 = false;
        this.showZheZhao = false;
        this.index1 = 0;
        this.index2 = 0;
        this.index3 = 0;
        this.index4 = 0;
        this.index5 = 0;
        this.index6 = 0;
        this.index7 = 0;
        this.index8 = 0;
        this.showMb = false;
        this.getSelectKv();

        let that = this;
        that.$bus.$emit("hongClick");
    },
    methods: {
        closeMbclick() {
            this.showMb = false;
        },
        getSelectKv() {
            let data = {
                functionName: "GetSelectKv",
                backFunctionName: "BackGetSelectKv",
                functionParameters: [
                    {
                        key: "GetSelectKv",
                        value: "",
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.BackGetSelectKv = this.BackGetSelectKv;
        },

        BackGetSelectKv(e) {
            let data = JSON.parse(e).value;
            for (let i = 0; i < data.length; i++) {
                if (data[i] == "交流10kV") {
                    this.show10 = true;
                    this.index1 = 1;
                }
                if (data[i] == "交流35kV") {
                    this.show35 = true;
                    this.index2 = 1;
                }
                if (data[i] == "交流110kV") {
                    this.show110 = true;
                    this.index3 = 1;
                }
                if (data[i] == "交流220kV") {
                    this.show220 = true;
                    this.index4 = 1;
                }
            }
        },
        getSelectKv2() {
            let data = {
                functionName: "GetSelectKv",
                backFunctionName: "BackGetSelectKv2",
                functionParameters: [
                    {
                        key: "GetSelectKv",
                        value: "",
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.BackGetSelectKv2 = this.BackGetSelectKv2;
        },
        BackGetSelectKv2(e) {
            let data = JSON.parse(e).value;
            if (data.length != 4) {
                this.showMb = true;
            } else {
                this.$router.push({
                    path: "/index",
                });
                this.$bus.$emit("currIndexs");
                let v = { ChooseType: "SwitchMactv", value: false };
                let data = {
                    functionName: "Sundry",
                    functionParameters: [
                        {
                            key: "Sundry",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        yiru() {
            this.showTop = true;
        },
        yichu() {
            this.showTop = false;
        },
        tuichu() {
            this.getSelectKv2();
            this.$bus.$emit("isShowZNZ", false);
        },
        tuichu2() {
            this.$bus.$emit("isShowZNZ", false);
            this.$router.push({
                path: "/index",
            });
            this.$bus.$emit("currIndexs");
            let v = { ChooseType: "SwitchMactv", value: false };
            let data = {
                functionName: "Sundry",
                functionParameters: [
                    {
                        key: "Sundry",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        dyClick1() {
            if (this.show10) {
                this.show10 = false;
            } else {
                this.show10 = true;
                if (this.index1 == 0) {
                    this.list = ["数据请求中"];
                    if (this.index5 == 0) {
                        this.showZheZhao = true;
                        this.index5 = 1;
                    }
                }
            }
            let v = {
                PowerLevel: "交流10kV",
                value: this.show10,
                data: [
                    {
                        key: "fbzt",
                        value: "已发布",
                    },
                    {
                        key: "dydj",
                        value: "交流10kV",
                    },
                    {
                        key: "ssdt",
                        value: window.xianMing,
                    },
                ],
            };
            let data = {
                functionName: "SwitchPowerLevel",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "SwitchPowerLevel",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        dyClick2() {
            if (this.show35) {
                this.show35 = false;
            } else {
                this.show35 = true;
                if (this.index2 == 0) {
                    this.list = ["数据请求中"];

                    if (this.index6 == 0) {
                        this.showZheZhao = true;
                        this.index6 = 1;
                    }
                }
            }
            let v = {
                PowerLevel: "交流35kV",
                value: this.show35,
                data: [
                    {
                        key: "fbzt",
                        value: "已发布",
                    },
                    {
                        key: "dydj",
                        value: "交流35kV",
                    },
                    {
                        key: "ssdt",
                        value: window.xianMing,
                    },
                ],
            };
            let data = {
                functionName: "SwitchPowerLevel",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "SwitchPowerLevel",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        dyClick3() {
            if (this.show110) {
                this.show110 = false;
            } else {
                this.show110 = true;
                if (this.index3 == 0) {
                    this.list = ["数据请求中"];

                    if (this.index7 == 0) {
                        this.showZheZhao = true;
                        this.index7 = 1;
                    }
                }
            }
            let v = {
                PowerLevel: "交流110kV",
                value: this.show110,
                data: [
                    {
                        key: "fbzt",
                        value: "已发布",
                    },
                    {
                        key: "dydj",
                        value: "交流110kV",
                    },
                    {
                        key: "ssdt",
                        value: window.xianMing,
                    },
                ],
            };
            let data = {
                functionName: "SwitchPowerLevel",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "SwitchPowerLevel",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        dyClick4() {
            if (this.show220) {
                this.show220 = false;
            } else {
                this.show220 = true;
                if (this.index4 == 0) {
                    this.list = ["数据请求中"];

                    if (this.index8 == 0) {
                        this.showZheZhao = true;
                        this.index8 = 1;
                    }
                }
            }
            let v = {
                PowerLevel: "交流220kV",
                value: this.show220,
                data: [
                    {
                        key: "fbzt",
                        value: "已发布",
                    },
                    {
                        key: "dydj",
                        value: "交流220kV",
                    },
                    {
                        key: "ssdt",
                        value: window.xianMing,
                    },
                ],
            };
            let data = {
                functionName: "SwitchPowerLevel",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "SwitchPowerLevel",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
    },
};
</script>
<style>
@keyframes myRotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
<style scoped>
.zhezhao2 {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999999 !important;

    background: rgba(1, 11, 23, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}
.zhezhao2 > .zBlocs {
    width: 549.84px;
    height: 251.63px;
    background: url("../../assets/image/app/bgs.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.zhezhao2 > .zBlocs > .titles {
    width: 270px;
    height: 40px;
    position: absolute;
    left: 39px;
    top: 18px;
}

.zhezhao2 > .zBlocs > .titles > span {
    font-family: YouSheBiaoTiHei;
    font-size: 40px;
    font-weight: normal;
    line-height: 40px;
    color: #e8efff;
}
.closezB {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 27px;
    right: 14px;
    background: url("../../assets/image/app/cha.png") no-repeat !important;
    background-size: 100% 100% !important;
    cursor: pointer;
}
.icons {
    width: 32px;
    height: 28px;
    position: absolute;
    left: 20px;
    top: 97px;
    background: url("../../assets/image/app/icons2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.titleItem {
    width: 470px;
    height: 30px;
    position: absolute;
    left: 62px;
    top: 96px;
    display: flex;
    align-items: center;
}
.titleItem > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 20px;
    font-weight: normal;
    color: #ffffff;
}
.span1 {
    color: #13ffb0 !important;
    font-size: 20px !important;
}
.mbBtn2 {
    right: 127px !important;
}
.mbBtn {
    width: 100px;
    height: 40px;
    position: absolute;
    right: 15px;
    bottom: 44px;
    background: url("../../assets/image/app/btns.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.mbBtn > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    color: #c5c5c5;
}
.mbBtn:hover {
    background: url("../../assets/image/app/btns2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.mbBtn:hover > span {
    color: #ffffff !important;
}
</style>
<style scoped>
.zhezhao {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    /* background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important; */
    background: rgba(1, 11, 23, 0.6);
}

.spans {
    position: absolute;
    left: 880px;
    top: 628px;
    width: 180px;
    height: 60px;
    background: url("img/span.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.iconss {
    width: 158px;
    height: 158px;
    position: absolute;
    left: 904px;
    top: 412px;
    background: url("img/icon.png") no-repeat !important;
    background-size: 100% 100% !important;
    animation: myRotate 3s infinite;
}
</style>
<style scoped>
.hongguan {
    width: 100%;
    height: 100%;
    position: relative;
}
.fanhui {
    width: 38px;
    height: 38px;
    position: absolute;
    left: 37px;
    top: 30px;
    background: url("img/fanhui.png") no-repeat !important;
    background-size: 100% 100% !important;
    cursor: pointer;
}
.tops {
    width: 100%;
    height: 100px;

    position: absolute;
    left: 0;
    top: 0;
}
.tops > .block {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tops > .block > .img {
    width: 76px;
    height: 76px;
    background: url("img/cha.png") no-repeat !important;
    background-size: 100% 100% !important;
    cursor: pointer;
}
.bottoms {
    position: absolute;
    left: 29.73px;
    bottom: 27.46px;
    width: 116.32px;
    height: 156.05px;
    background: url("img/bg.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.bList {
    width: 100%;
    height: 240px;
    position: absolute;
    left: 0;
    top: 622px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.bListItem {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
}
.blSpan {
    margin-left: 48% !important;
}
.bListItem > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 20px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 37%;
}
.blocks {
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    margin-top: 12px;
}
.blocks > .icon {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    margin-right: 10px;
    background: url("img/x1.png") no-repeat;
    background-size: 100% 100%;
}
.icon2 {
    background: url("img/x2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.blocks > span {
    font-family: SourceHanSansSC-Bold;
    font-size: 18px;
    font-weight: bold;
}
</style>