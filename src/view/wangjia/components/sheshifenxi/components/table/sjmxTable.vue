<template>
  <div class="sjmxTable">
    <!-- 列表 -->
    <el-table
      ref="sjmx"
      :data="dataList"
      tooltip-effect="dark"
      class="sjmx_e_table"
      height="600px"
      :header-cell-style="{
        'text-align': 'center',
        height: '29px !important',
        fontSize: '12px',
        'font-weight': 700,
        color: '#fff',
      }"
      :cell-style="{
        'text-align': 'center',
        color: 'rgba(255,255,255,.7) ',
        height: '30px !important',
        fontSize: '14px',
        padding: '10px',
      }"
      key="sjmx2"
    >
      <el-table-column
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
  </div>
</template>

<script>
export default {
  name: "sjmxTable",
  data() {
    return {
      dataList: [
        { rq: "06.12", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.13", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.14", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.15", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.16", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.17", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.18", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.19", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.13", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.14", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.15", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.16", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.17", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.18", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.19", zdz: "78W", zxz: "53W", pjz: "64W" },
        { rq: "06.20", zdz: "78W", zxz: "53W", pjz: "64W" },
      ],
      tableColumnList: [
        { prop: "rq", propName: "日期" },
        { prop: "zdz", propName: "最大值" },
        { prop: "zxz", propName: "最小值" },
        { prop: "pjz", propName: "平均值" },
      ],
    };
  },
};
</script>

<style scoped>
.sjmxTable {
  width: 100%;
  height: 100%;
}
/* 表格样式 */
.sjmx_e_table {
  width: 96%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
  margin-left: 2%;
  margin-top: 20px;
}
</style>

<style scoped>
::v-deep .el-table__header-wrapper .el-checkbox {
  display: none;
}

::v-deep.el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  display: none;
}
::v-deep .el-checkbox__inner::after {
  display: none !important;
}
::v-deep .el-table__header tr,
::v-deep .el-table__header th {
  height: 39px !important;
  background: rgba(25, 61, 112, 0.5) !important;
}
::v-deep .el-table__body tr,
::v-deep .el-table__body td {
  height: 29px !important;
}
</style>
<style scoped>
/* //element-ui table的去除右侧滚动条的样式 */
::v-deep ::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
/* // 滚动条的滑块 */
::v-deep ::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 0px;
}

::v-deep .sjmx_e_table::-webkit-scrollbar {
  display: none;
}

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
::v-deep .el-table .cell {
  background-color: transparent !important;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
