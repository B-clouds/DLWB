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
            <span>设备名称：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbbs }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>主线名称：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbbm }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>绝缘介质：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.jsfs }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>是否农网：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.sbmc }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>电压等级：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.jkjxfs }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>使用性质：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.dljxfs }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>所属杆塔：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.xlxz }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>维护班组：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.xlcd }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>专业分类：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.qddz }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>重要程度：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.zddz }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>地区特征：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.ssds }}</span>
          </div>
        </div>
        <div class="items"></div>
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
            <span>调度管辖权：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.ddid }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>调度操作权：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.ssdd }}</span>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>调度许可权：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.dddq }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>调度监控权：</span>
          </div>
          <div class="rights">
            <span>{{ leftData.dddw }}</span>
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
  filters: {
    sfn_1(e) {
      if (e == "1") {
        return "是";
      } else {
        return "否";
      }
    },
  },
  mounted() {
    let that = this;
    that.getJBXX();
    that.$bus.$on("detiles2", (e) => {
      that.getDetail(e);
    });
  },
  activated() {},
  methods: {
    getJBXX() {
      this.$axios
        .get(window.zfjbxx, {
          params: {
            sssb: window.ccOid,
            twinType: "4000",
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
  height: 484px;
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
.j_item > .items > .rights::-webkit-scrollbar {
  display: none;
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
  height: 196px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 20px;
}
</style>
