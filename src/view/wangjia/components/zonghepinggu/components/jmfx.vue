<template>
  <div class="newLieBiao">
    <!-- 右侧列表模块 -->

    <transition name="transitionRight">
      <div
        class="rightBtn"
        :class="showRZK ? 'rightBtn2' : ''"
        v-show="showZDtb && showRight && !showRZK && showDemo"
      >
        <div class="gl_top">
          <span class="span1">当前区域：</span>
          <div class="names">
            <span>xxxxx区域名称</span>
          </div>
          <div class="fanhui" @click="fanhuiClick"></div>
        </div>
        <!-- 箭头 -->
        <!-- <div class="jt"></div> -->
        <!-- 开关 -->
        <div class="rkg" @click="kgClick" :class="showRZK ? 'rkg2' : ''"></div>
        <div class="j_titles">
          <span class="span1">违规导线统计</span>
        </div>
        <div class="jbBlock">
          <img src="./img/jt2.png" />
          <span class="span1">现状不符合要求的导线数量：</span>
          <span class="span2">02</span>
          <span class="span3">条</span>
        </div>
        <div class="t_bg">
          <el-table
            v-if="dataList.length < 1"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng40"
          >
          </el-table>
          <el-table
            v-if="dataList.length > 0"
            ref="mug29"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClicks"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng41"
          >
            <el-table-column
              v-if="showSelect"
              align="center"
              type="selection"
              width="55"
            >
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
              :page-size="14"
              :current-page.sync="page1"
              :total="total"
              @current-change="pageClick2"
            >
            </el-pagination>
          </div>
          <!-- 确定取消按钮 -->
          <div class="queDingBtn" v-show="showSelect">
            <div class="queBlock" @click="queRenClick">
              <span>确定</span>
            </div>
            <div class="queBlock" @click="quxiaoClick">
              <span>取消</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 右侧展开列表模块 -->
    <transition name="transitionRight">
      <div
        class="rightBtn rightBtn2"
        v-show="showZDtb && showRight && showRZK && showDemo"
      >
        <!-- 箭头 -->
        <div class="jt"></div>
        <!-- 开关 -->
        <div class="rkg rkg2" @click="kgClick"></div>
        <div class="mxTT">
          <span>违规导线统计</span>
        </div>
        <div class="t_bg t_bg2">
          <el-table
            v-if="dataList.length < 1"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng42"
          >
          </el-table>
          <el-table
            v-if="dataList.length > 0"
            ref="mug28"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClick"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng43"
          >
            <el-table-column
              v-if="showSelect"
              align="center"
              type="selection"
              width="55"
            >
            </el-table-column>
            <el-table-column
              align="center"
              :label="item.propName"
              :property="item.prop"
              v-for="item in tableColumnList"
              :key="item.prop"
              fixed="left"
              min-width="140"
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
              :page-size="14"
              :current-page.sync="page"
              :total="total"
              @current-change="pageClick"
            >
            </el-pagination>
          </div>
          <!-- 确认取消按钮 -->
          <div class="queDingBtn queDingBtn2" v-show="showSelect">
            <div class="queBlock" @click="queRenClick">
              <span>确定</span>
            </div>
            <div class="queBlock" @click="quxiaoClick">
              <span>取消</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "newLieBiao",
  watch: {
    zfType_value(e, f) {
      this.getDateLists();
    },
    xl_oam_value(e, f) {
      this.getDateLists();
    },
    xl_dy_value(e, f) {
      this.getDateLists();
    },
    zf_cj_value(e, f) {
      this.getDateLists();
    },
    xl_name(e, f) {
      this.getDateLists();
    },
    xl_qdname(e, f) {
      this.getDateLists();
    },
    xl_zdname(e, f) {
      this.getDateLists();
    },
    xl_ds_value(e, f) {
      this.getDateLists();
    },
  },
  data() {
    return {
      showDemo: true,
      showTJ: false,
      btnIndex: -1, //是否选中按钮
      value1: "",
      //线路名称
      xl_name: "",
      // 起点名称
      xl_qdname: "",
      // 终点名称
      xl_zdname: "",
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
      xl_oam_value: "",
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
      xl_dy_value: "",
      dy_show: "",
      // 线路所属地市
      xl_ds_suoshu: [
        {
          value: "",
          label: "全部",
        },
      ],
      xl_ds_value: "",
      xl_ds_show: "",
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
      zf_cj_value: "",
      cj_show: false,
      // -------------------------------列表数据-----------------------------
      dataList: [
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },

        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },

        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
        {
          voltageGrade: "xxx",
          belongLine: "xxx",
          conductorName: "xxx",
          conductorType: "xxx",
        },
      ],
      tableColumnList: [
        { propName: "导线ID", prop: "voltageGrade" },
        { propName: "导线名称", prop: "belongLine" },
        { propName: "违规内容", prop: "conductorName" },
        { propName: "所属线路", prop: "conductorType" },
      ],
      tableColumnList2: [],
      tableColumnList3: [],
      tableColumnList4: [], //存放接口数据 收缩表头
      tableColumnList5: [], //存放接口数据 展开表头
      // -----------------------------------------------------------------------
      showRight: true, //是否显示右侧列表
      showSelect: false, //是否显示复选框
      showRZK: false, //是否展开右侧列表
      selectList: [], //复选数组
      page: 1,
      page1: 1,
      total: 0,
      showXL: false,
      xlKV: [], //接口获取线路kv
      xlIndex: -1,
      xlIndex1: -1,
      xlIndex2: -1,
      xlIndex3: -1,
      xlIndex4: -1,
      xlIndex5: -1,
      showkv1: false,
      showkv2: false,
      showkv3: false,
      showkv4: false,
      showkv5: false,
      showkv6: false,
      showZDtb: true,
      showwjdz: false,
    };
  },
  deactivated() {
    this.zfType_value = "";
    this.xl_ds_value = "";
    this.xl_name = "";
    this.xl_qdname = "";
    this.xl_zdname = "";
    this.xl_oam_value = "";
    this.xl_dy_value = "";
    this.zf_cj_value = "";
    this.page = 1;
    this.page1 = 1;
  },
  mounted() {
    let that = this;
    that.$bus.$on("leixChaXun", () => {
      that.getDateLists();
    });
    that.$bus.$on("suofangAnNiu", (e) => {
      this.showZDtb = e;
    });
    let data = {
      functionName: "GetSelectKv",
      backFunctionName: "BackGetSelectKv",
      functionParameters: [
        {
          key: "GetSelectKv",
          value: "",
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data));
    window.ue.interface.BackGetSelectKv = this.BackGetSelectKv;
    // 获取表头
    let v = {
      URL: "data/tableColumnInfo/" + 1001 + "/" + 0 + "/" + 1000 + "/" + 1,
      StructName: "获取线路表头",
      verbType: "GET",
    };
    let data2 = {
      functionName: "WebServerMsg",
      backFunctionName: "getxlTh",
      functionParameters: [
        {
          key: "WebServerMsg",
          value: JSON.stringify(v),
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data2));
    window.ue.interface.getxlTh = this.getxlTh;
  },
  methods: {
    fanhuiClick() {
      this.$emit("geshihua");
    },
    // 是否显示网架电站
    showWjDz() {
      if (this.showwjdz) {
        this.showwjdz = false;
      } else {
        this.showwjdz = true;
      }
    },
    xlClick(e) {
      if (e == 0) {
        if (this.xlIndex == 1) {
          this.xlIndex = -1;
          if (this.xlKV.includes("交流500kV")) {
            this.xlKV.remove("交流500kV");
          }
        } else {
          this.xlIndex = 1;
          this.xlKV.push("交流500kV");
        }
      } else if (e == 1) {
        if (this.xlIndex1 == 1) {
          this.xlIndex1 = -1;
          if (this.xlKV.includes("交流220kV")) {
            this.xlKV.remove("交流220kV");
          }
        } else {
          this.xlIndex1 = 1;
          this.xlKV.push("交流220kV");
        }
      } else if (e == 2) {
        if (this.xlIndex2 == 1) {
          this.xlIndex2 = -1;
          if (this.xlKV.includes("交流110kV")) {
            this.xlKV.remove("交流110kV");
          }
        } else {
          this.xlIndex2 = 1;
          this.xlKV.push("交流110kV");
        }
      } else if (e == 3) {
        if (this.xlIndex3 == 1) {
          this.xlIndex3 = -1;
          if (this.xlKV.includes("交流35kV")) {
            this.xlKV.remove("交流35kV");
          }
        } else {
          this.xlIndex3 = 1;
          this.xlKV.push("交流35kV");
        }
      } else if (e == 4) {
        if (this.xlIndex4 == 1) {
          this.xlIndex4 = -1;
          if (this.xlKV.includes("交流10kV")) {
            this.xlKV.remove("交流10kV");
          }
        } else {
          this.xlIndex4 = 1;
          this.xlKV.push("交流10kV");
        }
      } else if (e == 5) {
        if (this.xlIndex5 == 1) {
          this.xlIndex5 = -1;
          if (this.xlKV.includes("交流0.4kV")) {
            this.xlKV.remove("交流0.4kV");
          }
        } else {
          this.xlIndex5 = 1;
          this.xlKV.push("交流0.4kV");
        }
      }
      this.getDateLists();
    },
    xl_dsClick(e) {
      this.xl_ds_show = e;
    },
    BackGetSelectKv(e) {
      let data = JSON.parse(e).value;
      this.xlKV = data;
      for (let i = 0; i < this.xlKV.length; i++) {
        if (this.xlKV[i] == "交流500kV") {
          this.xlIndex = 1;
          this.showkv1 = true;
        } else if (this.xlKV[i] == "交流220kV") {
          this.xlIndex1 = 1;
          this.showkv2 = true;
        } else if (this.xlKV[i] == "交流110kV") {
          this.xlIndex2 = 1;
          this.showkv3 = true;
        } else if (this.xlKV[i] == "交流35kV") {
          this.xlIndex3 = 1;
          this.showkv4 = true;
        } else if (this.xlKV[i] == "交流10kV") {
          this.xlIndex4 = 1;
          this.showkv5 = true;
        } else if (this.xlKV[i] == "交流0.4kV") {
          this.xlIndex5 = 1;
          this.showkv6 = true;
        }
      }
    },
    // 是否展开左侧
    jtClick() {
      this.showTJ = !this.showTJ;
    },
    // 是否展开右侧
    kgClick() {
      let that = this;
      if (that.showRZK) {
        that.showDemo = false;
        setTimeout(() => {
          that.showRZK = false;
          that.showDemo = true;
          that.tableColumnList = that.tableColumnList4;
        }, 1000);
      } else {
        that.showDemo = false;
        setTimeout(() => {
          that.showRZK = true;
          that.showDemo = true;
          that.tableColumnList = that.tableColumnList5;
        }, 1000);
      }
    },
    // 取消复选
    quxiaoClick() {
      this.btnIndex = -1;
      this.showSelect = false;
    },
    // 确认按钮
    queRenClick() {
      if (this.btnIndex == 1) {
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
          this.$notify({
            title: "发布",
            message: "未选中选项",
            offset: 60,
            type: "error",
          });
        }
      } else if (this.btnIndex == 2) {
        if (this.selectList.length > 0) {
          // 发送消息

          this.setCreates();
        } else {
          this.$notify({
            title: "创建",
            message: "未选中选项",
            offset: 60,
            type: "error",
          });
        }
      } else if (this.btnIndex == 3) {
        if (this.selectList.length > 0) {
          // 发送消息
          this.setDeletes();
        } else {
          this.$notify({
            title: "删除",
            message: "未选中选项",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    zfTypeClick(e) {
      this.zfType_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
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
    pageClick2(e) {
      this.page1 = e;
      this.getDateLists();
    },
    // 获取表头
    getxlTh(e) {
      let data2 = JSON.parse(e).data;
      this.tableColumnList = data2.data;
      this.dataList = [];
    },
    // 双击单行
    hangClick(e) {
      let v = {
        type: "SelectWireFrameLine",
        selectType: "true",
        value: {
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "xlmc",
              value: e.xlmc,
            },
          ],
        },
      };
      let data = {
        functionName: "WireFrame",
        backFunctionName: "",
        functionParameters: [
          {
            key: "WireFrame",
            value: JSON.stringify(v),
          },
        ],
      };

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      this.$emit("showZDCXItem");
    },

    // 右键清除选中
    unHangClick() {
      this.$refs.mug28.setCurrentRow();
    },

    // 右键清除选中
    unHangClicks() {
      this.$refs.mug29.setCurrentRow();
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

    // --------------------------------------------查询---------------------------------------
    // 查询方法
    inquire() {
      // 请求接口
      if (this.btnIndex == 0) {
        this.btnIndex = -1;
        this.showRight = false;
      } else {
        this.showSelect = false;
        this.btnIndex = 0;

        this.showRight = true;
        if (this.showTJ == false) {
          this.showTJ = true;
        }
        this.getDateLists(0);
      }
    },
    getDateLists(e) {
      if (e == 0) {
        if (this.showRZK) {
          this.page = 1;
        } else {
          this.page1 = 1;
        }
      } else {
      }
      let newPage;
      if (this.showRZK) {
        newPage = this.page;
      } else {
        newPage = this.page1;
      }
      let v;
      // 线路
      if (window.isXZ == 1) {
        v = {
          URL: "xa/getCustomData",
          StructName: "linefile",
          value: {
            data: this.xlKV,
            field: "dydj",
            queryData: [
              {
                key: "xlmc",
                value: this.xl_name,
              },
              {
                key: "qdwzmc",
                value: this.xl_qdname,
              },
              {
                key: "zdwzmc",
                value: this.xl_zdname,
              },
              {
                key: "dydj",
                value: this.xl_dy_value,
              },
              {
                key: "ssdsmc",
                value: this.xl_ds_value,
              },
              {
                key: "dddwmc",
                value: this.xl_oam_value,
              },
              {
                key: "ssdt",
                value: window.xianMing,
              },
            ],
            name: "Data_LineFileInfo",
            pageNo: newPage,
            pageSize: 14,
            expansionData:
              "AND tuiyrq >=  '" +
              window.xzRiQi +
              "' and  tyrq <='" +
              window.xzRiQi +
              "'",
            tbName: "LineFileInfo",
          },
          verbType: "POST",
        };
      } else {
        v = {
          URL: "xa/getCustomData",
          StructName: "linefile",
          value: {
            data: this.xlKV,
            field: "dydj",
            queryData: [
              {
                key: "xlmc",
                value: this.xl_name,
              },
              {
                key: "qdwzmc",
                value: this.xl_qdname,
              },
              {
                key: "zdwzmc",
                value: this.xl_zdname,
              },
              {
                key: "dydj",
                value: this.xl_dy_value,
              },
              {
                key: "ssdsmc",
                value: this.xl_ds_value,
              },
              {
                key: "dddwmc",
                value: this.xl_oam_value,
              },
              {
                key: "ssdt",
                value: window.xianMing,
              },
            ],
            name: "Data_LineFileInfo",
            pageNo: newPage,
            pageSize: 14,
            tbName: "LineFileInfo",
          },
          verbType: "POST",
        };
      }

      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "zx_setList",
        functionParameters: [
          {
            key: "WebServerMsg",
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
      // let data = JSON.parse(e);
      // let data2 = JSON.parse(data.value);
      // this.total = parseInt(data2.total);
      // this.dataList = data2.dataList;
      let data2 = JSON.parse(e);
      this.total = parseInt(data2.data.total);
      this.dataList = data2.data.LineFileInfo;
      if (this.dataList.length > 0) {
        let datas = [];
        for (let i = 0; i < 3; i++) {
          datas.push(this.tableColumnList[i]);
        }
        this.tableColumnList4 = datas;
        this.tableColumnList5 = this.tableColumnList;
        if (this.showRZK) {
          this.tableColumnList = this.tableColumnList5;
        } else {
          this.tableColumnList = this.tableColumnList4;
        }
      } else {
        this.dataList = [];
      }

      this.$forceUpdate();
    },
    // ----------------------------------------------创建方法---------------
    createClick() {
      if (this.btnIndex == 1) {
        this.btnIndex = -1;
        this.showSelect = false;
      } else {
        this.btnIndex = 1;
        this.showSelect = true;
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
      this.selectList = [];
      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
    },
    // -----------------------------------------------发布方法----------------------
    repossess() {
      if (this.btnIndex == 2) {
        this.btnIndex = -1;
        this.showSelect = false;
      } else {
        this.btnIndex = 2;
        this.showSelect = true;
      }
    },
    zx_publish() {
      this.dataList = [];
      this.tableColumnList = [];
      this.selectList = [];

      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
    },
    // ---------------------------------删除方法-------------------
    deleteClick() {
      if (this.btnIndex == 3) {
        this.btnIndex = -1;
        this.showSelect = false;
      } else {
        this.btnIndex = 3;
        this.showSelect = true;
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
      this.selectList = [];

      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
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
<style scoped>
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent;
}
::v-deep .el-table th {
  background-color: transparent;
}
::v-deep .el-table tr {
  background-color: transparent;
}
::v-deep .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent !important;
}
::v-deep .current-row {
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
::v-deep .el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent !important;
  /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
}

::v-deep .el-table td.el-table__cell,
::v-deep .el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

::v-deep .el-table__header tr,
::v-deep .el-table__header th {
  height: 39.8px;
  background: rgba(25, 61, 112, 0.5) !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
}
::v-deep .el-table__body tr,
::v-deep .el-table__body td {
  height: 48px !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
}
::v-deep .el-checkbox__inner {
  background-color: #155589;
  border: 1px solid #155589;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #10acff;
  border: 1px solid #10acff;
}
</style>

<style scoped>
.newLieBiao {
  width: 100%;
  height: 100%;
}
.zuo {
  width: 387px;
  height: 1080px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/zuo.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.leftBtn {
  width: 191px;
  height: 704px;
  position: absolute;
  left: 0;
  top: 187px;
  background: url("img/leftBtn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.leftBtn2 {
  left: 212px !important;
}
.btnBlock {
  width: 107px;
  height: 291px;
  position: absolute;
  left: 43px;
  top: 224px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.btnBlock > .btnItem {
  width: 107px;
  height: 48px;
  background: url("img/btnItem2.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 94px;
}
.btnItem2 {
  background: url("img/btnItem.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.btnBlock > .btnItem > span {
  font-family: SourceHanSansSC-Medium;
  font-size: 24px;
  font-weight: normal;

  background-image: -webkit-linear-gradient(
    bottom,
    #ffffff 40%,
    #61b3ff 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.jianTou {
  width: 28px;
  height: 72px;
  position: absolute;
  right: 7px;
  top: 308px;
  background: url("img/right.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.jianTou2 {
  background: url("img/left.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.tiaoJian {
  width: 224px;
  height: 548px;
  position: absolute;
  left: 7px;
  top: 278px;
  background: url("img/tjBtn.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.tj_bck {
  width: 100%;
  height: 470px;
  margin-top: 50px;
  overflow-y: scroll;
}
.tj_bck::-webkit-scrollbar {
  display: none;
}
.tjTT {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: 0;
  top: 0;
}
.tjTT > span {
  margin-left: 46px;
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
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
.tjBlock {
  width: 182px;
  height: 58px;
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tjBlock2 {
  margin-top: 50px;
}
.tjBlock > .tops {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);
}
.tjBlock > .bottoms {
  width: 181px;
  height: 34px;
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
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}
</style>
<style scoped>
.rightBtn {
  width: 398px;
  height: 860px;
  position: absolute;
  right: 10px;
  top: 160px;
  background: url("img/mxBtn.png") no-repeat;
  background-size: 100% 100%;
}
.rightBtn2 {
  width: 1433px !important;
  background: url("img/mxBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jt {
  width: 55px;
  height: 53px;
  position: absolute;
  left: 10px;
  top: 0;
  background: url("img/jt.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.mxTT {
  width: 100%;
  height: 46px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: 55px;
  top: 0;
}
.mxTT > span {
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.t_bg {
  width: 98%;
  height: 710px;
  margin-left: 1%;
  margin-top: 15px;
}
.t_bg2 {
  margin-top: 65px;
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
  bottom: 10px;
}
</style>
<style scoped>
.rkg {
  width: 18px;
  height: 142px;
  position: absolute;
  left: -17px;
  top: 392px;
  background: url("img/rkg.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.rkg2 {
  background: url("img/rkg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.queDingBtn {
  width: 181px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 120px;
  bottom: 67px;
}
.queDingBtn2 {
  left: 640px !important;
}
.queDingBtn > .queBlock {
  width: 83px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/que.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.queDingBtn > .queBlock > span {
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #bebebe;
}
.queDingBtn > .queBlock:hover {
  background: url("img/que2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.queDingBtn > .queBlock:hover > span {
  color: #fff !important;
}
</style>
<style scoped>
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
<style scoped>
.btnImg {
  width: 52px;
  height: 47px;

  background: url("img/btnImg.png") no-repeat;
  background-size: 100% 100%;
}
.leftBtns {
  width: 366px;
  height: 47px;
  display: flex;
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.rightBtns {
  width: 366px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 20px !important;
  bottom: 20px !important;
}
.leftBtns > .leftBlocks,
.rightBtns > .leftBlocks {
  width: 163px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/leftBtns.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.leftBtns > .leftBlocks > span,
.rightBtns > .leftBlocks > span {
  font-family: PangMenZhengDao;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #fafcff;
}
.leftBlock2s {
  background: url("img/leftBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.leftBlock2s > span {
  font-family: PangMenZhengDao !important;
  font-size: 24px !important;
  font-weight: normal !important;
  letter-spacing: 0em !important;
  color: #6bf0ff !important;
  text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
.leftBtns > .rightBlocks,
.rightBtns > .rightBlocks {
  width: 163px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/rightBtn.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.leftBtns > .rightBlocks > span,
.rightBtns > .rightBlocks > span {
  font-family: PangMenZhengDao;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #fafcff;
}
.rightBlock2s {
  background: url("img/rightBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.rightBlock2s > span {
  font-family: PangMenZhengDao !important;
  font-size: 24px !important;
  font-weight: normal !important;
  letter-spacing: 0em !important;
  color: #6bf0ff !important;
  text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
</style>

<style scoped>
.xlBlock {
  width: 279px;
  height: 156px;
  position: fixed;
  left: 65px;
  bottom: 78px;
  z-index: 9999999999999999999999999;
}
.xlBlock2 {
  left: 65px !important;
}
.xlBlockItem {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.xlBlockItem > .xlItmes {
  width: 131px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/xlBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
}
.xlBlockItem > .xlItmes > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 20px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 1px;
}
.xlBlockItem > .xlItmes2 {
  background: url("img/xlBg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>

<style scoped>
/* 表格样式 */
.e_tables {
  width: 96%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 2%;
}
.e_tables2 {
  height: 72% !important;
}
.e_tables::-webkit-scrollbar {
  display: none;
}
.e_tabless {
  width: 98%;
  height: 170px !important;
  overflow-y: scroll;
  margin-left: 1%;
}
</style>

<style scoped>
.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 18px;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>

<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 18px;
  position: relative;
  align-items: center;
}
.jbBlock > img {
  width: 34px;
  height: 26px;
  margin-left: 10px;
}
.jbBlock > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  background: linear-gradient(to bottom, #ffffff, #6bedff);
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 6px;
}
.jbBlock > .span2 {
  font-family: DIN Alternate;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(to bottom, #ffffff, #6bedff);
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 10px;
}
.jbBlock > .span3 {
  font-family: DIN Alternate;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(to bottom, #ffffff, #6bedff);
  -webkit-background-clip: text;
  color: transparent;
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

<style>
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: transparent;
}
</style>
<style scoped>
::v-deep .el-input__icon {
  margin-top: -6px;
}
::v-deep .el-input__inner {
  background-color: transparent;
  border: 0;
  height: 32px;
}
::v-deep .el-date-editor .el-range-separator {
  color: #ffffff;
  margin-top: -6px;
}
::v-deep .el-date-editor .el-range-input {
  color: #fff;
}
::v-deep .el-date-table td.in-range div {
  background-color: transparent !important;
}
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
  position: fixed;
  top: 93px;
  right: 10px;
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
</style>
