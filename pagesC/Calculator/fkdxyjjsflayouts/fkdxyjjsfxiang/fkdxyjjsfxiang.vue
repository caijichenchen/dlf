<template>
	<base-layout :detailId="1688">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-xiang></fkdxyjjsf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterXiang from "./fkdxyjjsf_counter_xiang.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfXiang',  //api请求
					count:1  //积分消耗
				},
				title:'湖南'
			}
		},
		components:{
			fkdxyjjsfCounterXiang,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
