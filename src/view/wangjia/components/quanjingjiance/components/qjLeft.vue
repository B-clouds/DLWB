<template>
  <div
    class="mxLeft"
    :class="[
      showMB ? 'dengji' : '',
      showMB2 ? 'dengji' : '',
      showMB3 ? 'showMB3' : '',
    ]"
  >
    <div class="cxtj">
      <div class="j_titles">
        <span>查询条件</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>监测对象</span>
        </div>
        <div class="jbRight2">
          <input placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="d_btn">
        <span>查询</span>
      </div>
    </div>

    <div class="block">
      <div class="quanxuan" @click="qxClick">
        <span>全选</span>
        <img v-show="!isQx" src="./img/qx1.png" />
        <img v-show="isQx" src="./img/qx2.png" />
      </div>
      <div class="blockItem">
        <el-tree
          show-checkbox
          :data="datas"
          :props="defaultProps"
          @node-click="handleNodeClick"
          @check-change="handleCheckChange"
          check-on-click-node
          :filter-node-method="filterNode"
          @check="selectTree"
          node-key="oid"
          :key="tree_key"
          :indent="20"
          :default-expanded-keys="defaultExpand"
          :default-checked-keys="defaultExpand"
          ref="treeForm_mxs"
        ></el-tree>
      </div>
    </div>
    <!-- 编辑弹框 -->
    <div class="zhezhao" v-show="showMB">
      <div class="z_tankuang">
        <!-- 关闭按钮 -->
        <div class="z_cha" @click="closeTK"></div>
        <!-- title -->
        <div class="z_title">
          <span>模型资产导航树编辑</span>
        </div>
        <div class="z_input">
          <div class="lefts">
            <span>模型名称</span>
          </div>
          <div class="rights">
            <input
              placeholder="最大输入不超过10个字"
              maxlength="10"
              v-model="updaValue"
            />
          </div>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="updateClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTK">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增弹框 -->
    <div class="zhezhao" v-show="showMB2">
      <div class="z_tankuang z_tankuang2">
        <!-- 关闭按钮 -->
        <div class="z_cha" @click="closeTK2"></div>
        <!-- title -->
        <div class="z_title">
          <span>模型资产新增导航树</span>
        </div>
        <div class="z_blockss">
          <span>是否在当前节点之下增加一个分类?</span>
        </div>
        <div class="z_input">
          <div class="lefts">
            <span>模型名称</span>
          </div>
          <div class="rights">
            <input
              v-model="addValue"
              placeholder="最大输入不超过10个字"
              maxlength="10"
            />
          </div>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="addClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="unAddClicks">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除弹框 -->
    <div class="zhezhao" v-show="showMB3">
      <div class="z_delete">
        <div class="z_d_block">
          <img src="./img/jj.png" />
          <span>是否将当前选中信息进行删除？</span>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="deleteClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="unDeleteClicks">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 模型已调用，不可删除弹框 -->
    <div class="zhezhao" v-show="showMB4">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>该模型已在电网三维网架中调用，无法删除！</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks2">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 模型有子节点，不可删除弹框 -->
    <div class="zhezhao" v-show="showMB5">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>该节点下有其他模型信息，请将下级节点删除后在进行该操作！</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks3">
            <span>确认</span>
          </div>
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
      // 是否显示编辑弹框
      showMB: false,
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
          oid: 1,
          children: [
            {
              label: "1",
              oid: 2,
              children: [
                {
                  label: "2",
                  oid: 3,
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
      isQx: false,
    };
  },
  watch: {
    filterText(val) {
      this.$refs.treeForm_mxs.filter(val);
    },
  },
  mounted() {
    // this.getThree();
  },
  methods: {
    // 全部选中
    qxClick() {
      this.isQx = !this.isQx;
      // 判断按钮的状态
      this.expandAll();
      if (this.isQx) {
        console.log(this.isQx, "-------------------------------", this.datas);
        // 设置
        this.$refs.treeForm_mxs.setCheckedNodes(this.datas);
        for (
          var i = 0;
          i < this.$refs.treeForm_mxs.getCheckedNodes().length;
          i++
        ) {}
      } else {
        this.$refs.treeForm_mxs.setCheckedNodes([]);
      }
    },
    // 全部展开
    expandAll() {
      if (this.isQx) {
        for (var i in this.$refs.treeForm_mxs.store.nodesMap) {
          this.$refs.treeForm_mxs.store.nodesMap[i].expanded = true;
        }
      } else {
        for (var j in this.$refs.treeForm_mxs.store.nodesMap) {
          this.$refs.treeForm_mxs.store.nodesMap[j].expanded = false;
        }
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
    // 关闭编辑弹框
    closeTK() {
      this.showMB = false;
    },
    // 关闭新增弹框
    closeTK2() {
      this.showMB2 = false;
    },
    addClick() {
      if (this.currentIndex != 1) {
        this.currentIndex = 1;
      } else {
        if (this.selectData.id != undefined) {
          // 弹出弹框
          this.showMB2 = true;
        } else {
          this.$notify({
            title: "新增节点",
            message: "请选中一条树节点",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    addClicks() {
      if (this.addValue.length < 1) {
        this.$notify({
          title: "模型名称",
          message: "请输入模型名称",
          offset: 60,
          type: "error",
        });
      } else {
        let data = this.selectData;
        let id = this.newID;
        let value = this.addValue;
        const newChild = {
          id: id++,
          label: value,
          children: [],
        };
        if (!data.children) {
          // this.$set(this.datas, "children", []);
        }
        data.children.push(newChild);
        this.newID = id;
        this.showMB2 = false;
        this.addValue = "";
        this.baocun();
      }
    },
    unAddClicks() {
      this.showMB2 = false;
    },
    updateClick() {
      if (this.currentIndex != 2) {
        this.currentIndex = 2;
      } else {
        let data = this.selectData;
        this.updaValue = data.label;
        this.showMB = true;
      }
    },
    updateClicks() {
      let data = this.selectData;
      let node = this.selectNode;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      let value = this.updaValue;
      children[index].label = value;
      this.showMB = false;
      this.baocun();
    },
    downClick() {
      if (this.currentIndex != 3) {
        this.currentIndex = 3;
      } else {
        let data = this.selectData;
        let node = this.selectNode;
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex((d) => d.id === data.id);
        if (index < children.length - 1) {
          const tempChildrenNodex1 = children[index + 1];
          const tempChildrenNodex2 = children[index];

          this.$set(children, index + 1, tempChildrenNodex2);
          this.$set(children, index, tempChildrenNodex1);
          this.$set(this.datas);
          this.defaultExpand[0] = data.id;
          this.tree_key++;
          this.baocun();
        } else {
          this.$notify({
            title: "下移节点",
            message: "已处于最底部",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    upsClick() {
      if (this.currentIndex != 4) {
        this.currentIndex = 4;
      } else {
        let data = this.selectData;
        let node = this.selectNode;
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex((d) => d.id === data.id);
        if (index > 0) {
          const tempChildrenNodex1 = children[index - 1];
          const tempChildrenNodex2 = children[index];
          this.$set(children, index - 1, tempChildrenNodex2);
          this.$set(children, index, tempChildrenNodex1);
          this.defaultExpand[0] = data.id;
          this.tree_key++;
          this.baocun();
        } else {
          this.$notify({
            title: "上移节点",
            message: "已处于最顶部",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    deleteClick() {
      if (this.currentIndex != 5) {
        this.currentIndex = 5;
      } else {
        if (this.selectData.id != undefined) {
          if (this.selectData.towerType != undefined || null || "") {
            this.showMB4 = true;
          } else if (this.selectData.children.length > 0) {
            this.showMB5 = true;
          } else {
            this.showMB3 = true;
          }
        } else {
          this.$notify({
            title: "删除节点",
            message: "请选中一条树节点",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    deleteClicks() {
      let data = this.selectData;
      let node = this.selectNode;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      this.showMB3 = false;
      this.selectData = {};
      this.selectNode = {};
      this.baocun();
    },
    unDeleteClicks() {
      this.showMB3 = false;
    },
    deleteClicks2() {
      this.showMB4 = false;
    },
    deleteClicks3() {
      this.showMB5 = false;
    },

    // 复选框被选中时
    selectTree(node, list) {
      const node2 = this.$refs.treeForm_mxs.getNode(node.oid);
      this.setNode(node2);
      //   if (list.checkedKeys.length == 2) {
      //     this.$refs.treeForm_mxs.setCheckedKeys([node.oid]);
      //   }
      if (this.selectData.id != node.oid) {
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
      ids.push(node.data.oid);
      if (node.checked) {
        // 展示右侧，并发送消息
        this.$emit("showRight", true);
        showLefts = true;
      } else {
        // 取消展示右侧
        this.$emit("showRight", false);
        showLefts = false;
        //当前是取消选中,将所有子节点都取消选中
        // this.setChildenNode(node);
      }
      this.$emit("getIds", ids);
      this.$emit("getOid", node.data.oid);
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("leftOid", node.data.oid);
      }, 50);
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

        this.$emit("showRight", true);
        let that = this;
        setTimeout(() => {
          // that.$bus.$emit("getTables", e.towerType);
          that.$bus.$emit("getTZlist", e);
        }, 50);
      } else {
        this.$emit("showRight", false);
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      if (checked) {
        let node2 = this.$refs.treeForm_mxs.getNode(data.oid);
        this.setNode(node2);
        // this.$refs.treeForm_mxs.setCheckedKeys([data.oid]);
      }
    },
    // 获取树状图
    getThree() {},
    // 获取树结构内容

    // 将本地树结构发送到ue那边去
    baocun() {},
    BackModifyTableData() {},
  },
};
</script>
<style scoped>
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
