<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
		    <block slot="content">计算器分类</block>
				<block slot="right" @click="goSearch">
					<text class="iconfont" style="color: #FFFFFF;font-size: 34upx;">&#xe666;</text>
				</block>
		</cu-custom>
		<view class="content">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in type" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
				<view class="sub_content">
					<view v-show="TabCur==0" class="content_jsq">
						<slot name="jsq"></slot>
					</view>
					<view v-show="TabCur==1">
						<slot name="qfbz">取费标准</slot>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				scrollLeft: 0,
				type:['计算器','取费标准'],
			}
		},
		methods: {
			goSearch() {
				uni.navigateTo({
				    url: '../sousuo/sousuo'
				});
			},
			goBack() {
				uni.navigateBack({
				    delta: 1
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		},
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
	.content {
		text-align: center;
		height: 400upx;
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

</style>
