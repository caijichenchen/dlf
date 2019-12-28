<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="110">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-guo></zjzxf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterGuo from "./zjzxf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfGuo',  //api请求
					count:2  //积分消耗
				},
				title: "全国造价咨询费"
			}
		},
		methods: {
		},
		components:{
			zjzxfCounterGuo,
			baseLayout,
			computing,
			zjzxfResult,
		}
	}
</script>

<style>
</style>
