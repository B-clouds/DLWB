<template>
  <div class="dianwang">
    <!-- 占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "dianwang",
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
.dianwang {
  width: 100%;
  height: 100%;
}
</style>