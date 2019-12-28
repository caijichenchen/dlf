<template>
	<view>
		<button class="computerBtn" type="primary" @tap="jisuan">点击计算</button>
		<text>单次计算消耗{{countData.count}}积分(自选会员及以上不消耗积分)</text>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
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
				result:{}
			}
		},
		methods: {
			jisuan(e) {
				// this.$bus.emit('jsSuccess', this.result);
				$req.request({
					url:this.countData.url,
					data:this.needVal,
					method: 'POST',
				}).then(res=>{
					this.result = res.data
					this.$bus.emit('jsSuccess', this.result);
				}).catch(err=>{
					console.log('计算失败',err)
				})
				// uni.request({
				// 	url: this.countData.url, 
				// 	header: {
				// 		"Authorization": "Bearer " + uerInfo.token,
				// 		"Accept":"application/prs.dlf.v1+json",
				// 		},
				// 	data: this.needVal,
				// 	method: 'POST',
				// 	success: (res) => {
				// 		console.log(res)
				// 		// this.$emit('jsSuccess', res.data);
				// 		this.result = res.data
				// 		this.$bus.emit('jsSuccess', this.result);
				// 	},
				// 	fail: (err) => {

				// 	}
				// });
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
