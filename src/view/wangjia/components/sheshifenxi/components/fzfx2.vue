<template>
  <div class="yyfx2">
    <!-- 返回默认页面 -->
    <div class="fh_mr" @click="fhMrClick"></div>
    <div class="s_show1" v-show="!showXX"></div>
    <div class="s_show2" v-show="!showXX"></div>
    <!-- 信息缩放按钮 -->
    <div class="xxsf" :class="showXX ? 'xxsf2' : ''" @click="sfxxClick"></div>
    <div class="yy_block">
      <div class="jcxx">
        <div class="dxtms" @click="changeDXT"></div>
        <div class="j_titles">
          <span class="span1">{{ span1 }}</span>
          <span class="span2" @click="spanClick">{{ span2 }}</span>
        </div>
        <div class="shaixuan">
          <div class="sx_item">
            <span class="span1">设备类型</span>
            <!-- 设备类型 -->
            <div class="selectss">
              <el-select
                v-model="dy_value"
                @visible-change="dyClick"
                placeholder=""
              >
                <el-option
                  v-for="item in dianya"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!dy_show" src="./img/xia.png" />
              <img v-show="dy_show" src="./img/shang.png" />
            </div>
            <span class="span2">统计类型</span>
            <div class="selectss">
              <el-select
                v-model="cj_value"
                @visible-change="cjClick"
                placeholder=""
              >
                <el-option
                  v-for="item in chuangjian"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!cj_show" src="./img/xia.png" />
              <img v-show="cj_show" src="./img/shang.png" />
            </div>
            <span class="span2">频率</span>
            <div class="selectss">
              <el-select
                v-model="jd_value"
                @visible-change="jdClick"
                placeholder=""
              >
                <el-option
                  v-for="item in jiedian"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!jd_show" src="./img/xia.png" />
              <img v-show="jd_show" src="./img/shang.png" />
            </div>
            <span class="span2">投运日期</span>
            <div class="selectss">
              <el-date-picker
                v-model="value1"
                @change="dateClick"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择投运运日期"
              >
              </el-date-picker>
            </div>
            <span class="span2">退运日期</span>
            <div class="selectss">
              <el-date-picker
                v-model="value2"
                @change="dateClick2"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择退运日期"
              >
              </el-date-picker>
            </div>
            <div class="cxbtn"></div>
          </div>
        </div>
        <!-- 层级切换按钮 -->
        <div class="cengji">
          <div
            class="cj_item"
            :class="{ cj_item2: cjIndex == index }"
            @click="cjClick2(index)"
            v-for="(item, index) in cengjiList"
            :key="index"
          >
            <span>{{ item }}</span>
          </div>
        </div>
        <!-- 统计数据展示 -->
        <div class="tj_echarts" v-show="showSpan == 0">
          <xt4 />
        </div>
        <!-- 数据明细 -->
        <div class="tj_echarts" v-show="showSpan == 1">
          <sjmxTable2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xt4 from "./echarts/xt4.vue";
