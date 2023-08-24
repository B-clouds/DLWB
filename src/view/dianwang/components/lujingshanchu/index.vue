<template>
  <div class="qjjc">
    <transition name="transitionLeft">
      <qjLeft @bianji="bianji" v-show="show && showBJ"></qjLeft>
    </transition>
    <transition name="transitionLeft">
      <qjLeft2
        :datas="datas"
        @fanhui="fanhui"
        v-show="show && !showBJ"
      ></qjLeft2>
    </transition>
  </div>
</template>

<script>
import qjLeft from "./components/qjLeft.vue";
import qjLeft2 from "./components/qjLeft2.vue";
export default {
  name: "quanjingjiance",
  components: {
    qjLeft,
    qjLeft2,
  },
  data() {
    return {
      show: false,
      showBJ: true,
      datas: {},
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
      this.datas = e;
    },
    fanhui() {
      this.showBJ = true;
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
