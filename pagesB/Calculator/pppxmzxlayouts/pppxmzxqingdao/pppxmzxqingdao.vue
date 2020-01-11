<template>
	<base-layout :detailId="1678">
		<template v-slot:jsq>
			<pppxmzx-counter-qingdao></pppxmzx-counter-qingdao>
			<computing v-bind:countData = "countData"></computing>
			<pppxmzx-result :title="title"></pppxmzx-result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterQingdao from "./pppxmzx_counter_qingdao.vue"
	import pppxmzxResult from "../pppxmzx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxQingdao',  //api请求
					count:2  //积分消耗
				},
				title:'青岛'
			}
		},
		methods: {
			
		},
		components:{
			pppxmzxCounterQingdao,
			pppxmzxResult
		}
	}
</script>

<style>

</style>
