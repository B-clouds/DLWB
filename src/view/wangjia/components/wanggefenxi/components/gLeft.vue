<template>
  <div class="gLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>xxxxx区域名称</span>
      </div>
      <div class="fanhui"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">线路列表</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">线路名称</span>
        </div>
        <div class="blocks">
          <span class="span1">线路长度</span>
        </div>
        <div class="blocks">
          <span class="span1">线路类型</span>
        </div>
        <div class="blocks">
          <span class="span1">电压等级</span>
        </div>
      </div>
      <div class="j_t_table"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gLeft",
};
</script>

<style scoped>
.gLeft {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}
</style>
<style scoped>
.gl_top {
  width: 351px;
  height: 50px;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  background: url("img/gl_bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.gl_top > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 37px;
  margin-right: 5px;
}
.gl_top > .names {
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.gl_top > .names > span {
  font-family: Source Han Sans CN;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.gl_top > .fanhui {
  width: 31px;
  height: 31px;
  background: url("img/fanhui.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_block {
  width: 100%;
  height: 317px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
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
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 18px;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>
<style scoped>
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #bee4ee;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 216px;
  background-color: #fff;
}
</style>
