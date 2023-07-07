<template>
  <div class="mbgl">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">告警详情（重过载）</span>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>告警时间：</span>
          </div>
          <div class="rights">
            <span>2021.12.14 15:25:56</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>告警等级：</span>
          </div>
          <div class="rights">
            <span>紧急告警</span>
          </div>
        </div>
      </div>

      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>电压等级：</span>
          </div>
          <div class="rights">
            <span>35kV</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>告警名称：</span>
          </div>
          <div class="rights">
            <span>m-5456624</span>
          </div>
        </div>
      </div>

      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>位置信息：</span>
          </div>
          <div class="rights">
            <span>m-5456624</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>上报设施：</span>
          </div>
          <div class="rights">
            <span>m-5456624</span>
          </div>
        </div>
      </div>

      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>有功功率：</span>
          </div>
          <div class="rights">
            <span>30</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>无功功率：</span>
          </div>
          <div class="rights">
            <span>150</span>
          </div>
        </div>
      </div>

      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>电流：</span>
          </div>
          <div class="rights">
            <span>62</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>负载：</span>
          </div>
          <div class="rights">
            <span>99</span>
          </div>
        </div>
      </div>
      <div class="l_btn l_btn2">
        <span>解除告警</span>
      </div>
      <div class="l_btn">
        <span>启动预案</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mbgl",
};
</script>

<style scoped>
.mbgl {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}

.jr_block {
  width: 100%;
  height: 489px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
}
.jr_block2 {
  height: 386px !important;
}
.jr_block3 {
  height: 259px !important;
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
.j_item {
  width: 364px;
  height: 66px;
  margin-left: 8px;
  margin-top: 6px;
  background: url("img/jbgitem.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  justify-content: space-between;
}
.j_item > .items {
  width: 170px;
  height: 100%;
  margin-left: 6px;
  display: flex;
  justify-content: space-between;
}
.j_item > .items > .lefts {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
}
.j_item > .items > .lefts > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #6df0ff;
}
.j_item > .items > .rights {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
}
.j_item > .items > .rights > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #d8d8d8;
}
</style>
<style scoped>
.l_btn {
  width: 105px;
  height: 30px;
  position: absolute;
  right: 7px;
  bottom: 27px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.l_btn2 {
  right: 138px;
  bottom: 27px;
}
.l_btn > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
.l_btn:hover {
  background: url("img/d_btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.l_btn:hover > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
</style>
