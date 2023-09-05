<template>
  <div class="gRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">基建工程进度跟踪</span>
      </div>
      <csgzrOne />
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">基建工程实施评论</span>
      </div>
      <div class="navs">
        <div
          class="block"
          @click="navClick(0)"
          :class="currentIndex == 0 ? 'block2' : ''"
        >
          <span>停电范围</span>
        </div>
        <div
          class="block"
          @click="navClick(1)"
          :class="currentIndex == 1 ? 'block2' : ''"
        >
          <span>停电次数</span>
        </div>
        <div
          class="block"
          @click="navClick(2)"
          :class="currentIndex == 2 ? 'block2' : ''"
        >
          <span>停电时长</span>
        </div>
      </div>
      <csgzrTwo v-if="currentIndex == 0" />
      <csgzrTwo2 v-if="currentIndex == 1" />
      <csgzrTwo3 v-if="currentIndex == 2" />
    </div>
  </div>
</template>

<script>
import csgzrOne from "./echarts/csgzrOne.vue";
import csgzrTwo from "./echarts/csgzrTwo.vue";
import csgzrTwo2 from "./echarts/csgzrTwo2.vue";
import csgzrTwo3 from "./echarts/csgzrTwo3.vue";
export default {
  name: "gRight",
  components: {
    csgzrOne,
    csgzrTwo,
    csgzrTwo2,
    csgzrTwo3,
  },
  data() {
    return {
      xList: [],
      y1: [],
      y2: [],
      currentIndex: 0,
    };
  },
  created() {},
  methods: {
    navClick(e) {
      this.currentIndex = e;
    },
  },
};
</script>

<style scoped>
.gRight {
  width: 379px;
  height: 941px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 317px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 406px !important;
}
.jr_block3 {
  height: 270px !important;
}

.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 18px;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>
<style scoped>
.gr_t {
  width: 100%;
  height: 23px;
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
}
.gr_t > .blocks {
  width: 132px;
  height: 100%;
  display: flex;
  align-items: center;
}
.gr_t > .blocks > span {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d8f0ff;
  margin-left: 5px;
}
</style>
<style scoped>
.gr_one {
  width: 100%;
  height: 240px;
}
.gr_one2 {
  height: 270px !important;
}
.gr_two {
  width: 100%;
  height: 249px;
}
.gr_three {
  width: 100%;
  height: 230px;
}
</style>
<style scoped>
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #bee4ee;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 516px;
  overflow-y: scroll;
}
.j_t_table::-webkit-scrollbar {
  display: none;
}
.j_t_bg {
  background: url("img/gblock.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_two {
  width: 100%;
  height: 262px;
}
.jr_three {
  width: 100%;
  height: 218px;
}
</style>
<style scoped>
.navs {
  width: 100%;
  height: 24px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}
.navs > .block {
  width: 100px;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("img/nb.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.navs > .block > span {
  font-family: Source Han Sans SC;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #ffffff;
}
.navs > .block2 > span {
  color: #27e9ff;
}
</style>
