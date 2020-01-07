<template>
	<view>
		<base-layout :detailId="102">
			<template v-slot:jsq>
				<csgdgckcf-counter-guo></csgdgckcf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<csgdgckcf-result></csgdgckcf-result>
			</template>
			<!-- <template v-slot:qfbz>
				<h1>设计费取费标准</h1>
			</template> -->
		</base-layout>
	</view>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csgdgckcfCounterGuo from "./csgdgckcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import csgdgckcfResult from "./csgdgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csgdgckcfGuo',  //api请求
					count:4  //积分消耗
				},
			}
		},
		methods: {
			
		},
		components:{
			csgdgckcfCounterGuo,
			baseLayout,
			computing,
			csgdgckcfResult,
		}
	}
</script>

<style>
</style>
