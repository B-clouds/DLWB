<template>
  <div class="bottom">
    <div class="left1">
      <div
        class="blocks"
        :class="navIndex == 0 ? 'blocksa' : ''"
        @click="navClick(0)"
      >
        <span>首页</span>
      </div>
      <div
        class="blocks"
        :class="navIndex == 1 ? 'blocksa' : ''"
        @click="navClick(1)"
      >
        <!-- <span>电网孪生</span> -->
        <el-cascader
          v-model="value"
          :options="options"
          ref="cascader"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
          placeholder="电网孪生"
          popper-class="g_xiala"
          :show-all-levels="false"
        ></el-cascader>
      </div>
      <div
        class="blocks"
        @click="navClick(2)"
        :class="navIndex == 2 ? 'blocksa' : ''"
      >
        <!-- <span>网架分析</span> -->
        <el-cascader
          v-model="value2"
          :options="options2"
          ref="cascader2"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange2"
          placeholder="电网分析"
          popper-class="g_xiala"
          :show-all-levels="false"
        ></el-cascader>
      </div>
    </div>

    <div class="bgg"></div>
    <div class="left1">
      <div
        class="blcoks2"
        @click="navClick(3)"
        :class="navIndex == 3 ? 'blcoks2a' : ''"
      >
        <!-- <span>虚拟规划</span> -->
        <el-cascader
          v-model="value3"
          :options="options3"
          ref="cascader3"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange3"
          placeholder="虚拟规划"
          popper-class="g_xiala"
          :show-all-levels="false"
        ></el-cascader>
      </div>
      <div
        class="blcoks2"
        :class="navIndex == 4 ? 'blcoks2a' : ''"
        @click="navClick(4)"
      >
        <span>模型管理</span>
      </div>
      <div
        class="blcoks2"
        @click="navClick(5)"
        :class="navIndex == 5 ? 'blcoks2a' : ''"
      >
        <!-- <span>数据管理</span> -->
        <el-cascader
          v-model="value4"
          :options="options4"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange4"
          placeholder="数据管理"
          popper-class="g_xiala"
          :show-all-levels="false"
        ></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {
      navIndex: 0,
      value: ["电网孪生"],
      options: [
        {
          value: "zhanfangluansheng",
          label: "站房孪生",
          children: [
            {
              value: "zhanfangxuanzhi",
              label: "站房选址",
            },
            {
              value: "jiangeguanli1",
              label: "间隔查询",
            },
          ],
        },
        {
          value: "jiakongluansheng",
          label: "架空孪生",
          children: [
            {
              value: "gantabudian",
              label: "杆塔布点",
            },
            {
              value: "jiangeguanli2",
              label: "间隔展示",
            },
            {
              value: "buxianguanli1",
              label: "布线管理",
            },
          ],
        },
        {
          value: "dianlanluansheng",
          label: "电缆孪生",
          children: [
            // {
            //   value: "zhongduanguanli",
            //   label: "终端管理",
            // },
            // {
            //   value: "buxianguanli2",
            //   label: "布线管理",
            // },
            {
              value: "jiedianguanli",
              label: "节点管理",
            },
            {
              value: "guanlangguanli",
              label: "管廊管理",
            },
            {
              value: "dianlanguanli",
              label: "电缆管理",
            },
          ],
        },
        {
          value: "weiwangluansheng",
          label: "微网孪生",
          children: [
            {
              value: "sheshibudian",
              label: "设施布点",
            },
          ],
        },
      ],
      value2: ["电网分析"],
      options2: [
        {
          value: "wanggefenxi",
          label: "网格维护",
        },
        {
          value: "sheshifenxi",
          label: "设施分析",
          children: [
            {
              value: "shebeifenxi",
              label: "设备分析",
            },
            {
              value: "yonghufenxi",
              label: "用户分析",
            },
            {
              value: "tingdianfenxi",
              label: "停电分析",
            },
          ],
        },
        {
          value: "quanjingjiance",
          label: "全景监测",
        },
        {
          value: "wangjiafenxi",
          label: "网架分析",
        },
        {
          value: "zonghepinggu",
          label: "综合评估",
        },
        {
          value: "fenxibaogao",
          label: "分析报告",
        },
      ],

      value3: ["虚拟规划"],
      options3: [
        {
          value: "fuheyuce",
          label: "负荷预测",
        },
        {
          value: "rongliangpeiping",
          label: "容量配平",
        },
        {
          value: "xuanzhidingrong",
          label: "选址定容",
        },
        {
          value: "zhinengxuanxian",
          label: "智能选线",
        },
        {
          value: "dianqibaogao",
          label: "电气报告",
          children: [
            {
              value: "chaoliujisuan",
              label: "潮流计算",
            },
            {
              value: "duanlujisuan",
              label: "短路计算",
            },
            {
              value: "kekaoxingjisuan",
              label: "可靠性计算",
            },
          ],
        },

        {
          value: "guihuabaogao",
          label: "规划报告",
        },
      ],
      value4: ["数据管理"],
      options4: [
        {
          value: "dilixinxi",
          label: "地理信息",
          children: [
            {
              value: "tuceng",
              label: "图层",
            },
            {
              value: "wange",
              label: "网格",
            },
            {
              value: "kongjianfuwu",
              label: "空间服务",
            },
          ],
        },
        {
          value: "dianwangwangjia",
          label: "电网网架",
          children: [
            {
              value: "dianwangshebei",
              label: "电网设备",
            },
            {
              value: "tuobuguanxi",
              label: "拓补关系",
            },
          ],
        },
        {
          value: "dianwangjiance",
          label: "电网监测",
          children: [
            {
              value: "shijianshuju",
              label: "事件数据",
            },
            {
              value: "yaoceshuju",
              label: "遥测数据",
            },
            {
              value: "jianceshebei",
              label: "监测设备",
            },
            {
              value: "qixiangshuju",
              label: "气象数据",
            },
          ],
        },
        {
          value: "guihuafenxi",
          label: "规划分析",
          children: [
            {
              value: "fuheyuce2",
              label: "负荷预测",
            },
            {
              value: "chaoliujisuan2",
              label: "潮流计算",
            },
            {
              value: "kekaoxingjisuan2",
              label: "可靠性计算",
            },
            {
              value: "zonghexiansunlv",
              label: "综合线损率",
            },
            {
              value: "dianyahegelv",
              label: "电压合格率",
            },
            {
              value: "chongguozai",
              label: "重过载",
            },
          ],
        },
        {
          value: "guihuaxiangmu",
          label: "规划项目",
          children: [
            {
              value: "xiangmuguihua",
              label: "项目规划",
            },
            {
              value: "xiangmujihua",
              label: "项目计划",
            },
          ],
        },
        {
          value: "xitongzhicheng",
          label: "系统支撑",
          children: [
            {
              value: "renyuan",
              label: "人员",
            },
            {
              value: "quanxian",
              label: "权限",
            },
            {
              value: "juese",
              label: "角色",
            },
            {
              value: "bumen",
              label: "部门",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("navIndex", (e) => {
      if (e == "100") {
        that.navIndex = 0;
      } else if (e == "101") {
        that.navIndex = 1;
      } else if (e == "102") {
        that.navIndex = 2;
      } else if (e == "103") {
        that.navIndex = 3;
      } else if (e == "104") {
        that.navIndex = 4;
      } else if (e == "105") {
        that.navIndex = 5;
      }
    });
    that.$bus.$on("currIndexs", (e) => {
      that.navIndex = 0;
    });
  },
  methods: {
    handleChange(value) {
      let [...arr] = value;
      let data = arr.pop();
      let datas = {
        functionName: "ChangeMenu",
        backFunctionName: "",
        functionParameters: [
          {
            key: "MenuID",
            value: "GridTwin",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(datas));
      this.$router.push({
        path: "/mr",
      });

      if (data == "gantabudian") {
        let e = {
          one: "电网孪生",
          two: "架空孪生",
          three: "杆塔布点",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "buxianguanli1") {
        let e = {
          one: "电网孪生",
          two: "架空孪生",
          three: "布线管理",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "zhanfangxuanzhi") {
        let e = {
          one: "电网孪生",
          two: "站房孪生",
          three: "站房选址",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "jiangeguanli1") {
        let e = {
          one: "电网孪生",
          two: "站房孪生",
          three: "间隔展示",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "jiangeguanli2") {
        let e = {
          one: "电网孪生",
          two: "架空孪生",
          three: "间隔管理",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "jiedianguanli") {
        let e = {
          one: "电网孪生",
          two: "电缆孪生",
          three: "节点管理",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "guanlangguanli") {
        let e = {
          one: "电网孪生",
          two: "电缆孪生",
          three: "管廊管理",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "dianlanguanli") {
        let e = {
          one: "电网孪生",
          two: "电缆孪生",
          three: "电缆管理",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      }
      // else if (data == "zhongduanguanli") {
      //   let e = {
      //     one: "电网孪生",
      //     two: "电缆孪生",
      //     three: "终端管理",
      //     right1: ">",
      //     right2: ">",
      //   };
      //   this.$bus.$emit("setCrumbs", e);
      // } else if (data == "buxianguanli2") {
      //   let e = {
      //     one: "电网孪生",
      //     two: "电缆孪生",
      //     three: "布线管理",
      //     right1: ">",
      //     right2: ">",
      //   };
      //   this.$bus.$emit("setCrumbs", e);
      // }
      else if (data == "sheshibudian") {
        let e = {
          one: "电网孪生",
          two: "微网孪生",
          three: "设施布点",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "jiangeguanli3") {
      }
      this.value = "电网孪生";
      let v = { ChooseType: "ShowCompass", value: true };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let that = this;
      if (window.showOnec == true) {
        setTimeout(() => {
          that.$bus.$emit("ymtz", data);
          window.showOnec = false;
        }, 600);
      } else {
        that.$bus.$emit("ymtz", data);
      }

      // let that = this;
      // setTimeout(() => {
      //   that.$bus.$emit("initItem");
      // }, 200);
    },
    handleChange2(value) {
      let [...arr] = value;
      let data = arr.pop();
      let datas = {
        functionName: "ChangeMenu",
        backFunctionName: "",
        functionParameters: [
          {
            key: "MenuID",
            value: "WJFX",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(datas));

      if (data == "shebeifenxi") {
        this.$router.push({
          path: "/wj/sheshi",
        });
        // 设置设施分析页面-视角
        this.$bus.$emit("setShiJiao", 0);
        // 设置设施分析页面-是否夜间模式
        this.$bus.$emit("setYeJian", 0);
        let e = {
          one: "电网分析",
          two: "设施分析",
          three: "设备分析",
          right1: ">",
          right2: "",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "wanggefenxi") {
        this.$router.push({
          path: "/wj/wangge",
        });
        let e = {
          one: "电网分析",
          two: "",
          three: "网格维护",
          right1: ">",
          right2: "",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "yonghufenxi") {
        this.$router.push({
          path: "/wj/yhfx",
        });
        let e = {
          one: "电网分析",
          two: "设施分析",
          three: "用户分析",
          right1: ">",
          right2: "",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (data == "tingdianfenxi") {
        this.$router.push({
          path: "/wj/tdfx",
        });
        let e = {
          one: "电网分析",
          two: "设施分析",
          three: "停电分析",
          right1: ">",
          right2: "",
        };
        this.$bus.$emit("setCrumbs", e);
      }
      this.value2 = "网架分析";
      let v = { ChooseType: "ShowCompass", value: true };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("initItem");
      }, 200);
    },
    handleChange3(value) {
      let [...arr] = value;
      let data = arr.pop();
      this.value3 = "虚拟规划";
      let that = this;
      let v = { ChooseType: "ShowCompass", value: true };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      if (data == "fuheyuce") {
      }
      this.$router.push({
        path: "/xuni_mr",
      });
    },
    handleChange4(value) {
      let [...arr] = value;
      let data = arr.pop();
      if (data == "danganshuju") {
        this.$router.push({
          path: "/xx/dangan",
        });
      } else if (data == "yunxingshuju") {
        this.$router.push({
          path: "/xx/yunxing",
        });
      } else if (data == "zhibiaoshuju") {
        this.$router.push({
          path: "/xx/zhibiao",
        });
      } else if (data == "gonggongshuju") {
        this.$router.push({
          path: "/xx/gonggong",
        });
      }
      this.value4 = "数据管理";
      let v = { ChooseType: "ShowCompass", value: false };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let that = this;
    },
    navClick(e) {
      this.navIndex = e;
      this.$bus.$emit("routerJump", e);
      let that = this;
      if (e == 0) {
        let e = {
          one: "",
          two: "",
          three: "",
          right1: "",
          right2: "",
        };
        that.$bus.$emit("setCrumbs", e);
        // 首页
        if (that.$route.path != "/index") {
          that.$router.push({
            path: "/index",
          });
        }
        let data = {
          functionName: "ChangeMenu",
          backFunctionName: "",
          functionParameters: [
            {
              key: "MenuID",
              value: "MainMenu",
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        let v = { ChooseType: "ShowCompass", value: true };
        let data2 = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));
        let v6 = {
          ChooseType: "ShowFastPositionButton",
          SelectType: true,
        };
        let data6 = {
          functionName: "QuickPosition",
          functionParameters: [
            {
              key: "QuickPosition",
              value: JSON.stringify(v6),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data6));
      }
      that.value = [];
      that.value2 = [];
      that.value3 = [];
      that.value4 = [];

      setTimeout(() => {
        if (e == 1) {
          let v6 = {
            ChooseType: "ShowFastPositionButton",
            SelectType: true,
          };
          let data6 = {
            functionName: "QuickPosition",
            functionParameters: [
              {
                key: "QuickPosition",
                value: JSON.stringify(v6),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data6));
          // that.getIsSelectKv();
        } else if (e == 2) {
          let v6 = {
            ChooseType: "ShowFastPositionButton",
            SelectType: true,
          };
          let data6 = {
            functionName: "QuickPosition",
            functionParameters: [
              {
                key: "QuickPosition",
                value: JSON.stringify(v6),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data6));
        } else if (e == 3) {
          // that.getIsSelectKv();
        } else if (e == 4) {
          // 模型管理
          if (that.$route.path != "/mx") {
            that.$router.push({
              path: "/mx",
            });
          }
          let datas = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "shijiaoXZ",
                value: "MRSJ",
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(datas));
          let data = {
            functionName: "ChangeMenu",
            backFunctionName: "",
            functionParameters: [
              {
                key: "MenuID",
                value: "ModelManage",
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
          let data2 = {
            functionName: "ModelManage",
            backFunctionName: "",
            functionParameters: [
              {
                key: "ModelID",
                value: "",
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data2));
          let v = { ChooseType: "ShowCompass", value: false };
          let data3 = {
            functionName: "Sundry",
            functionParameters: [
              {
                key: "Sundry",
                value: JSON.stringify(v),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data3));

          let v6 = {
            ChooseType: "ShowFastPositionButton",
            SelectType: false,
          };
          let data6 = {
            functionName: "QuickPosition",
            functionParameters: [
              {
                key: "QuickPosition",
                value: JSON.stringify(v6),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data6));
        } else if (e == 5) {
          let v6 = {
            ChooseType: "ShowFastPositionButton",
            SelectType: false,
          };
          let data6 = {
            functionName: "QuickPosition",
            functionParameters: [
              {
                key: "QuickPosition",
                value: JSON.stringify(v6),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data6));
        }
      }, 500);
    },
    // 查询是否已有创建的电网构架
    getIsSelectKv() {
      let data = {
        functionName: "GetSelectKv",
        backFunctionName: "BackGetSelectKv",
        functionParameters: [
          {
            key: "GetSelectKv",
            value: "",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackGetSelectKv = this.BackGetSelectKv;
    },
    BackGetSelectKv(e) {
      let data = JSON.parse(e).value;
      if (data.length < 1) {
        this.$refs.cascader.dropDownVisible = false;
        this.$refs.cascader2.dropDownVisible = false;
        this.$refs.cascader3.dropDownVisible = false;
        this.$emit("showMBs");
      }
    },
  },
};
</script>

<style>
.el-cascader-panel {
  background-color: transparent !important;
}
.el-input__suffix {
  display: none;
}
.el-popper[x-placement^="bottom"] {
  margin-top: 7.7px !important;
}
.el-cascader__dropdown {
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: 0 0 0 0 transparent !important;
  background-color: transparent !important;
}
.el-cascader-menu {
  min-width: 0 !important;
  width: 124px !important;
  top: 8px !important;
  left: 10px !important;
  background: url("img/tbgg.png") no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
}

.el-cascader-menu__list {
  width: 124px !important;
  text-align: center;
}
.el-cascader-node {
  height: 42px !important;
  font-family: SourceHanSansCN-Medium !important;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  color: #b9c2cc;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  font-family: SourceHanSansCN-Medium !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  letter-spacing: 0em;
  color: #ffffff !important;
  height: 42px !important;
}
.el-cascader-node__postfix {
  display: none !important;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  background: url("img/tbgg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background: url("img/tbgg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.el-icon-check {
  display: none !important;
}
.el-cascader-node__label {
  text-overflow: initial !important;
}
.el-scrollbar {
  overflow: hidden !important;
}

.el-cascader > .el-input > .el-input__inner {
  width: 100% !important;
  height: 31px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  line-height: 0 !important;
  margin-top: 4px !important;
  padding: 0 !important;
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #b0c3e8;
}
</style>
<style scoped>
.bottom {
  width: 1338px;
  height: 31px;
  position: fixed;
  left: 313px;
  top: 1px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}
.left1 {
  width: 426px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom > .left1 > .blocks {
  width: 142px !important;
  height: 31px;
  background: url("img/nbg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.blocksa {
  width: 142px !important;
  background: url("img/nbga.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.blcoks2 {
  width: 142px !important;
  height: 31px;
  background: url("img/nbg2.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.blcoks2a {
  background: url("img/nbg2a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
/* .bottom > .blocks3 {
  width: 99.69px;
  height: 27.28px;
  background: url("img/bg3.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;0C4CC
  justify-content: center;
  cursor: pointer;
} */
.bottom > .left1 > .blocks > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #c0c4cc;
}
.bottom > .left1 > .blcoks2 > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #c0c4cc;
}
/* .blocks2 {
  height: 45px !important;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.blocks2 > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #ffffff;
} */
/* .blocks4 {
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
} */
/* .blocks4 > span {
  font-family: YouSheBiaoTiHei;
  font-size: 18px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
} */

.bgg {
  width: 462px;
  height: 100%;
}
</style>
