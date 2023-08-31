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
        <span>选址推荐区域</span>
      </div>
      <div class="qybg">
        <span class="span1">区域名称：</span>
        <span class="span2">{{ dataInfo.name }}</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">单元编号</span>
        </div>
        <div class="blocks">
          <span class="span1">容量距</span>
        </div>
        <div class="blocks">
          <span class="span1">推荐指数</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="blocks">
            <span class="span2">{{ item.dybh }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.rlj }}</span>
          </div>
          <div class="blocks">
            <div>
              <img
                v-for="(item, index) in item.tjzs"
                :key="index"
                src="./img/xx2.png"
              />
            </div>
            <div>
              <img
                v-for="(item, index) in 5 - item.tjzs"
                :key="index"
                src="./img/xx1.png"
              />
            </div>
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
      dataInfo: {},
      dataList: [
        { dybh: "xxxx", rlj: "xxxx", tjzs: 5 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 4 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 4 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 3 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 1 },
        { dybh: "xxxx", rlj: "xxxx", tjzs: 2 },
      ],
    };
  },
  mounted() {
    console.log(this.id, "======");
    this.areaName = sessionStorage.getItem("xzdr_areaName");
    this.SiteSelectionRecommendationFn();
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
    async SiteSelectionRecommendationFn() {
      this.$axios
        .get(
          window.wgApiUrl +
            "/siteSelection/siteSelectionSiteSelectionRecommendation",
          {
            params: {
              areaId: "10000",
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              console.log(res, "res12325S");
              this.dataInfo = res.data.data;
              this.dataList = res.data.data.result.map((item) => {
                return Object.assign(
                  {},
                  {
                    dybh: item.dybh,
                    rlj: item.rlj,
                    tjzs: Number(item.tjzs),
                  }
                );
              });
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
.qybg {
  width: 352px;
  height: 44px;
  margin-top: 7px;
  margin-left: 13px;
  background: url("img/qybg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.qybg > .span1 {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 13px;
  margin-right: 25px;
}
.qybg > .span2 {
  font-family: Source Han Sans SC;
  font-size: 18px;
  font-weight: bold;
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
  width: 33%;
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
