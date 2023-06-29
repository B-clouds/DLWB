<template>
  <div class="wuli">
    <div class="jcxx">
      <div class="j_titles">
        <span>杆塔物理信息</span>
      </div>
      <div class="kong"></div>
      <div class="j_item">
        <div class="items">
          <div class="lefts">
            <span>杆塔ID：</span>
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
            <span>杆塔名称：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="sbmc" placement="top-start">
              <span>{{ sbmc }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>杆塔类型：</span>
          </div>
          <div class="rights">
            <el-tooltip
              effect="dark"
              :content="Str_TowerType"
              placement="top-start"
            >
              <span>{{ Str_TowerType }} </span>
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
            <el-tooltip
              effect="dark"
              :content="Str_Voltage"
              placement="top-start"
            >
              <span>{{ Str_Voltage }} </span>
            </el-tooltip>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>所属地市：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="Str_City" placement="top-start">
              <span>{{ Str_City }} </span>
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
            <el-tooltip effect="dark" :content="Str_Unit" placement="top-start">
              <span>{{ Str_Unit }} </span>
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
            <span>设备高度：</span>
          </div>
          <div class="rights">
            <el-tooltip effect="dark" :content="Z_UE" placement="top-start">
              <span>{{ Z_UE }} </span>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <!-- title -->
    <!-- <div class="w_title">
            <span>杆塔物理信息</span>
        </div>
        <div class="wbb">
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">杆塔ID</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="oid"
                            placement="top-start"
                        >
                            <span class="span2">{{ oid }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">设备编码</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="obj_id"
                            placement="top-start"
                        >
                            <span class="span2">{{ obj_id }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">杆塔名称</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="sbmc"
                            placement="top-start"
                        >
                            <span class="span2">{{ sbmc }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">杆塔类型</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="Str_TowerType"
                            placement="top-start"
                        >
                            <span class="span2">{{ Str_TowerType }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">电压等级</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="Str_Voltage"
                            placement="top-start"
                        >
                            <span class="span2">{{ Str_Voltage }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">同杆回路</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="sjhlsl"
                            placement="top-start"
                        >
                            <span class="span2">{{ sjhlsl }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">混合方式</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="Str_Mix"
                            placement="top-start"
                        >
                            <span class="span2">{{ Str_Mix }}</span>
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
                        <el-tooltip
                            effect="dark"
                            :content="Str_City"
                            placement="top-start"
                        >
                            <span class="span2">{{ Str_City }}</span>
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
                        <el-tooltip
                            effect="dark"
                            :content="Str_Unit"
                            placement="top-start"
                        >
                            <span class="span2">{{ Str_Unit }}</span>
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
                        <el-tooltip
                            effect="dark"
                            :content="tyrq"
                            placement="top-start"
                        >
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
                        <el-tooltip
                            effect="dark"
                            :content="tuiyrq"
                            placement="top-start"
                        >
                            <span class="span2">{{ tuiyrq }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">模型状态</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="fbzt"
                            placement="top-start"
                        >
                            <span class="span2">{{ fbzt }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block">
                    <div class="left">
                        <span class="span1">设备高度</span>
                    </div>
                    <div class="g_right">
                        <el-tooltip
                            effect="dark"
                            :content="Z_UE"
                            placement="top-start"
                        >
                            <span class="span2">{{ Z_UE }}</span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "wuli",
  data() {
    return {
      oid: "", //杆塔ID
      obj_id: "", //设备编码
      sbmc: "", //杆塔名称
      Str_TowerType: "", //杆塔类型
      Str_Voltage: "", //电压等级
      sjhlsl: "", //同杆回路
      Str_Mix: "", //混合方式
      Str_City: "", //所属地市
      Str_Unit: "", //运维单位
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      fbzt: "", //模型状态
      Z_UE: "", //设备高度
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObj", (e) => {
      that.oid = e.oid;
      that.obj_id = e.obj_id;
      that.sbmc = e.sbmc;
      that.Str_TowerType = e.Str_TowerType;
      that.Str_Voltage = e.dydj;
      that.sjhlsl = e.sjhlsl;
      that.Str_Mix = e.Str_Mix;
      that.Str_City = e.ssds;
      that.Str_Unit = e.Unit;
      that.tyrq = e.tyrq;
      that.tuiyrq = e.tuiyrq;
      that.fbzt = e.fbzt;
      that.Z_UE = e.Z_UE;
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
  height: 932px;
  overflow-y: scroll;
}
.wbb::-webkit-scrollbar {
  display: none;
}
.w_block {
  width: 100%;
  min-height: 46px;
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
