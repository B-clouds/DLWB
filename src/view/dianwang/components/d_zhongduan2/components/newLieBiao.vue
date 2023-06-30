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
          <span>设为主管廊</span>
        </div>
        <div
          class="btnItem"
          @click="repossess"
          :class="btnIndex == 2 ? 'btnItem2' : ''"
        >
          <span>取消主管廊</span>
        </div>
        <div
          class="btnItem"
          @click="deleteClick"
          :class="btnIndex == 3 ? 'btnItem2' : ''"
        >
          <span>合并</span>
        </div>

        <div
          class="btnItem"
          @click="deleteClick"
          :class="btnIndex == 4 ? 'btnItem2' : ''"
        >
          <span>分离</span>
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
            <span>设为主管廊</span>
          </div>
          <div
            class="btnItem"
            @click="repossess"
            :class="btnIndex == 2 ? 'btnItem2' : ''"
          >
            <span>取消主管廊</span>
          </div>
          <div
            class="btnItem"
            @click="deleteClick"
            :class="btnIndex == 3 ? 'btnItem2' : ''"
          >
            <span>合并</span>
          </div>
          <div
            class="btnItem"
            @click="deleteClick2"
            :class="btnIndex == 4 ? 'btnItem2' : ''"
          >
            <span>分离</span>
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
          <!-- 主管廊名称 -->
          <div class="tjBlock">
            <div class="tops">主管廊名称</div>
            <div class="bottoms">
              <div class="inputs">
                <div class="inputs">
                  <input placeholder="" v-model="zglName" />
                </div>
              </div>
            </div>
          </div>
          <!-- 是否主管廊 -->
          <div class="tjBlock">
            <div class="tops">是否主管廊</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="sfzgl"
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
          <!-- 是否已合并 -->
          <div class="tjBlock">
            <div class="tops">是否已合并</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="hbzt"
                  @visible-change="cjClick2"
                  placeholder=""
                >
                  <el-option
                    v-for="item in chuangjian2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!cj_show2" src="./img/xia.png" />
                <img v-show="cj_show2" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 运维单位 -->
          <div class="tjBlock">
            <div class="tops">运维单位</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="ywdw"
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
          <!-- 电压等级 -->
          <div class="tjBlock">
            <div class="tops">电压等级</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="dydj"
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
          <span>主管廊明细</span>
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
            key="geng8"
          >
          </el-table>
          <el-table
            v-if="dataList.length > 0"
            ref="mug4"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2s"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClicks"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng9"
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
          <span>主管廊明细</span>
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
            key="geng10"
          >
          </el-table>
          <el-table
            v-if="dataList.length > 0"
            ref="mug3"
            :data="dataList"
            tooltip-effect="dark"
            class="e_tables"
            highlight-current-row
            @row-click="hang2"
            @row-dblclick="hangClick"
            @row-contextmenu="unHangClick"
            @select="s_Click"
            @select-all="s_all_Click"
            key="geng11"
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

    <!-- 已为主管廊提示弹框-->
    <div class="zhezhao" v-show="showTSTK1">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>所选数据已为主管廊，无需设置，请核实后再进行该操作</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK1">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 已处于合并提示弹框-->
    <div class="zhezhao" v-show="showTSTK2">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >所选数据已处于合并状态，无法设为主管廊，请将该管廊进行分离操作</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK2">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 设为主管廊确认弹框-->
    <div class="zhezhao" v-show="showTSTK3">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>是否为该条数据设为主管廊?</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK3Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK3">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 不是主管廊提示弹框-->
    <div class="zhezhao" v-show="showTSTK4">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>所选数据不是主管廊，无需进行该操作</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK4">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 分离合并数据提示弹框-->
    <div class="zhezhao" v-show="showTSTK5">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >该主管廊下有其他合并数据，请将这些数据分离后，再进行操作。</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK5">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 取消主管廊确认弹框-->
    <div class="zhezhao" v-show="showTSTK6">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span
            >该操作将取消所选数据的主管廊状态，同时取消合并状态，是否继续?</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK6Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK6">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 合并 判断是否选中数据大于1-->
    <div class="zhezhao" v-show="showTSTK7">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>单条数据无法进行合并，请选择两条及以上数据，再进行该操作</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK7">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 合并 判断所选中的数据中无主管廊-->
    <div class="zhezhao" v-show="showTSTK8">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >所选中的数据中无主管廊，无法进行合并，请核实后再进行该操作</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK8">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 合并 判断所选中的数据中含有多个主管廊-->
    <div class="zhezhao" v-show="showTSTK9">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >所选中的数据中含有多个主管廊，无法进行合并，请核实后再进行该操作</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK9">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 合并 判断所选中的数据中含有已合并到其他主管廊的数据-->
    <div class="zhezhao" v-show="showTSTK10">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >所选中的数据中含有已合并到其他主管廊的数据，无法进行合并，请核实后再进行该操作</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK10">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 确认合并主管廊-->
    <div class="zhezhao" v-show="showTSTK11">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>该操作将把所选中的模型合并到主管廊中，是否继续该操作？</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK11Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK11">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 分离 选中数据有主管廊-->
    <div class="zhezhao" v-show="showTSTK12">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>不能对主管廊进行分离，请核实后再进行该操作。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK12">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 分离 选中数据有有未合并的管廊-->
    <div class="zhezhao" v-show="showTSTK13">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span
            >所选中数据中含有未合并数据，无法进行分离，请核实后再进行该操作。</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK13">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 确认分离管廊-->
    <div class="zhezhao" v-show="showTSTK14">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span
            >该操作将把合并的管廊模型进行分离，并在场景中进行单独展示，是否继续？</span
          >
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="TSTK14Click">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTSTK14">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newLieBiao",
  watch: {
    zfType_value(e, f) {
      this.getDateLists();
    },
    ywdw(e, f) {
      this.getDateLists();
    },
    dydj(e, f) {
      this.getDateLists();
    },
    sfzgl(e, f) {
      this.getDateLists();
    },
    hbzt(e, f) {
      this.getDateLists();
    },
    dd_value(e, f) {
      this.getDateLists();
    },
    zglName(e, f) {
      this.getDateLists();
    },
    search2(e, f) {
      this.getDateLists();
    },
  },
  data() {
    return {
      showXX: true,
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
      // 主管廊名称
      zglName: "",
      // 所属线路
      search2: "",
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
      ywdw: "",
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
      dydj: "",
      dy_show: "",
      // --------------------------是否主管廊---------------------------
      chuangjian: [
        {
          value: "true",
          label: "是",
        },
        {
          value: "false",
          label: "否",
        },

        {
          value: "",
          label: "全部",
        },
      ],
      sfzgl: "",
      cj_show: false,
      // --------------------是否已合并----------------------------
      chuangjian2: [
        {
          value: "true",
          label: "是",
        },
        {
          value: "false",
          label: "否",
        },

        {
          value: "",
          label: "全部",
        },
      ],
      hbzt: "",
      cj_show2: false,
      // 数据来源----------------------------------
      dd: [
        {
          value: "中台数据",
          label: "中台数据",
        },
        {
          value: "外部数据",
          label: "外部数据",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      dd_value: "",
      dd_show: false,
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

      showTSTK1: false, //已是主管廊提示弹框
      showTSTK2: false, //已经合并提示弹框
      showTSTK3: false, //设为主管廊确认弹框

      showTSTK4: false, //不是主管廊主管廊提示弹框
      showTSTK5: false, //分离提示弹框
      showTSTK6: false, //取消主管廊确认弹框

      showTSTK7: false, //选中数据是否大于1
      showTSTK8: false, //没有主管廊
      showTSTK9: false, //是否不止一条主管廊
      showTSTK10: false, //是否有已合并数据
      showTSTK11: false, //合并主管廊确认弹框

      showTSTK12: false, //分离提示弹框1
      showTSTK13: false, //分离提示弹框2
      showTSTK14: false, //分离管廊确认弹框
    };
  },
  deactivated() {
    this.zfType_value = "";
    this.search = "";
    this.ywdw = "";
    this.dydj = "";
    this.sfzgl = "";
    this.dd_value = "";
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
      URL: "data/tableColumnInfo/" + 106 + "/" + 0 + "/" + 106 + "/" + 1,
      StructName: "获取管廊管理表头",
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
    closeTSTK1() {
      this.showTSTK1 = false;
    },
    closeTSTK2() {
      this.showTSTK2 = false;
    },
    closeTSTK3() {
      this.showTSTK3 = false;
    },
    closeTSTK4() {
      this.showTSTK4 = false;
    },
    closeTSTK5() {
      this.showTSTK5 = false;
    },
    closeTSTK6() {
      this.showTSTK6 = false;
    },
    closeTSTK7() {
      this.showTSTK7 = false;
    },
    closeTSTK8() {
      this.showTSTK8 = false;
    },
    closeTSTK9() {
      this.showTSTK9 = false;
    },
    closeTSTK10() {
      this.showTSTK10 = false;
    },
    closeTSTK11() {
      this.showTSTK11 = false;
    },
    closeTSTK12() {
      this.showTSTK12 = false;
    },
    closeTSTK13() {
      this.showTSTK13 = false;
    },
    closeTSTK14() {
      this.showTSTK14 = false;
    },
    // 设为主管廊确认弹框
    TSTK3Click() {
      this.setCreates();
    },
    // 取消主管廊确认弹框
    TSTK6Click() {
      let newData = [];
      for (let i = 0; i < this.selectList.length; i++) {
        newData.push(this.selectList[i].oid);
      }
      let v = {
        verbType: "POST",
        URL: "/xa/setMain",
        StructName: "取消主管廊",
        value: {
          ids: newData,
          param: "0",
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "dz_publish",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_publish = this.dz_publish;
    },
    // 合并主管廊确认弹框
    TSTK11Click() {
      let newData = [];
      for (let i = 0; i < this.selectList.length; i++) {
        newData.push(this.selectList[i].oid);
      }
      let v = {
        verbType: "POST",
        URL: "/xa/merge",
        StructName: "合并主管廊",
        value: {
          ids: newData,
          param: "1",
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "dz_hbzgl",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_hbzgl = this.dz_hbzgl;
    },

    // 分离主管廊确认弹框
    TSTK14Click() {
      let newData = [];
      for (let i = 0; i < this.selectList.length; i++) {
        newData.push(this.selectList[i].oid);
      }
      let v = {
        verbType: "POST",
        URL: "/xa/merge",
        StructName: "分离主管廊",
        value: {
          ids: newData,
          param: "0",
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "dz_flzgl",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_flzgl = this.dz_flzgl;
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
        if (this.selectList.length > 0) {
          //合并主管廊 进行判断

          for (let i = 0; i < this.selectList.length; i++) {
            if (this.selectList[i].sfzgl == "1") {
              // 该条数据已为主管廊，无需设置，请核实后再进行该操作
              this.showTSTK1 = true;
              break;
            } else if (this.selectList[i].hbzt == "1") {
              // 提示：该条数据已处于合并状态，无法设为主管廊，如确实需要设为主管廊，请将该管廊进行分离操作
              this.showTSTK2 = true;
              break;
            } else {
              // 警示：是否为该条数据设为主管廊，点击是后，将该条数据设为主管廊。点击否，则关闭提示框，页面不变
              this.showTSTK3 = true;
              break;
            }
          }
        }
      } else if (this.btnIndex == 2) {
        if (this.selectList.length > 0) {
          //取消主管廊 进行判断
          for (let i = 0; i < this.selectList.length; i++) {
            if (this.selectList[i].sfzgl == "0") {
              // 所选数据不是主管廊，无需进行该操作
              this.showTSTK4 = true;
              break;
            } else if (this.selectList[i].glids.length > 0) {
              // 提示：该主管廊下有其他合并数据，请将这些数据分离后，再进行操作
              this.showTSTK5 = true;
              break;
            } else {
              // 警示：该操作将取消所选数据的主管廊状态，同时取消合并状态，是否继续
              this.showTSTK6 = true;
              break;
            }
          }
        }
      } else if (this.btnIndex == 3) {
        // -----------------------合并管廊----------------------------
        if (this.selectList.length > 0) {
          // 1.判断，数据是否一条
          if (this.selectList.length == 1) {
            // 2.弹出提示弹框，（单条数据无法进行合并，请选择两条及以上数据，再进行该操作
            this.showTSTK7 = true;
          } else {
            // 4.提前进行循环，获取有几条主管廊，以方便下面进行判断
            var num = 0; //存放是否是主管廊
            var num2 = 0; //存放是否是已有合并的数据

            for (let i = 0; i < this.selectList.length; i++) {
              if (this.selectList[i].sfzgl == "1") {
                num++;
              } else if (this.selectList[i].hbzt == "1") {
                num2++;
              }
            }
            // 3合并管廊，进行判断
            for (let i = 0; i < this.selectList.length; i++) {
              if (num < 1) {
                // 判断所选中的数据有没有主管廊 进行提示： 所选中的数据中无主管廊，无法进行合并，请核实后再进行该操作
                this.showTSTK8 = true;
                break;
              } else if (num > 1) {
                // 判断所选中的数据是否有多条主管廊 进行提示： 所选中的数据中含有多个主管廊，无法进行合并，请核实后再进行该操作
                this.showTSTK9 = true;
                break;
              } else {
                if (num2 != 0) {
                  //判断所选中的数据是否有以合并数据   进行提示： 所选中的数据中含有已合并到其他主管廊的数据，无法进行合并，请核实后再进行该操作
                  this.showTSTK10 = true;
                } else {
                  //   确认弹框
                  this.showTSTK11 = true;
                }
              }
            }
          }
        }
      } else if (this.btnIndex == 4) {
        // 循环遍历
        var num = 0; //存放是否是主管廊
        var num2 = 0; //存放是否是已有合并的数据

        for (let i = 0; i < this.selectList.length; i++) {
          if (this.selectList[i].sfzgl == "1") {
            num++;
          } else if (this.selectList[i].hbzt == "0") {
            num2++;
          }
        }

        // 2分离管廊，进行判断
        for (let i = 0; i < this.selectList.length; i++) {
          if (num > 0) {
            // 不能对主管廊进行分离，请核实后再进行该操作。
            this.showTSTK12 = true;
            break;
          } else {
            if (num2 != 0) {
              //所选中数据中含有未合并数据，无法进行分离，请核实后再进行该操作。
              this.showTSTK13 = true;
              break;
            } else {
              //   所选中数据中含有未合并数据，无法进行分离，请核实后再进行该操作。
              this.showTSTK14 = true;
            }
          }
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
    cjClick2(e) {
      this.cj_show2 = e;
    },
    ddClick(e) {
      this.dd_show = e;
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
          target: "CablePGS",
          ID: e.oid,
          FocusType: true,
          IDType: "CablePGS",
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
        this.$emit("isShowItem", e.oid);
        let that = this;
        setTimeout(() => {
          that.$bus.$emit("glsjHangObj", e);
        }, 50);

        window.dlData = e;
        ue.interface.broadcast("PSAPI", JSON.stringify(data));

        let v2 = { ChooseType: "CablePGPEditer", value: "true" };
        let datas = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v2), //切换类型
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(datas));
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
        this.$refs.mug3.toggleRowSelection(row);
        let arr = [];
        arr.push(row);
        let data = arr;
        let id = arr[0];
        if (this.selectList.includes(id)) {
          for (let j = 0; j < this.selectList.length; j++) {
            if (this.selectList[j] == id) {
              this.selectList.splice(j, 1);
            }
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            this.selectList.push(data[i]);
          }
        }

        this.selectList = Array.from(new Set(this.selectList));
      } else {
      }
    },
    // 右键清除选中
    unHangClick() {
      this.$refs.mug3.setCurrentRow();
    },
    hang2s(row, column, event) {
      if (this.showSelect) {
        this.$refs.mug4.toggleRowSelection(row);
        let arr = [];
        arr.push(row);
        let data = arr;
        let id = arr[0];
        if (this.selectList.includes(id)) {
          for (let j = 0; j < this.selectList.length; j++) {
            if (this.selectList[j] == id) {
              this.selectList.splice(j, 1);
            }
          }
        } else {
          for (let i = 0; i < data.length; i++) {
            this.selectList.push(data[i]);
          }
        }

        this.selectList = Array.from(new Set(this.selectList));
      } else {
      }
    },
    // 右键清除选中
    unHangClicks() {
      this.$refs.mug4.setCurrentRow();
    },
    // 点击单选
    s_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i]);
      }
      this.selectList = Array.from(new Set(this.selectList));
    },
    // 点击全选
    s_all_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i]);
      }
    },
    // 获取表头
    getxlTh(e) {
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
    // --------------------------------------------查询---------------------------------------
    // 查询方法
    inquire() {
      1;
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
            target: "CablePGS",
            key: {
              params: [
                {
                  key: "sbmc",
                  value: this.zglName,
                },
                {
                  key: "sfzgl",
                  value: this.sfzgl,
                },
                {
                  key: "hbzt",
                  value: this.hbzt,
                },
                {
                  key: "ywdw",
                  value: this.ywdw,
                },
                {
                  key: "dydj",
                  value: this.dydj,
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
            target: "CablePGS",
            key: {
              params: [
                {
                  key: "sbmc",
                  value: this.zglName,
                },
                {
                  key: "sfzgl",
                  value: this.sfzgl,
                },
                {
                  key: "hbzt",
                  value: this.hbzt,
                },
                {
                  key: "ywdw",
                  value: this.ywdw,
                },
                {
                  key: "dydj",
                  value: this.dydj,
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
      let data2 = data.data.CablePGSInfo;
      this.total = parseInt(data.data.total);
      this.dataList = data2;

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
      let newData = [];
      for (let i = 0; i < this.selectList.length; i++) {
        newData.push(this.selectList[i].oid);
      }

      let v = {
        verbType: "POST",
        URL: "xa/setMain",
        StructName: "设为主管廊",
        value: {
          ids: newData,
          param: "1",
        },
      };
      let data = {
        functionName: "WebServerMsg",
        backFunctionName: "dz_create",
        functionParameters: [
          {
            key: "WebServerMsg",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dz_create = this.dz_create;
    },
    dz_create(e) {
      this.dataList = [];
      this.selectList = [];
      this.showTSTK3 = false;
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
      this.selectList = [];
      this.showTSTK6 = false;
      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
    },
    // ---------------------------------合并管廊-------------------
    deleteClick() {
      if (this.btnIndex == 3) {
        this.btnIndex = -1;
        this.showSelect = false;
      } else {
        this.btnIndex = 3;
        this.showSelect = true;
      }
    },
    dz_hbzgl() {
      this.dataList = [];
      this.selectList = [];
      this.showTSTK11 = false;
      let that = this;
      setTimeout(() => {
        that.getDateLists();
      }, 100);
    },
    // --------------------------------------分离管廊----------------------------
    deleteClick2() {
      if (this.btnIndex == 4) {
        this.btnIndex = -1;
        this.showSelect = false;
      } else {
        this.btnIndex = 4;
        this.showSelect = true;
      }
    },
    dz_flzgl() {
      this.dataList = [];
      this.selectList = [];
      this.showTSTK14 = false;
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
  height: 378px;
  position: absolute;
  left: 43px;
  top: 174px;
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
  font-size: 18px;
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
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 11, 23, 0.6);
}
</style>
<style scoped>
.z_delete {
  width: 348px;
  height: 133px;
  background: url("img/de.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_d_block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.z_d_block > img {
  width: 22px;
  height: 20px;
  margin-left: 19px;
  margin-right: 4px;
}
.z_d_block > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang {
  width: 348px;
  height: 174px;
  background: url("img/tk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_tankuang2 {
  height: 218px !important;
  background: url("img/tk2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_cha {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 10px;
  background: url("img/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.z_tankuang > .z_title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 18px;
}
.z_tankuang > .z_title > span {
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  margin-left: 30px;
}
.z_tankuang > .z_blockss {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.z_tankuang > .z_blockss > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffe856;
  margin-left: 26px;
}
.z_tankuang > .z_input {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
  width: 55px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang > .z_input > .rights {
  width: 216px;
  height: 32px;
  background: url("img/inputs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.z_btn > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}

.z_btn2 {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.z_btn2 > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-left: 10px;
}
.z_btn2 > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.addUpdTK {
  width: 347px;
  height: 300px;
  background: url("img/adtk.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
}
.tk_title {
  width: 100%;
  height: 40px;
  margin-top: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  z-index: 1;
}
.tk_title > span {
  margin-left: 31px;
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  z-index: 1;
}

.tk_blocks {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.tk_blocks > .rights {
  width: 216px;
  height: 32px;
  margin-right: 38px;
  margin-left: 16px;
}
.tk_blocks > .rights > .r1 {
  width: 100%;
  height: 100%;
  background: url("img/r1.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.tk_blocks > .rights > .r1 > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
  margin-left: 10px;
}
.tk_blocks > .rights > .r2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("img/r2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tk_blocks > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>

<style scoped>
.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  /* background: rgba(25, 61, 112, 0.8); */
  box-sizing: border-box;
  /* border: 1px solid #3876b6; */
}
.inputs > img {
  position: absolute;
  top: 12px;
  right: 8px;
  width: 14px;
  height: 8px;
  z-index: 1;
}
</style>
<style>
/* 下拉框样式自定义 */
.el-select {
  width: 100% !important;
  height: 100% !important;
}
.inputs .el-select > .el-input > .el-input__inner {
  height: 32px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 32px !important;
  margin-left: 4px;
  color: #ffffff !important;
  z-index: 9;
}
.el-scrollbar__wrap {
  margin: 0 !important;
}
</style>
<style scoped>
.top-scroll {
  width: 100%;
  overflow-x: auto;
}
.top-scroll-content {
  /* 高度不设置的话滚动条出不来 */
  height: 6px;
}
</style>
<style scoped>
.z_delete {
  width: 348px;
  height: 133px;
  background: url("img/de.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_d_block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.z_d_block > img {
  width: 22px;
  height: 20px;
  margin-left: 19px;
  margin-right: 4px;
}
.z_d_block > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang {
  width: 348px;
  height: 174px;
  background: url("img/tk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_tankuang2 {
  height: 218px !important;
  background: url("img/tk2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_tankuang > .z_cha {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 10px;
  background: url("img/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.z_tankuang > .z_title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 18px;
}
.z_tankuang > .z_title > span {
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  margin-left: 30px;
}
.z_tankuang > .z_blockss {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.z_tankuang > .z_blockss > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffe856;
  margin-left: 26px;
}
.z_tankuang > .z_input {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
  width: 55px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang > .z_input > .rights {
  width: 216px;
  height: 32px;
  background: url("img/inputs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.z_btn > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}

.z_btn2 {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.z_btn2 > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn2 > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
</style>
