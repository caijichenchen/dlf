<template>
	<view>
		<base-layout :detailId="1520">
			<template v-slot:jsq>
				<slsdqqgzkcf-counter-guo></slsdqqgzkcf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<slsdqqgzkcf-result></slsdqqgzkcf-result>
			</template>
			<!-- <template v-slot:qfbz>
				<h1>设计费取费标准</h1>
			</template> -->
		</base-layout>
	</view>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import slsdqqgzkcfCounterGuo from "./slsdqqgzkcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import slsdqqgzkcfResult from "./slsdqqgzkcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/slsdqqgzkcfGuo',  //api请求
					count:4  //积分消耗
				},
			}
		},
		methods: {
			
		},
		components:{
			slsdqqgzkcfCounterGuo,
			baseLayout,
			computing,
			slsdqqgzkcfResult,
		}
	}
</script>

<style>
</style>
