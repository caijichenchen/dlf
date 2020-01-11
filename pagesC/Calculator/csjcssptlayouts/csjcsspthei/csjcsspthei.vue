<template>
	<base-layout :detailId="1694">
		<template v-slot:jsq>
			<csjcsspt-counter-hei></csjcsspt-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterHei from "./csjcsspt_counter_hei.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptHei',  //api请求
					count:1  //积分消耗
				},
				title:'黑龙江'
			}
		},
		components:{
			csjcssptCounterHei,
			csjcssptResult
		}
	}
</script>

<style>

</style>
