<template>
    <div class="mxRight">
        <!-- 关键信息-->
        <div class="blocksss">
            <div class="j_titles">
                <span class="span1">关键信息</span>
            </div>

            <div class="t_input">
                <div
                    class="t_block"
                    @click="g_addClick"
                    :class="currentIndex == 0 ? 't_block_add' : ''"
                >
                    <img v-show="currentIndex != 0" src="./img/i2.png" />
                </div>
                <div
                    class="t_block"
                    @click="g_updateClick"
                    :class="currentIndex == 1 ? 't_block_update' : ''"
                >
                    <img v-show="currentIndex != 1" src="./img/i3.png" />
                </div>

                <div
                    class="t_block"
                    @click="g_deleteClick"
                    :class="currentIndex == 2 ? 't_block_decete' : ''"
                >
                    <img v-show="currentIndex != 2" src="./img/i6.png" />
                </div>
            </div>
            <el-table
                ref="mug22"
                :data="dataList"
                tooltip-effect="dark"
                class="e_tables e_tables2"
                highlight-current-row
                height="240"
                :row-style="{ height: '36px' }"
                :cell-style="{ padding: 0 }"
                @cell-click="gClick"
                @select="s_Click"
                :row-class-name="tableRowClassName"
            >
                <el-table-column align="center" type="selection" width="36">
                </el-table-column>
                <el-table-column
                    align="center"
                    :label="item.propName"
                    :property="item.prop"
                    v-for="item in tableColumnLists"
                    :key="item.prop"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <span
                            :class="
                                scope.row[scope.column.property] == '避雷间隔'
                                    ? 'span1'
                                    : ''
                            "
                            >{{ scope.row[scope.column.property] }}</span
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 特征信息、色谱特效 -->
        <div class="wbb">
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
            <!-- 特征信息 -->
            <div class="t_input" v-if="showTz">
                <div
                    class="t_block"
                    @click="t_addClick"
                    :class="t_index == 0 ? 't_block_add' : ''"
                >
                    <img src="./img/i2.png" v-show="t_index != 0" />
                </div>
                <div
                    class="t_block"
                    @click="t_updateClick"
                    :class="t_index == 1 ? 't_block_update' : ''"
                >
                    <img src="./img/i3.png" v-show="t_index != 1" />
                </div>

                <div
                    class="t_block"
                    @click="t_deleteClick"
                    :class="t_index == 2 ? 't_block_decete' : ''"
                >
                    <img src="./img/i6.png" v-show="t_index != 2" />
                </div>
            </div>
            <el-table
                v-if="showTz"
                ref="mug23"
                :data="dataList2"
                tooltip-effect="dark"
                class="e_tables e_tables2"
                highlight-current-row
                @cell-click="gClick2"
                :row-style="{ height: '36px' }"
                :cell-style="{ padding: 0 }"
                @select="s_Click2"
                :row-class-name="tableRowClassName2"
            >
                <el-table-column align="center" type="selection" width="36">
                </el-table-column>
                <el-table-column
                    align="center"
                    :label="item.propName"
                    :property="item.prop"
                    v-for="item in tableColumnLists2"
                    :key="item.prop"
                    min-width="20"
                    show-overflow-tooltip
                >
                    <template slot-scope="scope">
                        <span
                            :class="
                                scope.row[scope.column.property] == '避雷间隔'
                                    ? 'span1'
                                    : ''
                            "
                            >{{ scope.row[scope.column.property] }}</span
                        >
                    </template>
                </el-table-column>
            </el-table>
            <!-- 色谱特效 -->
            <div class="t_input" v-if="showSp">
                <div
                    class="t_block"
                    @click="s_addClick"
                    :class="s_index == 0 ? 't_block_add' : ''"
                >
                    <img src="./img/i2.png" v-show="s_index != 0" />
                </div>
                <div
                    class="t_block"
                    @click="s_updateClick"
                    :class="s_index == 1 ? 't_block_update' : ''"
                >
                    <img src="./img/i3.png" v-show="s_index != 1" />
                </div>

                <div
                    class="t_block"
                    @click="s_deleteClick"
                    :class="s_index == 2 ? 't_block_decete' : ''"
                >
                    <img src="./img/i6.png" v-show="s_index != 2" />
                </div>
            </div>
            <el-table
                v-if="showSp"
                ref="mug24"
                :data="dataList3"
                tooltip-effect="dark"
                class="e_tables e_tables2"
                highlight-current-row
                @cell-click="gClick3"
                :row-style="{ height: '36px' }"
                :header-cell-style="{ 'text-align': 'center' }"
                :cell-style="{ padding: 0, 'text-align': 'center' }"
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
                            <div
                                v-if="scope.row.displayStatus == 1"
                                class="yanse1"
                            >
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

        <!-- 关键信息-新增/编辑弹框 -->
        <div class="zhezhao" v-show="gjtkShow">
            <div class="gj_tk">
                <div class="tklj"></div>
                <div class="z_cha" @click="closeGjTk"></div>
                <!-- title -->
                <div class="tk_title">
                    <span>{{ gj_title }}</span>
                </div>
                <div class="tk_blocks">
                    <span>模型编号</span>
                    <div class="rights">
                        <div class="r1">
                            <span>{{ mxbh }}</span>
                        </div>
                    </div>
                </div>
                <div class="tk_blocks">
                    <span>模型名称</span>
                    <div class="rights">
                        <div class="r2">
                            <input
                                placeholder="最大输入不超过10个字"
                                maxlength="10"
                                v-model="mxmc"
                            />
                        </div>
                    </div>
                </div>
                <div class="tk_blocks">
                    <span>配件名称</span>
                    <div class="rights">
                        <div class="r2">
                            <input
                                placeholder="最大输入不超过10个字"
                                maxlength="10"
                                v-model="pjmc"
                            />
                        </div>
                    </div>
                </div>
                <div class="z_btn">
                    <div class="z_blocks" @click="addUpdataClick">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="closeGjTk">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 关键信息-删除弹框 -->
        <div class="zhezhao" v-show="gjscShow">
            <div class="z_delete">
                <div class="z_d_block">
                    <img src="./img/jj.png" />
                    <span>是否将当前选中信息进行删除？</span>
                </div>
                <div class="z_btn">
                    <div class="z_blocks" @click="gjscClick">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="gjscClose">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 特征信息-新增/编辑弹框  -->
        <div class="zhezhao" v-show="tztkShow">
            <div class="gj_tk2">
                <div class="tklj"></div>
                <div class="z_cha" @click="closeTzTk"></div>
                <!-- title -->
                <div class="tk_title">
                    <span>{{ tz_title }}</span>
                </div>
                <div class="tk_blocks">
                    <span>特征编号</span>
                    <div class="rights">
                        <div class="r1">
                            <span>{{ tzbh }}</span>
                        </div>
                    </div>
                </div>
                <div class="tk_blocks">
                    <span>特征名称</span>
                    <div class="rights">
                        <div class="r2">
                            <input
                                placeholder="最大输入不超过10个字"
                                maxlength="10"
                                v-model="tzmc"
                            />
                        </div>
                    </div>
                </div>
                <div class="tk_blocks">
                    <span>特征值</span>
                    <div class="rights">
                        <div class="r2">
                            <input
                                placeholder="最大输入不超过10个字"
                                maxlength="10"
                                v-model="tzz"
                            />
                        </div>
                    </div>
                </div>
                <div class="tk_blocks">
                    <span>优先级</span>
                    <div class="rights">
                        <div class="r2">
                            <div class="yxj" @click="showYXJClick"></div>
                            <div class="yxjBlock" v-show="showYXJ">
                                <div
                                    class="blockItem"
                                    v-for="(item, index) in yxjList"
                                    :key="index"
                                    @click="yxjListClick(item)"
                                >
                                    <span>{{ item }}级</span>
                                </div>
                            </div>
                            <div class="xia"></div>
                            <input
                                placeholder="1-10"
                                maxlength="10"
                                v-model="yxj"
                            />
                        </div>
                    </div>
                </div>
                <div class="z_btn">
                    <div class="z_blocks" @click="addUpdataClick2">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="closeTzTk">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 特征信息-删除弹框 -->
        <div class="zhezhao" v-show="tzscShow">
            <div class="z_delete">
                <div class="z_d_block">
                    <img src="./img/jj.png" />
                    <span>是否将当前选中信息进行删除？</span>
                </div>
                <div class="z_btn">
                    <div class="z_blocks" @click="tzscClick">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="tzscClose">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 色谱特效-新增/编辑弹框 -->
        <div class="zhezhao" v-show="sptkShow">
            <div class="sp_tk" :class="xialaIndex == 1 ? 'sp_tk2' : ''">
                <div class="tklj"></div>
                <div class="z_cha" @click="closeSpTk"></div>
                <div class="tk_title">
                    <span>{{ sp_title }}</span>
                </div>
                <div class="sp_span">
                    <div class="sp_left">
                        <span>编号</span>
                    </div>
                    <div class="sp_right1">
                        <span>{{ sp_number }}</span>
                    </div>
                </div>
                <div class="sp_span">
                    <div class="sp_left">
                        <span>显示类型</span>
                    </div>
                    <div class="sp_right2" @click="sp_typeClick">
                        <span>{{ xiaLaSpan }}</span>
                        <div class="sp_xia" v-show="shouXiala == 0"></div>
                        <div class="sp_shou" v-show="shouXiala != 0"></div>
                        <div class="sp_sx" v-show="shouXiala != 0">
                            <div
                                class="sp_sx_item"
                                :class="xialaIndex == 0 ? 'sp_sx_item2' : ''"
                                @click="xlIndexClick(0)"
                            >
                                <span>常亮</span>
                            </div>
                            <div
                                class="sp_sx_item"
                                :class="xialaIndex == 1 ? 'sp_sx_item2' : ''"
                                @click="xlIndexClick(1)"
                            >
                                <span>渐变</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sp_span">
                    <div class="sp_left">
                        <span>颜色色谱</span>
                    </div>
                    <div class="sp_right2">
                        <input
                            placeholder="最大输入不超过10个字"
                            v-model="colorDesc"
                        />
                    </div>
                </div>

                <div class="sp_ys">
                    <div class="sp_i1"></div>
                    <div class="sp_i2"></div>
                    <div class="sp_i3"></div>
                    <input
                        class="sp_input"
                        type="color"
                        v-show="true"
                        id="user_color"
                        v-model="colorColor1"
                    />
                    <label for="user_color">
                        <div class="sp_input2"></div>
                    </label>
                    <div
                        class="sp_i4"
                        :style="{ background: colorColor1 }"
                    ></div>
                </div>

                <div class="sp_span" v-show="xialaIndex == 1">
                    <div class="sp_left">
                        <span>颜色色谱</span>
                    </div>
                    <div class="sp_right2">
                        <input
                            placeholder="最大输入不超过10个字"
                            v-model="colorDesc2"
                        />
                    </div>
                </div>
                <div class="sp_ys" v-show="xialaIndex == 1">
                    <div class="sp_i1"></div>
                    <div class="sp_i2"></div>
                    <div class="sp_i3"></div>
                    <input
                        class="sp_input"
                        type="color"
                        v-show="true"
                        id="user_color2"
                        v-model="colorColor2"
                    />
                    <label for="user_color2">
                        <div class="sp_input2"></div>
                    </label>
                    <div
                        class="sp_i4"
                        :style="{ background: colorColor2 }"
                    ></div>
                </div>

                <div class="sp_span">
                    <div class="sp_left">
                        <span>说明</span>
                    </div>
                    <div class="sp_right2">
                        <input
                            placeholder="最大输入不超过10个字"
                            v-model="colorDesc3"
                        />
                    </div>
                </div>
                <div class="sp_btn">
                    <div class="sp_bitem" @click="sptkQueRen">
                        <span>保存</span>
                    </div>
                    <div class="sp_bitem" @click="closeSpTk">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 色谱特效-删除弹框 -->
        <div class="zhezhao" v-show="show_spDelete">
            <div class="z_delete">
                <div class="z_d_block">
                    <img src="./img/jj.png" />
                    <span>是否将当前选中信息进行删除？</span>
                </div>
                <div class="z_btn">
                    <div class="z_blocks" @click="sp_tzscClick">
                        <span>确认</span>
                    </div>
                    <div class="z_blocks" @click="sp_tzscClose">
                        <span>取消</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mxRight",
    data() {
        return {
            colors: "",
            // 存储towerType
            towerType: "",
            // 关键信息
            storageNum: "", //存储最后一位模型编号
            isAdd_Update: 0, //是新增还是编辑  0：新增 1：编辑
            dataList: [],
            tableColumnLists: [
                { prop: "Str_Num", propName: "模型编号" },
                { prop: "Str_Name", propName: "模型名称" },
                { prop: "Str_PointMountings", propName: "配件名称" },
            ],
            currentIndex: -1,
            gjtkShow: false, //是否显示关键信息新增/编辑弹框
            gj_title: "",
            mxbh: "", //模型编号
            mxmc: "", //模型名称
            pjmc: "", //配件名称
            gjscShow: false, //是否显示删除确认弹框
            // 特征信息
            dataList2: [],
            tzNums: "", //存储最后一位特征编号
            tableColumnLists2: [
                { prop: "featureNumber", propName: "特征编号" },
                { prop: "featureName", propName: "特征名称" },
                { prop: "featureValue", propName: "特征值" },
                { prop: "priority", propName: "优先级" },
            ],
            // 色谱特效
            dataList3: [
                {
                    number: "01",
                    colorData: ["red"],
                    colorName: "红色",
                    displayStatus: 0,
                    descriptions: "0.4kV电压等级色值",
                },
                {
                    number: "02",
                    colorData: ["red", "#fff"],
                    colorName: "红色转白色",
                    displayStatus: 1,
                    descriptions: "0.4kV电压等级色值",
                },
                {
                    number: "03",
                    colorData: ["#fff"],
                    colorName: "白色",
                    displayStatus: 0,
                    descriptions: "0.4kV电压等级色值",
                },
            ],
            tableColumnLists3: [
                { prop: "number", propName: "编号" },
                { prop: "colorName", propName: "颜色色谱" },
                { prop: "descriptions", propName: "说明" },
            ],
            featureInfoList: [],
            selectList: "", //存储关键信息选中的值
            tztkShow: false, //是否显示特征信息新增/编辑弹框
            showYXJ: false, //是否显示优先级弹框
            selectList2: "", //存储特征信息选中的值
            t_index: -1,
            tz_title: "",
            tzbh: "", //特征编号
            tzmc: "", //特征名称
            tzz: "", //特征值
            yxj: "", //优先级
            yxjList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            isAdd_Update2: 0, //是新增还是编辑  0：新增 1：编辑
            tzscShow: false, //是否显示删除弹框
            t_span1: "特征信息",
            t_span2: "色谱特效",
            showTz: true, //是否展示特征信息
            showSp: false, //是否展示色谱特效信息
            selectList3: "", //存储色谱特效选中的值
            s_index: -1, //色谱特效顶部功能按钮
            sptkShow: false, //色谱弹框新增/编辑弹框
            sp_title: "",
            sp_number: "01", //色谱特效编号
            xialaIndex: 0, //色谱特效类型, 0:常亮  1：渐变
            colorDesc: "", //色谱颜色注释1
            colorDesc2: "", //色谱颜色注释2
            colorDescName: "", //用于接口传值
            colorColor1: "",
            colorColor2: "",
            colorColorData: [], //用于接口传值
            colorDesc3: "", //说明
            shouXiala: 0, //是否展开下拉框
            xiaLaSpan: "常亮",
            sp_isadd_upd: 0, // 0：新增 1：编辑
            show_spDelete: false, //是否显示删除弹框
            spNums: "", //存储最后一位色谱编号
        };
    },
    filters: {},
    watch: {
        colors(e) {},
    },
    mounted() {
        let that = this;
        that.$bus.$on("getTZlist", (e) => {
            // that.dataList2 = e.featureInfoList;
            this.towerType = e.towerType;
            that.getTableDetil();
            that.getTZXX();
            that.getSPTX();
        });
    },
    methods: {
        changeTitle() {
            if (this.t_span2 == "特征信息") {
                this.t_span1 = "特征信息";
                this.t_span2 = "色谱特效";
                this.showTz = true;
                this.showSp = false;
            } else {
                this.t_span1 = "色谱特效";
                this.t_span2 = "特征信息";
                this.showTz = false;
                this.showSp = true;
            }
        },
        closeGjTk() {
            this.gjtkShow = false;
            this.mxmc = "";
            this.pjmc = "";
        },
        g_addClick() {
            if (this.currentIndex != 0) {
                this.currentIndex = 0;
            } else {
                this.gj_title = "关键模型新增信息";
                this.gjtkShow = true;
                this.isAdd_Update = 0;
                let bh = "";
                // this.storageNum
                let newNum = parseInt(this.storageNum + 1) + "";
                if (newNum.length == 1) {
                    bh = "0000" + newNum;
                } else if (newNum.length == 2) {
                    bh = "000" + newNum;
                } else if (newNum.length == 3) {
                    bh = "00" + newNum;
                } else if (newNum.length == 4) {
                    bh = "0" + newNum;
                } else if (newNum.length == 5) {
                    bh = newNum;
                }
                this.mxbh = bh;
            }
        },
        g_updateClick() {
            if (this.currentIndex != 1) {
                this.currentIndex = 1;
            } else {
                if (this.selectList.Str_Num != undefined || null || "") {
                    this.gj_title = "关键模型信息编辑";
                    this.isAdd_Update = 1;
                    this.gjtkShow = true;
                    this.mxbh = this.selectList.Str_Num;
                    this.mxmc = this.selectList.Str_Name;
                    this.pjmc = this.selectList.Str_PointMountings;
                } else {
                    this.$notify({
                        title: "编辑节点",
                        message: "请选中一条关键信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        // 新增/编辑弹框确认按钮
        addUpdataClick() {
            if (this.isAdd_Update == 0) {
                // 新增
                let v = {
                    ModelType: "BoomTowerType",
                    SelectNum: this.mxbh,
                    DataValue: {
                        Str_Num: this.mxbh,
                        Str_Name: this.mxmc,
                        Str_PointMountings: this.pjmc,
                    },
                };

                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "gjAdd",
                    functionParameters: [
                        {
                            key: "Add",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.gjAdd = this.gjAdd;
            } else {
                // 编辑
                let v = {
                    ModelType: "BoomTowerType",
                    SelectNum: this.mxbh,
                    DataValue: {
                        Str_Num: this.mxbh,
                        Str_Name: this.mxmc,
                        Str_PointMountings: this.pjmc,
                    },
                };

                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "gjUpdate",
                    functionParameters: [
                        {
                            key: "Change",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.gjUpdate = this.gjUpdate;
            }
        },
        // 关键信息新增回调
        gjAdd() {
            this.gjtkShow = false;
            this.getTableDetil();
        },
        // 关键信息编辑回调
        gjUpdate() {
            this.gjtkShow = false;
            this.getTableDetil();
        },
        g_deleteClick() {
            if (this.currentIndex != 2) {
                this.currentIndex = 2;
            } else {
                if (this.selectList.Str_Num != undefined || null || "") {
                    this.gjscShow = true;
                } else {
                    this.$notify({
                        title: "删除节点",
                        message: "请选中一条关键信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        // 删除关键信息确认框
        gjscClick() {
            let v = {
                ModelType: "BoomTowerType",
                SelectNum: this.selectList.Str_Num,
            };

            let data = {
                functionName: "ModifyBoomInfo",
                backFunctionName: "gjDelect",
                functionParameters: [
                    {
                        key: "Delete",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.gjDelect = this.gjDelect;
        },
        // 删除成功回调函数
        gjDelect() {
            this.gjscShow = false;
            this.getTableDetil();
        },
        // 关闭关键信息弹框
        gjscClose() {
            this.gjscShow = false;
        },
        // -------------------------------特征信息部分方法
        showYXJClick() {
            this.showYXJ = !this.showYXJ;
        },
        yxjListClick(e) {
            this.showYXJ = false;
            this.yxj = e;
        },
        // 特征信息查询
        getTZXX() {
            let v = {
                ModifyType: "Qurey",
                TowerType: this.towerType,
            };
            let data = {
                functionName: "ModifyFeatureInfo",
                backFunctionName: "tzxxQuery",
                functionParameters: [
                    {
                        key: "ModifyFeatureInfo",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.tzxxQuery = this.tzxxQuery;
        },
        // 查询回调
        tzxxQuery(e) {
            let data = JSON.parse(e);
            let data2 = JSON.parse(data.value);
            this.dataList2 = data2.featureInfoList;
            // 获取最后一位Str_Num，并存储
            if (data2.featureInfoList.length > 0) {
                // 获取最后一位Str_Num，并存储
                let index = data2.featureInfoList.length - 1;
                this.tzNums = parseInt(
                    data2.featureInfoList[index].featureNumber
                );
            } else {
                this.tzNums = 0;
            }
        },
        closeTzTk() {
            this.tztkShow = false;
            this.tzbh = "";
            this.tzmc = "";
            this.tzz = "";
            this.yxj = "";
        },
        // 色谱特效查询
        getSPTX() {
            let v = {
                ModifyType: "Query",
            };
            let data = {
                functionName: "ModifyColorAtlasnfo",
                backFunctionName: "sptxQuery",
                functionParameters: [
                    {
                        key: "ModifyColorAtlasnfo",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.sptxQuery = this.sptxQuery;
        },
        // 色谱特效查询回调
        sptxQuery(e) {
            let data = JSON.parse(e);
            let data2 = JSON.parse(data.value);
            this.dataList3 = data2.color;
            if (data2.color.length > 0) {
                // 获取最后一位Str_Num，并存储
                let index = data2.color.length - 1;
                this.spNums = parseInt(data2.color[index].number);
            } else {
                this.spNums = 0;
            }
        },
        // 色谱特效新增
        s_addClick() {
            if (this.s_index != 0) {
                this.s_index = 0;
            } else {
                this.colorDesc = "";
                this.colorColor1 = "";
                this.colorDesc2 = "";
                this.colorColor2 = "";
                this.colorDesc3 = "";
                this.sptkShow = true;
                this.sp_isadd_upd = 0;
                this.sp_title = "色谱新增信息";
                let bh = "";
                // this.storageNum
                let newNum = parseInt(this.spNums + 1) + "";
                if (newNum.length <= 1) {
                    bh = 0 + newNum;
                } else {
                    bh = newNum;
                }
                this.sp_number = bh;
            }
        },
        // 色谱特效编辑
        s_updateClick() {
            if (this.s_index != 1) {
                this.s_index = 1;
            } else {
                if (this.selectList3.number != undefined || null || "") {
                    this.sptkShow = true;
                    this.sp_isadd_upd = 1;
                    this.sp_title = "色谱特效编辑";
                    this.sp_number = this.selectList3.number;
                    if (this.selectList3.displayStatus == 1) {
                        let newArr = this.selectList3.colorName.split("转");
                        this.colorDesc = newArr[0];
                        this.colorDesc2 = newArr[1];
                        this.colorColor1 = this.selectList3.colorData[0];
                        this.colorColor2 = this.selectList3.colorData[1];
                        this.xialaIndex = 1;
                        this.xiaLaSpan = "渐变";
                    } else if (this.selectList3.displayStatus == 0) {
                        this.colorDesc = this.selectList3.colorName;
                        this.xialaIndex = 0;
                        this.xiaLaSpan = "常亮";
                    }
                    this.colorColor1 = this.selectList3.colorData[0];
                    this.colorDesc3 = this.selectList3.descriptions;
                } else {
                    this.$notify({
                        title: "编辑节点",
                        message: "请选中一条色谱信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        // 色谱特效 新增、编辑确认按钮
        sptkQueRen() {
            if (this.sp_isadd_upd == 0) {
                this.colorColorData = [];
                if (this.xialaIndex == 0) {
                    this.colorColorData.push(this.colorColor1);
                    this.colorDescName = this.colorDesc;
                } else {
                    this.colorColorData.push(this.colorColor1);
                    this.colorColorData.push(this.colorColor2);
                    this.colorDescName =
                        this.colorDesc + "转" + this.colorDesc2;
                }
                // 新增确认按钮
                let v = {
                    ModifyType: "Add",
                    ColorNumber: this.sp_number,
                    DataValue: {
                        number: this.sp_number,
                        colorData: this.colorColorData,
                        colorName: this.colorDescName,
                        displayStatus: this.xialaIndex,
                        descriptions: this.colorDesc3,
                    },
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxAdd",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxAdd = this.sptxAdd;
            } else if (this.sp_isadd_upd == 1) {
                if (this.xialaIndex == 0) {
                    this.colorColorData = [];
                    this.colorColorData.push(this.colorColor1);
                    this.colorDescName = this.colorDesc;
                } else {
                    this.colorColorData = [];
                    this.colorColorData.push(this.colorColor1);
                    this.colorColorData.push(this.colorColor2);
                    this.colorDescName =
                        this.colorDesc + "转" + this.colorDesc2;
                }

                // 编辑确认按钮
                let v = {
                    ModifyType: "Change",
                    ColorNumber: this.sp_number,
                    DataValue: {
                        number: this.sp_number,
                        colorData: this.colorColorData,
                        colorName: this.colorDescName,
                        displayStatus: this.xialaIndex,
                        descriptions: this.colorDesc3,
                    },
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxUpd",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxUpd = this.sptxUpd;
            }
        },
        // 色谱特效新增方法回调
        sptxAdd(e) {
            this.sptkShow = false;
            this.getSPTX();
        },
        // 色谱特效编辑方法回调
        sptxUpd(e) {
            this.sptkShow = false;
            this.getSPTX();
        },
        // 色谱特效删除
        s_deleteClick() {
            if (this.s_index != 2) {
                this.s_index = 2;
            } else {
                if (this.selectList3.number != undefined || null || "") {
                    this.show_spDelete = true;
                    this.sp_number = this.selectList3.number;
                } else {
                    this.$notify({
                        title: "删除节点",
                        message: "请选中一条色谱信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        // 删除确认弹框
        sp_tzscClick() {
            // 删除确认按钮
            let v = {
                ModifyType: "Delete",
                ColorNumber: this.sp_number,
            };
            let data = {
                functionName: "ModifyColorAtlasnfo",
                backFunctionName: "sptxDelete",
                functionParameters: [
                    {
                        key: "ModifyColorAtlasnfo",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.sptxDelete = this.sptxDelete;
        },
        sptxDelete(e) {
            this.show_spDelete = false;
            this.getSPTX();
        },
        // 删除取消弹框
        sp_tzscClose() {
            this.show_spDelete = false;
        },
        closeSpTk() {
            this.sptkShow = false;
        },

        t_addClick() {
            if (this.t_index != 0) {
                this.t_index = 0;
            } else {
                this.tz_title = "特征信息新增";
                this.tztkShow = true;
                this.isAdd_Update2 = 0;
                let bh = "";
                // this.storageNum
                let newNum = parseInt(this.tzNums + 1) + "";
                if (newNum.length == 1) {
                    bh = "0000" + newNum;
                } else if (newNum.length == 2) {
                    bh = "000" + newNum;
                } else if (newNum.length == 3) {
                    bh = "00" + newNum;
                } else if (newNum.length == 4) {
                    bh = "0" + newNum;
                } else if (newNum.length == 5) {
                    bh = newNum;
                }
                this.tzbh = bh;
            }
        },
        t_updateClick() {
            if (this.t_index != 1) {
                this.t_index = 1;
            } else {
                if (this.selectList2.featureNumber != undefined || null || "") {
                    this.isAdd_Update2 = 1;
                    this.tz_title = "特征信息编辑";
                    this.tztkShow = true;
                    this.tzbh = this.selectList2.featureNumber;
                    this.tzmc = this.selectList2.featureName;
                    this.tzz = this.selectList2.featureValue;
                    this.yxj = this.selectList2.priority;
                } else {
                    this.$notify({
                        title: "编辑节点",
                        message: "请选中一条特征信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        addUpdataClick2() {
            if (this.isAdd_Update2 == 0) {
                //  新增
                let v = {
                    ModifyType: "Add",
                    TowerType: this.towerType,
                    FeatureNumber: this.tzbh,
                    DataValue: {
                        featureNumber: this.tzbh,
                        featureName: this.tzmc,
                        featureValue: this.tzz,
                        priority: this.yxj,
                    },
                };
                let data = {
                    functionName: "ModifyFeatureInfo",
                    backFunctionName: "tzxxAdd",
                    functionParameters: [
                        {
                            key: "ModifyFeatureInfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.tzxxAdd = this.tzxxAdd;
            } else {
                //  编辑
                let v = {
                    ModifyType: "Change",
                    TowerType: this.towerType,
                    FeatureNumber: this.tzbh,
                    DataValue: {
                        featureNumber: this.tzbh,
                        featureName: this.tzmc,
                        featureValue: this.tzz,
                        priority: this.yxj,
                    },
                };
                let data = {
                    functionName: "ModifyFeatureInfo",
                    backFunctionName: "tzxxUpdate",
                    functionParameters: [
                        {
                            key: "ModifyFeatureInfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.tzxxUpdate = this.tzxxUpdate;
            }
        },
        // 特征信息新增成功回调
        tzxxAdd() {
            this.tztkShow = false;
            this.getTZXX();
        },
        // 特征信息编辑成功回调
        tzxxUpdate() {
            this.tztkShow = false;
            this.getTZXX();
        },
        // 监听点击删除按钮
        t_deleteClick() {
            if (this.t_index != 2) {
                this.t_index = 2;
            } else {
                if (this.selectList2.featureNumber != undefined || null || "") {
                    this.tzscShow = true;
                    this.tzbh = this.selectList2.featureNumber;
                    this.tzmc = this.selectList2.featureName;
                    this.tzz = this.selectList2.featureValue;
                    this.yxj = this.selectList2.priority;
                } else {
                    this.$notify({
                        title: "删除节点",
                        message: "请选中一条特征信息",
                        offset: 60,
                        type: "error",
                    });
                }
            }
        },
        // 删除确认按钮
        tzscClick() {
            let v = {
                ModifyType: "Delete",
                TowerType: this.towerType,
                FeatureNumber: this.tzbh,
                DataValue: {
                    featureNumber: this.tzbh,
                    featureName: this.tzmc,
                    featureValue: this.tzz,
                    priority: this.yxj,
                },
            };
            let data = {
                functionName: "ModifyFeatureInfo",
                backFunctionName: "tzxxDelete",
                functionParameters: [
                    {
                        key: "ModifyFeatureInfo",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.tzxxDelete = this.tzxxDelete;
        },
        tzxxDelete(e) {
            this.tzscShow = false;
            this.selectList2 = [];
            this.getTZXX();
        },
        // 关闭删除按钮
        tzscClose() {
            this.tzscShow = false;
        },

        // 隔行变色
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 === 0) {
                //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
                return "warning-row";
            }
            return "";
        },
        tableRowClassName2({ row, rowIndex }) {
            if (rowIndex % 2 === 0) {
                //=>这里可以改成 rowIndex%2=== 1，后面直接else即可达到隔行变色效果。
                return "warning-row";
            }
            return "";
        },
        title_click(e) {
            if (e == 0) {
                this.showSp = false;
                this.showTz = true;
                this.getTZXX();
            } else {
                this.showTz = false;
                this.showSp = true;
                this.getSPTX();
            }
        },
        s_Click(selection, row) {
            this.$refs.mug22.clearSelection();
            if (selection.length === 0) {
                let v = {
                    ModelType: "BoomTowerType",
                    SelectType: false,
                    SelectNum: row.Str_Num,
                };
                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "BackModifyBoomInfo",
                    functionParameters: [
                        {
                            key: "Select",
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
                    ModelType: "BoomTowerType",
                    SelectType: true,
                    SelectNum: row.Str_Num,
                };
                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "BackModifyBoomInfo",
                    functionParameters: [
                        {
                            key: "Select",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        s_Click2(selection, row) {
            this.$refs.mug23.clearSelection();
            if (selection.length === 0) {
                return;
            }
            if (row) {
                this.selectList2 = row;
                this.$refs.mug23.toggleRowSelection(row);
            }
        },
        s_Click3(selection, row) {
            this.$refs.mug24.clearSelection();
            if (selection.length === 0) {
                let v = {
                    ModifyType: "Select",
                    ColorNumber: this.sp_number,
                    SelectType: false,
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxSelect",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxSelect = this.sptxSelect;
                return;
            }
            if (row) {
                this.selectList3 = row;
                this.$refs.mug24.toggleRowSelection(row);
                let v = {
                    ModifyType: "Select",
                    ColorNumber: this.sp_number,
                    SelectType: true,
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxSelect",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxSelect = this.sptxSelect;
            }
        },

        gClick(row) {
            this.$refs.mug22.clearSelection();
            if (this.selectList != row) {
                this.selectList = row;
                this.$refs.mug22.toggleRowSelection(row);
                let v = {
                    ModelType: "BoomTowerType",
                    SelectType: true,
                    SelectNum: row.Str_Num,
                };
                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "BackModifyBoomInfo",
                    functionParameters: [
                        {
                            key: "Select",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else {
                let v = {
                    ModelType: "BoomTowerType",
                    SelectType: false,
                    SelectNum: row.Str_Num,
                };
                let data = {
                    functionName: "ModifyBoomInfo",
                    backFunctionName: "BackModifyBoomInfo",
                    functionParameters: [
                        {
                            key: "Select",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                this.selectList = "";
            }
        },
        gClick2(row) {
            this.$refs.mug23.clearSelection();
            if (this.selectList2 != row) {
                this.selectList2 = row;
                this.$refs.mug23.toggleRowSelection(row);
            } else {
                this.selectList2 = "";
            }
        },
        gClick3(row) {
            this.$refs.mug24.clearSelection();
            if (this.selectList3 != row) {
                this.selectList3 = row;
                this.$refs.mug24.toggleRowSelection(row);
                this.sp_number = this.selectList3.number;
                let v = {
                    ModifyType: "Select",
                    ColorNumber: this.sp_number,
                    SelectType: true,
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxSelect",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxSelect = this.sptxSelect;
            } else {
                this.selectList3 = "";
                let v = {
                    ModifyType: "Select",
                    ColorNumber: this.sp_number,
                    SelectType: false,
                };
                let data = {
                    functionName: "ModifyColorAtlasnfo",
                    backFunctionName: "sptxSelect",
                    functionParameters: [
                        {
                            key: "ModifyColorAtlasnfo",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                window.ue.interface.sptxSelect = this.sptxSelect;
            }
        },
        sptxSelect(e) {},
        getTableDetil() {
            let data = {
                functionName: "ModelQuery",
                backFunctionName: "getTableDetils",
                functionParameters: [
                    {
                        key: "ModelType",
                        value: "Tower",
                    },
                    {
                        key: "ModelID",
                        value: this.towerType,
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.getTableDetils = this.getTableDetils;
        },
        getTableDetils(e) {
            let data = JSON.parse(e);
            let data2 = JSON.parse(data.value);
            let newData = data2.dataList;
            this.dataList = newData;
            if (newData.length > 0) {
                // 获取最后一位Str_Num，并存储
                let index = newData.length - 1;
                this.storageNum = parseInt(newData[index].Str_Num);
            } else {
                this.storageNum = 0;
            }
        },
        // 排序方法
        compare(key) {
            return function (value1, value2) {
                var val1 = value1[key];
                var val2 = value2[key];
                return val1 - val2;
            };
        },
        sp_typeClick() {
            if (this.shouXiala == 0) {
                this.shouXiala = 1;
            } else {
                this.shouXiala = 0;
            }
        },
        xlIndexClick(e) {
            if (e == 0) {
                this.xialaIndex = 0;
                this.xiaLaSpan = "常亮";
            } else {
                this.xialaIndex = 1;
                this.xiaLaSpan = "渐变";
            }
        },
    },
};
</script>

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

.blocksss > .el-table__header tr,
.el-table__header th {
    height: 39.8px !important;
    /* background: rgba(25, 61, 112, 0.5) !important; */
    background: transparent !important;
    font-family: SourceHanSansSC-Regular;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
}
.el-table__body tr,
.el-table__body td {
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
.mxRight {
    width: 379px;
    height: 943px;
    position: absolute;
    top: 125px;
    right: 10px;
}
</style>
<style scoped>
/* 表格样式 */
.e_tables {
    width: 90%;
    height: 100%;
    overflow-y: scroll;
    margin-left: 5%;
}
.e_tables2 {
    height: 72% !important;
}
.e_tables::-webkit-scrollbar {
    display: none;
}
.span1 {
    color: red;
}
.w_title {
    width: 100%;
    height: 47.3px;
    background: url("img/title.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
.blocksss {
    width: 100%;
    height: 322px;
    background: url("img/bg4.png") no-repeat !important;
    background-size: 100% 100% !important;
    margin-bottom: 15px;
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
.t_input {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 40px;
}
.t_input > .t_block {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 13px;
    background: url("img/tbg.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.t_input > .t_block > img {
    width: 16px;
    height: 16px;
}
.t_input > .chaxun {
    width: 126px;
    height: 100%;
    background: url("img/chaxun.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.chaxun > .icons {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 8.5px;
    right: 8.5px;
    background: url("img/c1.png") no-repeat !important;
    background-size: 100% 100% !important;
}
</style>

<style scoped>
.wbb {
    width: 100%;
    height: 606px;
    overflow-y: scroll;
    background: url("img/bg3.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.wbb::-webkit-scrollbar {
    display: none;
}
.w_block {
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: center;
    margin-top: 11px;
}
.w_block > .block {
    width: 421.44px;
    height: 100%;
    background: url("img/wbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
}
.w_block > .block > .left {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 2px;
}

.dd {
    width: 10px;
    height: 100%;
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
.t_block_add {
    width: 84px !important;
    height: 32px !important;
    background: url("img/t_add.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.t_block_update {
    width: 84px !important;
    height: 32px !important;
    background: url("img/t_block_update.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.t_block_down {
    width: 84px !important;
    height: 32px !important;
    background: url("img/t_block_down.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.t_block_ups {
    width: 84px !important;
    height: 32px !important;
    background: url("img/t_block_ups.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.t_block_decete {
    width: 84px !important;
    height: 32px !important;
    background: url("img/t_block_decete.png") no-repeat !important;
    background-size: 100% 100% !important;
}
</style>
<style scoped>
.zhezhao {
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
.gj_tk {
    width: 348px;
    height: 264px;
    background: url("img/gjtk.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.gj_tk2 {
    width: 347.59px;
    height: 301.56px;
    background: url("img/gjtk2.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.sp_tk {
    width: 348px;
    height: 352px;
    position: relative;
    background: url("img/sp_tk.png") no-repeat;
    background-size: 100% 100%;
}
.sp_tk2 {
    height: 436px;
}
.tklj {
    width: 162px;
    height: 27px;
    position: absolute;
    left: 7px;
    top: 24px;
    background: url("img/tklj.png") no-repeat;
    background-size: 100% 100%;
    z-index: 0;
}
.sp_span {
    width: 100%;
    height: 32px;
    margin-top: 12px;
    display: flex;
}
.sp_span > .sp_left {
    width: 78px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 16px;
}
.sp_span > .sp_left > span {
    font-family: Alibaba PuHuiTi 2;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ffffff;
}
.sp_span > .sp_right1 {
    width: 216px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    background: url("img/sp_right.png") no-repeat;
    background-size: 100% 100%;
}
.sp_span > .sp_right1 > span {
    font-family: Alibaba PuHuiTi 2;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0px;
    margin-left: 9px;

    color: #ffffff;
}
.sp_span > .sp_right2 {
    width: 216px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    background: url("img/sp_right2.png") no-repeat;
    background-size: 100% 100%;
}
.sp_span > .sp_right2 > span {
    font-family: Alibaba PuHuiTi 2;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0px;
    margin-left: 9px;
    color: #ffffff;
}
.sp_xia {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 4px;
    background: url("img/xiala.png") no-repeat;
    background-size: 100% 100%;
}
.sp_shou {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 4px;
    background: url("img/shou.png") no-repeat;
    background-size: 100% 100%;
}
.sp_sx {
    width: 216px;
    height: 72px;
    position: absolute;
    left: 0px;
    bottom: -75px;
    background: url("img/xlbj.png") no-repeat;
    background-size: 100% 100%;
    z-index: 888888;
}
.sp_sx_item {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
}
.sp_sx_item > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 9px;
}
.sp_sx_item2 {
    background: url("img/xat1.png") no-repeat;
    background-size: 100% 100%;
}
.sp_sx_item2 > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 9px;
}
.sp_input {
    position: absolute;
    width: 1px;
    height: 1px;
    left: 23.3%;
    top: 16px;
}
.sp_input2 {
    position: absolute;
    width: 61%;
    height: 100%;
    left: 23.3%;
    top: 0;
    z-index: 999;
}
.sp_btn {
    width: 172px;
    height: 33px;
    position: absolute;
    right: 16px;
    bottom: 18px;
    display: flex;
    justify-content: space-between;
}
.sp_btn > .sp_bitem {
    width: 81px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("img/sp_bi.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.sp_btn > .sp_bitem > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    color: #e2e2e2;
}
.sp_ys {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    position: relative;
}
.sp_ys > .sp_i1 {
    width: 12px;
    height: 12px;
    background: url("img/sp_i1.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 94px;
    margin-right: 5px;
}
.sp_ys > .sp_i2 {
    width: 14px;
    height: 14px;
    background: url("img/sp_i2.png") no-repeat;
    background-size: 100% 100%;
    z-index: 2;
}
.sp_ys > .sp_i3 {
    width: 180px;
    height: 8px;
    background: url("img/sp_i3.png") no-repeat;
    background-size: 100% 100%;
    margin-left: -14px;
    margin-right: 7px;
    z-index: 1;
}
.sp_ys > .sp_i4 {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    opacity: 1;
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
.yxj {
    width: 110%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 88;
}
.yxjBlock {
    width: 216px;
    height: 180px;
    position: absolute;
    top: 32px;
    left: 0;
    background: linear-gradient(180deg, #012f3d 0%, rgba(0, 37, 47, 0.8) 100%);
    z-index: 88;
    overflow: scroll;
}
.yxjBlock::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
}
.yxjBlock > .blockItem {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
}
.yxjBlock > .blockItem > span {
    font-family: SourceHanSansSC-Regular;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 20px;
}
.xia {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 192px;
    top: 6px;
    background: url("img/xia.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.tk_blocks > span {
    font-family: AlibabaPuHuiTi_2_55_Regular;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #ffffff;
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
    z-index: 0;
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
