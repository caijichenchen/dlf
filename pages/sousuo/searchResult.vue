<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">搜索结果</block>
		</cu-custom>
		<view class="content">
			<view class="sea-box" >搜索关键字:<text style="color: #3366d6;font-size: 0.9rem;">设计费计算器</text></view>
			<view class="header">
				<view class="header-item" style="width: 42%;" :data-show="1" :class="{'activeItem':show==1}" @tap="changeShow">计算器</view>
				<view class="header-item" style="width: 28%" :data-show="2" :class="{'activeItem':show==2}" @tap="changeShow">标准</view>
				<view class="header-item" style="width: 28%" :data-show="3" :class="{'activeItem':show==3}" @tap="changeShow">帮助</view>
			</view>
			<view v-if="show == 1">
				<uni-card title="设计费计算器" :extra="text" note="发表时间:2017-07-27">设计费计算器,设计费计算,工程设计费计算器,计价格[2002]10号计算器</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card"
	export default {
		data() {
			return {
				show:1,
				text:'点击查看'
			}
		},
		methods:{
			changeShow(e){
				if(this.show = e.currentTarget.dataset.show){
					return
				}
				this.show = e.currentTarget.dataset.show
			}
		},
	    components: {uniCard}
	}
</script>

<style>
	.sea-box {
		color: #00a0e0;
		font-size: 0.8rem;
		text-align: left;
		padding-left: 3%;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.header {
		display: flex;
		padding-left: 3%;
		padding-right: 3%;
		margin-top: 0.5rem;
	}
	.header-item {
		font-size: 1rem;
	}
	.activeItem {
		color: #00A0E0;
		border-bottom: 4rpx solid #00A0E0;
	}
</style>
