<template>
  <div class="buidan">
    <!-- 站域 -->
    <dz v-show="listIndex == 0" />
    <!-- 线域 -->
    <xl v-show="listIndex == 1" />
    <!-- 变压器 -->
    <byq v-show="listIndex == 2" />
    <!-- 区域 -->
    <dz v-show="listIndex == 3" />

    <div class="xuanxiang">
      <div
        class="block"
        v-for="(item, index) in list"
        :key="index"
        v-show="showList"
        @click="indexClick(index)"
        :class="listIndex == index ? 'block2' : ''"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dz from "./components/dz/index.vue";
import xl from "./components/xl/index.vue";
import byq from "./components/byq/index.vue";
export default {
  name: "yonghufenxi",
  components: {
    dz,
    xl,
    byq,
  },
  data() {
    return {
      show: false,
      list: ["站域", "线域", "变域", "区域"],
      listIndex: 0,
      showList: true,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("isShowList", (e) => {
      that.showList = e;
    });
    that.$bus.$on("types", (e) => {
      this.listIndex = e;
    });
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
  },
  methods: {
    indexClick(e) {
      this.listIndex = e;
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
.navs {
  width: 434px;
  height: 40px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
}
.navs > .blocks {
  width: 136px;
  height: 39px;
  background: url("img/nav.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.navs > .blocks > span {
  font-size: 22px !important;
  text-align: center;
  font-weight: normal;
  margin-top: 7px;
  font-family: YouSheBiaoTiHei;
  background-image: -webkit-linear-gradient(
    bottom,
    #569eff,
    #ffffff
  ) !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navs > .blocks2 {
  background: url("img/nava.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.navs > .blocks2 > span {
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
<style scoped>
.xuanxiang {
  width: 181px;
  height: 82px;
  position: absolute;
  top: 190px;
  left: 31px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.xuanxiang > .block {
  width: 69px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/bj.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.xuanxiang > .block > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
}
.block2 {
  background: url("img/bj2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.block2 > span {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
