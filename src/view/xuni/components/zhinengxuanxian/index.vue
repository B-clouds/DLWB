<template>
  <div class="znxx">
    <znxxLeft />
    <znxxRight />
    <!-- 网架电站 -->
    <wjdz />
  </div>
</template>

<script>
import znxxLeft from "./components/znxxLeft.vue";
import znxxRight from "./components/znxxRight.vue";
import wjdz from "@/components/wjdz/index.vue";
export default {
  name: "zhinengxuanxian",
  components: {
    znxxLeft,
    znxxRight,
    wjdz,
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
