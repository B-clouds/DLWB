<template>
  <div class="quhuas">
    <div class="blocks b1" @click="xaDetils"></div>
    <div class="blocks b7" @click="czDetils"></div>
    <div class="blocks b8" @click="bdDetils"></div>
    <div class="blocks b3" @click="sjzDetils"></div>
    <div class="blocks b4" @click="hdDetils"></div>
    <div class="blocks b5" @click="hsDetils"></div>
    <div class="blocks b6" @click="xtDetils"></div>
  </div>
</template>

<script>
export default {
  name: "quhua",
  data() {
    return {};
  },
  methods: {
    xaDetils() {
      let data = {
        functionName: "NavigationPage",
        backFunctionName: "goXA",
        functionParameters: [
          {
            key: "XZQH",
            value: "XA",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.goXA = this.goXA;
      this.$emit("showXA");
    },
    goXA() {
      this.$emit("showXA");
    },
    lfDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "LF",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    sjzDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "SJZ",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    hdDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "HD",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    hsDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "HS",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    xtDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "XT",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    czDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "CZ",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    bdDetils() {
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "XZQH",
            value: "BD",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
  },
};
</script>

<style scoped>
.quhuas {
  width: 122px;
  height: 443px;
  position: fixed;
  left: 20px;
  bottom: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quhuas > .blocks {
  width: 122px;
  height: 50px;
  cursor: pointer;
}
.quhuas > .blocks > img {
  width: 100%;
  height: 100%;
}
.b1 {
  background: url("img/p1.png") no-repeat;
  background-size: 100% 100%;
}
.b2 {
  background: url("img/p2.png") no-repeat;
  background-size: 100% 100%;
}
.b3 {
  background: url("img/p3.png") no-repeat;
  background-size: 100% 100%;
}
.b4 {
  background: url("img/p4.png") no-repeat;
  background-size: 100% 100%;
}
.b5 {
  background: url("img/p5.png") no-repeat;
  background-size: 100% 100%;
}
.b6 {
  background: url("img/p6.png") no-repeat;
  background-size: 100% 100%;
}
.b7 {
  background: url("img/p7.png") no-repeat;
  background-size: 100% 100%;
}
.b8 {
  background: url("img/p8.png") no-repeat;
  background-size: 100% 100%;
}
.b1:hover {
  background: url("img/p1a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b2:hover {
  background: url("img/p2a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b3:hover {
  background: url("img/p3a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b4:hover {
  background: url("img/p4a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b5:hover {
  background: url("img/p5a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b6:hover {
  background: url("img/p6a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b7:hover {
  background: url("img/p7a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.b8:hover {
  background: url("img/p8a.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>