<template>
	<base-layout :detailId="1706">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-long></fkdxyjjsf-counter-long>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterLong from "./fkdxyjjsf_counter_long.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfLong',  //api请求
					count:1  //积分消耗
				},
				title:'甘肃'
			}
		},
		components:{
			fkdxyjjsfCounterLong,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
