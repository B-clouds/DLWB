<template>
  <div class="navbar">
    <div class="xian"></div>
    <div
      class="navItem"
      :class="currentIndex == index ? 'navItem2' : ''"
      v-for="(item, index) in navList"
      @click="navClick(index)"
      :key="index"
    >
      <div class="dian" v-show="currentIndex == index"></div>
      <div class="navItemItem">
        <span class="span1">{{ index + 1 }}</span>
        <span class="span2">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      currentIndex: 0,

      navList: ["电站", "线路", "变压器", "杆塔", "微网", "开关"],
    };
  },
  created() {},
  activated() {},
  deactivated() {
    this.currentIndex = 0;
  },
  mounted() {
    let that = this;
    setTimeout(() => {
      that.$bus.$emit("navIndexs", this.currentIndex);
    }, 50);
  },
  methods: {
    navClick(e) {
      this.currentIndex = e;
      this.$bus.$emit("navIndexs", e);
    },
  },
};
</script>
<style scoped>
.navbar {
  width: 520px;
  height: 364px;
  position: fixed;
  left: -40px;
  top: 113px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
}
.xian {
  position: absolute;
  left: 44px;
  top: 0px;
  background: url("img/xian.png") no-repeat !important;
  background-size: 100% 100% !important;
  width: 14px;
  height: 100%;
  z-index: -1;
}
.navItem {
  width: 100%;
  height: 50px;
  cursor: pointer;
  position: relative;
}
.dian {
  position: absolute;
  width: 3px;
  height: 37px;
  left: 49px;
  top: 4px;
  background: url("img/left.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.navItem:hover {
  background: url("img/beijing.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.navItem:hover > .navItemItem > .span1 {
  color: #bfdaf5 !important;
}
.navItem:hover > .navItemItem > .span2 {
  color: #e5f2ff !important;
}

.navItem2 {
  background: url("img/beijing.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.navItem2 > .navItemItem > .span1 {
  color: #bfdaf5 !important;
}
.navItem2 > .navItemItem > .span2 {
  color: #e5f2ff !important;
}
.navItemItem {
  width: 342px;
  height: 60px;
  background: url("img/beijing2.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-left: 107px;
  display: flex;
  align-items: center;
}
.navItemItem > .span1 {
  font-size: 22px;
  font-family: YouSheBiaoTiHei;
  color: #9da7b4;
  opacity: 1;
  margin-left: 30px;
  margin-right: 77px;
  margin-top: -8px;
}
.navItemItem > .span2 {
  font-size: 22px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #9da7b4;
  opacity: 1;
  margin-top: -10px;
}
</style>