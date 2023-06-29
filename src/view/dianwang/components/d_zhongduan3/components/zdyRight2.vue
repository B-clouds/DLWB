<template>
    <div class="realRight">
        <div class="jcxx">
            <div class="j_titles">
                <span>主管廊截面信息</span>
            </div>
            <div class="t_input"></div>
            <!-- 列表 -->
            <el-table
                ref="multipleTable3"
                :data="dataList3"
                height="250"
                tooltip-effect="dark"
                class="e_tabless e_tabless2"
                highlight-current-row
                @cell-click="gClick3"
                :row-style="{ height: '31px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
                @select="s_Click3"
            >
                <el-table-column align="center" type="selection" width="46">
                </el-table-column>
                <el-table-column
                    prop="a1"
                    show-overflow-tooltip
                    label="ID"
                    min-width="70"
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row.a1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="a2"
                    show-overflow-tooltip
                    label="编号"
                    min-width="70"
                >
                </el-table-column>
                <el-table-column
                    prop="a3"
                    show-overflow-tooltip
                    min-width="70"
                    label="名称"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "realRight",
    data() {
        return {
            currentIndex: -1,
            dataList3: [
                {
                    a1: "zdy16825470",
                    a2: "1",
                    a3: "rd220kV_1",
                },
                {
                    a1: "zdy16825471",
                    a2: "2",
                    a3: "rd220kV_2",
                },
                {
                    a1: "zdy16825472",
                    a2: "3",
                    a3: "rd220kV_3",
                },
                {
                    a1: "zdy16825473",
                    a2: "4",
                    a3: "rd220kV_4",
                },
                {
                    a1: "zdy16825474",
                    a2: "5",
                    a3: "rd220kV_5",
                },
                {
                    a1: "zdy16825475",
                    a2: "6",
                    a3: "rd220kV_6",
                },
            ],

            featureInfoList: [],
        };
    },
    methods: {
        gClick3(row) {
            this.$refs.multipleTable3.clearSelection();
            if (this.selectList3 != row) {
                this.selectList3 = row;
                this.$refs.multipleTable3.toggleRowSelection(row);
                this.sp_number = this.selectList3.number;
            } else {
                this.selectList3 = "";
            }
        },

        s_Click3(selection, row) {
            this.$refs.multipleTable3.clearSelection();
            if (selection.length === 0) {
                return;
            }
            if (row) {
                this.selectList3 = row;
                this.$refs.multipleTable3.toggleRowSelection(row);
            }
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
    height: 258px;
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
    background: url("img/wxz1.png") !important;
    background-size: 100% 100% !important;

    border: none !important;
    border-radius: none !important;
    width: 16px;
    height: 16px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background: url("img/xz1.png") !important;
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
    height: 79% !important;
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
    font-size: 14px;
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
