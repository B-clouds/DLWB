<template>
  <div class="yhSubRight">
    <div class="tl">
      <div class="tl_item">
        <i class="tl_icon"></i>
        <span class="tl_name">普通</span>
      </div>
      <div class="tl_item tl_item2">
        <i class="tl_icon tl_icon2"></i>
        <span class="tl_name">大用户</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yhSubRight",
  components: {},
  methods: {},
};
</script>

<style scoped>
.yhSubRight {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  right: 10px;
}
.tl {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 237px;
  height: 169px;
  background: url(img/tl.png) no-repeat;
  background-size: 100% 100%;
}
.tl_item {
  position: absolute;
  bottom: 55px;
  left: 77px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.tl_item2 {
  bottom: 8px;
}
.tl_icon {
  width: 14px;
  height: 14px;
  background: #9dccff;
}
.tl_icon2 {
  background: #ffed4e;
}
.tl_name {
  margin-left: 13px;
  margin-top: -2px;
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>
