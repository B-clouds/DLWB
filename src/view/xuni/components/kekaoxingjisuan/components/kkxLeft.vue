<template>
  <div
    class="fhLeft"
    :class="[
      showMB ? 'dengji' : '',
      showMB2 ? 'dengji' : '',
      showMB3 ? 'showMB3' : '',
    ]"
  >
    <!-- title -->
    <!-- <div class="w_title"> 
      <span>模型资产导航树</span>
    </div> -->
    <div class="j_titles">
      <span>网格架构树</span>
    </div>
    <div class="j_ss">
      <input class="ddd" placeholder="搜索" />
    </div>
    <div class="block">
      <div class="blockItem">
        <el-tree
          show-checkbox
          :props="defaultProps"
          @node-click="handleNodeClick"
          @check-change="handleCheckChange"
          :check-strictly="true"
          check-on-click-node
          :filter-node-method="filterNode"
          @check="selectTree"
          node-key="id"
          lazy
          :load="loadNode"
          :key="tree_key"
          :accordion="true"
          :indent="20"
          :default-expanded-keys="defaultExpand"
          :default-checked-keys="defaultExpand"
          ref="treeForm_mx"
        ></el-tree>
      </div>
    </div>
    <!-- <div class="qr" v-show="showQr" @click="okClick"></div> -->
  </div>
</template>

