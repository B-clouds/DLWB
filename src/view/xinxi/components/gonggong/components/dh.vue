<template>
  <div class="datas">
    <div class="xian"></div>
    <div class="navbar">
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
  </div>
</template>
<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      currentIndex: 0,

      navList: ["气象类数据", "社会类数据"],
    };
  },
  created() {},
  mounted() {},
  methods: {
    navClick(e) {
      this.currentIndex = e;
      this.$emit("navclick", e);
    },
  },
};
</script>
<style scoped>
.datas {
  width: 520px;
  height: 364px;
  position: fixed;
  left: -40px;
  top: 113px;
  z-index: 9;
}
.navbar {
  width: 520px;
  height: 364px;
  overflow-y: scroll;
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

.navbar::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.navItem {
  width: 100%;
  height: 50px;
  cursor: pointer;
  margin-bottom: 30px;
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