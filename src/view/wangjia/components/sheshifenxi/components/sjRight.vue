<template>
  <div class="sjRight">
    <div class="blocks">
      <img src="./img/l1.png" />
    </div>
    <div class="blocks">
      <img src="./img/l2.png" />
    </div>
    <div class="blocks">
      <img src="./img/l3.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "sjRight",
};
</script>

<style scoped>
.sjRight {
  width: 458px;
  height: 940px;
  position: fixed;
  right: 14px;
  top: 108px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sjRight > .blocks {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/sjbg.png") no-repeat;
  background-size: 100% 100%;
}
.sjRight > .blocks > img {
  width: 443px;
  height: 286px;
}
</style>