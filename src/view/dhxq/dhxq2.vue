<template>
  <div class="dhxq2">
    <!-- 右上角按钮 -->
    <div class="rightBtn">
      <div class="blocks1" @click="fanhuiClick"></div>
      <div class="blocks2" @click="sanweiClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dhxq2",
  methods: {
    fanhuiClick() {
      let data = {
        functionName: "fanhuiDaoHang",
        backFunctionName: "",
        functionParameters: [],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      this.$router.push({
        path: "/daohang",
      });
    },
    sanweiClick() {
      let data = {
        functionName: "goSanWei",
        backFunctionName: "",
        functionParameters: [
          {
            key: "ZDX",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      let v = { ChooseType: "ShowCompass", value: true };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      this.$router.push({
        path: "/index",
      });
    },
  },
};
</script>

<style scoped>
.dhxq2 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999999 !important;
}

.rightBtn {
  width: 313px;
  height: 42px;
  position: fixed;
  right: 20px;
  top: 56px;
  display: flex;
  justify-content: space-between;
}
.rightBtn > .blocks1 {
  width: 144px;
  height: 42px;
  background: url("img/fanhui.png") no-repeat;
  background-size: 100% 100%;
}
.rightBtn > .blocks2 {
  width: 144px;
  height: 42px;
  background: url("img/sanwei.png") no-repeat;
  background-size: 100% 100%;
}
</style>
