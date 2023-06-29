<template>
    <div class="loading">
        <div class="spans"></div>
        <div class="icon"></div>
    </div>
</template>

<script>
export default {
    name: "loading",
};
</script>
<style>
@keyframes myRotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
<style scoped>
.loading {
    width: 100%;
    height: 100%;
    background: url("img/bg.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.spans {
    position: absolute;
    left: 880px;
    top: 628px;
    width: 180px;
    height: 60px;
    background: url("img/span.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.icon {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 860px;
    top: 392px;
    background: url("img/icon.png") no-repeat !important;
    background-size: 100% 100% !important;
    animation: myRotate 3s infinite;
}
</style>