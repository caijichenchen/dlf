<template>
	<base-layout :detailId="1699">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-su></fkdxyjjsf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterSu from "./fkdxyjjsf_counter_su.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfSu',  //api请求
					count:1  //积分消耗
				},
				title:'江苏'
			}
		},
		components:{
			fkdxyjjsfCounterSu,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
