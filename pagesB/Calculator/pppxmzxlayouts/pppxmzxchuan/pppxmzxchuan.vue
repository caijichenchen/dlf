<template>
	<base-layout :detailId="156"> 
		<template v-slot:jsq>
			<pppxmzx-counter-chuan></pppxmzx-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<pppxmzx-result :title="title"></pppxmzx-result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterChuan from "./pppxmzx_counter_chuan.vue"
	import pppxmzxResult from "../pppxmzx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxChuan',  //api请求
					count:2  //积分消耗
				},
				title:'四川'
			}
		},
		methods: {
			
		},
		components:{
			pppxmzxCounterChuan,
			pppxmzxResult
		}
	}
</script>

<style>

</style>
