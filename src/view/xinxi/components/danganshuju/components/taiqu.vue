<template>
  <div class="shaiXuan">
    <!-- <div class="bg"></div> -->
    <div class="condition">
      <div class="tops">
        <div class="titles">
          <div class="titlesBg">
            <span>条件选择</span>
          </div>
        </div>
        <div class="btns">
          <div class="btnItem2"></div>
          <div class="btnItem2"></div>
          <div class="btnItem2"></div>
          <div class="btnItem" @click="inquire">
            <span>查询</span>
          </div>
        </div>
      </div>
      <div class="c_items">
        <div class="c_block">
          <div class="names">
            <span>杆塔名称</span>
            <div class="inputs">
              <input placeholder="" v-model="search" />
            </div>
          </div>

          <!-- 运维单位 -->
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
                v-model="chuangjian_value"
                @visible-change="chuangjianClick"
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
              <img v-show="!chuangjian_show" src="./img/xia.png" />
              <img v-show="chuangjian_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tables">
      <div class="titlesBg">
        <span>数据明细</span>
      </div>
      <div class="t_bg">
        <el-table
          ref="mug34"
          :data="dataList"
          :key="timeStap"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
        >
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
            :page-size="12"
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
    this.getOption();
    let that = this;
    that.$bus.$on("getSelect", () => {
      that.dataList = [];
      that.tableColumnList = [];
      that.getDateLists();
    });
    that.$bus.$on("initItem", () => {
      that.dataList = [];
      that.tableColumnList = [];
    });
  },
  data() {
    return {
      currentIndex: -1,
      search: "",
      daoXianName: "", //导线名称
      line: "", //所属线路
      qiDianName: "", //起点名称
      zhongDianName: "", //终点名称
      dataList: [],
      tableColumnList: [
        { prop: "td1", propName: "编号" },
        { prop: "td2", propName: "杆塔类型" },
        { prop: "td3", propName: "杆塔ID" },
        { prop: "td4", propName: "所属地市" },
        { prop: "td5", propName: "运维单位" },
        { prop: "td6", propName: "杆塔名称" },
        { prop: "td7", propName: "电压等级" },
        { prop: "td8", propName: "同杆回路" },
        { prop: "td9", propName: "混合方式" },
        { prop: "td10", propName: "投运日期" },
        { prop: "td11", propName: "退运日期" },
        { prop: "td12", propName: "设备经纬度" },
        { prop: "td13", propName: "设备高度" },
        { prop: "td14", propName: "设备角度" },
        { prop: "td15", propName: "模型状态" },
      ],
      //  ----站房类型-----
      wangluo: [
        {
          value: "变电站",
          label: "变电站",
        },
      ],
      wangluo_value: "",
      wangluo_show: false,
      // ----------------------------模型----------------------------------
      moxings: [],
      mx_value: "",
      mx_show: false,
      // ----------------------------运维单位----------------------------------
      oam: [
        {
          value: "国网雄县供电公司",
          label: "国网雄县供电公司",
        },
      ],
      oam_value: "",
      oam_show: false,
      // ----------------------------数据来源----------------------------------
      sj: [
        {
          value: null,
          label: "全部",
        },
        {
          value: 0,
          label: "中台数据",
        },
        {
          value: 1,
          label: "外部数据",
        },
      ],
      sj_value: "",
      sj_show: false,

      // ------------------------------电压--------------------------
      dianya: [
        {
          value: "交流1000kV",
          label: "1000kV",
        },
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
      ],
      chuangjian_value: "",
      chuangjian_show: false,

      tableData: [],
      multipleSelection: [],
      selectList: [], //复选数组
      page: 1,
      total: 0,
      timeStap: "",
    };
  },

  methods: {
    listClick(e, f) {
      if (this.currentIndex != f) {
        this.currentIndex = f;
      } else {
        this.currentIndex = -1;
      }
    },
    oamClick(e) {
      this.oam_show = e;
    },
    wangluoClick(e) {
      this.wangluo_show = e;
    },
    mxClick(e) {
      this.mx_show = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    chuangjianClick(e) {
      this.chuangjian_show = e;
    },
    sjClick() {
      this.sj_show = e;
    },
    pageClick(e) {
      this.page = e;
    },

    // 点击单行
    hangClick(e) {},
    // 右键清除选中
    unHangClick() {
      this.$refs.mug34.setCurrentRow();
    },

    handleCurrentChange(val) {
      this.multipleSelection = val;
    },

    //------------------------------------------获取数据------------------------------------------
    // 获取下拉选项
    getOption() {
      let params = { action: "power.getDb", callback: "getOptions" };
      ue.interface.broadcast("power.getDb", JSON.stringify(params));
      window.ue.interface.getOptions = this.getOptions;
    },

    // 回调
    getOptions(e) {
      this.wangluo = [];
      this.moxings = [];
      // this.chuangjian = [];
      this.oam = [];
      let data = e;
      // 网络
      let wl = data.params.network;
      // 模型
      let mx = data.params.nodeModal;
      // 是否创建
      // let cj = data.nodeType;
      // 运维单位
      let company = data.params.company;

      for (let i = 0; i < wl.length; i++) {
        this.wangluo.push({ value: wl[i].id, label: wl[i].name });
      }
      let w = {
        value: null,
        label: "全部",
      };
      this.wangluo.unshift(w);

      for (let j = 0; j < mx.length; j++) {
        this.moxings.push({ value: mx[j].id, label: mx[j].name });
      }
      let m = {
        value: null,
        label: "全部",
      };
      this.moxings.unshift(m);
      if (company.length > 0) {
        for (let a = 0; a < company.length; a++) {
          this.oam.push({
            value: company[a].id,
            label: company[a].name,
          });
        }
      }

      let s = {
        value: null,
        label: "全部",
      };
      this.oam.unshift(s);
    },

    // 查询方法
    inquire() {
      //  this.getRealTimeAlarm.serverParameter.Body = JSON.stringify(a);
      // 1.获取入参名称、网络、模型、电压范围、是否创建
      this.dataList = [
        {
          td1: "1",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "2",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "3",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "3",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "5",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "6",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "7",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "8",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "9",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "10",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "11",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
        {
          td1: "12",
          td2: "直线杆",
          td3: "mn12345231 ",
          td4: "国家雄安新区供电公司",
          td5: "国网安新县供电公司",
          td6: "10kV516线路主干001",
          td7: "10kV",
          td8: "2",
          td9: "",
          td10: "2001.02.03",
          td11: "",
          td12: "106.26667,38.46667",
          td13: "15米",
          td14: "25°",
          td15: "已创建",
        },
      ];
      this.tableColumnList = [
        { prop: "td1", propName: "编号" },
        { prop: "td2", propName: "杆塔类型" },
        { prop: "td3", propName: "杆塔ID" },
        { prop: "td4", propName: "所属地市" },
        { prop: "td5", propName: "运维单位" },
        { prop: "td6", propName: "杆塔名称" },
        { prop: "td7", propName: "电压等级" },
        { prop: "td8", propName: "同杆回路" },
        { prop: "td9", propName: "混合方式" },
        { prop: "td10", propName: "投运日期" },
        { prop: "td11", propName: "退运日期" },
        { prop: "td12", propName: "设备经纬度" },
        { prop: "td13", propName: "设备高度" },
        { prop: "td14", propName: "设备角度" },
        { prop: "td15", propName: "模型状态" },
      ];
      this.total = 12;

      this.getDateLists();
    },
    // 获取数据列表
    getDateLists() {
      let dmin;
      let dmax;
      if (this.dianya == null) {
        dmin = null;
        dmax = null;
      } else if (this.dianya == 0) {
        dmin = 0;
        dmax = 10000;
      } else if (this.dianya == 1) {
        dmin = 10001;
        dmax = 35000;
      } else if (this.dianya == 2) {
        dmin = 35001;
        dmax = 110000;
      } else if (this.dianya == 3) {
        dmin = 110001;
        dmax = 220000;
      } else if (this.dianya == 4) {
        dmin = 220001;
        dmax = 2000000;
      }
      let data = {
        action: "power.query",
        callback: "setList",
        params: {
          search: this.search,
          // network: this.wl_value,
          // modal: this.mx_value,
          voltageMin: dmin,
          voltageMax: dmax,
          isCreated: this.cj_value,
          props: [{ propName: "oam", value: this.oam_value }],
          page: this.page,
          pageSize: 6,
        },
      };
      this.selectList = [];
      // ue.interface.broadcast("power.query", JSON.stringify(data));
      // window.ue.interface.setList = this.setList;
    },
    // 获取数据列表回调
    setList(e) {
      let data = e.params;
      this.total = data.total;
      this.dataList = data.dataList;
      this.tableColumnList = data.tableColumnList;

      // for (let i = 0; i < data.dataList.length; i++) {
      //   this.$set(this.dataList, i, data.dataList[i]);
      // }
      // for (let j = 0; j < data.tableColumnList.length; j++) {
      //   this.$set(this.tableColumnList, j, data.tableColumnList[j]);
      // }
      this.$forceUpdate();
    },
    // 发布方法
    repossess() {
      if (this.selectList.length > 0) {
        let node = this.selectList;
        let data = {
          action: "power.publish",
          callback: "publish",
          params: {
            nodes: node,
          },
        };
        ue.interface.broadcast("power.publish", JSON.stringify(data));
        window.ue.interface.publish = this.publish;
      } else {
      }
    },
    publish() {
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
    connect() {},
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
        // this.setCreates();
        this.setLian();
      } else {
      }
    },
    setCreates() {
      let node = this.selectList;
      let data = {
        action: "power.create",
        callback: "create",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.create", JSON.stringify(data));
      window.ue.interface.create = this.create;
    },
    create(e) {
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
      let data = {
        action: "power.remove",
        callback: "delete",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.remove", JSON.stringify(data));
      window.ue.interface.delete = this.delete;
    },
    delete(e) {
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
  height: 630px;
  /* margin-top: 18.05px; */
}

input {
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  padding-left: 10.81px;
  margin-top: 0px !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0em;
  color: #ffffff;
}
input:focus {
  border: none;
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
  height: 630px;
  margin-top: 20px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.condition {
  width: 1883.46px;
  height: 77px;
  margin-left: 18.15px;
  margin-bottom: 54px;
  margin-top: 120px;
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
.c_bup {
  padding-top: 6px;
}
.c_bdown {
  margin-top: -12px;
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
  margin-left: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wangluo {
  width: 294px;
  height: 36px;
  margin-left: 28px;
  margin-right: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dianya {
  width: 263px;
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
.btnItem2 {
  width: 90px;
  height: 36px;
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
  position: absolute;
  left: 0;
  bottom: -50px;
}
</style>
