import Vue from 'vue'
import App from './App'
import store from './store'
import VueBus from "vue-bus"
import Vuex from "vuex"
Vue.config.productionTip = false

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 使用vuex
Vue.use(Vuex)

//权限跳转判断
Vue.prototype.navigateTo = (options) =>{
	//判断用户是否登录
	if(!store.state.user.loginState){
		uni.showToast({
			icon:'none',
			title:'请先登录'
		})
		return uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	uni.navigateTo(options)
}
Vue.use(VueBus)
App.mpType = 'app'
// http://dlf.test   https://www.dulifei.com
Vue.prototype.$serverUrl = 'https://www.dulifei.com'
Vue.prototype.$serverimgUrl = 'https://www.dulifei.com'
Vue.prototype.$store = store

const app = new Vue({
	store,
    ...App
})
app.$mount()
