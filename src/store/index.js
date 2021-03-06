import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的信息，在Base, sidebarHead中用到， 在HomeRecommend组件获取
    userInfo: {},
    // 本地是否有token，在registerAndLogin组件获取
    haveToken: window.localStorage.getItem('haveToken'),
    // 开启侧边栏的判断值
    openSideBar: false,
    // navbar组件偏移量
    offSetX: 0,
    // navbar组件当前活跃的按钮及路由
    offSetItem: 1,
    // 判断是否开启下拉刷新
    loadingLock: false,
    // 扫码前往的uuid
    uuid: '',
    // 首页推荐数据
    recommendList: [],
    // 是否是满屏
    isFullScreen: false,
    // 路由记录列表
    routeList: []
  },
  mutations,
  actions,
  modules
})
