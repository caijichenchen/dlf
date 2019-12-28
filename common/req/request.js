//在js文件里面引入vuex
import $store from '@/store/index.js'
export default {
	//全局配置
	common: {
		baseUrl: 'http://dlf.test',
		data: {},
		method:'GET',
		dataType:'json'
	},
	//发送请求返回promise
	request(options = {}) {
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
		// if(options.token == 'none'){
		// 	options.header = 
		// }
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result) => {
					if(result.statusCode !== 200){
						uni.showToast({
							icon:'none',
							title: '获取数据失败,请稍后重试'
						})
						return rej()
					}
					let data = result
					res(data)
				},
				fail:(err) => {
					console.log(err)
					uni.showToast({
						icon:'none',
						title:'获取数据失败,请稍后重试'
					})
					return rej()
				}
			})
		})
	}
}