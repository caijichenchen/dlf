<template>
	<base-layout :detailId="1889">
		<template v-slot:jsq>
			<pppxmzx-counter-jin></pppxmzx-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省PPP项目咨询服务收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterJin from "./pppxmzx_counter_jin.vue"
	import {pppxmzxData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxJin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(pppxmzxData)),
			}
		},
		components:{
			pppxmzxCounterJin
		}
	}
</script>

<style>

</style>
