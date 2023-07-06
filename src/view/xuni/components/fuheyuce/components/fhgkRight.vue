<template>
  <div class="fhgkRight">
    <!-- 负荷趋势-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">负荷趋势</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  name: "fhgkRight",
  data() {
    return {};
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.fhgkRight {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 423px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
  position: relative;
}
.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  margin-top: 6px;
  margin-left: 6px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0px;
  color: #d8f0ff;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>