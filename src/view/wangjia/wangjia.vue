<template>
  <div class="wangjia">
    <!-- 占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "wangjia",
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
.wangjia {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>