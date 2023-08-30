<template>
  <div class="wangjiafenxi" v-if="show">
    <transition name="transitionLeft">
      <wjLeft @showRight="showRight" v-show="show && showSs"></wjLeft>
    </transition>
    <transition name="transitionRight">
      <rXf1 v-show="show"></rXf1>
    </transition>
    <transition name="transitionLeft">
      <div class="shousuo" @click="sfClick" v-show="show && showSs"></div>
    </transition>
    <transition name="transitionLeft">
      <div class="fangkai" @click="sfClick" v-show="show && !showSs"></div>
    </transition>
    <transition name="transitionRight">
      <wjRight v-show="show && showRights && showSs"></wjRight>
    </transition>
    <transition name="transitionRight">
      <ssfx v-if="show && !showSs" />
    </transition>
  </div>
</template>

<script>
import wjLeft from "./components/wjLeft.vue";
import rXf1 from "./components/rXf1.vue";
import rXf2 from "./components/rXf2.vue";
import wjRight from "./components/wjRight.vue";
import ssfx from "../ssfx/index.vue";
export default {
  name: "wangjiafenxi",
  components: {
    wjLeft,
    rXf1,
    rXf2,
    wjRight,
    ssfx,
  },
  data() {
    return {
      show: false,
      showRights: false,
      showSs: true,
    };
  },
  activated() {
    this.show = true;
    this.showSs = true;
  },
  deactivated() {
    this.show = false;
    this.showRights = false;
  },
  methods: {
    showRight(e) {
      this.showRights = e;
    },
    sfClick() {
      if (this.showSs == true) {
        this.$bus.$emit("showZuo", false);
        this.showSs = false;
      } else {
        this.showSs = true;

        if (this.showRights == true) {
          this.$bus.$emit("showZuo", true);
        }
      }
    },
  },
};
</script>

<style scoped>
.wangjiafenxi {
  width: 100%;
  height: 100%;
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
