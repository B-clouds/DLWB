<template>
  <div class="realLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>间隔信息</span>
      </div>
      <!-- 功能按钮 -->
      <div class="t_input">
        <div
          class="t_block"
          @click="addClick"
          :class="currentIndex == 0 ? 't_block_add' : ''"
        >
          <img v-show="currentIndex != 0" src="./img/a1.png" />
        </div>
        <div
          class="t_block"
          @click="updClick"
          :class="currentIndex == 1 ? 't_block_update' : ''"
        >
          <img v-show="currentIndex != 1" src="./img/a2.png" />
        </div>

        <div class="t_block">
          <img v-show="currentIndex != 2" src="./img/a3.png" />
        </div>
        <div
          class="t_block"
          @click="deleteClick"
          :class="currentIndex == 3 ? 't_block_decete' : ''"
        >
          <img v-show="currentIndex != 3" src="./img/a4.png" />
        </div>
        <div class="t_block">
          <img v-show="currentIndex != 4" src="./img/a5.png" />
        </div>
      </div>

      <!-- 列表 -->
      <el-table
        ref="multipleTable3"
        :data="dataList3"
        height="450"
        tooltip-effect="dark"
        class="e_tables e_tables2"
        highlight-current-row
        @cell-click="gClick3"
        :row-style="{ height: '31px' }"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ padding: 0, 'text-align': 'center' }"
        @select="s_Click3"
      >
        <el-table-column align="center" type="selection" width="46">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import time from "@/utils/currentDate";
