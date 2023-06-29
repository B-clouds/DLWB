<template>
    <div class="jcxxs">
        <div class="tou"></div>
        <div class="t_titles">
            <span>设备类型</span>
        </div>
        <div class="t_input">
            <div class="inputs">
                <el-select
                    v-model="mx_value"
                    @change="shaixuan"
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
</template>

<script>
export default {
    name: "",
    data() {
        return {
            // -------------------------------模型状态----------------------------------
            mx: [
                {
                    value: "储能箱",
                    label: "储能箱",
                },
                {
                    value: "光伏板",
                    label: "光伏板",
                },
                {
                    value: "",
                    label: "/",
                },
            ],
            mx_value: "",
            mx_show: "",
        };
    },
    methods: {
        mxClick(e) {
            this.mx_show = e;
        },
        shaixuan(e) {
            let showType;
            if (e == "" || undefined || null) {
                showType = -1;
            } else if (e == "储能箱") {
                showType = 0;
            } else if (e == "光伏板") {
                showType = 1;
            }
            this.$emit("showType", showType);
        },
    },
};
</script>

<style scoped>
.jcxxs {
    width: 346px;
    height: 102px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: fixed;
    left: 11px;
    top: 125px;
    z-index: 8888;
}
.tou {
    width: 100%;
    height: 4px;
    opacity: 1;
    background: #237dde;
}
.t_titles {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
}
.t_titles > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 22px;
}

.t_input {
    width: 303px;
    height: 34px;
    margin-left: 22px;
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
}
.el-scrollbar__wrap {
    margin: 0 !important;
}
.el-scrollbar__wrap::-webkit-scrollbar {
    display: none; /*隐藏滚动条*/
}
</style>
<style scoped>
.tou {
    width: 100%;
    height: 4px;
    opacity: 1;
    background: #237dde;
}
.t_titles {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
}
.t_titles > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 22px;
}
.t_input {
    width: 303px;
    height: 34px;
    margin-left: 22px;
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
</style>
<style scoped>
.kong {
    width: 100%;
    height: 54px;
}
.jbBlock {
    width: 100%;
    height: 34px;
    display: flex;
    margin-bottom: 18px;
    position: relative;
}
.jbBtn2 {
    position: absolute;
    top: 1px;
    right: 114px !important;
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
    width: 97px;
    height: 100%;
    display: flex;
    align-items: center;
}
.jbBlock > .jbLeft > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: #ffffff;
    margin-left: 21px;
}
.jbBlock > .jbRight {
    width: 228px;
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
    width: 228px;
    height: 100%;
    background: url("img/jbInput2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
</style>
<style scoped>
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
