<template>
  <div class="wuli">
    <!-- title -->
    <div class="w_title">
      <span>站房空间信息</span>
    </div>
    <div class="w_block">
      <div class="block">
        <div class="left"><span class="span1">设备经度：</span></div>
        <span class="span2">{{ longitude }}</span>
      </div>
    </div>
    <div class="w_block">
      <div class="block">
        <div class="left"><span class="span1">设备纬度：</span></div>
        <span class="span2">{{ dimension }}</span>
      </div>
    </div>
    <div class="w_block">
      <div class="block">
        <div class="left"><span class="span1">设备角度：</span></div>
        <span class="span2">{{ angle }}</span>
      </div>
    </div>
    <div class="w_block">
      <div class="block">
        <div class="left"><span class="span1">设备高程：</span></div>
        <span class="span2">{{ altitude }}</span>
      </div>
    </div>
    <div class="w_block">
      <div class="block2">
        <div class="img" @mouseenter="YR" @mouseleave="YC" @click="keepClick">
          <img v-show="!showImg" src="./img/bc.png" />
          <img v-show="showImg" src="./img/bc2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kongjian",
  data() {
    return {
      showImg: false,
      longitude: "",
      dimension: "",
      angle: "",
      altitude: "",
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("getKJ", (e) => {
      let data = JSON.parse(e);
      that.longitude = data.longitude;
      that.dimension = data.latitude;
      that.angle = data.yaw;
      that.altitude = data.altitude;
    });
  },
  methods: {
    YR() {
      this.showImg = true;
    },
    YC() {
      this.showImg = false;
    },
    keepClick() {
      // 保存
      this.$emit("baoCun");
    },
  },
};
</script>

<style scoped>
.wuli {
  width: 451.38px;
  height: 800px;
  position: fixed;
  right: 20px;
  top: 75.33px;
}
</style>
<style scoped>
.w_title {
  width: 100%;
  height: 47.3px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.w_title > span {
  margin-left: 38.33px;
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  margin-top: -4px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
<style scoped>
.wbb {
  width: 100%;
  height: 732px;
  overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
  display: none;
}
.w_block {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  margin-bottom: 11px;
}
.w_block > .block {
  width: 421.44px;
  height: 100%;
  background: url("img/wbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.block2 {
  width: 421.44px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.block2 > .img {
  width: 100px;
  height: 31.36px;
  cursor: pointer;
}
.block2 > .img > img {
  width: 100%;
  height: 100%;
}
.w_block > .block > .left {
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 2px;
}
.span1 {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #cecfd0;
}
.span2 {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>
