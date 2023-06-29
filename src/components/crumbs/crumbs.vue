<template>
  <div class="crumbs">
    <span>{{ one }}</span>
    <div class="kong">
      <span>{{ right1 }}</span>
    </div>
    <span>{{ two }}</span>
    <div class="kong">
      <span>{{ right2 }}</span>
    </div>
    <span class="spans">{{ three }}</span>
  </div>
</template>

<script>
export default {
  name: "crumbs",
  data() {
    return {
      one: "",
      two: "",
      three: "",
      right1: "",
      right2: "",
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("setCrumbs", (e) => {
      that.one = e.one;
      that.two = e.two;
      that.three = e.three;
      that.right1 = e.right1;
      that.right2 = e.right2;
    });
  },
};
</script>

<style scoped>
.crumbs {
  min-width: 202px;
  height: 30px;
  position: fixed;
  z-index: 999;
  left: 9px;
  top: 53px;
  display: flex;
  align-items: center;
}
.crumbs > span {
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #8291a9;
}
.kong {
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kong > span {
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #8291a9;
}
.spans {
  color: #ffffff !important;
}
</style>