<template>
	<view>
		<button class="computerBtn" type="primary" @tap="jisuan">点击计算</button>
		<text>单次计算消耗{{countData.count}}积分(自选会员及以上不消耗积分)</text>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
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
				aa:[
					['dzzk','that.needVal[item] <= 100 && that.needVal[item] >0','范围一般为0~100'],
					['fdfd','that.needVal[item] <= 100 && that.needVal[item] >0','范围一般为80~120'],
				],
				checkArr:[],
				checkTypeArr:[//二维数组  从左到右  判断属性   判断条件   提示文本 
					// ['discount','that.needVal[item] < 100 && that.needVal[item] >0','范围一般为0~100'],
					// ['jafe','that.needVal[item] >0','范围数值应该为:大于0'],
					// ['gstze',{check:()=>{
					// 	console.log(this.needVal[this.name]); 
					// 	return this.needVal[this.name] > 0
					// 	}},'范围数值应该为:大于0'],
					{
						name:'gstze',
						check:()=>{return this.needVal[this.name] > 0},
						title:'范围数值应该为:大于0'
					}
				],
				name:''
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
				for(var key in this.needVal){
					this.checkArr.push(key)
				}
				for(let i = 0;i<this.checkTypeArr.length;i++){
					const reg = new RegExp(this.checkTypeArr[i].name,'g')
					this.checkArr.map(item=>{
						if(reg.exec(item)){
							this.name = item
							if(!this.checkTypeArr[i].check()){
								return uni.showToast({
									icon:'none',
									title:this.checkTypeArr[i].title
								})
								
							}
							// if(!eval(this.checkTypeArr[i][1])){
							// 	uni.showToast({
							// 		icon:'none',
							// 		title:this.checkTypeArr[i][2]
							// 	})
							// 	return 
							// }
						}
					})
				}
				this.checkArr = []
				this.name = ''
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
					},
					fail: (err) => {

					}
				});
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
</style>
