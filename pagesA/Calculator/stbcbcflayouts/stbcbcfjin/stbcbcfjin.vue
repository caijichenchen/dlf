<template>
	<base-layout :detailId="1624">
		<template v-slot:jsq>
			<stbcbcf-counter-jin></stbcbcf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterJin from "./stbcbcf_counter_jin.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfJin',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterJin
		}
	}
</script>

<style>

</style>
