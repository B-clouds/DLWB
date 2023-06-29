<template>
    <div class="morenYe">
        <!-- 站房孪生-站房选址---数据建站管理 -->
        <div class="top_r1" v-show="showZFXZ" @click="sjjClick"></div>
        <!-- 站房孪生-站房选址-自定义建站管理 -->
        <div class="top_r2" v-show="showZFXZ" @click="zf_zdyClick"></div>
        <!-- 站房孪生-间隔查询---数据建站管理 -->
        <div class="top_r5" v-show="showJGCX" @click="sjjClick"></div>

        <!-- 架空孪生-杆塔布点---数据布点 -->
        <div class="top_r3" v-show="showGTBD" @click="sjjClick"></div>
        <!-- 架空孪生-杆塔布点-自定义布点 -->
        <div class="top_r4" v-show="showGTBD" @click="gt_zdyClick"></div>
        <!-- 架空孪生-间隔管理 -->
        <div class="top_r6" v-show="showJGGL" @click="sjjClick"></div>

        <!-- 架空孪生-杆塔布线---数据布线 -->
        <div class="top_r7" v-show="showGTBX" @click="sjjClick"></div>
        <!-- 架空孪生-杆塔布线-自定义布线 -->
        <div class="top_r8" v-show="showGTBX" @click="gt_zdybxClick"></div>

        <!-- 电缆孪生-节点管理---数据布点 -->
        <div class="top_r3" v-show="showJDGL" @click="sjjClick"></div>
        <!-- 电缆孪生-节点管理-自定义布点 -->
        <div class="top_r4" v-show="showJDGL" @click="dl_zdyClick"></div>

        <!-- 电缆孪生-管廊管理-数据管廊 -->
        <div class="top_r9" v-show="showGLGL" @click="sjjClick"></div>
        <!-- 电缆孪生-管廊管理-自定义管廊 -->
        <div class="top_r10" v-show="showGLGL" @click="dl_zdyglClick"></div>

        <!-- 电缆孪生-电缆管理---数据布线 -->
        <div class="top_r11" v-show="showSJBX" @click="sjjClick"></div>

        <!-- 微网孪生-设施布点---数据布点 -->
        <div class="top_r3" v-show="showSXBD" @click="sjjClick"></div>
        <!-- 微网孪生-设施布点-自定义布点 -->
        <div class="top_r4" v-show="showSXBD" @click="ww_zdyClick"></div>

        <!-- ---------------------------------------------左下角按钮----------------------------------------- -->
        <div class="leftBtn">
            <div
                class="leftBlock"
                @click="btnClick(0)"
                :class="currentIndex == 0 ? 'leftBlock2' : ''"
            >
                <span>网架线路</span>
            </div>
            <div class="btnImg"></div>
            <div
                class="rightBlock"
                @click="btnClick(1)"
                :class="currentIndex == 1 ? 'rightBlock2' : ''"
            >
                <span>网架电站</span>
            </div>
        </div>
        <!-- 显示的线路 -->
        <div class="xlBlock" v-show="showxlTk">
            <div class="xlBlockItem">
                <div
                    class="xlItmes"
                    @click="xlClick(0)"
                    :class="xlIndex == 1 ? 'xlItmes2' : ''"
                >
                    <span style="color: rgb(255, 0, 0)">500kV</span>
                </div>
                <div
                    class="xlItmes"
                    @click="xlClick(1)"
                    :class="xlIndex1 == 1 ? 'xlItmes2' : ''"
                >
                    <span style="color: rgb(192, 0, 192)">220kV</span>
                </div>
            </div>
            <div class="xlBlockItem">
                <div
                    class="xlItmes"
                    @click="xlClick(2)"
                    :class="xlIndex2 == 1 ? 'xlItmes2' : ''"
                >
                    <span style="color: rgb(0, 128, 0)">110kV</span>
                </div>
                <div
                    class="xlItmes"
                    @click="xlClick(3)"
                    :class="xlIndex3 == 1 ? 'xlItmes2' : ''"
                >
                    <span style="color: rgb(255, 204, 0)">35kV</span>
                </div>
            </div>
            <div class="xlBlockItem">
                <div
                    class="xlItmes"
                    @click="xlClick(4)"
                    :class="xlIndex4 == 1 ? 'xlItmes2' : ''"
                >
                    <span style="color: rgb(185, 72, 66)">10kV</span>
                </div>
                <div
                    class="xlItmes"
                    @click="xlClick(5)"
                    :class="xlIndex5 == 1 ? 'xlItmes2' : ''"
                    v-show="currentIndex != 1"
                >
                    <span style="color: #76c9f7">0.4kV</span>
                </div>
            </div>
        </div>
        <div class="rightBtn">
            <div
                class="leftBlock"
                @click="rbtnClick(0)"
                :class="dtIndex == 0 ? 'leftBlock2' : ''"
            >
                <span>行政区划</span>
            </div>
            <div class="btnImg"></div>
            <div
                class="rightBlock"
                @click="rbtnClick(1)"
                :class="dtIndex == 1 ? 'rightBlock2' : ''"
            >
                <span>底图加载</span>
            </div>
        </div>
        <!-- 雄安 行政区划 -->
        <div class="qhTK" v-show="showQH && !isShowZD">
            <div
                class="dkBlocks"
                @click="qhClick(0)"
                :class="showRCX ? 'dkBlocks2' : ''"
            >
                <span>容城县</span>
            </div>
            <div
                class="dkBlocks"
                @click="qhClick(1)"
                :class="showXX ? 'dkBlocks2' : ''"
            >
                <span>雄县</span>
            </div>
            <div
                class="dkBlocks"
                @click="qhClick(2)"
                :class="showAXX ? 'dkBlocks2' : ''"
            >
                <span>安新县</span>
            </div>
        </div>
        <!-- 正定 行政区划 -->
        <div class="qhTK" v-show="showQH && isShowZD">
            <div
                class="dkBlocks"
                @click="zqhClick(0)"
                :class="showDQY ? 'dkBlocks2' : ''"
            >
                <span>东曲阳</span>
            </div>
            <div
                class="dkBlocks"
                @click="zqhClick(1)"
                :class="showNQY ? 'dkBlocks2' : ''"
            >
                <span>南曲阳</span>
            </div>
            <div
                class="dkBlocks"
                @click="zqhClick(2)"
                :class="showZJZ ? 'dkBlocks2' : ''"
            >
                <span>周家庄</span>
            </div>
            <div
                class="dkBlocks"
                @click="zqhClick(3)"
                :class="showNBD ? 'dkBlocks2' : ''"
            >
                <span>南白店</span>
            </div>
        </div>
        <!-- 底图弹框 -->
        <div class="dtTk" v-show="showDT">
            <div class="dkBlocks" :class="showYXDT ? 'dkBlocks2' : ''">
                <span>影像底图</span>
            </div>
            <div
                class="dkBlocks"
                @click="dkClick(1)"
                :class="showSWDT ? 'dkBlocks2' : ''"
            >
                <span>三维底图</span>
            </div>
            <div
                class="dkBlocks"
                @click="dkClick(2)"
                :class="showHJDT ? 'dkBlocks2' : ''"
            >
                <span>环境底图</span>
            </div>
            <div
                class="dkBlocks"
                @click="dkClick(3)"
                :class="showDBJZ ? 'dkBlocks2' : ''"
            >
                <span>地表建筑</span>
            </div>
            <div
                class="dkBlocks"
                @click="dkClick(4)"
                :class="showQXSY ? 'dkBlocks2' : ''"
            >
                <span>倾斜摄影</span>
            </div>
        </div>
        <!-- 底图选择错误，弹框 -->
        <div class="zhezhao" v-show="showTk">
            <div class="z_delete">
                <div class="z_d_block">
                    <img class="imgs" src="./img/jj2.png" />
                    <span
                        >请先选择{{
                            dituSpan
                        }}图标，并加载完成后再进行该操作。</span
                    >
                </div>
                <div class="z_btn2">
                    <div class="z_blocks" @click="deleteClicks">
                        <span>确认</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 蒙版 -->
        <div class="zhezhao" v-show="showMB">
            <div class="zBlocs">
                <div class="closezB" @click="closeMBclick"></div>
                <div class="titles">
                    <span>图形加载提醒</span>
                </div>
                <div class="icons"></div>
                <div class="titleItem">
                    <span>当前场景电网构架未加载，请立即加载！</span>
                </div>
                <div class="mbBtn" @click="cjClick">
                    <span>加载</span>
                </div>
            </div>
        </div>
        <!-- -------------------------------- 网架线路加载loading ---------------------------- -->
        <div class="zhezhao" v-show="showZheZhao">
            <div class="iconss"></div>
            <div class="bList">
                <div v-if="list.length > 1">
                    <div
                        class="bListItem"
                        v-for="(item, index) in list"
                        :key="index"
                    >
                        <span>{{ item }}</span>
                    </div>
                </div>
                <div v-if="list.length <= 1">
                    <div
                        class="bListItem"
                        v-for="(item, indey) in list"
                        :key="indey"
                    >
                        <span class="blSpan">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- -------------------------------- 底图加载loading -------------------------------- -->
        <div class="zhezhao" v-show="showZheZhao2">
            <div class="iconss"></div>
            <div class="spans"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mrenYe",
    data() {
        return {
            // 用于存放跳转参数
            storage: "",
            // 显示站房孪生-站房选址跳转按钮
            showZFXZ: false,
            // 显示站房孪生-间隔查询跳转按钮
            showJGCX: false,
            // 显示架空孪生-杆塔布点跳转按钮
            showGTBD: false,
            // 显示架空孪生-间隔管理跳转按钮
            showJGGL: false,
            // 显示架空孪生-杆塔布线跳转按钮
            showGTBX: false,
            // 显示电缆孪生-节点管理
            showJDGL: false,
            // 显示电缆孪生-管廊管理
            showGLGL: false,
            // 显示电缆孪生-电缆管理
            showSJBX: false,
            // 显示微网孪生-设施布点
            showSXBD: false,

            show: false,
            // 左侧按钮Index
            currentIndex: 0,
            // 左侧弹框Index
            xlIndex: -1,
            xlIndex1: -1,
            xlIndex2: -1,
            xlIndex3: -1,
            xlIndex4: -1,
            xlIndex5: -1,
            lindex1: 0,
            lindex2: 0,
            lindex3: 0,
            lindex4: 0,
            lindex5: 0,
            lindex6: 0,
            l2index1: 0,
            l2index2: 0,
            l2index3: 0,
            l2index4: 0,
            l2index5: 0,
            l2index6: 0,
            // 是否显示网架线路加载loading
            showZheZhao: false,
            // 是否显示底图加载loading
            showZheZhao2: false,
            // 存放加载信息
            list: ["数据请求中"],
            // 右侧按钮Index
            dtIndex: -1,
            // 是否显示行政区划弹框
            showQH: false,
            // 是否显示容城县
            showRCX: false,
            // 是否显示雄县
            showXX: false,
            // 是否显示安新县
            showAXX: false,
            // 是否显示东曲阳
            showDQY: false,
            // 是否显示南曲阳
            showNQY: false,
            // 是否显示周家庄
            showZJZ: false,
            // 是否显示南白店
            showNBD: false,
            // 是否显示地图弹框
            showDT: false,
            // 是否选中影像底图
            showYXDT: true,
            // 是否选中三维底图
            showSWDT: false,
            // 是否选中环境地图
            showHJDT: false,
            // 是否选中地表建筑
            showDBJZ: false,
            // 是否选中切斜摄影
            showQXSY: false,
            // 是否显示弹框
            showTk: false,
            // 弹框显示内容
            dituSpan: "",
            // 是否显示工具包
            showGJB: false,
            // 工具下标
            gjbIndex: -1,
            // 显示隐藏弹框
            showxlTk: true,
            // 是否显示继续加载弹框
            showMB: false,
            // 是否是正定县
            isShowZD: false,
        };
    },
    watch: {
        storage(e, f) {
            let data = e;
            this.showZFXZ = false;
            this.showJGCX = false;
            this.showGTBD = false;
            this.showJGGL = false;
            this.showGTBX = false;
            this.showJDGL = false;
            this.showGLGL = false;
            this.showSJBX = false;
            this.showSXBD = false;
            if (data == "gantabudian") {
                this.showGTBD = true;
            } else if (data == "buxianguanli1") {
                this.showGTBX = true;
            } else if (data == "zhanfangxuanzhi") {
                this.showZFXZ = true;
            } else if (data == "jiangeguanli1") {
                this.showJGCX = true;
            } else if (data == "jiangeguanli2") {
                this.showJGGL = true;
            } else if (data == "jiedianguanli") {
                this.showJDGL = true;
            } else if (data == "guanlangguanli") {
                this.showGLGL = true;
            } else if (data == "dianlanguanli") {
                this.showSJBX = true;
            } else if (data == "sheshibudian") {
                this.showSXBD = true;
            } else if (data == "jiangeguanli3") {
            }
        },
    },
    mounted() {
        let that = this;
        that.$bus.$on("ymtz", (e) => {
            that.storage = e;
        });

        that.$bus.$on("closeLoading", (e) => {
            if (e.type == "false") {
                that.list = e.obj;
            } else {
                that.showZheZhao = false;
            }
        });
        that.$bus.$on("closeLoading2", (e) => {
            that.showZheZhao2 = false;
        });
        that.$bus.$on("showRongcheng", (e) => {
            that.showDQY = e.DQY;
            that.showNQY = e.NQY;
            that.showZJZ = e.ZJZ;
            that.showNBD = e.NBD;
            that.showRCX = e.RCX;
            that.showXX = e.XX;
            that.showAXX = e.AXX;
            that.showSWDT = e.SWDT;
            that.showHJDT = e.HJDT;
            that.showDBJZ = e.DBJZ;
            that.showQXSY = e.QXSY;
        });
    },
    activated() {
        this.getSelectKv();
        this.getSelectKvs();

        let data = {
            functionName: "GetXZQH_DTJZ",
            functionParameters: [],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        let xm;
        xm = window.xianMing;
        if (xm == "GWZDX") {
            this.isShowZD = true;
        } else {
            this.isShowZD = false;
        }
    },
    deactivated() {
        this.show = false;
        this.showZheZhao = false;
        this.showxlTk = false;
        this.currentIndex = -1;
        this.xlIndex = -1;
        this.xlIndex1 = -1;
        this.xlIndex2 = -1;
        this.xlIndex3 = -1;
        this.xlIndex4 = -1;
        this.xlIndex5 = -1;
        this.lindex1 = 0;
        this.lindex2 = 0;
        this.lindex3 = 0;
        this.lindex4 = 0;
        this.lindex5 = 0;
        this.lindex6 = 0;
        this.l2index1 = 0;
        this.l2index2 = 0;
        this.l2index3 = 0;
        this.l2index4 = 0;
        this.l2index5 = 0;
        this.l2index6 = 0;
        this.showQH = false;
        this.showDT = false;
        this.dtIndex = -1;
        // this.showYXDT = false;
        // this.showSWDT = false;
        // this.showHJDT = false;
        // this.showDBJZ = false;
        // this.showQXSY = false;
        // this.getSelectKv();
        // this.dtGoUe(0);
    },
    methods: {
        btnClick(e) {
            if (this.currentIndex == e) {
                this.currentIndex = -1;
                this.showxlTk = false;
            } else {
                this.currentIndex = e;
                this.showxlTk = true;

                if (e == 0) {
                    this.xlIndex = -1;
                    this.xlIndex1 = -1;
                    this.xlIndex2 = -1;
                    this.xlIndex3 = -1;
                    this.xlIndex4 = -1;
                    this.xlIndex5 = -1;
                    this.lindex1 = 0;
                    this.lindex2 = 0;
                    this.lindex3 = 0;
                    this.lindex4 = 0;
                    this.lindex5 = 0;
                    this.lindex6 = 0;
                    this.l2index1 = 0;
                    this.l2index2 = 0;
                    this.l2index3 = 0;
                    this.l2index4 = 0;
                    this.l2index5 = 0;
                    this.l2index6 = 0;
                    this.getSelectKv();
                } else {
                    this.xlIndex = -1;
                    this.xlIndex1 = -1;
                    this.xlIndex2 = -1;
                    this.xlIndex3 = -1;
                    this.xlIndex4 = -1;
                    this.xlIndex5 = -1;
                    this.lindex1 = 0;
                    this.lindex2 = 0;
                    this.lindex3 = 0;
                    this.lindex4 = 0;
                    this.lindex5 = 0;
                    this.lindex6 = 0;
                    this.l2index1 = 0;
                    this.l2index2 = 0;
                    this.l2index3 = 0;
                    this.l2index4 = 0;
                    this.l2index5 = 0;
                    this.l2index6 = 0;
                    this.getSelectKvs();
                }
            }
        },
        xlClick(e) {
            if (e == 0) {
                if (this.xlIndex != -1) {
                    this.xlIndex = -1;
                } else {
                    this.xlIndex = 1;
                    if (this.lindex1 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index1 == 0) {
                            this.showZheZhao = true;
                            this.l2index1 = 1;
                        }
                    }
                }

                let show;
                if (this.xlIndex == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流500kV",
                    value: show,
                    data: [
                        {
                            key: "fbzt",
                            value: "已发布",
                        },
                        {
                            key: "dydj",
                            value: "交流500kV",
                        },
                        {
                            key: "ssdt",
                            value: window.xianMing,
                        },
                    ],
                };
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else if (e == 1) {
                if (this.xlIndex1 == 1) {
                    this.xlIndex1 = 0;
                } else {
                    this.xlIndex1 = 1;
                    if (this.lindex2 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index2 == 0) {
                            this.showZheZhao = true;
                            this.l2index2 = 1;
                        }
                    }
                }
                let show;
                if (this.xlIndex1 == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流220kV",
                    value: show,
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
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else if (e == 2) {
                if (this.xlIndex2 == 1) {
                    this.xlIndex2 = 0;
                } else {
                    this.xlIndex2 = 1;
                    if (this.lindex3 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index3 == 0) {
                            this.showZheZhao = true;
                            this.l2index3 = 1;
                        }
                    }
                }
                let show;
                if (this.xlIndex2 == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流110kV",
                    value: show,
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
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else if (e == 3) {
                if (this.xlIndex3 == 1) {
                    this.xlIndex3 = 0;
                } else {
                    this.xlIndex3 = 1;
                    if (this.lindex4 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index4 == 0) {
                            this.showZheZhao = true;
                            this.l2index4 = 1;
                        }
                    }
                }
                let show;
                if (this.xlIndex3 == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流35kV",
                    value: show,
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
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else if (e == 4) {
                if (this.xlIndex4 == 1) {
                    this.xlIndex4 = 0;
                } else {
                    this.xlIndex4 = 1;
                    if (this.lindex5 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index5 == 0) {
                            this.showZheZhao = true;
                            this.l2index5 = 1;
                        }
                    }
                }
                let show;
                if (this.xlIndex4 == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流10kV",
                    value: show,
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
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else if (e == 5) {
                if (this.xlIndex5 == 1) {
                    this.xlIndex5 = 0;
                } else {
                    this.xlIndex5 = 1;
                    if (this.lindex6 == 0) {
                        this.list = ["数据请求中"];
                        if (this.l2index6 == 0) {
                            this.showZheZhao = true;
                            this.l2index6 = 1;
                        }
                    }
                }
                let show;
                if (this.xlIndex5 == 1) {
                    show = true;
                } else {
                    show = false;
                }
                let v = {
                    PowerLevel: "交流0.4kV",
                    value: show,
                    data: [
                        {
                            key: "fbzt",
                            value: "已发布",
                        },
                        {
                            key: "dydj",
                            value: "交流0.4kV",
                        },
                        {
                            key: "ssdt",
                            value: window.xianMing,
                        },
                    ],
                };
                let functionName;
                if (this.currentIndex == 0) {
                    functionName = "SwitchPowerLevel";
                } else {
                    functionName = "SwitchHStationPowerLevel";
                }
                let data = {
                    functionName: functionName,
                    backFunctionName: "",
                    functionParameters: [
                        {
                            key: functionName,
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        rbtnClick(e) {
            if (this.dtIndex == e) {
                this.dtIndex = -1;
                this.showDT = false;
                this.showQH = false;
            } else {
                this.dtIndex = e;
                if (e == 1) {
                    this.showDT = true;
                    this.showQH = false;
                } else {
                    this.showDT = false;
                    this.showQH = true;
                }
            }
        },
        closeDT() {
            this.showSWDT = false;
            this.showHJDT = false;
            this.showDBJZ = false;
            this.showQXSY = false;
        },
        qhClick(e) {
            if (e == 0) {
                this.showRCX = !this.showRCX;
            } else if (e == 1) {
                this.showXX = !this.showXX;
            } else if (e == 2) {
                this.showAXX = !this.showAXX;
            }
            let v = [
                { key: "RCX", value: this.showRCX },
                { key: "XX", value: this.showXX },
                { key: "AXX", value: this.showAXX },
            ];
            let data = {
                functionName: "NavigationPage",
                functionParameters: [
                    {
                        key: "3DXZQH",
                        value: v,
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        dkClick(e) {
            if (e == 1) {
                if (this.showSWDT) {
                    this.closeDT();
                    this.showZheZhao2 = true;
                    this.dtGoUe(1);
                } else {
                    this.showSWDT = true;
                    this.showZheZhao2 = true;
                    this.dtGoUe(1);
                }
            } else if (e == 2) {
                if (this.showHJDT) {
                    this.showHJDT = false;
                    this.showDBJZ = false;
                    this.showQXSY = false;
                    this.showZheZhao2 = true;
                    this.dtGoUe(2);
                } else {
                    if (this.showSWDT) {
                        this.showHJDT = true;
                        this.showZheZhao2 = true;

                        this.dtGoUe(2);
                    } else {
                        // 进行弹框提示，应该先选择三维地图
                        this.showTk = true;
                        this.dituSpan = "三维底图";
                    }
                }
            } else if (e == 3) {
                if (this.showDBJZ) {
                    this.showDBJZ = false;
                    this.showQXSY = false;
                    this.showZheZhao2 = true;
                    this.dtGoUe(3);
                } else {
                    if (this.showHJDT) {
                        this.showDBJZ = true;
                        this.showZheZhao2 = true;

                        this.dtGoUe(3);
                    } else {
                        // 进行弹框提示，应该先选择环境地图
                        this.showTk = true;
                        this.dituSpan = "环境底图";
                    }
                }
            } else if (e == 4) {
                if (this.showQXSY) {
                    this.showQXSY = false;
                    this.showZheZhao2 = true;
                    this.dtGoUe(4);
                } else {
                    if (this.showDBJZ) {
                        this.showQXSY = true;
                        this.showZheZhao2 = true;

                        this.dtGoUe(4);
                    } else {
                        // 进行弹框提示，应该先选择地标建筑
                        this.showTk = true;
                        this.dituSpan = "地标建筑";
                    }
                }
            }
        },
        dtGoUe(e) {
            let v;
            if (e == 0) {
            } else if (e == 1) {
                v = [{ key: "SWDT", value: this.showSWDT }];
            } else if (e == 2) {
                v = [{ key: "HJDT", value: this.showHJDT }];
            } else if (e == 3) {
                v = [{ key: "DBJZ", value: this.showDBJZ }];
            } else if (e == 4) {
                v = [{ key: "QXSY", value: this.showQXSY }];
            }

            let data = {
                functionName: "NavigationPage",
                functionParameters: [
                    {
                        key: "DTJZ",
                        value: v,
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        // 获取加载电站线路
        getSelectKvs() {
            let data = {
                functionName: "GetSelectHStationKv",
                backFunctionName: "BackGetSelectKvs",
                functionParameters: [
                    {
                        key: "GetSelectHStationKv",
                        value: "",
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.BackGetSelectKvs = this.BackGetSelectKvs;
        },
        BackGetSelectKvs(e) {
            let data = JSON.parse(e).value;
            for (let i = 0; i < data.length; i++) {
                if (data[i] == "交流500kV") {
                    this.xlIndex = 1;
                    this.lindex1 = 1;
                }
                if (data[i] == "交流220kV") {
                    this.xlIndex1 = 1;
                    this.lindex2 = 1;
                }
                if (data[i] == "交流110kV") {
                    this.xlIndex2 = 1;
                    this.lindex3 = 1;
                }
                if (data[i] == "交流35kV") {
                    this.xlIndex3 = 1;
                    this.lindex4 = 1;
                }
                if (data[i] == "交流10kV") {
                    this.xlIndex4 = 1;
                    this.lindex5 = 1;
                }
                if (data[i] == "交流0.4kV") {
                    this.xlIndex5 = 1;
                    this.lindex6 = 1;
                }
            }
        },
        // 获取加载的网架线路
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
        // 网架线路回调
        BackGetSelectKv(e) {
            let data = JSON.parse(e).value;
            for (let i = 0; i < data.length; i++) {
                if (data[i] == "交流500kV") {
                    this.xlIndex = 1;
                    this.lindex1 = 1;
                }
                if (data[i] == "交流220kV") {
                    this.xlIndex1 = 1;
                    this.lindex2 = 1;
                }
                if (data[i] == "交流110kV") {
                    this.xlIndex2 = 1;
                    this.lindex3 = 1;
                }
                if (data[i] == "交流35kV") {
                    this.xlIndex3 = 1;
                    this.lindex4 = 1;
                }
                if (data[i] == "交流10kV") {
                    this.xlIndex4 = 1;
                    this.lindex5 = 1;
                }
                if (data[i] == "交流0.4kV") {
                    this.xlIndex5 = 1;
                    this.lindex6 = 1;
                }
            }
        },
        // 关闭弹框
        deleteClicks() {
            this.showTk = false;
        },
        // 监听点击数据电站
        sjjClick() {
            if (
                this.storage == "zhanfangxuanzhi" ||
                this.storage == "jiangeguanli1"
            ) {
                this.getIsSelectKv();
            } else {
                this.getIsSelectKv2();
            }
        },
        // 查询是否已有创建的网架电站
        getIsSelectKv() {
            let data = {
                functionName: "GetSelectHStationKv",
                backFunctionName: "BackGetSelectKvs2",
                functionParameters: [
                    {
                        key: "GetSelectHStationKv",
                        value: "",
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.BackGetSelectKvs2 = this.BackGetSelectKvs2;
        },
        BackGetSelectKvs2(e) {
            let data2 = JSON.parse(e).value;
            if (data2.length < 1) {
                this.showMB = true;
            } else {
                // 进行页面跳转
                let data = this.storage;
                if (data == "gantabudian") {
                    this.$router.push({
                        path: "/dw/budian",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "杆塔布点",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "buxianguanli1") {
                    this.$router.push({
                        path: "/dw/buxian",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "布线管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "zhanfangxuanzhi") {
                    this.$router.push({
                        path: "/dw/xuanzhi",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "站房孪生",
                        three: "站房选址",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli1") {
                    this.$router.push({
                        path: "/dw/zjiange",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "站房孪生",
                        three: "间隔管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli2") {
                    this.$router.push({
                        path: "/dw/jiange",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "间隔管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiedianguanli") {
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "节点管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "guanlangguanli") {
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "管廊管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "dianlanguanli") {
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "电缆管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "sheshibudian") {
                    this.$router.push({
                        path: "/dw/wsheshi",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "微网孪生",
                        three: "设施布点",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli3") {
                    this.$router.push({
                        path: "/dw/wjiange",
                    });
                }
            }
        },

        // 查询是否已有创建的网架线路
        getIsSelectKv2() {
            let data = {
                functionName: "GetSelectKv",
                backFunctionName: "BackGetSelectKvss",
                functionParameters: [
                    {
                        key: "GetSelectKv",
                        value: "",
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.BackGetSelectKvss = this.BackGetSelectKvss;
        },
        BackGetSelectKvss(e) {
            let data2 = JSON.parse(e).value;
            if (data2.length < 1) {
                this.showMB = true;
            } else {
                // 进行页面跳转
                let data = this.storage;
                if (data == "gantabudian") {
                    this.$router.push({
                        path: "/dw/budian",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "杆塔布点",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "buxianguanli1") {
                    this.$router.push({
                        path: "/dw/buxian",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "布线管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "zhanfangxuanzhi") {
                    this.$router.push({
                        path: "/dw/xuanzhi",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "站房孪生",
                        three: "站房选址",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli1") {
                    this.$router.push({
                        path: "/dw/zjiange",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "站房孪生",
                        three: "间隔管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli2") {
                    this.$router.push({
                        path: "/dw/jiange",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "架空孪生",
                        three: "间隔管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiedianguanli") {
                    this.$router.push({
                        path: "/dw/dzhongduan",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "节点管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "guanlangguanli") {
                    this.$router.push({
                        path: "/dw/dbuxian",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "管廊管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "dianlanguanli") {
                    this.$router.push({
                        path: "/dw/dlgl",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "电缆孪生",
                        three: "电缆管理",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "sheshibudian") {
                    this.$router.push({
                        path: "/dw/wsheshi",
                    });
                    let e = {
                        one: "电网孪生",
                        two: "微网孪生",
                        three: "设施布点",
                        right1: ">",
                        right2: ">",
                    };
                    this.$bus.$emit("setCrumbs", e);
                } else if (data == "jiangeguanli3") {
                    this.$router.push({
                        path: "/dw/wjiange",
                    });
                }
            }
            // if (
            //   this.storage == "zhanfangxuanzhi" ||
            //   this.storage == "jiangeguanli1"
            // ) {
            //   // 网架电站
            //   this.showMB = true;
            // } else {
            //   // 网架线路
            //   if (data2.length < 1) {
            //     this.showMB = true;
            //   } else {
            //     // 进行页面跳转
            //   }
            // }
        },
        // 正定-行政区划选择
        zqhClick(e) {
            if (e == 0) {
                this.showDQY = !this.showDQY;
            } else if (e == 1) {
                this.showNQY = !this.showNQY;
            } else if (e == 2) {
                this.showZJZ = !this.showZJZ;
            } else if (e == 3) {
                this.showNBD = !this.showNBD;
            }
            let v = [
                { key: "DQY", value: this.showDQY },
                { key: "NQY", value: this.showNQY },
                { key: "ZJZ", value: this.showZJZ },
                { key: "NBD", value: this.showNBD },
            ];
            let data = {
                functionName: "NavigationPage",
                functionParameters: [
                    {
                        key: "3DXZQH",
                        value: v,
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        cjClick() {
            this.showMB = false;

            let v = { ChooseType: "SwitchMactv", value: true };
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
        closeMBclick() {
            this.showMB = false;
        },
        // 站房选址-自定义建站
        zf_zdyClick() {
            this.$router.push({
                path: "/dw/xz_zdy",
            });
        },
        // 杆塔布点-自定义布点
        gt_zdyClick() {
            this.$router.push({
                path: "/dw/gt_zdy",
            });
        },
        // 杆塔布线-自定义布线
        gt_zdybxClick() {
            this.$router.push({
                path: "/dw/gt_zdybx",
            });
        },
        // 电缆-节点管理-自定义布点
        dl_zdyClick() {
            this.$router.push({
                path: "/dw/dl_zdy",
            });
        },
        // 电缆-管理管理-自定义管廊
        dl_zdyglClick() {
            this.$router.push({
                path: "/dw/dl_zdygl",
            });
        },
        // 微网-设施布点-自定义布点
        ww_zdyClick() {
            this.$router.push({
                path: "/dw/ww_zdy",
            });
        },
    },
};
</script>

<style scoped>
.morenYe {
    width: 100%;
    height: 100%;
}
</style>
<style scoped>
.btnImg {
    width: 52px;
    height: 47px;
    position: absolute;
    left: 157.5px;
    top: 0px;
    background: url("img/btnImg.png") no-repeat;
    background-size: 100% 100%;
}
.leftBtn {
    width: 366px;
    height: 47px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 20px;
    bottom: 20px;
}

.rightBtn {
    width: 366px;
    height: 47px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    right: 20px !important;
    bottom: 20px !important;
}
.leftBtn > .leftBlock,
.rightBtn > .leftBlock {
    width: 163px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("img/leftBtn.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.leftBtn > .leftBlock > span,
.rightBtn > .leftBlock > span {
    font-family: PangMenZhengDao;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0em;
    color: #fafcff;
}
.leftBlock2 {
    background: url("img/leftBtn2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.leftBlock2 > span {
    font-family: PangMenZhengDao !important;
    font-size: 24px !important;
    font-weight: normal !important;
    letter-spacing: 0em !important;
    color: #6bf0ff !important;
    text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
.leftBtn > .rightBlock,
.rightBtn > .rightBlock {
    width: 163px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("img/rightBtn.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.leftBtn > .rightBlock > span,
.rightBtn > .rightBlock > span {
    font-family: PangMenZhengDao;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0em;
    color: #fafcff;
}
.rightBlock2 {
    background: url("img/rightBtn2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.rightBlock2 > span {
    font-family: PangMenZhengDao !important;
    font-size: 24px !important;
    font-weight: normal !important;
    letter-spacing: 0em !important;
    color: #6bf0ff !important;
    text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
</style>
<style scoped>
.xlBlock {
    width: 279px;
    height: 156px;
    position: fixed;
    left: 65px;
    bottom: 78px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.xlBlockItem {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
}
.xlBlockItem > .xlItmes {
    width: 131px;
    height: 100%;
    display: flex;
    align-items: center;
    background: url("img/xlBg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.xlBlockItem > .xlItmes > span {
    font-family: SourceHanSansCN-Regular-Regular;
    font-size: 20px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 1px;
}
.xlBlockItem > .xlItmes2 {
    background: url("img/xlBg2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
</style>
<style scoped>
.qhTK {
    width: 110px;
    height: 165px;
    position: fixed;
    bottom: 83px;
    right: 236px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.qhTK > .dkBlocks {
    width: 110px;
    height: 46px;
    background: url("img/xlBg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.qhTK > .dkBlocks > span {
    font-family: SourceHanSansCN-Regular-Regular;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 1px;
    color: #e7f3ff;
}
.qhTK > .dkBlocks2 {
    background: url("img/xlBg2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.dtTk {
    position: fixed;
    width: 110px;
    height: 284px;
    right: 60px;
    bottom: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dtTk > .dkBlocks {
    width: 110px;
    height: 46px;
    background: url("img/xlBg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.dtTk > .dkBlocks > span {
    font-family: SourceHanSansCN-Regular-Regular;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 1px;
    color: #e7f3ff;
}
.dtTk > .dkBlocks2 {
    background: url("img/xlBg2.png") no-repeat !important;
    background-size: 100% 100% !important;
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
    display: flex;
    align-items: center;
    justify-content: center;
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

<style scoped>
.z_delete {
    width: 348px;
    height: 133px;
    background: url("img/de.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.z_d_block {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
}
.z_d_block > img {
    width: 22px;
    height: 20px;
    margin-left: 19px;
    margin-right: 4px;
}
.z_d_block > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 18px;
    font-weight: normal;
    color: #ffffff;
}
.z_tankuang {
    width: 348px;
    height: 174px;
    background: url("img/tk.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.z_tankuang2 {
    height: 218px !important;
    background: url("img/tk2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.z_tankuang > .z_cha {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 24px;
    right: 10px;
    background: url("img/cha.png") no-repeat !important;
    background-size: 100% 100% !important;
    cursor: pointer;
}
.z_tankuang > .z_title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 18px;
}
.z_tankuang > .z_title > span {
    font-family: YouSheBiaoTiHei;
    font-size: 26px;
    font-weight: normal;
    letter-spacing: 4px;
    color: #e8efff;
    margin-left: 30px;
}
.z_tankuang > .z_blockss {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
}
.z_tankuang > .z_blockss > span {
    font-family: AlibabaPuHuiTi_2_55_Regular;
    font-size: 13px;
    font-weight: normal;
    color: #ffe856;
    margin-left: 26px;
}
.z_tankuang > .z_input {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
    width: 55px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 26px;
    margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
    font-family: AlibabaPuHuiTi_2_55_Regular;
    font-size: 13px;
    font-weight: normal;
    color: #ffffff;
}
.z_tankuang > .z_input > .rights {
    width: 216px;
    height: 32px;
    background: url("img/inputs.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.z_btn {
    width: 174px;
    height: 33px;
    position: absolute;
    right: 17px;
    bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.z_btn > .z_blocks {
    width: 81px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: url("img/tbn.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
}

.z_btn2 {
    width: 174px;
    height: 33px;
    position: absolute;
    right: 17px;
    bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.z_btn2 > .z_blocks {
    width: 81px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: url("img/tbn.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.z_btn2 > .z_blocks > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
}
</style>
<style scoped>
.top_r1 {
    width: 127px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 167px;
    background: url("img/sjj.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r2 {
    width: 141px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/zdy.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r3 {
    width: 99px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 138px;
    background: url("img/sjbd.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r4 {
    width: 112px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/zdy2.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r5 {
    width: 101px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/jgcx.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r6 {
    width: 101px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/jggl.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r7 {
    width: 99px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 138px;
    background: url("img/sjbx.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r8 {
    width: 112px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/zdy3.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}

.top_r9 {
    width: 99px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 138px;
    background: url("img/sjjl.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r10 {
    width: 112px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/zdyjl.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.top_r11 {
    width: 101px;
    height: 31px;
    position: absolute;
    top: 47px;
    right: 10px;
    background: url("img/sjbx2.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}

.zhezhao > .zBlocs {
    width: 549.84px;
    height: 251.63px;
    background: url("../../assets/image/app/bgs.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.zhezhao > .zBlocs > .titles {
    width: 270px;
    height: 40px;
    position: absolute;
    left: 39px;
    top: 18px;
}

.zhezhao > .zBlocs > .titles > span {
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
    background: url("../../assets/image/app/icons.png") no-repeat !important;
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
    font-size: 22px;
    font-weight: normal;
    color: #ffffff;
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
