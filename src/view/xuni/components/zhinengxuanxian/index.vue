<template>
  <div class="znxx">
    <znxxLeft />
    <znxxRight />
    <div class="zwf"></div>
  </div>
</template>

<script>
import znxxLeft from "./components/znxxLeft.vue";
import znxxRight from "./components/znxxRight.vue";
export default {
  name: "zhinengxuanxian",
  components: {
    znxxLeft,
    znxxRight,
  },
};
</script>

<style scoped>
.znxx {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.zwf {
  width: 367px;
  height: 77px;
  background: url("img/zwf.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  left: 777px;
  bottom: 4px;
}
</style>
