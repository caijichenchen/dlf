<template>
	<base-layout :detailId="1637">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-jilin></fkdxyjjsf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterJilin from "./fkdxyjjsf_counter_jilin.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfJilin',  //api请求
					count:1  //积分消耗
				},
				title:'吉林'
			}
		},
		components:{
			fkdxyjjsfCounterJilin,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
