<template>
  <div class="wuli">
    <!-- title -->
    <div class="w_title">
      <span>电缆物理信息</span>
    </div>
    <div class="wbb">
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">电缆ID:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="obj_id" placement="top-start">
              <span class="span2">{{ obj_id }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">设备编码:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="sbbm" placement="top-start">
              <span class="span2">{{ sbbm }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">电缆名称:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="zzmc" placement="top-start">
              <span class="span2">{{ zzmc }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">所属线路:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="ssxl" placement="top-start">
              <span class="span2">{{ ssxl }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">电压等级:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="dydj" placement="top-start">
              <span class="span2">{{ dydj }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">起点类型:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qdsblx" placement="top-start">
              <span class="span2">{{ qdsblx }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">起点ID:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qdsb" placement="top-start">
              <span class="span2">{{ qdsb }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">起点名称:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qdwzmc" placement="top-start">
              <span class="span2">{{ qdwzmc }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">起点位置:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qdwz" placement="top-start">
              <span class="span2">{{ qdwz }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">终点类型:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qdsblx" placement="top-start">
              <span class="span2">{{ qdsblx }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">终点ID:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="zdsb" placement="top-start">
              <span class="span2">{{ zdsb }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">终点名称:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="zdwzmc" placement="top-start">
              <span class="span2">{{ zdwzmc }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">终点位置:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="zdwz" placement="top-start">
              <span class="span2">{{ zdwz }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">所属地市:</span>
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
            <span class="span1">运维单位:</span>
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
            <span class="span1">投运日期:</span>
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
            <span class="span1">退运日期:</span>
          </div>
          <span class="span2"></span>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">模型状态:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="fbzt" placement="top-start">
              <span class="span2">{{ fbzt }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">电缆长度:</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="cd" placement="top-start">
              <span class="span2">{{ cd }}</span>
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
      obj_id: "", //电缆ID
      sbbm: "", //设备编码
      zzmc: "", //电缆名称
      ssxl: "", //所属线路
      dydj: "", //电压等级
      qdsblx: "", //起点类型
      qdsb: "", //起点ID
      qdwzmc: "", //起点名称
      qdwz: "", //起点位置
      qdsblx: "", //终点类型
      zdsb: "", //终点ID
      zdwzmc: "", //终点名称
      zdwz: "", //终点位置
      ssds: "", //所属地市
      ywdw: "", //运维单位
      tyrq: "", //投运日期
      fbzt: "", //模型状态
      cd: "", //长度
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObj", (e) => {
      that.obj_id = e.obj_id;
      that.sbbm = e.sbbm;
      that.zzmc = e.zzmc;
      that.ssxl = e.ssxl;
      that.dydj = e.dydj;
      that.qdsblx = e.qdsblx;
      that.qdsb = e.qdsb;
      that.qdwzmc = e.qdwzmc;
      that.qdwz = e.qdwz;
      that.qdsblx = e.qdsblx;
      that.zdsb = e.zdsb;
      that.zdwzmc = e.zdwzmc;
      that.zdwz = e.zdwz;
      that.ssds = e.ssds;
      that.ywdw = e.ywdw;
      that.tyrq = e.tyrq;
      that.fbzt = e.fbzt;
      that.cd = e.cd;
      that.fbzt = e.fbzt;
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
  height: 900px;
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
.w_block > .block > .right {
  width: 300px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
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