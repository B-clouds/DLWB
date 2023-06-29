<template>
    <div class="wuli">
        <div class="jcxx">
            <div class="j_titles">
                <span>杆塔运行信息</span>
            </div>
            <div class="kong"></div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>间隔ID：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="qsgt"
                            placement="top-start"
                        >
                            <span>{{ qsgt }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>运行名称：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="gtmc"
                            placement="top-start"
                        >
                            <span>{{ gtmc }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>所属线路：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="ssxl"
                            placement="top-start"
                        >
                            <span>{{ ssxl }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>所属物理杆：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="ssgt"
                            placement="top-start"
                        >
                            <span>{{ ssgt }} </span>
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
                        <el-tooltip
                            effect="dark"
                            :content="Str_City"
                            placement="top-start"
                        >
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
                        <el-tooltip
                            effect="dark"
                            :content="Str_Unit"
                            placement="top-start"
                        >
                            <span>{{ Str_Unit }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>投运日期：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="tyrq"
                            placement="top-start"
                        >
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
                        <el-tooltip
                            effect="dark"
                            :content="tuiyrq"
                            placement="top-start"
                        >
                            <span>{{ tuiyrq }} </span>
                        </el-tooltip>
                    </div>
                </div>
                <div class="items">
                    <div class="lefts">
                        <span>间隔编号：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="Str_ValID"
                            placement="top-start"
                        >
                            <span>{{ Str_ValID }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="j_item">
                <div class="items">
                    <div class="lefts">
                        <span>混合方式：</span>
                    </div>
                    <div class="rights">
                        <el-tooltip
                            effect="dark"
                            :content="Str_Mix"
                            placement="top-start"
                        >
                            <span>{{ Str_Mix }} </span>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div class="w_block">
                <div class="block2">
                    <div class="img">
                        <span class="imgText">保存</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- title -->
        <!-- <div class="w_title">
      <span>杆塔运行信息</span>
    </div>
    <div class="wbb">
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">间隔ID</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="qsgt" placement="top-start">
              <span class="span2">{{ qsgt }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">运行名称</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="gtmc" placement="top-start">
              <span class="span2">{{ gtmc }}</span>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="w_block">
        <div class="block">
          <div class="left">
            <span class="span1">所属线路</span>
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
            <span class="span1">所属物理杆</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="ssgt" placement="top-start">
              <span class="span2">{{ ssgt }}</span>
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
            <el-tooltip effect="dark" :content="Str_Mix" placement="top-start">
              <span class="span2">{{ Str_Mix }}</span>
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
            <span class="span1">所属地市</span>
          </div>
          <div class="g_right">
            <el-tooltip effect="dark" :content="Str_City" placement="top-start">
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
            <el-tooltip effect="dark" :content="Str_Unit" placement="top-start">
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
            <el-tooltip
              effect="dark"
              :content="Str_ValID"
              placement="top-start"
            >
              <span class="span2">{{ Str_ValID }}</span>
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
            qsgt: "", //间隔id
            gtmc: "", //运行名称
            ssxl: "", //所属线路
            ssgt: "", //所属物理杆
            Str_Mix: "", //混合方式
            Str_Voltage: "", //电压等级
            Str_City: "", //所属地市
            Str_Unit: "", //运维单位
            tyrq: "", //投运日期
            tuiyrq: "", //退运日期
            Str_ValID: "", //间隔编号
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("hangObj", (e) => {
            that.qsgt = e.oid;
            that.gtmc = e.sbmc;
            that.ssxl = e.ssxl;
            that.ssgt = e.ssgt;
            that.Str_Mix = e.Str_Mix;
            that.Str_Voltage = e.Str_Voltage;
            that.Str_City = e.ssds;
            that.Str_Unit = e.Unit;
            that.tyrq = e.tyrq;
            that.tuiyrq = e.tuiyrq;
            that.Str_ValID = e.Str_ValID;
        });
        that.$bus.$on("setJgID", (e) => {
            that.Str_ValID = e;
        });
    },
    activated() {},
    methods: {
        // 获取详细数据
        getDetail(e) {
            // 监听点击返回
            let ids = [];
            ids.push(e);
            let data = {
                action: "power.detail",
                params: {
                    nodes: ids,
                },
                callback: "detail",
            };
            ue.interface.broadcast("power.detail", JSON.stringify(data));
            window.ue.interface.detail = this.detail;
        },
        detail(e) {
            let data = e.params;
            this.wuliList = data.nodes[0].props;
        },
    },
};
</script>

<style scoped>
.wuli {
    width: 379px;
    height: 550px;
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
    height: 46px;
    display: flex;
    justify-content: center;
    margin-top: 28px;
}
.w_block > .block {
    width: 421.44px;
    height: 100%;
    background: url("img/wbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}
.block2 {
    width: 421.44px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.block2 > .img {
    margin-right: 6.6px;
    width: 82px;
    height: 33px;
    background: url("img/bc3.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.imgText {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0em;
    color: #e2e2e2;
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
