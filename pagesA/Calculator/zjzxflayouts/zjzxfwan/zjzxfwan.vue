<template>
	<base-layout :detailId='905'>
		<template v-slot:jsq>
			<zjzxf-counter-wan :title="title"></zjzxf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterWan from "./zjzxf-counter_wan.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfWan',  //api请求
					count:2  //积分消耗
				},
				title: "安徽造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterWan,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
