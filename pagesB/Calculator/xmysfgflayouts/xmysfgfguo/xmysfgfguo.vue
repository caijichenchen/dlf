<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<xmysfgf-counter-guo></xmysfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="项目验收费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xmysfgfCounterGuo from "./xmysfgf_counter_guo.vue"
	import {xmysfgfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmysfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xmysfgfGuoData)),
			}
		},
		components:{
			xmysfgfCounterGuo
		}
	}
</script>

<style>

</style>
