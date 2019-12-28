<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">计算器分类</block>
			<block slot="right" @click="goSearch">
				<text class="iconfont" style="color: #FFFFFF;font-size: 34upx;">&#xe666;</text>
			</block>
		</cu-custom>
		<view style="text-align: center;">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in type" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
				<view class="sub_content">
					<view v-show="TabCur==0" class="content_jsq">
						<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;margin-top: 14rpx;margin-bottom: 14rpx;">
						<slot name="jsq"></slot>
					</view>
					<view v-show="TabCur==1">
						<slot name="qfbz">
						</slot>
						<parser :html="html" class="contentwrap"></parser>
					</view>
				</view>
			 </scroll-view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import parser from "@/components/jyf-Parser/index"
	export default {
		props:{
			title: {
				type: String,
				default: null
			},
			detailId:{
				type: Number,
				default: null
			}
		},
		data() {
			return {
				html:'',
				CustomBar: this.CustomBar,
				TabCur: 0,
				scrollLeft: 0,
				type:['计算器','取费标准'],
			}
		},
		mounted() {
			// uni.$on('switch',function(data){
			// 	if(data.msg){
			// 		this.TabCur = 1
			// 		console.log(this.TabCur)
			// 	}
			// })
			if(this.normalId){
				$req.request({
					url:'/api/xcx/standard/detail',
					data:{id:this.normalId}
				}).then(res=>{
					let data = res.data.message.body
					this.html = data
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'获取信息失败,请稍后重试'
					})
				})
			}
		},
		components: {
			parser
		},
		computed:{
			normalId(){
				return this.detailId
			}
		},
		methods: {
			goSearch() {
				uni.navigateTo({
				    url: '../sousuo/sousuo'
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		},
		watch:{
			normalId:function(val){
				$req.request({
					url:'/api/xcx/standard/detail',
					data:{id:this.normalId}
				}).then(res=>{
					let data = res.data.message.body
					this.html = data
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'获取信息失败,请稍后重试'
					})
				})
			}
		}
	}
</script>

<style>
	.status_bar {
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #00a0e0;  
	}  
	.top_view {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    position: fixed;  
	    background-color: #00a0e0;  
	    top: 0;  
	    z-index: 999;  
	}

	/* tabs样式 */
	.sub_content {
		width: 100%;
		height: auto;
		background-color: #fff;
	}

	.content_jsq {
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}

	.sub_content form {
		text-align: left;
	}


	.text-orange,
	.line-orange,
	.lines-orange {
		color: #0062CC;
	}

	.active {
		background: #0081FF;
		color: #fff;
		border: none;
	}
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
</style>
