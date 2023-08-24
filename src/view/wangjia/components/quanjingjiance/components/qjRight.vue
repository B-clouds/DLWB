<template>
  <div class="qjRight">
    <div class="qjRights">
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

    <div class="qjRights qjRights2">
      <div class="k"></div>
      <div class="qr_block" @click="index5Click()">
        <img v-show="index5 != 0" src="./img/wxz.png" />
        <img v-show="index5 == 0" src="./img/xz.png" />
        <div class="kuai" style="background: #69b6ff"></div>
        <span>变电站</span>
      </div>
      <div class="qr_block" @click="index6Click()">
        <img v-show="index6 != 0" src="./img/wxz.png" />
        <img v-show="index6 == 0" src="./img/xz.png" />
        <div class="kuai" style="background: #ffed4e"></div>
        <span>线路</span>
      </div>
      <div class="qr_block" @click="index7Click()">
        <img v-show="index7 != 0" src="./img/wxz.png" />
        <img v-show="index7 == 0" src="./img/xz.png" />
        <div class="kuai" style="background: #ffa79d"></div>
        <span>微网</span>
      </div>
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
      index5: -1,
      index6: -1,
      index7: -1,
      objecttype: [],
      datatype: [],
    };
  },
  methods: {
    index1Click() {
      if (this.index1 == -1) {
        this.index1 = 0;
        this.datatype.push("power");
      } else {
        this.index1 = -1;
        this.datatype = this.datatype.filter((item) => item !== "power");
      }
      this.panoramicMonitoring();
    },
    index2Click() {
      if (this.index2 == -1) {
        this.index2 = 0;
        this.datatype.push("electricquantity");
      } else {
        this.index2 = -1;
        this.datatype = this.datatype.filter(
          (item) => item !== "electricquantity"
        );
      }
      this.panoramicMonitoring();
    },
    index3Click() {
      if (this.index3 == -1) {
        this.index3 = 0;
        this.datatype.push("voltage");
      } else {
        this.index3 = -1;
        this.datatype = this.datatype.filter((item) => item !== "voltage");
      }
      this.panoramicMonitoring();
    },
    index4Click() {
      if (this.index4 == -1) {
        this.index4 = 0;
        this.datatype.push("electricity");
      } else {
        this.index4 = -1;
        this.datatype = this.datatype.filter((item) => item !== "electricity");
      }
      this.panoramicMonitoring();
    },
    index5Click() {
      if (this.index5 == -1) {
        this.index5 = 0;
        this.objecttype.push("HStation");
      } else {
        this.index5 = -1;
        this.objecttype = this.objecttype.filter((item) => item !== "HStation");
      }
      this.panoramicMonitoring();
    },
    index6Click() {
      if (this.index6 == -1) {
        this.index6 = 0;
        this.objecttype.push("LineFile");
      } else {
        this.index6 = -1;
        this.objecttype = this.objecttype.filter((item) => item !== "LineFile");
      }
      this.panoramicMonitoring();
    },
    index7Click() {
      if (this.index7 == -1) {
        this.index7 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.index7 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },
    panoramicMonitoring() {
      let v = {
        objecttype: this.objecttype,
        datatype: this.datatype,
      };
      let data = {
        functionName: "PanoramicMonitoring",
        functionParameters: [
          {
            key: "PanoramicMonitoring",
            value: JSON.stringify(v),
          },
        ],
      };
      console.log(data);
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
  },
};
</script>

<style scoped>
.qjRights {
  width: 202px;
  height: 209px;
  position: absolute;
  right: 40px;
  bottom: 25px;
  background: url("img/r1.png") no-repeat;
  background-size: 100% 100% !important;
}
.qjRights2 {
  height: 169px !important;
  bottom: 250px !important;
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
