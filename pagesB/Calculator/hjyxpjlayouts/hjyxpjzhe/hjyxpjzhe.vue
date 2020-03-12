<template>
	<base-layout :detailId="1660">
		<template v-slot:jsq>
			<hjyxpjf-counter-zhe></hjyxpjf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省环境影响评价费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterZhe from "./hjyxpj_counter_zhe.vue"
	import {hjyxpjData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjZhe',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjyxpjData)),
			}
		},
		components:{
			hjyxpjfCounterZhe
		}
	}
</script>

<style>

</style>
