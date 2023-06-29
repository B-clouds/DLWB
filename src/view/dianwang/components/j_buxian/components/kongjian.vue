<template>
    <div class="realRight">
        <div class="jcxx">
            <div class="j_titles">
                <span>起点间隔信息</span>
            </div>
            <div class="t_input"></div>
            <!-- 列表 -->
            <el-table
                ref="qdlbTable2"
                :data="dataList3"
                height="250"
                tooltip-effect="dark"
                class="e_tabless e_tabless2"
                :row-style="{ height: '31px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
                @selection-change="handleSelectionChange"
                @select="s_Click3"
            >
                <el-table-column
                    :selectable="checkboxs"
                    align="center"
                    type="selection"
                    width="46"
                >
                </el-table-column>
                <el-table-column
                    prop="oid"
                    show-overflow-tooltip
                    label="间隔ID"
                    min-width="70"
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row.oid }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="Str_ValID"
                    show-overflow-tooltip
                    label="间隔编号"
                    min-width="70"
                >
                </el-table-column>
                <el-table-column
                    prop="sbmc"
                    show-overflow-tooltip
                    min-width="70"
                    label="间隔名称"
                >
                </el-table-column>
                <el-table-column
                    prop="gtmc"
                    show-overflow-tooltip
                    min-width="70"
                    label="所属杆塔"
                >
                </el-table-column>
            </el-table>
            <div class="btns" @click="baocunClick">
                <span>保存</span>
            </div>
        </div>
        <div class="jcxx2">
            <div class="j_titles">
                <span>终点模型间隔信息</span>
            </div>
            <div class="t_input"></div>
            <!-- 列表 -->
            <el-table
                ref="zdlbTable2"
                :data="dataList4"
                height="250"
                tooltip-effect="dark"
                class="e_tabless e_tabless2"
                :row-style="{ height: '31px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
                @selection-change="handleSelectionChange2"
                @select="s_Click4"
            >
                <el-table-column
                    :selectable="checkboxs2"
                    align="center"
                    type="selection"
                    width="46"
                >
                </el-table-column>
                <el-table-column
                    prop="oid"
                    show-overflow-tooltip
                    label="间隔ID"
                    min-width="70"
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row.oid }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="Str_ValID"
                    show-overflow-tooltip
                    label="间隔编号"
                    min-width="70"
                >
                </el-table-column>
                <el-table-column
                    prop="sbmc"
                    show-overflow-tooltip
                    min-width="70"
                    label="间隔名称"
                >
                </el-table-column>
                <el-table-column
                    prop="gtmc"
                    show-overflow-tooltip
                    min-width="70"
                    label="所属杆塔"
                >
                </el-table-column>
            </el-table>
            <div class="btns" @click="baocunClick">
                <span>保存</span>
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
            showXX: true,
            dataList3: [],
            dataList4: [],
            featureInfoList: [],
            selectList3: "",
            selectList4: "",
            qdOid: "", //起点Oid
            zdOid: "", //终点Oid
            qdSelectDate: "",
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("hangObj3", (e) => {
            that.qdOid = e.qsgt;
            that.zdOid = e.zzgt;
            that.getDataList();
            that.getDataList2();
        });
        that.$bus.$on("swqds", (e) => {
            if (that.qdSelectDate != null || undefined || "") {
                if (that.qdSelectDate != e) {
                    let v = {
                        FocusTarget: {
                            target: "IntervalInfo",
                            ID: that.qdSelectDate.oid, //传点击或这选中的右侧信息的qsgt
                            FocusType: "false",
                            EditMode: "false",
                            IntervalInfoindex: that.qdSelectDate.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
                        },
                    };
                    let data = {
                        functionName: "FocusTower",
                        functionParameters: [
                            {
                                key: "FocusTarget",
                                value: JSON.stringify(v),
                            },
                        ],
                    };
                    ue.interface.broadcast("PSAPI", JSON.stringify(data));
                    that.qdSelectDate = e;
                }
            } else {
                that.qdSelectDate = e;
            }
            that.qdOid = e.oid;

            that.getDataList();
        });
        that.$bus.$on("swzds", (e) => {
            that.zdOid = e.oid;
            that.getDataList2();
        });
    },
    watch: {
        selectList3(e, f) {
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("setQsgt", e);
            }, 50);
        },
        selectList4(e, f) {
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("setZzgt", e);
            }, 50);
        },
    },
    methods: {
        baocunClick() {
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("goUpdate");
            }, 50);
        },
        // 获取起点列表
        getDataList() {
            let v = {
                URL: "/xa/customQuery",
                StructName: "获取起点列表",
                verbType: "POST",
                value: {
                    name: "Data_IntervalInfo",
                    pageNo: 1,
                    pageSize: 100,
                    tbName: "IntervalInfo",
                    data: [
                        {
                            key: "ssgt",
                            value: this.qdOid,
                        },
                    ],
                },
            };
            let data = {
                functionName: "WebServerMsg",
                backFunctionName: "getDatas",
                functionParameters: [
                    {
                        key: "WebServerMsg",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.getDatas = this.getDatas;
        },
        // 起点列表回调
        getDatas(e) {
            this.dataList3 = JSON.parse(e).data.IntervalInfo;
            let row = this.dataList3[0];
            this.$nextTick(function () {
                this.$refs.qdlbTable2.toggleRowSelection(row);
                // 存放默认选中的起点oid
                this.selectList3 = row;
                window.bxSelectData = row;
                let v = {
                    FocusTarget: {
                        target: "IntervalInfo",
                        ID: row.oid, //传点击或这选中的右侧信息的qsgt
                        FocusType: "true",
                        EditMode: "true",
                        IntervalInfoindex: row.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
                    },
                };
                let data = {
                    functionName: "FocusTower",
                    functionParameters: [
                        {
                            key: "FocusTarget",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            });
        },
        checkboxs(row) {
            let that = this;
            //需要禁用行的id
            let vIds = that.selectList3;
            if (vIds == row) {
                return false;
            } else {
                return true;
            }
        },
        checkboxs2(row) {
            let that = this;
            //需要禁用行的id
            let vIds = that.selectList4;
            if (vIds == row) {
                return false;
            } else {
                return true;
            }
        },

        // 获取终点列表
        getDataList2() {
            let v = {
                URL: "/xa/customQuery",
                StructName: "获取终点列表",
                verbType: "POST",
                value: {
                    name: "Data_IntervalInfo",
                    pageNo: 1,
                    pageSize: 100,
                    tbName: "IntervalInfo",
                    data: [
                        {
                            key: "ssgt",
                            value: this.zdOid,
                        },
                    ],
                },
            };
            let data = {
                functionName: "WebServerMsg",
                backFunctionName: "getDatas2",
                functionParameters: [
                    {
                        key: "WebServerMsg",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.getDatas2 = this.getDatas2;
        },
        // 终点列表回调
        getDatas2(e) {
            this.dataList4 = JSON.parse(e).data.IntervalInfo;
            let row = this.dataList4[0];
            this.$nextTick(function () {
                this.$refs.zdlbTable2.toggleRowSelection(row);
                // 存放默认选中的终点oid
                this.selectList4 = row;
                window.bxSelectData2 = row;
                let v = {
                    FocusTarget: {
                        target: "IntervalInfo",
                        ID: row.oid, //传点击或这选中的右侧信息的qsgt
                        FocusType: "true",
                        EditMode: "true",
                        IntervalInfoindex: row.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
                    },
                };
                let data = {
                    functionName: "FocusTower",
                    functionParameters: [
                        {
                            key: "FocusTarget",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            });
        },
        sfxxClick() {
            this.showXX = !this.showXX;
        },

        s_Click3(selection, row) {
            this.$refs.qdlbTable2.clearSelection();
            if (selection.length === 0) {
                return;
            }
            if (row) {
                this.selectList3 = row;
                window.bxSelectData = row;

                this.$refs.qdlbTable2.toggleRowSelection(row);
                let v = {
                    FocusTarget: {
                        target: "IntervalInfo",
                        ID: row.oid, //传点击或这选中的右侧信息的qsgt
                        FocusType: "true",
                        EditMode: "true",
                        IntervalInfoindex: row.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
                    },
                };
                let data = {
                    functionName: "FocusTower",
                    functionParameters: [
                        {
                            key: "FocusTarget",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        handleSelectionChange(val) {
            if (val.length > 1) {
                this.$refs.qdlbTable2.clearSelection();
                this.$refs.qdlbTable2.toggleRowSelection(val.pop());
            }
        },

        s_Click4(selection, row) {
            this.$refs.zdlbTable2.clearSelection();
            if (selection.length === 0) {
                return;
            }
            if (row) {
                this.selectList4 = row;
                window.bxSelectData2 = row;
                this.$refs.zdlbTable2.toggleRowSelection(row);
                let v = {
                    FocusTarget: {
                        target: "IntervalInfo",
                        ID: row.oid, //传点击或这选中的右侧信息的qsgt
                        FocusType: "true",
                        EditMode: "true",
                        IntervalInfoindex: row.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
                    },
                };
                let data = {
                    functionName: "FocusTower",
                    functionParameters: [
                        {
                            key: "FocusTarget",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        handleSelectionChange2(val) {
            if (val.length > 1) {
                this.$refs.zdlbTable2.clearSelection();
                this.$refs.zdlbTable2.toggleRowSelection(val.pop());
            }
        },

        fhMrClick() {
            this.$router.push({
                path: "buxian",
            });
        },
    },
};
</script>

<style scoped>
.realRight {
    width: 379px;
    height: 480px;
    position: fixed;
    right: 11px;
    top: 125px;
}

.jcxx {
    width: 100%;
    height: 310px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.jcxx2 {
    width: 100%;
    height: 310px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
    margin-top: 30px;
}
.btns {
    width: 81px;
    height: 33px;
    background: url("img/btns.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 11px;
    right: 7px;
}
.btns > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
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
::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}
/* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 0px;
}

/* 表格样式 */
.e_tabless {
    width: 98%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: scroll;
    margin-left: 1%;
}
.e_tabless2 {
    height: 200px !important;
}
.e_tables::-webkit-scrollbar {
    display: none;
}

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
    /* background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important; */
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
    font-size: 14px;
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
