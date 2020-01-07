<template>
	<view>
		<base-layout :detailId="102">
			<template v-slot:jsq>
				<slsdgckc-counter-guo></slsdgckc-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<slsdgckc-result></slsdgckc-result>
			</template>
			<!-- <template v-slot:qfbz>
				<h1>设计费取费标准</h1>
			</template> -->
		</base-layout>
	</view>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import slsdgckcCounterGuo from "./slsdgckc-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import slsdgckcResult from "./slsdgckc_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/slsdgckcGuo',  //api请求
					count:4  //积分消耗
				},
			}
		},
		methods: {
			
		},
		components:{
			slsdgckcCounterGuo,
			baseLayout,
			computing,
			slsdgckcResult,
		}
	}
</script>

<style>
</style>
