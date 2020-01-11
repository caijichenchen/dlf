<template>
	<base-layout :detailId="1622">
		<template v-slot:jsq>
			<csjcsspt-counter-jin></csjcsspt-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterJin from "./csjcsspt_counter_jin.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptJin',  //api请求
					count:1  //积分消耗
				},
				title:'山西'
			}
		},
		components:{
			csjcssptCounterJin,
			csjcssptResult
		}
	}
</script>

<style>

</style>
