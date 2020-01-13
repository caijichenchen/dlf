<template>
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<zbdlf-counter-gui></zbdlf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<zbdlf-result :titl="title"></zbdlf-result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterGui from "./zbdlf_counter_gui.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		components:{
			zbdlfCounterGui,
			zbdlfResult
		}
	}
</script>

<style>

</style>
