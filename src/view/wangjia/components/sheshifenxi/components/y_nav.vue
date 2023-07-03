<template>
  <div class="yNav">
    <div
      class="blocks"
      :class="currentIndex == index ? 'blocks2' : ''"
      v-for="(item, index) in navList"
      @click="navClick(index)"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "yNav",
  data() {
    return {
      navList: ["1号主变", "2号主变", "3号主变", "4号主变", "5号主变"],
      currentIndex: 0,
    };
  },
  methods: {
    navClick(e) {
      this.currentIndex = e;
    },
  },
};
</script>

<style scoped>
.yNav {
  position: fixed;
  left: 30px;
  top: 114.29px;
  width: 100px;
  height: 240.17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.yNav > .blocks {
  width: 100px;
  height: 38px;
  background: url("img/ybg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.yNav > .blocks > span {
  font-family: YouSheBiaoTiHei;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0.1em;
  color: #b3ccde;
}
.blocks2 {
  background: url("img/ybg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.blocks2 > span {
  color: #ffffff !important;
}
</style>