//在js文件里面引入vuex
import $store from '@/store/index.js'
export default {
	//全局配置
	common: {
		baseUrl: 'https://www.dulifei.com',
		data: {},
		method:'GET',
		dataType:'json'
	},
	//发送请求返回promise
	request(options = {},showModal = true) {
		// if(!uni.getStorageSync('loginToken')){ //验证当没有token时跳转登录
		// 	return uni.navigateTo({
		// 		url: '/pages/login/login.vue'
		// 	})
		// }
		var header= {
			"Authorization": "Bearer " +uni.getStorageSync('loginToken'),
			// "Authorization": "Bearer " + $store.state.user.token,
			"Accept":"application/prs.dlf.v1+json",
		}
		options.url = this.common.baseUrl + options.url
		options.header = options.header || header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		return new Promise((res,rej)=>{
			if(showModal){
				uni.showLoading({
					title:'加载中',
					mask:true
				})
			}
			uni.request({
				...options,
				success:(result) => {
					if(result.statusCode !== 200){
						if(result.data.message){
							uni.showToast({
								icon:'none',
								title: result.data.message
							})
						}else{
							uni.showToast({
								icon:'none',
								title: '获取数据失败,请稍后重试'
							})
						}
						return rej()
					}
					let data = result
					res(data)
				},
				fail:(err) => {
					uni.showToast({
						icon:'none',
						title:'获取数据失败,请稍后重试'
					})
					return rej()
				},
				complete() {
					uni.hideLoading()
				}
			})
		})
	}
}