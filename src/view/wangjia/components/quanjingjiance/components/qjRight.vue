<template>
  <div class="qjRight">
    <!-- <div class="qjRights">
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
    </div> -->

    <!-- <div class="qjRights qjRights2">
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
    </div> -->
    <!-- 监测数据 -->
    <div class="jiance">
      <div class="tjs">
        <span>监测数据</span>
      </div>
      <div
        class="jcblock"
        @click="index1Click()"
        :class="index1 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img1.png" />
        <span>功率</span>
      </div>
      <div
        class="jcblock"
        @click="index2Click()"
        :class="index2 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img2.png" />
        <span>电量</span>
      </div>
      <div
        class="jcblock"
        @click="index3Click()"
        :class="index3 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img3.png" />
        <span>电压</span>
      </div>
      <div
        class="jcblock"
        @click="index4Click()"
        :class="index4 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img4.png" />
        <span>电流</span>
      </div>
      <div
        class="jcblock"
        @click="index8Click()"
        :class="index8 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img5.png" />
        <span>负载率</span>
      </div>
      <div
        class="jcblock"
        @click="index9Click()"
        :class="index9 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img6.png" />
        <span>利用小时</span>
      </div>
    </div>

    <!-- 监测对象 -->
    <div class="jiance2">
      <div class="tjs">
        <span>监测对象</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="index5Click()"
        :class="index5 == 0 ? 'jcblock2' : ''"
      >
        <span>变电站</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="index6Click()"
        :class="index6 == 0 ? 'jcblock2' : ''"
      >
        <span>线路</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="index7Click()"
        :class="index7 == 0 ? 'jcblock2' : ''"
      >
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

      index8: -1,
      index9: -1,
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
    index8Click() {
      if (this.index8 == -1) {
        this.index8 = 0;
        this.datatype.push("load");
      } else {
        this.index8 = -1;
        this.datatype = this.datatype.filter((item) => item !== "load");
      }
      this.panoramicMonitoring();
    },
    index9Click() {
      if (this.index9 == -1) {
        this.index9 = 0;
        this.datatype.push("servicetime");
      } else {
        this.index9 = -1;
        this.datatype = this.datatype.filter((item) => item !== "servicetime");
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
<style scoped>
.jiance {
  width: 202px;
  height: 345px;
  position: absolute;
  bottom: 19px;
  right: 20px;
  background: url("img/bjs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jiance2 {
  width: 202px;
  height: 201px;
  position: absolute;
  bottom: 19px;
  right: 234px;
  background: url("img/bjs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tjs {
  width: 100%;
  height: 40px;
  background: url("img/tjs.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.tjs > span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 38px;
}
.jcblock {
  width: 179px;
  height: 46px;
  margin-left: 12px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  background: url("img/bj1.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.jcblock2 {
  background: url("img/bj2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jcblocks {
  justify-content: center !important;
}
.jcblock > img {
  width: 14px;
  height: 12px;
  margin-left: 40px;
  margin-bottom: 2px;
  margin-right: 10px;
}
.jcblock > span {
  font-family: Source Han Sans SC;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
}
</style>
