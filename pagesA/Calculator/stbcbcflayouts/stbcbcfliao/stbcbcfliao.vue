<template>
	<base-layout :detailId="1628">
		<template v-slot:jsq>
			<stbcbcf-counter-liao></stbcbcf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<result title="辽宁省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterLiao from "./stbcbcf_counter_liao.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfLiao',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterLiao
		}
	}
</script>

<style>

</style>
