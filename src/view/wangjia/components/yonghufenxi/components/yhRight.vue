<template>
  <div class="jRight">
    <!-- 普通用户现状概括-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">普通用户现状概括</span>
      </div>
      <div class="yh_content">
        <div class="yh_item">
          <img src="./img/1.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">用户总数</span>
            <div class="yh_value">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/4.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">总负荷</span>
            <div class="yh_value">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/2.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接用户</span>
            <div class="yh_value yh_value2">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/5.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接负荷</span>
            <div class="yh_value yh_value2">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/3.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途用户</span>
            <div class="yh_value yh_value3">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/6.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途负荷</span>
            <div class="yh_value yh_value3">
              <span>122</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 大用户现状概括-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">大用户现状概括</span>
      </div>
      <div class="yh_content yh_content2">
        <div class="yh_item">
          <img src="./img/1.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">用户总数</span>
            <div class="yh_value">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/4.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">总负荷</span>
            <div class="yh_value">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/2.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接用户</span>
            <div class="yh_value yh_value2">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/5.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接负荷</span>
            <div class="yh_value yh_value2">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/3.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途用户</span>
            <div class="yh_value yh_value3">
              <span>122</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/6.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途负荷</span>
            <div class="yh_value yh_value3">
              <span>122</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户变化趋势-->
    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">用户变化趋势</span>
      </div>
      <div class="yh_Echarts">
        <yh_oneEcharts />
      </div>
    </div>
  </div>
</template>

<script>
import yh_oneEcharts from "./echarts/yh_oneEcharts.vue"; //用户变化趋势
export default {
  components: {
    yh_oneEcharts,
  },
  name: "jRight",
  data() {
    return {};
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {
    
  },
  methods: {},
};
</script>

<style scoped>
.jRight {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 294px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block3 {
  height: 318px !important;
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
  margin-top: 6px;
  margin-left: 6px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0px;
  color: #d8f0ff;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>
<!-- 普通用户现状概括 -->
<style scoped>
.yh_content {
  position: absolute;
  top: 49px;
  left: 0;
  width: 379px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.yh_content2 {
  top: 357px;
}
.yh_item {
  margin-bottom: -25px;
  width: 48%;
  height: 99px;
  display: flex;
  justify-content: flex-start;
}
.yh_icon {
  width: 101px;
  height: 99px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.yh_data {
  margin-top: -4px;
  margin-left: -27px;
  display: flex;
  flex-direction: column;
}
.yh_name {
  margin-left: 18px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  line-height: 37px;
  letter-spacing: 0em;
  color: #bcbcbc;
}
.yh_value {
  margin-top: -7px;
  width: 115px;
  height: 29px;
  background: url(img/11.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.yh_value2 {
  background: url(img/22.png) no-repeat;
  background-size: 100% 100%;
}
.yh_value3 {
  background: url(img/33.png) no-repeat;
  background-size: 100% 100%;
}
.yh_value > span {
  margin-top: -5px;
  margin-left: 20px;
  font-family: 字体圈欣意冠黑体;
  font-size: 18px;
  font-weight: normal;
  line-height: 56px;
  letter-spacing: 0px;
  color: #eafaff;
  /* 文字投影 */
  text-shadow: 0px 0px 5px rgba(173, 238, 255, 0.5);
}
</style>
<!-- 用户变化趋势 -->
<style scoped>
.yh_Echarts {
  position: absolute;
  top: 661px;
  left: 0;
  width: 379px;
  height: 270px;
}
</style>