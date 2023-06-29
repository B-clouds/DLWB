<template>
  <div class="mxRight">
    <!-- 绘制点列表-->
    <div class="blocksss">
      <div class="j_titles">
        <span class="span1">绘制点列表</span>
      </div>

      <div class="t_input">
        <!-- <div
          class="t_block"
          @click="g_addClick"
          :class="currentIndex == 0 ? 't_block_add' : ''"
        >
          <img v-show="currentIndex != 0" src="./img/i2.png" />
        </div> -->
        <div
          class="t_block"
          @click="g_updateClick"
          :class="currentIndex == 1 ? 't_block_update' : ''"
        >
          <img v-show="currentIndex != 1" src="./img/i3.png" />
        </div>

        <div
          class="t_block"
          @click="g_deleteClick"
          :class="currentIndex == 2 ? 't_block_decete' : ''"
        >
          <img v-show="currentIndex != 2" src="./img/i6.png" />
        </div>
      </div>
      <el-table
        ref="mug22"
        :data="dataList"
        tooltip-effect="dark"
        class="e_tables e_tables2"
        highlight-current-row
        height="240"
        :row-style="{ height: '36px' }"
        :cell-style="{ padding: 0 }"
        @cell-click="gClick"
        @select="s_Click"
        :row-class-name="tableRowClassName"
      >
        <el-table-column align="center" type="selection" width="36">
        </el-table-column>
        <el-table-column
          align="center"
          :label="item.propName"
          :property="item.prop"
          v-for="item in tableColumnLists"
          :key="item.prop"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span>{{ scope.row[scope.column.property] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 关键信息-新增/编辑弹框 -->
    <div class="zhezhao" v-show="gjtkShow">
      <div class="gj_tk">
        <div class="tklj"></div>
        <div class="z_cha" @click="closeGjTk"></div>
        <!-- title -->
        <div class="tk_title">
          <span>{{ gj_title }}</span>
        </div>
        <div class="tk_blocks">
          <span>编号</span>
          <div class="rights">
            <div class="r1">
              <span>{{ mxbh }}</span>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>备注</span>
          <div class="rights">
            <div class="r2">
              <input
                placeholder="最大输入不超过10个字"
                maxlength="10"
                v-model="mxmc"
              />
            </div>
          </div>
        </div>

        <div class="z_btn">
          <div class="z_blocks" @click="addUpdataClick">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeGjTk">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 关键信息-删除弹框 -->
    <div class="zhezhao" v-show="gjscShow">
      <div class="z_delete">
        <div class="z_d_block">
          <img src="./img/jj.png" />
          <span>是否将当前选中信息进行删除？</span>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="gjscClick">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="gjscClose">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mxRight",
  data() {
    return {
      colors: "",
      // 存储towerType
      towerType: "",
      // 关键信息
      storageNum: "", //存储最后一位模型编号
      isAdd_Update: 0, //是新增还是编辑  0：新增 1：编辑
      dataList: [],
      tableColumnLists: [
        { prop: "index", propName: "绘制点编号" },
        { prop: "Desc", propName: "备注" },
      ],
      currentIndex: -1,
      gjtkShow: false, //是否显示关键信息新增/编辑弹框
      gj_title: "",
      mxbh: "", //模型编号
      mxmc: "", //模型名称
      pjmc: "", //配件名称
      gjscShow: false, //是否显示删除确认弹框
      featureInfoList: [],
      selectList: "", //存储关键信息选中的值
      leftOid: "", //左侧oid
    };
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {
    let that = this;
    that.$bus.$on("getTZlist", (e) => {
      // that.dataList2 = e.featureInfoList;
      that.towerType = e.towerType;
      that.getTableDetil();
      that.getTZXX();
      that.getSPTX();
    });
    that.$bus.$on("rightCx", (e) => {
      that.dataList = e;
      console.log("0--------------0", that.dataList);
    });
    that.$bus.$on("clearList", (e) => {
      that.dataList = [];
    });
    that.$bus.$on("leftOid", (e) => {
      that.leftOid = e;
      console.log(e, "-----------", "斤斤计较");
    });
  },
  methods: {
    closeGjTk() {
      this.gjtkShow = false;
      this.mxmc = "";
      this.pjmc = "";
    },
    g_addClick() {
      if (this.currentIndex != 0) {
        this.currentIndex = 0;
      } else {
        this.gj_title = "关键模型新增信息";
        this.gjtkShow = true;
        this.isAdd_Update = 0;
        let bh = "";
        // this.storageNum
        let newNum = parseInt(this.storageNum + 1) + "";
        if (newNum.length == 1) {
          bh = "0000" + newNum;
        } else if (newNum.length == 2) {
          bh = "000" + newNum;
        } else if (newNum.length == 3) {
          bh = "00" + newNum;
        } else if (newNum.length == 4) {
          bh = "0" + newNum;
        } else if (newNum.length == 5) {
          bh = newNum;
        }
        this.mxbh = bh;
      }
    },
    g_updateClick() {
      if (this.currentIndex != 1) {
        this.currentIndex = 1;
      } else {
        if (this.selectList.index != undefined || null || "") {
          this.gj_title = "绘制点列表信息编辑";
          this.isAdd_Update = 1;
          this.gjtkShow = true;
          this.mxbh = this.selectList.index;
          this.mxmc = this.selectList.Desc;
        } else {
          this.$notify({
            title: "编辑节点",
            message: "请选中一条绘制点列表信息",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    // 新增/编辑弹框确认按钮
    addUpdataClick() {
      if (this.isAdd_Update == 0) {
        // 新增
        let v = {
          ModelType: "BoomTowerType",
          SelectNum: this.mxbh,
          DataValue: {
            Str_Num: this.mxbh,
            Str_Name: this.mxmc,
            Str_PointMountings: this.pjmc,
          },
        };

        let data = {
          functionName: "ModifyBoomInfo",
          backFunctionName: "gjAdd",
          functionParameters: [
            {
              key: "Add",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.gjAdd = this.gjAdd;
      } else {
        // 编辑

        let v = {
          Type: "EditPolygonPoint",
          Index: this.mxbh,
          Desc: this.mxmc,
          oid: this.leftOid,
        };
        let data = {
          functionName: "GridNavigationTree",
          backFunctionName: "gjUpdate",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.gjUpdate = this.gjUpdate;
      }
    },
    // 关键信息新增回调
    gjAdd() {
      this.gjtkShow = false;
      this.getTableDetil();
    },
    // 关键信息编辑回调
    gjUpdate() {
      this.gjtkShow = false;
      this.getTableDetil();
    },
    g_deleteClick() {
      if (this.currentIndex != 2) {
        this.currentIndex = 2;
      } else {
        if (this.selectList.index != undefined || null || "") {
          this.gjscShow = true;
        } else {
          this.$notify({
            title: "删除节点",
            message: "请选中一条绘制点信息",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    // 删除关键信息确认框
    gjscClick() {
      let v = {
        ModelType: "BoomTowerType",
        SelectNum: this.selectList.index,
      };

      let data = {
        functionName: "ModifyBoomInfo",
        backFunctionName: "gjDelect",
        functionParameters: [
          {
            key: "Delete",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.gjDelect = this.gjDelect;
    },
    // 删除成功回调函数
    gjDelect() {
      this.gjscShow = false;
      this.getTableDetil();
    },
    // 关闭关键信息弹框
    gjscClose() {
      this.gjscShow = false;
    },

    closeTzTk() {
      this.tztkShow = false;
      this.tzbh = "";
      this.tzmc = "";
      this.tzz = "";
      this.yxj = "";
    },

    // 隔行变色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
        return "warning-row";
      }
      return "";
    },
    title_click(e) {
      if (e == 0) {
        this.showSp = false;
        this.showTz = true;
        this.getTZXX();
      } else {
        this.showTz = false;
        this.showSp = true;
        this.getSPTX();
      }
    },
    s_Click(selection, row) {
      this.$refs.mug22.clearSelection();
      if (selection.length === 0) {
        let vs = {
          Type: "HighLightPolygonPoint",
          oid: this.leftOid,
          Index: row.index,
          Value: "false",
        };
        let datas = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas));

        let vs2 = {
          Type: "SelectPolygonPoint",
          oid: this.leftOid,
          Index: row.index,
          MoveType: "false",
        };
        let datas2 = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs2),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas2));

        return;
      }
      if (row) {
        this.selectList = row;
        this.$refs.mug22.toggleRowSelection(row);

        let vs = {
          Type: "HighLightPolygonPoint",
          Index: row.index,
          oid: this.leftOid,
          Value: "true",
        };
        let datas = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas));

        let vs2 = {
          Type: "SelectPolygonPoint",
          oid: this.leftOid,
          Index: row.index,
          MoveType: "true",
        };
        let datas2 = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs2),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas2));
      }
    },
    gClick(row) {
      this.$refs.mug22.clearSelection();
      if (this.selectList != row) {
        this.selectList = row;
        this.$refs.mug22.toggleRowSelection(row);
        let vs = {
          Type: "HighLightPolygonPoint",
          Index: row.index,
          oid: this.leftOid,
          Value: "true",
        };
        let datas = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas));
        let vs2 = {
          Type: "SelectPolygonPoint",
          oid: this.leftOid,
          Index: row.index,
          MoveType: "true",
        };
        let datas2 = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs2),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas2));
      } else {
        this.selectList = "";
        let vs = {
          Type: "HighLightPolygonPoint",
          Index: row.index,
          oid: this.leftOid,
          Value: "false",
        };
        let datas = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas));
        let vs2 = {
          Type: "SelectPolygonPoint",
          oid: this.leftOid,
          Index: row.index,
          MoveType: "false",
        };
        let datas2 = {
          functionName: "GridNavigationTree",
          functionParameters: [
            {
              key: "GridNavigationTree",
              value: JSON.stringify(vs2),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas2));
      }
    },
    sptxSelect(e) {},
    getTableDetil() {
      let data = {
        functionName: "ModelQuery",
        backFunctionName: "getTableDetils",
        functionParameters: [
          {
            key: "ModelType",
            value: "Tower",
          },
          {
            key: "ModelID",
            value: this.towerType,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getTableDetils = this.getTableDetils;
    },
    getTableDetils(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      let newData = data2.dataList;
      this.dataList = newData;
      if (newData.length > 0) {
        // 获取最后一位Str_Num，并存储
        let index = newData.length - 1;
        this.storageNum = parseInt(newData[index].Str_Num);
      } else {
        this.storageNum = 0;
      }
    },
    // 排序方法
    compare(key) {
      return function(value1, value2) {
        var val1 = value1[key];
        var val2 = value2[key];
        return val1 - val2;
      };
    },
    sp_typeClick() {
      if (this.shouXiala == 0) {
        this.shouXiala = 1;
      } else {
        this.shouXiala = 0;
      }
    },
    xlIndexClick(e) {
      if (e == 0) {
        this.xialaIndex = 0;
        this.xiaLaSpan = "常亮";
      } else {
        this.xialaIndex = 1;
        this.xiaLaSpan = "渐变";
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
  background: url("img/wxz.png") !important;
  background-size: 100% 100% !important;

  border: none !important;
  border-radius: none !important;
  width: 22px;
  height: 22px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: url("img/xz.png") !important;
  background-size: 100% 100% !important;
  width: 22px;
  height: 22px;
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

.blocksss > .el-table__header tr,
.el-table__header th {
  height: 39.8px !important;
  /* background: rgba(25, 61, 112, 0.5) !important; */
  background: transparent !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
}
.el-table__body tr,
.el-table__body td {
  height: 30px;
  font-family: SourceHanSansSC-Regular;
  font-size: 12px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
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
.mxRight {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  right: 10px;
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
.span1 {
  color: red;
}
.w_title {
  width: 100%;
  height: 47.3px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
.blocksss {
  width: 100%;
  height: 322px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
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
.j_titles > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 18px;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
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
  background: url("img/tbgs.png") no-repeat;
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
.wbb {
  width: 100%;
  height: 606px;
  overflow-y: scroll;
  background: url("img/bg3.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.wbb::-webkit-scrollbar {
  display: none;
}
.w_block {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  margin-top: 11px;
}
.w_block > .block {
  width: 421.44px;
  height: 100%;
  background: url("img/wbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.w_block > .block > .left {
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 2px;
}

.dd {
  width: 10px;
  height: 100%;
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
.t_block_down {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_down.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_ups {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_ups.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_decete {
  width: 84px !important;
  height: 32px !important;
  background: url("img/t_block_decete.png") no-repeat !important;
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
  z-index: 99999999 !important;
  background: rgba(1, 11, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.gj_tk {
  width: 348px;
  height: 224px;
  background: url("img/gjtk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.gj_tk2 {
  width: 347.59px;
  height: 301.56px;
  background: url("img/gjtk2.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.sp_tk {
  width: 348px;
  height: 352px;
  position: relative;
  background: url("img/sp_tk.png") no-repeat;
  background-size: 100% 100%;
}
.sp_tk2 {
  height: 436px;
}
.tklj {
  width: 162px;
  height: 27px;
  position: absolute;
  left: 7px;
  top: 24px;
  background: url("img/tklj.png") no-repeat;
  background-size: 100% 100%;
  z-index: 0;
}
.sp_span {
  width: 100%;
  height: 32px;
  margin-top: 12px;
  display: flex;
}
.sp_span > .sp_left {
  width: 78px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
}
.sp_span > .sp_left > span {
  font-family: Alibaba PuHuiTi 2;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.sp_span > .sp_right1 {
  width: 216px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  background: url("img/sp_right.png") no-repeat;
  background-size: 100% 100%;
}
.sp_span > .sp_right1 > span {
  font-family: Alibaba PuHuiTi 2;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  margin-left: 9px;

  color: #ffffff;
}
.sp_span > .sp_right2 {
  width: 216px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  background: url("img/sp_right2.png") no-repeat;
  background-size: 100% 100%;
}
.sp_span > .sp_right2 > span {
  font-family: Alibaba PuHuiTi 2;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  margin-left: 9px;
  color: #ffffff;
}
.sp_xia {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: 4px;
  background: url("img/xiala.png") no-repeat;
  background-size: 100% 100%;
}
.sp_shou {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: 4px;
  background: url("img/shou.png") no-repeat;
  background-size: 100% 100%;
}
.sp_sx {
  width: 216px;
  height: 72px;
  position: absolute;
  left: 0px;
  bottom: -75px;
  background: url("img/xlbj.png") no-repeat;
  background-size: 100% 100%;
  z-index: 888888;
}
.sp_sx_item {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}
.sp_sx_item > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 9px;
}
.sp_sx_item2 {
  background: url("img/xat1.png") no-repeat;
  background-size: 100% 100%;
}
.sp_sx_item2 > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 9px;
}
.sp_input {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 23.3%;
  top: 16px;
}
.sp_input2 {
  position: absolute;
  width: 61%;
  height: 100%;
  left: 23.3%;
  top: 0;
  z-index: 999;
}
.sp_btn {
  width: 172px;
  height: 33px;
  position: absolute;
  right: 16px;
  bottom: 18px;
  display: flex;
  justify-content: space-between;
}
.sp_btn > .sp_bitem {
  width: 81px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/sp_bi.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.sp_btn > .sp_bitem > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.sp_ys {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
}
.sp_ys > .sp_i1 {
  width: 12px;
  height: 12px;
  background: url("img/sp_i1.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 94px;
  margin-right: 5px;
}
.sp_ys > .sp_i2 {
  width: 14px;
  height: 14px;
  background: url("img/sp_i2.png") no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
.sp_ys > .sp_i3 {
  width: 180px;
  height: 8px;
  background: url("img/sp_i3.png") no-repeat;
  background-size: 100% 100%;
  margin-left: -14px;
  margin-right: 7px;
  z-index: 1;
}
.sp_ys > .sp_i4 {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  opacity: 1;
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
.yxj {
  width: 110%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 88;
}
.yxjBlock {
  width: 216px;
  height: 180px;
  position: absolute;
  top: 32px;
  left: 0;
  background: linear-gradient(180deg, #012f3d 0%, rgba(0, 37, 47, 0.8) 100%);
  z-index: 88;
  overflow: scroll;
}
.yxjBlock::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.yxjBlock > .blockItem {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.yxjBlock > .blockItem > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 20px;
}
.xia {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 192px;
  top: 6px;
  background: url("img/xia.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tk_blocks > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
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
  z-index: 0;
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
</style>
<style scoped>
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
