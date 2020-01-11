<template>
	<base-layout :detailId="956">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-qian></fkdxyjjsf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterQian from "./fkdxyjjsf_counter_qian.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfQian',  //api请求
					count:1  //积分消耗
				},
				title: '贵州'
			}
		},
		components:{
			fkdxyjjsfCounterQian,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
