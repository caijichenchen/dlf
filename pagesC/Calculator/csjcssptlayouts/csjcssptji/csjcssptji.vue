<template>
	<base-layout :detailId="1598">
		<template v-slot:jsq>
			<csjcsspt-counter-ji></csjcsspt-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterJi from "./csjcsspt_counter_ji.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptJi',  //api请求
					count:1  //积分消耗
				},
				title:'河北'
			}
		},
		components:{
			csjcssptCounterJi,
			csjcssptResult
		}
	}
</script>

<style>

</style>
