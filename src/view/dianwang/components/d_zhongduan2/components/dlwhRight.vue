<template>
  <div class="realRight">
    <div class="jcxx">
      <div class="j_titles">
        <span>关键模型信息</span>
      </div>
      <div class="t_input"></div>
      <!-- 列表 -->
      <el-table
        ref="multipleTable1000"
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
          prop="gljd"
          show-overflow-tooltip
          label="模型编号"
          min-width="70"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.gljd }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="gljd"
          show-overflow-tooltip
          label="模型名称"
          min-width="70"
        >
        </el-table-column>
        <el-table-column
          prop="a3"
          show-overflow-tooltip
          min-width="70"
          label="配件名称"
        >
          <template slot-scope="scope">
            <span>截面节点</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 提示弹框 -->
    <div class="zhezhao" v-show="showTSTK">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择左侧“电缆信息”列表中的一条数据与当前模型进行绑定。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 提示弹框2 -->
    <div class="zhezhao" v-show="showTSTK2">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>数据已存在绑定关系，请将原有关系解除后，再进行该操作”</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK2">
            <span>确认</span>
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
      featureInfoList: [],
      cfqdsb: "", //存放起点设备ID
      selectList3: "",
      selectList1001: "",
      cfSelectId: "",
      showTSTK: false, //是否显示提示弹框
      showTSTK2: false, //是否显示提示弹框2
    };
  },
  watch: {
    cfSelectId(e, f) {
      this.$emit("getSelectId", e);
    },
  },
  mounted() {
    let that = this;
    that.cfqdsb = window.dlData.qdsb;
    that.getDataList();
    that.$bus.$on("kzxzMX", (e) => {
      that.gClick4(e);
    });
    that.$bus.$on("isSelectList", (e) => {
      that.selectList1001 = e;
    });
  },
  methods: {
    closeTSTK() {
      this.showTSTK = false;
    },
    closeTSTK2() {
      this.showTSTK2 = false;
    },
    getDataList() {
      // 获取电缆维护左侧信息
      let v = {
        URL: "/xa/customQuery",
        StructName: "获取电缆维护右侧信息",
        verbType: "POST",
        value: {
          name: "Data_CableTerminalInfo",
          pageNo: 1,
          pageSize: 100,
          tbName: "CableTerminalInfo",
          data: [
            {
              key: "ssgl",
              value: this.cfqdsb,
            },
          ],
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "selectDataRight",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.selectDataRight = this.selectDataRight;
    },
    selectDataRight(e) {
      let data = JSON.parse(e);
      let data2 = data.data.CableTerminalInfo;
      this.dataList3 = data2;
    },
    gClick3(row) {
      this.$refs.multipleTable1000.clearSelection();
      if (this.selectList3 != row) {
        let that = this;
        setTimeout(() => {
          let v2 = {
            ChooseType: "SelectBind",
            SelectType: "false",
            Oid: that.cfSelectId,
          };
          let data2 = {
            functionName: "CableMaintenance",
            functionParameters: [
              {
                key: "CableMaintenance",
                value: JSON.stringify(v2),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data2));
          setTimeout(() => {
            this.selectList3 = row;
            this.$refs.multipleTable1000.toggleRowSelection(row);

            let v = {
              ChooseType: "SelectBind",
              SelectType: "true",
              Oid: row.oid,
            };
            let data = {
              functionName: "CableMaintenance",
              functionParameters: [
                {
                  key: "CableMaintenance",
                  value: JSON.stringify(v),
                },
              ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            that.cfSelectId = that.selectList3.oid;
          }, 50);
        }, 10);
      } else {
        this.selectList3 = "";
        let v = {
          ChooseType: "SelectBind",
          SelectType: "false",
          Oid: row.oid,
        };
        let data = {
          functionName: "CableMaintenance",
          functionParameters: [
            {
              key: "CableMaintenance",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    // 取消显示绑定按钮功能
    gClick4(row) {
      if (this.selectList1001 != "") {
        // let v = {
        //   ChooseType: "CancelSelectBind",
        //   SelectType: "false",
        //   Oid: row.oid,
        // };
        // let data = {
        //   functionName: "CableMaintenance",
        //   functionParameters: [
        //     {
        //       key: "CableMaintenance",
        //       value: JSON.stringify(v),
        //     },
        //   ],
        // };
        // ue.interface.broadcast("PSAPI", JSON.stringify(data));
        // 调用绑定方法
        this.bangdingClick(this.selectList1001, row.oid);
      } else {
        // 弹出弹框
        this.showTSTK = true;
      }
    },
    bangdingClick(e, f) {
      if (e.bdgx == 0) {
        let v = {
          TwinType: "CableLine",
          ModifyType: "Update",
          Data: {
            oid: e.oid,
            sbmc: e.sbmc,
            tyrq: e.tyrq,
            tuiyrq: e.tuiyrq,
            ssxl: e.ssxl,
            dydj: e.dydj,
            dlxj: e.dlxj,
            ssdt: e.ssdt,
            fbzt: "已发布",
            sfxzdw: 1,
            zdycj: 1,
            ssgl: e.ssgl,
            qdsb: f,
            bdgx: 1,
          },
        };
        let data = {
          functionName: "CustomGeneration",
          backFunctionName: "bdcgSJ",
          functionParameters: [
            {
              key: "CustomGeneration",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.bdcgSJ = this.bdcgSJ;
      } else {
        this.showTSTK2 = true;
      }
    },
    bdcgSJ() {
      this.$bus.$emit("getDataLists");
    },
    s_Click3(selection, row) {
      this.$refs.multipleTable1000.clearSelection();
      if (selection.length === 0) {
        let v = {
          ChooseType: "SelectBind",
          SelectType: "false",
          Oid: row.oid,
        };
        let data = {
          functionName: "CableMaintenance",
          functionParameters: [
            {
              key: "CableMaintenance",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        return;
      }
      if (row) {
        let that = this;
        setTimeout(() => {
          let v2 = {
            ChooseType: "SelectBind",
            SelectType: "false",
            Oid: that.cfSelectId,
          };
          let data2 = {
            functionName: "CableMaintenance",
            functionParameters: [
              {
                key: "CableMaintenance",
                value: JSON.stringify(v2),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data2));
          setTimeout(() => {
            this.selectList3 = row;
            this.$refs.multipleTable1000.toggleRowSelection(row);

            let v = {
              ChooseType: "SelectBind",
              SelectType: "true",
              Oid: row.oid,
            };
            let data = {
              functionName: "CableMaintenance",
              functionParameters: [
                {
                  key: "CableMaintenance",
                  value: JSON.stringify(v),
                },
              ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            that.cfSelectId = that.selectList3.oid;
          }, 50);
        }, 10);
      }
    },
  },
};
</script>

<style scoped>
.realRight {
  width: 379px;
  height: 480px;
  position: absolute;
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
