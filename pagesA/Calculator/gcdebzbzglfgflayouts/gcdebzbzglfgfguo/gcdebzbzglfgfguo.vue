<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<gcdebzbzglfgf-counter-guo></gcdebzbzglfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程定额标准编制管理费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcdebzbzglfgfCounterGuo from "./gcdebzbzglfgf_counter_guo.vue"
	import {resultMixin} from "@/common/base/resultMixin"
	import {gcdebzbzglfgfData} from '@/common/resultData.js'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcdebzbzglfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(JSON.stringify(gcdebzbzglfgfData))
			}
		},
		components:{
			gcdebzbzglfgfCounterGuo
		}
	}
</script>

<style>

</style>
