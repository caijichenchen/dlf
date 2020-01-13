<template>
	<base-layout>
		<template v-slot:jsq>
			<zbdlf-counter-su></zbdlf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterSu from "./zbdlf_counter_su.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfSu',  //api请求
					count:2  //积分消耗
				},
				title: '江苏'
			}
		},
		components:{
			zbdlfCounterSu,
			zbdlfResult
		}
	}
</script>

<style>

</style>
