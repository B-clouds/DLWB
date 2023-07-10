<template>
  <div class="yccxLeft">
    <!-- 返回默认页面 -->
    <!-- <div class="fh_mr" @click="fhMrClick"></div> -->
    <!-- <div class="s_show1" v-show="!showXX"></div>
    <div class="s_show2" v-show="!showXX"></div> -->
    <!-- 信息缩放按钮 -->
    <div class="xxsf" :class="showXX ? 'xxsf2' : ''" @click="sfxxClick"></div>
    <!-- 左侧阴影 -->
    <div class="zuo"></div>
    <!-- 返回 -->
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>xxxxx区域名称</span>
      </div>
      <div class="fanhui" @click="returnMain"></div>
    </div>
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
          <!-- 频度 -->
          <div class="tjBlock">
            <div class="tops">频度</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="pd_value"
                  @visible-change="pdClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in pd"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!pd_show" src="./img/xia.png" />
                <img v-show="pd_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 周期 -->
          <div class="tjBlock">
            <div class="tops">周期</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="line" />
                </div>
              </div>
            </div>
          </div>
          <!-- 维度 -->
          <div class="tjBlock">
            <div class="tops">维度</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="wd_value"
                  @visible-change="wdClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in wd"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!wd_show" src="./img/xia.png" />
                <img v-show="wd_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 算法 -->
          <div class="tjBlock">
            <div class="tops">算法</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="sf_value"
                  @visible-change="sfClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in sf"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!sf_show" src="./img/xia.png" />
                <img v-show="sf_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 操作时间 -->
          <div class="tjBlock">
            <div class="tops">操作时间</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="czsj_value"
                  @visible-change="czsjClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in czsj"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!czsj_show" src="./img/xia.png" />
                <img v-show="czsj_show" src="./img/shang.png" />
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
          <span>区域负荷预测</span>
        </div>
        <div class="t_bg">
          <el-table
            v-if="dataList.length > 0"
            ref="mug2"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2s"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClicks"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng1"
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
          <span>区域负荷预测</span>
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
            key="geng2"
          >
          </el-table>
          <el-table
            v-if="dataList.length > 0"
            ref="mug1"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClick"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng3"
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
  name: "yccxLeft",
  watch: {
    zfType_value(e, f) {
      this.getDateLists();
    },
    oam_value(e, f) {
      this.getDateLists();
    },
    dy_value(e, f) {
      this.getDateLists();
    },
    cj_value(e, f) {
      this.getDateLists();
    },
    sj_value(e, f) {
      this.getDateLists();
    },
    search(e, f) {
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
    search2(e, f) {
      this.getDateLists();
    },
  },
  data() {
    return {
      showXX: true,
      daoXianName: "", //电缆名称
      line: "", //所属线路
      qiDianName: "", //起点名称
      zhongDianName: "", //终点名称

      showDemo: true,
      showTJ: false,
      btnIndex: -1, //是否选中按钮
      // ------------------------站房类型------------------
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
      //终端名称
      search: "",
      // 电缆名称
      daoXianName: "",
      // 所属线路
      search2: "",
      // ----------------------------频度----------------------------------
      pd: [
        {
          value: "",
          label: "全部",
        },
      ],
      pd_value: "",
      pd_show: false,
      // ------------------------------维度--------------------------
      wd: [
        {
          value: "",
          label: "全部",
        },
      ],
      wd_value: "",
      wd_show: false,
      // --------------------------算法---------------------------
      sf: [
        {
          value: "",
          label: "全部",
        },
      ],
      sf_value: "",
      sf_show: false,
      // 操作时间----------------------------------
      czsj: [
        {
          value: "",
          label: "全部",
        },
      ],
      czsj_value: "",
      czsj_show: false,
      // -------------------------------列表数据-----------------------------
      dataList: [{}],
      tableColumnList: [{ propName: "1111" }],
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
    this.line = "";
    this.qiDianName = "";
    this.zhongDianName = "";

    this.zfType_value = "";
    this.search = "";
    this.oam_value = "";
    this.dy_value = "";
    this.cj_value = "";
    this.sj_value = "";
    this.page = 1;
    this.page1 = 1;
  },
  mounted() {
    let that = this;
    that.$bus.$on("leixChaXun", () => {
      that.getDateLists();
    });
  },
  methods: {
    // 返回默认页面
    fhMrClick() {
      this.$bus.$emit("showDetiles1", true);
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
        if (this.selectList.length > 0) {
          let node = this.selectList;
          let v = {
            range: {
              type: "Publish",
              target: "CableLine",
              member: node,
            },
          };
          let data = {
            functionName: "SaveGame",
            backFunctionName: "dz_publish",
            functionParameters: [
              {
                key: "range",
                value: JSON.stringify(v),
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
          window.ue.interface.dz_publish = this.dz_publish;
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
    pdClick(e) {
      this.pd_show = e;
    },
    wdClick(e) {
      this.wd_show = e;
    },
    sfClick(e) {
      this.sf_show = e;
    },
    czsjClick(e) {
      this.czsj_show = e;
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
          target: "CableLine",
          ID: e.oid,
          FocusType: true,
          IDType: "CableLine",
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

      this.$bus.$emit("hangObj", e);
      this.$emit("isShowItem", e.oid);
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    hang2(row, column, event) {
      if (this.showSelect) {
        this.$refs.mug1.toggleRowSelection(row);
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
      this.$refs.mug1.setCurrentRow();
    },
    hang2s(row, column, event) {
      if (this.showSelect) {
        this.$refs.mug2.toggleRowSelection(row);
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
      this.$refs.mug2.setCurrentRow();
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
      if (window.isXZ == 1) {
        v = {
          search: {
            target: "CableLine",
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
                  key: "qsgt",
                  value: this.qiDianName,
                },
                {
                  key: "zzgt",
                  value: this.zhongDianName,
                },
                {
                  key: "unit",
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
                  key: "ssly",
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
            target: "CableLine",
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
                  key: "qsgt",
                  value: this.qiDianName,
                },
                {
                  key: "zzgt",
                  value: this.zhongDianName,
                },
                {
                  key: "unit",
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
                  key: "ssly",
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
        backFunctionName: "setList",
        functionParameters: [
          {
            key: "search",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.setList = this.setList;
    },
    // 获取数据列表回调
    setList(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      this.total = parseInt(data2.total);
      this.dataList = data2.dataList;
      let datas = [];
      for (let i = 0; i < 3; i++) {
        datas.push(data2.tableColumnList[i]);
      }
      this.tableColumnList4 = datas;
      this.tableColumnList5 = data2.tableColumnList;
      if (this.showRZK) {
        this.tableColumnList = this.tableColumnList5;
      } else {
        this.tableColumnList = this.tableColumnList4;
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
        range: { type: "Create", target: "CableLine", member: node },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "dz_create",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_create = this.dz_create;
    },
    dz_create(e) {
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
    dz_publish() {
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
        range: { type: "Delet", target: "CableLine", member: node },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "dz_delete",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_delete = this.dz_delete;
    },
    dz_delete(e) {
      this.dataList = [];
      this.tableColumnList = [];
      this.selectList = [];

      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
    },
    // 返回
    returnMain() {
      this.$bus.$emit("returnMain", true);
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
.yccxLeft {
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
  top: 320px;
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
<style scoped>
.gl_top {
  position: fixed;
  top: 125px;
  left: 10px;
  display: flex;
  align-items: center;
  width: 379px;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.gl_top > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 16px;
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
  position: absolute;
  left: 337px;
  width: 31px;
  height: 31px;
  background: url("img/fanhui.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
</style>