<template>
	<base-layout :detailId="1889">
		<template v-slot:jsq>
			<pppxmzx-counter-jin></pppxmzx-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<pppxmzx-result :title="title"></pppxmzx-result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterJin from "./pppxmzx_counter_jin.vue"
	import pppxmzxResult from "../pppxmzx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxJin',  //api请求
					count:2  //积分消耗
				},
				title:'山西'
			}
		},
		methods: {
			
		},
		components:{
			pppxmzxCounterJin,
			pppxmzxResult
		}
	}
</script>

<style>

</style>
