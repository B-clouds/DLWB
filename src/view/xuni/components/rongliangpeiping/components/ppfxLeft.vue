<template>
  <div class="zdfxLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>
    <div class="jr_block">
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
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span>区域负荷预测</span>
      </div>
      <div class="qyfh">
        <fhyc_echarts />
      </div>
    </div>
  </div>
</template>

<script>
import fhyc_echarts from "./echarts/fhyc_echarts.vue";
export default {
  name: "zdfxLeft",
  components: {
    fhyc_echarts,
  },
  data() {
    return {
      origData:{},
      baseData:{},
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

  beforeDestroy() {
    this.$bus.$off("sendId")
  },
  mounted() {
    this.watchId()
  },
  methods: {
    watchId(){
      let that = this
      setTimeout(()=>{
        that.$bus.$on("sendId", (e) => {
          that.origData = e;
          // alert('接受成功')
          console.log(e)
          // console.log(11111+e)
          that.baseData={}
          that.getBaseData()
        })
      },0)

    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastUserStatus", {
            // .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisContactAnalysis", {
            params: {
              areaId:this.origData.id,
              // type:this.selectId?this.selectId:0
            },
          }).then(res=>{
            this.baseData=res.data.data[0]
          })
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
  height: 272px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
}
.jr_block2 {
  height: 284px !important;
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
  height: 31px;
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
.d_btn {
  width: 105px;
  height: 30px;
  position: absolute;
  right: 27px;
  bottom: 13px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
.qyfh {
  width: 100%;
  height: 240px;
}
</style>
