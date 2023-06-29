<template>
  <div class="xuni">
    <!-- 占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "xuni",
};
</script>

<style scoped>
.xuni {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
