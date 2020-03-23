<template>
	<view>
		<button class="computerBtn" :class="computedStatus ? '':'not'" type="primary" @tap="computedStatus && jisuan()">
			{{time ? time+'s 轻松计算 无价时间' : '计算'}}
		</button>
		<text>单次计算消耗{{countData.count}}积分(自选会员及以上不消耗积分)</text>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import { checkComputed } from '@/common/req/router.js'
	export default {
		props: {
			countData: {
				type: Object,
				default: null
			},
		},
		data() {
			return {
				needVal: {},
				checkNeedVal:{},
				result:{},
				computedStatus:true,
				time: 0,
				information:''
			}
		},
		computed:{
			...mapState({
				loginState:state=>state.user.loginState,
				userInfo:state=>state.user.userInfo
			}),
		},
		methods: {
			jisuan(e) {
				// if(!this.time){
				// 	if(!this.loginState){ //没有登录
				// 		return uni.navigateTo({ url:'/pages/login/login' })
				// 	}
				// 	if(!beforeComputed){
				// 		return this.$msg('输入数值范围应该大于0')
				// 	}
				// 	this.time = 3
				// 	const intervalId = setInterval(()=>{
				// 		if(this.time == 0){
				// 			clearInterval(intervalId)
				// 		}
				// 		this.time--
				// 	},1000)
				// 	//获取计算结果
				// 	uni.request({
				// 		url: this.countData.url, 
				// 		header: {
				// 			"Authorization": "Bearer " + uni.getStorageSync('loginToken'),
				// 			"Accept":"application/prs.dlf.v1+json",
				// 			},
				// 		data: this.needVal,
				// 		method: 'POST',
				// 		success: (res) => {
				// 			this.result = res.data
				// 			this.$bus.emit('jsSuccess', this.result);
				// 			uni.pageScrollTo({
				// 				scrollTop:999999,
				// 				duration:300
				// 			})
				// 		},
				// 		fail: (err) => {
				// 			this.$msg('获取计算结果失败,请稍后重试')
				// 		}
				// 	});
				// }
				
				if(!this.beforeComputed){
					this.$msg(this.information)
				}
				
				
				// if(checkComputed(this.needVal)){
				// 	this.computedStatus = false
				// 	this.timer = setInterval(()=>{
				// 		if(this.time == 0){
				// 			clearInterval(this.timer)
				// 			this.time = 3
				// 			this.computedStatus = true
				// 			this.btnText = '点击计算'
				// 			return 
				// 		}
				// 		this.btnText = (this.time--)+'s 轻松计算 无价时间'
				// 	},1000)
				// 	uni.request({
				// 		url: this.countData.url, //仅为示例，并非真实接口地址。
				// 		header: {
				// 			"Authorization": "Bearer " + uni.getStorageSync('loginToken'),
				// 			"Accept":"application/prs.dlf.v1+json",
				// 			},
				// 		data: this.needVal,
				// 		method: 'POST',
				// 		success: (res) => {
				// 			// this.$emit('jsSuccess', res.data);
				// 			this.result = res.data
				// 			this.$bus.emit('jsSuccess', this.result);
				// 			uni.pageScrollTo({
				// 				scrollTop:999999,
				// 				duration:300
				// 			})
				// 		},
				// 		fail: (err) => {
					
				// 		}
				// 	});
				// }
			},
			needValChange(val) {
				this.needVal = val.needVal
				this.checkNeedVal = val.showSelectedInput
			}
		},
		computed:{
			beforeComputed(){
				const {checkNeedVal,needVal} = this
				let falg = true
				for(let key in checkNeedVal){
					if(checkNeedVal[key].required && falg){  //需要校验的状态  当已经确定了校验不通过不再执行循环
						const name = Object.keys(checkNeedVal[key]).filter(x=>x!='required')
						//校验后的结果
						const result = this[`$${name}`](needVal[key],checkNeedVal[key][name])
						if(result !== true){
							falg = false
							this.information = result
						}
					}
				}
				return falg
			}
		},
		created() {
			this.$bus.on('needValChange', this.needValChange)
		},
		beforeDestroy() {
			this.$bus.off('needValChange', this.needValChange);
		}
	}
</script>

<style>
	.computerBtn{
		width: 666upx;
		height: 70upx;
		line-height: 70upx;
		margin-top: 20upx;
		padding-bottom: 20upx;
		font-size: 30upx;
	}
	.not{
		opacity: 0.6;
	}
</style>
