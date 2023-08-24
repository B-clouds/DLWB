<template>
  <div class="mxLeft">
    <div class="cxtj">
      <div class="j_titles">
        <span>路径名称</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>路径名称</span>
        </div>
        <div class="jbRight">
          <!-- <input v-model="name" placeholder="最大输入不超过10个字" /> -->
          <span>{{ names }}</span>
        </div>
      </div>
      <div class="d_btn" @click="fanhuiClick">
        <span>返回</span>
      </div>
    </div>
    <div class="cxtj jdmx">
      <div class="j_titles">
        <span>节点明细</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">编号</span>
        </div>
        <div class="blocks">
          <span class="span1">经度</span>
        </div>
        <div class="blocks">
          <span class="span1">纬度</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in dataList3"
          @dblclick="jujiao(item)"
          :key="index"
        >
          <div class="blocks">
            <span class="span2">{{ index + 1 }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.x }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.y }}</span>
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbBtn" @click="bangdingClick">
          <span>保存</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mxLeft",
  data() {
    return {
      dataList3: [],
      selectList1002: [],
      featureInfoList: [],
      names: "",
      ids: "",
    };
  },
  props: ["name"],
  watch: {
    name(e, f) {
      console.log(e);
      this.names = e.name;
      this.ids = e.id;
      this.getDataList();
    },
  },

  mounted() {
    // this.getThree();
  },
  methods: {
    jujiao(e) {
      let v = {
        Option: "SelectVertex",
        Value: e.id,
      };
      let data = {
        functionName: "PathManagment",
        functionParameters: [
          {
            key: "PathManagment",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    getDataList() {
      this.$axios
        .get(window.wgApiUrl + "/graphic/pathDetail", {
          params: {
            id: this.ids,
          },
        })
        .then((res) => {
          this.dataList3 = res.data.data.vertex;
        })
        .catch((error) => {});
    },
    fanhuiClick() {
      let v2 = {
        Option: "SelectVertex",
        Value: false,
      };
      let data2 = {
        functionName: "PathManagment",
        functionParameters: [
          {
            key: "PathManagment",
            value: JSON.stringify(v2),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let v = {
        Option: "Init",
        Value: "True",
      };
      let data = {
        functionName: "PathManagment",
        functionParameters: [
          {
            key: "PathManagment",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      this.$emit("fanhui");
    },

    bangdingClick() {
      this.$emit("bianji", this.selectList1002.bianma);

      let that = this;
      setTimeout(() => {
        let v3 = {
          Option: "SelectVertex",
          Value: false,
        };
        let data3 = {
          functionName: "PathManagment",
          functionParameters: [
            {
              key: "PathManagment",
              value: JSON.stringify(v3),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data3));
        setTimeout(() => {
          let v = {
            Option: "SaveChanges",
          };
          let data = {
            functionName: "PathManagment",
            functionParameters: [
              {
                key: "PathManagment",
                value: JSON.stringify(v),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
          setTimeout(() => {
            let v2 = {
              Option: "QuerySinglePath",
              Value: this.ids,
            };
            let data2 = {
              functionName: "PathManagment",
              functionParameters: [
                {
                  key: "PathManagment",
                  value: JSON.stringify(v2),
                },
              ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data2));
          }, 100);
        }, 100);
      }, 100);
    },
    gClick3(row) {
      this.$refs.multipleTable3.clearSelection();
      if (this.selectList1002 != row) {
        this.selectList1002 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
        let v = {
          twinType: "HSInterval",
          chooseType: "Select",
          selectType: "true",
          oid: this.cfOid,
          selectNum: this.selectList1002.Str_Num,
        };
        let data = {
          functionName: "IntervalFunc",
          backFunctionName: "getJWD",
          functionParameters: [
            {
              key: "IntervalFunc",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.getJWD = this.getJWD;
      } else {
        this.selectList1002 = "";
        let v = {
          twinType: "HSInterval",
          chooseType: "Select",
          selectType: "false",
          oid: this.cfOid,
          selectNum: this.selectList1002.Str_Num,
        };
        let data = {
          functionName: "IntervalFunc",
          functionParameters: [
            {
              key: "IntervalFunc",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },

    s_Click3(selection, row) {
      this.$refs.multipleTable3.clearSelection();
      if (selection.length === 0) {
        return;
      }
      if (row) {
        this.selectList1002 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
      } else {
      }
    },
  },
};
</script>

<style scoped>
.mxLeft {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  left: 10px;
}
.dengji {
  z-index: 100;
}
</style>
<style scoped>
.w_title {
  width: 371px;
  height: 43px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 11px;
}
.w_title > span {
  margin-left: 38.33px;
  font-family: YouSheBiaoTiHei;
  font-size: 25px;
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
.cxtj {
  width: 100%;
  height: 156px;
  margin-bottom: 14px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.jdmx {
  height: 500px !important;
}
.block {
  width: 100%;
  height: 780px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}

.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.t_input {
  position: absolute;
  left: 8px;
  top: 50px;
  width: 370px;
  height: 32px;
  display: flex;
  z-index: 999;
}
.t_input > .t_block {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  background: url("img/tbgss.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.t_block_cha {
  width: 126px !important;
  position: relative;
  background: url("img/tbg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_cha > img {
  position: absolute;
  top: 8px;
  right: 8px;
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
.quanxuan {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
}
.quanxuan > img {
  width: 16px;
  height: 16px;
  margin-right: 18px;
  margin-left: 6px;
  margin-top: 12px;
}
.quanxuan > span {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #b5b5b5;
  margin-top: 16px;
}

.blockItem {
  width: 360px;
  height: 100%;
  border-radius: 2px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 8px;
}
.blockItem::-webkit-scrollbar {
  display: none;
}
</style>
<style>
.el-tree-node__content > label.el-checkbox {
  position: absolute !important;
  right: 8px !important;
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
.imgs {
  margin-top: -20px;
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

<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 18px;
  position: relative;
}
.jbBlock > .jbBtn {
  width: 81px;
  height: 33px;
  position: absolute;
  top: 1px;
  right: 22px;
  background: url("img/btns.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.jbBlock > .jbBtn > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.jbBlock > .jbLeft {
  width: 86px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
  margin-right: 12px;
}
.jbBlock > .jbRight {
  width: 284px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
}
.jbBlock > .jbRight2 {
  width: 273px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  background: rgba(25, 61, 112, 0.8);
  box-sizing: border-box;
  border: 1px solid #3876b6;
}
.inputs > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
}
</style>

<style scoped>
.d_btn {
  width: 105px;
  height: 30px;
  position: absolute;
  right: 19px;
  bottom: 20px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.d_btn > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
.d_btn:hover {
  background: url("img/d_btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.d_btn:hover > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
</style>

<style scoped>
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #bee4ee;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 346px;
  overflow-y: scroll;
}
.j_t_table::-webkit-scrollbar {
  display: none;
}
.j_t_bg {
  background: url("img/gblock.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_two {
  width: 100%;
  height: 262px;
}
.jr_three {
  width: 100%;
  height: 218px;
}
</style>
<style scoped>
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
.e_tabless2 ::-webkit-scrollbar {
  width: 1px !important;
  height: 1px !important;
}
/* // 滚动条的滑块 */
/* .e_tabless2 ::-webkit-scrollbar-thumb {
  background-color: #a1a3a9 !important;
  border-radius: 0px !important;
} */

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
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
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
  height: 68% !important;
  margin-bottom: 10px;
}
.e_tabless2::-webkit-scrollbar {
  display: none;
}
</style>
