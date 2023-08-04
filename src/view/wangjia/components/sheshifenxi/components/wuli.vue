<template>
  <div class="wuli">
    <!-- 基础信息 -->
    <div class="jcxx">
      <div class="j_titles">
        <span>基础信息</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>设备标识：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbbs }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备编码：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbbm }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>站房类型：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sblx }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>所属地方：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.ssds }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>站房名称：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbmc }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>站房地址：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbdz }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>占地面积：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.zdmj }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>建筑面积：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.zdmj }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>资产性质：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.zcxz }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>资产单位：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.zcdw }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 调度信息 -->
    <div class="ddxx">
      <div class="j_titles">
        <span>调度信息</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>调度ID：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.ddid }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备名称：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbmc }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>调度大区：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.dddq }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>调度单位：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.dddw }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>是否满足 N-1：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.n_1 | sfn_1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wuli",
  data() {
    return {
      leftData: {},
    };
  },
  activated() {},
  mounted() {
    let that = this;
    that.getJBXX();
    that.$bus.$on("detiles2", (e) => {
      that.getDetail(e);
    });
  },
  filters: {
    sfn_1(e) {
      if (e == "1") {
        return "是";
      } else {
        return "否";
      }
    },
  },
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
          this.leftData = res.data.data[0];
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
  left: 11px;
  top: 125px;
}
.jcxx {
  width: 100%;
  height: 410px;
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
