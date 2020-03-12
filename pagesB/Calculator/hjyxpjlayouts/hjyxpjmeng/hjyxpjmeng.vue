<template>
	<base-layout :detailId="1650">
		<template v-slot:jsq>
			<hjyxpjf-counter-meng></hjyxpjf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古环境影响评价费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterMeng from "./hjyxpj_counter_meng.vue"
	import {hjyxpjData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjMeng',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjyxpjData)),
			}
		},
		components:{
			hjyxpjfCounterMeng
		}
	}
</script>

<style>

</style>
