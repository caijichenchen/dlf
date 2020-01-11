import Vue from 'vue'
import App from './App'
import store from './store'
import VueBus from "vue-bus"
import Vuex from "vuex"
Vue.config.productionTip = false

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue' 
Vue.component('uni-tag',uniTag)

import baseLayout from "@/common/base/baseLayout.vue"
Vue.component('base-layout',baseLayout)

import computing from "@/common/base/computing.vue"
Vue.component('computing',computing)

import explain from '@/common/base/explain.vue'
Vue.component('explain',explain)

import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
Vue.component('uni-collapse',uniCollapse)
Vue.component('uni-collapse-item',uniCollapseItem)



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
