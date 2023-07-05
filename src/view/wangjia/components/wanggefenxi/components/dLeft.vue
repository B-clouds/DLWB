<template>
  <div class="dLeft">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">分布排列</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>行数</span>
        </div>
        <div class="jbRight2">
          <input v-model="hangshu" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>列数</span>
        </div>
        <div class="jbRight2">
          <input v-model="lieshu" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="d_btn">
        <span>创建</span>
      </div>
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">编号定位</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>单元编号</span>
        </div>
        <div class="jbRight2">
          <input v-model="danyuanbianhao" placeholder="最大输入不超过10个字" />
        </div>
      </div>

      <div class="d_btn">
        <span>定位</span>
      </div>
    </div>
    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">基本情况</span>
      </div>

      <div class="jbBlock">
        <div class="jbLeft">
          <span>单元编号</span>
        </div>
        <div class="jbRight">
          <span>001003</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>GIS坐标</span>
        </div>
        <div class="jbRight">
          <span>中心点的经纬度信息</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>单元状态</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
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
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>单元备注</span>
        </div>
        <div class="jbRight2">
          <input v-model="danyuanbianhao" placeholder="最大输入不超过10个字" />
        </div>
      </div>

      <div class="d_btn">
        <span>保存</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dLeft",
  data() {
    return {
      hangshu: "",
      lieshu: "",
      danyuanbianhao: "",
      dybh: "",
      gis: "",

      hlsl: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "",
          label: "默认有效",
        },
      ],
      hlsl_value: "",
      hlsl_show: "",
    };
  },
};
</script>

<style scoped>
.dLeft {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 305px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
  position: relative;
}
.jr_block2 {
  height: 287px !important;
}
.jr_block3 {
  height: 343px !important;
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
.d_btn {
  width: 105px;
  height: 30px;
  position: absolute;
  right: 19px;
  bottom: 20px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.d_btn > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
.d_btn:hover {
  background: url("img/d_btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.d_btn:hover > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
</style>

<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 18px;
  position: relative;
}
.jbBlock > .jbBtn {
  width: 81px;
  height: 33px;
  position: absolute;
  top: 1px;
  right: 22px;
  background: url("img/btns.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.jbBlock > .jbBtn > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.jbBlock > .jbLeft {
  width: 76px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
  margin-right: 17px;
}
.jbBlock > .jbRight {
  width: 284px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
}
.jbBlock > .jbRight2 {
  width: 284px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
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
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
}
</style>
