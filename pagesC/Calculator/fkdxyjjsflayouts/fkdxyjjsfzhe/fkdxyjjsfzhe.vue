<template>
	<base-layout :detailId="1043">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-zhe></fkdxyjjsf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterZhe from "./fkdxyjjsf_counter_zhe.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfZhe',  //api请求
					count:1  //积分消耗
				},
				title:'浙江'
			}
		},
		components:{
			fkdxyjjsfCounterZhe,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
