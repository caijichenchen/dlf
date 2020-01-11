<template>
	<base-layout :detailId="1648">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-meng></fkdxyjjsf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<fkdxyjjsf-result :title="title"></fkdxyjjsf-result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterMeng from "./fkdxyjjsf_counter_meng.vue"
	import fkdxyjjsfResult from "../fkdxyjjsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfMeng',  //api请求
					count:1  //积分消耗
				},
				title:'内蒙古'
			}
		},
		components:{
			fkdxyjjsfCounterMeng,
			fkdxyjjsfResult
		}
	}
</script>

<style>

</style>
