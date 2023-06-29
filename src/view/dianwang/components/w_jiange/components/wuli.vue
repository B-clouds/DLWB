<template>
  <div class="wuli">
    <!-- title -->
    <div class="w_title">
      <span>储能箱运行信息</span>
    </div>
    <div class="wbb">
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">间隔ID</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="jgid" placement="top-start">
              <span class="span2">{{ jgid }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">间隔类型</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="jglx" placement="top-start">
              <span class="span2">{{ jglx }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">间隔名称</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="jgmc" placement="top-start">
              <span class="span2">{{ jgmc }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">所属地市</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="ssds" placement="top-start">
              <span class="span2">{{ ssds }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">运维单位</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="ywdw" placement="top-start">
              <span class="span2">{{ ywdw }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">装机容量</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="zjrl" placement="top-start">
              <span class="span2">{{ zjrl }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">投运日期</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="tyrq" placement="top-start">
              <span class="span2">{{ tyrq }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">退运日期</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="tuiyrq" placement="top-start">
              <span class="span2">{{ tuiyrq }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">间隔编号</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="jgbh" placement="top-start">
              <span class="span2">{{ jgbh }}</span>
            </el-tooltip>
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
      jgid: "", //间隔ID
      jglx: "", //间隔类型
      jgmc: "", //间隔名称
      ssds: "", //所属地市
      ywdw: "", //运维单位
      zjrl: "", //装机容量
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      jgbh: "", //间隔编号
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObj", (e) => {
      that.jgid = e.jgid;
      that.jglx = e.jglx;
      that.jgmc = e.jgmc;
      that.ssds = e.ssds;
      that.ywdw = e.ywdw;
      that.zjrl = e.zjrl;
      that.tyrq = e.tyrq;
      that.tuiyrq = e.tuiyrq;
      that.jgbh = e.jgbh;
    });
  },
  activated() {},
  methods: {},
};
</script>

<style scoped>
.wuli {
  width: 451.38px;
  height: 800px;
  position: fixed;
  left: 20px;
  top: 75.33px;
}
</style>
<style scoped>
.w_title {
  width: 100%;
  height: 47.3px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.w_title > span {
  margin-left: 38.33px;
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  margin-top: -4px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
<style scoped>
.wbb {
  width: 100%;
  height: 732px;
  overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
  display: none;
}
.w_block {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  margin-bottom: 11px;
}
.w_block > .block {
  width: 421.44px;
  height: 100%;
  background: url("img/wbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.w_block > .block > .left {
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 2px;
}
.span1 {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #cecfd0;
}
.span2 {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>