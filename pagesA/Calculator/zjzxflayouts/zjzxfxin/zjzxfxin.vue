<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="1493">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-xin :title="title"></zjzxf-counter-xin>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterXin from "./zjzxf-counter_xin.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfXin',  //api请求
					count:2  //积分消耗
				},
				title: "新疆造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterXin,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
