<template>
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<hjyxpjf-counter-gui></hjyxpjf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterGui from "./hjyxpj_counter_gui.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterGui,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
