<template>
  <div class="wuli">
    <div class="jcxx">
      <div class="j_titles">
        <span>基础信息</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>站房ID：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="oid" placement="top-start">
              <span>{{ oid }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备编码：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="obj_id" placement="top-start">
              <span>{{ obj_id }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>站房名称：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="bdzmc" placement="top-start">
              <span>{{ bdzmc }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>站房类型：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="dzlx" placement="top-start">
              <span>{{ dzlx }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>电压等级：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="dydj" placement="top-start">
              <span>{{ dydj }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>所属地市：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="txssds" placement="top-start">
              <span>{{ txssds }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>运维单位：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="ywdw" placement="top-start">
              <span>{{ ywdw }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>投运日期：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="tyrq" placement="top-start">
              <span>{{ tyrq }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>退运日期：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="tuiyrq" placement="top-start">
              <span>{{ tuiyrq }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>模型状态：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="fbzt" placement="top-start">
              <span>{{ fbzt }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>模型主键：</span>
          </div>
          <div class="rights">
            <span></span>
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
      oid: "", //变电站图形ID
      obj_id: "", //变电站档案ID
      bdzmc: "", //变电站名称
      dzlx: "", //电站类型
      dydj: "", //变电站电压等级
      txssds: "", //图形变电站所属地市
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      fbzt: "", //模型状态
      ywdw: "", //运维单位
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObj", (e) => {
      that.oid = e.oid;
      that.obj_id = e.obj_id;
      that.bdzmc = e.bdzmc;
      that.dzlx = e.dzlx;
      that.dydj = e.dydj;
      that.txssds = e.txssds;
      that.tyrq = e.tyrq;
      that.fbzt = e.fbzt;
      that.tuiyrq = e.tuiyrq;
      that.ywdw = e.ywdw;
    });
  },
  activated() {},
  methods: {},
};
</script>

<style scoped>
.wuli {
  width: 379px;
  height: 480px;
  position: fixed;
  left: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 100%;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
