<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<sczbfgf-counter-guo></sczbfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="生产准备费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sczbfgfCounterGuo from "./sczbfgf_counter_guo.vue"
	import {sczbfgfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sczbfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(sczbfgfGuoData)),
			}
		},
		components:{
			sczbfgfCounterGuo
		}
	}
</script>

<style>

</style>
