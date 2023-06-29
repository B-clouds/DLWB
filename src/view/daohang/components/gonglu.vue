<template>
  <div class="gonglu">
    <div class="g_lefts"></div>
    <div class="g_rights"></div>
  </div>
</template>

<script>
export default {
  name: "gonglu",
};
</script>

<style scoped>
.g_lefts {
  width: 576px;
  height: 513px;
  position: fixed;
  left: 14px;
  top: 101px;
  background: url("img/g_left.png") no-repeat;
  background-size: 100% 100%;
}
.g_rights {
  width: 238px;
  height: 239px;
  position: fixed;
  right: 21px;
  bottom: 26px;
  background: url("img/g_right.png") no-repeat;
  background-size: 100% 100%;
}
</style>