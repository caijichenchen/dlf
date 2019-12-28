<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-yun :title="title"></zjzxf-counter-yun>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="119" @tap="setDetailId">云南省建设工程造价咨询服务收费-云价综合〔2012〕66号|云建标〔2012〕509号文件</view>
			<view class="a-text" :data-id="118" @tap="setDetailId">云南省会计师事务所审计服务收费标准|云会协〔 2012〕9号|云价收费〔2012〕4号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterYun from "./zjzxf-counter_yun.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYun',  //api请求
					count:2  //积分消耗
				},
				title: "云南省造价咨询费",
				id:119
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterYun,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
