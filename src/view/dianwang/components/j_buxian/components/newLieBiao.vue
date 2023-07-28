<template>
  <div class="newLieBiao">
    <!-- 返回默认页面 -->
    <div class="fh_mr" @click="fhMrClick"></div>
    <div class="s_show1" v-show="!showXX"></div>
    <div class="s_show2" v-show="!showXX"></div>
    <!-- 信息缩放按钮 -->
    <div class="xxsf" :class="showXX ? 'xxsf2' : ''" @click="sfxxClick"></div>
    <!-- 左侧阴影 -->
    <div class="zuo"></div>
    <!-- 左侧模块按钮 -->
    <div class="leftBtn" v-show="!showTJ && showXX">
      <!-- 功能按钮 -->
      <div class="btnBlock">
        <div
          class="btnItem"
          @click="inquire"
          :class="btnIndex == 0 ? 'btnItem2' : ''"
        >
          <span>查询</span>
        </div>
        <div
          class="btnItem"
          @click="createClick"
          :class="btnIndex == 1 ? 'btnItem2' : ''"
        >
          <span>发布</span>
        </div>
        <div
          class="btnItem"
          @click="repossess"
          :class="btnIndex == 2 ? 'btnItem2' : ''"
        >
          <span>创建</span>
        </div>
        <div
          class="btnItem"
          @click="deleteClick"
          :class="btnIndex == 3 ? 'btnItem2' : ''"
        >
          <span>删除</span>
        </div>
      </div>
      <!-- 箭头 -->
      <div @click="jtClick" class="jianTou"></div>
    </div>
    <!-- 左侧模块按钮展开 -->
    <transition name="transitionLeft">
      <div class="leftBtn leftBtn2" v-show="showTJ && showXX">
        <div class="btnBlock">
          <div
            class="btnItem"
            @click="inquire"
            :class="btnIndex == 0 ? 'btnItem2' : ''"
          >
            <span>查询</span>
          </div>
          <div
            class="btnItem"
            @click="createClick"
            :class="btnIndex == 1 ? 'btnItem2' : ''"
          >
            <span>发布</span>
          </div>
          <div
            class="btnItem"
            @click="repossess"
            :class="btnIndex == 2 ? 'btnItem2' : ''"
          >
            <span>创建</span>
          </div>
          <div
            class="btnItem"
            @click="deleteClick"
            :class="btnIndex == 3 ? 'btnItem2' : ''"
          >
            <span>删除</span>
          </div>
        </div>
        <!-- 箭头 -->
        <div @click="jtClick" class="jianTou jianTou2"></div>
      </div>
    </transition>
    <transition name="transitionLeft">
      <div class="tiaoJian" v-show="showTJ && showXX">
        <div class="tjTT">
          <span>条件选择</span>
        </div>
        <div class="new_block">
          <!-- 导线名称 -->
          <div class="tjBlock">
            <div class="tops">导线名称</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="daoXianName" />
                </div>
              </div>
            </div>
          </div>
          <!-- 所属线路 -->
          <div class="tjBlock">
            <div class="tops">所属线路</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="line" />
                </div>
              </div>
            </div>
          </div>
          <!-- 起点名称 -->
          <div class="tjBlock">
            <div class="tops">起点名称</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="qiDianName" />
                </div>
              </div>
            </div>
          </div>
          <!-- 终点名称 -->
          <div class="tjBlock">
            <div class="tops">终点名称</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="zhongDianName" />
                </div>
              </div>
            </div>
          </div>

          <div class="tjBlock">
            <div class="tops">运维单位</div>
            <div class="bottoms">
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
          </div>
          <div class="tjBlock">
            <div class="tops">电压等级</div>
            <div class="bottoms">
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
          </div>
          <div class="tjBlock">
            <div class="tops">模型状态</div>
            <div class="bottoms">
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
    </transition>
    <!-- 右侧列表模块 -->
    <transition name="transitionRight">
      <div
        class="rightBtn"
        :class="showRZK ? 'rightBtn2' : ''"
        v-show="showRight && !showRZK && showDemo && showXX"
      >
        <!-- 箭头 -->
        <div class="jt"></div>
        <!-- 开关 -->
        <div class="rkg" @click="kgClick" :class="showRZK ? 'rkg2' : ''"></div>
        <div class="mxTT">
          <span>导线明细</span>
        </div>
        <div class="t_bg">
          <el-table
            v-if="dataList.length > 0"
            ref="mug13"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2s"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClicks"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng19"
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
        v-show="showRight && showRZK && showDemo && showXX"
      >
        <!-- 箭头 -->
        <div class="jt"></div>
        <!-- 开关 -->
        <div class="rkg rkg2" @click="kgClick"></div>
        <div class="mxTT">
          <span>导线明细</span>
        </div>
        <div class="t_bg">
          <el-table
            v-if="dataList.length > 0"
            ref="mug12"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClick"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng20"
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
    oam_value(e, f) {
      this.getDateLists();
    },
    dy_value(e, f) {
      this.getDateLists();
    },
    cj_value(e, f) {
      this.getDateLists();
    },
    daoXianName(e, f) {
      this.getDateLists();
    },
    line(e, f) {
      this.getDateLists();
    },
    qiDianName(e, f) {
      this.getDateLists();
    },
    zhongDianName(e, f) {
      this.getDateLists();
    },
  },
  data() {
    return {
      showXX: true,
      showDemo: true,
      showTJ: false,
      btnIndex: -1, //是否选中按钮

      //导线名称
      daoXianName: "",
      // 所属线路
      line: "",
      // 起点名称
      qiDianName: "",
      // 终点名称
      zhongDianName: "",
      // ----------------------------运维单位----------------------------------
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
        {
          value: "",
          label: "全部",
        },
      ],
      cj_value: "",
      cj_show: false,
      // -------------------------------列表数据-----------------------------
      dataList: [
        {
          voltageGrade: "111",
          belongLine: "111",
          conductorName: "111",
          conductorType: "111",
        },
      ],
      tableColumnList: [
        { propName: "电压等级", prop: "voltageGrade" },
        { propName: "所属线路", prop: "belongLine" },
        { propName: "导线名称", prop: "conductorName" },
        { propName: "导线类型", prop: "conductorType" },
      ],
      tableColumnList2: [],
      tableColumnList3: [],
      tableColumnList4: [], //存放接口数据 收缩表头
      tableColumnList5: [], //存放接口数据 展开表头
      // -----------------------------------------------------------------------
      showRight: false, //是否显示右侧列表
      showSelect: false, //是否显示复选框
      showRZK: false, //是否展开右侧列表
      selectList: [], //复选数组
      page: 1,
      page1: 1,
      total: 0,
    };
  },
  deactivated() {
    this.daoXianName = "";
    this.qiDianName = "";
    this.zhongDianName = "";
    this.line = "";
    this.oam_value = "";
    this.dy_value = "";
    this.cj_value = "";
    this.page = 1;
    this.page1 = 1;
  },
  mounted() {
    let that = this;
    that.$bus.$on("leixChaXun", () => {
      that.getDateLists();
    });
    // 获取表头
    let v = {
      URL: "data/tableColumnInfo/" + 104 + "/" + 0 + "/" + 104 + "/" + 1,
      StructName: "获取架空杆塔布线表头",
      verbType: "GET",
    };
    let data2 = {
      functionName: "WebServerMsg",
      backFunctionName: "getxlThGTBX",
      functionParameters: [
        {
          key: "WebServerMsg",
          value: JSON.stringify(v),
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data2));
    window.ue.interface.getxlThGTBX = this.getxlThGTBX;
  },
  methods: {
    getxlThGTBX(e) {
      let data2 = JSON.parse(e).data;
      this.tableColumnList = data2.data;

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
    },
    // 返回默认页面
    fhMrClick() {
      this.$router.push({
        path: "/mr",
      });
    },
    sfxxClick() {
      this.showXX = !this.showXX;
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
        let node = this.selectList;
        if (this.selectList.length > 0) {
          let v = {
            range: {
              type: "Publish",
              target: "Line",
              member: node,
            },
          };
          let data = {
            functionName: "SaveGame",
            backFunctionName: "jd_publish",
            functionParameters: [
              {
                key: "range",
                value: JSON.stringify(v),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
          window.ue.interface.jd_publish = this.jd_publish;
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
    // 点击单行
    hangClick(e) {
      let v = {
        FocusTarget: {
          target: "Line",
          ID: e.oid,
          FocusType: true,
          IDType: "Line",
          EditMode: false,
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
        this.$bus.$emit("hangObj3", e);
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
    hang2(row, column, event) {
      if (this.showSelect) {
        this.$refs.mug12.toggleRowSelection(row);
        let arr = [];
        arr.push(row);
        let data = arr;
        let id = arr[0].oid;
        if (this.selectList.includes(id)) {
          for (let j = 0; j < this.selectList.length; j++) {
            if (this.selectList[j] == id) {
              this.selectList.splice(j, 1);
            }
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            this.selectList.push(data[i].oid);
          }
        }

        this.selectList = Array.from(new Set(this.selectList));
      } else {
      }
    },
    // 右键清除选中
    unHangClick() {
      this.$refs.mug12.setCurrentRow();
    },
    hang2s(row, column, event) {
      if (this.showSelect) {
        this.$refs.mug13.toggleRowSelection(row);
        let arr = [];
        arr.push(row);
        let data = arr;
        let id = arr[0].oid;
        if (this.selectList.includes(id)) {
          for (let j = 0; j < this.selectList.length; j++) {
            if (this.selectList[j] == id) {
              this.selectList.splice(j, 1);
            }
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            this.selectList.push(data[i].oid);
          }
        }

        this.selectList = Array.from(new Set(this.selectList));
      } else {
      }
    },
    // 右键清除选中
    unHangClicks() {
      this.$refs.mug13.setCurrentRow();
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
        this.page = 1;
      } else {
      }
      let newPage;
      if (this.showRZK) {
        newPage = this.page;
      } else {
        newPage = this.page1;
      }
      let v;
      if (window.isXZ == 1) {
        v = {
          search: {
            target: "Line",
            key: {
              params: [
                {
                  key: "sbmc",
                  value: this.daoXianName,
                },
                {
                  key: "ssxl",
                  value: this.line,
                },
                {
                  key: "qsgtmc",
                  value: this.qiDianName,
                },
                {
                  key: "zzgtmc",
                  value: this.zhongDianName,
                },
                {
                  key: "Unit",
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
                {
                  key: "provenice",
                  value: this.sj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],

              page: newPage,
              pageSize: 14,
              expansionData:
                "AND tuiyrq >=  '" +
                window.xzRiQi +
                "' and  tyrq <='" +
                window.xzRiQi +
                "'",
            },
          },
        };
      } else {
        v = {
          search: {
            target: "Line",
            key: {
              params: [
                {
                  key: "sbmc",
                  value: this.daoXianName,
                },
                {
                  key: "ssxl",
                  value: this.line,
                },
                {
                  key: "qsgtmc",
                  value: this.qiDianName,
                },
                {
                  key: "zzgtmc",
                  value: this.zhongDianName,
                },
                {
                  key: "Unit",
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
                {
                  key: "provenice",
                  value: this.sj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],

              page: newPage,
              pageSize: 14,
            },
          },
        };
      }

      let data = {
        functionName: "Search",
        backFunctionName: "jx_setList",
        functionParameters: [
          {
            key: "search",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.jx_setList = this.jx_setList;
    },
    // 获取数据列表回调
    jx_setList(e) {
      let data = JSON.parse(e);
      let data2 = data.data.LineInfo;
      this.total = parseInt(data.data.total);
      this.dataList = data2;
      this.$forceUpdate();

      // let data = JSON.parse(e);
      // let data2 = JSON.parse(data.value);
      // this.total = parseInt(data2.total);
      // this.dataList = data2.dataList;
      // for (let i = 0; i < this.dataList.length; i++) {
      //   if (this.dataList[i].Z_UE == -1) {
      //     this.dataList[i].Z_UE = 0;
      //   } else {
      //     this.dataList[i].Z_UE = parseInt(this.dataList[i].Z_UE - 1000);
      //   }
      // }
      // let datas = [];
      // for (let i = 0; i < 3; i++) {
      //   datas.push(data2.tableColumnList[i]);
      // }
      // this.tableColumnList4 = datas;
      // this.tableColumnList5 = data2.tableColumnList;
      // if (this.showRZK) {
      //   this.tableColumnList = this.tableColumnList5;
      // } else {
      //   this.tableColumnList = this.tableColumnList4;
      // }
      // this.$forceUpdate();
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
      let v = { range: { type: "Create", target: "Line", member: node } };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "jd_create",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.jd_create = this.jd_create;
    },
    jd_create(e) {
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
    jd_publish() {
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
      let v = { range: { type: "Delet", target: "Line", member: node } };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "jx_delete",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.jx_delete = this.jx_delete;
    },
    jx_delete(e) {
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
  height: 48px !important;
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
.newLieBiao {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
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
.new_block {
  width: 100%;
  height: 467px;
  overflow-y: scroll;
}
.new_block::-webkit-scrollbar {
  display: none;
}
.tjTT {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
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
.new_tjBlock {
  width: 100%;
  height: 492px;
}
.tjBlock {
  width: 182px;
  height: 58px;
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 918px;
  position: absolute;
  right: 10px;
  top: 140px;
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
  height: 800px;
  margin-left: 1%;
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

<style>
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
