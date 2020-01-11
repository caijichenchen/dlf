<template>
	<base-layout :detailId="1643">
		<template v-slot:jsq>
			<dzaqpjf-counter-hei></dzaqpjf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterHei from "./dzaqpjf-counter_hei.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfHei',  //api请求
					count:4  //积分消耗
				},
				title:'黑龙江'
			}
		},
		components:{
			dzaqpjfCounterHei,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
