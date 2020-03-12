<template>
	<base-layout :detailId="1568">
		<template v-slot:jsq>
			<hjyxpjf-counter-zang></hjyxpjf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<result title="西藏环境影响评价费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterZang from "./hjyxpj_counter_zang.vue"
	import {hjyxpjData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjZang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjyxpjData)),
			}
		},
		components:{
			hjyxpjfCounterZang
		}
	}
</script>

<style>

</style>
