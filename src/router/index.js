import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载路由-必须使用！！！
// 空白页
const KB = () =>
    import('../view/default/default.vue')
// 登录页
const LOGIN = () =>
    import('../view/login/login.vue')
// 加载页
const LOADING = () =>
    import('../view/loading/loading.vue')
// 宏观框架页面
const HONGGUAN = () =>
    import('../view/hongguan/index.vue')
// 首页
const Index = () =>
    import('../view/index/index.vue')
// 导航页
const DaoHang = () =>
    import('../view/daohang/daohang.vue')

// 导航详情页
const DHXQ = () =>
    import('../view/dhxq/dhxq.vue')
const DHXQ2 = () =>
    import('../view/dhxq/dhxq2.vue')
// 电网孪生
const DW = () =>
    import('../view/dianwang/dianwang.vue')
// 公用默认页面
const MR = () =>
    import('../view/mrenYe/mrenYe.vue')
// demo 测试页面
const DEMO = () => import('../view/demo/index.vue')
// ---------------------------------电网孪生子路由--------------------------------------
// 杆塔布点
const BD = () =>
    import('../view/dianwang/components/j_budian/index.vue')
// 杆塔-自定义布点
const BD2 = () => import('../view/dianwang/components/j_budian/index2.vue')
// 间隔管理
const JG = () =>
    import('../view/dianwang/components/j_jiange/index.vue')
// 布线管理
const BX = () =>
    import('../view/dianwang/components/j_buxian/index.vue')
// 杆塔布线-自定义布线
const BX2 = () => import('../view/dianwang/components/j_buxian/index2.vue')
// 站房选址
const XZ = () =>
    import('../view/dianwang/components/z_xuanzhi/index.vue')
// 站房-自定义建站
const XZ2 = () => import('../view/dianwang/components/z_xuanzhi/index2.vue')
// 站房孪生-间隔管理
const ZJG = () =>
    import('../view/dianwang/components/z_jiange/index.vue')

// 电缆孪生-节点管理
const ZD = () =>
    import('../view/dianwang/components/d_zhongduan/index.vue')
// 节点管理-自定义布点
const ZD2 = () => import('../view/dianwang/components/d_zhongduan/index2.vue')
// 电缆孪生-管廊管理
const DBX = () =>
    import('../view/dianwang/components/d_zhongduan2/index.vue')
// 管廊管理-自定义管廊
const DBX2 = () => import('../view/dianwang/components/d_zhongduan2/index2.vue')
// 电缆孪生-电缆管理
const DLGL = () =>
    import('../view/dianwang/components/d_zhongduan3/index.vue')
// 微网孪生-设施布点
const WSS = () =>
    import('../view/dianwang/components/w_sheshi/index.vue')
// 微网-设施布点-自定义布点
const WSS2 = () => import('../view/dianwang/components/w_sheshi/index2.vue')
// 微网孪生-间隔管理
const WJG = () =>
    import('../view/dianwang/components/w_jiange/index.vue')
//    --------------------------------------------------------------------------------
// 网架分析
const WJ = () =>
    import('../view/wangjia/wangjia.vue')
// 设施分析
const SSFX = () =>
    import('../view/wangjia/components/ssfx/index.vue')

// 设施分析子路由
const DZ = () =>
    import('../view/wangjia/components/ssfx/components/dz/index.vue')
const XL = () =>
    import('../view/wangjia/components/ssfx/components/xl/index.vue')
const BYQ = () => import('../view/wangjia/components/ssfx/components/byq/index.vue')
const SSFXITEM = () =>
    import('../view/wangjia/components/sheshifenxi/index.vue')


// 综合评估
const ZHPG = () => import('../view/wangjia/components/zonghepinggu/index.vue')
// 网格分析
const WGFX = () =>
    import('../view/wangjia/components/wanggefenxi/index.vue')

// ----------------------------------------------------------------------------------------
// 虚拟规划
const XN = () =>
    import('../view/xuni/xuni.vue')
// 公用默认页2
const MR2 = () => import('../view/mrenYe2/index.vue')
// 负荷预测
const XFZFX = () => import('../view/xuni/components/fuheyuce/index.vue')
// 模型管理
const MX = () =>
    import('../view/moxing/moxing.vue')
