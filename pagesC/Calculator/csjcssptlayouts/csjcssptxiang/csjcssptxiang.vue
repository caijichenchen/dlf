<template>
	<base-layout :detailId="1780">
		<template v-slot:jsq>
			<csjcsspt-counter-xiang></csjcsspt-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterXiang from "./csjcsspt_counter_xiang.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptXiang',  //api请求
					count:1  //积分消耗
				},
				title:'湖南'
			}
		},
		components:{
			csjcssptCounterXiang,
			csjcssptResult
		}
	}
</script>

<style>

</style>
