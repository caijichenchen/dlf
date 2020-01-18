<template>
	<view>
		<button class="computerBtn" :class="computedStatus ? '':'not'" type="primary" @tap="computedStatus && jisuan()">{{btnText}}</button>
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
				// result: {
				// 	calcu_jsgc: "费=37638元×0.5=18819元<br />",
				// 	calcu_url: "/yjjs/yjjs_report/11072&246347",
				// 	sjf_jbsf: 47047.5,
				// 	sjf_jzj: 47047.5,
				// 	sjf_sfjj: 55350,
				// 	sjf_sjf: 37638,
				// 	sjf_zhsjf: 18819,
				// }
				result:{},
				btnText: '点击计算',
				computedStatus:true,
				timer: null,
				time: 3
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
				if(!this.loginState){
					return uni.navigateTo({
						url:'/pages/login/login'
					})
				}
				if(checkComputed(this.needVal)){
					this.computedStatus = false
					this.timer = setInterval(()=>{
						if(this.time == 0){
							clearInterval(this.timer)
							this.time = 3
							this.computedStatus = true
							this.btnText = '点击计算'
							return 
						}
						this.btnText = (this.time--)+'s 轻松计算 无价时间'
					},1000)
					uni.request({
						url: this.countData.url, //仅为示例，并非真实接口地址。
						header: {
							"Authorization": "Bearer " + uni.getStorageSync('loginToken'),
							"Accept":"application/prs.dlf.v1+json",
							},
						data: this.needVal,
						method: 'POST',
						success: (res) => {
							// this.$emit('jsSuccess', res.data);
							this.result = res.data
							this.$bus.emit('jsSuccess', this.result);
							uni.pageScrollTo({
								scrollTop:999999,
								duration:300
							})
						},
						fail: (err) => {
					
						}
					});
				}
			},
			needValChange(val) {
				this.needVal = val
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
