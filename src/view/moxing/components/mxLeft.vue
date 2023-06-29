<template>
  <div
    class="mxLeft"
    :class="[
      showMB ? 'dengji' : '',
      showMB2 ? 'dengji' : '',
      showMB3 ? 'showMB3' : '',
    ]"
  >
    <!-- title -->
    <!-- <div class="w_title">
      <span>模型资产导航树</span>
    </div> -->
    <div class="j_titles">
      <span>模型资产导航树</span>
    </div>
    <div class="t_input">
      <div
        class="t_block"
        @click="chaxunClick"
        :class="currentIndex == 0 ? 't_block_cha' : ''"
      >
        <img v-show="currentIndex != 0" src="./img/i1.png" />
        <input ref="inputsss" v-show="currentIndex == 0" v-model="filterText" />
        <img v-show="currentIndex == 0" src="./img/c1.png" />
      </div>
      <div
        class="t_block"
        @click="addClick"
        :class="currentIndex == 1 ? 't_block_add' : ''"
      >
        <img v-show="currentIndex != 1" src="./img/i2.png" />
      </div>
      <div
        class="t_block"
        @click="updateClick"
        :class="currentIndex == 2 ? 't_block_update' : ''"
      >
        <img v-show="currentIndex != 2" src="./img/i3.png" />
      </div>
      <div
        class="t_block"
        @click="downClick"
        :class="currentIndex == 3 ? 't_block_down' : ''"
      >
        <img v-show="currentIndex != 3" src="./img/i4.png" />
      </div>
      <div
        class="t_block"
        @click="upsClick"
        :class="currentIndex == 4 ? 't_block_ups' : ''"
      >
        <img v-show="currentIndex != 4" src="./img/i5.png" />
      </div>

      <div
        class="t_block"
        @click="deleteClick"
        :class="currentIndex == 5 ? 't_block_decete' : ''"
      >
        <img v-show="currentIndex != 5" src="./img/i6.png" />
      </div>
      <div class="chaxun" v-show="false">
        <div class="icons"></div>
      </div>
    </div>
    <div class="block">
      <div class="blockItem">
        <el-tree
          :data="datas"
          show-checkbox
          :props="defaultProps"
          @node-click="handleNodeClick"
          :check-strictly="true"
          check-on-click-node
          :filter-node-method="filterNode"
          @check="selectTree"
          node-key="id"
          :key="tree_key"
          :accordion="true"
          :indent="20"
          :default-expanded-keys="defaultExpand"
          :default-checked-keys="defaultExpand"
          ref="treeForm_mx"
        ></el-tree>
      </div>
    </div>
    <!-- 编辑弹框 -->
    <div class="zhezhao" v-show="showMB">
      <div class="z_tankuang">
        <!-- 关闭按钮 -->
        <div class="z_cha" @click="closeTK"></div>
        <!-- title -->
        <div class="z_title">
          <span>模型资产导航树编辑</span>
        </div>
        <div class="z_input">
          <div class="lefts">
            <span>模型名称</span>
          </div>
          <div class="rights">
            <input
              placeholder="最大输入不超过10个字"
              maxlength="10"
              v-model="updaValue"
            />
          </div>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="updateClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="closeTK">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增弹框 -->
    <div class="zhezhao" v-show="showMB2">
      <div class="z_tankuang z_tankuang2">
        <!-- 关闭按钮 -->
        <div class="z_cha" @click="closeTK2"></div>
        <!-- title -->
        <div class="z_title">
          <span>模型资产新增导航树</span>
        </div>
        <div class="z_blockss">
          <span>是否在当前节点之下增加一个分类?</span>
        </div>
        <div class="z_input">
          <div class="lefts">
            <span>模型名称</span>
          </div>
          <div class="rights">
            <input
              v-model="addValue"
              placeholder="最大输入不超过10个字"
              maxlength="10"
            />
          </div>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="addClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="unAddClicks">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除弹框 -->
    <div class="zhezhao" v-show="showMB3">
      <div class="z_delete">
        <div class="z_d_block">
          <img src="./img/jj.png" />
          <span>是否将当前选中信息进行删除？</span>
        </div>
        <div class="z_btn">
          <div class="z_blocks" @click="deleteClicks">
            <span>确认</span>
          </div>
          <div class="z_blocks" @click="unDeleteClicks">
            <span>取消</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 模型已调用，不可删除弹框 -->
    <div class="zhezhao" v-show="showMB4">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>该模型已在电网三维网架中调用，无法删除！</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks2">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 模型有子节点，不可删除弹框 -->
    <div class="zhezhao" v-show="showMB5">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>该节点下有其他模型信息，请将下级节点删除后在进行该操作！</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks3">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mxLeft",
  data() {
    return {
      // 是否显示编辑弹框
      showMB: false,
      updaValue: "",
      // 是否显示新增弹框
      showMB2: false,
      addValue: "",
      // 是否显示删除弹框
      showMB3: false,
      // 模型已调用，不可删除弹框
      showMB4: false,
      //   该模型有子节点，不可删除
      showMB5: false,
      currentIndex: -1,
      filterText: "",
      datas: [
        {
          label: "站房",
          id: 1,
          children: [
            {
              label: "变电站",
              id: 2,
              children: [
                {
                  label: "35kV",
                  id: 3,
                  children: [
                    {
                      label: "标准站",
                      towerType: "35kV_标准站",
                      id: 4,
                      featureInfoList: [
                        {
                          featureNumber: "10048",
                          featureName: "站电压等级",
                          featureValue: "35kV",
                          priority: "0",
                          oid: "1",
                        },
                        {
                          featureNumber: "10049",
                          featureName: "站模型名称",
                          featureValue: "35kV标准站",
                          priority: "1",
                          oid: "2",
                        },
                        {
                          featureNumber: "10050",
                          featureName: "模型最终标识",
                          featureValue: "35kV_标准站",
                          priority: "2",
                          oid: "3",
                        },
                      ],
                    },
                    {
                      label: "郭里口变电站",
                      towerType: "35kV郭里口站",
                      id: 5,
                      featureInfoList: [
                        {
                          featureNumber: "10051",
                          featureName: "站电压等级",
                          featureValue: "35kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10052",
                          featureName: "站模型名称",
                          featureValue: "35kV郭里口站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10053",
                          featureName: "模型最终标识",
                          featureValue: "35kV郭里口站",
                          priority: "2",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "110kV",
                  id: 6,
                  children: [
                    {
                      label: "标准站",
                      id: 7,
                      towerType: "110kV_标准站",
                    },
                    {
                      label: "容西变电站",
                      id: 8,
                      towerType: "110kV容西站",
                      featureInfoList: [
                        {
                          featureNumber: "10054",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10055",
                          featureName: "站模型名称",
                          featureValue: "110kV容西站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10056",
                          featureName: "模型最终标识",
                          featureValue: "110kV容西站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "雄东1号变电站",
                      id: 9,
                      towerType: "110kV雄东1号站",
                      featureInfoList: [
                        {
                          featureNumber: "10057",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10058",
                          featureName: "站模型名称",
                          featureValue: "110kV雄东1号站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10059",
                          featureName: "模型最终标识",
                          featureValue: "110kV雄东1号站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "昝岗变电站",
                      id: 10,
                      towerType: "110kV昝岗站",
                      featureInfoList: [
                        {
                          featureNumber: "10060",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10061",
                          featureName: "站模型名称",
                          featureValue: "110kV昝岗站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10062",
                          featureName: "模型最终标识",
                          featureValue: "110kV昝岗站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "起步区12号变电站",
                      id: 11,
                      towerType: "110kV起步区12号站",
                      featureInfoList: [
                        {
                          featureNumber: "10063",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10064",
                          featureName: "站模型名称",
                          featureValue: "110kV起步区12号站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10065",
                          featureName: "模型最终标识",
                          featureValue: "110kV起步区12号站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "河西变电站",
                      id: 12,
                      towerType: "110kV河西站",
                      featureInfoList: [
                        {
                          featureNumber: "10066",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10067",
                          featureName: "站模型名称",
                          featureValue: "110kV河西站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10068",
                          featureName: "模型最终标识",
                          featureValue: "110kV河西站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "南郑变电站",
                      id: 13,
                      towerType: "110kV南郑站",
                      featureInfoList: [
                        {
                          featureNumber: "10069",
                          featureName: "站电压等级",
                          featureValue: "110kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10070",
                          featureName: "站模型名称",
                          featureValue: "110kV南郑站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10071",
                          featureName: "模型最终标识",
                          featureValue: "110kV南郑站",
                          priority: "2",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "220kV",
                  id: 18,
                  children: [
                    {
                      label: "标准站",
                      id: 14,
                      towerType: "220kV_标准站",
                      featureInfoList: [
                        {
                          featureNumber: "10072",
                          featureName: "站电压等级",
                          featureValue: "220kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10073",
                          featureName: "站模型名称",
                          featureValue: "220kV标准站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10074",
                          featureName: "模型最终标识",
                          featureValue: "220kV_标准站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "剧村变电站",
                      id: 15,
                      towerType: "220kV剧村站",
                      ShowKSH: "1",
                      featureInfoList: [
                        {
                          featureNumber: "10075",
                          featureName: "站电压等级",
                          featureValue: "220kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10076",
                          featureName: "站模型名称",
                          featureValue: "220kV剧村站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10077",
                          featureName: "模型最终标识",
                          featureValue: "220kV剧村站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "昝西变电站",
                      id: 16,
                      towerType: "220kV昝西站",
                      featureInfoList: [
                        {
                          featureNumber: "10078",
                          featureName: "站电压等级",
                          featureValue: "220kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10079",
                          featureName: "站模型名称",
                          featureValue: "220kV昝西站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10080",
                          featureName: "模型最终标识",
                          featureValue: "220kV昝西站",
                          priority: "2",
                        },
                      ],
                    },
                    {
                      label: "起步区7号电站",
                      id: 17,
                      towerType: "220kV起步区7号站",
                      featureInfoList: [
                        {
                          featureNumber: "10081",
                          featureName: "站电压等级",
                          featureValue: "220kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10082",
                          featureName: "站模型名称",
                          featureValue: "220kV起步区7号站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10083",
                          featureName: "模型最终标识",
                          featureValue: "220kV起步区7号站",
                          priority: "2",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "500kV",
                  id: 19,
                  children: [
                    {
                      label: "标准站",
                      id: 20,
                      towerType: "500kV_标准站",
                      featureInfoList: [
                        {
                          featureNumber: "10084",
                          featureName: "站电压等级",
                          featureValue: "500kV",
                          priority: "0",
                        },
                        {
                          featureNumber: "10085",
                          featureName: "站模型名称",
                          featureValue: "500kV标准站",
                          priority: "1",
                        },
                        {
                          featureNumber: "10086",
                          featureName: "模型最终标识",
                          featureValue: "500kV_标准站",
                          priority: "2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "箱式变电站",
              id: 21,
              children: [
                {
                  label: "标准站",
                  id: 22,
                },
              ],
            },
            {
              label: "间隔模型(点颜色)",
              id: 23,
              children: [
                {
                  label: "35kV",
                  id: 24,
                },
                {
                  label: "110kV",
                  id: 25,
                },
                {
                  label: "220kV",
                  id: 26,
                },
                {
                  label: "500kV",
                  id: 27,
                },
              ],
            },
          ],
        },
        {
          label: "架空模型",
          id: 28,
          children: [
            {
              label: "杆塔模型",
              id: 29,
              children: [
                {
                  label: "10kv",
                  id: 30,
                  children: [
                    {
                      label: "单回路",
                      id: 31,
                      children: [
                        {
                          label: "(1路)10kV标准杆塔1",
                          towerType: "10kV_01",
                          id: 32,
                          featureInfoList: [
                            {
                              featureNumber: "10000",
                              featureName: "杆电压等级",
                              featureValue: "10kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10001",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10002",
                              featureName: "模型最终标识",
                              featureValue: "10kV_01",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(1路)10kV标准杆塔2",
                          towerType: "10kV_02",
                          id: 33,
                          featureInfoList: [
                            {
                              featureNumber: "10003",
                              featureName: "杆电压等级",
                              featureValue: "10kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10004",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10005",
                              featureName: "模型最终标识",
                              featureValue: "10kV_02",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "四回路",
                      id: 34,
                      children: [
                        {
                          label: "(4路)10kV标准杆塔3",
                          towerType: "10kV_03",
                          id: 35,
                          featureInfoList: [
                            {
                              featureNumber: "10006",
                              featureName: "杆电压等级",
                              featureValue: "10kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10007",
                              featureName: "杆回路数量",
                              featureValue: "4",
                              priority: "1",
                            },
                            {
                              featureNumber: "10008",
                              featureName: "模型最终标识",
                              featureValue: "10kV_03",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "35kv",
                  id: 36,
                  children: [
                    {
                      label: "单回路",
                      id: 37,
                      children: [
                        {
                          label: "(1路)35kV标准杆塔1",
                          towerType: "35kV_01",
                          id: 38,
                          featureInfoList: [
                            {
                              featureNumber: "10009",
                              featureName: "杆电压等级",
                              featureValue: "35kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10010",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10011",
                              featureName: "模型最终标识",
                              featureValue: "35kV_01",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(1路)35kV标准杆塔2",
                          towerType: "35kV_03",
                          id: 39,
                          featureInfoList: [
                            {
                              featureNumber: "10012",
                              featureName: "杆电压等级",
                              featureValue: "35kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10013",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10014",
                              featureName: "模型最终标识",
                              featureValue: "35kV_03",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "双回路",
                      id: 40,
                      children: [
                        {
                          label: "(2路)35kV标准杆塔3",
                          towerType: "35kV_02",
                          id: 41,
                          featureInfoList: [
                            {
                              featureNumber: "10015",
                              featureName: "杆电压等级",
                              featureValue: "35kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10016",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10017",
                              featureName: "模型最终标识",
                              featureValue: "35kV_02",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(2路)35kV标准杆塔4",
                          towerType: "35kV_04",
                          id: 42,
                          featureInfoList: [
                            {
                              featureNumber: "10018",
                              featureName: "杆电压等级",
                              featureValue: "35kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10019",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10020",
                              featureName: "模型最终标识",
                              featureValue: "35kV_04",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(2路)35kV标准杆塔5",
                          towerType: "35kV_05",
                          id: 43,
                          featureInfoList: [
                            {
                              featureNumber: "10021",
                              featureName: "杆电压等级",
                              featureValue: "35kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10022",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10023",
                              featureName: "模型最终标识",
                              featureValue: "35kV_05",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "110kv",
                  id: 44,
                  children: [
                    {
                      label: "单回路",
                      id: 47,
                      children: [
                        {
                          label: "(1路)110kV标准杆塔1",
                          towerType: "110kV_01",
                          id: 45,
                          featureInfoList: [
                            {
                              featureNumber: "10024",
                              featureName: "杆电压等级",
                              featureValue: "110kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10025",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10026",
                              featureName: "模型最终标识",
                              featureValue: "110kV_01",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(1路)110kV标准杆塔2",
                          towerType: "110kV_02",
                          id: 46,
                          featureInfoList: [
                            {
                              featureNumber: "10027",
                              featureName: "杆电压等级",
                              featureValue: "110kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10028",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10029",
                              featureName: "模型最终标识",
                              featureValue: "110kV_02",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "双回路",
                      id: 48,
                      children: [
                        {
                          label: "(2路)110kV标准杆塔3",
                          towerType: "110kV_03",
                          id: 49,
                          featureInfoList: [
                            {
                              featureNumber: "10030",
                              featureName: "杆电压等级",
                              featureValue: "110kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10031",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10032",
                              featureName: "模型最终标识",
                              featureValue: "110kV_03",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(2路)110kV标准杆塔4",
                          towerType: "110kV_04",
                          id: 50,
                          featureInfoList: [
                            {
                              featureNumber: "10033",
                              featureName: "杆电压等级",
                              featureValue: "110kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10034",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10035",
                              featureName: "模型最终标识",
                              featureValue: "110kV_04",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "220kv",
                  id: 51,
                  children: [
                    {
                      label: "单回路",
                      id: 52,
                      children: [
                        {
                          label: "(1路)220kV标准杆塔1",
                          towerType: "220kV_01",
                          id: 53,
                          featureInfoList: [
                            {
                              featureNumber: "10036",
                              featureName: "杆电压等级",
                              featureValue: "220kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10037",
                              featureName: "杆回路数量",
                              featureValue: "1",
                              priority: "1",
                            },
                            {
                              featureNumber: "10038",
                              featureName: "模型最终标识",
                              featureValue: "220kV_01",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "双回路",
                      id: 54,
                      children: [
                        {
                          label: "(2路)220kV标准杆塔2",
                          towerType: "220kV_02",
                          id: 55,
                          featureInfoList: [
                            {
                              featureNumber: "10039",
                              featureName: "杆电压等级",
                              featureValue: "220kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10040",
                              featureName: "杆回路数量",
                              featureValue: "2",
                              priority: "1",
                            },
                            {
                              featureNumber: "10041",
                              featureName: "模型最终标识",
                              featureValue: "220kV_02",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "四回路",
                      id: 56,
                      children: [
                        {
                          label: "(4路)220kV标准杆塔3",
                          towerType: "220kV_03",
                          id: 57,
                          featureInfoList: [
                            {
                              featureNumber: "10042",
                              featureName: "杆电压等级",
                              featureValue: "220kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10043",
                              featureName: "杆回路数量",
                              featureValue: "4",
                              priority: "1",
                            },
                            {
                              featureNumber: "10044",
                              featureName: "模型最终标识",
                              featureValue: "220kV_03",
                              priority: "2",
                            },
                          ],
                        },
                        {
                          label: "(4路)220kV标准杆塔4",
                          towerType: "220kV_04",
                          id: 58,
                          featureInfoList: [
                            {
                              featureNumber: "10045",
                              featureName: "杆电压等级",
                              featureValue: "220kV",
                              priority: "0",
                            },
                            {
                              featureNumber: "10046",
                              featureName: "杆回路数量",
                              featureValue: "4",
                              priority: "1",
                            },
                            {
                              featureNumber: "10047",
                              featureName: "模型最终标识",
                              featureValue: "220kV_04",
                              priority: "2",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "导线模型",
              id: 59,
              children: [
                {
                  label: "10kv",
                  id: 60,
                },
                {
                  label: "35kv",
                  id: 61,
                },
                {
                  label: "110kv",
                  id: 62,
                },
                {
                  label: "220kv",
                  id: 63,
                },
                {
                  label: "500kv",
                  id: 64,
                },
              ],
            },
          ],
        },
        {
          label: "电缆模型",
          id: 65,
          children: [
            {
              label: "终端模型(点颜色)",
              id: 66,
              children: [
                {
                  label: "10kv",
                  towerType: "DLZD_10kV",
                  id: 67,
                },
                {
                  label: "35kv",
                  towerType: "DLZD_35kV",
                  id: 68,
                },
                {
                  label: "110kv",
                  towerType: "DLZD_110kV",
                  id: 69,
                },
                {
                  label: "220kv",
                  towerType: "DLZD_220kV",
                  id: 70,
                },
                {
                  label: "500kv",
                  towerType: "DLZD_500kV",
                  id: 71,
                },
                {
                  label: "1000kv",
                  towerType: "DLZD_500kV",
                  id: 72,
                },
              ],
            },
            {
              label: "电缆段模型",
              id: 73,
              children: [
                {
                  label: "10kv",
                  id: 74,
                },
                {
                  label: "35kv",
                  id: 75,
                },
                {
                  label: "110kv",
                  id: 76,
                },
                {
                  label: "220kv",
                  id: 77,
                },
                {
                  label: "500kv",
                  id: 78,
                },
              ],
            },
            {
              label: "电缆沟模型",
              id: 79,
            },
          ],
        },
        {
          label: "微网模型",
          id: 80,
          children: [
            {
              label: "储能箱",
              towerType: "CNX_01",
              id: 81,
            },
            {
              label: "光伏板",
              towerType: "GFB_01",
              id: 82,
            },
            {
              label: "风机",
              id: 83,
            },
          ],
        },
        {
          label: "站内模型",
          id: 84,
          children: [
            {
              label: "站内交流一次模型",
              id: 87,
              children: [
                {
                  label: "主变压器",
                  towerType: "BYQ_01",
                  id: 85,
                },
                {
                  label: "配电变压器",
                  id: 86,
                },
              ],
            },
            {
              label: "站内交流二次模型",
              id: 88,
            },
          ],
        },
        {
          label: "模型素材库",
          id: 89,
          children: [
            {
              label: "10k配电模型库",
              id: 90,
              children: [
                {
                  label: "电缆",
                  id: 91,
                  children: [
                    {
                      label: "电缆保护管",
                      id: 92,
                      children: [
                        {
                          label: "C_PVC管",
                          towerType: "C_PVC管",
                          id: 93,
                        },
                        {
                          label: "MMP管",
                          towerType: "MMP管",
                          id: 94,
                        },
                      ],
                    },
                    {
                      label: "电缆中间头",
                      id: 95,
                      children: [
                        {
                          label: "10kV电缆中间头",
                          towerType: "DLZJT_10kV",
                          id: 96,
                        },
                      ],
                    },
                    {
                      label: "电缆终端头",
                      id: 97,
                      children: [
                        {
                          label: "0.4kV电缆终端头",
                          towerType: "DLZDT_0-4kV",
                          id: 98,
                        },
                        {
                          label: "10kV电缆终端头",
                          towerType: "DLZDT_10kV",
                          id: 99,
                        },
                      ],
                    },
                    {
                      label: "10kV检修电源箱",
                      towerType: "JXDYX_10kV",
                      id: 100,
                    },
                  ],
                },
                {
                  label: "分线箱",
                  id: 101,
                  children: [
                    {
                      label: "分线箱",
                      towerType: "FXX_10kV",
                      id: 102,
                    },
                  ],
                },
                {
                  label: "钢管杆",
                  id: 103,
                  children: [
                    {
                      label: "单回架空线钢杆",
                      towerType: "DHJKXGG",
                      id: 104,
                    },
                    {
                      label: "双回架空线钢杆",
                      towerType: "SHJKXGG",
                      id: 105,
                    },
                  ],
                },
                {
                  label: "环网箱",
                  id: 106,
                  children: [
                    {
                      label: "环网箱二进二出",
                      towerType: "HWX2J2C",
                      id: 107,
                    },
                    {
                      label: "环网箱二进四出",
                      towerType: "HWX2J4C",
                      id: 108,
                    },
                  ],
                },
                {
                  label: "水泥杆",
                  id: 109,
                  children: [
                    {
                      label: "10米水泥杆",
                      towerType: "SNG_10m",
                      id: 110,
                    },
                    {
                      label: "12米水泥杆 ",
                      towerType: "SNG_12m",
                      id: 111,
                    },
                    {
                      label: "15米水泥杆 ",
                      towerType: "SNG_15m",
                      id: 112,
                    },
                    {
                      label: "18米水泥杆 ",
                      towerType: "SNG_18m",
                      id: 113,
                    },
                  ],
                },
                {
                  label: "箱式变",
                  id: 114,
                  children: [
                    {
                      label: "10kV箱式变压器1",
                      towerType: "XSBYQ_10kV_1",
                      id: 115,
                    },
                    {
                      label: "10kV箱式变压器2",
                      towerType: "XSBYQ_10kV_2",
                      id: 116,
                    },
                    {
                      label: "xxxx",
                      children: [],
                      id: 117,
                    },
                  ],
                },
                {
                  label: "直线杆单杆",
                  id: 118,
                  children: [
                    {
                      label: "10kV双三角双回直线水泥杆",
                      towerType: "SSJSHZXSNG_10kV",
                      id: 119,
                    },
                  ],
                },
              ],
            },
            {
              label: "35kV变电工程模型库",
              id: 120,
              children: [
                {
                  label: "35kV配电装置区域",
                  id: 121,
                  children: [
                    {
                      label: "避雷器",
                      id: 122,
                      children: [
                        {
                          label: "35kV避雷器",
                          towerType: "BLQ_35kV",
                          id: 123,
                        },
                      ],
                    },
                    {
                      label: "电流互感器",
                      id: 124,
                      children: [
                        {
                          label: "35kV电流互感器",
                          towerType: "DLHGQ_35kV",
                          id: 125,
                        },
                      ],
                    },
                    {
                      label: "电压互感器",
                      id: 126,
                      children: [
                        {
                          label: "35kV电压互感器1",
                          towerType: "DYHGQ_35kV_1",
                          id: 127,
                        },
                        {
                          label: "35kV电压互感器2",
                          towerType: "DYHGQ_35kV_2",
                          id: 128,
                        },
                      ],
                    },
                    {
                      label: "断路器",
                      id: 129,
                      children: [
                        {
                          label: "35kV断路器",
                          towerType: "DLQ_35kV",
                          id: 130,
                        },
                      ],
                    },
                    {
                      label: "隔离开关",
                      id: 131,
                      children: [
                        {
                          label: "35kV隔离开关1分闸",
                          towerType: "GLKG_35kV_1",
                          id: 132,
                        },
                        {
                          label: "35kV隔离开关2分闸",
                          towerType: "GLKG_35kV_2",
                          id: 133,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "配电室",
                  id: 134,
                  children: [
                    {
                      label: "穿墙套管",
                      id: 135,
                      children: [
                        {
                          label: "35kV穿墙套管1",
                          towerType: "CQTG_20kV_1",
                          id: 136,
                        },
                        {
                          label: "35kV穿墙套管2",
                          towerType: "CQTG_20kV_2",
                          id: 137,
                        },
                      ],
                    },
                    {
                      label: "二次屏柜",
                      id: 138,
                      children: [
                        {
                          label: "二次屏柜",
                          towerType: "ErCiPinGui_35kV",
                          id: 139,
                        },
                      ],
                    },
                    {
                      label: "开关柜",
                      id: 140,
                      children: [
                        {
                          label: "35kV出线柜",
                          towerType: "CXG_35kV",
                          id: 141,
                        },
                        {
                          label: "35kV分段柜",
                          towerType: "FDG_35kV",
                          id: 142,
                        },
                        {
                          label: "35kV隔离柜 ",
                          towerType: "GLG_35kV",
                          id: 143,
                        },
                        {
                          label: "35kV进线柜1",
                          towerType: "JXG_35kV_1",
                          id: 144,
                        },
                        {
                          label: "35kV进线柜2",
                          towerType: "JXG_35kV_2",
                          id: 145,
                        },
                        {
                          label: "35kV进线柜3",
                          towerType: "JXG_35kV_3",
                          id: 146,
                        },
                        {
                          label: "35kV母线设备柜",
                          towerType: "MXSBG_35kV",
                          id: 147,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "其他",
                  id: 148,
                  children: [
                    {
                      label: "蓄电池组",
                      id: 149,
                      children: [
                        {
                          label: "蓄电池组1",
                          towerType: "XDCZ_35kV_1",
                          id: 150,
                        },
                        {
                          label: "蓄电池组2",
                          towerType: "XDCZ_35kV_2",
                          id: 151,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "无功补偿区域",
                  id: 152,
                  children: [
                    {
                      label: "电容器（组）",
                      id: 153,
                      children: [
                        {
                          label: "35kV框架式电容器组",
                          towerType: "KJSDRQZ_35kV",
                          id: 154,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "主变区域",
                  id: 155,
                  children: [
                    {
                      label: "变压器",
                      id: 156,
                      children: [
                        {
                          label: "35kV变压器",
                          towerType: "BYQ_35kV",
                          id: 157,
                        },
                      ],
                    },
                    {
                      label: "电缆终端",
                      id: 158,
                      children: [
                        {
                          label: "35kV电缆终端1",
                          towerType: "DLZD_35kV_1",
                          id: 159,
                        },
                        {
                          label: "35kV电缆终端2",
                          towerType: "DLZD_35kV_2",
                          id: 160,
                        },
                      ],
                    },
                    {
                      label: "端子箱",
                      id: 161,
                      children: [
                        {
                          label: "ZXW_2_3型端子箱",
                          towerType: "ZXW_2_3XDZX_35kV",
                          id: 162,
                        },
                      ],
                    },
                    {
                      label: "站用变",
                      id: 163,
                      children: [
                        {
                          label: "35kV站用变",
                          towerType: "ZYB_35kV",
                          id: 164,
                        },
                      ],
                    },
                    {
                      label: "支柱绝缘子",
                      id: 165,
                      children: [
                        {
                          label: "35kV支柱绝缘子1",
                          towerType: "ZZJYZ_35kV_1",
                          id: 166,
                        },
                        {
                          label: "35kV支柱绝缘子2",
                          towerType: "ZZJYZ_35kV_2",
                          id: 167,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "110kV输变电工程模型库",
              id: 168,
              children: [
                {
                  label: "10kV配电室",
                  id: 169,
                  children: [
                    {
                      label: "穿墙套管",
                      id: 170,
                      children: [
                        {
                          label: "CQTG_20kV_1",
                          towerType: "CQTG_20kV_1",
                          id: 171,
                        },
                      ],
                    },
                    {
                      label: "二次屏柜",
                      id: 172,
                      children: [
                        {
                          label: "二次屏柜",
                          towerType: "ErCiPinGui_110kV",
                          id: 173,
                        },
                      ],
                    },
                    {
                      label: "开关柜",
                      id: 174,
                      children: [
                        {
                          label: "高压开关柜800_110kV",
                          towerType: "GYKGG800_110kV",
                          id: 175,
                        },
                        {
                          label: "高压开关柜1000_110kV",
                          towerType: "GYKGG1000_110kV",
                          id: 176,
                        },
                      ],
                    },
                    {
                      label: "站用变",
                      children: [],
                      id: 177,
                    },
                  ],
                },
                {
                  label: "110kV配电装置区域",
                  id: 178,
                  children: [
                    {
                      label: "出线GIS",
                      id: 179,
                      children: [
                        {
                          label: "110kV出线GIS（户内）",
                          towerType: "CXGIS_110kV",
                          id: 180,
                        },
                      ],
                    },
                    {
                      label: "分段GIS",
                      id: 181,
                      children: [
                        {
                          label: "110kV分段GIS（户内）",
                          towerType: "FDGISD_110kV",
                          id: 182,
                        },
                      ],
                    },
                    {
                      label: "进线GIS",
                      id: 183,
                      children: [
                        {
                          label: "110kV主变进线GIS（户内）",
                          towerType: "ZBJXGIS_110kV",
                          id: 184,
                        },
                      ],
                    },
                    {
                      label: "母线设备GIS",
                      id: 185,
                      children: [
                        {
                          label: "110kV母线设备GIS（户内)",
                          towerType: "MXSBGIS_110kV",
                          id: 186,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "架空线路",
                  id: 187,
                  children: [
                    {
                      label: "铁塔",
                      id: 188,
                      children: [
                        {
                          label: "1A3-J3-15",
                          towerType: "110kV_1",
                          id: 189,
                        },
                        {
                          label: "1A3-J2-15",
                          towerType: "110kV_2",
                          id: 190,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "其他",
                  id: 191,
                  children: [
                    {
                      label: "蓄电池组",
                      id: 192,
                      children: [
                        {
                          label: "蓄电池组1",
                          towerType: "XDCZ_110kV_1",
                          id: 193,
                        },
                        {
                          label: "蓄电池组2",
                          towerType: "XDCZ_110kV_2",
                          id: 194,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "无功补偿区域",
                  id: 195,
                  children: [
                    {
                      label: "电抗器",
                      id: 196,
                      children: [
                        {
                          label: "10kV低压并联电抗器",
                          towerType: "DYBLDKQ_110kV",
                          id: 197,
                        },
                      ],
                    },
                    {
                      label: "电容器（组）",
                      id: 198,
                      children: [
                        {
                          label: "10kV框架式电容器组",
                          towerType: "KJSDRQZ_110kV",
                          id: 199,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "主变区域",
                  id: 200,
                  children: [
                    {
                      label: "110kV电缆终端",
                      id: 201,
                      children: [
                        {
                          label: "110kV电缆终端",
                          towerType: "DLZD_110kV_2",
                          id: 202,
                        },
                      ],
                    },
                    {
                      label: "110kV中心点成套装置",
                      id: 203,
                      children: [
                        {
                          label: "110kV中性点成套装置",
                          towerType: "ZXDCTZZ_110kV_1",
                          id: 204,
                        },
                      ],
                    },
                    {
                      label: "变压器",
                      id: 205,
                      children: [
                        {
                          label: "110kV变压器",
                          towerType: "XSBYQ_110kV",
                          id: 206,
                        },
                      ],
                    },
                    {
                      label: "端子箱",
                      id: 207,
                      children: [
                        {
                          label: "ZXW-2-3型端子箱",
                          towerType: "ZXW_2_3XDZX_110kV",
                          id: 208,
                        },
                      ],
                    },
                    {
                      label: "检修屏柜",
                      id: 209,
                      children: [
                        {
                          label: "检修屏柜",
                          towerType: "JXPG_110kV",
                          id: 210,
                        },
                      ],
                    },
                    {
                      label: "支柱绝缘子",
                      id: 211,
                      children: [
                        {
                          label: "支柱绝缘子（单相）",
                          towerType: "ZZJYZ_110kV",
                          id: 212,
                        },
                      ],
                    },
                    {
                      label: "主变避雷器组",
                      children: [],
                      id: 213,
                    },
                    {
                      label: "主变智能控制柜",
                      id: 214,
                      children: [
                        {
                          label: "主变智能控制柜",
                          towerType: "ZBZNKZG_110kV",
                          id: 215,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "220kV输变电工程模型库",
              id: 216,
              children: [
                {
                  label: "10kV配电室",
                  id: 217,
                  children: [
                    {
                      label: "10kV开关柜",
                      id: 218,
                      children: [
                        {
                          label: "高压开关柜800",
                          towerType: "GYKGG800_220kV",
                          id: 219,
                        },
                        {
                          label: "高压开关柜1000",
                          towerType: "GYKGG1000_220kV",
                          id: 220,
                        },
                      ],
                    },
                    {
                      label: "穿墙套管",
                      id: 221,
                      children: [
                        {
                          label: "20kV穿墙套管",
                          towerType: "CQTG_20kV_2",
                          id: 222,
                        },
                      ],
                    },
                    {
                      label: "站用变（接地变消弧线圈）",
                      id: 223,
                      children: [
                        {
                          label: "箱式变压器",
                          towerType: "XSBYQ_220kV",
                          id: 224,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "110kV配电装置区域",
                  id: 225,
                  children: [
                    {
                      label: "110kV避雷器",
                      id: 226,
                      children: [
                        {
                          label: "110kV避雷器",
                          towerType: "BLQ_110kV",
                          id: 227,
                        },
                      ],
                    },
                    {
                      label: "出线GIS",
                      id: 228,
                      children: [
                        {
                          label: "110kV出线GIS模型（户内）",
                          towerType: "CXGIS_220kV",
                          id: 229,
                        },
                      ],
                    },
                    {
                      label: "分段GIS",
                      id: 230,
                      children: [
                        {
                          label: "110kV分段GIS模型（户内）",
                          towerType: "FDGISD_220kV",
                          id: 231,
                        },
                      ],
                    },
                    {
                      label: "进线GIS",
                      id: 232,
                      children: [
                        {
                          label: "110kV主变进线GIS模型（户内）",
                          towerType: "ZBJXGIS_220kV",
                          id: 233,
                        },
                      ],
                    },
                    {
                      label: "母联GIS",
                      id: 234,
                      children: [
                        {
                          label: "110kV母联GIS模型",
                          towerType: "MLGIS_110kV",
                          id: 235,
                        },
                      ],
                    },
                    {
                      label: "母线设备GIS",
                      id: 236,
                      children: [
                        {
                          label: "110kV母线设备GIS模型（户内）",
                          towerType: "MXSBGIS_220kV",
                          id: 237,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "220kV配电装置区域",
                  id: 238,
                  children: [
                    {
                      label: "220kV避雷器",
                      id: 239,
                      children: [
                        {
                          label: "220kV避雷器",
                          towerType: "BLQ_220kV",
                          id: 240,
                        },
                      ],
                    },
                    {
                      label: "出线GIS",
                      id: 241,
                      children: [
                        {
                          label: "HE-220kV户外出线GIS",
                          towerType: "HE-HCXGIS_220kV",
                          id: 242,
                        },
                      ],
                    },
                    {
                      label: "分段GIS",
                      children: [],
                      id: 243,
                    },
                    {
                      label: "进线GIS",
                      id: 244,
                      children: [
                        {
                          label: "HE-220kV户外主变进线GIS",
                          towerType: "HE-HWZBJXGIS_220kV",
                          id: 245,
                        },
                      ],
                    },
                    {
                      label: "母联GIS",
                      id: 246,
                      children: [
                        {
                          label: "HE-220kV母联GIS户外",
                          towerType: "HE-MLGIS_220kV",
                          id: 247,
                        },
                      ],
                    },
                    {
                      label: "母线设备GIS",
                      id: 248,
                      children: [
                        {
                          label: "HE-220kV母线设备GIS户外1",
                          towerType: "HE-HWMXSBGIS_220kV_1",
                          id: 249,
                        },
                        {
                          label: "HE-220kV母线设备GIS户外2",
                          towerType: "HE-HWMXSBGIS_220kV_2",
                          id: 250,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "架空线路",
                  id: 251,
                  children: [
                    {
                      label: "铁塔",
                      id: 252,
                      children: [
                        {
                          label: "2B5-J3-18",
                          towerType: "220kV_1",
                          id: 253,
                        },
                        {
                          label: "2B5-J1-24",
                          towerType: "220kV_2",
                          id: 254,
                        },
                        {
                          label: "2B5-J2-24",
                          towerType: "220kV_3",
                          id: 255,
                        },
                        {
                          label: "2B5-ZM2-27",
                          towerType: "220kV_4",
                          id: 256,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "其他",
                  id: 257,
                  children: [
                    {
                      label: "二次屏柜",
                      id: 258,
                      children: [
                        {
                          label: "二次屏柜",
                          towerType: "ErCiPinGui_220kV",
                          id: 259,
                        },
                      ],
                    },
                    {
                      label: "蓄电池组",
                      id: 260,
                      children: [
                        {
                          label: "蓄电池组1",
                          towerType: "XDCZ_220kV_1",
                          id: 261,
                        },
                        {
                          label: "蓄电池组2",
                          towerType: "XDCZ_220kV_2",
                          id: 262,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "无功补偿区域",
                  id: 263,
                  children: [
                    {
                      label: "电抗器",
                      id: 264,
                      children: [
                        {
                          label: "10kV低压并联电抗器",
                          towerType: "DYBLDKQ_220kV",
                          id: 265,
                        },
                      ],
                    },
                    {
                      label: "电容器（组）",
                      id: 266,
                      children: [
                        {
                          label: "10kV框架式电容器组",
                          towerType: "KJSDRQZ_220kV",
                          id: 267,
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "主变区域",
                  id: 268,
                  children: [
                    {
                      label: "10kV避雷器",
                      id: 269,
                      children: [
                        {
                          label: "10kV避雷器（无支架）",
                          towerType: "BLQ_10kV",
                          id: 270,
                        },
                      ],
                    },
                    {
                      label: "110kV电缆终端",
                      children: [],
                      id: 271,
                    },
                    {
                      label: "110kV中心点成套装置",
                      id: 272,
                      children: [
                        {
                          label: "110kV中性点成套装置",
                          towerType: "ZXDCTZZ_110kV_2",
                          id: 273,
                        },
                      ],
                    },
                    {
                      label: "220kV中心点成套装置",
                      id: 274,
                      children: [
                        {
                          label: "220kV中性点隔离开关",
                          towerType: "ZXDGLKG_220kV",
                          id: 275,
                        },
                      ],
                    },
                    {
                      label: "220kV电缆终端",
                      id: 276,
                      children: [
                        {
                          label: "220kV电缆终端",
                          towerType: "DLZD_220kV_2",
                          id: 277,
                        },
                      ],
                    },
                    {
                      label: "变压器",
                      id: 278,
                      children: [
                        {
                          label: "220kV变压器1",
                          towerType: "BYQ_220kV_1",
                          id: 279,
                        },
                        {
                          label: "220kV变压器2",
                          towerType: "BYQ_220kV_2",
                          id: 280,
                        },
                      ],
                    },
                    {
                      label: "端子箱",
                      id: 281,
                      children: [
                        {
                          label: "ZXW-2-3型端子箱",
                          towerType: "ZXW_2_3XDZX_220kV",
                          id: 282,
                        },
                      ],
                    },
                    {
                      label: "检修箱",
                      id: 283,
                      children: [
                        {
                          label: "检修屏柜",
                          towerType: "JXPG_220kV",
                          id: 284,
                        },
                        {
                          label: "SZ-P4户外柜",
                          towerType: "SZ-P4HWG",
                          id: 285,
                        },
                      ],
                    },
                    {
                      label: "主变油色谱箱",
                      id: 286,
                      children: [
                        {
                          label: "油色谱分析柜",
                          towerType: "YSPFXG_220kV",
                          id: 287,
                        },
                      ],
                    },
                    {
                      label: "主变智能控制柜",
                      id: 288,
                      children: [
                        {
                          label: "主变智能控制柜",
                          towerType: "ZBZNKZG_220kV",
                          id: 289,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "变压器",
              id: 290,
              children: [
                {
                  label: "变压器_6",
                  towerType: "BYQ_06",
                  id: 291,
                },
                {
                  label: "变压器_7",
                  towerType: "BYQ_07",
                  id: 292,
                },
                {
                  label: "变压器_8",
                  towerType: "BYQ_08",
                  id: 293,
                },
                {
                  label: "变压器_1-2",
                  towerType: "BYQ_1-2",
                  id: 294,
                },
                {
                  label: "变压器_11-5",
                  towerType: "BYQ_11-5",
                  id: 295,
                },
                {
                  label: "变压器_2-7",
                  towerType: "BYQ_2-7",
                  id: 296,
                },
                {
                  label: "变压器_27-1",
                  towerType: "BYQ_27-1",
                  id: 297,
                },
                {
                  label: "变压器_3-8",
                  towerType: "BYQ_3-8",
                  id: 298,
                },
                {
                  label: "变压器_31-10",
                  towerType: "BYQ_31-10",
                  id: 299,
                },
                {
                  label: "变压器_32-10",
                  towerType: "BYQ_32-10",
                  id: 300,
                },
                {
                  label: "变压器_39-11",
                  towerType: "BYQ_39-11",
                  id: 301,
                },
                {
                  label: "变压器_4-9",
                  towerType: "BYQ_4-9",
                  id: 302,
                },
                {
                  label: "变压器_40-11",
                  towerType: "BYQ_40-11",
                  id: 303,
                },
                {
                  label: "变压器_46-3",
                  towerType: "BYQ_46-3",
                  id: 304,
                },
                {
                  label: "变压器_47-3",
                  towerType: "BYQ_47-3",
                  id: 305,
                },
                {
                  label: "变压器_55-4",
                  towerType: "BYQ_55-4",
                  id: 306,
                },
                {
                  label: "变压器_57-6",
                  towerType: "BYQ_57-6",
                  id: 307,
                },
                {
                  label: "变压器_58-6",
                  towerType: "BYQ_58-6",
                  id: 308,
                },
                {
                  label: "王家寨变压器_01",
                  towerType: "WJZBYQ_01",
                  id: 309,
                },
                {
                  label: "王家寨变压器_02",
                  towerType: "WJZBYQ_02",
                  id: 310,
                },
                {
                  label: "王家寨变压器_03",
                  towerType: "WJZBYQ_03",
                  id: 311,
                },
                {
                  label: "王家寨变压器_04",
                  towerType: "WJZBYQ_04",
                  id: 312,
                },
                {
                  label: "王家寨变压器_05",
                  towerType: "WJZBYQ_05",
                  id: 313,
                },
                {
                  label: "王家寨变压器_06",
                  towerType: "WJZBYQ_06",
                  id: 314,
                },
                {
                  label: "王家寨变压器_07",
                  towerType: "WJZBYQ_07",
                  id: 315,
                },
                {
                  label: "王家寨变压器_08",
                  towerType: "WJZBYQ_08",
                  id: 316,
                },
                {
                  label: "王家寨变压器_09",
                  towerType: "WJZBYQ_09",
                  id: 317,
                },
                {
                  label: "王家寨变压器_10",
                  towerType: "WJZBYQ_10",
                  id: 318,
                },
                {
                  label: "王家寨变压器_11",
                  towerType: "WJZBYQ_11",
                  id: 319,
                },
                {
                  label: "王家寨变压器_12",
                  towerType: "WJZBYQ_12",
                  id: 320,
                },
                {
                  label: "王家寨变压器_13",
                  towerType: "WJZBYQ_13",
                  id: 321,
                },
                {
                  label: "王家寨变压器_14",
                  towerType: "WJZBYQ_14",
                  id: 322,
                },
                {
                  label: "王家寨变压器_15",
                  towerType: "WJZBYQ_15",
                  id: 323,
                },
                {
                  label: "王家寨变压器_16",
                  towerType: "WJZBYQ_16",
                  id: 324,
                },
                {
                  label: "王家寨变压器_17",
                  towerType: "WJZBYQ_17",
                  id: 325,
                },
                {
                  label: "王家寨变压器_18",
                  towerType: "WJZBYQ_18",
                  id: 326,
                },
                {
                  label: "王家寨变压器_19",
                  towerType: "WJZBYQ_19",
                  id: 327,
                },
                {
                  label: "王家寨变压器_20",
                  towerType: "WJZBYQ_20",
                  id: 328,
                },
                {
                  label: "王家寨变压器_21",
                  towerType: "WJZBYQ_21",
                  id: 329,
                },
                {
                  label: "王家寨变压器_22",
                  towerType: "WJZBYQ_22",
                  id: 330,
                },
                {
                  label: "王家寨变压器_23",
                  towerType: "WJZBYQ_23",
                  id: 331,
                },
                {
                  label: "王家寨变压器_24",
                  towerType: "WJZBYQ_24",
                  id: 332,
                },
                {
                  label: "王家寨变压器_25",
                  towerType: "WJZBYQ_25",
                  id: 333,
                },
                {
                  label: "王家寨变压器_26",
                  towerType: "WJZBYQ_26",
                  id: 334,
                },
                {
                  label: "王家寨变压器_27",
                  towerType: "WJZBYQ_27",
                  id: 335,
                },
                {
                  label: "王家寨变压器_28",
                  towerType: "WJZBYQ_28",
                  id: 336,
                },
                {
                  label: "王家寨变压器_29",
                  towerType: "WJZBYQ_29",
                  id: 337,
                },
                {
                  label: "王家寨变压器_30",
                  towerType: "WJZBYQ_30",
                  id: 338,
                },
                {
                  label: "王家寨变压器_31",
                  towerType: "WJZBYQ_31",
                  id: 339,
                },
                {
                  label: "王家寨变压器_32",
                  towerType: "WJZBYQ_32",
                  id: 340,
                },
                {
                  label: "王家寨变压器_33",
                  towerType: "WJZBYQ_33",
                  id: 341,
                },
                {
                  label: "王家寨变压器_34",
                  towerType: "WJZBYQ_34",
                  id: 342,
                },
                {
                  label: "王家寨变压器_35",
                  towerType: "WJZBYQ_35",
                  id: 343,
                },
                {
                  label: "王家寨变压器_36",
                  towerType: "WJZBYQ_36",
                  id: 344,
                },
                {
                  label: "王家寨变压器_37",
                  towerType: "WJZBYQ_37",
                  id: 345,
                },
                {
                  label: "王家寨变压器_38",
                  towerType: "WJZBYQ_38",
                  id: 346,
                },
                {
                  label: "王家寨变压器_39",
                  towerType: "WJZBYQ_39",
                  id: 347,
                },
                {
                  label: "王家寨变压器_40",
                  towerType: "WJZBYQ_40",
                  id: 348,
                },
                {
                  label: "王家寨变压器_41",
                  towerType: "WJZBYQ_41",
                  id: 349,
                },
                {
                  label: "王家寨变压器_42",
                  towerType: "WJZBYQ_42",
                  id: 350,
                },
                {
                  label: "王家寨变压器_43",
                  towerType: "WJZBYQ_43",
                  id: 351,
                },
                {
                  label: "王家寨变压器_44",
                  towerType: "WJZBYQ_44",
                  id: 352,
                },
                {
                  label: "王家寨变压器_45",
                  towerType: "WJZBYQ_45",
                  id: 353,
                },
                {
                  label: "王家寨变压器_46",
                  towerType: "WJZBYQ_46",
                  id: 354,
                },
                {
                  label: "王家寨变压器_47",
                  towerType: "WJZBYQ_47",
                  id: 355,
                },
                {
                  label: "王家寨变压器_48",
                  towerType: "WJZBYQ_48",
                  id: 356,
                },
                {
                  label: "王家寨变压器_49",
                  towerType: "WJZBYQ_49",
                  id: 357,
                },
                {
                  label: "王家寨变压器_50",
                  towerType: "WJZBYQ_50",
                  id: 358,
                },
                {
                  label: "王家寨变压器_51",
                  towerType: "WJZBYQ_51",
                  id: 359,
                },
                {
                  label: "王家寨变压器_52",
                  towerType: "WJZBYQ_52",
                  id: 360,
                },
                {
                  label: "王家寨变压器_53",
                  towerType: "WJZBYQ_53",
                  id: 361,
                },
                {
                  label: "王家寨变压器_54",
                  towerType: "WJZBYQ_54",
                  id: 362,
                },
                {
                  label: "王家寨变压器_55",
                  towerType: "WJZBYQ_55",
                  id: 363,
                },
                {
                  label: "王家寨变压器_56",
                  towerType: "WJZBYQ_56",
                  id: 364,
                },
                {
                  label: "王家寨变压器_57",
                  towerType: "WJZBYQ_57",
                  id: 365,
                },
                {
                  label: "王家寨变压器_58",
                  towerType: "WJZBYQ_58",
                  id: 366,
                },
              ],
            },
            {
              label: "储能箱",
              id: 367,
              children: [
                {
                  label: "1000kw学校储能箱",
                  towerType: "1000kw学校储能箱",
                  id: 368,
                },
                {
                  label: "500kw学校储能箱",
                  towerType: "500kw学校储能箱",
                  id: 369,
                },
              ],
            },
            {
              label: "灯杆",
              id: 370,
              children: [
                {
                  label: "6m智能灯杆",
                  towerType: "6m智能灯杆",
                  id: 371,
                },
              ],
            },
          ],
        },
      ],
      newID: 371,
      defaultProps: {
        children: "children",
        label: "label",
      },
      // 用于存放选中的树结构点
      selectData: {},
      selectNode: {},
      tree_key: 0,

      defaultExpand: [],
    };
  },
  watch: {
    filterText(val) {
      this.$refs.treeForm_mx.filter(val);
    },
  },
  mounted() {
    this.getThree();
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 查询按钮
    chaxunClick() {
      this.currentIndex = 0;

      this.$nextTick(() => {
        this.$refs.inputsss.focus();
      });
    },
    // 失去焦点
    shiquIndex() {
      this.currentIndex = -1;
      this.filterText = "";
    },
    // 关闭编辑弹框
    closeTK() {
      this.showMB = false;
    },
    // 关闭新增弹框
    closeTK2() {
      this.showMB2 = false;
    },
    addClick() {
      if (this.currentIndex != 1) {
        this.currentIndex = 1;
      } else {
        if (this.selectData.id != undefined) {
          // 弹出弹框
          this.showMB2 = true;
        } else {
          this.$notify({
            title: "新增节点",
            message: "请选中一条树节点",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    addClicks() {
      if (this.addValue.length < 1) {
        this.$notify({
          title: "模型名称",
          message: "请输入模型名称",
          offset: 60,
          type: "error",
        });
      } else {
        let data = this.selectData;
        let id = this.newID;
        let value = this.addValue;
        const newChild = {
          id: id++,
          label: value,
          children: [],
        };
        if (!data.children) {
          // this.$set(this.datas, "children", []);
        }
        data.children.push(newChild);
        this.newID = id;
        this.showMB2 = false;
        this.addValue = "";
        this.baocun();
      }
    },
    unAddClicks() {
      this.showMB2 = false;
    },
    updateClick() {
      if (this.currentIndex != 2) {
        this.currentIndex = 2;
      } else {
        let data = this.selectData;
        this.updaValue = data.label;
        this.showMB = true;
      }
    },
    updateClicks() {
      let data = this.selectData;
      let node = this.selectNode;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      let value = this.updaValue;
      children[index].label = value;
      this.showMB = false;
      this.baocun();
    },
    downClick() {
      if (this.currentIndex != 3) {
        this.currentIndex = 3;
      } else {
        let data = this.selectData;
        let node = this.selectNode;
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex((d) => d.id === data.id);
        if (index < children.length - 1) {
          const tempChildrenNodex1 = children[index + 1];
          const tempChildrenNodex2 = children[index];

          this.$set(children, index + 1, tempChildrenNodex2);
          this.$set(children, index, tempChildrenNodex1);
          this.$set(this.datas);
          this.defaultExpand[0] = data.id;
          this.tree_key++;
          this.baocun();
          // let that = this;
          // setTimeout(() => {
          //   that.baocun();
          //   setTimeout(() => {
          //     that.getThree();
          //     setTimeout(() => {
          //       that.defaultExpand[0] = data.id;
          //     }, 100);
          //   }, 100);
          // }, 400);
        } else {
          this.$notify({
            title: "下移节点",
            message: "已处于最底部",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    upsClick() {
      if (this.currentIndex != 4) {
        this.currentIndex = 4;
      } else {
        let data = this.selectData;
        let node = this.selectNode;
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex((d) => d.id === data.id);
        if (index > 0) {
          const tempChildrenNodex1 = children[index - 1];
          const tempChildrenNodex2 = children[index];
          this.$set(children, index - 1, tempChildrenNodex2);
          this.$set(children, index, tempChildrenNodex1);
          this.defaultExpand[0] = data.id;
          this.tree_key++;
          this.baocun();
          // let that = this;
          // setTimeout(() => {
          //   that.baocun();
          //   setTimeout(() => {
          //     that.getThree();
          //     setTimeout(() => {
          //       that.defaultExpand[0] = data.id;
          //     }, 100);
          //   }, 100);
          // }, 400);
        } else {
          this.$notify({
            title: "上移节点",
            message: "已处于最顶部",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    deleteClick() {
      if (this.currentIndex != 5) {
        this.currentIndex = 5;
      } else {
        if (this.selectData.id != undefined) {
          if (this.selectData.towerType != undefined || null || "") {
            this.showMB4 = true;
          } else if (this.selectData.children.length > 0) {
            this.showMB5 = true;
          } else {
            this.showMB3 = true;
          }
        } else {
          this.$notify({
            title: "删除节点",
            message: "请选中一条树节点",
            offset: 60,
            type: "error",
          });
        }
      }
    },
    deleteClicks() {
      let data = this.selectData;
      let node = this.selectNode;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      this.showMB3 = false;
      this.selectData = {};
      this.selectNode = {};
      this.baocun();
    },
    unDeleteClicks() {
      this.showMB3 = false;
    },
    deleteClicks2() {
      this.showMB4 = false;
    },
    deleteClicks3() {
      this.showMB5 = false;
    },

    // 复选框被选中时
    selectTree(node, list) {
      if (list.checkedKeys.length == 2) {
        this.$refs.treeForm_mx.setCheckedKeys([node.id]);
      }
      const node2 = this.$refs.treeForm_mx.getNode(node.id);

      if (this.selectData.id != node.id) {
        this.selectData = node;
        this.selectNode = node2;
      } else {
        this.selectData = {};
        this.selectNode = {};
      }
      this.setNode(node2);
    },
    setNode(node) {
      if (node.checked) {
        //如果当前是选中checkbox,则递归设置父节点和父父节点++选中
        // this.setParentNode(node);
      } else {
        //当前是取消选中,将所有子节点都取消选中
        this.setChildenNode(node);
      }
    },
    setParentNode(node) {
      if (node.parent) {
        for (const key in node) {
          if (key === "parent") {
            node[key].checked = true;
            this.setParentNode(node[key]);
          }
        }
      }
    },
    setChildenNode(node) {
      let len = node.childNodes.length;
      for (let i = 0; i < len; i++) {
        node.childNodes[i].checked = false;
        this.setChildenNode(node.childNodes[i]);
      }
    },

    handleNodeClick(e) {
      this.$emit("chongzhi");
      if (e.ShowKSH !== undefined) {
        this.$emit("showKSH", true);
      } else {
        this.$emit("showKSH", false);
      }
      if (e.towerType !== undefined) {
        let obj = e.towerType;
        let data = {
          functionName: "ModelManage",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModelID",
              value: obj,
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        this.$emit("showRight", true);
        let that = this;
        setTimeout(() => {
          // that.$bus.$emit("getTables", e.towerType);
          that.$bus.$emit("getTZlist", e);
        }, 50);
      } else {
        let data = {
          functionName: "ModelManage",
          backFunctionName: "",
          functionParameters: [
            {
              key: "ModelID",
              value: "",
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        this.$emit("showRight", false);
      }
    },
    // 获取树状图
    getThree() {
      let data = {
        functionName: "InitPage",
        backFunctionName: "getThrees",
        functionParameters: [
          {
            key: "PageID",
            value: "ModelManagePage",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getThrees = this.getThrees;
    },
    // 获取树结构内容
    getThrees(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      this.datas = data2.obj;
      this.newID = data2.newID;
    },
    // 将本地树结构发送到ue那边去
    baocun() {
      let props = {
        obj: this.datas,
        newID: this.newID,
      };
      let v = { ModifyType: "Save", DataValue: JSON.stringify(props) };
      let data = {
        functionName: "ModifyModelManagement",
        backFunctionName: "BackModifyTableData",
        functionParameters: [
          {
            key: "ModifyModelManagement",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackModifyTableData = this.BackModifyTableData;
    },
    BackModifyTableData() {},
  },
};
</script>
<style scoped>
.blockItem >>> .el-tree {
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  font-family: SourceHanSansSC-Medium;
}

.blockItem >>> .el-tree-node__content:hover,
.blockItem >>> .el-upload-list__item:hover {
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
}
.blockItem >>> .el-tree-node:focus > .el-tree-node__content {
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
}
.blockItem >>> .el-tree-node__content {
  height: 40px;
  background: url("img/select_bg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 2px !important;
}
.blockItem >>> .el-tree-node__children > .el-tree-node {
  font-size: 14px;
  color: #fff;
}

/* .el-tree-node__children > .is-current {
  font-weight: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #1effff;
} */

.blockItem >>> .is-expanded .el-tree-node__content {
  /* height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%; */
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  /* color: #ffffff; */
}
/* .is-current > .el-tree-node__content {
  height: 40px;
  background: url("img/select.png") no-repeat;
  background-size: 100% 100%;
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #1effff;
} */
.blockItem >>> .el-checkbox__inner {
  background: url("img/wxz.png") !important;
  background-size: 100% 100% !important;

  border: none !important;
  border-radius: none !important;
  width: 26px;
  height: 26px;
}
.blockItem >>> .el-checkbox__input.is-checked .el-checkbox__inner,
.blockItem >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: url("img/xz.png") !important;
  background-size: 100% 100% !important;
  width: 26px;
  height: 26px;
}
.blockItem >>> .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  /* background: url("img/wxzs.png") !important; */
  /* background-size: 100% 100% !important; */
  width: 26px;
  height: 26px;
}
.blockItem
  >>> .el-checkbox__input.is-indeterminate
  .el-checkbox__inner::before {
  display: none;
}
.blockItem >>> .el-checkbox__inner::after {
  display: none !important;
}
</style>
<style scoped>
.mxLeft {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  left: 10px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.dengji {
  z-index: 100;
}
</style>
<style scoped>
.w_title {
  width: 371px;
  height: 43px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 11px;
}
.w_title > span {
  margin-left: 38.33px;
  font-family: YouSheBiaoTiHei;
  font-size: 25px;
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
.block {
  width: 100%;
  height: 903px;
  display: flex;

  position: relative;
  margin-top: 40px;
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
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.t_input {
  position: absolute;
  left: 8px;
  top: 50px;
  width: 370px;
  height: 32px;
  display: flex;
  z-index: 999;
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
.t_block_cha {
  width: 126px !important;
  position: relative;
  background: url("img/tbg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_block_cha > img {
  position: absolute;
  top: 8px;
  right: 8px;
}
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

.blockItem {
  width: 360px;
  height: 840px;
  border-radius: 2px;
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
  left: 8px;
  top: 55px;
}
.blockItem::-webkit-scrollbar {
  display: none;
}
</style>
<style>
.el-tree-node__content > label.el-checkbox {
  position: absolute !important;
  right: 8px !important;
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
.imgs {
  margin-top: -20px;
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
