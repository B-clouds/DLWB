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
    </div>
</template>

<script>
import { sha256 } from "../../utils/jiami.js";
export default {
    name: "login",
    data() {
        return {
            account: "omage",
            password: "123456",
            isRb: false,
        };
    },
    activated() {
        // this.account = sessionStorage.getItem("account");
        // this.password = sessionStorage.getItem("password");
    },
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
            this.$router.push("/daohang");
            // let pass = sha256(this.password);
            // let that = this;
            // if (that.account == "") {
            //   that.$notify({
            //     title: "登录",
            //     message: "请输入用户名",
            //     offset: 60,
            //     type: "error",
            //   });
            // } else if (that.password == "") {
            //   that.$notify({
            //     title: "登录",
            //     message: "请输入密码",
            //     offset: 60,
            //     type: "error",
            //   });
            // } else {
            //   that
            //     .$axios({
            //       method: "POST",
            //       url: "http://api.picimos.com/login",
            //       data: {
            //         account: this.account,
            //         password: pass,
            //       },
            //     })
            //     .then(function (res) {
            //       if (res.data.code == 0) {
            //         // 获取token
            //         sessionStorage.setItem("token", res.data.data.token);
            //         // 调用获取项目列表方法
            //         that.getProject();
            //       } else {
            //         that.$notify({
            //           title: "登录",
            //           message: res.data.msg,
            //           offset: 60,
            //           type: "error",
            //         });
            //       }
            //     })
            //     .catch((error) => {});
            // }
        },
        // 获取项目列表。
        // getProject() {
        //   let that = this;
        //   that
        //     .$axios({
        //       method: "GET",
        //       url: "http://api.picimos.com/project/list?pageNo=1&pageSize=1",
        //       headers: {
        //         Authorization: sessionStorage.getItem("token"),
        //       },
        //     })
        //     .then(function (res) {
        //       if (res.data.code == 0) {
        //         let projectId = res.data.data.list[0].id;
        //         let token = sessionStorage.getItem("token");
        //         let data = {
        //           action: "cloud.init",
        //           params: {
        //             token,
        //             projectId,
        //             showUI: true,
        //           },
        //         };
        //         ue.interface.broadcast("cloud.init", JSON.stringify(data));
        //         if (that.isRb) {
        //           sessionStorage.setItem("account", that.account);
        //           sessionStorage.setItem("password", that.password);
        //         } else {
        //           sessionStorage.setItem("account", ""),
        //             sessionStorage.setItem("password", "");
        //         }
        //         that.$router.push({
        //           path: "/loading",
        //         });
        //       }
        //     })
        //     .catch((error) => {
        //     });
        // },
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