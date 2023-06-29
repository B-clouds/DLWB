<template>
    <div class="login">
        <div class="account">
            <input type="text" v-model="account" class="inputs" />
        </div>
        <div class="password">
            <input
                class="inputs"
                @keyup.enter="loginClick2"
                v-model="password"
                type="password"
            />
        </div>
        <div class="remember" @click="isShowRb">
            <img v-show="!isRb" src="./img/r1.png" />
            <img v-show="isRb" src="./img/r2.png" />
            <span>记住密码</span>
        </div>

        <div class="btn" @click="loginClick" />
        <!-- <span @click="exit" class="tuichu">退出</span> -->
        <div class="zhezhao2" v-show="showZZ">
            <div class="showMB">
                <div class="mb_titles">
                    <div class="mb_icon"></div>
                    <span>登录失败</span>
                </div>
                <div class="mbXQ">
                    <span>{{ msg }}</span>
                </div>
                <div class="queren" @click="quxiao"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            account: "admin",
            password: "admin123",
            isRb: false,
            showZZ: false,
            msg: "",
        };
    },
    activated() {},
    mounted() {
        this.account = window.account;
        this.password = window.password;
    },
    methods: {
        loginClick2() {
            this.loginClick();
        },
        isShowRb() {
            if (this.isRb) {
                this.isRb = false;
            } else {
                this.isRb = true;
            }
        },
        exit() {
            let data = {
                functionName: "Exit",
                backFunctionName: "",
                functionParameters: [],
            };

            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        loginClick() {
            // 登录接口
            let v = {
                URL: "login",
                StructName: "登录接口",
                verbType: "POST",
                value: {
                    account: this.account,
                    password: this.$md5(this.password),
                },
            };
            let data = {
                functionName: "WebServerMsg",
                backFunctionName: "getLogin",
                functionParameters: [
                    {
                        key: "WebServerMsg",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.getLogin = this.getLogin;
        },
        getLogin(e) {
            let data = JSON.parse(e);
            if (data.code == 0) {
                this.$router.push("/daohang");
            } else {
                // 唤起弹框，提示错误
                this.showZZ = true;
                this.msg = data.msg;
            }
        },
        quxiao() {
            this.showZZ = false;
        },
    },
};
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("img/login.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.account {
    width: 401px;
    height: 57px;
    background: url("img/account.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: absolute;
    left: 759.5px;
    top: 451px;
}
.password {
    width: 401px;
    height: 57px;
    background: url("img/password.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: absolute;
    left: 759.5px;
    top: 537px;
}
input {
    width: 100%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    padding-left: 10.81px;

    margin-top: 0px !important;
    font-family: SourceHanSansSC-Regular;
    font-size: 18px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: 1px;
    color: #ffffff;
}
input:focus {
    border: none;
}
.inputs {
    width: 300px;
    height: 100%;
    margin-left: 70px;
}
.remember {
    width: 80px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 775.44px;
    top: 608.66px;
    cursor: pointer;
}
.remember > img {
    width: 16px;
    height: 16px;
}
.remember > span {
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0em;
    color: #ffffff;
    margin-top: 2px;
}

.btn {
    width: 410px;
    height: 57px;
    background: url("img/btn1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 759.5px;
    top: 677px;
    cursor: pointer;
}
.btn:hover {
    background: url("img/btn2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.tuichu {
    font-family: SourceHanSansCN-Regular;
    font-size: 15px;
    font-weight: normal;
    color: #ffffff;
    position: fixed;
    left: 945px;
    bottom: 297px;
    cursor: pointer;
}
</style>
<style scoped>
.zhezhao2 {
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
.showMB {
    width: 277.08px;
    height: 138.82px;
    background: url("img/moban.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: relative;
}
.queren {
    position: absolute;
    width: 132px;
    height: 40px;
    left: 73px;
    top: 123px;
    background: url("img/q1.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.queren:hover {
    background: url("img/q2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.mb_titles {
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    margin-top: 23px;
}
.mb_icon {
    width: 23px;
    height: 20px;
    margin-left: 19px;
    margin-right: 4px;
    background: url("img/mb.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.mb_titles > span {
    font-family: Source Han Sans SC;
    font-size: 18px;
    font-weight: bold;
    color: #ff5656;
}
.mbXQ {
    width: 180px;
    min-height: 20px;
    margin-left: 46px;
    margin-top: 9px;
}
.mbXQ > span {
    font-family: Source Han Sans SC;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0em;
    color: #ffffff;
}
</style>