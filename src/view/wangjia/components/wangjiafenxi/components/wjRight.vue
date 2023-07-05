<template>
  <div class="wjRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">负载率分析</span>
      </div>

      <div class="wr_one">
        <wr_one />
      </div>
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">线损率分析</span>
      </div>
      <div class="wr_two">
        <wr_two />
      </div>
    </div>

    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">联络率分析</span>
      </div>
      <div class="jr_xiala">
        <el-select
          v-model="hlsl_value"
          @visible-change="hlslClick"
          placeholder=""
        >
          <el-option
            v-for="item in hlsl"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <img v-show="!hlsl_show" src="./img/xia.png" />
        <img v-show="hlsl_show" src="./img/shang.png" />
      </div>
      <div class="wr_three">
        <wr_three />
      </div>
    </div>

    <div class="jr_block jr_block4">
      <div class="j_titles">
        <span class="span1">网架结构</span>
      </div>
      <div class="jr_xiala">
        <el-select
          v-model="hlsl_value"
          @visible-change="hlslClick"
          placeholder=""
        >
          <el-option
            v-for="item in hlsl"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <img v-show="!hlsl_show" src="./img/xia.png" />
        <img v-show="hlsl_show" src="./img/shang.png" />
      </div>
      <div class="wr_four">
        <wr_four />
      </div>
    </div>
  </div>
</template>

<script>
import wr_one from "./echarts/wr_one.vue";
import wr_two from "./echarts/wr_two.vue";
import wr_three from "./echarts/wr_three.vue";
import wr_four from "./echarts/wr_four.vue";
export default {
  components: {
    wr_one,
    wr_two,
    wr_three,
    wr_four,
  },
  name: "wjRight",
  data() {
    return {
      hlsl: [
        {
          value: "220kv",
          label: "220kv",
        },
        {
          value: "110kv",
          label: "110kv",
        },
        {
          value: "35kv",
          label: "35kv",
        },
        {
          value: "10kv",
          label: "10kv",
        },
        {
          value: "0.4kv",
          label: "0.4kv",
        },
      ],
      hlsl_value: "",
      hlsl_show: "",
    };
  },
  methods: {
    hlslClick(e) {
      this.hlsl_show = e;
    },
  },
};
</script>

<style scoped>
.wjRight {
  width: 379px;
  height: 941px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 260px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
}
.jr_block2 {
  height: 201px !important;
}
.jr_block3 {
  height: 236px !important;
}
.jr_block4 {
  height: 184px !important;
}

.jr_xiala {
  width: 177px;
  height: 31px;
  position: absolute;
  top: 5px;
  right: 13px;
  background: url("img/xiala.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_xiala > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
}

.j_titles {
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
</style>
<style scoped>
.wr_one {
  width: 100%;
  height: 220px;
}
.wr_two {
  width: 100%;
  height: 161px;
}
.wr_three {
  width: 100%;
  height: 196px;
}
.wr_four {
  width: 100%;
  height: 144px;
}
</style>
