<template>
    <div class="wuli">
        <!-- title -->

        <div class="jcxx">
            <div class="j_titles">
                <span>间隔信息</span>
            </div>
            <div class="t_input"></div>
            <el-table
                v-show="dataList.length > 0"
                ref="multipleTable2"
                :data="dataList"
                tooltip-effect="dark"
                class="e_tables"
                @selection-change="handleSelectionChange"
                @select="s_Click"
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
            <!-- <div class="w_block">
                <div class="block2">
                    <div class="img" @click="keepClick">
                        <span class="imgText">保存</span>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "kongjian",
    data() {
        return {
            dataList: [],
            tableColumnList: [],
            selectList: [], //复选数组
            selectList2: [], //复选数组
            multipleSelection: [],
            qsgt: "",
            showImg: false,
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("hangObj", (e) => {
            that.qsgt = e.ssgt;
            that.getDataList();
        });
    },
    methods: {
        // 获取起点列表
        getDataList() {
            let v = {
                URL: "/xa/customQuery",
                StructName: "获取架空、间隔列表",
                verbType: "POST",
                value: {
                    name: "Data_IntervalInfo",
                    pageNo: 1,
                    pageSize: 100,
                    tbName: "IntervalInfo",
                    data: [
                        {
                            key: "ssgt",
                            value: this.qsgt,
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
            this.dataList = JSON.parse(e).data.IntervalInfo;
            let row = this.dataList[0];
            this.$nextTick(function () {
                this.$refs.multipleTable2.toggleRowSelection(row);
                // 存放默认选中的起点oid
                this.selectList = row;
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
        pageClick(e) {
            this.page = e;
        },
        handleSelectionChange(val) {
            if (val.length > 1) {
                this.$refs.multipleTable2.clearSelection();
                this.$refs.multipleTable2.toggleRowSelection(val.pop());
            }
        },
        YR() {
            this.showImg = true;
        },
        YC() {
            this.showImg = false;
        },

        keepClick() {
            // 保存
            this.$emit("baoCun", this.selectList2[0]);
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("setJgID", that.selectList2[0]);
            }, 50);
        },
        // 右键清除选中
        unHangClick() {
            this.$refs.multipleTable2.setCurrentRow();
        },
        // 点击单选
        s_Click(e) {
            let data = e;
            for (let i = 0; i < data.length; i++) {
                this.selectList = [];
                this.selectList2 = [];
                this.selectList.push(data[i]);
                this.selectList2.push(data[i].oid);
            }
            this.selectList = Array.from(new Set(this.selectList));
            this.selectList2 = Array.from(new Set(this.selectList2));
            let v = {
                FocusTarget: {
                    target: "IntervalInfo",
                    ID: this.selectList[0].oid,
                    FocusType: true,
                    EditMode: true,
                    IntervalInfoindex: this.selectList[0].Str_ValID,
                    IDType: "IntervalInfo",
                },
            };
            let data2 = {
                functionName: "FocusTower",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "FocusTarget",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data2));
        },
        checkboxs(row) {
            console.log("111111111111111111111", row);
            let that = this;
            //需要禁用行的id
            let vIds = that.selectList[0];
            if (vIds == row) {
                return false;
            } else {
                return true;
            }
        },
    },
};
</script>

<style scoped>
.e_tables {
    height: 232px !important;
}

.wuli {
    width: 379px;
    height: 340px;
    position: fixed;
    right: 11px;
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
.t_input {
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 40px;
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
    height: 732px;
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
.block2 {
    width: 421.44px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.block2 > .img {
    width: 100px;
    height: 31.36px;
    cursor: pointer;
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
.block2 {
    width: 421.44px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.block2 > .img {
    width: 82px;
    height: 33px;
    background: url("img/bc3.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.imgText {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0em;
    color: #e2e2e2;
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
::v-deep .el-checkbox__input.is-disabled .el-checkbox__inner {
    background: url("img/xz.png") !important;
    background-size: 100% 100% !important;
    width: 16px;
    height: 16px;
}
</style>
