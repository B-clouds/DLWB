<template>
  <div class="mxLeft">
    <!-- title -->
    <div class="w_title">
      <span>模型资产库</span>
    </div>
    <div class="block">
      <div class="blockItem">
        <el-tree
          :data="datas"
          :props="defaultProps"
          @node-click="handleNodeClick"
          :accordion="true"
          :indent="10"
        ></el-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gLeft",
  data() {
    return {
      datas: [
        {
          label: "河北省电力公司",
          children: [
            {
              label: "雄安新区电力公司",
              children: [
                {
                  label: "安新县电力公司",
                  children: [
                    {
                      label: "供电分区",
                      children: [
                        {
                          label: "供电网格",
                          children: [
                            {
                              label: "供电单元",
                              towerType: "ZF_01",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "容城县电力公司",
                  children: [
                    {
                      label: "供电分区",
                      towerType: "ZF_01",
                    },
                  ],
                },
                {
                  label: "雄县电力公司",
                  children: [
                    {
                      label: "供电分区",
                      towerType: "ZF_01",
                    },
                  ],
                },
              ],
            },
            {
              label: "石家庄电力公司",
              children: [
                {
                  label: "正定县电力公司",
                  children: [
                    {
                      label: "供电分区",
                      towerType: "ZF_01",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {
    // this.getThree();
  },
  methods: {
    handleNodeClick(e) {
      if (e.towerType !== undefined) {
        let obj = e.towerType;
        let data = {
          functionName: "ModelManage",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModelID",
              value: obj,
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        this.$emit("showRight2", true);
        let that = this;
        setTimeout(() => {
          that.$bus.$emit("getTables", e.towerType);
        }, 50);
      } else {
        this.$emit("showRight2", false);
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
    getThrees(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);

      this.datas = data2.obj;
    },
  },
};
</script>
<style>
.el-tree {
  background-color: transparent;
  color: #b5b5b5;
  font-size: 18px;
  font-family: SourceHanSansSC-Medium;
}

.el-tree-node__content:hover,
.el-upload-list__item:hover {
  background: transparent;
}
.el-tree-node:focus > .el-tree-node__content {
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%;
}
.el-tree-node__content {
  height: 40px;
}
.el-tree-node__children > .el-tree-node {
  font-size: 14px;
  color: #b5b5b5;
}

.el-tree-node__children > .is-current {
  font-weight: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #1effff;
}

.is-expanded .el-tree-node__content {
  /* height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%; */
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  /* color: #ffffff; */
}
.is-current > .el-tree-node__content {
  height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%;
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #1effff;
}

/* .is-current > .el-tree-node__content > .el-tree-node__expand-icon {
  color: #ffffff;
} */
/* .is-current > .el-tree-node__content {
  height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%;
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
}
.el-tree-node__expand-icon {
  color: #b5b5b5;
}
.is-current > .el-tree-node__content > .el-tree-node__expand-icon {
  color: #ffffff;
} */
</style>
<style scoped>
.mxLeft {
  width: 314px;
  height: 954px;
  position: fixed;
  top: 73px;
  left: 20px;
}
</style>
<style scoped>
.w_title {
  width: 312px;
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
.block {
  width: 306px;
  height: 897px;
  border-radius: 4px;
  margin-left: 8px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
}
.blockItem {
  width: 290px;
  height: 875px;
  border-radius: 2px;
  margin-left: 8px;
  margin-top: 11px;
}
</style>
