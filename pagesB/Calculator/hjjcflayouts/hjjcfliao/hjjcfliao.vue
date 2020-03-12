<template>
	<base-layout :detailId="1629">
		<template v-slot:jsq>
			<hjjcf-counter-liao></hjjcf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省环境监测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterLiao from "./hjjcf_counter_liao.vue"
	import {hjjcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfLiao',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjjcfData)),
			}
		},
		components:{
			hjjcfCounterLiao
		}
	}
</script>

<style>

</style>
