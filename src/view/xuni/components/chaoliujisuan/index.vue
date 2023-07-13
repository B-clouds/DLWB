<template>
  <div class="chaoliujisuan">
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show" class="wr"></div>
    </transition>
    <!-- 基本管理 -->
    <clLeft
      @showRight="showRight"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && detiles1"
    />
    <clRight v-if="show && showRights && detiles1"/>
  </div>
</template>

<script>
// 基本信息
import clLeft from "./components/clLeft.vue";
import clRight from "./components/clRight.vue";
export default {
  name: "chaoliujisuan",
  components: {
    clLeft,
    clRight,
  },
  data() {
    return {
      show: false,
      showRights: false,
      ids: [],
      oids: 0,
      detiles1: true,
    };
  },
  mounted() {
   
  },
  activated() {
    this.show = true; 
  },
  deactivated() {
    this.showRights = false;
    this.show = false;
    this.detiles1 = true;
  },
  methods: {
    getOid(e) {
      this.oids = e;
    },
    getIds(e) {
      this.ids = e;
    },
    showRight(e) {
      this.showRights = e;
    },
  },
};
</script>

<style scoped>
.chaoliujisuan {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.wl {
  width: 630px;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: url("img/wl.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.wr {
  width: 630px;
  height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  background: url("img/wr.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
</style>
