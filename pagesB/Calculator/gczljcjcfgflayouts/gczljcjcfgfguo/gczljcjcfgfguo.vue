<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gczljcjcfgf-counter-guo></gczljcjcfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程质量检查检测费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gczljcjcfgfCounterGuo from "./gczljcjcfgf_counter_guo.vue"
	import {gczljcjcfgfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gczljcjcfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gczljcjcfgfGuoData)),
			}
		},
		components:{
			gczljcjcfgfCounterGuo
		}
	}
</script>

<style>

</style>
