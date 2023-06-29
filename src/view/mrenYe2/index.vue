<template>
  <div class="morenYe">
    <transition name="transitionLeft">
      <mrLeft v-if="show"></mrLeft>
    </transition>
  </div>
</template>

<script>
import mrLeft from "./components/mrLeft.vue";
export default {
  name: "mrenYe",
  components: {
    mrLeft,
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {},
  mounted() {},
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
  },
};
</script>

<style scoped>
.morenYe {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
