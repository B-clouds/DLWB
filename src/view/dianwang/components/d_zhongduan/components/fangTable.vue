<template>
  <div class="fangTable">
    <el-table
      ref="multipleTable4"
      :data="dataList4"
      height="250"
      tooltip-effect="dark"
      class="e_tabless"
      highlight-current-row
      @cell-click="gClick4"
      :row-style="{ height: '31px' }"
      :header-cell-style="{ 'text-align': 'center', height: '40px' }"
      :cell-style="{ padding: 0, 'text-align': 'center' }"
      @select="s_Click4"
    >
      <el-table-column align="center" type="selection" width="56">
      </el-table-column>
      <el-table-column
        prop="oid"
        show-overflow-tooltip
        label="ID"
        min-width="70"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.oid }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="gljd"
        show-overflow-tooltip
        label="截面节点"
        min-width="70"
      >
      </el-table-column>
      <el-table-column
        prop="sbmc"
        show-overflow-tooltip
        min-width="70"
        label="名称"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "fangTable",
  data() {
    return {
      showImg: false,
      currentIndex: -1,
      selectList4: "",
      dataList4: [],
      oid: "",
      featureInfoList: [],
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObjssss", (e) => {
      that.oid = e.oid;
      that.getDataLists();
    });
  },
  methods: {
    getDataLists() {
      // 获取电缆维护左侧信息
      let v = {
        URL: "/xa/customQuery",
        StructName: "获取电缆维护外景右侧信息",
        verbType: "POST",
        value: {
          name: "Data_CableTerminalInfo",
          pageNo: 1,
          pageSize: 100,
          tbName: "CableTerminalInfo",
          data: [
            {
              key: "ssgl",
              value: this.oid,
            },
          ],
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "getNJData",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getNJData = this.getNJData;
    },
    getNJData(e) {
      let data = JSON.parse(e);
      let data2 = data.data.CableTerminalInfo;
      this.dataList4 = data2;
    },
    gClick4(row) {
      this.$refs.multipleTable4.clearSelection();
      if (this.selectList4 != row) {
        this.selectList4 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
        let v = {
          FocusTarget: {
            target: "CablePGP",
            ID: this.oid,
            FocusType: true,
            IntervalInfoindex: row.gljd,
            IDType: "CablePGP",
          },
        };
        let data = {
          functionName: "FocusTower",
          backFunctionName: "",
          functionParameters: [
            {
              key: "FocusTarget",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.selectList4 = "";
        let v = {
          FocusTarget: {
            target: "CablePGP",
            ID: this.oid,
            FocusType: false,
            IntervalInfoindex: row.gljd,
            IDType: "CablePGP",
          },
        };
        let data = {
          functionName: "FocusTower",
          backFunctionName: "",
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

    s_Click4(selection, row) {
      this.$refs.multipleTable4.clearSelection();
      if (selection.length === 0) {
        let v = {
          FocusTarget: {
            target: "CablePGP",
            ID: this.oid,
            FocusType: false,
            IntervalInfoindex: row.gljd,
            IDType: "CablePGP",
          },
        };
        let data = {
          functionName: "FocusTower",
          backFunctionName: "",
          functionParameters: [
            {
              key: "FocusTarget",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        return;
      }
      if (row) {
        this.selectList4 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
        let v = {
          FocusTarget: {
            target: "CablePGP",
            ID: this.oid,
            FocusType: true,
            IntervalInfoindex: row.gljd,
            IDType: "CablePGP",
          },
        };
        let data = {
          functionName: "FocusTower",
          backFunctionName: "",
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
  },
};
</script>

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

::v-deep.el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  display: none;
}
::v-deep .el-checkbox__inner::after {
  display: none !important;
}
::v-deep .current-row {
  /* 选中时的图片显示 */
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
::v-deep .el-table__body tr.current-row > td.el-table__cel {
  background-color: transparent !important;
}

/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent !important;
}
</style>
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

.el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.el-table__header tr,
.el-table__header th {
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
.fangTable {
  position: absolute;
  width: 100%;
  left: 0;
  top: 40px;
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
  height: 170px !important;
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
