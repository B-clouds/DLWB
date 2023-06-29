<template>
  <div class="xinxi">
    <!-- 占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "xinxi",
  components: {},
  data() {
    return {
      show: false,
    };
  },
  created() {},
  mounted() {},
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
  },
  methods: {},
};
</script>

<style scoped>
.xinxi {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: url("img/xBg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>