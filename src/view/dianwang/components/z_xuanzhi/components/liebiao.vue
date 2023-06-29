<template>
  <div class="shaiXuan">
    <!-- <div class="bg"></div> -->
    <div class="condition">
      <div class="tops">
        <img class="titles" src="./img/title1.png" />
        <div class="btns">
          <div class="btnItem" @click="inquire">
            <span>查询</span>
          </div>
          <div class="btnItem" @click="createClick">
            <span>创建</span>
          </div>
          <div class="btnItem" @click="repossess">
            <span>发布</span>
          </div>
          <div class="btnItem" @click="deleteClick">
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="c_items">
        <div class="c_block">
          <div class="names">
            <span>站房类型</span>
            <div class="inputs">
              <el-select
                v-model="zfType_value"
                @visible-change="zfTypeClick"
                placeholder=""
              >
                <el-option
                  v-for="item in zfType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!zfType_show" src="./img/xia.png" />
              <img v-show="zfType_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 站房名称 -->
          <div class="names">
            <span>站房名称</span>
            <div class="inputs">
              <input placeholder="" v-model="search" />
            </div>
          </div>
          <!-- 网络 -->
          <div class="names">
            <span>运维单位</span>
            <div class="inputs">
              <el-select
                v-model="oam_value"
                @visible-change="oamClick"
                placeholder=""
              >
                <el-option
                  v-for="item in oam"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!oam_show" src="./img/xia.png" />
              <img v-show="oam_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 电压 -->
          <div class="names">
            <span>电压等级</span>
            <div class="inputs">
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
          </div>
          <!-- 模型状态 -->
          <div class="names">
            <span>模型状态</span>
            <div class="inputs">
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
          </div>
        </div>
      </div>
    </div>

    <div class="tables">
      <div class="titlesBg">
        <span>站房明细</span>
      </div>
      <div class="t_bg">
        <el-table
          v-if="dataList.length < 1"
          ref="multipleTable"
          :data="dataList"
          :key="timeStap"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
          @select="s_Click"
          @select-all="s_all_Click"
        >
          <el-table-column align="center" type="selection" width="55">
          </el-table-column>
          <el-table-column
            align="center"
            :label="item.propName"
            :property="item.prop"
            v-for="item in tableColumnList2"
            :key="item.prop"
            min-width="20"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row[scope.column.property] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-table
          v-if="dataList.length > 0"
          ref="multipleTable"
          :data="dataList"
          :key="timeStap"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
          @select="s_Click"
          @select-all="s_all_Click"
        >
          <el-table-column align="center" type="selection" width="55">
          </el-table-column>
          <el-table-column
            align="center"
            :label="item.propName"
            :property="item.prop"
            v-for="item in tableColumnList"
            :key="item.prop"
            min-width="20"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row[scope.column.property] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="p_block">
          <el-pagination
            layout="total,prev, pager, next"
            :page-size="6"
            :total="total"
            @current-change="pageClick"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shaiXuan",

  mounted() {
    let that = this;
    that.$bus.$on("getSelect", () => {
      that.dataList = [];
      that.tableColumnList = [];
      that.getDateLists();
      // 获取新的列表数据
    });
    that.$bus.$on("initItem", () => {
      that.dataList = [];
      that.tableColumnList = [];
    });
  },
  data() {
    return {
      currentIndex: -1,

      search: "", //名称
      dataList: [],
      tableColumnList: [],
      tableColumnList2: [
        { propName: "站房类型" },
        { propName: "站房名称" },
        { propName: "运维单位" },
        { propName: "电压等级" },
        { propName: "投运日期" },
        { propName: "退运日期" },
        { propName: "设备经纬度" },
        { propName: "设备高度" },
        { propName: "设备角度" },
        { propName: "模型状态" },
      ],
      // 站房类型
      zfType: [
        {
          value: "变电站",
          label: "变电站",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      zfType_value: "",
      zfType_show: false,
      //   --------------------------网络 -------------------------------
      wangluo: [],
      wl_value: "",
      wl_show: false,
      // ----------------------------模型----------------------------------
      moxings: [],
      mx_value: "",
      mx_show: false,
      // ----------------------------模型----------------------------------
      oam: [
        {
          value: "国网雄县供电公司",
          label: "国网雄县供电公司",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      oam_value: "",
      oam_show: false,

      // ------------------------------电压--------------------------
      dianya: [
        {
          value: "交流500kV",
          label: "500kV",
        },
        {
          value: "交流220kV",
          label: "220kV",
        },
        {
          value: "交流110kV",
          label: "110kV",
        },
        {
          value: "交流35kV",
          label: "35kV",
        },
        {
          value: "交流10kV",
          label: "10kV",
        },
        {
          value: "交流0.4kV",
          label: "0.4kV",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      dy_value: "",
      dy_show: "",
      // --------------------------模型状态---------------------------
      chuangjian: [
        {
          value: "未创建",
          label: "未创建",
        },
        {
          value: "已创建",
          label: "已创建",
        },
        {
          value: "已发布",
          label: "已发布",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      cj_value: "",
      cj_show: false,

      tableData: [],
      multipleSelection: [],
      selectList: [], //复选数组
      page: 1,
      total: 0,
      timeStap: "",
    };
  },
  deactivated() {
    this.zfType_value = "";
    this.search = "";
    this.oam_value = "";
    this.dy_value = "";
    this.cj_value = "";
    this.page = 1;
  },
  methods: {
    listClick(e, f) {
      if (this.currentIndex != f) {
        this.currentIndex = f;
      } else {
        this.currentIndex = -1;
      }
    },
    zfTypeClick(e) {
      this.zfType_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    mxClick(e) {
      this.mx_show = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    cjClick(e) {
      this.cj_show = e;
    },
    pageClick(e) {
      this.page = e;
      this.getDateLists();
    },

    // 点击单行
    hangClick(e) {
      let v = {
        FocusTarget: {
          target: "HStation",
          ID: e.oid,
          FocusType: true,
          IDType: "HStation",
          EditMode: true,
        },
      };
      let data = {
        functionName: "FocusTower",
        backFunctionName: "",
        functionParameters: [
          {
            key: "FocusTarget",
            value: JSON.stringify(v),
          },
        ],
      };
      if (e.fbzt != "未创建") {
        this.$bus.$emit("hangObj", e);
        this.$emit("isShowItem", e.oid);
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.$notify({
          title: "聚焦",
          message: "未创建该模型",
          offset: 60,
          type: "error",
        });
      }
    },

    // 右键清除选中
    unHangClick() {
      this.$refs.multipleTable.setCurrentRow();
    },
    // 点击单选
    s_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i].oid);
      }
      this.selectList = Array.from(new Set(this.selectList));
    },
    // 点击全选
    s_all_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i].oid);
      }
    },

    handleCurrentChange(val) {
      this.multipleSelection = val;
    },

    //------------------------------------------获取数据------------------------------------------

    // 查询方法
    inquire() {
      // 请求接口
      this.getDateLists(0);
    },
    getDateLists(e) {
      if (e == 0) {
        this.page = 1;
      } else {
      }
      let v = {
        search: {
          target: "HStation",
          key: {
            params: [
              {
                key: "dzlx",
                value: this.zfType_value,
              },
              {
                key: "bdzmc",
                value: this.search,
              },
              {
                key: "ywdw",
                value: this.oam_value,
              },
              {
                key: "dydj",
                value: this.dy_value,
              },
              {
                key: "fbzt",
                value: this.cj_value,
              },
            ],
            page: this.page,
            pageSize: 6,
          },
        },
      };
      let data = {
        functionName: "Search",
        backFunctionName: "zx_setList",
        functionParameters: [
          {
            key: "search",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.zx_setList = this.zx_setList;
    },
    // 获取数据列表回调
    zx_setList(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      this.total = parseInt(data2.total);
      this.dataList = data2.dataList;

      this.tableColumnList = data2.tableColumnList;

      this.$forceUpdate();
    },
    // 发布方法
    repossess() {
      if (this.selectList.length > 0) {
        let node = this.selectList;
        let v = {
          range: {
            type: "Publish",
            target: "HStation",
            member: node,
          },
        };
        let data = {
          functionName: "SaveGame",
          backFunctionName: "zx_publish",
          functionParameters: [
            {
              key: "range",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.zx_publish = this.zx_publish;
      } else {
      }
    },
    zx_publish() {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
    },
    // 连线方法
    lianClick() {
      this.setLian();
    },
    setLian() {
      let node = this.selectList;
      let data = {
        action: "power.connect",
        callback: "connect",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.connect", JSON.stringify(data));
      window.ue.interface.connect = this.connect;
    },
    // 断线方法
    duanClick() {
      this.setDuan();
    },
    setDuan() {
      let node = this.selectList;
      let data = {
        action: "power.disconnect",
        callback: "disconnect",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.disconnect", JSON.stringify(data));
      window.ue.interface.disconnect = this.disconnect;
    },
    // ----------------------------------------------创建方法---------------
    createClick() {
      if (this.selectList.length > 0) {
        // 发送消息
        this.setCreates();
      } else {
      }
    },
    setCreates() {
      let node = this.selectList;
      let v = {
        range: { type: "Create", target: "HStation", member: node },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "zx_create",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.zx_create = this.zx_create;
    },
    zx_create(e) {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
    },
    // ---------------------------------删除方法-------------------
    deleteClick() {
      if (this.selectList.length > 0) {
        // 发送消息
        this.setDeletes();
      } else {
      }
    },
    setDeletes() {
      let node = this.selectList;
      let v = {
        range: { type: "Delet", target: "HStation", member: node },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "zx_delete",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.zx_delete = this.zx_delete;
    },
    zx_delete(e) {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
    },
  },
};
</script>

<style>
/* 分页器样式自定义 */
.el-pagination__total {
  font-family: SourceHanSansSC-Regular;
  font-size: 12px;
  font-weight: normal;
  color: #f6f6f6;
}
.el-pagination button:disabled {
  background: transparent;
}
.el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-icon {
  color: #fff !important;
  font-size: 14px;
  font-weight: 900;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: transparent;
}
.el-pager li {
  background-color: transparent;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
}
.el-pager li.active {
  width: 32px;
  height: 31.89px;
  background: rgba(11, 77, 88, 0.5);
  color: rgba(255, 255, 255, 1);
}
.el-pager li:hover {
  color: rgba(255, 255, 255, 1);
}
.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
  color: rgba(255, 255, 255, 1);
}
.el-popper[x-placement^="bottom"] {
  margin-top: 4px !important;
}
</style>
<style>
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
.el-table th {
  background-color: transparent;
}
.el-table tr {
  background-color: transparent;
}
.el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent !important;
}
.current-row {
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent !important;
  /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.el-table__header tr,
.el-table__header th {
  height: 39.8px !important;
  background: rgba(25, 61, 112, 0.5) !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
}
.el-table__body tr,
.el-table__body td {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
}
.el-checkbox__inner {
  background-color: #155589;
  border: 1px solid #155589;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #10acff;
  border: 1px solid #10acff;
}
</style>

<style scoped>
/* 表格样式 */
.e_tables {
  width: 100%;
  height: 524px;
  /* margin-top: 18.05px; */
}
.tiDai {
  width: 100%;
  height: 524px;
}

.shaiXuan {
  width: 100%;
  height: 100%;
  position: relative;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/sx.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.span1 {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>
<style scoped>
.t_bg {
  width: 100%;
  height: 346px;
  margin-top: 18.05px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.condition {
  width: 1883.46px;
  height: 138px;
  margin-left: 18.15px;
  padding-top: 111.27px;
  margin-bottom: 0px;
  margin-top: 370px;
}
.tops {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titles {
  width: 227.1px;
  height: 39.9px;
}
.titlesBg {
  width: 227.1px;
  height: 39.9px;
  background: url("img/zf.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.titlesBg > span {
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  margin-left: 44px;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.c_items {
  width: 100%;
  height: 67px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-top: 13px;
}
.c_items > .c_block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.margintop {
  padding-top: 8px;
}
.margintop2 {
  margin-top: -18px;
}
.names {
  width: 294px;
  height: 36px;
  margin-left: 18.5px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wangluo {
  width: 294px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dianya {
  width: 294px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dianya > .d_blocks {
  width: 158.94px;
  height: 36px;
  background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.chuangjian {
  width: 297px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.names > span,
.wangluo > span,
.dianya > span,
.chuangjian > span {
  font-family: SourceHanSansCN-Medium;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);
}

.inputs {
  width: 220px;
  height: 36px;
  background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.inputs > img {
  position: absolute;
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}

.btns {
  width: 406px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.btns > .btnItem {
  width: 90px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/btn1.png") no-repeat;
  background-size: 100% 100%;
}
.btns > .btnItem > span {
  font-family: SourceHanSansCN-Medium;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
}
.btns > .btnItem:hover {
  background: url("img/btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.tables {
  width: 1883.46px;
  height: 688px;
  margin-left: 18.15px;
}
.t_items {
  width: 100%;
  height: 630px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-top: 18.05px;
}
</style>
<style scoped>
.tds {
  width: 100%;
  height: 36px;
  display: flex;
  background: url("img/td.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tr1 {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr2 {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr3 {
  width: 152px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr4 {
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr5 {
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr6 {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr7 {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr1 > span,
.tr2 > span,
.tr3 > span,
.tr4 > span,
.tr5 > span,
.tr6 > span,
.tr7 > span {
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #ffffff;
}
.t_blcok::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.t_blcok {
  width: 100%;
  height: 488px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.t_td {
  width: 100%;
  height: 48.49px;
  position: relative;
  display: flex;
}
.t_td > .xia {
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
}
.t_td2 {
  width: 100%;
  height: 50.66px;
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.p_block {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 10px;
}
</style>
