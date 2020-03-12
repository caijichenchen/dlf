<template>
	<view class="navigation-bar">
		<view class="sjfjsjg">
			<view class="sjftable">
				<img src="/static/img/tel.jpg">
				<text class="text-blue">{{title}}计算结果</text>
			</view>
			<view v-for="(value,name) in result" :key="name">
				<view v-if="name != 'calcu_jsgc' && name != 'calcu_url'" class="cu-form-group">
					<view v-for="(val,key) in value" class="row" :key="key">
						<view class="title" v-if="isNaN(val)">{{val}}</view>
						<view class="sjfInput" v-else>{{val}}</view>
					</view>
					<uni-tag text="元" type="defult"></uni-tag>
				</view>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">{{result.calcu_jsgc.title}}</view>
				<view class="msg text-center" v-html="result.calcu_jsgc.calcu_jsgc"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">直达链接</view>
				<button class="calculatorReport" type="primary" @tap="goDetail(result.calcu_url.calcu_url)">查看计算过程和报告</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'费用'
			},
			result:{
				type:Object
			}
		},
		methods:{
			goDetail(address){
				if(!address){
					return this.$msg('还没有进行相关计算')
				}
				const arr = address.split('/')
				const data = arr[arr.length-1]
				const urlArr = data.split('&')
				uni.navigateTo({
					url:`/pages/PersonalCenter/jsym?id=${urlArr[1]}&temId=${urlArr[0]}`
				})
			},
		}
	}
</script>

<style >
</style>
