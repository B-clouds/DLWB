<template>
  <div class="wuli">
    <div class="jcxxs">
      <div class="j_titles">
        <span class="span1">光伏组预设</span>
      </div>
      <div class="kong"></div>
      <div class="kongs">
        <div class="k_Block">
          <div class="k_b_xinzeng" @click="xinzengClick"></div>
        </div>
        <div class="k_Block">
          <div class="k_b_bianji" @click="bianjiClick"></div>
        </div>
        <div class="k_Block">
          <div class="k_b_shanchu" @click="shanchuClick"></div>
        </div>
        <div class="k_r"></div>
      </div>

      <el-table
        ref="mug22"
        :data="dataList"
        tooltip-effect="dark"
        class="e_tables4 e_tables2s"
        highlight-current-row
        height="240"
        :row-style="{ height: '36px' }"
        :header-cell-style="{
          'text-align': 'center',
          background: 'transparent !important',
          'font-size': '14px',
          'font-weight': 'normal',
          color: '#fff',
        }"
        :cell-style="{ padding: 0 }"
        @cell-click="gClick"
        @select="s_Click"
        :row-class-name="tableRowClassName"
      >
        <el-table-column align="center" type="selection" width="36">
        </el-table-column>
        <el-table-column
          align="center"
          prop="GroupID"
          label="光伏组ID"
          min-width="62"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.GroupID }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="GroupName"
          label="名称"
          show-overflow-tooltip
          min-width="64"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.GroupName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="GroupType"
          label="类型"
          show-overflow-tooltip
          min-width="64"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.GroupType }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="Col"
          label="行数"
          min-width="50"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.Col }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="Row"
          label="列数"
          min-width="50"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.Row }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- --------------------------色谱特效 ------------------------------------->
    <div class="jcxxa" :class="showTz ? '' : 'jcxx3'">
      <div class="j_titles">
        <span
          class="span2"
          @click="title_click(0)"
          :class="showTz ? 'span4' : ''"
          >{{ t_span1 }}</span
        >
        <span
          class="span2 span3"
          @click="title_click(1)"
          :class="showSp ? 'span4' : ''"
          >{{ t_span2 }}</span
        >
      </div>
      <!-- 空间信息 -->
      <div class="kong" v-show="showTz"></div>
      <div class="j_item" v-show="showTz">
        <div class="items">
          <div class="lefts">
            <span>设备经度：</span>
          </div>
          <div class="rights">
            <span>{{ longitude }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备纬度：</span>
          </div>
          <div class="rights">
            <span>{{ dimension }}</span>
          </div>
        </div>
      </div>
      <div class="j_item" v-show="showTz">
        <div class="items">
          <div class="lefts">
            <span>设备角度：</span>
          </div>
          <div class="rights">
            <span>{{ angle }}</span>
          </div>
        </div>
        <div class="items">
          <div class="lefts">
            <span>设备高程：</span>
          </div>
          <div class="rights">
            <span>{{ altitude }}</span>
          </div>
        </div>
      </div>
      <!-- 色谱特效 -->
      <div class="kong" v-show="showSp"></div>
      <el-table
        v-show="showSp"
        ref="multipleTable3"
        :data="dataList3"
        tooltip-effect="dark"
        class="e_tablesss e_tables2ss"
        highlight-current-row
        @cell-click="gClick3"
        :row-style="{ height: '36px' }"
        :header-cell-style="{
          'text-align': 'center',
          background: 'transparent !important',
          height: '40px',
          color: '#FFFFFF',
        }"
        :cell-style="{
          padding: 0,
          'text-align': 'center',
          color: '#BEE4EE',
        }"
        @select="s_Click3"
        :row-class-name="tableRowClassName2"
      >
        <el-table-column align="center" type="selection" width="36">
        </el-table-column>
        <el-table-column prop="number" label="编号" width="50">
          <template slot-scope="scope">
            <span>{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="colorName"
          show-overflow-tooltip
          label="颜色色谱"
          min-width="120"
        >
          <template slot-scope="scope">
            <div class="ys">
              <div
                v-if="scope.row.displayStatus == 0"
                class="yanse1"
                :style="{ background: scope.row.colorData[0] }"
              ></div>
              <div v-if="scope.row.displayStatus == 1" class="yanse1">
                <div
                  class="yanses"
                  :style="{
                    background: scope.row.colorData[0],
                  }"
                ></div>
                <div
                  class="yanses"
                  :style="{
                    background: scope.row.colorData[1],
                  }"
                ></div>
              </div>
              <span>{{ scope.row.colorName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="descriptions"
          show-overflow-tooltip
          width="120"
          label="说明"
        >
        </el-table-column>
      </el-table>
    </div>
    <!-- 没有数据时 光伏板点击删除弹框 -->
    <div class="zhezhao" v-show="showDelete1">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>未发现需要删除的光伏组，请确认后再进行该操作。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks1">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 有数据没有选中时 光伏板点击删除弹框 -->
    <div class="zhezhao" v-show="showDelete2">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择光伏组对象进行删除。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks2">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!--  有数据 并且选中时 弹出确认删除弹框 -->
    <div class="zhezhao" v-show="showDelete3">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj1.png" />
          <span>请选择光伏组对象进行删除。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="delecteUe">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="deleteClicks3">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 没有选中时 光伏板点击编辑弹框 -->
    <div class="zhezhao" v-show="showUpdate">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请选择光伏组对象进行编辑。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="updateClicks">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------新增/编辑弹框------------------------------ -->
    <div class="zhezhao" v-show="showAdTk">
      <div class="addUpdTK">
        <div class="z_cha" @click="closeAdTk"></div>
        <div class="tk_title">
          <span>{{ tk_title }}</span>
        </div>
        <div class="tk_blocks">
          <span>光伏ID</span>
          <div class="rights">
            <div class="r1">
              <span>{{ addNum }}</span>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>光伏名称</span>
          <div class="rights">
            <div class="r2">
              <input
                placeholder="最大输入不超过10个字"
                maxlength="10"
                v-model="gfmc"
              />
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>光伏组类型</span>
          <div class="rights">
            <div class="r2">
              <div class="inputs">
                <el-select
                  v-model="GroupType"
                  @visible-change="mxClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in mx"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!mx_show" src="./img/xia.png" />
                <img v-show="mx_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>行数</span>
          <div class="rights">
            <div class="r2">
              <div class="inputs">
                <el-select
                  v-model="Col"
                  filterable
                  @visible-change="hsClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in hs"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!hs_show" src="./img/xia.png" />
                <img v-show="hs_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="tk_blocks">
          <span>列数</span>
          <div class="rights">
            <div class="r2">
              <div class="inputs">
                <el-select
                  v-model="Row"
                  filterable
                  @visible-change="lsClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in ls"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!ls_show" src="./img/xia.png" />
                <img v-show="ls_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="addUpdataClick">
            <span>保存</span>
          </div>
          <div class="z_blocks" @click="closeAdTk">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kongjian",
  data() {
    return {
      showImg: false,
      longitude: "",
      dimension: "",
      angle: "",
      altitude: "",
      // 色谱特效
      dataList3: [
        {
          number: "01",
          colorData: ["red"],
          colorName: "红色",
          displayStatus: 0,
          descriptions: "500kV电压等级色值",
        },
        {
          number: "02",
          colorData: ["#007080"],
          colorName: "湖蓝",
          displayStatus: 0,
          descriptions: "380kV电压等级色值",
        },
        {
          number: "03",
          colorData: ["#C000C0"],
          colorName: "紫色",
          displayStatus: 0,
          descriptions: "220kV电压等级色值",
        },
        {
          number: "04",
          colorData: ["#008000"],
          colorName: "绿色",
          displayStatus: 0,
          descriptions: "110kV电压等级色值",
        },
        {
          number: "05",
          colorData: ["#FFCC00"],
          colorName: "橙黄",
          displayStatus: 0,
          descriptions: "35kV电压等级色值",
        },
        {
          number: "06",
          colorData: ["#B94842"],
          colorName: "绛红",
          displayStatus: 0,
          descriptions: "10kV电压等级色值",
        },
        {
          number: "07",
          colorData: ["#ADA8A8", "#000000"],
          colorName: "灰转黑色",
          displayStatus: 1,
          descriptions: "停电事件",
        },
        {
          number: "08",
          colorData: ["#ADA8A8", "#0BA409"],
          colorName: "灰转绿色",
          displayStatus: 1,
          descriptions: "轻载",
        },
        {
          number: "09",
          colorData: ["#ADA8A8", "#EDE722"],
          colorName: "灰转黄色",
          displayStatus: 1,
          descriptions: "重载",
        },
        {
          number: "10",
          colorData: ["#ADA8A8", "#F07969"],
          colorName: "灰转红色",
          displayStatus: 1,
          descriptions: "过载",
        },
        {
          number: "11",
          colorData: ["#FFA200"],
          colorName: "对应电压...",
          displayStatus: 0,
          descriptions: "选中",
        },
        {
          number: "12",
          colorData: ["#ADA8A8", "#ED462F"],
          colorName: "灰转红",
          displayStatus: 1,
          descriptions: "故障",
        },
      ],
      selectList3: "", //存储色谱特效选中的值
      t_span1: "空间信息",
      t_span2: "色谱特效",
      showTz: true, //是否展示特征信息
      showSp: false, //是否展示色谱特效信息
      //光伏板
      selectList: "", //存储光伏组预设
      dataList: [],
      showDelete1: false, //是否显示删除弹框1
      showDelete2: false, //是否显示删除弹框2
      showDelete3: false, //是否显示删除弹框3
      showUpdate: false, //是否显示编辑弹框
      tk_title: "光伏新增信息", //新增、编辑 弹框
      isAdd_Update: 0, //是新增还是编辑  0：新增 1：编辑
      gfmc: "", //光伏名称
      showAdTk: "", //是否显示新增/编辑弹框
      // -------------------------------光明组类型----------------------------------
      mx: [
        {
          value: "Grid",
          label: "矩形",
        },
        {
          value: "L",
          label: "L形",
        },
      ],
      GroupType: "Grid",
      mx_show: "",
      // -------------------------------行数----------------------------------
      hs: [],
      Row: 1,
      hs_show: "",
      // -------------------------------列数----------------------------------
      ls: [],
      Col: 1,
      ls_show: "",
      mrNum: 1,
      addNum: 1,
      sjc: "", //时间戳
    };
  },
  watch: {},
  mounted() {
    let datas = [];
    for (let i = 1; i < 1001; i++) {
      let obj = { value: i, label: i };
      datas.push(obj);
    }
    this.hs = datas;
    this.ls = datas;
    let that = this;
    that.$bus.$on("getSSKJ", (e) => {
      let data = JSON.parse(e);
      that.longitude = data.longitude;
      that.dimension = data.latitude;
      that.angle = data.yaw;
      that.altitude = data.altitude;
    });
    that.$bus.$on("getKongJian", (e) => {
      let data = JSON.parse(e);
      that.longitude = data.longitude;
      that.dimension = data.latitude;
      that.angle = data.yaw;
      that.altitude = data.altitude;
    });
    that.$bus.$on("getSJC", (e) => {
      this.sjc = e;
    });
  },
  methods: {
    title_click(e) {
      if (e == 0) {
        this.showSp = false;
        this.showTz = true;
      } else {
        this.showTz = false;
        this.showSp = true;
      }
    },
    closeAdTk() {
      this.showAdTk = false;
    },

    YR() {
      this.showImg = true;
    },
    YC() {
      this.showImg = false;
    },
    keepClick() {
      // 保存
      this.$emit("baoCun");
    },
    // ---------------------------------------光伏组预设-----------------------------------
    mxClick(e) {
      this.mx_show = e;
    },
    hsClick(e) {
      this.hs_show = e;
    },
    lsClick(e) {
      this.ls_show = e;
    },
    // 查询所有数据
    getDataList() {
      let v = {
        ModifyType: "Query",
        Oid: this.sjc,
      };
      let data = {
        functionName: "ModifyMStationGroupData",
        backFunctionName: "getArrDate",
        functionParameters: [
          {
            key: "ModifyMStationGroupData",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getArrDate = this.getArrDate;
    },
    // 查询所有数据
    getArrDate(e) {
      let data = JSON.parse(e).value;
      this.dataList = JSON.parse(data).MStationGroup;
    },
    // 监听新增点击
    xinzengClick() {
      this.showAdTk = true;
      this.addNum = this.mrNum;
      this.isAdd_Update = 0;
      this.tk_title = "光伏新增信息";
    },
    // 监听点击编辑
    bianjiClick() {
      if (this.selectList.GroupID != undefined || null || "") {
        this.showAdTk = true;
        this.addNum = this.selectList.GroupID;
        this.gfmc = this.selectList.GroupName;
        this.GroupType = this.selectList.GroupType;
        this.Col = this.selectList.Col;
        this.Row = this.selectList.Row;
        this.isAdd_Update = 1;
        this.tk_title = "光伏信息编辑";
      } else {
        this.showUpdate = true;
      }
    },

    // 监听点击新增/编辑弹框保存按钮
    addUpdataClick() {
      if (this.isAdd_Update == 0) {
        // 新增数据
        let v2 = {
          GroupID: this.addNum,
          GroupName: this.gfmc,
          GroupType: this.GroupType,
          Row: this.Row,
          Col: this.Col,
        };
        let v = {
          ModifyType: "Add",
          Oid: this.sjc,
          MStationGroup: v2,
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "addSuccess2",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        this.selectList = [];
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.addSuccess2 = this.addSuccess2;
      } else {
        // 编辑数据
        let v2 = {
          GroupID: this.addNum,
          GroupName: this.gfmc,
          GroupType: this.GroupType,
          Row: this.Row,
          Col: this.Col,
        };
        let v = {
          ModifyType: "Change",
          Oid: this.sjc,
          MStationGroup: v2,
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "changeSuccess",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        this.selectList = [];
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.ue.interface.changeSuccess = this.changeSuccess;
      }
    },
    // 新增成功回调
    addSuccess2() {
      this.showAdTk = false;
      this.mrNum = this.addNum + 1;
      this.gfmc = "";
      this.GroupType = "Grid";
      this.Col = 1;
      this.Row = 1;
      this.getDataList();
      // 调用查询方法
    },
    changeSuccess() {
      this.showAdTk = false;
      this.getDataList();
    },
    // 删除点击
    shanchuClick() {
      if (this.dataList.length < 1) {
        // 未发现需要删除的光伏组，请确认后再进行该操作。 弹出弹框
        this.showDelete1 = true;
      } else {
        if (this.selectList.GroupID != undefined || null || "") {
          // this.gjscShow = true;
          // 弹出确认删除弹框
          this.showDelete3 = true;
        } else {
          // 请选择光伏组对象进行删除。 弹出弹框
          this.showDelete2 = true;
        }
      }
    },
    // 关闭删除弹框1
    deleteClicks1() {
      this.showDelete1 = false;
    },
    // 关闭删除弹框2
    deleteClicks2() {
      this.showDelete2 = false;
    },
    // 关闭删除弹框3
    deleteClicks3() {
      this.showDelete3 = false;
    },
    // 关闭编辑弹框
    updateClicks() {
      this.showUpdate = false;
    },
    // 光伏板删除功能，发送消息给ue
    delecteUe() {
      let v = {
        ModifyType: "Delete",
        GroupID: this.selectList.GroupID,
      };
      let data = {
        functionName: "ModifyMStationGroupData",
        backFunctionName: "deleteSuccess",
        functionParameters: [
          {
            key: "ModifyMStationGroupData",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.deleteSuccess = this.deleteSuccess;
    },
    // 删除成功回调
    deleteSuccess() {
      this.showDelete3 = false;
      this.getDataList();
    },
    s_Click(selection, row) {
      this.$refs.mug22.clearSelection();
      if (selection.length === 0) {
        let v = {
          ModifyType: "Select",
          GroupID: "",
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        return;
      }
      if (row) {
        this.selectList = row;
        this.$refs.mug22.toggleRowSelection(row);
        let v = {
          ModifyType: "Select",
          GroupID: this.selectList.GroupID,
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    gClick(row) {
      this.$refs.mug22.clearSelection();
      if (this.selectList != row) {
        this.selectList = row;
        this.$refs.mug22.toggleRowSelection(row);
        let v = {
          ModifyType: "Select",
          GroupID: this.selectList.GroupID,
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.selectList = "";
        let v = {
          ModifyType: "Select",
          GroupID: "",
        };
        let data = {
          functionName: "ModifyMStationGroupData",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModifyMStationGroupData",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },

    // 隔行变色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
        return "warning-row";
      }
      return "";
    },
    // ---------------------------------------色谱特效------------------------------------
    gClick3(row) {
      this.$refs.multipleTable3.clearSelection();
      if (this.selectList3 != row) {
        this.selectList3 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
      } else {
        this.selectList3 = "";
      }
    },
    s_Click3(selection, row) {
      this.$refs.multipleTable3.clearSelection();
      if (selection.length === 0) {
        return;
      }
      if (row) {
        this.selectList3 = row;
        this.$refs.multipleTable3.toggleRowSelection(row);
      }
    },
    tableRowClassName2({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
        return "warning-row";
      }
      return "warning-rowTwo";
    },
    tableRowCell({ row, rowIndex }) {
      if (rowIndex == 2) {
        return "text-align: center";
      }
    },
  },
};
</script>
<style>
.el-table .warning-row {
  background: url("img/rrr.png");
  background-size: 100% 100%;
}
</style>
<style scoped>
.wuli {
  width: 379px;
  min-height: 197px;
  position: fixed;
  right: 11px;
  top: 125px;
}
.jcxxs {
  width: 100%;
  height: 278px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.jcxxa {
  width: 100%;
  height: 197px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 20px;
}
.jcxx3 {
  width: 100%;
  height: 572px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 20px;
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
.kong {
  width: 100%;
  height: 40px;
}
.kongs {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.k_Block {
  width: 84px;
  height: 32px;
  margin-left: 5px;
  cursor: pointer;
}
.k_r {
  width: 15px;
  height: 100%;
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
  height: 100%;
  display: flex;
  align-items: center;
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
.jcxxSptx {
  height: 572px;
  margin-top: 20px;
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
  height: 732px;
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
  margin-bottom: 11px;
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
  width: 100px;
  height: 31.36px;
  cursor: pointer;
}
.block2 > .img > img {
  width: 100%;
  height: 100%;
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

<style scoped>
::v-deep .el-table__header-wrapper .el-checkbox {
  display: none;
}

::v-deep .el-checkbox__inner {
  background: url("img/wxz.png") !important;
  background-size: 100% 100% !important;

  border: none !important;
  border-radius: none !important;
  width: 22px;
  height: 22px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: url("img/xz.png") !important;
  background-size: 100% 100% !important;
  width: 22px;
  height: 22px;
}
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  /* background: url("img/wxzs.png") !important; */
  /* background-size: 100% 100% !important; */
  width: 22px;
  height: 22px;
}
::v-deep.el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  display: none;
}
::v-deep .el-checkbox__inner::after {
  display: none !important;
}
</style>
<style>
/* //element-ui table的去除右侧滚动条的样式 */
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
} /* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 0px;
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
  padding: 0 !important;
}
.current-row {
  /* background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important; */
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.e_tables4 > .el-table__header tr,
.e_tables4 > .el-table__header th {
  height: 39.8px !important;
  background: rgba(25, 61, 112, 0.5) !important;
  /* background: transparent !important; */
  font-family: SourceHanSansSC-Regular;
  font-size: 12px !important;
  padding: 0 !important;
  margin: 0 !important;
  font-weight: normal;
  color: #ffffff;
}
.e_tables4 > .el-table__body tr,
.e_tables4 > .el-table__body td {
  height: 30px;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #bee4ee;
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
.ys {
  display: flex;
  align-items: center;
}
.yanse1 {
  width: 14px;
  height: 8px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  margin-top: 2px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
}
.yanses {
  width: 50%;
  height: 100%;
}
</style>

<style scoped>
/* 表格样式 */
.e_tablesss {
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 5%;
}
.e_tables4 {
  width: 95%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 2.5%;
}
.e_tables2s {
  height: 61.4% !important;
}
.e_tables2ss {
  height: 90% !important;
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
.ys {
  display: flex;
  align-items: center;
}
.yanse1 {
  width: 14px;
  height: 8px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  margin-top: 2px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
}
.yanses {
  width: 50%;
  height: 100%;
}
</style>
<style scoped>
.t_input {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.k_b_shanchu {
  width: 100%;
  height: 100%;
  background: url("img/tblock-shanchu.png");
  background-size: 100% 100%;
}
.k_b_shanchu:hover {
  background: url("img/t_block_decete.png");
  background-size: 100% 100%;
}
.k_b_bianji {
  width: 100%;
  height: 100%;
  background: url("img/t_block_bianji.png");
  background-size: 100% 100%;
}
.k_b_bianji:hover {
  background: url("img/t_block_update.png");
  background-size: 100% 100%;
}
.k_b_xinzeng {
  width: 100%;
  height: 100%;
  background: url("img/t_b_add.png");
  background-size: 100% 100%;
}
.k_b_xinzeng:hover {
  background: url("img/t_add.png");
  background-size: 100% 100%;
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
  height: 346px;
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
.el-scrollbar__wrap::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
</style>
