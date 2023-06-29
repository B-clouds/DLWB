<template>
  <div class="mrLeft">
    <div class="j_titles">
      <span>区域选择</span>
    </div>
    <!-- 搜索框 -->
    <div class="ssk">
      <div class="icons"></div>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "mrLeft",
};
</script>

<style scoped>
.mrLeft {
  width: 379px;
  height: 948px;
  position: absolute;
  left: 11px;
  top: 125px;
  background: url("img/left_bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.ssk {
  width: 366px;
  height: 32px;
  margin: 9px 0px 11px 6px;
  background: url("img/Search.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ssk > .icons {
  width: 16px;
  height: 16px;
  background: url("img/icon.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.ssk > span {
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #cacaca;
  margin-left: 4px;
}
</style>
