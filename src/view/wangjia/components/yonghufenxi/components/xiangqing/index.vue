<template>
  <div>
    <!-- 左侧 -->
    <div class="wuli">
      <!-- 普通用户现状概括 -->
      <div class="ddxx">
        <div class="j_titles">
          <span>普通用户现状概括</span>
        </div>
        <div class="kong"></div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>用户总数:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>总负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>已接用户:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>已接负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>在途用户:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>在途负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <!-- 大用户现状概括 -->
      <div class="ddxx">
        <div class="j_titles">
          <span>大用户现状概括</span>
        </div>
        <div class="kong"></div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>用户总数:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>总负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>已接用户:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>已接负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
        <div class="j_item">
          <div class="items">
            <div class="lefts">
              <span>在途用户:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
          <div class="items">
            <div class="lefts">
              <span>在途负荷:</span>
            </div>
            <div class="rights">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <!-- 用户变化趋势 -->
      <div class="ddxx ddxx2">
        <div class="j_titles">
          <span>用户变化趋势</span>
        </div>
        <div class="kong"></div>
        <xq />
      </div>
    </div>
    <!-- 右侧列表 -->
    <div class="rightLB">
      <div class="t_bg">
        <el-table
          ref="xqTable"
          :data="dataList"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
        >
          <el-table-column
            prop="td1"
            show-overflow-tooltip
            label="用户编号"
            min-width="20"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.td1 }}</span>
            </template>
          </el-table-column>

          <el-table-column
            prop="td2"
            show-overflow-tooltip
            label="原用户编号"
            min-width="20"
          >
          </el-table-column>
          <el-table-column
            prop="td3"
            show-overflow-tooltip
            label="用户名称"
            min-width="20"
          >
          </el-table-column>
          <el-table-column
            prop="td4"
            show-overflow-tooltip
            label="用电地址"
            min-width="20"
          >
          </el-table-column>
          <el-table-column
            prop="td5"
            show-overflow-tooltip
            label="用户分类"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td6"
            show-overflow-tooltip
            label="抄表段"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td7"
            show-overflow-tooltip
            label="抄表顺序号"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td8"
            show-overflow-tooltip
            label="合同容量"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td9"
            show-overflow-tooltip
            label="运行容量"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td10"
            show-overflow-tooltip
            label="供电电压"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td11"
            show-overflow-tooltip
            label="用电量测"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td12"
            show-overflow-tooltip
            label="立户日期"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td13"
            show-overflow-tooltip
            label="供电单位"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td14"
            show-overflow-tooltip
            label="所属地市"
            min-width="20"
          >
          </el-table-column>

          <el-table-column
            prop="td15"
            show-overflow-tooltip
            label="用电详情"
            min-width="20"
          >
            <template slot-scope="scope">
              <span class="spans" @click="toDetailFn(scope)">用户详情</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="p_block">
          <el-pagination
            layout="total,prev, pager, next"
            :page-size="16"
            :total="total"
            @current-change="pageClick"
          >
          </el-pagination>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <div class="fh" @click="fhClick"></div>
  </div>
</template>

<script>
import xq from "./echarts/xq.vue";
export default {
  name: "wuli",
  components: {
    xq,
  },
  data() {
    return {
      types: 0, //0:站域  1：线域  2：变域  3：区域
      xqOid: 0, //存放聚焦时带过来的oid
      dataList: [
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
        {
          td1: "xxxx",
          td2: "xxxx",
          td3: "xxxx",
          td4: "xxxx",
          td5: "xxxx",
          td6: "xxxx",
          td7: "xxxx",
          td8: "xxxx",
          td9: "xxxx",
          td10: "xxxx",
          td11: "xxxx",
          td12: "xxxx",
          td13: "xxxx",
          td14: "xxxx",
          td15: "用电详情",
        },
      ],

      page: 1,
      total: 0,
    };
  },
  activated() {
    this.types = window.yhTypes;
    this.xqOid = window.yhOid;
    // this.getDataFn();
  },
  mounted() {
    let that = this;
    this.total = 16;
  },

  methods: {
    //用户详情
    toDetailFn(data) {
      console.log(data);
    },
    //请求方法
    async getDataFn() {
      console.log("this.types=====222", this.types);
      console.log("this.types=====222", this.xqOid);
      //0:站域  1：线域  2：变域  3：区域
      if (this.types == 0) {
        //普通用户现状概括
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationNormal",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        //大用户现状概括
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationBigConsumer",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        // 用户变化趋
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationTrend",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
      } else if (this.types == 1) {
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationNormal",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        //大用户现状概括
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationBigConsumer",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        // 用户变化趋
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationTrend",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
      } else if (this.types == 2) {
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationNormal",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        //大用户现状概括
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationBigConsumer",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        // 用户变化趋
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationTrend",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
      } else {
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationNormal",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        //大用户现状概括
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationBigConsumer",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
        // 用户变化趋
        this.$axios
          .get(
            window.wgApiUrl +
              "/facilityAnalysis/facilityAnalysisUserAnalysisStationTrend",
            {
              params: {
                id: window.yhOid,
              },
            }
          )
          .then((res) => {
            console.log(res, "res");
          })
          .catch((error) => {});
      }
    },
    fhClick() {
      this.$bus.$emit("types", window.types);
      this.$router.push({
        path: "/wj/yhfx",
      });
    },
    // 点击单行
    hangClick(e) {},
    // 右键清除选中
    unHangClick() {
      this.$refs.xqTable.setCurrentRow();
    },
    pageClick(e) {
      this.page = e;
    },

    getJBXX() {
      this.$axios
        .get(window.zfjbxx, {
          params: {
            sssb: window.ccOid,
            twinType: "1000",
          },
        })
        .then((res) => {
          this.leftData = res.data.data[0];
        })
        .catch((error) => {});
    },
  },
};
</script>

<style scoped>
.wuli {
  width: 379px;
  height: 90%;
  position: absolute;
  left: 11px;
  top: 125px;
}
.jcxx {
  width: 100%;
  height: 410px;
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
.ddxx {
  width: 100%;
  height: 266px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 20px;
}
.ddxx2 {
  height: 320px;
}
</style>
<style scoped>
.rightLB {
  width: 1500px;
  height: 914px;
  position: absolute;
  right: 10px;
  bottom: 20px;
}
</style>

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
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
}
.el-table__body tr,
.el-table__body td {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
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
  height: 94%;
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
  height: 100px;
  background: red;
}
.span1 {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>
<style scoped>
.t_bg {
  width: 100%;
  height: 97.5%;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.condition {
  width: 1883.46px;
  height: 77px;
  margin-left: 18.15px;
  margin-bottom: 54px;
  margin-top: 150px;
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
.spans {
  color: rgb(34, 228, 255);
  cursor: pointer;
}
.p_block {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 30px;
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
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
}
::v-deep .el-table__body tr,
::v-deep .el-table__body td {
  height: 48px !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
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
.fh {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 25px;
  background: url("img/fh.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
</style>
