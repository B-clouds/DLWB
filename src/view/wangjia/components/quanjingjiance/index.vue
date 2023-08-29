<template>
  <div class="qjjc">
    <transition name="transitionLeft">
      <qjLeft v-show="show && showSs"></qjLeft>
    </transition>
    <transition name="transitionLeft">
      <div class="shousuo" @click="sfClick" v-show="show && showSs"></div>
    </transition>
    <transition name="transitionLeft">
      <div class="fangkai" @click="sfClick" v-show="show && !showSs"></div>
    </transition>
    <transition name="transitionRight">
      <qjRight v-show="show"></qjRight>
    </transition>
    <!-- 网架电站 -->
    <wjdz v-if="show" />
  </div>
</template>

<script>
import qjLeft from "./components/qjLeft.vue";
import qjRight from "./components/qjRight.vue";
import wjdz from "@/components/wjdz/index.vue";
export default {
  name: "quanjingjiance",
  components: {
    qjLeft,
    qjRight,
    wjdz,
  },
  data() {
    return {
      show: false,
      showSs: true,
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
  },
  methods: {
    sfClick() {
      this.showSs = !this.showSs;
    },
  },
};
</script>

<style scoped>
.qjjc {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
<style scoped>
.shousuo {
  width: 18px;
  height: 142px;
  position: absolute;
  left: 386px;
  top: 526px;
  background: url("img/s.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.fangkai {
  width: 18px;
  height: 142px;
  position: absolute;
  left: 0;
  top: 526px;
  background: url("img/f.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