<script>
export default {
  name: "fhLeft",
  data() {
    return {
      // 是否显示编辑弹框
      showMB: false,
      showQr: false, //是否显示确认按钮
      updaValue: "",
      // 是否显示新增弹框
      showMB2: false,
      addValue: "",
      // 是否显示删除弹框
      showMB3: false,
      // 模型已调用，不可删除弹框
      showMB4: false,
      //   该模型有子节点，不可删除
      showMB5: false,
      currentIndex: -1,
      filterText: "",
      datas: [
        {
          label: "站房",
          id: 1,
          children: [
            {
              label: "1",
              id: 2,
              children: [
                {
                  label: "2",
                  id: 3,
                },
              ],
            },
          ],
        },
      ],
      newID: 371,
      defaultProps: {
        children: "children",
        label: "label",
      },
      // 用于存放选中的树结构点
      selectData: {},
      selectNode: {},
      tree_key: 0,

      defaultExpand: [],
      show: true,
    };
  },
  watch: {
    filterText(val) {
      this.$refs.treeForm_mx.filter(val);
    },
  },
  mounted() {
    // this.getThree();
  },
  methods: {
    loadNode(node, resolve) {
      // console.log("window.wanggeUrl", window.wanggeUrl);
      if (node.level === 0) {
        this.$axios
          .get(window.wgApiUrl + "/synthesize/synthesizeTree", {
            params: {
              id: 0,
              name: "",
              type: "1",
            },
          })
          .then((res) => {
            console.log("res", res);
            let newData = res.data.data.map((item) => {
              return Object.assign(
                {},
                {
                  id: item.id,
                  label: item.mc,
                  pid: item.pid,
                }
              );
            });
            return resolve(newData);
          })
          .catch((error) => {});
      }
      if (node.level >= 1) {
        this.$axios
          .get(window.wanggeUrl, {
            params: {
              id: node.data.id,
              name: "",
              type: "1",
            },
          })
          .then((res) => {
            if (res.data.data == null || undefined || "") {
              return resolve([]);
            } else {
              let newData = res.data.data.map((item) => {
                return Object.assign(
                  {},
                  {
                    id: item.id,
                    label: item.mc,
                    pid: item.pid,
                  }
                );
              });
              return resolve(newData);
            }
          })
          .catch((error) => {});
      } else {
        return resolve([]);
      }
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 查询按钮
    chaxunClick() {
      this.currentIndex = 0;

      this.$nextTick(() => {
        this.$refs.inputsss.focus();
      });
    },
    // 失去焦点
    shiquIndex() {
      this.currentIndex = -1;
      this.filterText = "";
    },

    // 复选框被选中时
    selectTree(node, list) {
      const node2 = this.$refs.treeForm_mx.getNode(node.id);
      this.setNode(node2);
      if (list.checkedKeys.length == 2) {
        this.$refs.treeForm_mx.setCheckedKeys([node.id]);
      }
      if (this.selectData.id != node.id) {
        this.selectData = node;
        this.selectNode = node2;
      } else {
        this.selectData = {};
        this.selectNode = {};
      }
    },
    setNode(node) {
      let ids = [];
      let showLefts = false;
      ids.push(node.data.id);
      if (node.checked) {
        // 展示右侧，并发送消息
        this.$emit("showRight", true);
        showLefts = true;
        this.showQr = true;
      } else {
        // 取消展示右侧
        this.$emit("showRight", false);
        this.showQr = false;

        showLefts = false;
        //当前是取消选中,将所有子节点都取消选中
        this.setChildenNode(node);
      }
      this.$emit("getIds", ids);
      this.$emit("getOid", node.data.id);
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("leftOid", node.data.id);
      }, 50);
    },
    backVertices(e) {
      let data = JSON.parse(e).value;
      this.$bus.$emit("rightCx", data);
    },

    setParentNode(node) {
      if (node.parent) {
        for (const key in node) {
          if (key === "parent") {
            node[key].checked = true;
            this.setParentNode(node[key]);
          }
        }
      }
    },
    setChildenNode(node) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        node.childNodes[i].checked = false;
        this.setChildenNode(node.childNodes[i]);
      }
    },

    handleNodeClick(e) {
      this.$emit("chongzhi");
      if (e.ShowKSH !== undefined) {
        this.$emit("showKSH", true);
      } else {
        this.$emit("showKSH", false);
      }
      if (e.towerType !== undefined) {
        let obj = e.towerType;
        // let data = {
        //   functionName: "ModelManage",
        //   backFunctionName: "",
        //   functionParameters: [
        //     {
        //       key: "ModelID",
        //       value: obj,
        //     },
        //   ],
        // };
        // ue.interface.broadcast("PSAPI", JSON.stringify(data));
        this.$emit("showRight", true);
        let that = this;
        setTimeout(() => {
          // that.$bus.$emit("getTables", e.towerType);
          that.$bus.$emit("getTZlist", e);
        }, 50);
      } else {
        // let data = {
        //   functionName: "ModelManage",
        //   backFunctionName: "",
        //   functionParameters: [
        //     {
        //       key: "ModelID",
        //       value: "",
        //     },
        //   ],
        // };
        // ue.interface.broadcast("PSAPI", JSON.stringify(data));
        this.$emit("showRight", false);
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      if (checked) {
        let node2 = this.$refs.treeForm_mx.getNode(data.id);
        this.setNode(node2);
        this.$refs.treeForm_mx.setCheckedKeys([data.id]);
      }
    },
    // 获取树状图
    getThree() {
      let data = {
        functionName: "InitPage",
        backFunctionName: "getThrees",
        functionParameters: [
          {
            key: "PageID",
            value: "ModelManagePage",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getThrees = this.getThrees;
    },
    // 获取树结构内容
    getThrees(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      this.datas = data2.obj;
      this.newID = data2.newID;
    },
    // 将本地树结构发送到ue那边去
    baocun() {
      let props = {
        obj: this.datas,
        newID: this.newID,
      };
      let v = { ModifyType: "Save", DataValue: JSON.stringify(props) };
      let data = {
        functionName: "ModifyModelManagement",
        backFunctionName: "BackModifyTableData",
        functionParameters: [
          {
            key: "ModifyModelManagement",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackModifyTableData = this.BackModifyTableData;
    },
    BackModifyTableData() {},
    // 确认
    okClick() {
      this.$bus.$emit("initSubpage", true);
    },
  },
};
</script>
<style scoped>
.ddd::placeholder {
  color: #cacaca;
  text-align: center;
}
.blockItem >>> .el-tree {
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  font-family: SourceHanSansSC-Medium;
}

.blockItem >>> .el-tree-node__content:hover,
.blockItem >>> .el-upload-list__item:hover {
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
}
.blockItem >>> .el-tree-node:focus > .el-tree-node__content {
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
}
.blockItem >>> .el-tree-node__content {
  height: 40px;
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 2px !important;
}
.blockItem >>> .el-tree-node__children > .el-tree-node {
  font-size: 14px;
  color: #fff;
}

/* .el-tree-node__children > .is-current {
  font-weight: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #1effff;
} */

.blockItem >>> .is-expanded .el-tree-node__content {
  /* height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%; */
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  /* color: #ffffff; */
}
/* .is-current > .el-tree-node__content {
  height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%;
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #1effff;
} */
.blockItem >>> .el-checkbox__inner {
  background: url("img/wxz.png") !important;
  background-size: 100% 100% !important;

  border: none !important;
  border-radius: none !important;
  width: 26px;
  height: 26px;
}
.blockItem >>> .el-checkbox__input.is-checked .el-checkbox__inner,
.blockItem >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: url("img/xz.png") !important;
  background-size: 100% 100% !important;
  width: 26px;
  height: 26px;
}
.blockItem >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  /* background: url("img/wxzs.png") !important; */
  /* background-size: 100% 100% !important; */
  width: 26px;
  height: 26px;
}
.blockItem
  >>> .el-checkbox__input.is-indeterminate
  .el-checkbox__inner::before {
  display: none;
}
.blockItem >>> .el-checkbox__inner::after {
  display: none !important;
}
</style>
<style scoped>
.fhLeft {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  left: 10px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
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
.block {
  width: 100%;
  height: 818px;
  display: flex;
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

.j_ss {
  width: 366px;
  height: 32px;
  margin: 11px 7px 11px 5px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
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

.chaxun > .icons {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8.5px;
  right: 8.5px;
  background: url("img/c1.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.blockItem {
  width: 360px;
  height: 755px;
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
.qr {
  position: absolute;
  bottom: 24px;
  left: 120px;
  width: 105px;
  height: 30px;
  background: url(img/ok.png) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
