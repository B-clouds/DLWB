<template>
  <div class="tielu">
    <div class="t_lefts"></div>
    <div class="t_rights"></div>
  </div>
</template>

<script>
export default {
  name: "tielu",
};
</script>

<style scoped>
.t_lefts {
  width: 576px;
  height: 673px;
  position: fixed;
  left: 14px;
  top: 101px;
  background: url("img/t_left.png") no-repeat;
  background-size: 100% 100%;
}
.t_rights {
  width: 238px;
  height: 259px;
  position: fixed;
  right: 21px;
  bottom: 16px;
  background: url("img/t_right.png") no-repeat;
  background-size: 100% 100%;
}
</style>