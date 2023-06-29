import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import "lib-flexible-visualize";
import axios from 'axios'

// 引入md5
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
    //引入sha256加密
import sha256 from 'js-sha256'
Vue.prototype.$sha256 = sha256
    // 网络请求
Vue.prototype.$axios = axios
    // 图表插件
Vue.prototype.$echarts = echarts

// swiper --- 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//声明一个事件总线
Vue.prototype.$bus = new Vue();
// 阻止项目启动生产消息
Vue.config.productionTip = false

new Vue({
    router,
    components: { App },
    render: h => h(App),
}).$mount('#app')