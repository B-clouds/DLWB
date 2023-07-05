<template>
  <div class="wangjiafenxi">
    <transition name="transitionLeft">
      <wjLeft v-show="show"></wjLeft>
    </transition>
    <transition name="transitionRight">
      <rXf1 v-show="show"></rXf1>
    </transition>
    <transition name="transitionRight">
      <rXf2 v-show="show"></rXf2>
    </transition>
    <transition name="transitionRight">
      <wjRight v-show="show"></wjRight>
    </transition>
  </div>
</template>

<script>
import wjLeft from "./components/wjLeft.vue";
import rXf1 from "./components/rXf1.vue";
import rXf2 from "./components/rXf2.vue";
import wjRight from "./components/wjRight.vue";
export default {
  name: "wangjiafenxi",
  components: {
    wjLeft,
    rXf1,
    rXf2,
    wjRight,
  },
  data() {
    return {
      show: false,
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
  },
};
</script>

<style scoped>
.wangjiafenxi {
  width: 100%;
  height: 100%;
}
</style>
