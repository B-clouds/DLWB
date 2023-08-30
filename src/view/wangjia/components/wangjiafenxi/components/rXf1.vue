<template>
  <div class="qjRight">
    <!-- 诊断数据 -->
    <div class="jiance2" :class="showZuo ? 'zuo2' : ''">
      <div class="tjs">
        <span>诊断数据</span>
      </div>
      <div
        class="jcblock"
        @click="zd1Click()"
        :class="zdIndex1 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img1.png" />
        <span>负载率</span>
      </div>
      <div
        class="jcblock"
        @click="zd2Click()"
        :class="zdIndex2 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img2.png" />
        <span>线损率</span>
      </div>
      <div
        class="jcblock"
        @click="zd3Click()"
        :class="zdIndex3 == 0 ? 'jcblock2' : ''"
      >
        <img src="./img/img3.png" />
        <span>联络率</span>
      </div>
    </div>
    <!-- 线路属性 -->
    <div class="jiance" :class="showZuo ? 'zuo' : ''">
      <div class="tjs">
        <span>线路属性</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl1Click()"
        :class="xlIndex1 == 0 ? 'jcblock2' : ''"
      >
        <span>单链式结构</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl2Click()"
        :class="xlIndex2 == 0 ? 'jcblock2' : ''"
      >
        <span>双链式结构</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl3Click()"
        :class="xlIndex3 == 0 ? 'jcblock2' : ''"
      >
        <span>单辐射</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl4Click()"
        :class="xlIndex4 == 0 ? 'jcblock2' : ''"
      >
        <span>双辐射</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl5Click()"
        :class="xlIndex5 == 0 ? 'jcblock2' : ''"
      >
        <span>单环网</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="xl6Click()"
        :class="xlIndex6 == 0 ? 'jcblock2' : ''"
      >
        <span>双环网</span>
      </div>
    </div>
    <!-- 配变半径 -->
    <div class="jiance3" :class="showZuo ? 'zuo2' : ''">
      <div class="tjs">
        <span>配变半径</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="pb1Click()"
        :class="pbIndex1 == 0 ? 'jcblock2' : ''"
      >
        <span>300米以下</span>
      </div>
      <div
        class="jcblock jcblocks"
        @click="pb2Click()"
        :class="pbIndex2 == 0 ? 'jcblock2' : ''"
      >
        <span>500米以上</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qjRight",
  data() {
    return {
      zdIndex1: -1,
      zdIndex2: -1,
      zdIndex3: -1,
      xlIndex1: -1,
      xlIndex2: -1,
      xlIndex3: -1,
      xlIndex4: -1,
      xlIndex5: -1,
      xlIndex6: -1,
      pbIndex1: -1,
      pbIndex2: -1,
      objecttype: [],
      datatype: [],
      showZuo: false,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("showZuo", (e) => {
      that.showZuo = e;
    });
  },
  methods: {
    zd1Click() {
      if (this.zdIndex1 == -1) {
        this.zdIndex1 = 0;
        this.datatype.push("power");
      } else {
        this.zdIndex1 = -1;
        this.datatype = this.datatype.filter((item) => item !== "power");
      }
      this.panoramicMonitoring();
    },
    zd2Click() {
      if (this.zdIndex2 == -1) {
        this.zdIndex2 = 0;
        this.datatype.push("electricquantity");
      } else {
        this.zdIndex2 = -1;
        this.datatype = this.datatype.filter(
          (item) => item !== "electricquantity"
        );
      }
      this.panoramicMonitoring();
    },
    zd3Click() {
      if (this.zdIndex3 == -1) {
        this.zdIndex3 = 0;
        this.datatype.push("voltage");
      } else {
        this.zdIndex3 = -1;
        this.datatype = this.datatype.filter((item) => item !== "voltage");
      }
      this.panoramicMonitoring();
    },

    xl1Click() {
      if (this.xlIndex1 == -1) {
        this.xlIndex1 = 0;
        this.objecttype.push("HStation");
      } else {
        this.xlIndex1 = -1;
        this.objecttype = this.objecttype.filter((item) => item !== "HStation");
      }
      this.panoramicMonitoring();
    },
    xl2Click() {
      if (this.xlIndex2 == -1) {
        this.xlIndex2 = 0;
        this.objecttype.push("LineFile");
      } else {
        this.xlIndex2 = -1;
        this.objecttype = this.objecttype.filter((item) => item !== "LineFile");
      }
      this.panoramicMonitoring();
    },
    xl3Click() {
      if (this.xlIndex3 == -1) {
        this.xlIndex3 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.xlIndex3 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },

    xl4Click() {
      if (this.xlIndex4 == -1) {
        this.xlIndex4 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.xlIndex4 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },
    xl5Click() {
      if (this.xlIndex5 == -1) {
        this.xlIndex5 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.xlIndex5 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },
    xl6Click() {
      if (this.xlIndex6 == -1) {
        this.xlIndex6 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.xlIndex6 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },

    pb1Click() {
      if (this.pbIndex1 == -1) {
        this.pbIndex1 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.pbIndex1 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },
    pb2Click() {
      if (this.pbIndex2 == -1) {
        this.pbIndex2 = 0;
        this.objecttype.push("MStationing");
      } else {
        this.pbIndex2 = -1;
        this.objecttype = this.objecttype.filter(
          (item) => item !== "MStationing"
        );
      }
      this.panoramicMonitoring();
    },
    panoramicMonitoring() {
      // let v = {
      //   objecttype: this.objecttype,
      //   datatype: this.datatype,
      // };
      // let data = {
      //   functionName: "PanoramicMonitoring",
      //   functionParameters: [
      //     {
      //       key: "PanoramicMonitoring",
      //       value: JSON.stringify(v),
      //     },
      //   ],
      // };
      // console.log(data);
      // ue.interface.broadcast("PSAPI", JSON.stringify(data));
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
.zuo {
  right: 400px !important;
}
.zuo2 {
  right: 620px !important;
}
.jiance {
  width: 202px;
  height: 355px;
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
.jiance3 {
  width: 202px;
  height: 149px;
  position: absolute;
  bottom: 224px;
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
