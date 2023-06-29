<template>
    <div class="wuli">
        <div class="jcxx">
            <div class="j_titles">
                <span>间隔信息</span>
            </div>
            <div class="t_input"></div>
            <!-- 列表 -->
            <el-table
                v-show="dataList.length > 0"
                ref="multipleTable2"
                :data="dataList"
                tooltip-effect="dark"
                class="e_tables"
                @selection-change="handleSelectionChange"
                @select="s_Click"
                @cell-click="gClick3"
                :row-style="{ height: '31px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
            >
                <el-table-column align="center" type="selection" width="46">
                </el-table-column>
                <el-table-column
                    prop="td1"
                    show-overflow-tooltip
                    label="间隔编号"
                    min-width="70"
                >
                    <template slot-scope="scope">
                        <span>{{ scope.row.td1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="td2"
                    show-overflow-tooltip
                    label="间隔名称"
                    min-width="70"
                >
                </el-table-column>
                <el-table-column
                    prop="td3"
                    show-overflow-tooltip
                    min-width="70"
                    label="接点备件"
                >
                </el-table-column>
            </el-table>
            <div class="w_block">
                <div class="block2">
                    <div class="img" @click="keepClick">
                        <span class="imgText">保存</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- title -->
        <!-- <div class="w_title">
      <span>间隔信息</span>
    </div>
    <div class="wbb">
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
          <div class="img" @mouseenter="YR" @mouseleave="YC" @click="keepClick">
            <img v-show="!showImg" src="./img/bc.png" />
            <img v-show="showImg" src="./img/bc2.png" />
          </div>
        </div>
      </div>
    </div> -->
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
                td2: "220kV间隔",
                td3: "绝缘子",
            },
            {
                td1: "2",
                td2: "220kV间隔",
                td3: "绝缘子",
            },
        ];
        this.tableColumnList = [
            { prop: "td1", propName: "间隔编号" },
            { prop: "td2", propName: "间隔名称" },
            { prop: "td3", propName: "接点配件" },
        ];
        let that = this;
        that.$bus.$on("hangObj", (e) => {
            that.qsgt = e.oid;
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
                that.$refs.multipleTable2.toggleRowSelection(that.dataList[0]);
            } else if (e == 2) {
                that.selectList.push(that.dataList[1].td1);
                that.$refs.multipleTable2.toggleRowSelection(that.dataList[1]);
            }
        });
    },
    methods: {
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
            this.$emit("baoCun", this.selectList[0]);
            let that = this;
            setTimeout(() => {
                that.$bus.$emit("setJgID", that.selectList[0]);
            }, 50);
        },
        // 右键清除选中
        unHangClick() {
            this.$refs.multipleTable2.setCurrentRow();
        },
        gClick3(row) {
            this.$refs.multipleTable2.clearSelection();
            if (this.selectList != row) {
                this.selectList = row;
                this.$refs.multipleTable2.toggleRowSelection(row);
                this.sp_number = this.selectList.number;
            } else {
                this.selectList = "";
            }
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
                    ID: this.qsgt,
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
        // checkboxs(row) {
        //   let that = this;
        //   //需要禁用行的id
        //   var vIds = that.selectList;
        //   if (
        //     vIds.some((el) => {
        //       return el == row.td1;
        //     })
        //   ) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // },
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
/* .wbb {
  width: 100%;
  height: 432px;
  overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
  display: none;
} */
.wuli {
    width: 379px;
    height: 310px;
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
/* .block2 > .img > img {
  width: 100%;
  height: 100%;
} */
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
    height: 69% !important;
}
.e_tables::-webkit-scrollbar {
    display: none;
}
</style>
