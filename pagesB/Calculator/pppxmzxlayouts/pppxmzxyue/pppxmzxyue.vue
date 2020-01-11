<template>
	<base-layout :detailId="132">
		<template v-slot:jsq>
			<pppxmzx-counter-yue></pppxmzx-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<pppxmzx-result :title="title"></pppxmzx-result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterYue from "./pppxmzx_counter_yue.vue"
	import pppxmzxResult from "../pppxmzx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxYue',  //api请求
					count:2  //积分消耗
				},
				title:'广东'
			}
		},
		methods: {
			
		},
		components:{
			pppxmzxCounterYue,
			pppxmzxResult
		}
	}
</script>

<style>

</style>
