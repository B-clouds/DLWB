<template>
  <div class="shaiXuan">
    <!-- <div class="bg"></div> -->
    <div class="condition">
      <div class="tops">
        <div class="titles"></div>
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
        <!-- 电站 -->
        <div class="c_block" v-show="currentIndex == 0">
          <!-- 站房类型 -->
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
          <div class="names">
            <span>站房名称</span>
            <div class="inputs">
              <input placeholder="" v-model="zf_search" />
            </div>
          </div>
          <!-- 运维单位 -->
          <div class="names">
            <span>运维单位</span>
            <div class="inputs">
              <el-select
                v-model="zf_oam_value"
                @visible-change="zf_oamClick"
                placeholder=""
              >
                <el-option
                  v-for="item in zf_oam"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!zf_oam_show" src="./img/xia.png" />
              <img v-show="zf_oam_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 电压 -->
          <div class="names">
            <span>电压等级</span>
            <div class="inputs">
              <el-select
                v-model="zf_dy_value"
                @visible-change="zf_dyClick"
                placeholder=""
              >
                <el-option
                  v-for="item in zf_dianya"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!zf_dy_show" src="./img/xia.png" />
              <img v-show="zf_dy_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 模型状态 -->
          <div class="names">
            <span>模型状态</span>
            <div class="inputs">
              <el-select
                v-model="zf_cj_value"
                @visible-change="zf_cjClick"
                placeholder=""
              >
                <el-option
                  v-for="item in zf_chuangjian"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!zf_cj_show" src="./img/xia.png" />
              <img v-show="zf_cj_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
        <!-- 线路 -->
        <div class="c_block" v-show="currentIndex == 1">
          <!-- 线路名称 -->
          <div class="names">
            <span>线路名称</span>
            <div class="inputs">
              <input placeholder="" v-model="xl_name" />
            </div>
          </div>
          <!-- 起点名称 -->
          <div class="names">
            <span>起点名称</span>
            <div class="inputs">
              <input placeholder="" v-model="xl_qdname" />
            </div>
          </div>
          <!-- 终点名称 -->
          <div class="names">
            <span>终点名称</span>
            <div class="inputs">
              <input placeholder="" v-model="xl_zdname" />
            </div>
          </div>
          <!-- 电压 -->
          <div class="names">
            <span>电压等级</span>
            <div class="inputs">
              <el-select
                v-model="xl_dy_value"
                @visible-change="xl_dyClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_dianya"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_dy_show" src="./img/xia.png" />
              <img v-show="xl_dy_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 所属地市 -->
          <div class="names">
            <span>所属地市</span>
            <div class="inputs">
              <el-select
                v-model="xl_ds_value"
                @visible-change="xl_dsClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_ds_suoshu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_ds_show" src="./img/xia.png" />
              <img v-show="xl_ds_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 运维单位 -->
          <div class="names">
            <span>运维单位</span>
            <div class="inputs">
              <el-select
                v-model="xl_oam_value"
                @visible-change="xl_oamClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_oam"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_oam_show" src="./img/xia.png" />
              <img v-show="xl_oam_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
        <!-- 变压器 -->
        <div class="c_block" v-show="currentIndex == 2">
          <!-- 设备名称 -->
          <div class="names">
            <span>设备名称</span>
            <div class="inputs">
              <input placeholder="" v-model="byq_name" />
            </div>
          </div>
          <!-- 所属线路 -->
          <div class="names">
            <span>所属线路</span>
            <div class="inputs">
              <input placeholder="" v-model="byq_xlname" />
            </div>
          </div>
          <!-- 所属杆塔 -->
          <div class="names">
            <span>所属杆塔</span>
            <div class="inputs">
              <input placeholder="" v-model="byq_gtname" />
            </div>
          </div>
          <!-- 电压 -->
          <div class="names">
            <span>电压等级</span>
            <div class="inputs">
              <el-select
                v-model="xl_dy_value"
                @visible-change="xl_dyClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_dianya"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_dy_show" src="./img/xia.png" />
              <img v-show="xl_dy_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 所属地市 -->
          <div class="names">
            <span>所属地市</span>
            <div class="inputs">
              <el-select
                v-model="xl_ds_value"
                @visible-change="xl_dsClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_ds_suoshu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_ds_show" src="./img/xia.png" />
              <img v-show="xl_ds_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 运维单位 -->
          <div class="names">
            <span>运维单位</span>
            <div class="inputs">
              <el-select
                v-model="xl_oam_value"
                @visible-change="xl_oamClick"
                placeholder=""
              >
                <el-option
                  v-for="item in xl_oam"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!xl_oam_show" src="./img/xia.png" />
              <img v-show="xl_oam_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tables">
      <div class="t_bg">
        <el-table
          ref="multipleTable"
          :data="dataList"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
          @select="s_Click"
          @select-all="s_all_Click"
          key="geng36"
        >
          <el-table-column
            align="center"
            :label="item.propName"
            :property="item.prop"
            v-for="item in tableColumnList"
            :key="item.id"
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
            :page-size="6"
            :total="total"
            @current-change="pageClick"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="zhezhao2" v-show="showMb">
      <div class="zBlocs">
        <div class="closezB" @click="closeMbclick"></div>
        <div class="titles">
          <span>场景创建提醒</span>
        </div>
        <div class="icons"></div>
        <div class="titleItem">
          <span>当前场景电网构架已生成：</span>
          <span class="span1" v-for="(item, index) in kvList" :key="index"
            >{{ item }},</span
          >
        </div>
        <div class="mbBtn mbBtn2" @click="closeMbclick2">
          <span>继续加载</span>
        </div>
        <div class="mbBtn" @click="tuichu2">
          <span>关闭</span>
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
    that.$bus.$on("navIndexs", (e) => {
      that.currentIndex = e;
      // 获取电压等级集合
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
      let ids;
      if (e == 0) {
        ids = 1000;
      } else if (e == 1) {
        ids = 1001;
      } else if (e == 2) {
        ids = 1002;
      } else if (e == 3) {
        ids = 1003;
      } else if (e == 4) {
        ids = 1004;
      } else if (e == 5) {
        ids = 1005;
      }
      // 获取表头
      let v = {
        URL: "data/tableColumnInfo/" + ids + "/" + 0 + "/" + 1000 + "/" + 1,
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
    });
  },
  deactivated() {},
  data() {
    return {
      currentIndex: 0,
      // ----------------------------------------电站----------------------------------
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
      // 站房名称
      zf_search: "",
      // 站房运维单位
      zf_oam: [
        {
          value: "国网雄县供电公司",
          label: "国网雄县供电公司",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      zf_oam_value: "",
      zf_oam_show: false,
      // 站房电压等级
      zf_dianya: [
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
      zf_dy_value: "",
      zf_dy_show: "",
      // 站房模型状态
      zf_chuangjian: [
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
      zf_cj_show: false,
      // ---------------------------------------------线路------------------------------------
      xl_name: "", //线路名称
      xl_qdname: "", //线路起点名称
      xl_zdname: "", //线路终点名称
      xlKV: [], //接口获取线路kv
      // 线路电压等级
      xl_dianya: [
        {
          value: "交流220kV",
          label: "交流220kV",
        },
        {
          value: "交流110kV",
          label: "交流110kV",
        },
        {
          value: "交流35kV",
          label: "交流35kV",
        },
        {
          value: "交流10kV",
          label: "交流10kV",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      xl_dy_value: "",
      xl_dy_show: "",
      // 线路所属地市
      xl_ds_suoshu: [
        {
          value: "",
          label: "全部",
        },
      ],
      xl_ds_value: "",
      xl_ds_show: "",
      // 线路运维单位
      xl_oam: [
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
      xl_oam_show: false,
      // ---------------------------------------变压器--------------------------------------------
      byq_name: "", //设备名称
      byq_xlname: "", //所属线路
      byq_gtname: "", //所属杆塔

      search: "",
      daoXianName: "", //导线名称
      line: "", //所属线路
      qiDianName: "", //起点名称
      zhongDianName: "", //终点名称
      dataList: [{}],
      tableColumnList: [{}],

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
      showMb: false,
      kvList: [],
    };
  },

  methods: {
    // --------------------站房----------------------------------------
    // 站房类型
    zfTypeClick(e) {
      this.zfType_show = e;
    },
    // 站房运维单位
    zf_oamClick(e) {
      this.zf_oam_show = e;
    },
    // 站房电压等级
    zf_dyClick(e) {
      this.zf_dy_show = e;
    },
    // 站房模型状态
    zf_cjClick(e) {
      this.zf_cj_show = e;
    },
    // ---------------------线路-------------------------------
    BackGetSelectKv(e) {
      let data = JSON.parse(e).value;
      this.xlKV = data;
    },
    // 站房电压等级
    xl_dyClick(e) {
      this.xl_dy_show = e;
    },
    xl_dsClick(e) {
      this.xl_ds_show = e;
    },
    xl_oamClick(e) {
      this.xl_oam_show = e;
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
      this.getDateLists();
    },
    // 获取表头
    getxlTh(e) {
      let data2 = JSON.parse(e).data;
      this.tableColumnList = data2.data;
      this.dataList = [];
    },
    // 点击单行
    hangClick(e) {
      if (this.currentIndex == 0) {
        let v = {
          type: "SelectHStation",
          selectType: "true",
          value: e.oid,
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
        this.$emit("isShowItem", e.oid);
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
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
        this.$bus.$emit("hangObj", e);
        this.$emit("isShowItem", e.oid);
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
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
        this.selectList.push(data[i].id);
      }
      this.selectList = Array.from(new Set(this.selectList));
    },
    // 点击全选
    s_all_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i].id);
      }
    },

    handleCurrentChange(val) {
      this.multipleSelection = val;
    },

    closeMbclick() {
      this.showMb = false;
    },
    closeMbclick2() {
      this.showMb = false;
      this.$router.push({
        path: "/hongguan",
      });
      let v = { ChooseType: "SwitchMactv", value: true };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    tuichu2() {
      this.getDateLists(0);
    },
    // 查询方法
    inquire() {
      if (this.xlKV.length != 4) {
        this.kvList = this.xlKV;
        this.showMb = true;
      } else {
        this.getDateLists(0);
      }
    },
    getDateLists(e) {
      if (e == 0) {
        this.page = 1;
      } else {
      }
      var v = {};
      if (this.currentIndex == 0) {
        // 电站
        if (window.isXZ == 1) {
          v = {
            URL: "xa/getCustomData",
            StructName: "linefile",
            value: {
              data: this.xlKV,
              field: "dydj",
              queryData: [
                {
                  key: "dzlx",
                  value: this.zfType_value,
                },
                {
                  key: "bdzmc",
                  value: this.zf_search,
                },
                // {
                //   key: "ywdw",
                //   value: this.zf_oam_value,
                // },
                {
                  key: "dydj",
                  value: this.zf_dy_value,
                },
                {
                  key: "fbzt",
                  value: this.zf_cj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],
              name: "Data_HStationInfo",
              pageNo: this.page,
              pageSize: 6,
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
                  key: "dzlx",
                  value: this.zfType_value,
                },
                {
                  key: "bdzmc",
                  value: this.zf_search,
                },
                // {
                //   key: "ywdw",
                //   value: this.zf_oam_value,
                // },
                {
                  key: "dydj",
                  value: this.zf_dy_value,
                },
                {
                  key: "fbzt",
                  value: this.zf_cj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],
              name: "Data_HStationInfo",
              pageNo: this.page,
              pageSize: 6,
              tbName: "LineFileInfo",
            },
            verbType: "POST",
          };
        }
      } else if (this.currentIndex == 1) {
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
              ],
              name: "Data_LineFileInfo",
              pageNo: this.page,
              pageSize: 6,
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
              ],
              name: "Data_LineFileInfo",
              pageNo: this.page,
              pageSize: 6,
              tbName: "LineFileInfo",
            },
            verbType: "POST",
          };
        }
      } else if (this.currentIndex == 2) {
        // 变压器
      } else if (this.currentIndex == 3) {
        // 杆塔
      } else if (this.currentIndex == 4) {
        // 微网
      } else if (this.currentIndex == 5) {
        // 开关
      }
      // ----
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
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.zx_setList = this.zx_setList;
    },
    // 获取数据列表回调
    zx_setList(e) {
      let data2 = JSON.parse(e);
      this.total = parseInt(data2.data.total);
      this.dataList = data2.data.LineFileInfo;
      this.showMb = false;
      // this.tableColumnList = data2.tableColumnList;
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
      // this.tableColumnList = [];

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
      // this.tableColumnList = [];

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
      // this.tableColumnList = [];

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
.el-table__empty-block {
  min-height: 280px !important;
}
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
  width: 1920px;
  height: 524px;
  overflow-x: scroll;
  /* margin-top: 18.05px; */
}
.tiDai {
  width: 100%;
  height: 524px;
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
  height: 346px;
  margin-top: 68.05px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.condition {
  width: 1883.46px;
  height: 77px;
  margin-left: 18.15px;
  padding-top: 211.27px;
  margin-bottom: 20px;
  margin-top: 310px;
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
  position: fixed;
  left: 0;
  bottom: 10px;
}
</style>
<style scoped>
.zhezhao2 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999 !important;

  background: rgba(1, 11, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.zhezhao2 > .zBlocs {
  width: 549.84px;
  height: 251.63px;
  background: url("../../../../../assets/image/app/bgs.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.zhezhao2 > .zBlocs > .titles {
  width: 270px;
  height: 40px;
  position: absolute;
  left: 39px;
  top: 18px;
}

.zhezhao2 > .zBlocs > .titles > span {
  font-family: YouSheBiaoTiHei;
  font-size: 40px;
  font-weight: normal;
  line-height: 40px;
  color: #e8efff;
}
.closezB {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 27px;
  right: 14px;
  background: url("../../../../../assets/image/app/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.icons {
  width: 32px;
  height: 28px;
  position: absolute;
  left: 20px;
  top: 97px;
  background: url("../../../../../assets/image/app/icons2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.titleItem {
  width: 470px;
  height: 30px;
  position: absolute;
  left: 62px;
  top: 96px;
  display: flex;
  align-items: center;
}
.titleItem > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
}
.span1 {
  color: #13ffb0 !important;
  font-size: 20px !important;
}
.mbBtn2 {
  right: 127px !important;
}
.mbBtn {
  width: 100px;
  height: 40px;
  position: absolute;
  right: 15px;
  bottom: 44px;
  background: url("../../../../../assets/image/app/btns.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.mbBtn > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: #c5c5c5;
}
.mbBtn:hover {
  background: url("../../../../../assets/image/app/btns2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.mbBtn:hover > span {
  color: #ffffff !important;
}
</style>
