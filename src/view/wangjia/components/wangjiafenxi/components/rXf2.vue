<template>
  <div class="qjRight">
    <div class="k"></div>
    <div class="qr_block" @click="index1Click()">
      <img v-show="index1 != 0" src="./img/wxz.png" />
      <img v-show="index1 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #9499ff"></div>
      <span>负载率</span>
    </div>
    <div class="qr_block" @click="index2Click()">
      <img v-show="index2 != 0" src="./img/wxz.png" />
      <img v-show="index2 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #f64eff"></div>
      <span>线损率</span>
    </div>
    <div class="qr_block" @click="index3Click()">
      <img v-show="index3 != 0" src="./img/wxz.png" />
      <img v-show="index3 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #61a0ff"></div>
      <span>联络率</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "qjRight",
  data() {
    return {
      index1: -1,
      index2: -1,
      index3: -1,
    };
  },
  methods: {
    index1Click() {
      if (this.index1 == -1) {
        this.index1 = 0;
      } else {
        this.index1 = -1;
      }
    },
    index2Click() {
      if (this.index2 == -1) {
        this.index2 = 0;
      } else {
        this.index2 = -1;
      }
    },
    index3Click() {
      if (this.index3 == -1) {
        this.index3 = 0;
      } else {
        this.index3 = -1;
      }
    },
  },
};
</script>

<style scoped>
.qjRight {
  width: 202px;
  height: 169px;
  position: absolute;
  right: 408px;
  bottom: 14px;
  background: url("img/r2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.k {
  width: 100%;
  height: 42px;
}
.qr_block {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.qr_block > img {
  width: 18px;
  height: 18px;
  margin: 3px 26px 0px 25px;
}
.qr_block > .kuai {
  width: 14px;
  height: 14px;
  margin-right: 14px;
}
.qr_block > span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}
</style>
