<template>
  <div class="sjmxTable2">
    <div class="blocks">
      <div class="b_item" v-for="(item, index) in trList" :key="index">
        <div
          class="b_item_block"
          v-for="(item2, indey) in item"
          :class="{
            b_item_block2: indey == 0,
            lastBorder: indey == item.length - 1,
          }"
        >
          <span>{{ item2 }}</span>
        </div>
      </div>

      <!-- 最上方横条 -->
      <div
        class="tableTop1"
        v-show="trList.length > 0"
        :style="{ width: kuandu }"
      ></div>
      <!-- 第二条横条 -->
      <div
        class="tableTop2"
        v-show="trList.length >= 1"
        :style="{ width: kuandu }"
      ></div>
      <!-- 第三条横条 -->
      <div
        class="tableTop3"
        v-show="trList.length >= 2"
        :style="{ width: kuandu }"
      ></div>
      <!-- 第四条横条 -->
      <div
        class="tableTop4"
        v-show="trList.length >= 3"
        :style="{ width: kuandu }"
      ></div>
      <!-- 第五条横条 -->
      <div
        class="tableTop5"
        v-show="trList.length >= 4"
        :style="{ width: kuandu }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sjmxTable2",
  data() {
    return {
      dataNameList: [],
      dataNumberList: [],
      trList: [
        [
          "日期",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
          "01.01",
        ],
        [
          "最大值",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
        ],
        [
          "最小值",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
        ],
        [
          "平均值",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
          "78Var",
        ],
      ],
    };
  },
  computed: {
    kuandu() {
      return (
        this.trList[0].length * 110 - (52 - (this.trList[0].length - 2)) + "px"
      );
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sjmxTable2 {
  width: 100%;
  height: 100%;
  position: relative;
}
.blocks {
  width: 1833px;
  height: 169px;
  position: absolute;
  left: 22px;
  bottom: 24px;
}
.tableTop1 {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  top: -1px;
}
.tableTop2 {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  top: 41px;
}
.tableTop3 {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  top: 83px;
}
.tableTop4 {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  top: 127px;
}
.tableTop5 {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  bottom: 1px;
}
.b_item {
  width: 100%;
  height: 42px;
  display: flex;
}
.b_item_block {
  width: 110px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.lastBorder {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.b_item_block > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
}
.b_item_block2 {
  width: 69px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(55, 138, 255, 0.12);
}
.b_item_block2 > span {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
}
</style>
