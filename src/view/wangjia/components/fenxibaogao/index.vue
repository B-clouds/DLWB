<template>
  <div class="fenxibaogao">
    <div class="bg" />
  </div>
</template>

<script>
export default {
  name: "fenxibaogao",
};
</script>

<style scoped>
.fenxibaogao {
  width: 100%;
  height: 100%;
  position: relative;
}
.bg {
  position: absolute;
  left: 10px;
  top: 94px;
  width: 1881px;
  height: 985px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
