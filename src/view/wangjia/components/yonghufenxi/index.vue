<template>
  <div class="buidan">
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && bgRight" class="wr"></div>
    </transition>
    <!-- 基本管理 -->
    <yhLeft
      @showRight="showRight"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && detiles1"
    />
    <yhRight v-if="show && showRights && detiles1"/>
    <yhSubLeft v-if="show && detiles2"/>
    <yhSubRight v-if="show && detiles2"/>
  </div>
</template>

<script>
// 基本信息
import yhLeft from "./components/yhLeft.vue";
import yhRight from "./components/yhRight.vue";
import yhSubLeft from "./components/yhSubLeft.vue";
import yhSubRight from "./components/yhSubRight.vue";
export default {
  name: "yonghufenxi",
  components: {
    yhLeft,
    yhRight,
    yhSubLeft,
    yhSubRight,
  },
  data() {
    return {
      show: false,
      showRights: false,
      ids: [],
      oids: 0,
      detiles1: true,
      detiles2: false,
      bgRight: true,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("initSubpage", () => {
      that.detiles1 = false;
      that.detiles2 = true;
      that.bgRight = false;
    });

    that.$bus.$on("returnMain", () => {
      that.detiles1 = true;
      that.detiles2 = false;
      that.bgRight = true;
    });
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.showRights = false;
    this.show = false;
    this.detiles1 = true;
    this.detiles2 = false;
    this.bgRight = true;
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
.buidan {
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