//--------------- 数据管理-----------------------------------
const XX = () =>
    import('../view/xinxi/xinxi.vue')
const DA = () =>
    import('../view/xinxi/components/danganshuju/index.vue')
const YX = () =>
    import('../view/xinxi/components/yunxingshuju/index.vue')
const ZB = () =>
    import('../view/xinxi/components/zhibiaoshuju/index.vue')
const GG = () =>
    import('../view/xinxi/components/gonggong/index.vue')
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/login'
},
{
    path: "/demo",
    name: "demo",
    component: DEMO
},
{
    path: '/default',
    name: "default",
    component: KB
},
{
    path: '/login',
    name: "login",
    component: LOGIN
},
{
    path: "/daohang",
    name: "daohang",
    component: DaoHang
},
{
    path: "/dhxq",
    name: "dhxq",
    component: DHXQ
},
{
    path: "/dhxq2",
    name: 'dhxq2',
    component: DHXQ2
},
{
    path: '/loading',
    name: 'loading',
    component: LOADING
},
{
    path: "/hongguan",
    name: 'hongguan',
    component: HONGGUAN
},
{
    path: '/index',
    name: 'Index',
    component: Index
},
{
    path: "/mr",
    name: "mrenYe",
    component: MR
},
{
    path: '/dw',
    name: 'dianwang',
    component: DW,
    children: [{
        path: 'budian',
        name: "j_budian",
        component: BD
    },
    {
        path: "gt_zdy",
        name: "j_budian2",
        component: BD2
    },
    {
        path: "jiange",
        name: "j_jiange",
        component: JG
    },
    {
        path: "buxian",
        name: "j_buxian",
        component: BX
    },
    {
        path: "gt_zdybx",
        name: 'j_buxian2',
        component: BX2
    },
    {
        path: 'xuanzhi',
        name: 'z_xuanzhi',
        component: XZ
    },
    {
        path: "xz_zdy",
        name: "z_xuanzhi2",
        component: XZ2
    },
    {
        path: 'zjiange',
        name: "z_jiange",
        component: ZJG
    },

    {
        path: 'dzhongduan',
        name: 'd_zhongduan',
        component: ZD
    },
    {
        path: "dl_zdy",
        name: "d_zhongduan2",
        component: ZD2
    },
    {
        path: 'dbuxian',
        name: "d_buxian",
        component: DBX
    },
    {
        path: "dl_zdygl",
        name: 'd_zhongduans2',
        component: DBX2
    },
    {
        path: "dlgl",
        name: "d_dlgl",
        component: DLGL
    },
    {
        path: 'wsheshi',
        name: 'w_sheshi',
        component: WSS
    },
    {
        path: "ww_zdy",
        name: "w_sheshi2",
        component: WSS2
    },
    {
        path: 'wjiange',
        name: 'w_jiange',
        component: WJG
    }
    ]
},
{
    path: '/wj',
    name: 'wangjia',
    component: WJ,
    children: [{
        path: 'sheshi',
        name: "sheshifenxi",
        component: SSFX,

    }, {
        path: "dianzhan",
        name: "dz",
        component: DZ
    }, {
        path: "xianlu",
        name: "xl",
        component: XL
    },
    {
        path: "byq",
        name: 'byq',
        component: BYQ
    }, {
        path: "ssfxItem",
        name: "ssfxItem",
        component: SSFXITEM
    }, {
        path: 'wangge',
        name: 'wanggefenxi',
        component: WGFX
    }, {
        path: "zhpg",
        name: "zonghepinggu",
        component: ZHPG
    }]
},
{
    path: "/xn",
    name: "xuni",
    component: XN,
    children: [{
        path: 'fhfx',
        name: "fuhefenxi",
        component: XFZFX,

    },
    ]
},
{
    path: "/xuni_mr",
    component: MR2
},
{
    path: '/mx',
    name: "moxing",
    component: MX
},
{
    path: '/xx',
    name: "xinxi",
    component: XX,
    children: [{
        path: 'dangan',
        name: 'dasj',
        component: DA
    },
    {
        path: 'yunxing',
        name: 'yxsj',
        component: YX
    },
    {
        path: 'zhibiao',
        name: 'zbsj',
        component: ZB
    },
    {
        path: 'gonggong',
        name: "ggsj",
        component: GG
    }
    ]
}

]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router