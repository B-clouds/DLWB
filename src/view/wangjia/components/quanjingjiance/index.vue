<template>
  <div class="qjjc">
    <transition name="transitionLeft">
      <qjLeft v-show="show"></qjLeft>
    </transition>
    <transition name="transitionRight">
      <qjRight v-show="show"></qjRight>
    </transition>
  </div>
</template>

<script>
import qjLeft from "./components/qjLeft.vue";
import qjRight from "./components/qjRight.vue";
export default {
  name: "quanjingjiance",
  components: {
    qjLeft,
    qjRight,
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
.qjjc {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
