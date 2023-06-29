<template>
    <div class="realRight">
        <div class="jcxx">
            <div class="j_titles">
                <span>关键模型信息</span>
            </div>
            <div class="t_input"></div>
            <!-- 列表 -->
            <el-table
                ref="multipleTable3"
                :data="dataList3"
                height="250"
                tooltip-effect="dark"
                class="e_tabless e_tabless2"
                @cell-click="gClick3"
                :row-style="{ height: '31px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
                @select="s_Click3"
            >
                <el-table-column align="center" type="selection" width="46">
                </el-table-column>
                <el-table-column
                    prop="Str_Num"
                    show-overflow-tooltip
                    label="模型编号"
                    min-width="70"
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row.Str_Num }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="Str_Name"
                    show-overflow-tooltip
                    label="模型名称"
                    min-width="70"
                >
                </el-table-column>
                <el-table-column
                    prop="Str_PointMountings"
                    show-overflow-tooltip
                    min-width="70"
                    label="配件名称"
                >
                </el-table-column>
            </el-table>
            <div class="jbBlock">
                <div class="jbBtn" @click="bangdingClick">
                    <span>绑定</span>
                </div>
            </div>
        </div>
        <transition name="transitionRight">
            <div
                class="jcxx2"
                v-show="selectList1002.Str_Num != undefined || null || ''"
            >
                <div class="j_titles">
                    <span>间隔空间信息</span>
                </div>
                <div class="kong"></div>
                <div class="j_item">
                    <div class="items">
                        <div class="lefts">
                            <span>设备经度：</span>
                        </div>
                        <div class="rights">
                            <span>{{ longitude }}</span>
                        </div>
                    </div>
                    <div class="items">
                        <div class="lefts">
                            <span>设备纬度：</span>
                        </div>
                        <div class="rights">
                            <span>{{ dimension }}</span>
                        </div>
                    </div>
                </div>
                <div class="j_item">
                    <div class="items">
                        <div class="lefts">
                            <span>设备角度：</span>
                        </div>
                        <div class="rights">
                            <span>{{ angle }}</span>
                        </div>
                    </div>
                    <div class="items">
                        <div class="lefts">
                            <span>设备高程：</span>
                        </div>
                        <div class="rights">
                            <span>{{ altitude }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- 左侧未选中提示弹框-->
        <div class="zhezhao" v-show="showTSTK1">
            <div class="z_delete">
                <div class="z_d_block">
                    <img class="imgs" src="./img/jj2.png" />
                    <span
                        >请选择左侧“间隔信息”列表中的一条数据与当前模型进行绑定。</span
                    >
                </div>
                <div class="z_btn2">
                    <div class="z_blocks" @click="closeTSTK1">
                        <span>确认</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右侧未选中提示弹框-->
        <div class="zhezhao" v-show="showTSTK2">
            <div class="z_delete">
                <div class="z_d_block">
                    <img class="imgs" src="./img/jj2.png" />
                    <span>请选中右侧“关键模型信息”列表中的一个模型。</span>
                </div>
                <div class="z_btn2">
                    <div class="z_blocks" @click="closeTSTK2">
                        <span>确认</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 左侧对象已经绑定提示先解绑弹框-->
        <div class="zhezhao" v-show="showTSTK3">
            <div class="z_delete">
                <div class="z_d_block">
                    <img class="imgs" src="./img/jj2.png" />
                    <span>当前选择对象已绑定，请解绑后再进行操作。</span>
                </div>
                <div class="z_btn2">
                    <div class="z_blocks" @click="closeTSTK3">
                        <span>确认</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 绑定确认弹框-->
        <div class="zhezhao" v-show="showTSTK4">
            <div class="z_delete">
                <div class="z_d_block">
                    <img class="imgs" src="./img/jj1.png" />
                    <span
                        >是否要对当前选择的左侧“间隔信息”列表中的数据与当前模型进行绑定？</span
                    >
                </div>
                <div class="z_btn2">
                    <div class="z_blocks" @click="TSTK4Click">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="closeTSTK4">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "realRight",
    data() {
        return {
            currentIndex: -1,
            dataList3: [],
            longitude: "",
            dimension: "",
            angle: "",
            altitude: "",
            selectList1002: [],
            featureInfoList: [],
            cfOid: "",
            showTSTK1: "",
            showTSTK2: "",
            showTSTK3: "",
            showTSTK4: "",
        };
    },
    mounted() {
        let that = this;
        that.cfOid = window.xzjgwhData.oid;
        that.getDataList();
    },
    methods: {
        bangdingClick() {
            // 1. 判断是否选中左侧信息
            if (window.XZJGBDGX.oid != undefined || null || "") {
                // 2.判断是否选中右侧信息
                if (this.selectList1002.Str_Num != undefined || null || "") {
                    // 3.判断是否已绑定
                    if (window.XZJGBDGX.bdgx == 0) {
                        // 未绑定,弹出是否确认弹框
                        this.showTSTK4 = true;
                    } else {
                        // 已绑定。弹出弹框提示先解绑
                        this.showTSTK3 = true;
                    }
                } else {
                    // 弹出未选中右侧信息弹框
                    this.showTSTK2 = true;
                }
            } else {
                // 弹出未选中左侧信息弹框
                this.showTSTK1 = true;
            }
        },
        closeTSTK1() {
            this.showTSTK1 = false;
        },
        closeTSTK2() {
            this.showTSTK2 = false;
        },
        closeTSTK3() {
            this.showTSTK3 = false;
        },
        closeTSTK4() {
            this.showTSTK4 = false;
        },
        // 绑定确认弹框
        TSTK4Click() {
            let datas = window.XZJGBDGX;
            datas.bdgx = 1;
            datas.Str_ValID = this.selectList1002.Str_Num;
            let v = {
                TwinType: "HSInterval",
                ModifyType: "Update",
                Data: datas,
            };
            let data = {
                functionName: "CustomGeneration",
                backFunctionName: "bdqrtk",
                functionParameters: [
                    {
                        key: "CustomGeneration",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.bdqrtk = this.bdqrtk;
        },
        bdqrtk() {
            this.showTSTK4 = false;
        },
        getDataList() {
            // 获取电缆维护左侧信息
            let v = {
                twinType: "HSInterval",
                chooseType: "Query",
                selectType: "",
                oid: this.cfOid,
                selectNum: "",
            };
            let data = {
                functionName: "IntervalFunc",
                backFunctionName: "selectGJRight",
                functionParameters: [
                    {
                        key: "IntervalFunc",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.selectGJRight = this.selectGJRight;
        },
        selectGJRight(e) {
            let data = JSON.parse(e);
            let data2 = data.value.dataList;
            this.dataList3 = data2;
        },

        gClick3(row) {
            this.$refs.multipleTable3.clearSelection();
            if (this.selectList1002 != row) {
                this.selectList1002 = row;
                this.$refs.multipleTable3.toggleRowSelection(row);
                let v = {
                    twinType: "HSInterval",
                    chooseType: "Select",
                    selectType: "true",
                    oid: this.cfOid,
                    selectNum: this.selectList1002.Str_Num,
                };
                let data = {
                    functionName: "IntervalFunc",
                    backFunctionName: "getJWD",
                    functionParameters: [
                        {
                            key: "IntervalFunc",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.getJWD = this.getJWD;
            } else {
                this.selectList1002 = "";
                let v = {
                    twinType: "HSInterval",
                    chooseType: "Select",
                    selectType: "false",
                    oid: this.cfOid,
                    selectNum: this.selectList1002.Str_Num,
                };
                let data = {
                    functionName: "IntervalFunc",
                    functionParameters: [
                        {
                            key: "IntervalFunc",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },

        s_Click3(selection, row) {
            this.$refs.multipleTable3.clearSelection();
            if (selection.length === 0) {
                return;
            }
            if (row) {
                this.selectList1002 = row;
                this.$refs.multipleTable3.toggleRowSelection(row);
                let v = {
                    twinType: "HSInterval",
                    chooseType: "Select",
                    selectType: "true",
                    oid: this.cfOid,
                    selectNum: this.selectList1002.Str_Num,
                };
                let data = {
                    functionName: "IntervalFunc",
                    backFunctionName: "getJWD",
                    functionParameters: [
                        {
                            key: "IntervalFunc",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.getJWD = this.getJWD;
            } else {
                let v = {
                    twinType: "HSInterval",
                    chooseType: "Select",
                    selectType: "false",
                    oid: this.cfOid,
                    selectNum: this.selectList1002.Str_Num,
                };
                let data = {
                    functionName: "IntervalFunc",
                    functionParameters: [
                        {
                            key: "IntervalFunc",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        getJWD(e) {
            let that = this;
            let data = JSON.parse(e);

            that.longitude = data.value.longitude;
            that.dimension = data.value.latitude;
            that.angle = data.value.yaw;
            that.altitude = data.value.altitude;
        },
    },
};
</script>

<style scoped>
.bdBtn {
    width: 43px;
    height: 20px;
    background: url("img/bdBtn2.png") no-repeat;
    background-size: 100% 100%;
    margin: auto;
    cursor: pointer;
}
.bdBtn:hover {
    background: url("img/bdBtn.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.bdBtn2 {
    background: url("img/bdBtn.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.realRight {
    width: 379px;
    height: 480px;
    position: fixed;
    right: 11px;
    top: 125px;
}

.jcxx {
    width: 100%;
    height: 348px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.jcxx2 {
    width: 100%;
    height: 197px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
    margin-top: 30px;
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
/* 功能选择样式 */

.t_input {
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 40px;
}
.t_input > .t_block {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
    background: url("img/tbg.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.t_input > .t_block > img {
    width: 16px;
    height: 16px;
}
.t_input > .chaxun {
    width: 126px;
    height: 100%;
    background: url("img/chaxun.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.chaxun > .icons {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 8.5px;
    right: 8.5px;
    background: url("img/c1.png") no-repeat !important;
    background-size: 100% 100% !important;
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
    height: 100%;
    display: flex;
    align-items: center;
}
.j_item > .items > .rights > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #d8d8d8;
}
</style>

<style scoped>
::v-deep .el-table__header-wrapper .el-checkbox {
    display: none;
}

::v-deep .el-checkbox__inner {
    background: url("img/wxz.png") !important;
    background-size: 100% 100% !important;

    border: none !important;
    border-radius: none !important;
    width: 16px;
    height: 16px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background: url("img/xz.png") !important;
    background-size: 100% 100% !important;
    width: 16px;
    height: 16px;
}
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    /* background: url("img/wxzs.png") !important; */
    /* background-size: 100% 100% !important; */
    width: 22px;
    height: 22px;
}
::v-deep.el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
    display: none;
}
::v-deep .el-checkbox__inner::after {
    display: none !important;
}
</style>
<style>
/* //element-ui table的去除右侧滚动条的样式 */
.e_tabless2 ::-webkit-scrollbar {
    width: 1px !important;
    height: 1px !important;
}
/* // 滚动条的滑块 */
/* .e_tabless2 ::-webkit-scrollbar-thumb {
  background-color: #a1a3a9 !important;
  border-radius: 0px !important;
} */

.el-table,
.el-table__expanded-cell {
    background-color: transparent;
}
.el-table th {
    background-color: transparent;
}
.el-table tr {
    background-color: transparent;
}
.el-table--enable-row-transition .el-table__body td,
.el-table .cell {
    background-color: transparent !important;
}
.current-row {
    background: url("img/td2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
}
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
.el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: transparent !important;
    /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.jcxx > .el-table__header tr,
.el-table__header th {
    height: 39.8px !important;
    /* background: rgba(25, 61, 112, 0.5) !important; */
    background: transparent !important;
    font-family: SourceHanSansSC-Regular;
    font-size: 12px;
    font-weight: normal;
    color: #ffffff;
    margin: 0 !important;
    padding: 0 !important;
}
.el-table__body tr,
.el-table__body td {
    height: 30px;
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    font-weight: normal;
    color: #bee4ee;
}
.el-checkbox__inner {
    background-color: #155589;
    border: 1px solid #155589;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #10acff;
    border: 1px solid #10acff;
}
</style>
<style scoped>
/* 表格样式 */
.e_tabless {
    width: 98%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: scroll;
    margin-left: 1%;
}
.e_tabless2 {
    height: 68% !important;
    margin-bottom: 10px;
}
.e_tabless2::-webkit-scrollbar {
    display: none;
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
}
</style>

<style scoped>
.zhezhao {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(1, 11, 23, 0.6);
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
.z_cha {
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
    bottom: 20px;
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
    margin-left: 10px;
}
.z_btn2 > .z_blocks > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
}
.addUpdTK {
    width: 347px;
    height: 300px;
    background: url("img/adtk.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: absolute;
}
.tk_title {
    width: 100%;
    height: 40px;
    margin-top: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    z-index: 1;
}
.tk_title > span {
    margin-left: 31px;
    font-family: YouSheBiaoTiHei;
    font-size: 26px;
    font-weight: normal;
    letter-spacing: 4px;
    color: #e8efff;
    z-index: 1;
}

.tk_blocks {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 12px;
}
.tk_blocks > .rights {
    width: 216px;
    height: 32px;
    margin-right: 38px;
    margin-left: 16px;
}
.tk_blocks > .rights > .r1 {
    width: 100%;
    height: 100%;
    background: url("img/r1.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}
.tk_blocks > .rights > .r1 > span {
    font-family: AlibabaPuHuiTi_2_55_Regular;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin-left: 10px;
}
.tk_blocks > .rights > .r2 {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("img/r2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.tk_blocks > span {
    font-family: AlibabaPuHuiTi_2_55_Regular;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ffffff;
}
</style>
