<template>
    <div class="zdyRight">
        <div class="jcxx2">
            <div class="j_titles">
                <span>间隔空间信息</span>
            </div>
            <div class="kong"></div>
            <div class="j_item">
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
            <div class="j_item">
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
        </div>
    </div>
</template>

<script>
export default {
    name: "zdyRight",
    data() {
        return {
            longitude: "",
            dimension: "",
            angle: "",
            altitude: "",
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("getZFJGS", (e) => {
            console.log(e, "-=-----------------");
            let data = JSON.parse(e);
            that.longitude = data.longitude;
            that.dimension = data.latitude;
            that.angle = data.yaw;
            that.altitude = data.altitude;
        });
    },
};
</script>

<style scoped>
.zdyRight {
    width: 379px;
    height: 480px;
    position: fixed;
    right: 11px;
    top: 125px;
}

.jcxx {
    width: 100%;
    height: 238px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.jcxx2 {
    width: 100%;
    height: 197px;
    background: url("img/jbg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
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

.kong {
    width: 100%;
    height: 40px;
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
}
</style>
