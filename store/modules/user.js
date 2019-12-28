export default {
	state:{
		//登陆状态
		loginState: false,
		//token
		token: null,
		//用户信息
		userInfo: {}
	},
	mutations: {
		//初始化登陆状态
		initUser(state) {
			let userInfo = uni.getStorageSync('userInfo')
			if(userInfo) {
				// console.log("333",userInfo)
				// userInfo = JSON.parse(userInfo)
				// console.log("444",userInfo)
				state.userInfo = userInfo
				state.token = uni.getStorageSync('loginToken')
				state.loginState = true
			}
		},
		//登陆
		login(state,access_token){
			state.token = access_token
			state.loginState = true
		},
		//用户个人信息
		getUserInfo(state,userInfo){
			console.log("+++++",userInfo)
			state.userInfo = userInfo
			//持久化存储
			// uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
			uni.setStorageSync('userInfo',state.userInfo)
			console.log("-----",state.userInfo)
		},
		//退出登录
		logout(state){
			state.loginState = false
			state.token = null
			state.userInfo = {}
			uni.removeStorageSync('loginToken')
			uni.removeStorageSync('userInfo')
		}
	}
}