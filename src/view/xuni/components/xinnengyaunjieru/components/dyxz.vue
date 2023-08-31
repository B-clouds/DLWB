<template>
  <div class="zdfxLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ areaName }}</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span>电源信息</span>
      </div>
      <div class="tjdy">
        <span class="span1">推荐电源</span>
        <span class="span2">{{ PowerInfoData.name }}</span>
        <span class="span3">kwh</span>
      </div>

      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">电压等级</span>
        </div>
        <div class="blocks">
          <span class="span1">设施类型</span>
        </div>
        <div class="blocks">
          <span class="span1">单公里造价</span>
        </div>
        <div class="blocks">
          <span class="span1">预计投资</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in PowerInfoData.result"
          :key="index"
        >
          <div class="blocks">
            <span class="span2">{{ item.dydj }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.sslx }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.dglzj }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.yjtz }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "zdfxLeft",
  components: {},
  data() {
    return {
      areaName: "",
      PowerInfoData: {},
    };
  },
  mounted() {
    console.log(this.id, "======");
    this.areaName = sessionStorage.getItem("areaName");
    this.PowerInfoFn();
  },
  methods: {
    gjlxClick(e) {
      this.gjlx_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
    fanhuiClick() {
      this.$emit("geshihua");
    },
    async PowerInfoFn() {
      this.$axios
        .get(window.wgApiUrl + "/multipleLoad/siteSelectionPowerInfo", {
          params: {
            areaId: "10000",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              console.log(res, "rse23141");
              this.PowerInfoData = res.data.data;
            }
          }
        })
        .catch((error) => {});
    },
  },
};
</script>

<style scoped>
.zdfxLeft {
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
  height: 906px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
}
.jr_block2 {
  height: 252px !important;
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
</style>
<style scoped>
.tjdy {
  width: 298px;
  height: 34px;
  margin-left: 41px;
  margin-top: 22px;
  background: url("img/tjdy.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  justify-content: center;
}
.tjdy > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-right: 14px;
}
.tjdy > .span2 {
  font-family: DIN Alternate;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1.6px;
  color: #ffffff;
  margin-right: 6.7px;
  margin-top: -8px;
}
.tjdy > .span3 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
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
  font-family: Source Han Sans SC;
  font-size: 14px;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  opacity: 0.7;
  font-family: Source Han Sans SC;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
}
.j_t_tr > .blocks > img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 756px;
  overflow-y: scroll;
}
.j_t_table::-webkit-scrollbar {
  display: none;
}
.j_t_bg {
  background: url("img/gblock.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_two {
  width: 100%;
  height: 262px;
}
.jr_three {
  width: 100%;
  height: 218px;
}
</style>
