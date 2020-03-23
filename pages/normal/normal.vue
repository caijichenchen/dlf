<template>
	<view @touchstart="getScrollFrom" @touchend="getScrollTo">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
		    <block slot="content">相关标准</block>
		</cu-custom>
		<parser :html="html" class="contentwrap"></parser>
		<view class="cuIcon-fold font-lg  go-header-btn" v-show="showbtn" @tap="goheader"></view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import parser from "@/components/jyf-Parser/index"
	export default{
		data() {
		    return {
				html:'',
				title:'',
				start:0,
				showbtn:false
		    }
		},
		onLoad(options) {
			const id = options.id
			this.title = options.title ? options.title : '相关标准'
			$req.request({
				url:'/api/xcx/standard/detail',
				data:{id:id}
			}).then(res=>{
				let data = res.data.message.body
				this.html = data
			}).catch(err=>{
				this.$msg('获取相关标准失败')
			})
		},
		methods:{
			getScrollFrom(e){
				this.start = e.changedTouches[0].clientY
			},
			getScrollTo(e){
				if(e.changedTouches[0].clientY - this.start < -20){
					this.showbtn = true
				}else{
					this.showbtn = false
				}
			},
			goheader(){
				uni.pageScrollTo({
					scrollTop:0,
					duration:300
				})
			}
		},
		components: {
			parser
		}
	}
</script>

<style scoped>
	.contentwrap {
		width: 100%;
		overflow: hidden;
		white-space: normal;
		text-align: left;
		line-height: 64rpx;
		font-size: 28rpx;
		padding: 24rpx;
		box-sizing: border-box;
	}
	.go-header-btn{
		position: fixed;
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		right: 40rpx;
		bottom: 100rpx;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2);
		text-align: center;
		line-height: 70rpx;
	}
</style>
