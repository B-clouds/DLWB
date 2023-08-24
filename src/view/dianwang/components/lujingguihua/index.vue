<template>
  <div class="qjjc">
    <transition name="transitionLeft">
      <qjLeft @bianji="bianji" v-show="show"></qjLeft>
    </transition>
  </div>
</template>

<script>
import qjLeft from "./components/qjLeft.vue";
export default {
  name: "quanjingjiance",
  components: {
    qjLeft,
  },
  data() {
    return {
      show: false,
      showBJ: true,
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.showBJ = true;
  },
  methods: {
    bianji(e) {
      console.log(e);
      this.showBJ = false;
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