export default {
  name: "realLeft",
  data() {
    return {
      currentIndex: -1,
      cfOid: "", //存放oid
      cfty: "", //存放投运日期
      cftuiy: "", //存放退运日期
      dataList3: [{ a1: "1", a2: 2, a3: 2, a4: 2, a5: 2, a6: 2, a7: 2 }],
      tableColumnList: [
        { prop: "a1", propName: "aasadadaa" },
        { prop: "a2", propName: "aaaadasdasa" },
        { prop: "a3", propName: "aaaadasdasa" },
        { prop: "a4", propName: "aaaadasdasa" },
        { prop: "a5", propName: "aaaadasdasa" },
        { prop: "a6", propName: "aaaadasdasa" },
        { prop: "a7", propName: "aaaadasdasa" },
      ],
      featureInfoList: [],
      tk_title: "", //新增编辑表头
      showAdTk: "", //是否显示新增弹框
      isAdd_Update: 0, //是新增还是编辑  0：新增 1：编辑
      mrNum: 1,
      addNum: 1,
      getSjc: "", //存放新的oid
      // 所属线路
      ssxl: [
        {
          value: "选项2",
          label: "选项2",
        },
        {
          value: "选项3",
          label: "选项3",
        },
        {
          value: "选项4",
          label: "选项4",
        },
        {
          value: "/",
          label: "搜素下拉框",
        },
      ],
      ssxl_value: "",
      ssxl_show: "",
      // 电压等级
      dydj: [
        {
          value: "交流1000kV",
          label: "1000kV",
        },
        {
          value: "交流500kV",
          label: "500kV",
        },
        {
          value: "交流220kV",
          label: "220kV",
        },
        {
          value: "交流110kV",
          label: "110kV",
        },
        {
          value: "交流35kV",
          label: "35kV",
        },
        {
          value: "交流10kV",
          label: "10kV",
        },
        {
          value: "交流0.4kV",
          label: "0.4kV",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      dydj_value: "",
      dydj_show: "",
      sbmc: "",
      dlxj: "",
    };
  },

  mounted() {
    let that = this;
    that.$bus.$on("cdOid", (e) => {
      that.cfOid = e.oid;
      that.cfty = e.tyrq;
      that.cftuiy = e.tuiyrq;
      setTimeout(() => {
        // 获取表头
        let v = {
          URL: "data/tableColumnInfo/" + 109 + "/" + 0 + "/" + 109 + "/" + 1,
          StructName: "获取电缆线路表头",
          verbType: "GET",
        };
        let data2 = {
          functionName: "WebServerMsg",
          backFunctionName: "getxlTh2",
          functionParameters: [
            {
              key: "WebServerMsg",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));
        window.ue.interface.getxlTh2 = this.getxlTh2;
      }, 50);
    });
  },
  methods: {
    // 获取表头
    getxlTh2(e) {
      let data2 = JSON.parse(e).data;
      this.tableColumnList = data2.data;
      this.dataList = [];

      this.getDataList();
    },
    // 查询列表方法
    getDataList() {
      // 获取表头
      let v = {
        URL: "/xa/customQuery",
        StructName: "获取电缆维护左侧信息",
        verbType: "POST",
        value: {
          name: "Data_CableLineInfo",
          pageNo: 1,
          pageSize: 100,
          tbName: "CableLineInfo",
          data: [
            {
              key: "ssgl",
              value: this.cfOid,
            },
          ],
        },
      };
      let data2 = {
        functionName: "WebServerMsg",
        backFunctionName: "selectData",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      window.ue.interface.selectData = this.selectData;
    },
    // 查询成功回调
    selectData(e) {
      let data = JSON.parse(e);
      let data2 = data.data.CableLineInfo;
      this.dataList3 = data2;
    },
    // 添加方法
    addClick() {
      if (this.currentIndex != 0) {
        this.currentIndex = 0;
      } else {
        // 监听新增点击
        this.showAdTk = true;
        this.addNum = this.mrNum;
        this.isAdd_Update = 0;
        this.tk_title = "新增弹框";
      }
    },
    // 修改方法
    updClick() {
      if (this.currentIndex != 1) {
        this.currentIndex = 1;
      } else {
      }
    },
    // 删除方法
    deleteClick() {
      if (this.currentIndex != 3) {
        this.currentIndex = 3;
      } else {
      }
    },
    // 新增、编辑确认按钮
    addUpdataClick() {
      if (this.isAdd_Update == 0) {
        // 新增数据
        // 发送消息
        let times = time.getCurrentDate();
        let sjc =
          times.year +
          "-" +
          times.month +
          "-" +
          times.date +
          " " +
          times.hours +
          ":" +
          times.minutes +
          ":" +
          times.seconds;
        let sjc2 = Date.parse(sjc) / 1000;
        this.getSjc = "zdy" + sjc2;
        let v = {
          TwinType: "CableLine",
          ModifyType: "New",
          Data: {
            oid: this.getSjc,
            sbmc: this.sbmc,
            tyrq: this.cfty,
            tuiyrq: this.cftuiy,
            ssxl: this.ssxl_value,
            dydj: this.dydj_value,
            dlxj: this.dlxj,
            ssdt: window.xianMing,
            fbzt: "已发布",
            sfxzdw: 1,
            zdycj: 1,
            ssgl: this.cfOid,
          },
        };
        let data = {
          functionName: "CustomGeneration",
          backFunctionName: "CableLineAdd",
          functionParameters: [
            {
              key: "CustomGeneration",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.CableLineAdd = this.CableLineAdd;
      } else {
        // 编辑数据
      }
    },
    // 新增确认按钮
    CableLineAdd() {
      this.showAdTk = false;
      this.sbmc = "";
      this.dlxj = "";
      this.getDataList();
    },
    // 关闭新增弹框
    closeAdTk() {
      this.showAdTk = false;
    },
    ssxlClick(e) {
      this.ssxl_show = e;
    },
    dydjClick(e) {
      this.dydj_show = e;
    },
    gClick3(row) {
      this.$refs.multipleTable4.clearSelection();
      if (this.selectList3 != row) {
        this.selectList3 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
        this.sp_number = this.selectList3.number;
      } else {
        this.selectList3 = "";
      }
    },

    s_Click3(selection, row) {
      this.$refs.multipleTable4.clearSelection();
      if (selection.length === 0) {
        return;
      }
      if (row) {
        this.selectList3 = row;
        this.$refs.multipleTable4.toggleRowSelection(row);
      }
    },
  },
};
</script>

<style scoped>
.realLeft {
  width: 379px;
  height: 480px;
  position: fixed;
  left: 11px;
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
</style>
<style scoped>
/* 功能选择样式 */

.t_input {
  width: 100%;
  height: 48px;
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
<style scoped>
::v-deep .e_tables ::-webkit-scrollbar {
  width: 1px;
  height: 8px;
  cursor: pointer;
}
::v-deep .e_tables ::-webkit-scrollbar-thumb {
  background-color: #4ea8e8 !important;
  border-radius: 10px;
}
::v-deep .e_tables ::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent !important;
}

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
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent !important;
  /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
}

::v-deep .el-table td.el-table__cell,
::v-deep .el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

::v-deep .el-table__header tr,
::v-deep .el-table__header th {
  height: 39.8px !important;
  /* background: rgba(25, 61, 112, 0.5) !important; */
  background: transparent !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 12px;
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
</style>
<style scoped>
/* 表格样式 */
.e_tables {
  width: 98%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
  margin-left: 1%;
}
.e_tables2 {
  height: 80% !important;
}

.t_block_add {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_add.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.t_block_update {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_update.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_decete {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_decete.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
