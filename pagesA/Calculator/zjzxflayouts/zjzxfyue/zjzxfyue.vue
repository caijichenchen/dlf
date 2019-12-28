<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="920">
		<template v-slot:jsq>
			<zjzxf-counter-yue :title="title"></zjzxf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<!-- <h1>设计费取费标准</h1> -->
			<!-- <zxbz></zxbz> -->
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterYue from "./zjzxf-counter_yue.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYue',  //api请求
					count:2  //积分消耗
				},
				title: "广东造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterYue,
			baseLayout,
			computing,
			zjzxfResult,
		}
	}
</script>

<style>
</style>
