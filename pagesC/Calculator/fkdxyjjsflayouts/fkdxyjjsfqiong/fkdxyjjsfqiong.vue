<template>
	<base-layout :detailId="274">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-qiong></fkdxyjjsf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterQiong from "./fkdxyjjsf_counter_qiong.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfQiong',  //api请求
					count:1  //积分消耗
				},
				title:'海南'
			}
		},
		components:{
			fkdxyjjsfCounterQiong,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
