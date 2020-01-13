<template>
	<base-layout :detailId="266">
		<template v-slot:jsq>
			<zbdlf-counter-meng></zbdlf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-meng-result :title="title"></zbdlf-meng-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterMeng from "./zbdlf_counter_meng.vue"
	import zbdlfMengResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfMeng',  //api请求
					count:2  //积分消耗
				},
				title:'内蒙古'
			}
		},
		components:{
			zbdlfCounterMeng,
			zbdlfMengResult
		}
	}
</script>

<style>

</style>
