<template>
	<base-layout :detailId="1653">
		<template v-slot:jsq>
			<dzaqpjf-counter-hu></dzaqpjf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<dzaqpjf-result :title="title"></dzaqpjf-result>
		</template>
	</base-layout>
</template>

<script>
	import dzaqpjfCounterHu from "./dzaqpjf-counter_hu.vue"
	import dzaqpjfResult from "../dzaqpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzaqpjfHu',  //api请求
					count:4  //积分消耗
				},
				title:'上海'
			}
		},
		components:{
			dzaqpjfCounterHu,
			dzaqpjfResult
		}
	}
</script>

<style>
</style>
