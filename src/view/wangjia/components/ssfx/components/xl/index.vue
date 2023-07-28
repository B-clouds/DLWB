<template>
  <div class="dz" v-if="show">
    <transition name="transitionLeft">
      <newLieBiao @isShowItem="isShowItem" v-show="show"></newLieBiao>
    </transition>
    <!-- 返回按钮 -->
    <div class="fh" @click="fhSs"></div>
    <!-- 信息缩放按钮 -->
    <div class="xxsf" :class="showXX ? 'xxsf2' : ''" @click="sfxxClick"></div>
  </div>
</template>

<script>
import newLieBiao from "./components/newLieBiao.vue";
export default {
  name: "xl",
  components: {
    newLieBiao,
  },
  data() {
    return {
      show: true,
      showXX: true,
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {},
  methods: {
    fhSs() {
      this.$router.push({
        path: "/wj/sheshi",
      });
      // 设置设施分析页面-视角
      this.$bus.$emit("setShiJiao", 1);
      // 设置设施分析页面-是否夜间模式
      this.$bus.$emit("setYeJian", 0);
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
      let e = {
        one: "网架分析",
        two: "",
        three: "设施分析",
        right1: ">",
        right2: "",
      };
      this.$bus.$emit("setCrumbs", e);
    },
    isShowItem() {},
    // 缩放信息按钮点击
    sfxxClick() {
      this.showXX = !this.showXX;
      this.$bus.$emit("suofangAnNiu", this.showXX);
    },
  },
};
</script>

<style scoped>
.dz {
  width: 100%;
  height: 100%;
}
.fh {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 125px;
  background: url("img/fh.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.xxsf {
  width: 98.5px;
  height: 31px;
  position: absolute;
  right: 9px;
  top: 46px;
  background: url("img/zk.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.xxsf2 {
  background: url("img/zd.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
