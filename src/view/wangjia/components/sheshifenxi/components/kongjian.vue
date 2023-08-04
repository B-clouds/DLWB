<template>
  <div class="wuli">
    <div class="jcxx">
      <div class="j_titles">
        <span>运行参数</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>供电区域：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.gdqy }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>运行容量：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.rl }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>电压等级：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.dydj }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>布置方式：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.bzfs }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>是否智能变电站：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.znsb | sfzn }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>是否枢纽 站：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.snsb | sfzn }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>变电站 重要级别：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.zydj }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>是否农网：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.nw | sfzn }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>是否集中 监控：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.jzjk | sfzn }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>投运日期：</span>
          </div>
          <div class="rights">
            <span>{{ rightData.tyrq }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>退运日期:</span>
          </div>
          <div class="rights">
            <span>{{ rightData.tuiyrq }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kongjian",
  data() {
    return {
      rightData: {},
    };
  },
  mounted() {
    this.getJBXX();
  },
  filters: {
    sfzn(e) {
      if (e == "1") {
        return "是";
      } else {
        return "否";
      }
    },
  },
  activated() {},
  methods: {
    getJBXX() {
      this.$axios
        .get(window.zfjbxx, {
          params: {
            sssb: window.ccOid,
            twinType: "1000",
          },
        })
        .then((res) => {
          this.rightData = res.data.data[0];
        })
        .catch((error) => {});
    },
  },
};
</script>

<style scoped>
.wuli {
  width: 379px;
  height: 90%;
  position: fixed;
  right: 11px;
  top: 125px;
}
.jcxx {
  width: 100%;
  height: 500px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.j_titles {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.kong {
  width: 100%;
  height: 40px;
}
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
  height: 30%;
  margin-top: 13%;
}
.j_item > .items > .rights > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #d8d8d8;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap !important;
}
</style>
<style scoped>
.ddxx {
  width: 100%;
  height: 266px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 20px;
}
</style>
