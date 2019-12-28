<template>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		onShow() {
			let _token = uni.getStorageSync('loginToken')
			if(!this.loginState && _token){
				uni.showToast({
					icon:'none',
					title:'请先登录'
				})
				uni.navigateTo({
				    url: '../login/login'
				});
			}
		},
		computed:{
			...mapState({
				loginState:state=>state.user.loginState,
			})
		},
	}
</script>

<style>
</style>
