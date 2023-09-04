<template>
  <div class="yjfhLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="returnMain"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yjfhLeft",
  components: {
    
  },
  data() {
    return{
      origData:{},
      baseData:{},
    }
  },
  mounted() {
    this.watchId()
  },
  beforeDestroy() {
    //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    this.$bus.$off('sendId');
  },
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        that.baseData={}
        // alert(e)
        that.getBaseData()
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastUserStatus", { //改路径对参数就行
            params: {
              areaId:this.origData.id,
            },
          }).then(res=>{
            this.baseData=res.data.data[0]
          })
    },
    returnMain() {
      this.$bus.$emit("returnMain", true);
    },
  },
};
</script>

<style scoped>
.yjfhLeft  {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}
</style>
<style scoped>
.gl_top {
  width: 351px;
  height: 50px;
  display: flex;
  align-items: center;
  background: url("img/gl_bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.gl_top > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 37px;
  margin-right: 5px;
}
.gl_top > .names {
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.gl_top > .names > span {
  font-family: Source Han Sans CN;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.gl_top > .fanhui {
  width: 31px;
  height: 31px;
  background: url("img/fanhui.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
</style>