<template>
	<base-layout :detailId="1616">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-ji></fkdxyjjsf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterJi from "./fkdxyjjsf_counter_ji.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfJi',  //api请求
					count:1  //积分消耗
				},
				title:'河北省'
			}
		},
		components:{
			fkdxyjjsfCounterJi,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