import sjmxTable2 from "./table/sjmxTable2";
export default {
  name: "yyfx2",
  components: {
    xt4,
    sjmxTable2,
  },
  data() {
    return {
      span1: "统计数据展示", //统计数据展示
      span2: "数据明细", //数据明细
      showSpan: 0, //0：统计数据展示  1：数据明细
      // ------------------------------设备类型--------------------------
      dianya: [
        {
          value: "全站",
          label: "全站",
        },
        {
          value: "1号主变",
          label: "1号主变",
        },
        {
          value: "2号主变",
          label: "2号主变",
        },
      ],
      dy_value: "",
      dy_show: "",
      // --------------------------统计类型---------------------------
      chuangjian: [
        {
          value: "负载率",
          label: "负载率",
        },
        {
          value: "轻载次数",
          label: "轻载次数",
        },
        {
          value: "重载次数",
          label: "重载次数",
        },
        {
          value: "过载次数",
          label: "过载次数",
        },
      ],
      cj_value: "",
      cj_show: false,
      // --------------------------频率---------------------------
      jiedian: [
        {
          value: "日内",
          label: "日内",
        },
        {
          value: "日度",
          label: "日度",
        },
        {
          value: "月度",
          label: "月度",
        },
        {
          value: "年度",
          label: "年度",
        },
      ],
      jd_value: "",
      jd_show: false,
      //----------------------------投运、退运----------------------
      value1: "",
      value2: "",
      //---------------------------层级---------------------------------
      cengjiList: ["外观层", "电气层", "暖通层", "消防层", "照明层", "排气层"],
      cjIndex: 0,
      showXX: true,
    };
  },
  methods: {
    // 返回默认页面
    fhMrClick() {
      //   this.$router.push({
      //     path: "/mr",
      //   });
      this.$emit("goJiBen");
    },
    sfxxClick() {
      this.showXX = !this.showXX;
    },
    spanClick() {
      if (this.span2 == "统计数据展示") {
        this.span1 = "统计数据展示";
        this.span2 = "数据明细";
        this.showSpan = 0;
      } else {
        this.span1 = "数据明细";
        this.span2 = "统计数据展示";
        this.showSpan = 1;
      }
    },
    //  0 切换成大图模式, 1 切换成大图模式
    changeDXT() {
      this.$emit("changeDXT2", 1);
    },
    dyClick(e) {
      this.dy_show = e;
    },
    cjClick(e) {
      this.cj_show = e;
    },
    jdClick(e) {
      this.jd_show = e;
    },
    dateClick(e) {},
    dateClick2(e) {},
    // 层级选择切换
    cjClick2(e) {
      this.cjIndex = e;
    },
  },
};
</script>

<style scoped>
.yyfx2 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.yy_block {
  width: 1879px;
  height: 350px;
  position: absolute;
  left: 21px;
  bottom: 11px;
}
.jcxx {
  width: 100%;
  height: 350px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/newJX.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > .span1 {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  margin-left: 21px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  color: #cbc9c9;
  cursor: pointer;
}
.shaixuan {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-end;
}
.sx_item {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
}
.sx_item > .span1 {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 23px;
  margin-right: 14px;
}
.sx_item > .span2 {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 40px;
  margin-right: 14px;
}

.selectss {
  width: 181px;
  height: 34px;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  background: rgba(25, 61, 112, 0.8);
  box-sizing: border-box;
  border: 1px solid #3876b6;
}
.selectss > img {
  position: absolute;
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}
.tj_echarts {
  width: 100%;
  height: 250px;
}
.dxtms {
  width: 82px;
  height: 28px;
  position: absolute;
  top: 6px;
  right: 7px;
  background: url("img/dtms.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: 8;
  cursor: pointer;
}
.cxbtn {
  width: 73px;
  height: 46px;
  background: url("img/xcbtn.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-left: 48px;
  cursor: pointer;
}
.cengji {
  width: 514px;
  height: 29px;
  position: fixed;
  right: 20px;
  bottom: 379px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cj_item {
  width: 72px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/cj1.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.cj_item > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
}
.cj_item2 {
  background: url("img/cj2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.cj_item2 > span {
  color: rgba(255, 255, 255, 1);
}
</style>

<style scoped>
::v-deep .el-select > .el-input > .el-input__inner {
  line-height: 40px !important;
}
.fh_mr {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 125px;
  background: url("img/fh_mr.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}

.xxsf {
  width: 98.5px;
  height: 31px;
  position: absolute;
  right: 9px;
  top: 46px;
  background: url("img/zk.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.xxsf2 {
  background: url("img/zd.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.s_show1 {
  width: 18px;
  height: 142px;
  background: url("img/shou1.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  left: 0px;
}
.s_show2 {
  width: 18px;
  height: 142px;
  background: url("img/shou2.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  right: 0px;
}
</style>
