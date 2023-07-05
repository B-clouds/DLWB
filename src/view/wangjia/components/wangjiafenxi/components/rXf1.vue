<template>
  <div class="qjRight">
    <div class="k"></div>
    <div class="qr_block" @click="index1Click()">
      <img v-show="index1 != 0" src="./img/wxz.png" />
      <img v-show="index1 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #69b6ff"></div>
      <span>功率</span>
    </div>
    <div class="qr_block" @click="index2Click()">
      <img v-show="index2 != 0" src="./img/wxz.png" />
      <img v-show="index2 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #ffed4e"></div>
      <span>电量</span>
    </div>
    <div class="qr_block" @click="index3Click()">
      <img v-show="index3 != 0" src="./img/wxz.png" />
      <img v-show="index3 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #ffa79d"></div>
      <span>电压</span>
    </div>
    <div class="qr_block" @click="index4Click()">
      <img v-show="index4 != 0" src="./img/wxz.png" />
      <img v-show="index4 == 0" src="./img/xz.png" />
      <div class="kuai" style="background: #ff4e4e"></div>
      <span>电流</span>
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
      index4: -1,
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
    index4Click() {
      if (this.index4 == -1) {
        this.index4 = 0;
      } else {
        this.index4 = -1;
      }
    },
  },
};
</script>

<style scoped>
.qjRight {
  width: 202px;
  height: 202px;
  position: absolute;
  right: 408px;
  bottom: 203px;
  background: url("img/r1.png") no-repeat !important;
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
