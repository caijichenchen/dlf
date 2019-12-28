<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-su :title="title"></zjzxf-counter-su>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="115" @tap="setDetailId">江苏省造价咨询收费标准|苏价服[2014]383号</view>
			<view class="a-text" :data-id="155" @tap="setDetailId">江苏省建设工程造价咨询服务收费管理办法|苏价服（2004）483号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterSu from "./zjzxf-counter_su.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfSu',  //api请求
					count:2  //积分消耗
				},
				title: "江苏造价咨询费",
				id:115
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterSu,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
