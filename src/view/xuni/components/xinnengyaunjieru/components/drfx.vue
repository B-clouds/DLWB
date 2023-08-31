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
        <span>容量信息</span>
      </div>
      <div class="kongs"></div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>年份</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="jidu_value"
              @visible-change="jiduClick"
              placeholder=""
            >
              <el-option
                v-for="item in jidu"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!jidu_show" src="./img/xia.png" />
            <img v-show="jidu_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电压等级</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="dydj_value"
              @visible-change="dydjClick"
              placeholder=""
            >
              <el-option
                v-for="item in dydj"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!dydj_show" src="./img/xia.png" />
            <img v-show="dydj_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>容载比</span>
        </div>
        <div class="jbRight2">
          <input placeholder="请输入..." />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>单个容量</span>
        </div>
        <div class="jbRight2">
          <input placeholder="请输入..." />
        </div>
      </div>
      <div class="d_btn">
        <span>确定</span>
      </div>

      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">时间</span>
        </div>
        <div class="blocks">
          <span class="span1">容量需求</span>
        </div>
        <div class="blocks">
          <span class="span1">新增数量</span>
        </div>
        <div class="blocks">
          <span class="span1">容载比</span>
        </div>
        <div class="blocks">
          <span class="span1">单个容量</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in dataList.result"
          :key="index"
        >
          <div class="blocks">
            <span class="span2">{{ item.sj }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.rlxq }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.xzsl }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.rzb }}</span>
          </div>
          <div class="blocks">
            <span class="span2">{{ item.dgrl }}</span>
          </div>
        </div>
      </div>
      <div class="drbottom">
        <span class="span1">推荐容量</span>
        <span class="span3">{{ dataList.count }}</span>
        <span class="span2">xxx</span>
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
      dataList: [],
      jidu: [
        {
          value: "",
          label: "2022",
        },
      ],
      jidu_value: "",
      jidu_show: "",

      dydj: [
        {
          value: "",
          label: "110kV",
        },
      ],
      dydj_value: "",
      dydj_show: "",
    };
  },

  mounted() {
    console.log(this.id, "------");
    this.areaName = sessionStorage.getItem("areaName");
    this.CapacityInfoFn();
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
    jiduClick(e) {
      this.jidu_show = e;
    },
    dydjClick(e) {
      this.dydj_show = e;
    },
    async CapacityInfoFn() {
      this.$axios
        .get(window.wgApiUrl + "/multipleLoad/siteSelectionCapacityInfo", {
          params: {
            areaId: "10000",
            dgrl: "2",
            dydj: "1",
            nd: "1",
            rzb: "1",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              console.log(res, "res234");
              this.dataList = res.data.data;
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
.kongs {
  width: 100%;
  height: 13px;
}
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-bottom: 15px;
  position: relative;
}
.jbBlock > .jbBtn {
  width: 81px;
  height: 33px;
  position: absolute;
  top: 1px;
  right: 22px;
  background: url("img/btns.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.jbBlock > .jbBtn > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.jbBlock > .jbLeft {
  width: 76px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
  margin-right: 12px;
}
.jbBlock > .jbRight {
  width: 284px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
}
.jbBlock > .jbRight2 {
  width: 273px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  background: rgba(25, 61, 112, 0.8);
  box-sizing: border-box;
  border: 1px solid #3876b6;
}
.inputs > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
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
  width: 20%;
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
  height: 484px;
  overflow-y: scroll;
  margin-bottom: 25px;
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
<style scoped>
.d_btn {
  width: 105px;
  height: 30px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 244px;
  margin-bottom: 33px;
}
.d_btn > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
.d_btn:hover {
  background: url("img/d_btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.d_btn:hover > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
</style>
<style scoped>
.drbottom {
  width: 363px;
  height: 38px;
  margin-left: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: url("img/drbottm.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.drbottom > .span1 {
  position: absolute;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  left: 13px;
  top: 8px;
}
.drbottom > .span2 {
  opacity: 0.65;
  font-family: PingFang SC;
  font-size: 14px;
  color: #ffffff;
  margin-top: 6px;
  margin-right: 19px;
}
.drbottom > .span3 {
  font-family: DIN Alternate;
  font-size: 28px;
  font-weight: bold;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  margin-right: 6px;
}
</style>
