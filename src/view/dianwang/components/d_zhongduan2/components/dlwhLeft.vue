<template>
  <div class="realLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>电缆信息</span>
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

        <div
          class="t_block"
          @click="fbClick"
          :class="currentIndex == 2 ? 't_block_fabu' : ''"
        >
          <img v-show="currentIndex != 2" src="./img/a3.png" />
        </div>
        <div
          class="t_block"
          @click="deleteClick"
          :class="currentIndex == 3 ? 't_block_decete' : ''"
        >
          <img v-show="currentIndex != 3" src="./img/a4.png" />
        </div>
        <div
          class="t_block"
          @click="jbClick"
          :class="currentIndex == 4 ? 't_block_jiebang' : ''"
        >
          <img v-show="currentIndex != 4" src="./img/a5.png" />
        </div>
      </div>

      <!-- 列表 -->
      <el-table
        ref="multipleTable1001"
        :data="dataList3"
        height="450"
        tooltip-effect="dark"
        class="e_tablesa e_tables2a"
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
          align="center"
          :label="item.propName"
          :property="item.prop"
          v-for="item in tableColumnList"
          :key="item.prop"
          min-width="76"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- -----------------------新增/编辑弹框----------------------------------------- -->
    <div class="zhezhao" v-show="showAdTk">
      <div class="addUpdTK">
        <div class="z_cha" @click="closeAdTk"></div>
        <div class="tk_title">
          <span>{{ tk_title }}</span>
        </div>

        <div class="tk_blocks">
          <span>电缆名称</span>
          <div class="rights">
            <div class="r2">
              <input
                v-model="sbmc"
                placeholder="最大输入不超过10个字"
                maxlength="10"
              />
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>所属线路</span>
          <div class="rights">
            <div class="r2">
              <div class="inputs">
                <el-select
                  v-model="ssxl_value"
                  @visible-change="ssxlClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in ssxl"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!ssxl_show" src="./img/xia.png" />
                <img v-show="ssxl_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>电压等级</span>
          <div class="rights">
            <div class="r2">
              <div class="inputs">
                <el-select
                  v-model="dydj_value"
                  @visible-change="dydjClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in dydj"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!dydj_show" src="./img/xia.png" />
                <img v-show="dydj_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>电缆线径</span>
          <div class="rights">
            <div class="r2">
              <input
                v-model="dlxj"
                placeholder="最大输入不超过10个字"
                maxlength="10"
              />
            </div>
          </div>
        </div>

        <div class="z_btn">
          <div class="z_blocks" @click="addUpdataClick">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeAdTk">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑提示弹框-->
    <div class="zhezhao" v-show="showTSTK3">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择左侧电缆对象的信息进行编辑</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK3">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 解绑提示弹框-->
    <div class="zhezhao" v-show="showTSTK4">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择左侧电缆数据进行解绑。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK4">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 解绑提示弹框-->
    <div class="zhezhao" v-show="showTSTK5">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>是否要对选中的电缆对象进行解绑？</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK5Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK5">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除提示弹框-->
    <div class="zhezhao" v-show="showTSTK6">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择左侧电缆对象进行删除。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK6">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除确认弹框-->
    <div class="zhezhao" v-show="showTSTK7">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>是否要对选中的电缆对象进行解绑？</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK7Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK7">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 发布提示弹框-->
    <div class="zhezhao" v-show="showTSTK8">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择左侧电缆数据进行发布。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK8">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 发布确认弹框-->
    <div class="zhezhao" v-show="showTSTK9">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>是否要对选中的电缆数据进行发布？</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK9Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK9">
            <span>取消</span>
          </div>
        </div>
      </div>
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
      dataList3: [],
      tableColumnList: [],
      featureInfoList: [],
      tk_title: "", //新增编辑表头
      showAdTk: "", //是否显示新增弹框
      isAdd_Update: 0, //是新增还是编辑  0：新增 1：编辑

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
      selectList1001: "",
      showTSTK3: false, //编辑提示弹框
      showTSTK4: false, //解绑提示弹框
      showTSTK5: false, //确认解绑弹框
      showTSTK6: false, //删除提示弹框
      showTSTK7: false, //删除确认弹框
      showTSTK8: false, //发布提示弹框
      showTSTK9: false, //发布确认弹框
    };
  },
  mounted() {
    let that = this;
    that.cfOid = window.dlData.oid;
    that.cfty = window.dlData.tyrq;
    that.cftuiy = window.dlData.tuiyrq;

    setTimeout(() => {
      // 获取表头
      let v = {
        URL: "data/tableColumnInfo/" + 109 + "/" + 0 + "/" + 109 + "/" + 1,
        StructName: "获取电缆线路表头",
        verbType: "GET",
      };
      let data2 = {
        functionName: "WebServerMsg",
        backFunctionName: "getxlThleft",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      window.ue.interface.getxlThleft = that.getxlThleft;
    }, 50);
    that.$bus.$on("getDataLists", (e) => {
      that.getDataList();
    });
  },
  methods: {
    closeTSTK3() {
      this.showTSTK3 = false;
    },
    closeTSTK4() {
      this.showTSTK4 = false;
    },
    closeTSTK5() {
      this.showTSTK5 = false;
    },
    closeTSTK6() {
      this.showTSTK6 = false;
    },
    closeTSTK7() {
      this.showTSTK7 = false;
    },
    closeTSTK8() {
      this.showTSTK8 = false;
    },
    closeTSTK9() {
      this.showTSTK9 = false;
    },
    // 获取表头
    getxlThleft(e) {
      let data2 = JSON.parse(e).data;
      this.tableColumnList = data2.data;
      this.dataList = [];

      this.getDataList();
    },
    // 查询列表方法
    getDataList() {
      // 获取电缆维护左侧信息
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
        this.isAdd_Update = 0;
        this.tk_title = "新增弹框";
      }
    },
    // 修改方法
    updClick() {
      if (this.currentIndex != 1) {
        this.currentIndex = 1;
      } else {
        if (this.selectList1001.oid != undefined || null || "") {
          this.showAdTk = true;
          this.isAdd_Update = 1;
          this.tk_title = "编辑弹框";
          this.sbmc = this.selectList1001.sbmc;
          this.ssxl_value = this.selectList1001.ssxl;
          this.dydj_value = this.selectList1001.dydj;
          this.dlxj = this.selectList1001.dlxj;
        } else {
          // 弹出提示弹框
          this.showTSTK3 = true;
        }
      }
    },
    // 发布方法
    fbClick() {
      if (this.currentIndex != 2) {
        this.currentIndex = 2;
      } else {
        if (this.selectList1001.oid != undefined || null || "") {
          this.showTSTK9 = true;
        } else {
          // 弹出提示弹框
          this.showTSTK8 = true;
        }
      }
    },
    // 发布确认弹框
    TSTK9Click() {
      let v = {
        TwinType: "CableLine",
        ModifyType: "Publish",
        oid: this.selectList1001.oid,
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "fabuSuccess",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.fabuSuccess = this.fabuSuccess;
    },
    fabuSuccess() {
      this.showTSTK9 = false;
      this.getDataList();
    },
    // 删除方法
    deleteClick() {
      if (this.currentIndex != 3) {
        this.currentIndex = 3;
      } else {
        if (this.selectList1001.oid != undefined || null || "") {
          this.showTSTK7 = true;
        } else {
          // 弹出提示弹框
          this.showTSTK6 = true;
        }
      }
    },
    // 删除确认按钮
    TSTK7Click() {
      let v = {
        TwinType: "CableLine",
        ModifyType: "Delete",
        oid: this.selectList1001.oid,
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "scSuccess2",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.scSuccess2 = this.scSuccess2;
    },
    scSuccess2() {
      this.showTSTK7 = false;
      this.getDataList();
    },
    // 解绑方法
    jbClick() {
      if (this.currentIndex != 4) {
        this.currentIndex = 4;
      } else {
        if (this.selectList1001.oid != undefined || null || "") {
          this.showTSTK5 = true;
        } else {
          // 弹出提示弹框
          this.showTSTK4 = true;
        }
      }
    },
    // 解绑确认按钮
    TSTK5Click() {
      let newData = this.selectList1001;
      newData.qdsb = "";
      newData.zdsb = "";
      newData.bdgx = 0;
      let v = {
        TwinType: "CableLine",
        ModifyType: "Update",
        Data: newData,
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "jbSuccess",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.jbSuccess = this.jbSuccess;
    },
    jbSuccess() {
      this.showTSTK5 = false;
      this.getDataList();
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
            bdgx: 0, // 绑定关系  0：未绑定  1:已绑定
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
        let newData = this.selectList1001;
        newData.sbmc = this.sbmc;
        newData.ssxl = this.ssxl_value;
        newData.dydj = this.dydj_value;
        newData.dlxj = this.dlxj;
        let v = {
          TwinType: "CableLine",
          ModifyType: "Update",
          Data: newData,
        };
        let data = {
          functionName: "CustomGeneration",
          backFunctionName: "updateSucess",
          functionParameters: [
            {
              key: "CustomGeneration",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.updateSucess = this.updateSucess;
      }
    },
    // 编辑回调
    updateSucess() {
      this.showAdTk = false;
      this.getDataList();
      let that = this;
      setTimeout(() => {
        that.selectList1001 = "";
      }, 50);
    },
    // 新增回调
    CableLineAdd() {
      this.showAdTk = false;
      this.sbmc = "";
      this.dlxj = "";
      this.getDataList();
      let that = this;
      setTimeout(() => {
        that.selectList1001 = "";
      }, 50);
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
      this.$refs.multipleTable1001.clearSelection();
      if (this.selectList1001 != row) {
        this.selectList1001 = row;
        this.$refs.multipleTable1001.toggleRowSelection(row);
      } else {
        this.selectList1001 = "";
      }
      this.$bus.$emit("isSelectList", this.selectList1001);
    },

    s_Click3(selection, row) {
      this.$refs.multipleTable1001.clearSelection();
      if (selection.length === 0) {
        return;
      }
      if (row) {
        this.selectList1001 = row;
        this.$refs.multipleTable1001.toggleRowSelection(row);
      } else {
        this.selectList1001 = "";
      }
      this.$bus.$emit("isSelectList", this.selectList1001);
    },
  },
};
</script>

<style scoped>
.realLeft {
  width: 379px;
  height: 480px;
  position: absolute;
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
::v-deep .el-table__body-wrapper {
  z-index: 2;
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
::v-deep .e_tablesa ::-webkit-scrollbar {
  width: 1px;
  height: 8px;
  cursor: pointer;
}
::v-deep .e_tablesa ::-webkit-scrollbar-thumb {
  background-color: #4ea8e8 !important;
  border-radius: 10px;
}
::v-deep .e_tablesa ::-webkit-scrollbar-track {
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
.e_tablesa {
  width: 98%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
  margin-left: 1%;
}
.e_tables2a {
  height: 81% !important;
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
.t_block_fabu {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_fb.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_decete {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_decete.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_jiebang {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_jb.png") no-repeat !important;
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

<style scoped>
.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  /* background: rgba(25, 61, 112, 0.8); */
  box-sizing: border-box;
  /* border: 1px solid #3876b6; */
}
.inputs > img {
  position: absolute;
  top: 12px;
  right: 8px;
  width: 14px;
  height: 8px;
  z-index: 1;
}
</style>
<style>
/* 下拉框样式自定义 */
.el-select {
  width: 100% !important;
  height: 100% !important;
}
.inputs .el-select > .el-input > .el-input__inner {
  height: 32px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 32px !important;
  margin-left: 4px;
  color: #ffffff !important;
  z-index: 9;
}
.el-scrollbar__wrap {
  margin: 0 !important;
}
</style>
<style scoped>
.top-scroll {
  width: 100%;
  overflow-x: auto;
}
.top-scroll-content {
  /* 高度不设置的话滚动条出不来 */
  height: 6px;
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
