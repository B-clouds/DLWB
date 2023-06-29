<template>
  <div class="wuli">
    <div class="jcxx">
      <div class="j_titles">
        <span>站房空间信息</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>设备经度：</span>
          </div>
          <div class="rights">
            <span>{{ longitude }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备纬度：</span>
          </div>
          <div class="rights">
            <span>{{ dimension }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>设备角度：</span>
          </div>
          <div class="rights">
            <span>{{ angle }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备高程：</span>
          </div>
          <div class="rights">
            <span>{{ altitude }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="w_block w_block2">
      <div class="block2">
        <div class="img" @click="quanPingClick">
          <img v-show="!showImg3" src="./img/qp.png" />
          <img v-show="showImg3" src="./img/qp2.png" />
        </div>
        <div
          class="img"
          @mouseenter="YR2"
          @mouseleave="YC2"
          @click="fanhuiClick"
        >
          <img v-show="!showImg2" src="./img/fh.png" />
          <img v-show="showImg2" src="./img/fh2.png" />
        </div>
        <div class="img" @mouseenter="YR" @mouseleave="YC" @click="keepClick">
          <img v-show="!showImg" src="./img/bc.png" />
          <img v-show="showImg" src="./img/bc2.png" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "kongjian",
  data() {
    return {
      showImg: false,
      showImg2: false,
      showImg3: false,
      longitude: "",
      dimension: "",
      angle: "",
      altitude: "",
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("getZXKJ", (e) => {
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
    fanhuiClick() {
      this.$emit("fhClick");
    },
    keepClick() {
      // 保存
      this.$emit("baoCun");
    },
    YR2() {
      this.showImg2 = true;
    },
    YC2() {
      this.showImg2 = false;
    },
    quanPingClick() {
      if (this.showImg3) {
        this.showImg3 = false;
      } else {
        this.showImg3 = true;
      }
      this.$emit("lieBiao", this.showImg3);
    },
  },
};
</script>

<style scoped>
.wuli {
  width: 379px;
  height: 200px;
  position: fixed;
  right: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 100%;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.j_titles {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.kong {
  width: 100%;
  height: 40px;
}
.j_item {
  width: 364px;
  height: 66px;
  margin-left: 8px;
  margin-top: 6px;
  background: url("img/jbgitem.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  justify-content: space-between;
}
.j_item > .items {
  width: 170px;
  height: 100%;
  margin-left: 6px;
  display: flex;
  justify-content: space-between;
}
.j_item > .items > .lefts {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
}
.j_item > .items > .lefts > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #6df0ff;
}
.j_item > .items > .rights {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
}
.j_item > .items > .rights > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #d8d8d8;
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
.w_block2 {
  position: absolute;
  top: -50px;
  left: 0;
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
  justify-content: center;
}
.block2 > .img {
  width: 100px;
  height: 31.36px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
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
