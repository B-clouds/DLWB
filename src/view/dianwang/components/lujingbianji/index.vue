<template>
  <div class="qjjc">
    <transition name="transitionLeft">
      <qjLeft @bianji="bianji" v-show="show && showBJ"></qjLeft>
    </transition>
    <transition name="transitionLeft">
      <qjLeft2 :name="name" @fanhui="fanhui" v-show="show && !showBJ"></qjLeft2>
    </transition>
  </div>
</template>

<script>
import qjLeft from "./components/qjLeft.vue";
import qjLeft2 from "./components/qjLeft2.vue";
export default {
  name: "quanjingjiance",
  components: {
    qjLeft,
    qjLeft2,
  },
  data() {
    return {
      show: false,
      showBJ: true,
      name: "",
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.showBJ = true;
    let v = {
      Option: "Init",
      Value: "True",
    };
    let data = {
      functionName: "PathManagment",
      functionParameters: [
        {
          key: "PathManagment",
          value: JSON.stringify(v),
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data));
  },
  methods: {
    bianji(e) {
      console.log(e);
      this.showBJ = false;
      this.name = e;
    },
    fanhui() {
      this.showBJ = true;
    },
  },
};
</script>

<style scoped>
.qjjc {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
