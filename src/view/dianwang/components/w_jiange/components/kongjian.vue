<template>
    <div class="wuli">
        <!-- title -->
        <div class="w_title">
            <span>间隔信息</span>
        </div>
        <div class="wbb">
            <el-table
                v-show="dataList.length > 0"
                ref="multipleTable"
                :data="dataList"
                tooltip-effect="dark"
                class="e_tables"
                @selection-change="handleSelectionChange"
                @select="s_Click"
            >
                <el-table-column
                    align="center"
                    :selectable="checkboxs"
                    type="selection"
                    width="55"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    :label="item.propName"
                    :property="item.prop"
                    v-for="item in tableColumnList"
                    :key="item.prop"
                    min-width="20"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row[scope.column.property] }}</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="w_block">
                <div class="block2">
                    <div
                        class="img"
                        @mouseenter="YR"
                        @mouseleave="YC"
                        @click="keepClick"
                    >
                        <img v-show="!showImg" src="./img/bc.png" />
                        <img v-show="showImg" src="./img/bc2.png" />
                    </div>
                </div>
            </div>
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
            multipleSelection: [],
            qsgt: "",
            showImg: false,
        };
    },
    mounted() {
        this.dataList = [
            {
                td1: "1",
                td2: "储能1号",
                td3: "开关",
            },
        ];
        this.tableColumnList = [
            { prop: "td1", propName: "间隔编号" },
            { prop: "td2", propName: "间隔名称" },
            { prop: "td3", propName: "接点配件" },
        ];
        let that = this;
        that.$bus.$on("hangObj", (e) => {
            that.qsgt = e.qsgt;
            // let arr = JSON.parse(JSON.stringify(that.dataList));
            // let obj = {};
            // for (let i = 0; i < arr.length; i++) {
            //   e.Str_ValID = arr[i].td1;
            //   obj = arr[i];
            // }
            // that.selectList.push(obj.td1);
            // that.$refs.multipleTable.toggleRowSelection(obj);
        });
        that.$bus.$on("selectJG", (e) => {
            if (e == 1) {
                that.selectList.push(that.dataList[0].td1);
                that.$refs.multipleTable.toggleRowSelection(that.dataList[0]);
            } else if (e == 2) {
                that.selectList.push(that.dataList[1].td1);
                that.$refs.multipleTable.toggleRowSelection(that.dataList[1]);
            }
        });
    },
    methods: {
        pageClick(e) {
            this.page = e;
        },
        handleSelectionChange(val) {
            if (val.length > 1) {
                this.$refs.multipleTable.clearSelection();
                this.$refs.multipleTable.toggleRowSelection(val.pop());
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
            this.$emit("baoCun", this.selectList[0]);
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("setJgID", that.selectList[0]);
            }, 50);
        },
        // 右键清除选中
        unHangClick() {
            this.$refs.multipleTable.setCurrentRow();
        },
        // 点击单选
        s_Click(e) {
            let data = e;
            for (let i = 0; i < data.length; i++) {
                this.selectList = [];
                this.selectList.push(data[i].td1);
            }
            this.selectList = Array.from(new Set(this.selectList));
            let v = {
                FocusTarget: {
                    target: "IntervalInfo",
                    ID: this.oid,
                    FocusType: true,
                    EditMode: true,
                    IntervalInfoindex: this.selectList[0],
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
            let that = this;
            //需要禁用行的id
            var vIds = that.selectList;
            if (
                vIds.some((el) => {
                    return el == row.td1;
                })
            ) {
                return false;
            } else {
                return true;
            }
        },
    },
};
</script>
<style>
.wbb > .el-table > .el-table__header-wrapper .el-checkbox {
    display: none;
}

.el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #409eff !important;
    border-color: #409eff !important;
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
    border-color: #fff;
}
</style>
<style scoped>
.e_tables {
    height: 232px;
}
.wbb {
    width: 100%;
    height: 432px;
    overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
    display: none;
}
.wuli {
    width: 451.38px;
    height: 800px;
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
.block2 > .img > img {
    width: 100%;
    height: 100%;
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
