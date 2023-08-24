<template>
  <div class="zdyRight">
    <div class="jcxx2">
      <div class="j_titles">
        <span>截面信息</span>
      </div>
      <div class="t_input"></div>
      <fangTable />
    </div>
    <div class="jcxx3">
      <div class="j_titles">
        <span>色谱特效</span>
      </div>
      <yuanTable />
    </div>
  </div>
</template>

<script>
import fangTable from "./fangTable.vue";
import yuanTable from "./yuanTable.vue";
export default {
  name: "kongjian",
  components: {
    fangTable,
    yuanTable,
  },
  data() {
    return {
      showImg: false,
      longitude: "",
      dimension: "",
      angle: "",
      altitude: "",
      // 色谱特效
      dataList3: [
        {
          number: "01",
          colorData: ["red"],
          colorName: "红色",
          displayStatus: 0,
          descriptions: "0.4kV电压等级色值",
        },
        {
          number: "02",
          colorData: ["red", "#fff"],
          colorName: "红色转白色",
          displayStatus: 1,
          descriptions: "0.4kV电压等级色值",
        },
        {
          number: "03",
          colorData: ["#fff"],
          colorName: "白色",
          displayStatus: 0,
          descriptions: "0.4kV电压等级色值",
        },
      ],
      tableColumnLists3: [
        { prop: "number", propName: "编号" },
        { prop: "colorName", propName: "颜色色谱" },
        { prop: "descriptions", propName: "说明" },
      ],
      featureInfoList: [],
      selectList3: "", //存储色谱特效选中的值
      sp_number: "01", //色谱特效编号
      xialaIndex: 0, //色谱特效类型, 0:常亮  1：渐变
      colorDesc: "", //色谱颜色注释1
      colorDesc2: "", //色谱颜色注释2
      colorDescName: "", //用于接口传值
      colorColor1: "",
      colorColor2: "",
      colorColorData: [], //用于接口传值
      colorDesc3: "", //说明
      shouXiala: 0, //是否展开下拉框
      xiaLaSpan: "常亮",
      sp_isadd_upd: 0, // 0：新增 1：编辑
      show_spDelete: false, //是否显示删除弹框
      spNums: "", //存储最后一位色谱编号
      currentIndex: -1,
      selectList4: "",
      dataList4: [
        {
          a1: "xxxxx",
          a2: "xxxxx",
          a3: "xxxxx",
        },
        {
          a1: "xxxxx",
          a2: "xxxxx",
          a3: "xxxxx",
        },
        {
          a1: "xxxxx",
          a2: "xxxxx",
          a3: "xxxxx",
        },
        {
          a1: "xxxxx",
          a2: "xxxxx",
          a3: "xxxxx",
        },
        {
          a1: "xxxxx",
          a2: "xxxxx",
          a3: "xxxxx",
        },
      ],

      featureInfoList: [],
    };
  },
  mounted() {},
  methods: {
    gClick3(row) {
      this.$refs.multipleTable3.clearSelection();
      if (this.selectList3 != row) {
        this.selectList3 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
        this.sp_number = this.selectList3.number;
        let v = {
          ModifyType: "Select",
          ColorNumber: this.sp_number,
          SelectType: true,
        };
        let data = {
          functionName: "ModifyColorAtlasnfo",
          backFunctionName: "sptxSelect",
          functionParameters: [
            {
              key: "ModifyColorAtlasnfo",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.sptxSelect = this.sptxSelect;
      } else {
        this.selectList3 = "";
        let v = {
          ModifyType: "Select",
          ColorNumber: this.sp_number,
          SelectType: false,
        };
        let data = {
          functionName: "ModifyColorAtlasnfo",
          backFunctionName: "sptxSelect",
          functionParameters: [
            {
              key: "ModifyColorAtlasnfo",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.sptxSelect = this.sptxSelect;
      }
    },
    sptxSelect(e) {},

    s_Click3(selection, row) {
      this.$refs.multipleTable3.clearSelection();
      if (selection.length === 0) {
        let v = {
          ModifyType: "Select",
          ColorNumber: this.sp_number,
          SelectType: false,
        };
        let data = {
          functionName: "ModifyColorAtlasnfo",
          backFunctionName: "sptxSelect",
          functionParameters: [
            {
              key: "ModifyColorAtlasnfo",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.sptxSelect = this.sptxSelect;
        return;
      }
      if (row) {
        this.selectList3 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
        let v = {
          ModifyType: "Select",
          ColorNumber: this.sp_number,
          SelectType: true,
        };
        let data = {
          functionName: "ModifyColorAtlasnfo",
          backFunctionName: "sptxSelect",
          functionParameters: [
            {
              key: "ModifyColorAtlasnfo",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.sptxSelect = this.sptxSelect;
      }
    },
    tableRowClassName2({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
        return "warning-row";
      }
      return "";
    },

    gClick4(row) {
      this.$refs.multipleTable4.clearSelection();
      if (this.selectList4 != row) {
        this.selectList4 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
        this.sp_number = this.selectList4.number;
      } else {
        this.selectList4 = "";
      }
    },

    s_Click4(selection, row) {
      this.$refs.multipleTable4.clearSelection();
      if (selection.length === 0) {
        return;
      }
      if (row) {
        this.selectList4 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
      }
    },
  },
};
</script>

<style>
/* //element-ui table的去除右侧滚动条的样式 */
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
} /* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 0px;
}
</style>
<style scoped>
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent;
}
::v-deep .el-table th {
  background-color: transparent;
}
::v-deep .el-table tr {
  background-color: transparent;
}
::v-deep .el-table--enable-row-transition .el-table__body td,
::v-deep .el-table .cell {
  background-color: transparent !important;
}

::v-deep .el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
::v-deep .el-table td.el-table__cell,
::v-deep .el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

::v-deep .blocksss > .el-table__header tr,
::v-deep .el-table__header th {
  height: 39.8px !important;
  /* background: rgba(25, 61, 112, 0.5) !important; */
  background: transparent !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
}
::v-deep .el-table__body tr,
::v-deep .el-table__body td {
  height: 30px;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #bee4ee;
}
::v-deep .el-checkbox__inner {
  background-color: #155589;
  border: 1px solid #155589;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #10acff;
  border: 1px solid #10acff;
}
.zdyRight {
  width: 379px;
  height: 800px;
  position: fixed;
  right: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 238px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.jcxx2 {
  width: 100%;
  height: 223px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.jcxx3 {
  width: 100%;
  height: 572px;
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
/* 表格样式 */
.e_tables {
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 5%;
}
.e_tables2 {
  height: 72% !important;
}
.e_tables::-webkit-scrollbar {
  display: none;
}
.e_tabless {
  width: 98%;
  height: 178px !important;
  overflow-y: scroll;
  margin-left: 1%;
}
.ys {
  display: flex;
  align-items: center;
}
.yanse1 {
  width: 14px;
  height: 8px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  margin-top: 2px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
}
.yanses {
  width: 50%;
  height: 100%;
}
</style>
