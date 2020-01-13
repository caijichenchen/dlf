<template>
	<base-layout :detailId="1597">
		<template v-slot:jsq>
			<zcpgsf-counter-gui></zcpgsf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterGui from "./zcpgsf_counter_gui.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfGui',  //api请求
					count:2  //积分消耗
				},
				title:'广西'
			}
		},
		components:{
			zcpgsfCounterGui,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
